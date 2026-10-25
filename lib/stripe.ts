import "server-only";
import { STRIPE_SECRET_KEY } from "./config";

// Minimal Stripe REST client covering the two Checkout calls this site makes.

export type CheckoutSession = {
  id: string;
  url: string | null;
  payment_status: "paid" | "unpaid" | "no_payment_required";
};

async function stripeRequest<T>(method: "GET" | "POST", path: string, params?: Record<string, string>): Promise<T> {
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params ? new URLSearchParams(params) : undefined,
    cache: "no-store",
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(`Stripe ${method} ${path} failed: ${json?.error?.message ?? res.status}`);
  }
  return json as T;
}

export function createCheckoutSession(options: {
  name: string;
  description: string;
  unitAmount: number;
  successUrl: string;
  cancelUrl: string;
  metadata: Record<string, string>;
}) {
  const params: Record<string, string> = {
    "payment_method_types[0]": "card",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][unit_amount]": String(options.unitAmount),
    "line_items[0][price_data][product_data][name]": options.name,
    "line_items[0][price_data][product_data][description]": options.description,
    "line_items[0][quantity]": "1",
    mode: "payment",
    success_url: options.successUrl,
    cancel_url: options.cancelUrl,
  };
  for (const [key, value] of Object.entries(options.metadata)) {
    params[`metadata[${key}]`] = value;
  }
  return stripeRequest<CheckoutSession>("POST", "checkout/sessions", params);
}

export function retrieveCheckoutSession(sessionId: string) {
  return stripeRequest<CheckoutSession>("GET", `checkout/sessions/${encodeURIComponent(sessionId)}`);
}
