import Link from "next/link";
import PageHeader from "@/components/admin/PageHeader";
import {
  getAbandonedSummary,
  getMessages,
  getOverviewStats,
  getRecentRegistrations,
  getRecentTraffic,
  getTrafficCounts,
} from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export default async function AdminOverviewPage() {
  const [stats, abandonedSummary, registrations, messages, trafficCounts, recentTraffic] = await Promise.all([
    getOverviewStats(),
    getAbandonedSummary(),
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
    { label: "Payments", value: stats.paidOrders, note: `${stats.pendingOrders} pending at checkout` },
    { label: "Messages", value: stats.messages, note: "From the contact form" },
    { label: "Visits this week", value: stats.visitsWeek, note: `${stats.visitsTotal.toLocaleString("en-GB")} all time` },
    {
      label: "Abandoned carts",
      value: abandonedSummary.count,
      note: `${formatCurrency(abandonedSummary.total)} not completed`,
    },
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
                    <strong>{r.name}</strong>
                    <span>{r.programme_name}</span>
                  </div>
                  <div className="admin-list-meta">
                    <strong>{formatCurrency(r.amount_paid)}</strong>
                    <span>{r.created_at}</span>
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
                    <span>{m.created_at}</span>
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
                    <span>{visit.timestamp}</span>
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
