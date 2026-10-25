import { NextResponse, type NextRequest } from "next/server";

// Forwards the request path to Server Components so logTraffic() can record it.
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-request-path", request.nextUrl.pathname + request.nextUrl.search);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/|assets/|favicon).*)"],
};
