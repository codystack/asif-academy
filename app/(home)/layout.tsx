import type { Metadata } from "next";
import SiteDocument from "@/components/site/SiteDocument";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SLOGAN } from "@/lib/config";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_SLOGAN}`,
  description: SITE_DESCRIPTION,
};

// Pages with the light header (home, contact) use their own root layout because they need a different <body> class.
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument bodyClass="body-bg tp-home-light">{children}</SiteDocument>;
}
