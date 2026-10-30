// Questions shown on the FAQ and pricing pages, as supplied by the academy.

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "Do I need previous sewing experience?",
    answer:
      "No. Beginners' training is designed for students who are new to sewing. Other programmes may require previous experience.",
  },
  {
    question: "Do I need to bring my own sewing machine?",
    answer:
      "Equipment requirements depend on the course. Details will be provided before enrolment.",
  },
  {
    question: "Do I need to provide my own materials?",
    answer:
      "Material requirements and any included supplies will be confirmed for each programme.",
  },
  {
    question: "How do I know which course is right for me?",
    answer:
      "Contact the academy with details of your experience and goals, and we can help you identify the most suitable available programme.",
  },
  {
    question: "Are payment plans available?",
    answer:
      "Payment arrangements will be confirmed during enrolment. Please contact us to discuss the available options.",
  },
  {
    question: "Will I receive a qualification?",
    answer:
      "Any certificate, qualification or accreditation offered will be specified in the individual course information. Please enquire before enrolling if this is important to you.",
  },
];
