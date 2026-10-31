import "server-only";
import { STRIPE_SECRET_KEY } from "./config";

// Minimal Stripe REST client covering the Checkout calls this site makes.

export type CheckoutSession = {
  id: string;
  url: string | null;
  payment_status: "paid" | "unpaid" | "no_payment_required";
  amount_total?: number | null;
  currency?: string | null;
  metadata?: Record<string, string>;
  customer_details?: { email?: string | null; name?: string | null; phone?: string | null } | null;
};

// A session as listed for the admin, with its line items expanded for the product name when requested.
export type ListedSession = CheckoutSession & {
  created: number;
  customer_email: string | null;
  payment_link: string | null;
  line_items?: { data: { description: string | null }[] };
};

async function stripeRequest<T>(method: "GET" | "POST", path: string, params?: Record<string, string>): Promise<T> {
  // GET requests can't carry a body, so their params go in the query string.
  const query = method === "GET" && params ? `?${new URLSearchParams(params)}` : "";
  const res = await fetch(`https://api.stripe.com/v1/${path}${query}`, {
    method,
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: method === "POST" && params ? new URLSearchParams(params) : undefined,
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
  currency?: string;
  unitAmount: number;
  successUrl: string;
  cancelUrl: string;
  metadata: Record<string, string>;
}) {
  const params: Record<string, string> = {
    "payment_method_types[0]": "card",
    "line_items[0][price_data][currency]": options.currency ?? "usd",
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

// Checkout sessions (Payment Links and site checkout), newest first. "complete" sessions were paid; "expired" ones
// were opened and left unpaid. Pass at most one cursor: startingAfter pages to older sessions, endingBefore to newer
// ones, and hasMore refers to that direction. createdSince limits the list to sessions created at or after that time.
export async function listCheckoutSessions(options: {
  status: "complete" | "expired";
  limit: number;
  startingAfter?: string;
  endingBefore?: string;
  createdSince?: Date;
  expandLineItems?: boolean;
}) {
  const params: Record<string, string> = { status: options.status, limit: String(options.limit) };
  if (options.expandLineItems) params["expand[0]"] = "data.line_items";
  if (options.startingAfter) params.starting_after = options.startingAfter;
  else if (options.endingBefore) params.ending_before = options.endingBefore;
  if (options.createdSince) params["created[gte]"] = String(Math.floor(options.createdSince.getTime() / 1000));
  const list = await stripeRequest<{ data: ListedSession[]; has_more: boolean }>("GET", "checkout/sessions", params);
  return { sessions: list.data, hasMore: list.has_more };
}
