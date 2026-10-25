"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminLogin, requireAdmin } from "@/lib/admin";
import { addCourse, generateCourseId, removeAbandonedCart, updateOrderStatus, type OrderStatus } from "@/lib/data";

export type FormState = { message: string | null; error: string | null };

const field = (formData: FormData, name: string) => String(formData.get(name) ?? "").trim();

export async function login(_prev: FormState, formData: FormData): Promise<FormState> {
  if (await adminLogin(field(formData, "username"), field(formData, "password"))) {
    redirect("/admin");
  }
  return { message: null, error: "Login failed. Please check your credentials." };
}

// Server Actions are reachable without rendering the dashboard layout,
// so each one checks the admin session itself.

export async function createCourse(_prev: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();
  const title = field(formData, "title");
  const summary = field(formData, "summary");
  const description = field(formData, "description");
  const price = parseFloat(field(formData, "price")) || 0;
  const highlights = ["highlight1", "highlight2", "highlight3", "highlight4"]
    .map((name) => field(formData, name))
    .filter(Boolean);

  if (!title || !summary || !description || !price) {
    return { message: null, error: "Please complete all required fields." };
  }
  await addCourse({
    id: await generateCourseId(title),
    title,
    summary,
    description,
    duration: field(formData, "duration"),
    level: field(formData, "level"),
    price,
    image: field(formData, "image") || "course-thumb-1.jpg",
    highlights,
  });
  revalidatePath("/admin", "layout");
  return { message: "Course added successfully.", error: null };
}

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
