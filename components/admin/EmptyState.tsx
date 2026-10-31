// 24x24 stroke icons, drawn with currentColor.
const ICONS = {
  payments: <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM2 10h20M6 15h4" />,
  registrations: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19 8v6M22 11h-6" />,
  messages: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  traffic: <path d="M3 3v18h18M7 15l4-4 3 3 6-6" />,
  abandoned: <path d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M20 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />,
  error: <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0" />,
};

export type EmptyStateIcon = keyof typeof ICONS;

// Icon and message shown where a list or table has nothing to show.
export default function EmptyState({ icon, title, children }: { icon: EmptyStateIcon; title: string; children?: React.ReactNode }) {
  return (
    <div className={`admin-empty-state${icon === "error" ? " is-error" : ""}`}>
      <span className="admin-empty-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {ICONS[icon]}
        </svg>
      </span>
      <p className="admin-empty-title">{title}</p>
      {children && <p className="admin-empty-text">{children}</p>}
    </div>
  );
}
