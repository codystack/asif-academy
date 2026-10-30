import "server-only";
import { headers } from "next/headers";
import { appendTraffic } from "./data";
import { timestamp } from "./format";

export const REQUEST_PATH_HEADER = "x-request-path";

// Records a page view, like log_traffic() in the PHP version.
// The request path is forwarded by proxy.ts since pages don't receive the URL.
// Analytics only: a database outage is logged instead of taking the page down with it.
export async function logTraffic(page: string) {
  const h = await headers();
  try {
    await appendTraffic({
      page,
      path: h.get(REQUEST_PATH_HEADER) ?? "unknown",
      timestamp: timestamp(),
      ip: clientIp(h),
      user_agent: h.get("user-agent") ?? "unknown",
    });
  } catch (error) {
    console.error(`Could not record traffic for "${page}":`, error);
  }
}

export function clientIp(h: Headers): string {
  return h.get("x-forwarded-for")?.split(",")[0].trim() || h.get("x-real-ip") || "unknown";
}
