import { PROGRAMMES, SIP_AND_SEW, type Programme } from "./programmes";

// Course descriptions for the courses page. Fees, length and payment links come from lib/programmes.ts,
// so this page and the pricing page always agree.

export type Course = {
  programme: Programme;
  tagline: string;
  paragraphs: string[];
  idealFor?: string;
  listTitle?: string;
  skills?: string[];
  image: string;
  imageAlt: string;
};

const programme = (id: string) => {
  const found = [...PROGRAMMES, SIP_AND_SEW].find((p) => p.id === id);
  if (!found) throw new Error(`Unknown programme: ${id}`);
  return found;
};

export const COURSES: Course[] = [
  {
    programme: programme("beginners-sewing-course"),
    tagline: "Start with the fundamentals.",
    paragraphs: [
      "Designed for students with little or no sewing experience, this course introduces the essential techniques needed to begin sewing confidently.",
      "Students are guided through the fundamentals of machine operation, sewing tools, fabric handling and basic garment techniques. The focus is on building a strong foundation through practical learning and achievable projects.",
    ],
    idealFor: "Complete beginners and sewing enthusiasts.",
    listTitle: "Students will develop skills in:",
    skills: [
      "Sewing machine operation and basic maintenance.",
      "Understanding essential sewing tools.",
      "Fabric preparation and handling.",
      "Basic stitching and sewing techniques.",
      "Simple alterations and introductory projects.",
    ],
    image: "/assets/img/IMG_0122.JPG",
    imageAlt: "A student working at a sewing machine",
  },
  {
    programme: programme("intensive-fashion-training"),
    tagline: "Develop your technique. Expand your capabilities.",
    paragraphs: [
      "For students ready to build on their foundational skills, intensive training offers a more focused learning experience.",
      "Through structured lessons and practical garment-making exercises, students work towards stronger construction skills, improved finishing and a deeper understanding of the sewing process.",
    ],
    idealFor: "Students with basic sewing knowledge who are ready to progress.",
    listTitle: "Areas of development may include:",
    skills: [
      "Garment construction techniques.",
      "Pattern preparation and fabric cutting.",
      "Sewing accuracy and finishing.",
      "Garment fitting and adjustments.",
      "More complex practical projects.",
    ],
    image: "/assets/img/IMG_0128.JPG",
    imageAlt: "A student sewing with a pattern guide beside the machine",
  },
  {
    programme: programme("advanced-training-masterclass"),
    tagline: "Refine your craft. Elevate your standards.",
    paragraphs: [
      "For learners looking to develop more sophisticated techniques, advanced training can provide an opportunity to explore garment construction in greater depth.",
      "The focus may include complex garment details, precision finishing, design development and techniques used in bespoke fashion.",
    ],
    idealFor: "Experienced beginners, developing sewists and aspiring professionals, subject to course prerequisites.",
    image: "/assets/img/IMG_0132.JPG",
    imageAlt: "The instructor teaching at the whiteboard",
  },
  {
    programme: SIP_AND_SEW,
    tagline: "A creative introduction to the world of sewing.",
    paragraphs: [
      "Sip & Sew is AFA's beginner-friendly workshop concept, designed to introduce participants to sewing in a relaxed, practical and engaging setting.",
      "Participants can explore the basics of operating a sewing machine, learn introductory techniques and experience the satisfaction of making or altering something themselves.",
      "It is an opportunity to learn something new, meet like-minded creatives and discover the possibilities of working with fabric.",
    ],
    image: "/assets/img/IMG_0124.JPG",
    imageAlt: "Guests learning to sew at a Sip & Sew workshop",
  },
];
