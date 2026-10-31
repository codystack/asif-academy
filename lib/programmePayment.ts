import "server-only";
import { findProgramme } from "./programmes";
import { retrieveCheckoutSession } from "./stripe";

export type PaidProgramme = {
  sessionId: string;
  programmeId: string;
  programmeName: string;
  amountPence: number;
  email: string;
  name: string;
  phone: string;
};

// Local testing only: /enrol?session_id=preview&programme=<id> shows the form as if that programme was just paid.
// Never active in production builds, and the enrol action skips saving for it.
export const PREVIEW_SESSION_ID = "preview";

export function isPreviewSession(sessionId: string | null | undefined): boolean {
  return process.env.NODE_ENV === "development" && sessionId === PREVIEW_SESSION_ID;
}

// Confirms with Stripe that a Checkout session is a paid pricing-page programme; anything else returns null.
// Site checkout sessions carry programme_id in metadata. Payment Link sessions do not, so their redirect URL
// names the programme, and the amount actually paid must match that programme for it to count.
export async function findPaidProgramme(
  sessionId: string | null | undefined,
  programmeId?: string | null,
): Promise<PaidProgramme | null> {
  if (!sessionId) return null;
  if (isPreviewSession(sessionId)) {
    const programme = findProgramme(programmeId ?? "");
    return programme
      ? { sessionId, programmeId: programme.id, programmeName: programme.name, amountPence: programme.amountPence, email: "", name: "", phone: "" }
      : null;
  }
  try {
    const session = await retrieveCheckoutSession(sessionId);
    const programme = findProgramme(session.metadata?.programme_id ?? programmeId ?? "");
    const amountPaid = session.amount_total ?? -1;
    if (
      session.payment_status !== "paid" ||
      !programme ||
      ![programme.amountPence, ...(programme.altAmountsPence ?? [])].includes(amountPaid) ||
      session.currency !== "gbp"
    ) {
      return null;
    }
    return {
      sessionId,
      programmeId: programme.id,
      programmeName: programme.name,
      amountPence: amountPaid,
      email: session.customer_details?.email ?? "",
      name: session.customer_details?.name ?? "",
      phone: session.customer_details?.phone ?? "",
    };
  } catch {
    return null;
  }
}
