import CarouselArrows from "./CarouselArrows";
import Highlight from "./Highlight";
import { COURSES } from "@/lib/courses";

// Line icons (24px grid) for each course card, in COURSES order.
const ICONS = [
  // Scissors: Beginners Sewing Course
  <g key="scissors">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
  </g>,
  // Ruler: Intensive Fashion Training
  <g key="ruler">
    <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
    <path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2" />
  </g>,
  // Garment: Advanced Training / Masterclass
  <path
    key="shirt"
    d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
  />,
  // Glass: Sip & Sew
  <path key="glass" d="M8 22h8M7 10h10M12 15v7M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />,
];

// Home page section after the hero: one card per course, joined to the hero by a zipper edge.
export default function CoursePicker() {
  return (
    <section className="tp-picker-fit">
      <div className="tp-picker-fit-zip" aria-hidden="true">
        {/* Open end: the two halves of the zipper spread apart towards the left edge */}
        <svg className="tp-picker-fit-open" height="140" viewBox="0 0 260 140" preserveAspectRatio="xMaxYMid slice">
          <defs>
            <pattern id="tp-zip-top" width="18" height="140" patternUnits="userSpaceOnUse">
              <rect x="1" y="57" width="8" height="15" rx="2.5" />
            </pattern>
            <pattern id="tp-zip-bottom" width="18" height="140" patternUnits="userSpaceOnUse">
              <rect x="10" y="68" width="8" height="15" rx="2.5" />
            </pattern>
          </defs>
          <g transform="rotate(9 260 70)">
            <rect className="tp-picker-fit-tape" x="-40" y="52" width="300" height="18" />
            <rect x="-40" y="0" width="300" height="140" fill="url(#tp-zip-top)" />
          </g>
          <g transform="rotate(-9 260 70)">
            <rect className="tp-picker-fit-tape" x="-40" y="70" width="300" height="18" />
            <rect x="-40" y="0" width="300" height="140" fill="url(#tp-zip-bottom)" />
          </g>
        </svg>
        <svg className="tp-picker-fit-teeth" width="100%" height="44">
          <defs>
            <pattern id="tp-zip-teeth" width="18" height="44" patternUnits="userSpaceOnUse">
              <rect x="1" y="9" width="8" height="15" rx="2.5" />
              <rect x="10" y="20" width="8" height="15" rx="2.5" />
            </pattern>
          </defs>
          <rect className="tp-picker-fit-tape" x="0" y="4" width="100%" height="36" />
          <rect x="0" y="0" width="100%" height="44" fill="url(#tp-zip-teeth)" />
        </svg>
        <svg className="tp-picker-fit-slider" width="58" height="104" viewBox="0 0 58 104">
          <path d="M6 6h46a4 4 0 0 1 4 4v14c0 9-7 16-16 18H18C9 40 2 33 2 24V10a4 4 0 0 1 4-4Z" />
          <rect className="tp-picker-fit-pull" x="18" y="36" width="22" height="62" rx="11" />
          <rect className="tp-picker-fit-pull-hole" x="24" y="72" width="10" height="18" rx="5" />
        </svg>
      </div>
      <div className="container tp-about-fit-container">
        <div className="tp-picker-fit-head">
          <h2 className="tp-about-fit-heading">
            Pick a <Highlight>course</Highlight>
          </h2>
          <a href="/courses" className="tp-hero-fit-btn tp-hero-fit-btn-primary">
            All courses
          </a>
        </div>
        <div id="tp-picker-track" className="tp-picker-fit-track">
          {COURSES.map(({ programme, image, imageAlt }, index) => (
            <a
              key={programme.id}
              href={`/courses#${programme.id}`}
              className={`tp-picker-fit-card tp-about-fit-stat-${index + 1}`}
            >
              <span className={`tp-about-fit-step-num tp-about-fit-stat-${index + 1}`}>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[index]}
                </svg>
              </span>
              <h3>{programme.name}</h3>
              <p>{programme.summary}</p>
              <div className="tp-picker-fit-img">
                <img src={image} alt={imageAlt} />
              </div>
            </a>
          ))}
        </div>
        <div className="tp-picker-fit-controls">
          <CarouselArrows trackId="tp-picker-track" label="course" />
        </div>
      </div>
    </section>
  );
}
