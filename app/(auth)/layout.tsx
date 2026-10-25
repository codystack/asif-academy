import ThemeHead from "@/components/site/ThemeHead";
import ThemeScripts from "@/components/site/ThemeScripts";

// Student sign-in / registration: theme styles without the site header and footer.
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="no-js" lang="en">
      <ThemeHead />
      <body className="body-bg-3">
        {/* Preloader Start */}
        <div className="preloader">
          <div className="book">
            <div className="inner">
              <div className="left"></div>
              <div className="middle"></div>
              <div className="right"></div>
            </div>
            <ul>
              {Array.from({ length: 18 }, (_, i) => (
                <li key={i}></li>
              ))}
            </ul>
          </div>
        </div>
        {/* Preloader End */}
        <main>{children}</main>
        <ThemeScripts />
      </body>
    </html>
  );
}
