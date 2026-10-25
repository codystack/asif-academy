import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/config";
import { logTraffic } from "@/lib/traffic";
import AuthBanner from "../AuthBanner";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: `Sign In — ${SITE_NAME}`,
};

export default async function LoginPage() {
  await logTraffic("login");

  return (
    <>
      {/* login area start */}
      <div className="tp-login-area">
        <div className="tp-login-register-box d-flex align-items-center">
          <AuthBanner />
          <div className="tp-login-register-wrapper d-flex justify-content-center align-items-center">
            <div className="tp-login-from-box">
              <div className="tp-login-from-heading text-center">
                <h4 className="tp-login-from-title">Sign in</h4>
                <p>
                  Dont have an account? <a href="/register">Create Now</a>
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      {/* login area end */}
    </>
  );
}
