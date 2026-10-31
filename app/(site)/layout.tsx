import type { Metadata } from "next";
import SiteDocument from "@/components/site/SiteDocument";
import SiteHeader from "@/components/site/SiteHeader";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SLOGAN } from "@/lib/config";
import { OG_IMAGE, SITE_ORIGIN } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: { default: `${SITE_NAME} — ${SITE_SLOGAN}`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "fashion academy Milton Keynes",
    "sewing classes Milton Keynes",
    "sewing course for beginners",
    "fashion design course",
    "garment construction",
    "Sip and Sew workshop",
  ],
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_GB", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteDocument>
      <SiteHeader />
      <main>{children}</main>
    </SiteDocument>
  );
}
