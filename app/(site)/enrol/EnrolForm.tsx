"use client";

import { useActionState } from "react";
import { useFormToast } from "@/lib/toast";
import { enrol, type EnrolState } from "./actions";

const EXPERIENCE_LEVELS = ["Complete beginner", "Some experience", "Confident sewist"];

type Props = {
  sessionId: string;
  programmeId: string;
  defaults: { firstName: string; lastName: string; email: string; phone: string };
};

export default function EnrolForm({ sessionId, programmeId, defaults }: Props) {
  const [state, formAction, pending] = useActionState<EnrolState, FormData>(enrol, { submitted: false, error: null });
  const values = state.values;
  useFormToast(state, state.submitted ? "Registration complete. Welcome to the academy!" : null);

  if (state.submitted) {
    return (
      <div className="tp-enrol-done">
        <h2 className="tp-contact-fit-card-title">You&apos;re enrolled!</h2>
        <p>
          Thank you, your registration is complete. We&apos;ll be in touch by email with your class schedule and
          everything you need before your first session.
        </p>
        <a href="/" className="tp-contact-fit-btn">Back to home</a>
      </div>
    );
  }

  return (
    <>
      <h2 className="tp-contact-fit-card-title">Your details</h2>
      <form className="tp-contact-fit-form" action={formAction}>
        <input type="hidden" name="session_id" value={sessionId} />
        <input type="hidden" name="programme" value={programmeId} />
        <div className="tp-contact-fit-row">
          <label className="tp-contact-fit-field">
            <span>First name*</span>
            <input name="first_name" type="text" placeholder="First name" autoComplete="given-name" defaultValue={values?.first_name ?? defaults.firstName} required />
          </label>
          <label className="tp-contact-fit-field">
            <span>Last name*</span>
            <input name="last_name" type="text" placeholder="Last name" autoComplete="family-name" defaultValue={values?.last_name ?? defaults.lastName} required />
          </label>
        </div>
        <div className="tp-contact-fit-row">
          <label className="tp-contact-fit-field">
            <span>Email address*</span>
            <input name="email" type="email" placeholder="you@example.com" autoComplete="email" defaultValue={values?.email ?? defaults.email} required />
          </label>
          <label className="tp-contact-fit-field">
            <span>Phone number*</span>
            <input name="phone" type="tel" placeholder="07123 456789" autoComplete="tel" defaultValue={values?.phone ?? defaults.phone} required />
          </label>
        </div>
        <label className="tp-contact-fit-field">
          <span>Sewing experience*</span>
          <select name="experience" defaultValue={values?.experience ?? ""} required>
            <option value="" disabled>
              Choose your level
            </option>
            {EXPERIENCE_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>
        <label className="tp-contact-fit-field">
          <span>What would you like to achieve?</span>
          <textarea name="goals" placeholder="What you'd like to make, skills you want to build, any questions..." defaultValue={values?.goals}></textarea>
        </label>
        <button className="tp-contact-fit-btn" type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Complete enrolment"}
        </button>
      </form>
    </>
  );
}
