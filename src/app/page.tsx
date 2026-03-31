import { Metadata } from "next";
import Image from "next/image";
import ClubCard from "@/components/ClubCard";
import HeroImage from "@/components/HeroImage";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import { clubs, getOpenClubs } from "@/data/clubs";
import eventsData from "@/data/events.json";
import { getTodayString, getDayOfWeek, formatDate } from "@/lib/utils";
import Link from "next/link";
import { heroImages, clubImages, sectionImages } from "@/data/images";

export const metadata: Metadata = {
  title: "What's On Tonight in Mayfair — Clubs Open Tonight London",
  description:
    "Find out what's happening tonight at Mayfair's best nightclubs. See which clubs are open, what music is playing, guest DJs, and book a table instantly via WhatsApp.",
  alternates: { canonical: "https://mayfairtonight.com" },
  openGraph: {
    title: "What's On Tonight in Mayfair — Clubs Open Tonight London",
    description:
      "Live guide to tonight's best clubs in Mayfair. Which clubs are open, music policy, events, and instant table bookings.",
    url: "https://mayfairtonight.com",
  },
};

export default function HomePage() {
  const today = getTodayString();
  const dayOfWeek = getDayOfWeek();
  const todayFormatted = formatDate(today);

  // Get tonight's events from the data file
  const tonightEvents = eventsData.filter((e) => e.date === today);

  // Get clubs open tonight based on day of week
  const openClubs = getOpenClubs();
  const clubsOpenTonight = openClubs.filter((c) =>
    c.openNights.map((n) => n.toLowerCase()).includes(dayOfWeek.toLowerCase())
  );

  const hasEvents = tonightEvents.length > 0;

  return (
    <>
      <HeroImage src={heroImages.homepage} alt="Mayfair nightclub atmosphere">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              What&apos;s On <span className="text-gold">Tonight</span>
            </h1>
            <p className="text-dark-muted mt-2">
              {todayFormatted} — {dayOfWeek} night in Mayfair
            </p>
          </div>
          <div className="hidden md:block">
            <WhatsAppCTA size="md" />
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-3">
          <div className="bg-dark-card/80 backdrop-blur border border-dark-border rounded-lg px-4 py-2">
            <span className="text-gold font-bold text-lg">{clubsOpenTonight.length}</span>
            <span className="text-dark-muted text-sm ml-2">clubs open tonight</span>
          </div>
          <Link
            href={`/nights/${dayOfWeek.toLowerCase()}`}
            className="bg-dark-card/80 backdrop-blur border border-dark-border rounded-lg px-4 py-2 hover:border-gold/30 transition-colors"
          >
            <span className="text-sm text-gray-300">
              Every {dayOfWeek} in Mayfair →
            </span>
          </Link>
          <Link
            href="/where-to-go-tonight"
            className="bg-dark-card/80 backdrop-blur border border-dark-border rounded-lg px-4 py-2 hover:border-gold/30 transition-colors"
          >
            <span className="text-sm text-gray-300">Help me choose →</span>
          </Link>
        </div>
      </HeroImage>

      {/* Tonight's listings */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-white mb-4">
          {hasEvents ? "Tonight's Events" : `Open Tonight — ${dayOfWeek}`}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hasEvents
            ? tonightEvents.map((event) => {
                const club = clubs.find((c) => c.slug === event.clubSlug);
                if (!club) return null;
                return (
                  <div key={event.clubSlug} className="group">
                    <Link href={`/clubs/${club.slug}`} className="block">
                      <div className="relative aspect-[3/2] overflow-hidden rounded-t-xl">
                        <Image
                          src={clubImages[event.clubSlug || ""]?.card || sectionImages.crowdEnergy}
                          alt={`${club.name} nightclub Mayfair`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </Link>
                    <ClubCard
                      slug={club.slug}
                      name={club.name}
                      tagline={club.tagline}
                      musicPolicy={club.musicPolicy}
                      openingTime={event.openingTime}
                      area={club.area}
                      tableMinimum={club.tableMinimum}
                      eventName={event.eventName}
                      eventDescription={event.description}
                      specialGuest={event.specialGuest || undefined}
                    />
                  </div>
                );
              })
            : clubsOpenTonight.map((club) => (
                <div key={club.slug} className="group">
                  <Link href={`/clubs/${club.slug}`} className="block">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-t-xl">
                      <Image
                        src={clubImages[club.slug]?.card || sectionImages.crowdEnergy}
                        alt={`${club.name} nightclub Mayfair`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </Link>
                  <ClubCard
                    slug={club.slug}
                    name={club.name}
                    tagline={club.tagline}
                    musicPolicy={club.musicPolicy}
                    openingTime={club.openingTime}
                    area={club.area}
                    tableMinimum={club.tableMinimum}
                  />
                </div>
              ))}
        </div>

        {clubsOpenTonight.length === 0 && !hasEvents && (
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center">
            <p className="text-lg text-white mb-2">
              Most Mayfair clubs are closed on {dayOfWeek}s
            </p>
            <p className="text-dark-muted mb-4">
              Check out what&apos;s coming up this weekend or browse by night
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/this-weekend"
                className="bg-gold text-black px-5 py-2 rounded-lg font-semibold hover:bg-gold-light transition-colors"
              >
                This Weekend
              </Link>
              <Link
                href="/nights/friday"
                className="border border-gold text-gold px-5 py-2 rounded-lg font-semibold hover:bg-gold hover:text-black transition-colors"
              >
                Friday Night
              </Link>
              <Link
                href="/nights/saturday"
                className="border border-gold text-gold px-5 py-2 rounded-lg font-semibold hover:bg-gold hover:text-black transition-colors"
              >
                Saturday Night
              </Link>
            </div>
          </div>
        )}

        {/* Event Schema Markup */}
        {hasEvents && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                tonightEvents.map((event) => ({
                  "@context": "https://schema.org",
                  "@type": "Event",
                  name: `${event.eventName} at ${event.clubName}`,
                  startDate: `${event.date}T${event.openingTime}:00`,
                  location: {
                    "@type": "Place",
                    name: event.clubName,
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "London",
                      addressCountry: "GB",
                    },
                  },
                  description: event.description,
                  organizer: {
                    "@type": "Organization",
                    name: event.clubName,
                  },
                }))
              ),
            }}
          />
        )}
      </section>

      {/* Internal links section */}
      <section className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-xl font-semibold text-white mb-4">
          Plan Your Week in Mayfair
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["Wednesday", "Thursday", "Friday", "Saturday"].map((night) => (
            <Link
              key={night}
              href={`/nights/${night.toLowerCase()}`}
              className="bg-dark-card border border-dark-border rounded-lg p-4 text-center hover:border-gold/30 transition-colors"
            >
              <p className="font-semibold text-white">{night}</p>
              <p className="text-xs text-dark-muted mt-1">
                {openClubs.filter((c) =>
                  c.openNights.map((n) => n.toLowerCase()).includes(night.toLowerCase())
                ).length}{" "}
                clubs open
              </p>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <Link
            href="/mayfair-nightclubs"
            className="bg-dark-card border border-dark-border rounded-lg p-4 text-center hover:border-gold/30 transition-colors"
          >
            <p className="font-semibold text-white">Mayfair Nightclubs</p>
            <p className="text-xs text-dark-muted mt-1">Full venue guide</p>
          </Link>
          <Link
            href="/best-nightclubs-in-mayfair"
            className="bg-dark-card border border-dark-border rounded-lg p-4 text-center hover:border-gold/30 transition-colors"
          >
            <p className="font-semibold text-white">Best Nightclubs</p>
            <p className="text-xs text-dark-muted mt-1">Top-rated clubs ranked</p>
          </Link>
          <Link
            href="/mayfair-nightlife-guide"
            className="bg-dark-card border border-dark-border rounded-lg p-4 text-center hover:border-gold/30 transition-colors"
          >
            <p className="font-semibold text-white">Nightlife Guide</p>
            <p className="text-xs text-dark-muted mt-1">Everything you need to know</p>
          </Link>
        </div>
      </section>

      {/* SEO content */}
      <section className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-lg font-semibold text-white mb-3">
          Going Out Tonight in Mayfair
        </h2>
        <div className="text-sm text-dark-muted space-y-3 max-w-3xl">
          <p>
            Mayfair Tonight is your real-time guide to what&apos;s happening at
            London&apos;s most exclusive nightclubs. We cover every major venue in
            our{" "}
            <Link href="/mayfair-nightclubs" className="text-gold hover:text-gold-light">
              Mayfair nightclubs guide
            </Link>
            {" "}— from members-only clubs like Tape London to
            entertainment powerhouses like Cirque Le Soir and Reign London.
          </p>
          <p>
            Whether you&apos;re looking for hip-hop, house music, live
            entertainment, or an intimate cocktail bar, our{" "}
            <Link href="/mayfair-nightlife-guide" className="text-gold hover:text-gold-light">
              Mayfair nightlife guide
            </Link>
            {" "}will help you find exactly where to go tonight. Need a VIP table?{" "}
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light"
            >
              Book bottle service and table reservations
            </a>
            {" "}to guarantee your spot at the{" "}
            <Link href="/best-nightclubs-in-mayfair" className="text-gold hover:text-gold-light">
              best nightclubs in Mayfair
            </Link>
            .
          </p>
          <p>
            Updated daily with tonight&apos;s events, guest DJs, and special
            parties. Check back every evening for the latest — or{" "}
            <Link href="/this-weekend" className="text-gold hover:text-gold-light">
              see what&apos;s on this weekend
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Booking CTA with background image */}
      <section className="relative mt-12 py-16 overflow-hidden">
        <Image
          src={sectionImages.ctaBooking}
          alt="VIP table service at Mayfair nightclub"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Book Your Table Tonight
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Skip the queue and guarantee your spot at Mayfair&apos;s best clubs.
            VIP tables, bottle service, and guestlist — all arranged via WhatsApp.
          </p>
          <WhatsAppCTA size="lg" />
        </div>
      </section>

      <StickyBookingBar />
    </>
  );
}
