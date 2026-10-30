import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import { SITE_NAME } from "@/lib/config";
import { getMessages } from "@/lib/data";

export const metadata: Metadata = { title: "Messages" };

export default async function AdminMessagesPage() {
  const messages = await getMessages();

  return (
    <>
      <PageHeader eyebrow="Messages" title="Contact form enquiries" description={`${messages.length} received, newest first.`} />
      {messages.length ? (
        <div className="admin-messages">
          {messages.map((m) => (
            <article key={m.id} className="admin-card admin-message">
              <header>
                <div>
                  <strong>{m.name}</strong>
                  <a href={`mailto:${m.email}`}>{m.email}</a>
                </div>
                <time>{m.created_at}</time>
              </header>
              {m.subject && <span className="admin-tag">{m.subject.replace(/^Programme: /, "")}</span>}
              <p>{m.message}</p>
              <a
                className="btn-outline"
                href={`mailto:${m.email}?subject=${encodeURIComponent(`Re: ${m.subject || `Your message to ${SITE_NAME}`}`)}`}
              >
                Reply
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="admin-card">
          <p className="admin-empty">No messages yet. Enquiries from the contact page will appear here.</p>
        </div>
      )}
    </>
  );
}
