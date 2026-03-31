import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getOpenClubs } from "@/data/clubs";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroImage from "@/components/HeroImage";
import { heroImages, clubImages } from "@/data/images";

export const metadata: Metadata = {
  title: "All Clubs We Cover — Full Venue Directory",
  description:
    "Browse every nightclub we cover across Mayfair and central London. Quick access to opening nights, music policy, dress code, and booking info for each venue.",
  alternates: { canonical: "https://mayfairtonight.com/clubs" },
  openGraph: {
    title: "All Clubs We Cover — Full Venue Directory",
    description:
      "Browse every nightclub we cover across Mayfair and central London. Opening nights, music policy, dress code, and booking info for each venue.",
    url: "https://mayfairtonight.com/clubs",
  },
};

export default function ClubsPage() {
  return (
    <>
      <HeroImage
        src={heroImages.clubs}
        alt="Mayfair nightclubs directory"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          All <span className="text-gold">Clubs</span>
        </h1>
        <p className="text-dark-muted mt-2">
          Every venue we cover — browse the full directory. For our ranked guide, see{" "}
          <Link href="/best-nightclubs-in-mayfair" className="text-gold hover:text-gold-light">best nightclubs in Mayfair</Link>.
        </p>
      </HeroImage>

      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex justify-end mb-8">
          <div className="hidden md:block">
            <WhatsAppCTA size="md" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getOpenClubs().map((club) => (
            <Link
              key={club.slug}
              href={`/clubs/${club.slug}`}
              className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-t-xl">
                <Image
                  src={clubImages[club.slug]?.card || "/gallery/images/fe4414_93e24e4e03f64f3bb0fb3cd00d5a7b6e.jpg"}
                  alt={`${club.name} nightclub`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors">
                  {club.name}
                </h3>
                <p className="text-dark-muted text-sm mt-1">{club.tagline}</p>
                <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
                  <span className="bg-dark px-2 py-0.5 rounded text-gray-300 border border-dark-border">
                    {club.musicPolicy.join(" · ")}
                  </span>
                  <span className="text-dark-muted">{club.area}</span>
                </div>
                <div className="mt-2 text-xs text-gold">Tables from {club.tableMinimum}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <StickyBookingBar />
    </>
  );
}
