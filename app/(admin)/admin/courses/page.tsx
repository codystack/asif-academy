import type { Metadata } from "next";
import CourseForm from "./CourseForm";

export const metadata: Metadata = { title: "Manage Courses" };

export default function AdminCoursesPage() {
  return (
    <section className="container" style={{ padding: "3rem 0" }}>
      <div className="section-header">
        <div>
          <p className="eyebrow">Courses</p>
          <h1>Add a new course</h1>
        </div>
      </div>
      <CourseForm />
    </section>
  );
}
