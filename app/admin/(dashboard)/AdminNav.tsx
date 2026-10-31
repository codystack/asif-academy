"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "../actions";

// 24x24 stroke icons, drawn with currentColor.
const ICONS = {
  overview: <path d="M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z" />,
  payments: <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM2 10h20M6 15h4" />,
  registrations: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19 8v6M22 11h-6" />,
  messages: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  abandoned: <path d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M20 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />,
  site: <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />,
  logout: <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />,
};

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const LINKS = [
  { href: "/admin", label: "Overview", icon: "overview" },
  { href: "/admin/orders", label: "Payments", icon: "payments" },
  { href: "/admin/registrations", label: "Registrations", icon: "registrations" },
  { href: "/admin/messages", label: "Messages", icon: "messages" },
  { href: "/admin/abandoned", label: "Abandoned", icon: "abandoned" },
] as const;

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="admin-nav">
      <div className="admin-nav-links">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : undefined}>
            <Icon name={link.icon} />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="admin-nav-links admin-nav-footer">
        <a href="/" target="_blank" rel="noopener">
          <Icon name="site" />
          <span>View site</span>
        </a>
        <form action={logout}>
          <button className="admin-logout" type="submit">
            <Icon name="logout" />
            <span>Logout</span>
          </button>
        </form>
      </div>
    </nav>
  );
}
