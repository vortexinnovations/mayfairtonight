import { Metadata } from "next";
import { notFound } from "next/navigation";
import { nights, getNightBySlug } from "@/data/nights";
import { getClubsByNight, clubs } from "@/data/clubs";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroImage from "@/components/HeroImage";
import { nightImages, clubImages } from "@/data/images";
import Link from "next/link";

export async function generateStaticParams() {
  return nights.map((n) => ({ night: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ night: string }>;
}): Promise<Metadata> {
  const { night } = await params;
  const nightInfo = getNightBySlug(night);
  if (!nightInfo) return {};

  return {
    title: nightInfo.metaTitle,
    description: nightInfo.metaDescription,
    alternates: {
      canonical: `https://mayfairtonight.com/nights/${nightInfo.slug}`,
    },
    openGraph: {
      title: nightInfo.metaTitle,
      description: nightInfo.metaDescription,
      url: `https://mayfairtonight.com/nights/${nightInfo.slug}`,
    },
  };
}

export default async function NightPage({
  params,
}: {
  params: Promise<{ night: string }>;
}) {
  const { night } = await params;
  const nightInfo = getNightBySlug(night);
  if (!nightInfo) notFound();

  const openClubs = getClubsByNight(nightInfo.day);

  return (
    <>
      <HeroImage
        src={nightImages[nightInfo.slug] || "/gallery/images/DSC_6808.jpg"}
        alt={`${nightInfo.day} night in Mayfair`}
      >
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>
          {" / "}
          <span className="text-gray-300">{nightInfo.day} Night</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          {nightInfo.h1}
        </h1>
        <p className="text-dark-muted mt-2">
          {openClubs.length} clubs open · {nightInfo.vibe}
        </p>
      </HeroImage>

      <article className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex justify-end mb-6">
          <div className="hidden md:block">
            <WhatsAppCTA variant="night" night={nightInfo.day} size="md" />
          </div>
        </div>

        {/* Intro */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-5 mb-8">
          <p className="text-gray-300 leading-relaxed">{nightInfo.intro}</p>
        </div>

        {/* Our recommendation */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Our {nightInfo.day} Recommendation
          </h2>
          <div className="bg-dark-card border-l-2 border-gold p-5 rounded-r-lg">
            <p className="text-gray-300 leading-relaxed">
              {nightInfo.recommendation}
            </p>
          </div>
        </section>

        {/* Best for */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            {nightInfo.day} Night is Best For
          </h2>
          <p className="text-gray-300">{nightInfo.bestFor}</p>
        </section>

        {/* Clubs open */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Clubs Open on {nightInfo.day} Night
          </h2>
          {openClubs.length > 0 ? (
            <div className="space-y-4">
              {openClubs.map((club) => (
                <ClubCard
                  key={club.slug}
                  slug={club.slug}
                  name={club.name}
                  tagline={club.tagline}
                  musicPolicy={club.musicPolicy}
                  openingTime={club.openingTime}
                  area={club.area}
                  tableMinimum={club.tableMinimum}
                  imageSrc={clubImages[club.slug]?.card}
                />
              ))}
            </div>
          ) : (
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center">
              <p className="text-gray-300 mb-2">
                Most Mayfair clubs are closed on {nightInfo.day}s
              </p>
              <p className="text-dark-muted mb-4">
                Check out the big nights — Thursday through Saturday
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/nights/thursday"
                  className="border border-gold text-gold px-4 py-2 rounded-lg text-sm hover:bg-gold hover:text-black transition-colors"
                >
                  Thursday
                </Link>
                <Link
                  href="/nights/friday"
                  className="border border-gold text-gold px-4 py-2 rounded-lg text-sm hover:bg-gold hover:text-black transition-colors"
                >
                  Friday
                </Link>
                <Link
                  href="/nights/saturday"
                  className="border border-gold text-gold px-4 py-2 rounded-lg text-sm hover:bg-gold hover:text-black transition-colors"
                >
                  Saturday
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Book Your {nightInfo.day} Night
          </h2>
          <p className="text-dark-muted mb-4">
            Tell us what you&apos;re looking for and we&apos;ll find the perfect
            spot for your group.
          </p>
          <WhatsAppCTA variant="night" night={nightInfo.day} size="lg" />
        </div>

        {/* Other nights */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">
            Other Nights in Mayfair
          </h2>
          <div className="flex flex-wrap gap-2">
            {nights
              .filter((n) => n.slug !== nightInfo.slug)
              .map((n) => (
                <Link
                  key={n.slug}
                  href={`/nights/${n.slug}`}
                  className="bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-gold/30 hover:text-gold transition-colors"
                >
                  {n.day}
                </Link>
              ))}
          </div>
        </section>
      </article>

      <StickyBookingBar variant="night" night={nightInfo.day} />
    </>
  );
}
