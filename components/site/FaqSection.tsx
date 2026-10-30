import { FAQS } from "@/lib/faqs";

// Accordion built on <details>: works without JavaScript, and the shared name keeps one answer open at a time.
export default function FaqSection({ as: Heading = "h2", className = "" }: { as?: "h1" | "h2"; className?: string }) {
  return (
    <section className={`tp-faq-fit ${className}`.trim()}>
      <div className="container">
        <Heading className="tp-faq-fit-title text-center">
          Questions? We&apos;ve got{" "}
          <span className="tp-hero-fit-highlight">
            answers
            <svg className="tp-hero-fit-spark" width="40" height="36" viewBox="0 0 40 36" fill="none" aria-hidden="true">
              <path d="M6 4L10 16M22 2L14 18M36 18L18 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
            </svg>
            <svg className="tp-hero-fit-scribble" viewBox="0 0 520 40" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <path d="M4 14C120 8 300 6 430 12M50 22C200 16 380 20 512 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
            </svg>
          </span>
        </Heading>
        <div className="tp-faq-fit-list">
          {FAQS.map((faq, index) => (
            <details key={faq.question} className="tp-faq-fit-item" name="faq" open={index === 0}>
              <summary>
                <span>{faq.question}</span>
                <span className="tp-faq-fit-icon" aria-hidden="true"></span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
        <p className="tp-faq-fit-more text-center">
          Still have a question? <a href="/contact">Send us a message</a>
        </p>
      </div>
    </section>
  );
}
