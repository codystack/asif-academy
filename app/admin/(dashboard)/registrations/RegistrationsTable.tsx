"use client";

import { useState } from "react";
import Modal from "@/components/admin/Modal";
import { formatTimestamp } from "@/lib/format";

export type RegistrationRow = {
  session_id: string;
  name: string;
  email: string;
  phone: string;
  programme_name: string;
  amount_paid: string;
  experience: string;
  goals: string;
  created_at: string;
};

// children render under the table, inside the card (used for pagination).
export default function RegistrationsTable({
  registrations,
  children,
}: {
  registrations: RegistrationRow[];
  children?: React.ReactNode;
}) {
  const [selected, setSelected] = useState<RegistrationRow | null>(null);

  return (
    <>
      <div className="admin-card admin-table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Submitted</th>
                <th>Name</th>
                <th>Plan</th>
                <th>Paid</th>
                <th aria-label="Actions"></th>
              </tr>
            </thead>
            <tbody>
              {registrations.length === 0 && (
                <tr>
                  <td colSpan={5} className="admin-empty">
                    No registrations yet.
                  </td>
                </tr>
              )}
              {registrations.map((r) => (
                <tr key={r.session_id}>
                  <td className="nowrap">{formatTimestamp(r.created_at)}</td>
                  <td className="nowrap">{r.name}</td>
                  <td>
                    <span className="admin-tag">{r.programme_name}</span>
                  </td>
                  <td className="nowrap">{r.amount_paid}</td>
                  <td className="admin-row-action">
                    <button className="btn-outline" type="button" onClick={() => setSelected(r)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {children}
      </div>

      {selected && (
        <Modal
          eyebrow="Registration"
          title={selected.name}
          onClose={() => setSelected(null)}
          actions={
            <a className="btn-primary" href={`mailto:${selected.email}`}>
              Email student
            </a>
          }
        >
          <dl className="admin-modal-details">
            <div>
              <dt>Plan</dt>
              <dd>{selected.programme_name}</dd>
            </div>
            <div>
              <dt>Paid</dt>
              <dd>{selected.amount_paid}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a className="admin-link" href={`mailto:${selected.email}`}>
                  {selected.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a className="admin-link" href={`tel:${selected.phone.replace(/\s+/g, "")}`}>
                  {selected.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{selected.experience}</dd>
            </div>
            <div>
              <dt>Submitted</dt>
              <dd>{formatTimestamp(selected.created_at)}</dd>
            </div>
          </dl>
          <div className="admin-modal-section">
            <p className="admin-modal-label">Goals</p>
            <p className="admin-modal-message">{selected.goals || "No goals given."}</p>
          </div>
        </Modal>
      )}
    </>
  );
}
