import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SLOGAN, SITE_URL } from "./config";

// Public address used in canonical links, the sitemap and share previews. Falls back to the live domain
// so local builds never advertise localhost to search engines.
export const SITE_ORIGIN = (SITE_URL ?? "https://www.asiffashionacademy.com").replace(/\/+$/, "");

export const OG_IMAGE = { url: "/assets/img/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME };

export const CONTACT = {
  email: "hello@asiffashionacademy.com",
  telephone: "+44 7786 235293",
  locality: "Milton Keynes",
  country: "GB",
};

// Metadata for a public page: title, description, canonical URL and matching share-preview tags.
// Pages pass only their own title; the layout's template adds " | Asif Fashion Academy".
export function pageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
}: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const shareTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — ${SITE_SLOGAN}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      url: path,
      title: shareTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Renders a schema.org object for search engines. "<" is escaped so text can't close the script tag.
export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  );
}
