import type { Metadata } from "next";
import EnrolForm from "./EnrolForm";
import { SITE_NAME } from "@/lib/config";
import { findRegistration } from "@/lib/data";
import { findPaidProgramme, isPreviewSession } from "@/lib/programmePayment";
import { findProgramme } from "@/lib/programmes";
import { logTraffic } from "@/lib/traffic";

// Shows what was actually charged, which can be an early bird price rather than the listed one.
const formatPounds = (pence: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: pence % 100 ? 2 : 0 }).format(pence / 100);

// Stripe collects one name field; the first word prefills First name and the rest Last name.
function splitName(fullName: string) {
  const [firstName = "", ...rest] = fullName.trim().split(/\s+/);
  return { firstName, lastName: rest.join(" ") };
}

export const metadata: Metadata = {
  title: `Complete Your Enrolment — ${SITE_NAME}`,
  robots: { index: false },
};

// Reached from /success after a paid pricing-page programme or workshop; the session is re-checked with Stripe here.
export default async function EnrolPage({ searchParams }: { searchParams: Promise<{ session_id?: string; programme?: string }> }) {
  await logTraffic("enrol");
  const { session_id: sessionId, programme: programmeId } = await searchParams;
  const paid = await findPaidProgramme(sessionId, programmeId);
  const programme = paid && findProgramme(paid.programmeId);
  const alreadyRegistered = paid && !isPreviewSession(paid.sessionId) ? Boolean(await findRegistration(paid.sessionId)) : false;

  return (
    <section className="tp-contact-fit">
      <div className="container tp-contact-fit-container">
        <div className="tp-contact-fit-grid">
          <div className="tp-contact-fit-intro">
            <span className="tp-hero-fit-badge">{paid ? "Payment received" : "Enrolment"}</span>
            <h1 className="tp-contact-fit-title">
              Complete your
              <br />
              {" "}
              <span className="tp-hero-fit-highlight">
                enrolment
                <svg className="tp-hero-fit-spark" width="40" height="36" viewBox="0 0 40 36" fill="none" aria-hidden="true">
                  <path d="M6 4L10 16M22 2L14 18M36 18L18 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                </svg>
                <svg className="tp-hero-fit-scribble" viewBox="0 0 520 40" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 14C120 8 300 6 430 12M50 22C200 16 380 20 512 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
            {paid && programme ? (
              <>
                <p className="tp-contact-fit-dec">
                  Thank you for your payment. Tell us a little about yourself so we can prepare for your first class.
                </p>
                <div className="tp-enrol-plan">
                  <span className="tp-contact-fit-label">Your plan</span>
                  <p className="tp-enrol-plan-name">{programme.name}</p>
                  <ul>
                    <li>
                      <span>Amount paid</span>
                      <strong>{formatPounds(paid.amountPence)}</strong>
                    </li>
                    <li>
                      <span>Length</span>
                      <strong>{programme.length}</strong>
                    </li>
                    {programme.classesPerWeek && (
                      <li>
                        <span>Classes per week</span>
                        <strong>{programme.classesPerWeek}</strong>
                      </li>
                    )}
                  </ul>
                </div>
              </>
            ) : (
              <p className="tp-contact-fit-dec">
                This page is for students who have just paid for a programme. If you&apos;ve paid and are seeing this, please
                contact us with your payment receipt.
              </p>
            )}
          </div>
          <div className="tp-contact-fit-card">
            {!paid ? (
              <div className="tp-enrol-done">
                <h2 className="tp-contact-fit-card-title">We couldn&apos;t find your payment</h2>
                <p>Choose a programme on our pricing page, or get in touch if you&apos;ve already paid.</p>
                <a href="/pricing" className="tp-contact-fit-btn">View pricing</a>
                <a href="/contact" className="tp-enrol-link">Contact us</a>
              </div>
            ) : alreadyRegistered ? (
              <div className="tp-enrol-done">
                <h2 className="tp-contact-fit-card-title">You&apos;re already registered</h2>
                <p>We have your details for {paid.programmeName}. We&apos;ll be in touch by email before your first class.</p>
                <a href="/" className="tp-contact-fit-btn">Back to home</a>
              </div>
            ) : (
              <EnrolForm
                sessionId={paid.sessionId}
                programmeId={paid.programmeId}
                defaults={{ ...splitName(paid.name), email: paid.email, phone: paid.phone }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
