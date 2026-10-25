import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { SESSION_SECRET } from "./config";

// Signed-cookie sessions, replacing PHP's $_SESSION.
// Cookie value: base64url(JSON payload) + "." + HMAC-SHA256 signature.

const MAX_AGE = 60 * 60 * 24 * 7;

function secret(): string {
  if (!SESSION_SECRET) throw new Error("SESSION_SECRET is not set. Add it to .env.local.");
  return SESSION_SECRET;
}

function sign(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

export async function getSession<T>(name: string): Promise<T | null> {
  const raw = (await cookies()).get(name)?.value;
  if (!raw) return null;
  const [payload, signature] = raw.split(".");
  if (!payload || !signature) return null;
  const expected = Buffer.from(sign(payload));
  const given = Buffer.from(signature);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return data.exp > Date.now() ? (data.value as T) : null;
  } catch {
    return null;
  }
}

// Only callable from Server Actions and Route Handlers.
export async function setSession(name: string, value: unknown) {
  const payload = Buffer.from(JSON.stringify({ value, exp: Date.now() + MAX_AGE * 1000 })).toString("base64url");
  (await cookies()).set(name, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearSession(name: string) {
  (await cookies()).delete(name);
}
