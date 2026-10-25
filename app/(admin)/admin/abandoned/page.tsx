import type { Metadata } from "next";
import { getAbandonedCarts } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { removeAbandoned } from "../actions";

export const metadata: Metadata = { title: "Abandoned carts" };

export default async function AdminAbandonedPage() {
  const abandoned = await getAbandonedCarts();

  return (
    <section className="container" style={{ padding: "3rem 0" }}>
      <div className="section-header">
        <div>
          <p className="eyebrow">Abandoned carts</p>
          <h1>Pending purchase activity</h1>
        </div>
      </div>
      <div className="admin-card">
        <table>
          <thead>
            <tr>
              <th>Session</th>
              <th>Course</th>
              <th>Value</th>
              <th>Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
    </section>
  );
}
