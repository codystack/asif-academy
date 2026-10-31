import type { Metadata } from "next";
import { unstable_rethrow } from "next/navigation";
import CursorPagination from "@/components/admin/CursorPagination";
import PageHeader from "@/components/admin/PageHeader";
import { SITE_NAME } from "@/lib/config";
import { formatCurrency, formatUnixTime } from "@/lib/format";
import { listCheckoutSessions, type ListedSession } from "@/lib/stripe";

export const metadata: Metadata = { title: "Abandoned checkouts" };

const PAGE_SIZE = 20;

async function loadSessions(after?: string, before?: string) {
  try {
    const page = await listCheckoutSessions({
      status: "expired",
      limit: PAGE_SIZE,
      startingAfter: after,
      endingBefore: before,
      expandLineItems: true,
    });
    return { ...page, error: null };
  } catch (error) {
    // Let Next.js's own control-flow errors (such as dynamic rendering bailouts) through.
    unstable_rethrow(error);
    console.error("Could not load abandoned checkouts from Stripe:", error);
    return { sessions: [] as ListedSession[], hasMore: false, error: "Couldn't load checkouts from Stripe. Check STRIPE_SECRET_KEY." };
  }
}

// Stripe Checkout sessions (mostly Payment Links) that were opened and left to expire without payment.
// Stripe only knows who it was if they typed their email before leaving.
export default async function AdminAbandonedPage({ searchParams }: { searchParams: Promise<{ after?: string; before?: string }> }) {
  const { after, before } = await searchParams;
  const { sessions, hasMore, error } = await loadSessions(after, before);

  return (
    <>
      <PageHeader
        eyebrow="Abandoned checkouts"
        title="Checkouts that were not completed"
        description="People who opened a Stripe checkout and left without paying."
      />
      <div className="admin-card admin-table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Started</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th aria-label="Actions"></th>
              </tr>
            </thead>
            <tbody>
              {sessions.length === 0 && (
                <tr>
                  <td colSpan={5} className="admin-empty">
                    {error ?? "No abandoned checkouts."}
                  </td>
                </tr>
              )}
              {sessions.map((s) => {
                const email = s.customer_details?.email ?? s.customer_email;
                const product = s.line_items?.data[0]?.description ?? "your booking";
                return (
                  <tr key={s.id}>
                    <td className="nowrap">{formatUnixTime(s.created)}</td>
                    <td>
                      {email ? (
                        <>
                          {s.customer_details?.name && (
                            <>
                              <strong>{s.customer_details.name}</strong>
                              <br />
                            </>
                          )}
                          <a className="admin-link" href={`mailto:${email}`}>
                            {email}
                          </a>
                        </>
                      ) : (
                        <span className="admin-muted">Unknown</span>
                      )}
                    </td>
                    <td>{s.line_items?.data[0]?.description ?? "—"}</td>
                    <td className="nowrap">{formatCurrency((s.amount_total ?? 0) / 100)}</td>
                    <td className="admin-row-action">
                      {email && (
                        <a
                          className="btn-outline"
                          href={`mailto:${email}?subject=${encodeURIComponent(`Your ${product} booking with ${SITE_NAME}`)}`}
                        >
                          Follow up
                        </a>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <CursorPagination
          basePath="/admin/abandoned"
          ids={sessions.map((s) => s.id)}
          hasMore={hasMore}
          after={after}
          before={before}
          label="checkouts"
        />
      </div>
    </>
  );
}
