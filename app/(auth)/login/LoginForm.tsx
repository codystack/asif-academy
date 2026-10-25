"use client";

import { useActionState } from "react";
import { login, type AuthState } from "../actions";
import PasswordInput from "../PasswordInput";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState<AuthState, FormData>(login, { error: null });

  return (
    <>
      {state.error && (
        <p className="text-center" style={{ color: "#a12626" }}>
          {state.error}
        </p>
      )}
      <div className="tp-login-input-form tp-contact-form">
        <form action={formAction}>
          <div className="row">
            <div className="col-12">
              <div className="tp-login-input p-relative">
                <label>Email</label>
                <input className="tp-input" name="email" type="email" placeholder="Type your email" required />
              </div>
            </div>
            <div className="col-12">
              <div className="tp-login-input p-relative">
                <label>Password</label>
                <PasswordInput name="password" />
              </div>
            </div>
            <div className="col-12">
              <div className="tp-login-from-btn">
                <button className="tp-btn tp-btn-inner w-100 justify-content-center" type="submit" disabled={pending}>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
