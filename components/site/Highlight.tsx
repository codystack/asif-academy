// Purple word with the orange spark and underline used in headings across the site.
export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="tp-hero-fit-highlight">
      {children}
      <svg className="tp-hero-fit-spark" width="40" height="36" viewBox="0 0 40 36" fill="none" aria-hidden="true">
        <path d="M6 4L10 16M22 2L14 18M36 18L18 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
      </svg>
      <svg className="tp-hero-fit-scribble" viewBox="0 0 520 40" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M4 14C120 8 300 6 430 12M50 22C200 16 380 20 512 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round"></path>
      </svg>
    </span>
  );
}
