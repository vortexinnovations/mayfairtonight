// Single source of truth for the booking WhatsApp number.
// Set NEXT_PUBLIC_WHATSAPP_NUMBER in Vercel (Project → Settings → Environment
// Variables) to change it everywhere. Digits only, full international format,
// no "+" and no spaces — e.g. 447348644054.
// Note: NEXT_PUBLIC_* values are inlined at build time, so a redeploy is
// required for a change to take effect.
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447348644054";

/** E.164 form (+447348644054) — used for schema.org telephone fields. */
export const WHATSAPP_TELEPHONE = `+${WHATSAPP_NUMBER}`;

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralBookingLink(): string {
  const message = `Hi, I found you on mayfairtonight.com and I'd like to go out tonight. Here are my details:\n\nDate:\nGroup size:\nMusic preference:\nAny club preference:\nTable or guestlist:`;
  return getWhatsAppLink(message);
}

/** Clubs that run no guestlist: entry is by table booking only (owner decisions, 2026-10-21). */
export const NO_GUESTLIST_CLUBS = new Set(["The Box", "Scotch of St James", "BEAT London"]);

export function getClubBookingLink(clubName: string): string {
  if (NO_GUESTLIST_CLUBS.has(clubName)) {
    return getWhatsAppLink(
      `Hi, I'd like to book a table at ${clubName} tonight. Here are my details:\n\nDate:\nGroup size:\nAny special requests:`,
    );
  }
  const message = `Hi, I'd like to book at ${clubName} tonight. Here are my details:\n\nDate:\nGroup size:\nTable or guestlist:\nAny special requests:`;
  return getWhatsAppLink(message);
}

export function getNightBookingLink(night: string): string {
  const message = `Hi, I'm looking to go out on ${night} in Mayfair. Here are my details:\n\nGroup size:\nMusic preference:\nTable or guestlist:\nAny special requests:`;
  return getWhatsAppLink(message);
}
