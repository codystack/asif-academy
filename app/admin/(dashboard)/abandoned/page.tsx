import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import { getAbandonedCarts } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { removeAbandoned } from "../../actions";

export const metadata: Metadata = { title: "Abandoned carts" };

export default async function AdminAbandonedPage() {
  const abandoned = await getAbandonedCarts();

  return (
    <>
      <PageHeader eyebrow="Abandoned carts" title="Checkouts that were not completed" />
      <div className="admin-card admin-table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Session</th>
                <th>Programme</th>
                <th>Value</th>
                <th>Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {abandoned.length === 0 && (
                <tr>
                  <td colSpan={5} className="admin-empty">
                    No abandoned carts.
                  </td>
                </tr>
              )}
              {abandoned.map((item) => (
                <tr key={item.session_id}>
                  <td>{item.session_id}</td>
                  <td>{item.title}</td>
                  <td>{formatCurrency(item.price)}</td>
                  <td>{item.updated_at}</td>
                  <td>
                    <form action={removeAbandoned}>
                      <input type="hidden" name="remove_session_id" value={item.session_id} />
                      <button className="btn-outline confirm-remove" type="submit">
                        Remove
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
