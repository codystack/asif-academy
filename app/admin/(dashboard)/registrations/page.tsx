import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import Pagination from "@/components/admin/Pagination";
import { getRegistrationCount, getRegistrations } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import RegistrationsTable from "./RegistrationsTable";

export const metadata: Metadata = { title: "Registrations" };

const PAGE_SIZE = 10;

export default async function AdminRegistrationsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const total = await getRegistrationCount();
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  // Out-of-range or malformed ?page= values fall back to the nearest valid page.
  const page = Math.min(Math.max(1, Number.parseInt((await searchParams).page ?? "", 10) || 1), pageCount);
  const registrations = await getRegistrations(PAGE_SIZE, (page - 1) * PAGE_SIZE);

  return (
    <>
      <PageHeader eyebrow="Registrations" title="Enrolment forms from paid students" />
      <RegistrationsTable
        registrations={registrations.map((r) => ({
          session_id: r.session_id,
          name: `${r.first_name} ${r.last_name}`.trim(),
          email: r.email,
          phone: r.phone,
          programme_name: r.programme_name,
          amount_paid: formatCurrency(r.amount_paid),
          experience: r.experience,
          goals: r.goals,
          created_at: r.created_at,
        }))}
      >
        <Pagination page={page} pageCount={pageCount} total={total} pageSize={PAGE_SIZE} basePath="/admin/registrations" />
      </RegistrationsTable>
    </>
  );
}
