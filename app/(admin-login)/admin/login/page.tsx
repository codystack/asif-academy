import { SITE_NAME } from "@/lib/config";
import LoginForm from "./LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="container" style={{ maxWidth: "520px", padding: "5rem 0" }}>
      <div className="admin-card">
        <img className="admin-logo text-center" width="140" src="/assets/img/afa-logo-dark.png" alt={`${SITE_NAME} Logo`} />
        <h3 className="mb-0 pb-0" style={{ marginBottom: "0px" }}>
          Welcome back
        </h3>
        <p style={{ marginBottom: "30px" }}>Sign in to continue to your account.</p>
        <LoginForm />
      </div>
    </div>
  );
}
