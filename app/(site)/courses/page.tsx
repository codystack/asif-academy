import type { Metadata } from "next";
import Highlight from "@/components/site/Highlight";
import { SITE_NAME } from "@/lib/config";
import { COURSES } from "@/lib/courses";
import { SIP_AND_SEW } from "@/lib/programmes";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `Courses — ${SITE_NAME}`,
  description:
    "Sewing and fashion courses at Asif Fashion Academy in Milton Keynes: beginners sewing, intensive fashion training, advanced masterclasses and Sip & Sew workshops.",
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="currentColor" />
    <path d="M6 10.2L8.6 12.8L14 7.4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function CoursesPage() {
  await logTraffic("courses");

  return (
    <>
      <section className="tp-courses-fit-hero text-center">
        <div className="container">
          <span className="tp-hero-fit-badge">Courses &amp; Workshops</span>
          <h1 className="tp-about-fit-title">
            Learn the skill. <Highlight>Develop the craft.</Highlight>
          </h1>
          <p className="tp-about-fit-lead">
            From your very first stitch to more advanced garment construction, our programmes are designed to help you build
            technical ability, develop your creative vision and approach your work with confidence.
          </p>
        </div>
      </section>

      <section className="tp-courses-fit-list">
        <div className="container tp-about-fit-container">
          {COURSES.map((course, index) => {
            const { programme } = course;
            const isWorkshop = programme.id === SIP_AND_SEW.id;
            return (
              <article key={programme.id} id={programme.id} className={`tp-courses-fit-card tp-about-fit-stat-${index + 1}`}>
                <div className="tp-courses-fit-img">
                  <img src={course.image} alt={course.imageAlt} />
                </div>
                <div className="tp-courses-fit-body">
                  <div className="tp-courses-fit-head">
                    <span className={`tp-about-fit-step-num tp-about-fit-stat-${index + 1}`}>0{index + 1}</span>
                    <span className="tp-courses-fit-tag">{programme.tag}</span>
                  </div>
                  <h2>{programme.name}</h2>
                  <p className="tp-courses-fit-tagline">{course.tagline}</p>
                  {course.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  {course.idealFor && (
                    <p className="tp-courses-fit-ideal">
                      <strong>Ideal for:</strong> {course.idealFor}
                    </p>
                  )}
                  {course.skills && (
                    <>
                      <p className="tp-courses-fit-list-title">{course.listTitle}</p>
                      <ul className="tp-courses-fit-skills">
                        {course.skills.map((skill) => (
                          <li key={skill}>
                            <CheckIcon />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="tp-courses-fit-foot">
                    <p className="tp-courses-fit-price">
                      {programme.price}
                      <span>{isWorkshop ? " per workshop · Early bird £175" : ` · ${programme.length} · ${programme.features[1]}`}</span>
                    </p>
                    <div className="tp-courses-fit-actions">
                      <a href={programme.paymentLink ?? "/pricing"} className="tp-hero-fit-btn tp-hero-fit-btn-primary">
                        {isWorkshop ? "Reserve your spot" : "Enrol now"}
                      </a>
                      <a href="/contact" className="tp-hero-fit-btn tp-hero-fit-btn-outline">
                        Ask a question
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="tp-courses-fit-cta text-center">
        <div className="tp-about-fit-note d-none d-lg-block" aria-hidden="true">
          Your journey
          <br />
          starts here.
        </div>
        <div className="container">
          <span className="tp-hero-fit-badge">Not sure where to start?</span>
          <h2 className="tp-about-fit-title tp-about-fit-cta-title">
            Find the course that&apos;s <Highlight>right for you</Highlight>
          </h2>
          <p className="tp-about-fit-lead">
            Contact the academy with details of your experience and goals, and we can help you identify the most suitable
            available programme.
          </p>
          <div className="tp-courses-fit-bar">
            <p>Compare fees, lengths and class schedules side by side.</p>
            <div className="tp-courses-fit-bar-actions">
              <a href="/pricing" className="tp-courses-fit-bar-link">
                View pricing
              </a>
              <a href="/contact" className="tp-hero-fit-btn tp-hero-fit-btn-primary">
                Enquire About Courses
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
