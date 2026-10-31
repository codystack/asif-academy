import Link from "next/link";
import { unstable_rethrow } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader";
import {
  getMessages,
  getOverviewStats,
  getRecentRegistrations,
  getRecentTraffic,
  getTrafficCounts,
} from "@/lib/data";
import { formatCurrency, formatTimestamp } from "@/lib/format";
import { listCheckoutSessions } from "@/lib/stripe";

// Count and total of Stripe checkouts in the last 30 days. Stripe returns at most 100 per call, so "more" means 100+.
async function stripeLast30Days(status: "complete" | "expired") {
  try {
    const createdSince = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const { sessions, hasMore } = await listCheckoutSessions({ status, limit: 100, createdSince });
    const total = sessions.reduce((sum, s) => sum + (s.amount_total ?? 0), 0) / 100;
    return { count: sessions.length, total, more: hasMore };
  } catch (error) {
    // Let Next.js's own control-flow errors (such as dynamic rendering bailouts) through.
    unstable_rethrow(error);
    console.error(`Could not load ${status} Stripe checkouts:`, error);
    return null;
  }
}

function stripeMetric(label: string, summary: Awaited<ReturnType<typeof stripeLast30Days>>, totalLabel: string) {
  if (!summary) return { label, value: "—", note: "Couldn't reach Stripe" };
  const plus = summary.more ? "+" : "";
  return { label, value: `${summary.count}${plus}`, note: `${formatCurrency(summary.total)}${plus} ${totalLabel} · last 30 days` };
}

export default async function AdminOverviewPage() {
  const [stats, paid, abandoned, registrations, messages, trafficCounts, recentTraffic] = await Promise.all([
    getOverviewStats(),
    stripeLast30Days("complete"),
    stripeLast30Days("expired"),
    getRecentRegistrations(5),
    getMessages(5),
    getTrafficCounts(),
    getRecentTraffic(6),
  ]);
  const topPages = Object.entries(trafficCounts).slice(0, 5);
  const topCount = topPages[0]?.[1] ?? 0;

  const metrics = [
    { label: "Revenue", value: formatCurrency(stats.revenue), note: "Registrations and paid orders" },
    { label: "Registrations", value: stats.registrations, note: "Enrolment forms submitted" },
    stripeMetric("Payments", paid, "received"),
    { label: "Messages", value: stats.messages, note: "From the contact form" },
    { label: "Visits this week", value: stats.visitsWeek, note: `${stats.visitsTotal.toLocaleString("en-GB")} all time` },
    stripeMetric("Abandoned checkouts", abandoned, "not completed"),
  ];

  return (
    <>
      <PageHeader eyebrow="Welcome back" title="Overview" description="Sales, enrolments, enquiries and traffic at a glance.">
        <Link className="btn-primary" href="/admin/registrations">
          View registrations
        </Link>
      </PageHeader>

      <section className="admin-metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <p>{metric.label}</p>
            <strong>{metric.value}</strong>
            <p>{metric.note}</p>
          </div>
        ))}
      </section>

      <section className="admin-panels">
        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Recent registrations</h3>
            <Link href="/admin/registrations">View all</Link>
          </div>
          {registrations.length ? (
            <ul className="admin-list">
              {registrations.map((r) => (
                <li key={r.session_id}>
                  <div>
                    <strong>
                      {r.first_name} {r.last_name}
                    </strong>
                    <span>{r.programme_name}</span>
                  </div>
                  <div className="admin-list-meta">
                    <strong>{formatCurrency(r.amount_paid)}</strong>
                    <span>{formatTimestamp(r.created_at)}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-empty">No registrations yet.</p>
          )}
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Latest messages</h3>
            <Link href="/admin/messages">View all</Link>
          </div>
          {messages.length ? (
            <ul className="admin-list">
              {messages.map((m) => (
                <li key={m.id}>
                  <div>
                    <strong>{m.name}</strong>
                    <span>{m.subject || m.message}</span>
                  </div>
                  <div className="admin-list-meta">
                    <span>{formatTimestamp(m.created_at)}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-empty">No messages yet.</p>
          )}
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Top pages</h3>
            <Link href="/admin/traffic">View traffic</Link>
          </div>
          {topPages.length ? (
            <ul className="admin-bars">
              {topPages.map(([page, count]) => (
                <li key={page}>
                  <div className="admin-bar-label">
                    <span>{page}</span>
                    <strong>{count.toLocaleString("en-GB")}</strong>
                  </div>
                  <div className="admin-bar">
                    <div style={{ width: `${(count / topCount) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-empty">No visits recorded yet.</p>
          )}
        </div>

        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Recent visits</h3>
          </div>
          {recentTraffic.length ? (
            <ul className="admin-list">
              {recentTraffic.map((visit, i) => (
                <li key={i}>
                  <div>
                    <strong>{visit.page}</strong>
                    <span>{visit.ip}</span>
                  </div>
                  <div className="admin-list-meta">
                    <span>{formatTimestamp(visit.timestamp)}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-empty">No visits recorded yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
