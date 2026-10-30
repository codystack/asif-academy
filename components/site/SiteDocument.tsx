import SiteFooter from "./SiteFooter";
import ThemeHead from "./ThemeHead";
import ThemeScripts from "./ThemeScripts";

// Shared <html> shell for the public site (replaces inc/header.php + inc/footer.php).
// The header is rendered by the nested layouts, which choose its variant.
export default function SiteDocument({ children }: { children: React.ReactNode }) {
  return (
    <html className="no-js" lang="en">
      <ThemeHead />
      <body className="body-bg">
        {children}
        <SiteFooter />
        <ThemeScripts />
      </body>
    </html>
  );
}
