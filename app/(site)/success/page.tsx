import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getOrders, recordOrder, removeAbandonedCart, updateOrderStatus } from "@/lib/data";
import { timestamp } from "@/lib/format";
import { findPaidProgramme } from "@/lib/programmePayment";
import { retrieveCheckoutSession } from "@/lib/stripe";
import { clientIp, logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: "Payment Status",
  robots: { index: false, follow: false },
};

// Paid programme and workshop payments redirect to /enrol before reaching these, so "paid" here means any other paid session.
const MESSAGES = {
  paid: {
    title: "Payment received",
    text: "Thank you, your payment is confirmed. We'll be in touch by email with everything you need.",
    primary: { href: "/", label: "Back to home" },
    secondary: { href: "/contact", label: "Contact us" },
  },
  unpaid: {
    title: "Payment not completed",
    text: "Your payment didn't go through. Please return to the pricing page and try again.",
    primary: { href: "/pricing", label: "View pricing" },
    secondary: { href: "/contact", label: "Contact us" },
  },
  error: {
    title: "We couldn't verify your payment",
    text: "If you've paid and are seeing this, please contact us with your payment receipt and we'll sort it out.",
    primary: { href: "/contact", label: "Contact us" },
    secondary: { href: "/pricing", label: "View pricing" },
  },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; programme?: string }>;
}) {
  const { session_id: sessionId, programme: programmeId } = await searchParams;
  if (!sessionId) {
    redirect("/");
  }

  let paymentStatus: string;
  try {
    paymentStatus = (await retrieveCheckoutSession(sessionId)).payment_status ?? "unknown";
    if (paymentStatus === "paid") {
      await updateOrderStatus(sessionId, "paid");
      await removeAbandonedCart(sessionId);
    }
  } catch {
    paymentStatus = "error";
  }

  await logTraffic("success");

  // Paid pricing-page programmes continue to the enrolment form. redirect() throws, so it stays outside the try.
  const paid = paymentStatus === "paid" ? await findPaidProgramme(sessionId, programmeId) : null;
  if (paid) {
    // Payment Link purchases skip /checkout, so no order exists for them yet.
    if (!(await getOrders()).some((order) => order.session_id === sessionId)) {
      await recordOrder({
        session_id: sessionId,
        course_id: paid.programmeId,
        title: paid.programmeName,
        price: paid.amountPence / 100,
        status: "paid",
        created_at: timestamp(),
        ip: clientIp(await headers()),
      });
    }
    redirect(`/enrol?session_id=${encodeURIComponent(sessionId)}&programme=${encodeURIComponent(paid.programmeId)}`);
  }

  const message = MESSAGES[paymentStatus === "paid" || paymentStatus === "unpaid" ? paymentStatus : "error"];

  return (
    <section className="tp-contact-fit">
      <div className="container">
        <div className="tp-contact-fit-card tp-success-fit-card">
          <div className="tp-enrol-done">
            <h1 className="tp-contact-fit-card-title">{message.title}</h1>
            <p>{message.text}</p>
            <a href={message.primary.href} className="tp-contact-fit-btn">
              {message.primary.label}
            </a>
            <a href={message.secondary.href} className="tp-enrol-link">
              {message.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
