import type { Metadata } from "next";
import AdminHead from "@/components/admin/AdminHead";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `Admin Login | ${SITE_NAME}`,
};

// Separate root layout so the login page gets its own <body> class
// and sits outside the admin session check.
export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AdminHead />
      <body className="admin-login-page">{children}</body>
    </html>
  );
}
