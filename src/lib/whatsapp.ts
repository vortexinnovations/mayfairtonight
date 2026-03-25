const WHATSAPP_NUMBER = "447880662708";

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralBookingLink(): string {
  const message = `Hi, I found you on mayfairtonight.com and I'd like to go out tonight. Here are my details:\n\nDate:\nGroup size:\nMusic preference:\nAny club preference:\nTable or guestlist:`;
  return getWhatsAppLink(message);
}

export function getClubBookingLink(clubName: string): string {
  const message = `Hi, I'd like to book at ${clubName} tonight. Here are my details:\n\nDate:\nGroup size:\nTable or guestlist:\nAny special requests:`;
  return getWhatsAppLink(message);
}

export function getNightBookingLink(night: string): string {
  const message = `Hi, I'm looking to go out on ${night} in Mayfair. Here are my details:\n\nGroup size:\nMusic preference:\nTable or guestlist:\nAny special requests:`;
  return getWhatsAppLink(message);
}
