import { Metadata } from "next";
import Link from "next/link";
import { getOpenClubs } from "@/data/clubs";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "All Clubs We Cover — Full Venue Directory",
  description:
    "Browse every nightclub we cover across Mayfair and central London. Quick access to opening nights, music policy, dress code, and booking info for each venue.",
  alternates: { canonical: "https://mayfairtonight.com/clubs" },
};

export default function ClubsPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              All <span className="text-gold">Clubs</span>
            </h1>
            <p className="text-dark-muted mt-2">
              Every venue we cover — browse the full directory. For our ranked guide, see{" "}
              <Link href="/best-nightclubs-in-mayfair" className="text-gold hover:text-gold-light">best nightclubs in Mayfair</Link>.
            </p>
          </div>
          <div className="hidden md:block">
            <WhatsAppCTA size="md" />
          </div>
        </div>

        <div className="space-y-4">
          {getOpenClubs().map((club) => (
            <ClubCard
              key={club.slug}
              slug={club.slug}
              name={club.name}
              tagline={club.tagline}
              musicPolicy={club.musicPolicy}
              openingTime={club.openingTime}
              area={club.area}
              tableMinimum={club.tableMinimum}
              compact
            />
          ))}
        </div>
      </section>
      <StickyBookingBar />
    </>
  );
}
