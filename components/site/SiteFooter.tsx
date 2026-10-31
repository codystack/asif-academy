import { SITE_NAME } from "@/lib/config";
import { SOCIAL_LINKS } from "./socialLinks";

const LINK_GROUPS = [
  {
    title: "Learn",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Academy",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="tp-site-footer">
      <div className="container tp-site-footer-container">
        <div className="tp-site-footer-top">
          <div className="tp-site-footer-about">
            <a href="/" className="tp-site-footer-logo">
              <img width="180" src="/assets/img/afa-logo-light.png" alt={`${SITE_NAME} Logo`} />
            </a>
          </div>
          <nav className="tp-site-footer-links" aria-label="Footer">
            {LINK_GROUPS.map((group) => (
              <div key={group.title} className="tp-site-footer-col">
                <h3 className="tp-site-footer-title">{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="tp-site-footer-col">
              <h3 className="tp-site-footer-title">Follow</h3>
              <div className="tp-site-footer-social">
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                      {link.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
        <div className="tp-site-footer-bottom">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
