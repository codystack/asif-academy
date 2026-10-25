"use client";

import { useActionState } from "react";
import { register, type AuthState } from "../actions";
import PasswordInput from "../PasswordInput";

export default function RegisterForm() {
  const [state, formAction, pending] = useActionState<AuthState, FormData>(register, { error: null });

  return (
    <>
      {state.error && (
        <p className="text-center" style={{ color: "#a12626" }}>
          {state.error}
        </p>
      )}
      <div className="tp-login-input-form">
        <form action={formAction}>
          <div className="row">
            <div className="col-12">
              <div className="tp-login-input p-relative">
                <label>Full Name</label>
                <input className="tp-input" name="name" type="text" placeholder="Type your name" defaultValue={state.name} key={`name-${state.name}`} required />
              </div>
            </div>
            <div className="col-12">
              <div className="tp-login-input p-relative">
                <label>Email</label>
                <input className="tp-input" name="email" type="email" placeholder="Type your email" defaultValue={state.email} key={`email-${state.email}`} required />
              </div>
            </div>
            <div className="col-12">
              <div className="tp-login-input p-relative">
                <label>Password</label>
                <PasswordInput name="password" />
              </div>
            </div>
            <div className="col-12">
              <div className="tp-login-input p-relative">
                <label>Confirm Password</label>
                <PasswordInput name="confirm_password" />
              </div>
            </div>
            <div className="col-12">
              <div className="tp-login-from-btn">
                <button className="tp-btn tp-btn-inner w-100 justify-content-center" type="submit" disabled={pending}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
