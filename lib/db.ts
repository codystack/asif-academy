import "server-only";
import postgres from "postgres";
import { DATABASE_URL } from "./config";

type Sql = ReturnType<typeof postgres>;

// Store "YYYY-MM-DD HH:MM:SS" strings verbatim. The driver default parses them as local time and converts
// to UTC, which shifted every timestamp by the machine's UTC offset.
const timestampAsText = {
  to: 1114,
  from: [1114],
  serialize: (value: unknown) => (value instanceof Date ? value.toISOString() : String(value)),
  parse: (value: string) => value,
};

// Reuse one connection pool across dev hot reloads instead of opening a new one per reload.
const globalForDb = globalThis as unknown as { sql?: Sql };

export function db(): Sql {
  if (!globalForDb.sql) {
    if (!DATABASE_URL) {
      throw new Error("DATABASE_URL is not set. Add the Railway Postgres URL to .env.local.");
    }
    // Fail after 10s (driver default 30s) so an unreachable database doesn't leave pages hanging.
    globalForDb.sql = postgres(DATABASE_URL, {
      max: 10,
      connect_timeout: 10,
      onnotice: () => {},
      types: { timestampAsText },
    });
  }
  return globalForDb.sql;
}
