import "server-only";
import { headers } from "next/headers";
import { appendTraffic } from "./data";
import { timestamp } from "./format";

export const REQUEST_PATH_HEADER = "x-request-path";

// Records a page view, like log_traffic() in the PHP version.
// The request path is forwarded by proxy.ts since pages don't receive the URL.
export async function logTraffic(page: string) {
  const h = await headers();
  await appendTraffic({
    page,
    path: h.get(REQUEST_PATH_HEADER) ?? "unknown",
    timestamp: timestamp(),
    ip: clientIp(h),
    user_agent: h.get("user-agent") ?? "unknown",
  });
}

export function clientIp(h: Headers): string {
  return h.get("x-forwarded-for")?.split(",")[0].trim() || h.get("x-real-ip") || "unknown";
}
