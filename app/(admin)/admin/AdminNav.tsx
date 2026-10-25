"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/orders", label: "Payments" },
  { href: "/admin/traffic", label: "Traffic" },
  { href: "/admin/abandoned", label: "Abandoned" },
];

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="site-nav">
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : undefined}>
          {link.label}
        </Link>
      ))}
      {/* Plain link: a prefetch must never hit the logout handler. */}
      <a href="/admin/logout">Logout</a>
    </nav>
  );
}
