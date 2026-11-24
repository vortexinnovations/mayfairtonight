import { WHATSAPP_TELEPHONE } from "@/lib/whatsapp";

export const SITE_NAME = "Mayfair Tonight";
export const SITE_URL = "https://mayfairtonight.com";

/**
 * The site itself, for structured data: a booking service with no premises,
 * so an Organization and never an address.
 */
export const ORGANIZATION = {
  "@type": "Organization",
  name: SITE_NAME,
  description: "The insider guide to Mayfair nightlife: club listings, guestlist guides, dress codes, and instant table bookings via WhatsApp.",
  url: SITE_URL,
  telephone: WHATSAPP_TELEPHONE,
  image: `${SITE_URL}/gallery/images/fe4414_dfa2530f4b3842c6ad4531f28893fd4f.jpg`,
  logo: `${SITE_URL}/icon.svg`,
  areaServed: {
    "@type": "City",
    name: "London",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "reservations",
    telephone: WHATSAPP_TELEPHONE,
    availableLanguage: "English",
  },
};

/** Every article is credited to the team; "How we write" is on the about page. */
export const AUTHOR = {
  "@type": "Organization",
  name: SITE_NAME,
  url: `${SITE_URL}/about`,
};
