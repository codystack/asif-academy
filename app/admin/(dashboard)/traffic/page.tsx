import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import { getTraffic } from "@/lib/data";
import { formatTimestamp } from "@/lib/format";
import EmptyState from "@/components/admin/EmptyState";

export const metadata: Metadata = { title: "Traffic" };

export default async function AdminTrafficPage() {
  const traffic = (await getTraffic()).reverse();

  return (
    <>
      <PageHeader eyebrow="Traffic" title="Visitor activity" />
      <div className="admin-card admin-table-card">
        <div className="table-scroll">
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
              {traffic.length === 0 && (
                <tr>
                  <td colSpan={4} className="admin-empty-cell">
                    <EmptyState icon="traffic" title="No visits yet">Page views on the site will appear here.</EmptyState>
                  </td>
                </tr>
              )}
              {traffic.map((entry, i) => (
                <tr key={i}>
                  <td>{entry.page}</td>
                  <td>{entry.path}</td>
                  <td>{formatTimestamp(entry.timestamp)}</td>
                  <td>{entry.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
