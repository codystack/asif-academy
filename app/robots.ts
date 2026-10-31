import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/seo";

// Admin, checkout and post-payment pages are private or per-student, so crawlers skip them.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/checkout", "/enrol", "/success"] },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
