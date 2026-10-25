export default function PasswordInput({ name }: { name: string }) {
  return (
    <div className="password-input p-relative">
      <input className="tp-input" name={name} type="password" placeholder="Password" required />
      <span className="tp-login-input-eye password-show-toggle">
        <i className="fa-regular fa-eye open-eye open-eye-icon"></i>
        <i className="fa-regular fa-eye-slash close-eye-icon"></i>
      </span>
    </div>
  );
}
