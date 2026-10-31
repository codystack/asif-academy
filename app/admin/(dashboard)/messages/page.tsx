import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import Pagination from "@/components/admin/Pagination";
import { SITE_NAME } from "@/lib/config";
import { getMessageCount, getMessages } from "@/lib/data";
import MessagesTable from "./MessagesTable";

export const metadata: Metadata = { title: "Messages" };

const PAGE_SIZE = 10;

export default async function AdminMessagesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const total = await getMessageCount();
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  // Out-of-range or malformed ?page= values fall back to the nearest valid page.
  const page = Math.min(Math.max(1, Number.parseInt((await searchParams).page ?? "", 10) || 1), pageCount);
  const messages = await getMessages(PAGE_SIZE, (page - 1) * PAGE_SIZE);

  return (
    <>
      <PageHeader eyebrow="Messages" title="Contact form enquiries" />
      <MessagesTable
        messages={messages.map((m) => ({
          id: m.id,
          name: m.name,
          email: m.email,
          programme: m.subject.replace(/^Programme: /, ""),
          message: m.message,
          created_at: m.created_at,
          replyHref: `mailto:${m.email}?subject=${encodeURIComponent(`Re: ${m.subject || `Your message to ${SITE_NAME}`}`)}`,
        }))}
      >
        <Pagination page={page} pageCount={pageCount} total={total} pageSize={PAGE_SIZE} basePath="/admin/messages" />
      </MessagesTable>
    </>
  );
}
