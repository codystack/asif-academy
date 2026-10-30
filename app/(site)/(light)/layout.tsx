import SiteHeader from "@/components/site/SiteHeader";

// Pages with the light header (home, contact, enrol, pricing).
export default function LightLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader light />
      <main>{children}</main>
    </>
  );
}
