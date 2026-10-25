import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/config";
import { addAbandonedCart, findCourse, recordOrder } from "@/lib/data";
import { timestamp } from "@/lib/format";
import { createCheckoutSession } from "@/lib/stripe";
import { clientIp, logTraffic } from "@/lib/traffic";

// GET /checkout?course_id=... creates a Stripe Checkout session and redirects to it.
export async function GET(request: NextRequest) {
  const courseId = request.nextUrl.searchParams.get("course_id");
  const course = courseId ? await findCourse(courseId) : null;
  if (!course) {
    redirect("/courses");
  }

  await logTraffic("checkout");

  const baseUrl = (SITE_URL ?? request.nextUrl.origin).replace(/\/+$/, "");
  const session = await createCheckoutSession({
    name: course.title,
    description: course.summary,
    unitAmount: Math.round(course.price * 100),
    successUrl: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${baseUrl}/courses/${encodeURIComponent(course.id)}`,
    metadata: { course_id: course.id, course_title: course.title },
  });

  await recordOrder({
    session_id: session.id,
    course_id: course.id,
    title: course.title,
    price: course.price,
    status: "pending",
    created_at: timestamp(),
    ip: clientIp(request.headers),
  });
  await addAbandonedCart({
    session_id: session.id,
    course_id: course.id,
    title: course.title,
    price: course.price,
  });

  redirect(session.url ?? "/courses");
}
