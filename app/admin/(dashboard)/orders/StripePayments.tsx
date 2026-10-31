import { unstable_rethrow } from "next/navigation";
import CursorPagination from "@/components/admin/CursorPagination";
import { getRegisteredSessionIds } from "@/lib/data";
import { formatCurrency, formatUnixTime } from "@/lib/format";
import { listCheckoutSessions, type ListedSession } from "@/lib/stripe";
import EmptyState from "@/components/admin/EmptyState";

const PAGE_SIZE = 20;

async function loadSessions(after?: string, before?: string) {
  try {
    const page = await listCheckoutSessions({
      status: "complete",
      limit: PAGE_SIZE,
      startingAfter: after,
      endingBefore: before,
      expandLineItems: true,
    });
    return { ...page, error: null };
  } catch (error) {
    // Let Next.js's own control-flow errors (such as dynamic rendering bailouts) through.
    unstable_rethrow(error);
    console.error("Could not load Stripe payments:", error);
    return { sessions: [] as ListedSession[], hasMore: false, error: "Couldn't load payments from Stripe. Check STRIPE_SECRET_KEY." };
  }
}

// Every completed Stripe Checkout payment, including Payment Links whose buyers never reached the enrolment form.
export default async function StripePayments({ after, before }: { after?: string; before?: string }) {
  const { sessions, hasMore, error } = await loadSessions(after, before);
  const registered = await getRegisteredSessionIds(sessions.map((s) => s.id));

  return (
    <div className="admin-card admin-table-card">
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Enrolment form</th>
            </tr>
          </thead>
          <tbody>
            {sessions.length === 0 && (
              <tr>
                <td colSpan={6} className="admin-empty-cell">
                  {error ? (
                    <EmptyState icon="error" title="Payments unavailable">{error}</EmptyState>
                  ) : (
                    <EmptyState icon="payments" title="No payments yet">Completed Stripe payments will appear here.</EmptyState>
                  )}
                </td>
              </tr>
            )}
            {sessions.map((s) => (
              <tr key={s.id}>
                <td className="nowrap">{formatUnixTime(s.created)}</td>
                <td>
                  <strong>{s.customer_details?.name || "—"}</strong>
                  {s.customer_details?.email && (
                    <>
                      <br />
                      <a className="admin-link" href={`mailto:${s.customer_details.email}`}>
                        {s.customer_details.email}
                      </a>
                    </>
                  )}
                </td>
                <td>{s.line_items?.data[0]?.description ?? "—"}</td>
                <td className="nowrap">{formatCurrency((s.amount_total ?? 0) / 100)}</td>
                <td>
                  <span className={`status-pill badge-${s.payment_status === "paid" ? "paid" : "pending"}`}>
                    {s.payment_status === "paid" ? "Paid" : s.payment_status.replace(/_/g, " ")}
                  </span>
                </td>
                <td>
                  {registered.has(s.id) ? (
                    <span className="status-pill badge-paid">Submitted</span>
                  ) : (
                    <span className="status-pill badge-muted">Not submitted</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CursorPagination
        basePath="/admin/orders"
        ids={sessions.map((s) => s.id)}
        hasMore={hasMore}
        after={after}
        before={before}
        label="payments"
      />
    </div>
  );
}
