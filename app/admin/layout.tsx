import type { Metadata } from "next";
import AdminHead from "@/components/admin/AdminHead";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: { template: `%s | ${SITE_NAME}`, default: `Admin Dashboard | ${SITE_NAME}` },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AdminHead />
      <body>{children}</body>
    </html>
  );
}
