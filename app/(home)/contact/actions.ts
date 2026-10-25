"use server";

import { addMessage } from "@/lib/data";
import { timestamp } from "@/lib/format";

export type ContactState = { submitted: boolean; error: string | null };

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const course = String(formData.get("course") ?? "").trim();
  const subject = course ? `Course: ${course}` : "";
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { submitted: false, error: "Please fill in your name, email, and message." };
  }
  await addMessage({ name, email, subject, message, created_at: timestamp() });
  return { submitted: true, error: null };
}
