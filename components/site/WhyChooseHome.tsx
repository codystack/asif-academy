import Highlight from "./Highlight";
import { REASONS } from "@/lib/reasons";

// Line icons (24px grid) for each reason, in REASONS order.
const ICONS = [
  // Studio: a professional learning environment
  <g key="studio">
    <path d="M3 21h18M5 21V8l7-5 7 5v13" />
    <path d="M9 21v-6h6v6" />
  </g>,
  // Hand: a hands-on approach
  <path
    key="hand"
    d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-2a2 2 0 0 0-4 0"
  />,
  // Steps: learning for different levels
  <path key="levels" d="M4 20h4v-5h4v-5h4V5h4" />,
  // Gem: a focus on quality
  <g key="quality">
    <path d="M6 3h12l4 6-10 12L2 9Z" />
    <path d="M2 9h20M12 21 8 9l4-6 4 6-4 12" />
  </g>,
  // People: a creative community
  <g key="community">
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6" />
  </g>,
];

// Home page version of "Why Choose AFA": heading row with a call to action, then icon cards.
export default function WhyChooseHome() {
  return (
    <section className="tp-why-fit">
      <div className="container tp-about-fit-container">
        <div className="tp-why-fit-head">
          <div>
            <span className="tp-hero-fit-badge">Why AFA</span>
            <h2 className="tp-about-fit-heading">
              Why Choose <Highlight>Asif Fashion Academy?</Highlight>
            </h2>
          </div>
          <a href="/courses" className="tp-hero-fit-btn tp-hero-fit-btn-primary">
            Explore Our Courses
          </a>
        </div>
        <div className="tp-why-fit-grid">
          {REASONS.map((reason, index) => (
            <article key={reason.title} className="tp-why-fit-card">
              <span className={`tp-why-fit-icon tp-about-fit-stat-${(index % 4) + 1}`}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[index]}
                </svg>
              </span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
