import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import HeroImage from "@/components/HeroImage";
import { heroImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Book a Table — WhatsApp Table Bookings for Mayfair Clubs",
  description:
    "Book a table at Mayfair's best nightclubs instantly via WhatsApp. No forms, no waiting. Tell us what you want and we'll make it happen.",
  alternates: { canonical: "https://mayfairtonight.com/contact" },
  openGraph: {
    title: "Book a Table — Mayfair Club Table Bookings via WhatsApp",
    description:
      "Instant table bookings at Mayfair's top nightclubs. Message us on WhatsApp — no forms, no hassle.",
    url: "https://mayfairtonight.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
    <HeroImage src={heroImages.contact} alt="Book a table at Mayfair nightclubs">
      <nav className="text-sm text-dark-muted mb-4">
        <Link href="/" className="hover:text-gold">Tonight</Link>
        {" / "}
        <span className="text-gray-300">Book a Table</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        Book a <span className="text-gold">Table</span>
      </h1>
      <p className="text-gray-300 text-lg max-w-xl">
        No forms. No waiting. Message us on WhatsApp and we&apos;ll sort your
        night out within minutes. It&apos;s that simple.
      </p>
    </HeroImage>

    <article className="max-w-3xl mx-auto px-4 pt-8">
      {/* Main CTA */}
      <div className="bg-dark-card border border-gold/30 rounded-xl p-8 text-center mb-10">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#25D366]/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Message Us on WhatsApp
          </h2>
          <p className="text-dark-muted max-w-md mx-auto">
            Tap the button below and tell us where you want to go, how many
            people, and what night. We reply fast — usually within minutes.
          </p>
        </div>
        <WhatsAppCTA size="lg" />
      </div>

      {/* What to expect */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          How It Works
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="shrink-0 w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
              <span className="text-gold font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-medium text-white">Send us a message</h3>
              <p className="text-sm text-dark-muted mt-0.5">
                Tell us the date, group size, music preference, and whether you
                want a table or guestlist.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
              <span className="text-gold font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-medium text-white">We make a recommendation</h3>
              <p className="text-sm text-dark-muted mt-0.5">
                Based on what&apos;s on that night and what suits your group,
                we&apos;ll suggest the best option.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
              <span className="text-gold font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-medium text-white">You&apos;re booked</h3>
              <p className="text-sm text-dark-muted mt-0.5">
                We confirm your table or guestlist spot and send you everything
                you need — address, dress code, arrival time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">
          What We Can Book
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-dark-card border border-dark-border rounded-lg p-4">
            <h3 className="font-medium text-white mb-1">VIP Table Bookings</h3>
            <p className="text-sm text-dark-muted">
              Reserved tables with bottle service at any Mayfair club.
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-4">
            <h3 className="font-medium text-white mb-1">Guestlist</h3>
            <p className="text-sm text-dark-muted">
              Guaranteed entry without a table booking.
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-4">
            <h3 className="font-medium text-white mb-1">Group Nights Out</h3>
            <p className="text-sm text-dark-muted">
              Planning for groups — we&apos;ll find the right venue for your crew.
            </p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-4">
            <h3 className="font-medium text-white mb-1">Recommendations</h3>
            <p className="text-sm text-dark-muted">
              Not sure where to go? We&apos;ll give you honest, insider advice.
            </p>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">
          Browse Before You Book
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/"
            className="bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-gold/30 transition-colors"
          >
            What&apos;s on tonight
          </Link>
          <Link
            href="/this-weekend"
            className="bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-gold/30 transition-colors"
          >
            This weekend
          </Link>
          <Link
            href="/where-to-go-tonight"
            className="bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-gold/30 transition-colors"
          >
            Help me decide
          </Link>
          <Link
            href="/clubs"
            className="bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-gold/30 transition-colors"
          >
            All clubs
          </Link>
          <Link
            href="/dress-code"
            className="bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-gold/30 transition-colors"
          >
            Dress code
          </Link>
        </div>
      </section>
    </article>
    </>
  );
}
