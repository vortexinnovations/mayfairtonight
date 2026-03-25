import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "Where Should I Go Tonight? — Best Clubs in Mayfair London",
  description:
    "Not sure where to go tonight in London? Our insider guide breaks it down by vibe — hip-hop, house music, live entertainment, intimate bars. Find your perfect night out in Mayfair.",
  alternates: {
    canonical: "https://mayfairtonight.com/where-to-go-tonight",
  },
  openGraph: {
    title: "Where Should I Go Tonight? — Best Clubs in Mayfair",
    description:
      "Not sure where to go? We break down Mayfair's best clubs by vibe so you can find the perfect night out in seconds.",
    url: "https://mayfairtonight.com/where-to-go-tonight",
  },
};

interface Recommendation {
  vibe: string;
  emoji: string;
  description: string;
  clubs: { name: string; slug: string; why: string }[];
}

const recommendations: Recommendation[] = [
  {
    vibe: "If you want hip-hop and RnB",
    emoji: "🎤",
    description:
      "Mayfair runs on hip-hop. Most of the top clubs play it, but these do it best. Expect bottle service, big energy, and a crowd that knows every word.",
    clubs: [
      {
        name: "Tape London",
        slug: "tape-london",
        why: "The most exclusive room. Celebrity crowd, incredible sound, invite-only energy.",
      },
      {
        name: "TABU London",
        slug: "tabu-london",
        why: "Japanese underground aesthetics with quality hip-hop. The fashion crowd's pick.",
      },
      {
        name: "Libertine",
        slug: "libertine",
        why: "Futuristic venue, packed dance floor, pure party energy. One of Mayfair's biggest nights.",
      },
      {
        name: "BEAT London",
        slug: "beat-london",
        why: "Built around the sound system. If the music matters more than the scene, go here.",
      },
    ],
  },
  {
    vibe: "If you want house music",
    emoji: "🎧",
    description:
      "If four-to-the-floor is your thing, Mayfair has options that go beyond the mainstream. These venues take their house music seriously.",
    clubs: [
      {
        name: "Maddox",
        slug: "maddox",
        why: "The best house music room in Mayfair. Dinner first, deep house after. Sophisticated crowd.",
      },
      {
        name: "Ministry of Sound",
        slug: "ministry-of-sound",
        why: "Not Mayfair, but untouchable for house and techno. Multiple rooms, dancing until 6am.",
      },
      {
        name: "Cuckoo Club",
        slug: "cuckoo-club",
        why: "The downstairs room is proper house. Darker, moodier, and more about the music.",
      },
    ],
  },
  {
    vibe: "If you want a show and entertainment",
    emoji: "🎪",
    description:
      "Some venues go beyond music and create a full experience. Fire breathers, aerial acts, live vocals — these clubs turn nightlife into theatre.",
    clubs: [
      {
        name: "Cirque Le Soir",
        slug: "cirque-le-soir",
        why: "A full circus in a nightclub. Contortionists, fire breathers, snake charmers. Unforgettable.",
      },
      {
        name: "The London Reign",
        slug: "the-london-reign",
        why: "Aerial acrobats, live singers, Las Vegas-level production. The most extravagant show in Mayfair.",
      },
      {
        name: "Lio Club London",
        slug: "lio-london",
        why: "Dinner and a show, then the room transforms into a nightclub. The complete package.",
      },
    ],
  },
  {
    vibe: "If you want intimate and exclusive",
    emoji: "🥃",
    description:
      "Not every great night needs a packed dance floor. These venues offer something more refined — small rooms, handpicked crowds, and an atmosphere you can actually enjoy.",
    clubs: [
      {
        name: "Tape London",
        slug: "tape-london",
        why: "The most exclusive door in London. Small room, A-list crowd, members-club energy.",
      },
      {
        name: "Scotch of St James",
        slug: "scotch-of-st-james",
        why: "Mayfair history in a compact room. Jimi Hendrix played here. Elegant and timeless.",
      },
      {
        name: "Dear Darling",
        slug: "dear-darling",
        why: "Opulent cocktail bar with late-night energy. Chandeliers, velvet, and serious cocktails.",
      },
    ],
  },
  {
    vibe: "If you want dinner and dancing",
    emoji: "🍽️",
    description:
      "The best nights in Mayfair often start at the table. These venues offer a seamless transition from dinner to dancing — no venue-hopping required.",
    clubs: [
      {
        name: "Maddox",
        slug: "maddox",
        why: "Italian fine dining upstairs, house music club downstairs. The best dinner-to-dance in Mayfair.",
      },
      {
        name: "Lio Club London",
        slug: "lio-london",
        why: "Multi-course dinner with live performances between courses, then full nightclub. Ibiza meets Mayfair.",
      },
    ],
  },
  {
    vibe: "If you want something visually spectacular",
    emoji: "✨",
    description:
      "If Instagram is part of your night out — or you just appreciate great design — these venues deliver the visual goods.",
    clubs: [
      {
        name: "Luxx Club London",
        slug: "luxx-club",
        why: "LED walls and immersive lighting that rivals a festival stage. Pure visual spectacle.",
      },
      {
        name: "The London Reign",
        slug: "the-london-reign",
        why: "Aerial acts happening overhead, a grand stage, and production that never stops.",
      },
      {
        name: "Libertine",
        slug: "libertine",
        why: "Futuristic design, cutting-edge LED panels, and a sound system that hits different.",
      },
    ],
  },
];

export default function WhereToGoPage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>
          {" / "}
          <span className="text-gray-300">Where Should I Go?</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Where Should I Go <span className="text-gold">Tonight?</span>
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl">
          Pick your vibe. We&apos;ll tell you exactly where to go, what to expect,
          and how to book. No fluff — just honest recommendations from people
          who go out in Mayfair every week.
        </p>

        <div className="space-y-10">
          {recommendations.map((rec) => (
            <section
              key={rec.vibe}
              className="bg-dark-card border border-dark-border rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {rec.emoji} {rec.vibe}
              </h2>
              <p className="text-dark-muted text-sm mb-5">{rec.description}</p>

              <div className="space-y-4">
                {rec.clubs.map((club) => (
                  <div
                    key={club.slug}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-dark-border pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <Link
                        href={`/clubs/${club.slug}`}
                        className="text-white font-medium hover:text-gold transition-colors"
                      >
                        {club.name}
                      </Link>
                      <p className="text-sm text-dark-muted mt-0.5">
                        {club.why}
                      </p>
                    </div>
                    <WhatsAppCTA
                      variant="club"
                      clubName={club.name}
                      size="sm"
                      className="shrink-0"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Still not sure CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mt-10 mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Still Not Sure?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp and tell us what kind of night you&apos;re after.
            We&apos;ll make a personal recommendation within minutes.
          </p>
          <WhatsAppCTA size="lg" />
        </div>

        {/* Internal links */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">
            More Ways to Decide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">What&apos;s on tonight</p>
              <p className="text-xs text-dark-muted mt-1">
                See which clubs are open right now
              </p>
            </Link>
            <Link
              href="/this-weekend"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">This weekend</p>
              <p className="text-xs text-dark-muted mt-1">
                Plan your Friday, Saturday, or Sunday
              </p>
            </Link>
            <Link
              href="/dress-code"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Dress code guide</p>
              <p className="text-xs text-dark-muted mt-1">
                What to wear at Mayfair clubs
              </p>
            </Link>
          </div>
        </section>
      </article>

      <StickyBookingBar />
    </>
  );
}
