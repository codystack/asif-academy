import type { Metadata } from "next";
import { getTraffic } from "@/lib/data";

export const metadata: Metadata = { title: "Traffic" };

export default async function AdminTrafficPage() {
  const traffic = (await getTraffic()).reverse();

  return (
    <section className="container" style={{ padding: "3rem 0" }}>
      <div className="section-header">
        <div>
          <p className="eyebrow">Traffic</p>
          <h1>Visitor activity</h1>
        </div>
      </div>
      <div className="admin-card">
        <table>
          <thead>
            <tr>
              <th>Page</th>
              <th>Path</th>
              <th>Time</th>
              <th>IP</th>
            </tr>
          </thead>
          <tbody>
            {traffic.map((entry, i) => (
              <tr key={i}>
                <td>{entry.page}</td>
                <td>{entry.path}</td>
                <td>{entry.timestamp}</td>
                <td>{entry.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
