"use client";

import { useActionState } from "react";
import { createCourse, type FormState } from "../actions";

export default function CourseForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(createCourse, { message: null, error: null });

  return (
    <>
      {state.message && (
        <div className="alert" style={{ borderColor: "#d3f5e2", color: "#214f3d", background: "#f0f9f1" }}>
          {state.message}
        </div>
      )}
      {state.error && (
        <div className="alert" style={{ borderColor: "#f5b7b1", color: "#9c1a1a", background: "#fff2f2" }}>
          {state.error}
        </div>
      )}
      <div className="admin-card">
        <form action={formAction}>
          <div className="field-group wide">
            <div>
              <label htmlFor="title">Course title</label>
              <input id="title" name="title" type="text" required />
            </div>
            <div>
              <label htmlFor="level">Skill level</label>
              <input id="level" name="level" type="text" placeholder="Beginner / Intermediate / Advanced" />
            </div>
          </div>
          <div className="field-group wide">
            <div>
              <label htmlFor="duration">Duration</label>
              <input id="duration" name="duration" type="text" placeholder="e.g. 8 weeks" />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" step="0.01" min="0" required />
            </div>
          </div>
          <label htmlFor="summary">Course summary</label>
          <textarea id="summary" name="summary" rows={3} required></textarea>
          <label htmlFor="description">Course description</label>
          <textarea id="description" name="description" rows={5} required></textarea>
          <div className="field-group wide">
            <div>
              <label htmlFor="highlight1">Highlight 1</label>
              <input id="highlight1" name="highlight1" type="text" />
            </div>
            <div>
              <label htmlFor="highlight2">Highlight 2</label>
              <input id="highlight2" name="highlight2" type="text" />
            </div>
          </div>
          <div className="field-group wide">
            <div>
              <label htmlFor="highlight3">Highlight 3</label>
              <input id="highlight3" name="highlight3" type="text" />
            </div>
            <div>
              <label htmlFor="highlight4">Highlight 4</label>
              <input id="highlight4" name="highlight4" type="text" />
            </div>
          </div>
          <label htmlFor="image">Image filename</label>
          <input id="image" name="image" type="text" placeholder="course-thumb-1.jpg" />
          <button className="btn-primary" type="submit" disabled={pending}>
            Add course
          </button>
        </form>
      </div>
    </>
  );
}
