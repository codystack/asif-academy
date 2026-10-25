import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/config";
import { logTraffic } from "@/lib/traffic";
import AuthBanner from "../AuthBanner";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title: `Create an Account — ${SITE_NAME}`,
};

export default async function RegisterPage() {
  await logTraffic("register");

  return (
    <>
      {/* login area start */}
      <section className="tp-login-area">
        <div className="tp-login-register-box d-flex align-items-center">
          <AuthBanner />
          <div className="tp-login-register-wrapper d-flex justify-content-center align-items-center">
            <div className="tp-login-from-box tp-contact-form">
              <div className="tp-login-from-heading text-center">
                <h4 className="tp-login-from-title">Create an Account</h4>
                <p>
                  Already have an account? <a href="/login"> Sign In</a>
                </p>
              </div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
      {/* login area end */}
    </>
  );
}
