// Programmes sold from the pricing page through Stripe Payment Links (or the site checkout as a fallback).
// Fees come from the academy's website content document, where they are still marked "Confirm".

export type Programme = {
  id: string;
  name: string;
  tag: string;
  price: string;
  amountPence: number;
  length: string;
  classesPerWeek: string;
  summary: string;
  features: string[];
  featured?: boolean;
  // Optional Stripe Payment Link. When set, Pay Now opens it instead of the site checkout.
  paymentLink?: string;
};

export const PROGRAMMES: Programme[] = [
  {
    id: "beginners-sewing-course",
    name: "Beginners Sewing Course",
    tag: "Beginner",
    price: "£500",
    amountPence: 50000,
    length: "2 months",
    classesPerWeek: "2",
    summary: "Start from your very first stitch and build the core skills every garment needs.",
    features: ["2 months", "Twice-weekly classes"],
    paymentLink: "https://buy.stripe.com/5kQdR82Ry0hEfoZ8kCdZ60E",
  },
  {
    id: "intensive-fashion-training",
    name: "Intensive Fashion Training",
    tag: "Intensive",
    price: "£1,000",
    amountPence: 100000,
    length: "3 months",
    classesPerWeek: "3",
    summary: "Build your technical ability faster with three classes every week.",
    features: ["3 months", "Three classes a week"],
    featured: true,
    paymentLink: "https://buy.stripe.com/5kQdR8fEk6G24Kl7gydZ60F",
  },
  {
    id: "advanced-training-masterclass",
    name: "Advanced Training / Masterclass",
    tag: "Advanced",
    price: "£1,500",
    amountPence: 150000,
    length: "3 months",
    classesPerWeek: "TBC",
    summary: "Take on more advanced garment construction and refine your creative vision.",
    features: ["3 months", "Schedule to be confirmed"],
    paymentLink: "https://buy.stripe.com/28E14m77OggCgt36cudZ60G",
  },
];

export function findProgramme(id: string): Programme | null {
  return PROGRAMMES.find((programme) => programme.id === id) ?? null;
}
