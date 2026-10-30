import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Breadcrumb from "@/components/site/Breadcrumb";
import { SITE_NAME } from "@/lib/config";
import { getOrders, recordOrder, removeAbandonedCart, updateOrderStatus } from "@/lib/data";
import { timestamp } from "@/lib/format";
import { findPaidProgramme } from "@/lib/programmePayment";
import { retrieveCheckoutSession } from "@/lib/stripe";
import { clientIp, logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `Thank You — ${SITE_NAME}`,
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

  return (
    <>
      <Breadcrumb title="Enrollment Status" />

      <div className="tp-course-details-area z-1 pt-80 pb-110">
        <div className="container text-center" style={{ maxWidth: "640px" }}>
          {paymentStatus === "paid" ? (
            <>
              <h2 className="tp-section-title mb-20">You&apos;re enrolled!</h2>
              <p className="tp-section-dec fw-500 mb-40">
                Thank you — your enrollment is confirmed. Check your email for your live session schedule and access details.
              </p>
            </>
          ) : paymentStatus === "unpaid" ? (
            <>
              <h2 className="tp-section-title mb-20">Payment not completed</h2>
              <p className="tp-section-dec fw-500 mb-40">
                Your payment didn&apos;t go through. Please return to the pricing page and try again.
              </p>
            </>
          ) : (
            <>
              <h2 className="tp-section-title mb-20">We couldn&apos;t verify your payment</h2>
              <p className="tp-section-dec fw-500 mb-40">
                If you believe this is an error, please contact us and we&apos;ll sort it out.
              </p>
            </>
          )}
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a className="tp-btn tp-btn-xl" href="/pricing">
              View pricing
            </a>
            <a className="tp-btn tp-btn-border tp-btn-xl" href="/">
              Go home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
