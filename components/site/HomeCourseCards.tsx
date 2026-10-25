import type { Course } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { CohortIcon, DurationIcon, RatingStars } from "./CourseIcons";

const THUMB_CYCLE = ["course-thumb-1.jpg", "course-thumb-2.jpg", "course-thumb-3.jpg", "course-thumb-5.jpg"];

export default function HomeCourseCards({ courses }: { courses: Course[] }) {
  return courses.map((c, i) => {
    const detailHref = `/courses/${encodeURIComponent(c.id)}`;
    return (
      <div key={c.id} className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
        <div className="tp-course-item p-relative fix mb-30 wow fadeInUp" data-wow-duration=".9s" data-wow-delay={`.${3 + i}s`}>
          <div className="tp-course-thumb">
            <a href={detailHref}>
              <img
                className="course-pink"
                src={`/assets/img/course/${THUMB_CYCLE[i % THUMB_CYCLE.length]}`}
                alt={`${c.title} - Asif Academy live sewing class`}
              />
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
          <div className="tp-course-btn">
            <a href={detailHref}>Preview this Class</a>
          </div>
        </div>
      </div>
    );
  });
}
