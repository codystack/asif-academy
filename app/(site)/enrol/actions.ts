"use server";

import { addRegistration, findRegistration } from "@/lib/data";
import { timestamp } from "@/lib/format";
import { findPaidProgramme, isPreviewSession } from "@/lib/programmePayment";

export type EnrolValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  experience: string;
  goals: string;
};

export type EnrolState = { submitted: boolean; error: string | null; values?: EnrolValues };

export async function enrol(_prev: EnrolState, formData: FormData): Promise<EnrolState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();
  const values: EnrolValues = {
    first_name: get("first_name"),
    last_name: get("last_name"),
    email: get("email").toLowerCase(),
    phone: get("phone"),
    experience: get("experience"),
    goals: get("goals"),
  };

  // Re-verify with Stripe rather than trusting the hidden fields.
  const paid = await findPaidProgramme(get("session_id"), get("programme"));
  if (!paid) {
    return { submitted: false, error: "We couldn't verify your payment. Please contact us and we'll sort it out.", values };
  }
  if (!values.first_name || !values.last_name || !values.email || !values.phone || !values.experience) {
    return { submitted: false, error: "Please fill in your first and last name, email, phone number and sewing experience.", values };
  }

  if (isPreviewSession(paid.sessionId)) {
    return { submitted: true, error: null };
  }

  try {
    // Already registered for this payment (e.g. the form was submitted twice): treat as done.
    if (!(await findRegistration(paid.sessionId))) {
      await addRegistration({
        session_id: paid.sessionId,
        programme_id: paid.programmeId,
        programme_name: paid.programmeName,
        amount_paid: paid.amountPence / 100,
        ...values,
        created_at: timestamp(),
      });
    }
  } catch (error) {
    console.error("Could not save registration:", error);
    return { submitted: false, error: "Sorry, we couldn't save your registration. Please try again in a moment.", values };
  }
  return { submitted: true, error: null };
}
