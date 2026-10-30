import "server-only";

// Stripe settings: the secret key is used server-side only.
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? "sk_test_your_secret_key_here";

// Email address the admin signs in with. Login is refused while it is unset.
export const ADMIN_EMAIL = (process.env.ADMIN_EMAIL ?? "").trim().toLowerCase();
// bcrypt hash of the admin password (set it with `npm run admin:password`). Login is refused while it is unset.
export const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH ?? "";

export const SESSION_SECRET = process.env.SESSION_SECRET ?? "";

export const SITE_NAME = process.env.SITE_NAME ?? "Asif Fashion Academy";
export const SITE_SLOGAN = "The Art of Fashion. The Skill of Creation.";
export const SITE_DESCRIPTION =
  "Asif Fashion Academy (AFA) in Milton Keynes, UK offers practical fashion design and sewing classes, from your first stitch to advanced garment construction.";
export const SITE_URL = process.env.SITE_URL;

export const DATABASE_URL = process.env.DATABASE_URL;
