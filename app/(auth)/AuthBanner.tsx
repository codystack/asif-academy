import { SITE_NAME } from "@/lib/config";

export default function AuthBanner() {
  return (
    <div className="tp-login-register-banner-box p-relative" data-background="/assets/img/login-bg.jpg">
      <div className="tp-login-register-logo tp-header-logo">
        <a href="/">
          <img width="140" src="/assets/img/afa-logo-light.png" alt={`${SITE_NAME} Logo`} />
        </a>
      </div>
      <div className="tp-login-register-heading">
        <h3 className="tp-login-register-title">
          Learn to sew live, <br /> from anywhere.
        </h3>
      </div>
      <div className="tp-login-register-shape">
        <div className="shape-1">
          <img src="/assets/img/login/login-register-shape-2.png" alt="" />
        </div>
        <div className="shape-2">
          <img src="/assets/img/login/login-register-shape-1.png" alt="" />
        </div>
        <div className="shape-3">
          <img src="/assets/img/login/login-register-shape-3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
