"use client";

import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  { href: "/about", label: "About", match: (p: string) => p === "/about" },
  { href: "/courses", label: "Courses", match: (p: string) => p.startsWith("/courses") },
  { href: "/faq", label: "Faq", match: (p: string) => p === "/faq" },
  { href: "/contact", label: "Contact Us", match: (p: string) => p === "/contact" },
];

export default function MainNav() {
  const pathname = usePathname();
  return (
    <ul>
      {LINKS.map((link) => (
        <li key={link.href}>
          <a href={link.href} className={link.match(pathname) ? "active" : ""}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
