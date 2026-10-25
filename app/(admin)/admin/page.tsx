import Link from "next/link";
import { getAbandonedSummary, getCourses, getOrders, getRecentTraffic, getTrafficCounts } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export default async function AdminOverviewPage() {
  const [orders, trafficCounts, recentTraffic, abandonedSummary, courses] = await Promise.all([
    getOrders(),
    getTrafficCounts(),
    getRecentTraffic(8),
    getAbandonedSummary(),
    getCourses(),
  ]);
  const paidOrders = orders.filter((o) => o.status === "paid").length;
  const pendingOrders = orders.filter((o) => o.status === "pending").length;

  return (
    <>
      <section className="container admin-welcome">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h1>Asif Academy performance overview</h1>
          <p>Monitor sales, popularity, traffic trends, and abandoned carts in one place.</p>
        </div>
        <Link className="btn-primary" href="/admin/courses">
          Add course
        </Link>
      </section>

      <section className="container admin-grid admin-metrics">
        <div className="metric-card">
          <p>Orders</p>
          <strong>{orders.length}</strong>
          <p>
            {paidOrders} completed • {pendingOrders} pending
          </p>
        </div>
        <div className="metric-card">
          <p>Abandoned carts</p>
          <strong>{abandonedSummary.count}</strong>
          <p>Total value {formatCurrency(abandonedSummary.total)}</p>
        </div>
        <div className="metric-card">
          <p>Top pages</p>
          <strong>{Object.keys(trafficCounts).length}</strong>
          <p>Tracked traffic snapshots</p>
        </div>
      </section>

      <section className="container admin-panel">
        <div className="admin-card">
          <h3>Recent traffic</h3>
          <table>
            <thead>
              <tr>
                <th>Page</th>
                <th>Time</th>
                <th>IP</th>
              </tr>
            </thead>
            <tbody>
              {recentTraffic.map((visit, i) => (
                <tr key={i}>
                  <td>{visit.page}</td>
                  <td>{visit.timestamp}</td>
                  <td>{visit.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="admin-card">
          <h3>Course catalog</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Level</th>
                <th>Price</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.level}</td>
                  <td>{formatCurrency(course.price)}</td>
                  <td>{course.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
