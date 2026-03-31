import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { clubs, getClubBySlug, getOpenClubs } from "@/data/clubs";
import { clubImages } from "@/data/images";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import HeroImage from "@/components/HeroImage";
import StickyBookingBar from "@/components/StickyBookingBar";
import Link from "next/link";

export async function generateStaticParams() {
  return clubs.map((club) => ({ slug: club.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const club = getClubBySlug(slug);
  if (!club) return {};

  const isClosed = club.status === "closed";

  return {
    title: isClosed
      ? `${club.name} — Permanently Closed | Alternatives & Updates`
      : `${club.name} Tonight — What's On, Events & Table Bookings`,
    description: isClosed
      ? `${club.name} has permanently closed. Find the best alternative clubs in Mayfair and London. Updated guide with similar venues.`
      : `${club.name} in ${club.area} — ${club.tagline}. Open ${club.openNights.join(", ")}. ${club.musicPolicy.join(", ")} music. Tables from ${club.tableMinimum}. Book instantly via WhatsApp.`,
    alternates: { canonical: `https://mayfairtonight.com/clubs/${club.slug}` },
    openGraph: {
      title: `${club.name} Tonight — Events, Music & Bookings`,
      description: `${club.tagline}. ${club.musicPolicy.join(", ")} music in ${club.area}. Tables from ${club.tableMinimum}.`,
      url: `https://mayfairtonight.com/clubs/${club.slug}`,
    },
  };
}

export default async function ClubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const club = getClubBySlug(slug);
  if (!club) notFound();

  const isClosed = club.status === "closed";
  const openClubs = getOpenClubs();
  const images = clubImages[club.slug];

  return (
    <>
      <HeroImage
        src={images?.hero || "/gallery/images/fe4414_93e24e4e03f64f3bb0fb3cd00d5a7b6e.jpg"}
        alt={`${club.name} nightclub interior`}
        overlay={
          isClosed
            ? "bg-gradient-to-t from-black via-black/80 to-black/60"
            : undefined
        }
      >
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>
          {" / "}
          <Link href="/clubs" className="hover:text-gold">Clubs</Link>
          {" / "}
          <span className="text-gray-300">{club.name}</span>
        </nav>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {club.name}
            </h1>
            {isClosed ? (
              <p className="text-red-400 text-lg font-semibold mt-1">Permanently Closed</p>
            ) : (
              <p className="text-gold text-lg mt-1">{club.tagline}</p>
            )}
            <p className="text-dark-muted mt-1">{club.location}</p>
          </div>
          {!isClosed && (
            <div className="shrink-0">
              <WhatsAppCTA variant="club" clubName={club.name} size="md" />
            </div>
          )}
        </div>
      </HeroImage>

      <article className="max-w-4xl mx-auto px-4 pt-8">

        {/* Closed venue banner */}
        {isClosed && club.closedMessage && (
          <div className="bg-red-950/30 border border-red-800/40 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-red-400 mb-2">
              {club.name} Has Permanently Closed
            </h2>
            <p className="text-gray-300 leading-relaxed">{club.closedMessage}</p>
            <div className="mt-4">
              <WhatsAppCTA size="md" />
              <p className="text-dark-muted text-sm mt-2">
                Message us and we&apos;ll recommend the best alternative for your night.
              </p>
            </div>
          </div>
        )}

        {/* Quick info cards — only for open venues */}
        {!isClosed && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="bg-dark-card border border-dark-border rounded-lg p-3">
              <p className="text-xs text-dark-muted">Music</p>
              <p className="text-sm font-medium text-white mt-0.5">
                {club.musicPolicy.join(", ")}
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-3">
              <p className="text-xs text-dark-muted">Opens</p>
              <p className="text-sm font-medium text-white mt-0.5">
                {club.openingTime} — {club.closingTime}
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-3">
              <p className="text-xs text-dark-muted">Tables from</p>
              <p className="text-sm font-medium text-gold mt-0.5">
                {club.tableMinimum}
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-3">
              <p className="text-xs text-dark-muted">Vibe</p>
              <p className="text-sm font-medium text-white mt-0.5">{club.vibe}</p>
            </div>
          </div>
        )}

        {/* Main content */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            About {club.name}
          </h2>
          <p className="text-gray-300 leading-relaxed">{club.description}</p>

          {images?.interior && (
            <div className="relative aspect-video overflow-hidden rounded-xl mt-6">
              <Image
                src={images.interior}
                alt={`Inside ${club.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
        </section>

        {!isClosed && (
          <>
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                What to Expect
              </h2>
              <p className="text-gray-300 leading-relaxed">{club.whatToExpect}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Opening Nights
              </h2>
              <div className="flex flex-wrap gap-2">
                {club.openNights.map((night) => (
                  <Link
                    key={night}
                    href={`/nights/${night.toLowerCase()}`}
                    className="bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-sm text-white hover:border-gold/30 transition-colors"
                  >
                    {night}
                  </Link>
                ))}
              </div>
              <p className="text-dark-muted text-sm mt-2">
                {club.openingTime} — {club.closingTime}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">Dress Code</h2>
              <p className="text-gray-300 leading-relaxed">{club.dressCode}</p>
              <p className="text-dark-muted text-sm mt-2">{club.dressCodeNotes}</p>
              <Link
                href="/dress-code"
                className="text-gold text-sm hover:text-gold-light mt-2 inline-block"
              >
                Full Mayfair dress code guide →
              </Link>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">Insider Tip</h2>
              <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
                <p className="text-gray-300 italic">{club.insiderTip}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">Best For</h2>
              <p className="text-gray-300">{club.bestFor}</p>
            </section>

            {/* CTA block */}
            <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
              <h2 className="text-xl font-semibold text-white mb-2">
                Book a Table at {club.name}
              </h2>
              <p className="text-dark-muted mb-4">
                Tables from {club.tableMinimum}. Message us on WhatsApp and we&apos;ll
                sort everything out.
              </p>
              <WhatsAppCTA variant="club" clubName={club.name} size="lg" />
            </div>
          </>
        )}

        {/* Explore Mayfair Guides */}
        {!isClosed && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">
              Explore Mayfair Nightlife Guides
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {club.musicPolicy.some((m) => ["Hip-Hop", "RnB"].includes(m)) && (
                <Link href="/best-hip-hop-clubs-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-3 hover:border-gold/30 transition-colors">
                  <p className="text-sm font-medium text-white">Best Hip-Hop Clubs</p>
                  <p className="text-xs text-dark-muted mt-0.5">Mayfair ranked guide</p>
                </Link>
              )}
              {club.musicPolicy.some((m) => ["House", "Deep House", "Tech House"].includes(m)) && (
                <Link href="/mayfair-clubs-by-music-style" className="bg-dark-card border border-dark-border rounded-lg p-3 hover:border-gold/30 transition-colors">
                  <p className="text-sm font-medium text-white">Clubs by Music Style</p>
                  <p className="text-xs text-dark-muted mt-0.5">Find your sound</p>
                </Link>
              )}
              <Link href="/mayfair-club-dress-code" className="bg-dark-card border border-dark-border rounded-lg p-3 hover:border-gold/30 transition-colors">
                <p className="text-sm font-medium text-white">Dress Code Guide</p>
                <p className="text-xs text-dark-muted mt-0.5">What to wear to {club.name}</p>
              </Link>
              <Link href="/mayfair-club-entry-rules" className="bg-dark-card border border-dark-border rounded-lg p-3 hover:border-gold/30 transition-colors">
                <p className="text-sm font-medium text-white">Entry Rules</p>
                <p className="text-xs text-dark-muted mt-0.5">Door policy &amp; tips</p>
              </Link>
              <Link href="/best-clubs-for-groups-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-3 hover:border-gold/30 transition-colors">
                <p className="text-sm font-medium text-white">Best for Groups</p>
                <p className="text-xs text-dark-muted mt-0.5">Group night planning</p>
              </Link>
              <Link href="/mayfair-night-out-itinerary" className="bg-dark-card border border-dark-border rounded-lg p-3 hover:border-gold/30 transition-colors">
                <p className="text-sm font-medium text-white">Night Out Itinerary</p>
                <p className="text-xs text-dark-muted mt-0.5">Plan your evening</p>
              </Link>
            </div>
          </section>
        )}

        {/* Related clubs */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">
            {isClosed ? "Open Clubs in Mayfair" : "Similar Clubs Nearby"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {openClubs
              .filter((c) => c.slug !== club.slug)
              .slice(0, 6)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/clubs/${c.slug}`}
                  className="bg-dark-card border border-dark-border rounded-lg p-3 hover:border-gold/30 transition-colors"
                >
                  <p className="text-sm font-medium text-white">{c.name}</p>
                  <p className="text-xs text-dark-muted mt-0.5">{c.musicPolicy[0]}</p>
                </Link>
              ))}
          </div>
        </section>
      </article>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            isClosed
              ? {
                  "@context": "https://schema.org",
                  "@type": "NightClub",
                  name: club.name,
                  description: `${club.name} has permanently closed.`,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: club.location,
                    addressLocality: "London",
                    addressCountry: "GB",
                  },
                }
              : {
                  "@context": "https://schema.org",
                  "@type": "NightClub",
                  name: club.name,
                  description: club.description,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: club.location,
                    addressLocality: "London",
                    addressCountry: "GB",
                  },
                  openingHours: club.openNights.map(
                    (night) =>
                      `${night.substring(0, 2)} ${club.openingTime}-${club.closingTime}`
                  ),
                  priceRange: `Tables from ${club.tableMinimum}`,
                  servesCuisine: club.musicPolicy.join(", "),
                }
          ),
        }}
      />

      {!isClosed && <StickyBookingBar variant="club" clubName={club.name} />}
    </>
  );
}
