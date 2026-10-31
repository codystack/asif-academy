import Link from "next/link";

// Newer/Older links for a Stripe list paged by cursor: ?after=<id> shows older items, ?before=<id> newer ones.
// hasMore is Stripe's flag for the direction that was requested.
export default function CursorPagination({
  basePath,
  ids,
  hasMore,
  after,
  before,
  label,
}: {
  basePath: string;
  ids: string[];
  hasMore: boolean;
  after?: string;
  before?: string;
  label: string;
}) {
  const first = ids[0];
  const last = ids[ids.length - 1];
  const newerHref = first && (before ? hasMore : Boolean(after)) ? `${basePath}?before=${first}` : null;
  const olderHref = last && (before ? true : hasMore) ? `${basePath}?after=${last}` : null;
  if (!newerHref && !olderHref) return null;

  return (
    <nav className="admin-pagination" aria-label={`${label} pages`}>
      <p>
        {ids.length} {label} on this page
      </p>
      <div className="admin-pagination-links">
        {newerHref ? <Link href={newerHref}>Newer</Link> : <span aria-disabled="true">Newer</span>}
        {olderHref ? <Link href={olderHref}>Older</Link> : <span aria-disabled="true">Older</span>}
      </div>
    </nav>
  );
}
