"use server";

import { addMessage } from "@/lib/data";
import { timestamp } from "@/lib/format";

export type ContactValues = { name: string; email: string; course: string; message: string };
export type ContactState = { submitted: boolean; error: string | null; values?: ContactValues };

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const course = String(formData.get("course") ?? "").trim();
  const subject = course ? `Programme: ${course}` : "";
  const message = String(formData.get("message") ?? "").trim();

  // Sent back on errors so the form can refill what was typed.
  const values = { name, email, course, message };

  if (!name || !email || !message) {
    return { submitted: false, error: "Please fill in your name, email, and message.", values };
  }
  try {
    await addMessage({ name, email, subject, message, created_at: timestamp() });
  } catch (error) {
    console.error("Could not save contact message:", error);
    return { submitted: false, error: "Sorry, we couldn't send your message. Please try again in a moment.", values };
  }
  return { submitted: true, error: null };
}
