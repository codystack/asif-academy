"use client";

import { useState } from "react";
import Modal from "@/components/admin/Modal";
import { formatTimestamp } from "@/lib/format";

export type MessageRow = {
  id: number;
  name: string;
  email: string;
  programme: string;
  message: string;
  created_at: string;
  replyHref: string;
};

// children render under the table, inside the card (used for pagination).
export default function MessagesTable({ messages, children }: { messages: MessageRow[]; children?: React.ReactNode }) {
  const [selected, setSelected] = useState<MessageRow | null>(null);

  return (
    <>
      <div className="admin-card admin-table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Received</th>
                <th>Name</th>
                <th>Email</th>
                <th>Programme</th>
                <th aria-label="Actions"></th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 && (
                <tr>
                  <td colSpan={5} className="admin-empty">
                    No messages yet. Enquiries from the contact page will appear here.
                  </td>
                </tr>
              )}
              {messages.map((m) => (
                <tr key={m.id}>
                  <td className="nowrap">{formatTimestamp(m.created_at)}</td>
                  <td className="nowrap">{m.name}</td>
                  <td className="nowrap">
                    <a className="admin-link" href={`mailto:${m.email}`}>
                      {m.email}
                    </a>
                  </td>
                  <td>{m.programme ? <span className="admin-tag">{m.programme}</span> : "—"}</td>
                  <td className="admin-row-action">
                    <button className="btn-outline" type="button" onClick={() => setSelected(m)}>
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
          eyebrow="Message"
          title={selected.name}
          onClose={() => setSelected(null)}
          actions={
            <a className="btn-primary" href={selected.replyHref}>
              Reply by email
            </a>
          }
        >
          <dl className="admin-modal-details">
            <div>
              <dt>Email</dt>
              <dd>
                <a className="admin-link" href={`mailto:${selected.email}`}>
                  {selected.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Programme</dt>
              <dd>{selected.programme || "—"}</dd>
            </div>
            <div>
              <dt>Received</dt>
              <dd>{formatTimestamp(selected.created_at)}</dd>
            </div>
          </dl>
          <p className="admin-modal-message">{selected.message}</p>
        </Modal>
      )}
    </>
  );
}
