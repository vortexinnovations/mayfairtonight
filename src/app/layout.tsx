import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WHATSAPP_TELEPHONE } from "@/lib/whatsapp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayfairtonight.com"),
  title: {
    default: "Mayfair Tonight: What's On at Mayfair's Best Clubs Tonight",
    template: "%s | Mayfair Tonight",
  },
  description:
    "Find out what's happening tonight at Mayfair's best nightclubs. Live updates on which clubs are open, music, events, and table bookings. Your insider guide to going out in Mayfair.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mayfairtonight.com",
    siteName: "Mayfair Tonight",
    title: "Mayfair Tonight: What's On at Mayfair's Best Clubs Tonight",
    description:
      "Find out what's happening tonight at Mayfair's best nightclubs. Live updates, events, and instant table bookings via WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayfair Tonight: What's On at Mayfair's Best Clubs Tonight",
    description:
      "Find out what's happening tonight at Mayfair's best nightclubs. Live updates, events, and instant table bookings.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mayfairtonight.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-dark text-white antialiased">
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />

        {/* Organization Schema (no business address: the service has no premises) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mayfair Tonight",
              description: "The insider guide to Mayfair nightlife: club listings, guestlist guides, dress codes, and instant table bookings via WhatsApp.",
              url: "https://mayfairtonight.com",
              telephone: WHATSAPP_TELEPHONE,
              image: "https://mayfairtonight.com/gallery/images/fe4414_dfa2530f4b3842c6ad4531f28893fd4f.jpg",
              logo: "https://mayfairtonight.com/icon.svg",
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
            }),
          }}
        />
      </body>
    </html>
  );
}
