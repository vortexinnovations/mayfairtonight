import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayfairtonight.com"),
  title: {
    default: "Mayfair Tonight — What's On at Mayfair's Best Clubs Tonight",
    template: "%s | Mayfair Tonight",
  },
  description:
    "Find out what's happening tonight at Mayfair's best nightclubs. Live updates on which clubs are open, music, events, and table bookings. Your insider guide to going out in Mayfair.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mayfairtonight.com",
    siteName: "Mayfair Tonight",
    title: "Mayfair Tonight — What's On at Mayfair's Best Clubs Tonight",
    description:
      "Find out what's happening tonight at Mayfair's best nightclubs. Live updates, events, and instant table bookings via WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayfair Tonight — What's On at Mayfair's Best Clubs Tonight",
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

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mayfair Tonight",
              description: "The insider guide to Mayfair nightlife — club listings, guestlist guides, dress codes, and instant table bookings via WhatsApp.",
              url: "https://mayfairtonight.com",
              telephone: "+447880662708",
              image: "https://mayfairtonight.com/gallery/images/DSC_7021.jpg",
              logo: "https://mayfairtonight.com/icon.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9 Swallow Street",
                addressLocality: "London",
                addressRegion: "Greater London",
                postalCode: "W1B 4DF",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.5074,
                longitude: -0.1278,
              },
              areaServed: {
                "@type": "City",
                name: "London",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "reservations",
                telephone: "+447880662708",
                availableLanguage: "English",
              },
              priceRange: "\u00a3\u00a3\u00a3",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "22:00",
                closes: "03:00",
              },
              sameAs: ["https://londonluxurynightlife.com"],
            }),
          }}
        />
      </body>
    </html>
  );
}
