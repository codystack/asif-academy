"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { addStudent, findStudent } from "@/lib/data";
import { timestamp } from "@/lib/format";
import { setSession } from "@/lib/session";

export type AuthState = { error: string | null; name?: string; email?: string };

const STUDENT_COOKIE = "aa_student";

export async function login(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const student = await findStudent(email);
  if (!student || !(await bcrypt.compare(password, student.password_hash))) {
    return { error: "Incorrect email or password." };
  }
  await setSession(STUDENT_COOKIE, { email: student.email, name: student.name });
  redirect("/courses");
}

export async function register(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm_password") ?? "");
  const fail = (error: string) => ({ error, name, email });

  if (!name || !email || !password) return fail("Please fill in your name, email, and password.");
  if (password !== confirm) return fail("Passwords do not match.");
  if (password.length < 6) return fail("Password must be at least 6 characters.");
  if (await findStudent(email)) return fail("An account with that email already exists.");

  await addStudent({ name, email, password_hash: await bcrypt.hash(password, 10), created_at: timestamp() });
  await setSession(STUDENT_COOKIE, { email, name });
  redirect("/courses");
}
