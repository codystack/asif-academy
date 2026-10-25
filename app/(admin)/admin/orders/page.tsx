import type { Metadata } from "next";
import { getOrders } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { setOrderStatus } from "../actions";

export const metadata: Metadata = { title: "Payments" };

export default async function AdminOrdersPage() {
  const orders = await getOrders();

  return (
    <section className="container" style={{ padding: "3rem 0" }}>
      <div className="section-header">
        <div>
          <p className="eyebrow">Payments</p>
          <h1>Payment records</h1>
        </div>
      </div>
      <div className="admin-card">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.session_id}>
                <td>{order.title}</td>
                <td>{formatCurrency(order.price)}</td>
                <td>
                  <span className={`status-pill badge-${order.status.toLowerCase()}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td>{order.created_at}</td>
                <td>
                  <form action={setOrderStatus} style={{ display: "inline-grid", gap: ".5rem" }}>
                    <input type="hidden" name="session_id" value={order.session_id} />
                    <select name="status" defaultValue={order.status} key={order.status}>
                      <option value="pending">pending</option>
                      <option value="paid">paid</option>
                      <option value="cancelled">cancelled</option>
                    </select>
                    <button className="btn-outline" type="submit">
                      Update
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
