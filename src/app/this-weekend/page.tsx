import { Metadata } from "next";
import Link from "next/link";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroImage from "@/components/HeroImage";
import { heroImages } from "@/data/images";
import { clubs, getOpenClubs } from "@/data/clubs";
import eventsData from "@/data/events.json";
import { getWeekendDates, formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "This Weekend in Mayfair — London Clubs Friday, Saturday & Sunday",
  description:
    "Plan your weekend in Mayfair. See what's on this Friday, Saturday, and Sunday at London's best nightclubs. Events, music, and instant table bookings via WhatsApp.",
  alternates: { canonical: "https://mayfairtonight.com/this-weekend" },
  openGraph: {
    title: "This Weekend in Mayfair — Clubs, Events & Table Bookings",
    description:
      "Your complete weekend guide to Mayfair's best nightclubs. Friday, Saturday, and Sunday — events, music, and instant bookings.",
    url: "https://mayfairtonight.com/this-weekend",
  },
};

export default function WeekendPage() {
  const weekend = getWeekendDates();

  const weekendDays = [
    { date: weekend.friday, day: "Friday", slug: "friday" },
    { date: weekend.saturday, day: "Saturday", slug: "saturday" },
    { date: weekend.sunday, day: "Sunday", slug: "sunday" },
  ];

  return (
    <>
      <HeroImage src={heroImages.thisWeekend} alt="This weekend in Mayfair">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>
          {" / "}
          <span className="text-gray-300">This Weekend</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          This Weekend in <span className="text-gold">Mayfair</span>
        </h1>
        <p className="text-dark-muted">
          {formatDate(weekend.friday)} — {formatDate(weekend.sunday)}
        </p>
      </HeroImage>

      <article className="max-w-6xl mx-auto px-4 pt-8">

        {weekendDays.map(({ date, day, slug }) => {
          const dayEvents = eventsData.filter((e) => e.date === date);
          const dayClubs = getOpenClubs().filter((c) =>
            c.openNights.map((n) => n.toLowerCase()).includes(day.toLowerCase())
          );

          const hasEvents = dayEvents.length > 0;

          return (
            <section key={day} className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">
                  {day} — {formatDate(date)}
                </h2>
                <Link
                  href={`/nights/${slug}`}
                  className="text-sm text-gold hover:text-gold-light"
                >
                  Every {day} →
                </Link>
              </div>

              {hasEvents ? (
                <div className="space-y-4">
                  {dayEvents.map((event) => {
                    const club = clubs.find((c) => c.slug === event.clubSlug);
                    if (!club) return null;
                    return (
                      <ClubCard
                        key={`${event.clubSlug}-${event.date}`}
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
                    );
                  })}
                </div>
              ) : dayClubs.length > 0 ? (
                <div className="space-y-4">
                  {dayClubs.map((club) => (
                    <ClubCard
                      key={club.slug}
                      slug={club.slug}
                      name={club.name}
                      tagline={club.tagline}
                      musicPolicy={club.musicPolicy}
                      openingTime={club.openingTime}
                      area={club.area}
                      tableMinimum={club.tableMinimum}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-dark-card border border-dark-border rounded-xl p-5 text-center">
                  <p className="text-dark-muted">
                    Most Mayfair clubs are closed on {day}s.{" "}
                    <Link
                      href="/nights/saturday"
                      className="text-gold hover:text-gold-light"
                    >
                      Check Saturday instead →
                    </Link>
                  </p>
                </div>
              )}
            </section>
          );
        })}

        {/* CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Book Your Weekend
          </h2>
          <p className="text-dark-muted mb-4">
            Tell us which night, how many people, and what vibe you&apos;re after.
            We&apos;ll handle the rest.
          </p>
          <WhatsAppCTA size="lg" />
        </div>

        {/* Event schema for weekend events */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              eventsData
                .filter((e) =>
                  [weekend.friday, weekend.saturday, weekend.sunday].includes(e.date)
                )
                .map((event) => ({
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
      </article>

      <StickyBookingBar />
    </>
  );
}
