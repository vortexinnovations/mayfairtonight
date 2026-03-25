import { Metadata } from "next";
import { clubs } from "@/data/clubs";
import ClubCard from "@/components/ClubCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "Mayfair Nightclubs — The Complete Guide to London's Best Clubs",
  description:
    "Every top nightclub in Mayfair and London — Tape London, Cirque Le Soir, Libertine, Ministry of Sound, and more. Opening times, music, dress code, and instant table bookings.",
  alternates: { canonical: "https://mayfairtonight.com/clubs" },
};

export default function ClubsPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Mayfair <span className="text-gold">Nightclubs</span>
            </h1>
            <p className="text-dark-muted mt-2">
              The complete guide to London&apos;s best clubs — insider info, music
              policy, and instant table bookings.
            </p>
          </div>
          <div className="hidden md:block">
            <WhatsAppCTA size="md" />
          </div>
        </div>

        <div className="space-y-4">
          {clubs.map((club) => (
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
