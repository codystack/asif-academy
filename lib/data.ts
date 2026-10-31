import "server-only";
import { db } from "./db";
import { timestamp } from "./format";

export type OrderStatus = "pending" | "paid" | "cancelled";

export type Order = {
  session_id: string;
  course_id: string;
  title: string;
  price: number;
  status: OrderStatus;
  created_at: string;
  updated_at?: string;
  ip: string;
};

export type TrafficEntry = {
  page: string;
  path: string;
  timestamp: string;
  ip: string;
  user_agent: string;
};

export type AbandonedCart = {
  session_id: string;
  course_id: string;
  title: string;
  price: number;
  created_at?: string;
  updated_at?: string;
};

export type Message = {
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};

// Enrolment details submitted after paying for a pricing-page programme.
export type Registration = {
  session_id: string;
  programme_id: string;
  programme_name: string;
  amount_paid: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  experience: string;
  goals: string;
  created_at: string;
};

// Timestamps are returned in the same "YYYY-MM-DD HH:MM:SS" form the JSON files used.
const fmt = (column: string) => db()`to_char(${db()(column)}, 'YYYY-MM-DD HH24:MI:SS')`;

// Orders

export async function getOrders(): Promise<Order[]> {
  const sql = db();
  const rows = await sql<(Omit<Order, "updated_at"> & { updated_at: string | null })[]>`
    SELECT session_id, course_id, title, price::float8 AS price, status,
           ${fmt("created_at")} AS created_at, ${fmt("updated_at")} AS updated_at, ip
    FROM orders ORDER BY created_at, session_id`;
  return rows.map(({ updated_at, ...order }) => ({ ...order, ...(updated_at && { updated_at }) }));
}

export async function recordOrder(order: Order) {
  const sql = db();
  await sql`
    INSERT INTO orders (session_id, course_id, title, price, status, created_at, updated_at, ip)
    VALUES (${order.session_id}, ${order.course_id}, ${order.title}, ${order.price}, ${order.status},
            ${order.created_at}, ${order.updated_at ?? null}, ${order.ip})
    ON CONFLICT (session_id) DO NOTHING`;
}

export async function updateOrderStatus(sessionId: string, status: OrderStatus) {
  const sql = db();
  await sql`UPDATE orders SET status = ${status}, updated_at = ${timestamp()} WHERE session_id = ${sessionId}`;
}

// Traffic

export async function appendTraffic(entry: TrafficEntry) {
  const sql = db();
  await sql`
    INSERT INTO traffic (page, path, "timestamp", ip, user_agent)
    VALUES (${entry.page}, ${entry.path}, ${entry.timestamp}, ${entry.ip}, ${entry.user_agent})`;
}

// Abandoned carts

export async function addAbandonedCart(cart: AbandonedCart) {
  const sql = db();
  const now = timestamp();
  await sql`
    INSERT INTO abandoned_carts (session_id, course_id, title, price, created_at, updated_at)
    VALUES (${cart.session_id}, ${cart.course_id}, ${cart.title}, ${cart.price}, ${now}, ${now})
    ON CONFLICT (session_id) DO UPDATE
      SET course_id = EXCLUDED.course_id, title = EXCLUDED.title, price = EXCLUDED.price, updated_at = EXCLUDED.updated_at`;
}

export async function removeAbandonedCart(sessionId: string) {
  const sql = db();
  await sql`DELETE FROM abandoned_carts WHERE session_id = ${sessionId}`;
}

// Contact messages

export async function getMessages(limit?: number, offset = 0): Promise<(Message & { id: number })[]> {
  const sql = db();
  return sql<(Message & { id: number })[]>`
    SELECT id::int AS id, name, email, subject, message, ${fmt("created_at")} AS created_at
    FROM messages ORDER BY created_at DESC, id DESC ${limit ? sql`LIMIT ${limit} OFFSET ${offset}` : sql``}`;
}

export async function getMessageCount(): Promise<number> {
  const sql = db();
  const [{ count }] = await sql<{ count: number }[]>`SELECT count(*)::int AS count FROM messages`;
  return count;
}

export async function addMessage(message: Message) {
  const sql = db();
  await sql`
    INSERT INTO messages (name, email, subject, message, created_at)
    VALUES (${message.name}, ${message.email}, ${message.subject}, ${message.message}, ${message.created_at})`;
}

// Registrations

const REGISTRATION_COLUMNS = (sql: ReturnType<typeof db>) => sql`
  session_id, programme_id, programme_name, amount_paid::float8 AS amount_paid, first_name, last_name, email, phone,
  experience, goals, ${fmt("created_at")} AS created_at`;

export async function getRegistrations(limit: number, offset = 0): Promise<Registration[]> {
  const sql = db();
  return sql<Registration[]>`
    SELECT ${REGISTRATION_COLUMNS(sql)} FROM registrations ORDER BY created_at DESC, session_id
    LIMIT ${limit} OFFSET ${offset}`;
}

export async function getRegistrationCount(): Promise<number> {
  const sql = db();
  const [{ count }] = await sql<{ count: number }[]>`SELECT count(*)::int AS count FROM registrations`;
  return count;
}

export async function getRecentRegistrations(limit = 5): Promise<Registration[]> {
  const sql = db();
  return sql<Registration[]>`
    SELECT ${REGISTRATION_COLUMNS(sql)} FROM registrations ORDER BY created_at DESC, session_id LIMIT ${limit}`;
}

// Which of these Stripe sessions have a completed enrolment form.
export async function getRegisteredSessionIds(sessionIds: string[]): Promise<Set<string>> {
  if (sessionIds.length === 0) return new Set();
  const sql = db();
  const rows = await sql<{ session_id: string }[]>`SELECT session_id FROM registrations WHERE session_id IN ${sql(sessionIds)}`;
  return new Set(rows.map((row) => row.session_id));
}

export async function findRegistration(sessionId: string): Promise<Registration | null> {
  const sql = db();
  const [registration] = await sql<Registration[]>`
    SELECT ${REGISTRATION_COLUMNS(sql)} FROM registrations WHERE session_id = ${sessionId}`;
  return registration ?? null;
}

export async function addRegistration(registration: Registration) {
  const sql = db();
  await sql`INSERT INTO registrations ${sql(registration)} ON CONFLICT (session_id) DO NOTHING`;
}

// Dashboard overview

export type OverviewStats = {
  revenue: number;
  registrations: number;
  messages: number;
};

// Revenue counts every registration (Payment Link and site checkout payments both create one)
// plus paid orders that have no registration yet, so no payment is counted twice.
export async function getOverviewStats(): Promise<OverviewStats> {
  const sql = db();
  const [stats] = await sql<OverviewStats[]>`
    SELECT
      ((SELECT coalesce(sum(amount_paid), 0) FROM registrations)
        + (SELECT coalesce(sum(price), 0) FROM orders o
           WHERE status = 'paid' AND NOT EXISTS (SELECT 1 FROM registrations r WHERE r.session_id = o.session_id))
      )::float8 AS "revenue",
      (SELECT count(*) FROM registrations)::int AS "registrations",
      (SELECT count(*) FROM messages)::int AS "messages"`;
  return stats;
}
