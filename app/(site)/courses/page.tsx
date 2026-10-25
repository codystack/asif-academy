import type { Metadata } from "next";
import Breadcrumb from "@/components/site/Breadcrumb";
import { CohortIcon, DurationIcon, RatingStars } from "@/components/site/CourseIcons";
import { SITE_NAME } from "@/lib/config";
import { getCourses } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `All Courses — ${SITE_NAME}`,
  description:
    "Browse every live sewing and fashion design class at Asif Academy, compare price and duration, and enroll securely with Stripe.",
};

export default async function CoursesPage() {
  await logTraffic("courses");
  const courses = await getCourses();

  return (
    <>
      <Breadcrumb title="Courses" />

      {/* tp-courses-area-start */}
      <div className="tp-courses-area pt-135 pb-110">
        <div className="container">
          {courses.length === 0 ? (
            <div className="row">
              <div className="col-12 text-center">
                <p className="tp-section-dec fw-500">No classes are available yet. Please check back soon.</p>
              </div>
            </div>
          ) : (
            <div className="row">
              {courses.map((c, i) => {
                const detailHref = `/courses/${encodeURIComponent(c.id)}`;
                return (
                  <div key={c.id} className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                    <div className="tp-course-item p-relative fix mb-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay={`.${3 + (i % 4)}s`}>
                      <div className="tp-course-thumb">
                        <a href={detailHref}>
                          <img className="course-pink" src={`/assets/img/course/${c.image}`} alt={`${c.title} - Asif Academy live sewing class`} />
                        </a>
                      </div>
                      <div className="tp-course-content">
                        <div className="tp-course-tag mb-10">
                          <span>{c.level || "All levels"}</span>
                        </div>
                        <div className="tp-course-meta">
                          <span>
                            <span>
                              <DurationIcon />
                            </span>
                            {c.duration}
                          </span>
                          <span>
                            <span>
                              <CohortIcon />
                            </span>
                            Live cohort
                          </span>
                        </div>
                        <h2 className="tp-course-title">
                          <a href={detailHref}>{c.title}</a>
                        </h2>
                        <p className="tp-course-dec fw-500 mb-15">{c.summary}</p>
                        <div className="tp-course-rating d-flex align-items-end justify-content-between">
                          <div className="tp-course-rating-star">
                            <p>
                              5.0<span> /5</span>
                            </p>
                            <div className="tp-course-rating-icon">
                              <RatingStars />
                            </div>
                          </div>
                          <div className="tp-course-pricing home-2">
                            <span>{formatCurrency(c.price)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-course-btn d-flex gap-2">
                        <a href={detailHref}>View Class</a>
                        <a href={`/checkout?course_id=${encodeURIComponent(c.id)}`}>Enroll Now</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* tp-courses-area-end */}
    </>
  );
}
