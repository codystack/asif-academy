"use client";

import { useActionState, useState } from "react";
import { login, type FormState } from "@/app/(admin)/admin/actions";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(login, { message: null, error: null });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {state.error && (
        <div className="alert" style={{ borderColor: "#f5b7b1", color: "#9c1a1a", background: "#fff2f2" }}>
          {state.error}
        </div>
      )}
      <form action={formAction}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required autoFocus />
        <label htmlFor="password">Password</label>
        <div className="password-field">
          <input id="password" name="password" type={showPassword ? "text" : "password"} required />
          <button
            type="button"
            className="password-toggle"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((shown) => !shown)}
          >
            {showPassword ? (
              <svg className="icon-eye-off" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.9 19.9 0 0 1 5.06-6.06M9.9 4.24A10.4 10.4 0 0 1 12 4c7 0 11 8 11 8a19.9 19.9 0 0 1-3.22 4.44M14.12 14.12a3 3 0 1 1-4.24-4.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 1l22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="icon-eye" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>
        <button className="btn-primary" type="submit" disabled={pending}>
          Sign in
        </button>
      </form>
    </>
  );
}
