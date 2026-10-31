import type { Metadata } from "next";
import { JsonLd, pageMetadata } from "@/lib/seo";
import FaqSection from "@/components/site/FaqSection";
import { FAQS } from "@/lib/faqs";
import { logTraffic } from "@/lib/traffic";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about Asif Fashion Academy's sewing and fashion courses in Milton Keynes: experience needed, equipment, materials, payment and qualifications.",
  path: "/faq",
});

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
      <JsonLd data={faqSchema} />
      <FaqSection as="h1" className="is-page" />
    </>
  );
}
