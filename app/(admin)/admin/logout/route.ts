import { redirect } from "next/navigation";
import { adminLogout } from "@/lib/admin";

export async function GET() {
  await adminLogout();
  redirect("/admin/login");
}
