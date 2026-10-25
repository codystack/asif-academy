import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Breadcrumb from "@/components/site/Breadcrumb";
import { SITE_NAME } from "@/lib/config";
import { removeAbandonedCart, updateOrderStatus } from "@/lib/data";
import { retrieveCheckoutSession } from "@/lib/stripe";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `Thank You — ${SITE_NAME}`,
};

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id: sessionId } = await searchParams;
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
                Your payment didn&apos;t go through. Please return to the class page and try again.
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
            <a className="tp-btn tp-btn-xl" href="/courses">
              Browse more classes
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
