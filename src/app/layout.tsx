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

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mayfair Tonight",
              url: "https://mayfairtonight.com",
              description: "The insider guide to Mayfair nightlife. Club comparisons, guestlist guides, dress codes, and nightlife planning for Mayfair, London.",
              publisher: {
                "@type": "Organization",
                name: "Mayfair Tonight",
                url: "https://mayfairtonight.com",
                areaServed: {
                  "@type": "Place",
                  name: "Mayfair, London",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Mayfair",
                    addressRegion: "London",
                    addressCountry: "GB",
                  },
                },
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
