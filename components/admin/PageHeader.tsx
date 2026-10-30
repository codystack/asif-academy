// Title block at the top of each dashboard page; children render as actions on the right.
export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="admin-page-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="admin-page-description">{description}</p>}
      </div>
      {children && <div className="admin-page-actions">{children}</div>}
    </header>
  );
}
