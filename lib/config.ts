import "server-only";
import path from "node:path";

// Stripe settings: the secret key is used server-side only.
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "sk_test_your_secret_key_here";

export const ADMIN_USERNAME = process.env.ADMIN_USERNAME ?? "admin";
export const ADMIN_PASSWORD_HASH =
  process.env.ADMIN_PASSWORD_HASH ?? "$2y$10$quoNfzHunle8MgnVpZ7AWujLu6GxduVyamVgSSbouAVqXKWY8tQuC";

export const SESSION_SECRET = process.env.SESSION_SECRET ?? "";

export const SITE_NAME = process.env.SITE_NAME ?? "Asif Academy";
export const SITE_SLOGAN = "The Art of Fashion. The Skill of Creation.";
export const SITE_DESCRIPTION =
  "Asif Fashion Academy (AFA) in Milton Keynes, UK offers practical fashion design and sewing classes, from your first stitch to advanced garment construction.";
export const SITE_URL = process.env.SITE_URL;

export const DATA_PATH = path.join(process.cwd(), "data");
export const COURSES_FILE = path.join(DATA_PATH, "courses.json");
export const ORDERS_FILE = path.join(DATA_PATH, "orders.json");
export const TRAFFIC_FILE = path.join(DATA_PATH, "traffic.json");
export const ABANDONED_FILE = path.join(DATA_PATH, "abandoned.json");
export const MESSAGES_FILE = path.join(DATA_PATH, "messages.json");
export const STUDENTS_FILE = path.join(DATA_PATH, "students.json");
