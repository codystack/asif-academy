import "server-only";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { ADMIN_EMAIL, ADMIN_PASSWORD_HASH } from "./config";
import { clearSession, getSession, setSession } from "./session";

const ADMIN_COOKIE = "aa_admin";

export async function isAdminLoggedIn() {
  return (await getSession<boolean>(ADMIN_COOKIE)) === true;
}

export async function requireAdmin() {
  if (!(await isAdminLoggedIn())) {
    redirect("/admin/login");
  }
}

export async function adminLogin(email: string, password: string) {
  const emailMatches = ADMIN_EMAIL !== "" && email.toLowerCase() === ADMIN_EMAIL;
  if (emailMatches && ADMIN_PASSWORD_HASH !== "" && (await bcrypt.compare(password, ADMIN_PASSWORD_HASH))) {
    await setSession(ADMIN_COOKIE, true);
    return true;
  }
  return false;
}

export async function adminLogout() {
  await clearSession(ADMIN_COOKIE);
}
