import Link from "next/link";

// Page links for a server-paginated table: first, last, and up to two pages either side of the current one.
export default function Pagination({
  page,
  pageCount,
  total,
  pageSize,
  basePath,
}: {
  page: number;
  pageCount: number;
  total: number;
  pageSize: number;
  basePath: string;
}) {
  if (total === 0) return null;

  const href = (p: number) => (p === 1 ? basePath : `${basePath}?page=${p}`);
  const first = (page - 1) * pageSize + 1;
  const last = Math.min(page * pageSize, total);

  const pages: (number | "gap")[] = [];
  for (let p = 1; p <= pageCount; p++) {
    if (p === 1 || p === pageCount || Math.abs(p - page) <= 2) {
      pages.push(p);
    } else if (pages[pages.length - 1] !== "gap") {
      pages.push("gap");
    }
  }

  return (
    <nav className="admin-pagination" aria-label="Pagination">
      <p>
        Showing {first}–{last} of {total}
      </p>
      {pageCount > 1 && (
        <div className="admin-pagination-links">
          {page > 1 ? (
            <Link href={href(page - 1)} rel="prev">
              Previous
            </Link>
          ) : (
            <span aria-disabled="true">Previous</span>
          )}
          {pages.map((p, i) =>
            p === "gap" ? (
              <span key={`gap-${i}`} className="admin-pagination-gap">
                …
              </span>
            ) : (
              <Link key={p} href={href(p)} className={p === page ? "active" : undefined} aria-current={p === page ? "page" : undefined}>
                {p}
              </Link>
            ),
          )}
          {page < pageCount ? (
            <Link href={href(page + 1)} rel="next">
              Next
            </Link>
          ) : (
            <span aria-disabled="true">Next</span>
          )}
        </div>
      )}
    </nav>
  );
}
