import { SITE_NAME } from "@/lib/config";
import MainNav from "./MainNav";
import { SOCIAL_LINKS } from "./socialLinks";

// `light` applies the tp-home-light styles, which only target elements inside <header>.
export default function SiteHeader({ light = false }: { light?: boolean }) {
  return (
    <>
      {/* back to top start */}
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
      {/* back to top end */}
      {/* tp-offcanvas start */}
      <div className="tp-offcanvas">
        <div className="tp-offcanvas-header mb-30">
          <div className="tp-offcanvas-logo">
            <a href="/">
              <img data-width="80" src="/assets/img/afa-logo-dark.png" alt={`${SITE_NAME} Logo`} />
            </a>
          </div>
          <div className="tp-offcanvas-close">
            <button className="tp-offcanvas-close-button">
              <i className="fal fa-times"></i>
            </button>
          </div>
        </div>
        <div className="tp-offcanvas-menu mb-50">
          <nav className="tp-offcanvas-mobile-menu"></nav>
        </div>
        <div className="tp-offcanvas-info mb-50">
          <h3 className="tp-offcanvas-title">Information</h3>
          <span>
            <a href="tel:+447786235293">+44 7786 235293</a>
          </span>
          {" "}
          <span>
            <a href="mailto:hello@asiffashionacademy.com">hello@asiffashionacademy.com</a>
          </span>
          {" "}
          <span>Milton Keynes, UK and live online</span>
        </div>
        <div className="tp-offcanvas-social">
          <h3 className="tp-offcanvas-title">Follow Us</h3>
          <div className="tp-offcanvas-social-inner">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  {link.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="tp-offcanvas-overlay"></div>
      {/* tp-offcanvas end */}
      <header className={light ? "tp-home-light" : undefined}>
        {/* header-area-start */}
        <div id="header-sticky" className="tp-header-area tp-header-bg tp-header-lg-spacing tp-transparent">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-5">
                <div className="tp-header-logo">
                  <a href="/">
                    <img className="logo-1" width="110" src="/assets/img/afa-logo-light.png" alt={`${SITE_NAME} Logo`} />
                    {" "}
                    <img className="logo-2 d-none" width="110" src="/assets/img/afa-logo-dark.png" alt={`${SITE_NAME} Logo`} />
                  </a>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 d-none d-xl-block">
                <div className="tp-header-left d-flex align-items-center justify-content-center">
                  <div className="tp-main-menu tp-menu-dropdown">
                    <nav className="tp-mobile-menu-active">
                      <MainNav />
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-7">
                <div className="tp-header-option d-flex align-items-center justify-content-end">
                  <a href="/pricing" className="tp-btn ml-15 d-none d-sm-block">
                    Enroll Now
                    {" "}
                    <span className="ml-8">
                      <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70151 0.20932C5.83044 0.0752924 6.00528 0 6.18758 0C6.36989 0 6.54472 0.0752924 6.67365 0.20932L10.7987 4.49886C10.9276 4.63293 11 4.81474 11 5.00432C11 5.19389 10.9276 5.3757 10.7987 5.50977L6.67365 9.79931C6.54399 9.92954 6.37032 10.0016 6.19006 9.99997C6.00979 9.99834 5.83736 9.92316 5.70989 9.7906C5.58242 9.65805 5.51011 9.47874 5.50855 9.29129C5.50698 9.10384 5.57628 8.92325 5.70151 8.78841L8.65299 5.71924H0.687509C0.50517 5.71924 0.3303 5.64392 0.201367 5.50984C0.0724338 5.37577 0 5.19393 0 5.00432C0 4.81471 0.0724338 4.63286 0.201367 4.49879C0.3303 4.36471 0.50517 4.28939 0.687509 4.28939H8.65299L5.70151 1.22022C5.57263 1.08615 5.50022 0.904344 5.50022 0.714771C5.50022 0.525199 5.57263 0.343388 5.70151 0.20932Z" fill="white"></path>
                      </svg>
                    </span>
                  </a>
                  <div className="tp-header-toogle-wrapper d-xl-none ml-10">
                    <button className="tp-header-toogle">
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header-area-end */}
      </header>
    </>
  );
}
