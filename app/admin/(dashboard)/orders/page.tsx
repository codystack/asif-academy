import type { Metadata } from "next";
import PageHeader from "@/components/admin/PageHeader";
import { getOrders } from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { setOrderStatus } from "../../actions";

export const metadata: Metadata = { title: "Payments" };

export default async function AdminOrdersPage() {
  const orders = await getOrders();

  return (
    <>
      <PageHeader eyebrow="Payments" title="Payment records" description="Orders started through the site checkout." />
      <div className="admin-card admin-table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Programme</th>
                <th>Price</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 && (
                <tr>
                  <td colSpan={5} className="admin-empty">
                    No payments yet.
                  </td>
                </tr>
              )}
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
                    <form action={setOrderStatus} className="status-form">
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
      </div>
    </>
  );
}
