import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/config";
import { addAbandonedCart, recordOrder } from "@/lib/data";
import { timestamp } from "@/lib/format";
import { findProgramme } from "@/lib/programmes";
import { createCheckoutSession } from "@/lib/stripe";
import { clientIp, logTraffic } from "@/lib/traffic";

type CheckoutItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  unitAmount: number;
  currency: string;
  cancelPath: string;
  metadata: Record<string, string>;
};

// Builds a GBP checkout for a pricing-page programme (?programme=). Unused while every programme has a paymentLink.
function findCheckoutItem(request: NextRequest): CheckoutItem | null {
  const programme = findProgramme(request.nextUrl.searchParams.get("programme") ?? "");
  return programme
    ? {
        id: programme.id,
        name: programme.name,
        description: programme.summary,
        price: programme.amountPence / 100,
        unitAmount: programme.amountPence,
        currency: "gbp",
        cancelPath: "/pricing",
        metadata: { programme_id: programme.id, programme_name: programme.name },
      }
    : null;
}

// GET /checkout?programme=... creates a Stripe Checkout session and redirects to it.
export async function GET(request: NextRequest) {
  const item = findCheckoutItem(request);
  if (!item) {
    redirect("/pricing");
  }

  await logTraffic("checkout");

  const baseUrl = (SITE_URL ?? request.nextUrl.origin).replace(/\/+$/, "");
  const session = await createCheckoutSession({
    name: item.name,
    description: item.description,
    currency: item.currency,
    unitAmount: item.unitAmount,
    successUrl: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${baseUrl}${item.cancelPath}`,
    metadata: item.metadata,
  });

  await recordOrder({
    session_id: session.id,
    course_id: item.id,
    title: item.name,
    price: item.price,
    status: "pending",
    created_at: timestamp(),
    ip: clientIp(request.headers),
  });
  await addAbandonedCart({
    session_id: session.id,
    course_id: item.id,
    title: item.name,
    price: item.price,
  });

  redirect(session.url ?? item.cancelPath);
}
