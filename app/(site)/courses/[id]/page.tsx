import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Breadcrumb from "@/components/site/Breadcrumb";
import { RatingStars } from "@/components/site/CourseIcons";
import { SITE_NAME } from "@/lib/config";
import { findCourse } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { logTraffic } from "@/lib/traffic";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = await findCourse((await params).id);
  if (!course) return {};
  return { title: `${course.title} — ${SITE_NAME}`, description: course.summary };
}

export default async function CoursePage({ params }: Props) {
  const course = await findCourse((await params).id);
  if (!course) {
    redirect("/courses");
  }
  await logTraffic("course_details");
  const enrollHref = `/checkout?course_id=${encodeURIComponent(course.id)}`;

  return (
    <>
      <Breadcrumb title={course.title} />

      {/* tp-course-details-area-start */}
      <div className="tp-course-details-area z-1 tp-course-details-bg p-relative pb-110">
        <div className="container container-1324">
          <div className="row">
            <div className="col-lg-8">
              <div className="tp-course-details-content mr-110 mb-50">
                <div className="tp-course-details-top-review-wrap d-flex align-items-center mb-15">
                  <div className="tp-course-details-top-review lh-1 mr-10">
                    <RatingStars />
                  </div>
                  <span className="tp-course-details-top-review-count">
                    5.0/ <span>5</span>
                  </span>
                </div>
                <h2 className="tp-course-details-title text-black mb-25">{course.title}</h2>
                <div className="tp-course-details-meta mb-70">
                  <span>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.6337 4.86764C10.6337 2.59354 8.79018 0.75 6.51608 0.75C4.24197 0.75 2.39844 2.59354 2.39844 4.86764C2.39844 7.14174 4.24197 8.98529 6.51608 8.98529C8.79018 8.98529 10.6337 7.14174 10.6337 4.86764Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12.2794 14.75C12.2794 11.5662 9.69847 8.98529 6.51471 8.98529C3.33095 8.98529 0.75 11.5662 0.75 14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Asif Karim
                  </span>
                  <a href="#">
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.09259 0.500008C5.00628 0.497332 6.85328 1.18996 8.27778 2.44444V14.5C6.85328 13.2455 5.00628 12.5529 3.09259 12.5556C1.87769 12.5556 1.27025 12.5556 1.00187 12.3838C0.840745 12.2807 0.774913 12.2148 0.67178 12.0537C0.5 11.7853 0.5 11.3065 0.5 10.3489V3.14695C0.5 2.03645 0.5 1.4812 0.926798 1.03111C1.3536 0.581029 1.79051 0.557804 2.66434 0.511356C2.80611 0.503819 2.9489 0.500008 3.09259 0.500008Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.4626 0.500008C11.5488 0.497332 9.70184 1.18996 8.27734 2.44444V14.5C9.70184 13.2455 11.5488 12.5529 13.4626 12.5556C14.6774 12.5556 15.2849 12.5556 15.5532 12.3838C15.7144 12.2807 15.7802 12.2148 15.8833 12.0537C16.0551 11.7853 16.0551 11.3065 16.0551 10.3489V3.14695C16.0551 2.03645 16.0551 1.4812 15.6284 1.03111C15.2015 0.581029 14.7646 0.557804 13.8908 0.511356C13.749 0.503819 13.6062 0.500008 13.4626 0.500008Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    English
                  </a>
                  <a href="#">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.64922 2.60016C3.06932 2.60016 2.59922 3.07027 2.59922 3.65016C2.59922 4.23006 3.06932 4.70016 3.64922 4.70016C4.22912 4.70016 4.69922 4.23006 4.69922 3.65016C4.69922 3.07027 4.22912 2.60016 3.64922 2.60016Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.958 6.90073C14.6602 7.68501 14.6753 8.86822 14.0309 9.70059C12.752 11.3523 11.3523 12.752 9.70057 14.0309C8.86822 14.6754 7.68501 14.6602 6.90073 13.9581C4.77147 12.0515 2.82155 10.0591 0.939672 7.86953C0.753612 7.65309 0.637272 7.38779 0.611162 7.10352C0.495662 5.84659 0.258362 2.22527 1.24179 1.24182C2.22529 0.258367 5.8466 0.495639 7.10352 0.611132C7.38779 0.637256 7.65309 0.753631 7.8696 0.939677C10.0591 2.82152 12.0515 4.77148 13.958 6.90073Z" stroke="currentColor" />
                      <path d="M11 8.90015L8.90001 11.0001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {course.level || "All levels"}
                  </a>
                  <a href="#">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.88911 0.5V3.30001M4.11133 0.5V3.30001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.72222 1.89996H6.27778C3.5541 1.89996 2.19227 1.89996 1.34613 2.72006C0.5 3.54017 0.5 4.8601 0.5 7.49998V8.89998C0.5 11.5398 0.5 12.8598 1.34613 13.6799C2.19227 14.5 3.5541 14.5 6.27778 14.5H7.72222C10.4459 14.5 11.8078 14.5 12.6538 13.6799C13.5 12.8598 13.5 11.5398 13.5 8.89998V7.49998C13.5 4.8601 13.5 3.54017 12.6538 2.72006C11.8078 1.89996 10.4459 1.89996 7.72222 1.89996Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0.5 6.10001H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {course.duration}
                  </a>
                </div>
                <div id="info">
                  <h2 className="tp-course-details-main-title mb-25">About This Class</h2>
                  <div className="tp-course-details-text mb-60">
                    <p>{course.description}</p>
                  </div>
                </div>
                <div id="curriculum">
                  <h2 className="tp-course-details-main-title mb-25">What You&apos;ll Learn</h2>
                  <div className="tp-course-details-list mb-60">
                    <ul>
                      {(course.highlights ?? []).map((highlight) => (
                        <li key={highlight}>
                          <i className="fa-solid fa-circle-check"></i> {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div id="instructors">
                  <h2 className="tp-course-details-main-title mb-30">Your Instructor</h2>
                  <div className="tp-course-details-instructor d-flex align-items-center">
                    <div className="tp-course-details-instructor-thumb mr-40">
                      <img src="/assets/img/team/thumb.jpg" alt="Asif Karim, Founder & Lead Instructor at Asif Academy" style={{ maxWidth: "110px", borderRadius: "12px" }} />
                    </div>
                    <div className="tp-course-details-instructor-content">
                      <h3>Asif Karim</h3>
                      <span>Founder &amp; Lead Instructor</span>
                      <p className="mt-10">
                        Asif has taught live sewing and pattern classes for years, guiding students from their first stitch to finished, wearable garments.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="faq" className="tp-faq tp-faq-2 mt-60">
                  <h2 className="tp-course-details-main-title mb-25">Faq</h2>
                  <div className="accordion" id="courseFaqAccordion">
                    <div className="tp-faq-item mb-30 active">
                      <h2 className="accordion-header">
                        <button className="tp-faq-button" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqOne" aria-expanded="true" aria-controls="courseFaqOne">
                          How do the live sessions work?
                        </button>
                      </h2>
                      <div id="courseFaqOne" className="tp-faq-collapse collapse show" data-bs-parent="#courseFaqAccordion">
                        <div className="tp-faq-body">
                          <p>
                            You&apos;ll join a small cohort over video at a scheduled weekly time, with your instructor guiding you through each project step by step.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tp-faq-item mb-30">
                      <h2 className="accordion-header">
                        <button className="tp-faq-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#courseFaqTwo" aria-expanded="false" aria-controls="courseFaqTwo">
                          What supplies do I need?
                        </button>
                      </h2>
                      <div id="courseFaqTwo" className="tp-faq-collapse collapse" data-bs-parent="#courseFaqAccordion">
                        <div className="tp-faq-body">
                          <p>A sewing machine and basic notions. A full supply list is emailed after you enroll.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-course-details-widget mb-40">
                <div className="tp-course-details-widget-thumb p-relative">
                  <img src={`/assets/img/course/${course.image}`} alt={course.title} />
                </div>
                <div className="tp-course-details-widget-content">
                  <div className="tp-course-details-widget-price">
                    <span>{formatCurrency(course.price)}</span>
                  </div>
                  <div className="tp-course-details-widget-btn">
                    <a className="active" href={enrollHref}>
                      Enroll Now
                    </a>
                    <p>Secure checkout with Stripe</p>
                  </div>
                  <div className="tp-course-details-widget-list">
                    <h2>This class includes:</h2>
                    <div className="tp-course-details-widget-list-item-wrapper">
                      <div className="tp-course-details-widget-list-item d-flex align-items-center justify-content-between">
                        <span>Format</span>
                        <span>Live video</span>
                      </div>
                      <div className="tp-course-details-widget-list-item d-flex align-items-center justify-content-between">
                        <span>Duration</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="tp-course-details-widget-list-item d-flex align-items-center justify-content-between">
                        <span>Skill Level</span>
                        <span>{course.level || "All levels"}</span>
                      </div>
                      <div className="tp-course-details-widget-list-item d-flex align-items-center justify-content-between">
                        <span>Language</span>
                        <span>English</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tp-course-details-area-end */}
    </>
  );
}
