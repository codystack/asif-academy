import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import { getRegistrations } from "@/lib/data";
import { formatCurrency } from "@/lib/format";

export const metadata: Metadata = { title: "Registrations" };

export default async function AdminRegistrationsPage() {
  const registrations = (await getRegistrations()).reverse();

  return (
    <>
      <PageHeader eyebrow="Registrations" title="Enrolment forms from paid students" />
      <div className="admin-card admin-table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Submitted</th>
                <th>Plan</th>
                <th>Paid</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Experience</th>
                <th>Own machine</th>
                <th>Goals</th>
                <th>Emergency contact</th>
                <th>Heard about us</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length === 0 && (
                <tr>
                  <td colSpan={10} className="admin-empty">
                    No registrations yet.
                  </td>
                </tr>
              )}
              {registrations.map((r) => (
                <tr key={r.session_id}>
                  <td>{r.created_at}</td>
                  <td>{r.programme_name}</td>
                  <td>{formatCurrency(r.amount_paid)}</td>
                  <td>{r.name}</td>
                  <td>
                    {r.email}
                    <br />
                    {r.phone}
                  </td>
                  <td>{r.experience}</td>
                  <td>{r.has_machine || "—"}</td>
                  <td>{r.goals || "—"}</td>
                  <td>{r.emergency_name ? `${r.emergency_name} (${r.emergency_phone || "no phone"})` : "—"}</td>
                  <td>{r.heard_about || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
