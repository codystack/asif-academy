import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import StripePayments from "./StripePayments";

export const metadata: Metadata = { title: "Payments" };

export default async function AdminOrdersPage({ searchParams }: { searchParams: Promise<{ after?: string; before?: string }> }) {
  const { after, before } = await searchParams;

  return (
    <>
      <PageHeader eyebrow="Payments" title="Payment records" description="Every completed Stripe payment, including Payment Links." />
      <StripePayments after={after} before={before} />
    </>
  );
}
