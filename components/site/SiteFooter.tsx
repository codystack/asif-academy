import { SITE_NAME } from "@/lib/config";

const LINK_GROUPS = [
  {
    title: "Learn",
    links: [
      { label: "All courses", href: "/courses" },
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
  {
    title: "Account",
    links: [
      { label: "Sign in", href: "/login" },
      { label: "Create account", href: "/register" },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "YouTube", href: "#" },
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
              <img width="120" src="/assets/img/afa-logo-light.png" alt={`${SITE_NAME} Logo`} />
            </a>
            <p className="tp-site-footer-dec">
              Practical fashion design and sewing classes in Milton Keynes, from your very first stitch to advanced garment construction.
            </p>
            <a href="/courses" className="tp-site-footer-btn">
              Find classes
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
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
          </nav>
        </div>
        <p className="tp-site-footer-wordmark" aria-hidden="true">Asif Fashion Academy</p>
        <div className="tp-site-footer-bottom">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
