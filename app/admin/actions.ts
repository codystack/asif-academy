"use server";

import { redirect } from "next/navigation";
import { adminLogin, adminLogout } from "@/lib/admin";

export type FormState = { message: string | null; error: string | null };

const field = (formData: FormData, name: string) => String(formData.get(name) ?? "").trim();

export async function login(_prev: FormState, formData: FormData): Promise<FormState> {
  if (await adminLogin(field(formData, "email"), field(formData, "password"))) {
    redirect("/admin");
  }
  return { message: null, error: "Login failed. Please check your credentials." };
}

export async function logout() {
  await adminLogout();
  redirect("/admin/login");
}
