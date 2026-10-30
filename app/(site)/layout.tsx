import type { Metadata } from "next";
import SiteDocument from "@/components/site/SiteDocument";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SLOGAN } from "@/lib/config";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_SLOGAN}`,
  description: SITE_DESCRIPTION,
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument>{children}</SiteDocument>;
}
