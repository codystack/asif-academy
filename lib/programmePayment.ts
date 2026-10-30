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

// Confirms with Stripe that a Checkout session is a paid pricing-page programme; anything else returns null.
// Site checkout sessions carry programme_id in metadata. Payment Link sessions do not, so their redirect URL
// names the programme, and the amount actually paid must match that programme for it to count.
export async function findPaidProgramme(
  sessionId: string | null | undefined,
  programmeId?: string | null,
): Promise<PaidProgramme | null> {
  if (!sessionId) return null;
  try {
    const session = await retrieveCheckoutSession(sessionId);
    const programme = findProgramme(session.metadata?.programme_id ?? programmeId ?? "");
    if (
      session.payment_status !== "paid" ||
      !programme ||
      session.amount_total !== programme.amountPence ||
      session.currency !== "gbp"
    ) {
      return null;
    }
    return {
      sessionId,
      programmeId: programme.id,
      programmeName: programme.name,
      amountPence: programme.amountPence,
      email: session.customer_details?.email ?? "",
      name: session.customer_details?.name ?? "",
      phone: session.customer_details?.phone ?? "",
    };
  } catch {
    return null;
  }
}
