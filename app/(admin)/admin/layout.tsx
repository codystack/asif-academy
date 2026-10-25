import { requireAdmin } from "@/lib/admin";
import AdminNav from "./AdminNav";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/admin">
            Admin Dashboard
          </a>
          <AdminNav />
        </div>
      </header>
      <main className="site-main">{children}</main>
    </>
  );
}
