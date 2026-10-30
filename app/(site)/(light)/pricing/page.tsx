import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/config";
import { PROGRAMMES } from "@/lib/programmes";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `Pricing — ${SITE_NAME}`,
  description: "Course fees and schedules for Asif Fashion Academy's sewing and fashion training programmes in Milton Keynes.",
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="currentColor" />
    <path d="M6 10.2L8.6 12.8L14 7.4" stroke="var(--tp-pricing-check)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function PricingPage() {
  await logTraffic("pricing");

  return (
    <>
      <section className="tp-pricing-fit">
        <div className="container tp-pricing-fit-container">
          <div className="tp-pricing-fit-intro text-center">
            <span className="tp-hero-fit-badge">Clear, upfront course fees</span>
            <h1 className="tp-pricing-fit-title">
              Simple, honest,
              <br />
              {" "}transparent
              {" "}
              <span className="tp-hero-fit-highlight">
                pricing
                <svg className="tp-hero-fit-spark" width="40" height="36" viewBox="0 0 40 36" fill="none" aria-hidden="true">
                  <path d="M6 4L10 16M22 2L14 18M36 18L18 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                </svg>
                <svg className="tp-hero-fit-scribble" viewBox="0 0 520 40" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 14C120 8 300 6 430 12M50 22C200 16 380 20 512 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
            <p className="tp-pricing-fit-dec">
              Choose the programme that fits where you are today, from your very first stitch to advanced garment construction.
            </p>
          </div>
          <div className="tp-pricing-fit-grid">
            {PROGRAMMES.map((programme) => (
              <article key={programme.id} className={`tp-pricing-fit-card${programme.featured ? " is-featured" : ""}`}>
                <div className="tp-pricing-fit-card-head">
                  <h2 className="tp-pricing-fit-name">{programme.name}</h2>
                  <span className="tp-pricing-fit-level">{programme.tag}</span>
                </div>
                <p className="tp-pricing-fit-price">
                  {programme.price}
                  <span> / {programme.length}</span>
                </p>
                <p className="tp-pricing-fit-summary">{programme.summary}</p>
                <ul className="tp-pricing-fit-features">
                  {programme.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={programme.paymentLink ?? `/checkout?programme=${programme.id}`} className="tp-pricing-fit-btn">
                  Pay Now
                </a>
              </article>
            ))}
          </div>
          <div className="tp-pricing-fit-workshop">
            <div>
              <span className="tp-pricing-fit-level">Workshops</span>
              <h2 className="tp-pricing-fit-name">Sip &amp; Sew Workshops</h2>
              <p>One-off sewing workshops. Dates vary, and prices are confirmed for each event.</p>
            </div>
            <a href="/contact" className="tp-pricing-fit-btn">Ask about dates</a>
          </div>
        </div>
      </section>
      <section className="tp-pricing-compare">
        <div className="container tp-pricing-fit-container">
          <h2 className="tp-pricing-compare-title text-center">
            Compare our programmes
            <br />
            {" "}<span>side by side</span>
          </h2>
          <div className="tp-pricing-compare-table-wrap">
            <table className="tp-pricing-compare-table">
              <thead>
                <tr>
                  <th scope="col">Programme</th>
                  {PROGRAMMES.map((programme) => (
                    <th key={programme.name} scope="col">{programme.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Course fee</th>
                  {PROGRAMMES.map((programme) => <td key={programme.name}>{programme.price}</td>)}
                </tr>
                <tr>
                  <th scope="row">Length</th>
                  {PROGRAMMES.map((programme) => <td key={programme.name}>{programme.length}</td>)}
                </tr>
                <tr>
                  <th scope="row">Classes per week</th>
                  {PROGRAMMES.map((programme) => <td key={programme.name}>{programme.classesPerWeek}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
