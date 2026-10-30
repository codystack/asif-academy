import SiteHeader from "@/components/site/SiteHeader";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  );
}
