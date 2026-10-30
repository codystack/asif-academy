"use client";

import { useActionState } from "react";
import { enrol, type EnrolState } from "./actions";

const EXPERIENCE_LEVELS = ["Complete beginner", "Some experience", "Confident sewist"];
const MACHINE_OPTIONS = ["Yes", "No"];
const HEARD_ABOUT = ["Instagram", "TikTok", "Google search", "Friend or family", "Other"];

type Props = {
  sessionId: string;
  programmeId: string;
  defaults: { name: string; email: string; phone: string };
};

export default function EnrolForm({ sessionId, programmeId, defaults }: Props) {
  const [state, formAction, pending] = useActionState<EnrolState, FormData>(enrol, { submitted: false, error: null });
  const values = state.values;

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
      {state.error && <p className="tp-contact-fit-status tp-contact-fit-status-error">{state.error}</p>}
      <form className="tp-contact-fit-form" action={formAction}>
        <input type="hidden" name="session_id" value={sessionId} />
        <input type="hidden" name="programme" value={programmeId} />
        <div className="tp-contact-fit-row">
          <label className="tp-contact-fit-field">
            <span>Full name*</span>
            <input name="name" type="text" placeholder="Enter your full name" defaultValue={values?.name ?? defaults.name} required />
          </label>
          <label className="tp-contact-fit-field">
            <span>Email address*</span>
            <input name="email" type="email" placeholder="you@example.com" defaultValue={values?.email ?? defaults.email} required />
          </label>
        </div>
        <label className="tp-contact-fit-field">
          <span>Phone number*</span>
          <input name="phone" type="tel" placeholder="07123 456789" defaultValue={values?.phone ?? defaults.phone} required />
        </label>
        <fieldset className="tp-contact-fit-field">
          <legend>Sewing experience*</legend>
          <div className="tp-contact-fit-options">
            {EXPERIENCE_LEVELS.map((level) => (
              <label key={level} className="tp-contact-fit-option">
                <input type="radio" name="experience" value={level} defaultChecked={values?.experience === level} required />
                <span>{level}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="tp-contact-fit-field">
          <legend>Do you have your own sewing machine?</legend>
          <div className="tp-contact-fit-options">
            {MACHINE_OPTIONS.map((option) => (
              <label key={option} className="tp-contact-fit-option">
                <input type="radio" name="has_machine" value={option} defaultChecked={values?.has_machine === option} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="tp-contact-fit-field">
          <span>What would you like to achieve?</span>
          <textarea name="goals" placeholder="What you'd like to make, skills you want to build, any questions..." defaultValue={values?.goals}></textarea>
        </label>
        <div className="tp-contact-fit-row">
          <label className="tp-contact-fit-field">
            <span>Emergency contact name</span>
            <input name="emergency_name" type="text" placeholder="Full name" defaultValue={values?.emergency_name} />
          </label>
          <label className="tp-contact-fit-field">
            <span>Emergency contact phone</span>
            <input name="emergency_phone" type="tel" placeholder="Phone number" defaultValue={values?.emergency_phone} />
          </label>
        </div>
        <label className="tp-contact-fit-field">
          <span>How did you hear about us?</span>
          <select name="heard_about" defaultValue={values?.heard_about ?? ""}>
            <option value="" disabled>
              Choose one
            </option>
            {HEARD_ABOUT.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <button className="tp-contact-fit-btn" type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Complete enrolment"}
        </button>
      </form>
    </>
  );
}
