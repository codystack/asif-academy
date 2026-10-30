"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "./actions";

const initialState: ContactState = { submitted: false, error: null };

export default function ContactForm({ programmes }: { programmes: string[] }) {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);

  return (
    <>
      <h2 className="tp-contact-fit-card-title">Send us a message</h2>
      {state.submitted ? (
        <p className="tp-contact-fit-status tp-contact-fit-status-success">
          Thanks &mdash; your message is in! We&apos;ll reply within one working day.
        </p>
      ) : state.error ? (
        <p className="tp-contact-fit-status tp-contact-fit-status-error">{state.error}</p>
      ) : null}
      <form id="contact-form" className="tp-contact-fit-form" action={formAction}>
        <div className="tp-contact-fit-row">
          <label className="tp-contact-fit-field">
            <span>Your name*</span>
            <input name="name" type="text" placeholder="Enter your full name" required />
          </label>
          <label className="tp-contact-fit-field">
            <span>Email address*</span>
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
        </div>
        <label className="tp-contact-fit-field">
          <span>Programme</span>
          <select name="course" defaultValue="">
            <option value="" disabled>
              Choose a programme
            </option>
            {[...programmes, "Not sure yet"].map((programme) => (
              <option key={programme} value={programme}>
                {programme}
              </option>
            ))}
          </select>
        </label>
        <label className="tp-contact-fit-field">
          <span>Tell us about yourself*</span>
          <textarea name="message" placeholder="Your experience so far, what you'd like to make, any questions..." required></textarea>
        </label>
        <button className="tp-contact-fit-btn" type="submit" disabled={pending}>
          {pending ? "Sending..." : "Send message"}
        </button>
        <p className="tp-contact-fit-note">No commitment. We&apos;ll simply help you choose where to start.</p>
      </form>
    </>
  );
}
