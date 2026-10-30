// Creates the database tables and imports the existing data/*.json files.
// Run with: npm run db:migrate   (safe to re-run; existing rows are kept, not duplicated)
import fs from "node:fs/promises";
import path from "node:path";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set. Add it to .env.local first.");
  process.exit(1);
}

// Keep "YYYY-MM-DD HH:MM:SS" strings verbatim instead of converting local time to UTC (see lib/db.ts).
const timestampAsText = { to: 1114, from: [1114], serialize: (x) => (x instanceof Date ? x.toISOString() : String(x)), parse: (x) => x };
const sql = postgres(process.env.DATABASE_URL, { max: 1, onnotice: () => {}, types: { timestampAsText } });
const root = path.join(import.meta.dirname, "..");

async function readJson(name) {
  try {
    const data = JSON.parse(await fs.readFile(path.join(root, "data", name), "utf8"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

const money = (value) => Number(value) || 0;
const text = (value) => (value == null ? "" : String(value));

try {
  await sql.unsafe(await fs.readFile(path.join(root, "db", "schema.sql"), "utf8"));
  if (process.argv.includes("--reset")) {
    await sql`TRUNCATE orders, abandoned_carts, traffic, messages, registrations RESTART IDENTITY`;
    console.log("Existing rows cleared (--reset).");
  }
  console.log("Schema ready.");

  // Tables keyed by a natural id: insert and skip rows that already exist.
  for (const o of await readJson("orders.json")) {
    await sql`
      INSERT INTO orders (session_id, course_id, title, price, status, created_at, updated_at, ip)
      VALUES (${o.session_id}, ${text(o.course_id)}, ${text(o.title)}, ${money(o.price)}, ${o.status ?? "pending"},
              ${o.created_at}, ${o.updated_at ?? null}, ${text(o.ip)})
      ON CONFLICT (session_id) DO NOTHING`;
  }
  for (const a of await readJson("abandoned.json")) {
    await sql`
      INSERT INTO abandoned_carts (session_id, course_id, title, price, created_at, updated_at)
      VALUES (${a.session_id}, ${text(a.course_id)}, ${text(a.title)}, ${money(a.price)},
              ${a.created_at ?? a.updated_at}, ${a.updated_at ?? a.created_at})
      ON CONFLICT (session_id) DO NOTHING`;
  }
  for (const r of await readJson("registrations.json")) {
    await sql`
      INSERT INTO registrations ${sql({ ...r, amount_paid: money(r.amount_paid) })}
      ON CONFLICT (session_id) DO NOTHING`;
  }

  // Append-only logs have no natural key, so they are imported only into an empty table.
  const [{ count: messageCount }] = await sql`SELECT count(*)::int AS count FROM messages`;
  if (messageCount === 0) {
    for (const m of await readJson("messages.json")) {
      await sql`
        INSERT INTO messages (name, email, subject, message, created_at)
        VALUES (${text(m.name)}, ${text(m.email)}, ${text(m.subject)}, ${text(m.message)}, ${m.created_at})`;
    }
  }
  const [{ count: trafficCount }] = await sql`SELECT count(*)::int AS count FROM traffic`;
  if (trafficCount === 0) {
    const rows = (await readJson("traffic.json")).map((t) => ({
      page: text(t.page),
      path: text(t.path),
      timestamp: t.timestamp,
      ip: text(t.ip),
      user_agent: text(t.user_agent),
    }));
    for (let i = 0; i < rows.length; i += 500) {
      await sql`INSERT INTO traffic ${sql(rows.slice(i, i + 500))}`;
    }
  }

  const counts = await sql`
    SELECT 'orders' AS table, count(*)::int FROM orders
    UNION ALL SELECT 'abandoned_carts', count(*)::int FROM abandoned_carts
    UNION ALL SELECT 'traffic', count(*)::int FROM traffic
    UNION ALL SELECT 'messages', count(*)::int FROM messages
    UNION ALL SELECT 'registrations', count(*)::int FROM registrations`;
  console.table(counts);
} finally {
  await sql.end();
}
