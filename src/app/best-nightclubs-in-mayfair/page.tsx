import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title:
    "Best Nightclubs in Mayfair — Ranked by Someone Who Actually Goes Out",
  description:
    "The best nightclubs in Mayfair, London — ranked and reviewed. From exclusive members clubs to theatrical showclubs. Honest, insider picks for 2026.",
  alternates: {
    canonical: "https://mayfairtonight.com/best-nightclubs-in-mayfair",
  },
  openGraph: {
    title: "Best Nightclubs in Mayfair — Ranked",
    description:
      "Honest, insider-ranked guide to the best nightclubs in Mayfair. No sponsored placements — just the best clubs right now.",
    url: "https://mayfairtonight.com/best-nightclubs-in-mayfair",
  },
};

interface RankedClub {
  rank: number;
  name: string;
  slug: string;
  category: string;
  verdict: string;
  strengths: string[];
  bestFor: string;
  music: string;
  nights: string;
}

const rankedClubs: RankedClub[] = [
  {
    rank: 1,
    name: "Tape London",
    slug: "tape-london",
    category: "Most Exclusive",
    verdict:
      "Tape is the pinnacle of Mayfair nightlife. The hardest door, the most exclusive crowd, and an atmosphere that justifies the hype. When you walk in, you understand why people fight to get on the list. The room is intimate, the music is flawless, and the crowd is genuinely A-list. If you can get in, nothing else compares.",
    strengths: [
      "Most exclusive atmosphere in London",
      "Celebrity clientele",
      "Intimate room with incredible sound",
      "Hip-hop music curation is best-in-class",
    ],
    bestFor: "Those who want the most exclusive night possible",
    music: "Hip-Hop, RnB, Commercial",
    nights: "Wed, Thu, Fri, Sat",
  },
  {
    rank: 2,
    name: "Cirque Le Soir",
    slug: "cirque-le-soir",
    category: "Best Entertainment",
    verdict:
      "Nothing in London compares to a night at Cirque Le Soir. The performers, the energy, the sheer unpredictability — every night feels like an event. You don't just go to Cirque; you experience it. It ranks this high because it delivers something genuinely unique. There are hip-hop clubs everywhere. There's only one circus nightclub.",
    strengths: [
      "Completely unique experience",
      "World-class live entertainment",
      "International, high-energy crowd",
      "Every night feels like a special event",
    ],
    bestFor: "Groups who want entertainment with their night out",
    music: "Hip-Hop, RnB",
    nights: "Wed, Fri, Sat",
  },
  {
    rank: 3,
    name: "Funky Buddha",
    slug: "funky-buddha",
    category: "Most Legendary",
    verdict:
      "Funky Buddha has earned its place through years of consistency. The crowd knows the crowd. The staff know the regulars. The music switches between hip-hop bangers and funky house in a way that keeps the dance floor packed all night. It's not the newest or flashiest — it's just reliable, quality Mayfair nightlife.",
    strengths: [
      "Legendary status and reputation",
      "Loyal, quality crowd",
      "Brilliant music curation",
      "Community atmosphere rare for Mayfair",
    ],
    bestFor: "Those who want a classic Mayfair night with serious credentials",
    music: "Hip-Hop, RnB, Funky House",
    nights: "Wed, Thu, Fri, Sat",
  },
  {
    rank: 4,
    name: "The Box",
    slug: "the-box-london",
    category: "Most Provocative",
    verdict:
      "The Box is the night out you'll tell stories about. The performances push every boundary, the crowd is self-selecting (you know what you're getting into), and the atmosphere is charged with a decadent energy you won't find anywhere else. Not for everyone — and that's exactly the point.",
    strengths: [
      "Boundary-pushing performances",
      "Utterly unique atmosphere",
      "Fashion-forward, creative crowd",
      "Born in NYC, perfected in London",
    ],
    bestFor: "Adventurous groups who want something unforgettable",
    music: "Commercial, Hip-Hop, House",
    nights: "Wed, Thu, Fri, Sat",
  },
  {
    rank: 5,
    name: "Reign London",
    slug: "reign-london",
    category: "Best Showclub",
    verdict:
      "Reign turns a night out into a spectacle. Aerial acrobats, live singers, jaw-dropping production — it's Las Vegas meets Mayfair. The shows are genuinely impressive, and the atmosphere between performances keeps the energy high. If you want your night to feel like a special event, Reign delivers every time.",
    strengths: [
      "World-class production value",
      "Aerial acts and live entertainment",
      "Grand, multi-level venue",
      "Perfect for special occasions",
    ],
    bestFor: "Special occasions and groups who want a show",
    music: "Commercial, House, Hip-Hop",
    nights: "Thu, Fri, Sat",
  },
  {
    rank: 6,
    name: "TABU London",
    slug: "tabu-london",
    category: "Most Stylish",
    verdict:
      "TABU is where the fashion crowd goes. The Japanese underground theme creates a completely different atmosphere to the rest of Mayfair — darker, moodier, cooler. The crowd dresses to be seen and the music is on point. It's the antidote to generic Mayfair bottle-popping — this is a club with genuine taste.",
    strengths: [
      "Fashion-forward crowd and atmosphere",
      "Unique Japanese underground aesthetic",
      "Cool without trying too hard",
      "Quality hip-hop and RnB curation",
    ],
    bestFor: "Fashion-conscious crowds who want something different",
    music: "Hip-Hop, RnB",
    nights: "Thu, Fri, Sat",
  },
  {
    rank: 7,
    name: "Maddox",
    slug: "maddox",
    category: "Best Dinner-to-Dance",
    verdict:
      "Maddox does two things brilliantly: Italian food and house music. The transition from dinner upstairs to club downstairs is seamless. The music is proper house — no commercial filler — and the crowd is sophisticated enough to appreciate it. It's the grown-up Mayfair night out.",
    strengths: [
      "Genuine quality restaurant upstairs",
      "Best house music in Mayfair",
      "Sophisticated, older crowd",
      "Seamless dinner-to-dance transition",
    ],
    bestFor: "Couples and groups who want dinner and dancing",
    music: "House, Deep House, Tech House",
    nights: "Wed, Thu, Fri, Sat",
  },
  {
    rank: 8,
    name: "Scotch of St James",
    slug: "scotch-of-st-james",
    category: "Most Historic",
    verdict:
      "Scotch has heritage that no other Mayfair club can match — Hendrix, the Stones, decades of London nightlife history soaked into the walls. Today it delivers elegant parties with quality music in an intimate setting. It's timeless in a scene that chases trends.",
    strengths: [
      "Unmatched heritage and history",
      "Intimate, elegant atmosphere",
      "Quality music programme",
      "Members club feel without the pretension",
    ],
    bestFor: "Those who appreciate history and intimate venues",
    music: "Mixed, House, Disco, RnB",
    nights: "Thu, Fri, Sat",
  },
  {
    rank: 9,
    name: "Dear Darling",
    slug: "dear-darling",
    category: "Best Bar-Club Hybrid",
    verdict:
      "Dear Darling straddles the line between high-end cocktail bar and late-night venue perfectly. The cocktail programme is serious, the interior is opulent, and it transitions from sophisticated evening drinks to genuine late-night energy without missing a beat. The most civilised night out in Mayfair.",
    strengths: [
      "Outstanding cocktail programme",
      "Opulent, beautiful interior",
      "Perfect bar-to-late-night transition",
      "Intimate without being cramped",
    ],
    bestFor: "Date nights and groups who prefer bars to clubs",
    music: "House, Lounge, Commercial",
    nights: "Wed, Thu, Fri, Sat",
  },
  {
    rank: 10,
    name: "Cuckoo Club",
    slug: "cuckoo-club",
    category: "Most Versatile",
    verdict:
      "Two floors, two vibes, one venue. Cuckoo Club gives you house music downstairs and hip-hop upstairs — pick your mood or do both. The crowd is young, fun, and sociable. It's one of the most accessible and reliable Mayfair clubs, and there's a reason it stays consistently busy.",
    strengths: [
      "Two distinct floors and music policies",
      "Accessible and sociable atmosphere",
      "Reliable midweek and weekend nights",
      "One of the easier Mayfair guestlists",
    ],
    bestFor: "Groups who want options and versatility",
    music: "House, Hip-Hop, RnB",
    nights: "Wed, Thu, Fri, Sat",
  },
  {
    rank: 11,
    name: "Selene London",
    slug: "selene-london",
    category: "Best Newcomer",
    verdict:
      "Selene has quickly carved out a niche for refined, elegant nightlife. The cocktail menu rivals dedicated bars, the house music is tasteful, and the crowd is more discerning than most Mayfair venues. It's still building its reputation, which makes it one of the smartest bookings right now — premium experience, easier access.",
    strengths: [
      "Refined and elegant atmosphere",
      "Impressive cocktail programme",
      "Easier to book than established names",
      "Sophisticated crowd",
    ],
    bestFor: "Those who want elegance and refinement",
    music: "House, Commercial, Deep House",
    nights: "Thu, Fri, Sat",
  },
];

const faqs = [
  {
    question: "What is the best nightclub in Mayfair right now?",
    answer:
      "Tape London is the most exclusive and prestigious club in Mayfair. For entertainment, Cirque Le Soir is unmatched. Funky Buddha is the most consistently brilliant all-round night. The best club for you depends on what you're looking for — our ranked guide breaks down every venue by vibe, music, and crowd.",
  },
  {
    question: "Which Mayfair club is easiest to get into?",
    answer:
      "Cuckoo Club and Selene London have the most accessible guestlists. Book through a promoter, arrive before midnight, and dress smart — you'll get in. The harder doors are Tape London (members/tables only most nights) and Scotch of St James (members club atmosphere). The Box curates its crowd carefully but guestlist works.",
  },
  {
    question: "How much does a night out in Mayfair cost?",
    answer:
      "Guestlist entry is often free or £10–£20 cover. Drinks range from £12–£18 for cocktails. Table bookings start from £1,000 minimum spend at most venues, with Tape London from £1,500. A typical night on guestlist costs £50–£100 per person including drinks. For table booking prices, check londonbottleservice.com.",
  },
  {
    question: "Are Mayfair clubs worth the money?",
    answer:
      "The top Mayfair clubs offer experiences you genuinely cannot get elsewhere. Cirque Le Soir's circus performers, Reign's aerial acts, The Box's theatrical shows, Tape's A-list crowd — these are unique. For a standard night of music and drinks, London has cheaper options. But for a premium, unforgettable experience, Mayfair delivers.",
  },
  {
    question: "What night should I go to a Mayfair club?",
    answer:
      "Thursday and Saturday are the standout nights. Thursday has the best atmosphere — the crowd is genuinely up for it and every major club is open. Saturday is peak energy with sold-out rooms. Friday is reliable but can be more corporate. Wednesday is the underrated gem for midweek partying.",
  },
];

export default function BestNightclubsPage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Best Nightclubs in Mayfair</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Best Nightclubs in Mayfair —{" "}
          <span className="text-gold">Ranked for 2026</span>
        </h1>
        <p className="text-dark-muted text-xs mb-3">
          Last updated: March 2026 · Covering Mayfair, St James&apos;s &amp; central London
        </p>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          An honest, opinionated ranking of every nightclub worth going to in
          Mayfair — from Berkeley Square to Piccadilly, Hanover Square to Dover Street. No sponsored placements. No paid features. Just genuine picks
          from people who are out in Mayfair every week.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          Want the full breakdown of every venue?{" "}
          <Link
            href="/mayfair-nightclubs"
            className="text-gold hover:text-gold-light"
          >
            Read our complete Mayfair nightclubs guide
          </Link>
          . Looking for{" "}
          <a
            href="https://londonbottleservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            VIP table bookings
          </a>
          ? Or check{" "}
          <a
            href="https://londonclubstonight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            what&apos;s on tonight
          </a>
          .
        </p>

        {/* Rankings */}
        <div className="space-y-8">
          {rankedClubs.map((club) => (
            <section
              key={club.slug}
              className="bg-dark-card border border-dark-border rounded-xl p-5 sm:p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center">
                  <span className="text-gold font-bold text-lg">
                    #{club.rank}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="hover:text-gold transition-colors"
                    >
                      {club.name}
                    </Link>
                  </h2>
                  <p className="text-gold text-sm">{club.category}</p>
                </div>
                <WhatsAppCTA
                  variant="club"
                  clubName={club.name}
                  size="sm"
                  className="hidden sm:block shrink-0"
                />
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {club.verdict}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Music
                  </p>
                  <p className="text-sm text-white">{club.music}</p>
                </div>
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Open Nights
                  </p>
                  <p className="text-sm text-white">{club.nights}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-dark-muted uppercase tracking-wide mb-2">
                  Why it ranks here
                </p>
                <ul className="space-y-1">
                  {club.strengths.map((s) => (
                    <li
                      key={s}
                      className="text-sm text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-gold mt-0.5">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="text-dark-muted">
                  Best for: {club.bestFor}
                </span>
                <Link
                  href={`/clubs/${club.slug}`}
                  className="text-gold hover:text-gold-light"
                >
                  Full guide →
                </Link>
                <WhatsAppCTA
                  variant="club"
                  clubName={club.name}
                  size="sm"
                  className="sm:hidden"
                />
              </div>
            </section>
          ))}
        </div>

        {/* By Category */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Quick Picks by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Best for First-Timers</h3>
              <p className="text-sm text-gray-300">
                Start at{" "}
                <Link href="/clubs/cuckoo-club" className="text-gold hover:text-gold-light">
                  Cuckoo Club
                </Link>{" "}
                — accessible door, two floors, great atmosphere. Or{" "}
                <Link href="/clubs/reign-london" className="text-gold hover:text-gold-light">
                  Reign London
                </Link>{" "}
                for a night that feels like an event.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Best for Date Night</h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">
                  Maddox
                </Link>{" "}
                — dinner upstairs, dancing downstairs. Or{" "}
                <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light">
                  Dear Darling
                </Link>{" "}
                for cocktails that transition into a night out.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Best for Birthday</h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">
                  Cirque Le Soir
                </Link>{" "}
                turns any birthday into an event. Or{" "}
                <Link href="/clubs/reign-london" className="text-gold hover:text-gold-light">
                  Reign London
                </Link>{" "}
                for production value that makes the night unforgettable.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Best for Music Lovers</h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">
                  Maddox
                </Link>{" "}
                for house heads.{" "}
                <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light">
                  Funky Buddha
                </Link>{" "}
                for hip-hop purists.{" "}
                <Link href="/clubs/the-box-london" className="text-gold hover:text-gold-light">
                  The Box
                </Link>{" "}
                for eclectic taste.
              </p>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            More Mayfair Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mayfair-nightclubs"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">All Mayfair Nightclubs</p>
              <p className="text-xs text-dark-muted mt-1">
                Complete directory with guestlist tips
              </p>
            </Link>
            <Link
              href="/mayfair-nightlife-guide"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Mayfair Nightlife Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                Everything to know before going out
              </p>
            </Link>
            <Link
              href="/dress-code"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Dress Code Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                What to wear to Mayfair clubs
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-dark-card border border-dark-border rounded-lg group"
              >
                <summary className="p-4 cursor-pointer text-white font-medium list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-gold group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Ready to Book?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp and we&apos;ll sort your guestlist or table
            at any Mayfair club. For VIP table bookings, visit{" "}
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light"
            >
              London Bottle Service
            </a>
            .
          </p>
          <WhatsAppCTA size="lg" />
        </div>
      </article>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://mayfairtonight.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Best Nightclubs in Mayfair",
                item: "https://mayfairtonight.com/best-nightclubs-in-mayfair",
              },
            ],
          }),
        }}
      />

      {/* ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Best Nightclubs in Mayfair — Ranked for 2026",
            itemListElement: rankedClubs.map((club) => ({
              "@type": "ListItem",
              position: club.rank,
              name: club.name,
              url: `https://mayfairtonight.com/clubs/${club.slug}`,
            })),
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
