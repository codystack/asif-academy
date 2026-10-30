import type { Metadata } from "next";
import FaqSection from "@/components/site/FaqSection";
import { SITE_NAME } from "@/lib/config";
import { FAQS } from "@/lib/faqs";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = {
  title: `FAQ — ${SITE_NAME}`,
  description: "Answers to common questions about Asif Fashion Academy's sewing and fashion training programmes in Milton Keynes.",
};

// Lets search engines show the questions and answers directly in results.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default async function FaqPage() {
  await logTraffic("faq");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FaqSection as="h1" className="is-page" />
    </>
  );
}
