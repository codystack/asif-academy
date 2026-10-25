import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { SITE_NAME } from "@/lib/config";
import { getCourses } from "@/lib/data";
import { SOCIAL_LINKS } from "@/components/site/socialLinks";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `Contact Us — ${SITE_NAME}`,
  description: "Get in touch with Asif Fashion Academy about fashion design and sewing classes in Milton Keynes and online.",
};

const CONTACT_DETAILS = [
  {
    label: "Email",
    tone: "blue",
    value: "hello@asifacademy.com",
    href: "mailto:hello@asifacademy.com",
    icon: (
      <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 0v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1" />
    ),
  },
  {
    label: "Phone",
    tone: "purple",
    value: "+44 7786 235293",
    href: "tel:+447786235293",
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    ),
  },
  {
    label: "Where",
    tone: "pink",
    value: "Milton Keynes, UK and live online",
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
];

export default async function ContactPage() {
  await logTraffic("contact");
  const courses = await getCourses();

  return (
    <section className="tp-contact-fit">
      <div className="container tp-contact-fit-container">
        <div className="tp-contact-fit-grid">
          <div className="tp-contact-fit-intro">
            <span className="tp-hero-fit-badge">Replies within one working day</span>
            <h1 className="tp-contact-fit-title">
              Let&apos;s find
              <br />
              {" "}the right
              {" "}
              <span className="tp-hero-fit-highlight">
                class
                <svg className="tp-hero-fit-spark" width="40" height="36" viewBox="0 0 40 36" fill="none" aria-hidden="true">
                  <path d="M6 4L10 16M22 2L14 18M36 18L18 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                </svg>
                <svg className="tp-hero-fit-scribble" viewBox="0 0 520 40" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 14C120 8 300 6 430 12M50 22C200 16 380 20 512 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
            <p className="tp-contact-fit-dec">
              Tell us a little about your sewing experience and what you&apos;d like to make, and we&apos;ll suggest the right course, level and start date.
            </p>
            <ul className="tp-contact-fit-details">
              {CONTACT_DETAILS.map((item) => (
                <li key={item.label}>
                  <span className={`tp-contact-fit-icon tp-contact-fit-icon-${item.tone}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {item.icon}
                    </svg>
                  </span>
                  <div>
                    <span className="tp-contact-fit-label">{item.label}</span>
                    {item.href ? (
                      <a className="tp-contact-fit-value" href={item.href}>{item.value}</a>
                    ) : (
                      <span className="tp-contact-fit-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="tp-contact-fit-social">
              <span className="tp-contact-fit-label">Follow us</span>
              <div className="tp-contact-fit-social-links">
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                      {link.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="tp-contact-fit-card">
            <ContactForm courses={courses.map((course) => course.title)} />
          </div>
        </div>
      </div>
    </section>
  );
}
