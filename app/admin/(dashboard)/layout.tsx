import { requireAdmin } from "@/lib/admin";
import { SITE_NAME } from "@/lib/config";
import AdminNav from "./AdminNav";

// Every page in this group requires an admin session; /admin/login sits outside it.
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/admin">
          <img src="/assets/img/afa-logo-light.png" width="96" alt={`${SITE_NAME} Logo`} />
          <span>Admin</span>
        </a>
        <AdminNav />
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
