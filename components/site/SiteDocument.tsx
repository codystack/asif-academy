import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import ThemeHead from "./ThemeHead";
import ThemeScripts from "./ThemeScripts";

// Shared <html> shell for the public root layouts (replaces inc/header.php + inc/footer.php).
export default function SiteDocument({ bodyClass, children }: { bodyClass: string; children: React.ReactNode }) {
  return (
    <html className="no-js" lang="en">
      <ThemeHead />
      <body className={bodyClass}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ThemeScripts />
      </body>
    </html>
  );
}
