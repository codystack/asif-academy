"use server";

import { addRegistration, findRegistration } from "@/lib/data";
import { timestamp } from "@/lib/format";
import { findPaidProgramme } from "@/lib/programmePayment";

export type EnrolValues = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  has_machine: string;
  goals: string;
  emergency_name: string;
  emergency_phone: string;
  heard_about: string;
};

export type EnrolState = { submitted: boolean; error: string | null; values?: EnrolValues };

export async function enrol(_prev: EnrolState, formData: FormData): Promise<EnrolState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();
  const values: EnrolValues = {
    name: get("name"),
    email: get("email").toLowerCase(),
    phone: get("phone"),
    experience: get("experience"),
    has_machine: get("has_machine"),
    goals: get("goals"),
    emergency_name: get("emergency_name"),
    emergency_phone: get("emergency_phone"),
    heard_about: get("heard_about"),
  };

  // Re-verify with Stripe rather than trusting the hidden fields.
  const paid = await findPaidProgramme(get("session_id"), get("programme"));
  if (!paid) {
    return { submitted: false, error: "We couldn't verify your payment. Please contact us and we'll sort it out.", values };
  }
  if (await findRegistration(paid.sessionId)) {
    return { submitted: true, error: null };
  }
  if (!values.name || !values.email || !values.phone || !values.experience) {
    return { submitted: false, error: "Please fill in your name, email, phone number and sewing experience.", values };
  }

  await addRegistration({
    session_id: paid.sessionId,
    programme_id: paid.programmeId,
    programme_name: paid.programmeName,
    amount_paid: paid.amountPence / 100,
    ...values,
    created_at: timestamp(),
  });
  return { submitted: true, error: null };
}
