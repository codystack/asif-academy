"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminLogin, requireAdmin } from "@/lib/admin";
import { removeAbandonedCart, updateOrderStatus, type OrderStatus } from "@/lib/data";

export type FormState = { message: string | null; error: string | null };

const field = (formData: FormData, name: string) => String(formData.get(name) ?? "").trim();

export async function login(_prev: FormState, formData: FormData): Promise<FormState> {
  if (await adminLogin(field(formData, "email"), field(formData, "password"))) {
    redirect("/admin");
  }
  return { message: null, error: "Login failed. Please check your credentials." };
}

// Server Actions are reachable without rendering the dashboard layout,
// so each one checks the admin session itself.

const STATUSES: OrderStatus[] = ["pending", "paid", "cancelled"];

export async function setOrderStatus(formData: FormData) {
  await requireAdmin();
  const status = field(formData, "status") as OrderStatus;
  if (STATUSES.includes(status)) {
    await updateOrderStatus(field(formData, "session_id"), status);
  }
  revalidatePath("/admin/orders");
}

export async function removeAbandoned(formData: FormData) {
  await requireAdmin();
  await removeAbandonedCart(field(formData, "remove_session_id"));
  revalidatePath("/admin/abandoned");
}
