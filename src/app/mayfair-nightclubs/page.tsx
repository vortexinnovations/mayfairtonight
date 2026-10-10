import { Metadata } from "next";
import Link from "next/link";
import { getOpenClubs } from "@/data/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroImage from "@/components/HeroImage";
import { heroImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Mayfair Nightclubs: Complete Club Guide 2026",
  description:
    "The definitive guide to every nightclub in Mayfair, London. Opening nights, music policy, dress code, crowd, vibe, and how to get on the guestlist. Updated weekly.",
  alternates: { canonical: "https://mayfairtonight.com/mayfair-nightclubs" },
  openGraph: {
    title: "Mayfair Nightclubs: The Complete Guide",
    description:
      "Every nightclub in Mayfair covered. Music, dress code, crowd, best nights, and guestlist info. The only guide you need.",
    url: "https://mayfairtonight.com/mayfair-nightclubs",
  },
};

const clubInsights: Record<
  string,
  { crowd: string; bestNight: string; guestlistTip: string }
> = {
  "tape-london": {
    crowd:
      "A-list celebrities, high-net-worth individuals, models, and music industry insiders. The most exclusive crowd in Mayfair.",
    bestNight:
      "Saturday is Tape at its peak: every table booked, the energy is electric. Tuesday offers a more intimate feel with the same quality crowd.",
    guestlistTip:
      "Tape is members and tables only most nights. Guestlist access is extremely limited: booking through a promoter is the only reliable way in.",
  },
  "cirque-le-soir": {
    crowd:
      "International party crowd, celebrities, tourists who've heard the legends, and groups celebrating big occasions. Expect a mix of accents and high energy.",
    bestNight:
      "Saturday is the signature night: full performer lineup, packed room, maximum chaos. Wednesday is wilder than you'd expect for a midweek night.",
    guestlistTip:
      "Guestlist is available on most nights but arrive before midnight. After that, even guestlist doesn't guarantee entry when it's at capacity.",
  },
  "reign-london": {
    crowd:
      "Glamorous, well-dressed groups. A lot of birthday celebrations and special occasions. International visitors drawn by the show concept. Mixed ages: older than some Mayfair clubs.",
    bestNight:
      "Saturday is the main event: the full production with aerial acts and live vocals. Friday is equally strong with slightly shorter queues.",
    guestlistTip:
      "Guestlist is available but book early for weekends. Tables near the stage give the best experience: the aerial acts happen directly above you.",
  },
  "scotch-of-st-james": {
    crowd:
      "Older, more refined Mayfair regulars. Members and their guests. People who appreciate history and don't need the newest, shiniest venue. Understated wealth.",
    bestNight:
      "Thursday is the sweet spot: intimate, elegant, and the perfect start to a weekend. Saturday is busier but still maintains the Scotch character.",
    guestlistTip:
      "Scotch operates more like a members club. Getting on the guestlist requires a connection or a promoter. It's not impossible: just don't expect to walk up.",
  },
  "dear-darling": {
    crowd:
      "Sophisticated cocktail lovers, couples on date nights, groups who want a refined evening. Less 'nightclub crowd', more 'people who know good drinks'.",
    bestNight:
      "Friday transitions beautifully from cocktail bar to late-night energy. Saturday is livelier. Thursday for pure cocktail appreciation.",
    guestlistTip:
      "More accessible than the big clubs. Book a table for the best experience: the cocktail menu deserves your attention before the night gets going.",
  },
  maddox: {
    crowd:
      "Sophisticated thirty-somethings, food lovers who want the night to continue, house music heads. European visitors who appreciate the dinner-to-dance concept.",
    bestNight:
      "Saturday is Maddox at peak form: the restaurant is fully booked and the club below fills with quality house music. Friday is equally strong.",
    guestlistTip:
      "Book dinner first and the club entry follows naturally. The restaurant-to-club transition is the real Maddox experience: skipping dinner means missing half the point.",
  },
  "the-box-london": {
    crowd:
      "Fashionable, adventurous, open-minded. Creatives, media types, and people who actively seek out experiences. Not for the easily shocked: the audience is self-selecting.",
    bestNight:
      "Saturday is the most complete experience: the full show plus a packed dance floor after. Wednesday has a more intimate, edgier feel.",
    guestlistTip:
      "Guestlist works but be prepared for strict door selection. The Box curates its crowd carefully. Dress creatively: this isn't a standard Mayfair door.",
  },
  "selene-london": {
    crowd:
      "Refined, well-dressed professionals. Cocktail enthusiasts and house music lovers. An older, more discerning crowd than the party clubs. Couples and small groups.",
    bestNight:
      "Friday is the most polished night: the cocktail crowd merges with the house music crowd beautifully. Saturday is busier but equally elegant.",
    guestlistTip:
      "More accessible than the established names. Book in advance and arrive well-dressed. Selene rewards sophistication over status.",
  },
};

export default function MayfairNightclubsPage() {
  const clubs = getOpenClubs().filter((c) =>
    Object.keys(clubInsights).includes(c.slug)
  );

  return (
    <>
      <HeroImage src={heroImages.mayfairNightclubs} alt="Mayfair nightclubs guide">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Mayfair Nightclubs</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair Nightclubs: <span className="text-gold">The Complete Guide</span>
        </h1>
        <p className="text-dark-muted text-xs mb-3">
          Last updated: March 2026 · Covers Berkeley Square, Hanover Square, Dover Street &amp; surrounding Mayfair
        </p>
        <p className="text-gray-300 text-lg mb-0 max-w-3xl">
          Every nightclub worth knowing about in Mayfair, London: from the exclusive tables of
          Hanover Square to the theatrical clubs near Piccadilly, and the late-night bars around
          Dover Street and Berkeley Square.
        </p>
      </HeroImage>

      <article className="max-w-4xl mx-auto px-4 pt-8">
        <p className="text-dark-muted text-sm mb-8">
          Looking for what&apos;s on tonight specifically?{" "}
          <a
            href="https://londonclubstonight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            Check londonclubstonight.com
          </a>{" "}
          for live updates. Want to book a VIP table?{" "}
          <a
            href="https://londonbottleservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            London Bottle Service
          </a>{" "}
          handles all Mayfair table bookings.
        </p>

        {/* Quick navigation */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-5 mb-10">
          <h2 className="text-sm font-semibold text-gold uppercase tracking-wide mb-3">
            Jump to a club
          </h2>
          <div className="flex flex-wrap gap-2">
            {clubs.map((club) => (
              <a
                key={club.slug}
                href={`#${club.slug}`}
                className="bg-dark border border-dark-border rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:border-gold/30 hover:text-white transition-colors"
              >
                {club.name}
              </a>
            ))}
          </div>
        </div>

        {/* Club sections */}
        <div className="space-y-12">
          {clubs.map((club) => {
            const insight = clubInsights[club.slug];
            if (!insight) return null;

            return (
              <section
                key={club.slug}
                id={club.slug}
                className="scroll-mt-20"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      <Link
                        href={`/clubs/${club.slug}`}
                        className="hover:text-gold transition-colors"
                      >
                        {club.name}
                      </Link>
                    </h2>
                    <p className="text-gold text-sm mt-0.5">{club.tagline}</p>
                    <p className="text-dark-muted text-sm">{club.location}</p>
                  </div>
                  <WhatsAppCTA
                    variant="club"
                    clubName={club.name}
                    size="sm"
                    className="shrink-0"
                  />
                </div>

                {/* Overview */}
                <p className="text-gray-300 leading-relaxed mb-4">
                  {club.description}
                </p>

                {/* Detail grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gold mb-2">
                      Music & Vibe
                    </h3>
                    <p className="text-sm text-gray-300">
                      <span className="text-white font-medium">
                        {club.musicPolicy.join(", ")}
                      </span>
                    </p>
                    <p className="text-sm text-dark-muted mt-1">{club.vibe}</p>
                  </div>
                  <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gold mb-2">
                      The Crowd
                    </h3>
                    <p className="text-sm text-gray-300">{insight.crowd}</p>
                  </div>
                  <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gold mb-2">
                      Best Nights
                    </h3>
                    <p className="text-sm text-gray-300">
                      <span className="text-white font-medium">
                        Open: {club.openNights.join(", ")}
                      </span>
                    </p>
                    <p className="text-sm text-dark-muted mt-1">
                      {insight.bestNight}
                    </p>
                  </div>
                  <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gold mb-2">
                      Guestlist & Entry
                    </h3>
                    <p className="text-sm text-gray-300">
                      {insight.guestlistTip}
                    </p>
                  </div>
                </div>

                {/* Quick stats bar */}
                <div className="flex flex-wrap gap-3 text-xs text-dark-muted mb-4">
                  <span>
                    Dress code:{" "}
                    <Link
                      href="/dress-code"
                      className="text-gray-300 hover:text-gold"
                    >
                      {club.dressCode.split(".")[0]}
                    </Link>
                  </span>
                  <span>|</span>
                  <span>
                    Hours: {club.openingTime} to {club.closingTime}
                  </span>
                  <span>|</span>
                  <span>
                    Tables:{" "}
                    <a
                      href="https://londonbottleservice.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gold"
                    >
                      from {club.tableMinimum}
                    </a>
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 text-sm">
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-gold hover:text-gold-light"
                  >
                    Full {club.name} guide →
                  </Link>
                </div>

                <div className="border-b border-dark-border mt-8" />
              </section>
            );
          })}
        </div>

        {/* Comparison section */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            How to Choose: Mayfair Clubs Compared
          </h2>
          <p className="text-gray-300 mb-6">
            Every Mayfair club has a distinct personality. Here&apos;s how they
            stack up against each other so you can pick the right one for your
            night.
          </p>

          <div className="space-y-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">
                For Hip-Hop & RnB
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">Tape London</Link>{" "}is
                the most exclusive.{" "}
                <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">Cirque Le Soir</Link>{" "}adds
                a full circus show.{" "}
                <Link href="/clubs/beat-london" className="text-gold hover:text-gold-light">BEAT London</Link>{" "}is built
                around its sound system. All three deliver quality hip-hop but the
                crowd and atmosphere are very different.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">
                For House Music
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">Maddox</Link>{" "}is the
                purist&apos;s choice: deep house and tech house in a
                sophisticated setting.{" "}
                <Link href="/clubs/selene-london" className="text-gold hover:text-gold-light">Selene London</Link>{" "}
                blends house with elegance.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">
                For Entertainment & Shows
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">Cirque Le Soir</Link>{" "}
                is a full circus.{" "}
                <Link href="/clubs/reign-london" className="text-gold hover:text-gold-light">Reign London</Link>{" "}is
                a Las Vegas showclub.{" "}
                <Link href="/clubs/the-box-london" className="text-gold hover:text-gold-light">The Box</Link>{" "}is
                provocative theatre. Three completely different experiences,
                all unforgettable.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">
                For Intimate & Exclusive
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">Tape London</Link>{" "}is
                the ultimate exclusive experience.{" "}
                <Link href="/clubs/scotch-of-st-james" className="text-gold hover:text-gold-light">Scotch of St James</Link>{" "}
                is old-school Mayfair elegance.{" "}
                <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light">Dear Darling</Link>{" "}is
                refined cocktail culture with late-night energy.
              </p>
            </div>
          </div>
        </section>

        {/* Compare & Choose */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Compare Mayfair Clubs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/best-hip-hop-clubs-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Hip-Hop Clubs</p>
              <p className="text-xs text-dark-muted mt-1">Ranked Mayfair guide</p>
            </Link>
            <Link href="/best-celebrity-clubs-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Celebrity Clubs</p>
              <p className="text-xs text-dark-muted mt-1">Where the A-list goes</p>
            </Link>
            <Link href="/mayfair-clubs-by-music-style" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">By Music Style</p>
              <p className="text-xs text-dark-muted mt-1">Find your sound</p>
            </Link>
            <Link href="/best-clubs-for-groups-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Best for Groups</p>
              <p className="text-xs text-dark-muted mt-1">Crew night planning</p>
            </Link>
            <Link href="/best-clubs-for-tables-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Best for Tables</p>
              <p className="text-xs text-dark-muted mt-1">Table experience compared</p>
            </Link>
            <Link href="/girls-guestlist-clubs-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Girls&apos; Night</p>
              <p className="text-xs text-dark-muted mt-1">Guestlist &amp; planning</p>
            </Link>
          </div>
        </section>

        {/* Plan & Prepare */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Plan Your Night
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link href="/best-nightclubs-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Best Clubs Ranked</p>
              <p className="text-xs text-dark-muted mt-1">Our honest picks for 2026</p>
            </Link>
            <Link href="/mayfair-nightlife-guide" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Nightlife Guide</p>
              <p className="text-xs text-dark-muted mt-1">Everything before going out</p>
            </Link>
            <Link href="/mayfair-night-out-itinerary" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Night Out Itinerary</p>
              <p className="text-xs text-dark-muted mt-1">5 curated evening plans</p>
            </Link>
            <Link href="/mayfair-club-dress-code" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Dress Code</p>
              <p className="text-xs text-dark-muted mt-1">What to wear per venue</p>
            </Link>
            <Link href="/mayfair-club-entry-rules" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Entry Rules</p>
              <p className="text-xs text-dark-muted mt-1">Door policies &amp; tips</p>
            </Link>
            <Link href="/mayfair-club-guestlist-guide" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Guestlist Guide</p>
              <p className="text-xs text-dark-muted mt-1">How to get on the list</p>
            </Link>
            <Link href="/where-to-go-out-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Where to Go Out</p>
              <p className="text-xs text-dark-muted mt-1">Decision guide by vibe</p>
            </Link>
            <Link href="/mayfair-vip-nightlife" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">VIP Guide</p>
              <p className="text-xs text-dark-muted mt-1">Exclusivity tiers explained</p>
            </Link>
            <Link href="/best-areas-around-hanover-square-and-berkeley-square-for-nightlife" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Nightlife Areas</p>
              <p className="text-xs text-dark-muted mt-1">Hanover Sq, Berkeley Sq &amp; more</p>
            </Link>
          </div>
        </section>

        {/* Original related content - keeping the link that was here */}
        <section className="mb-8 hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/where-to-go-tonight"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Where Should I Go?</p>
              <p className="text-xs text-dark-muted mt-1">
                Picks based on your vibe and preferences
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Mayfair Nightclub FAQs
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
            Need Help Choosing a Club?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp with what you&apos;re looking for and
            we&apos;ll recommend the perfect club for your night. Or book a VIP
            table through{" "}
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
                name: "Mayfair Nightclubs",
                item: "https://mayfairtonight.com/mayfair-nightclubs",
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}

const faqs = [
  {
    question: "How do I get on a Mayfair club guestlist?",
    answer:
      "The best way to get on a Mayfair club guestlist is through a promoter. Message us on WhatsApp and we'll add you to the guestlist at any venue. Most clubs require advance booking: walking up to the door without a booking or table rarely works, especially on Fridays and Saturdays. Some clubs like Tape London are strictly tables and members only.",
  },
  {
    question: "What is the dress code for Mayfair nightclubs?",
    answer:
      "Mayfair clubs enforce a smart dress code. For men: smart shoes (no trainers), well-fitted trousers or smart jeans, and a collared shirt. A blazer never hurts. For women: heels or smart shoes, a cocktail dress or smart separates. When in doubt, overdress: nobody gets turned away for looking too smart. Check our full dress code guide for club-specific details.",
  },
  {
    question: "Which Mayfair club is best for hip-hop?",
    answer:
      "Tape London, Cirque Le Soir and BEAT London are the best hip-hop clubs in and around Mayfair. Tape is the most exclusive, with a celebrity crowd. Cirque Le Soir pairs hip-hop and RnB with a full circus show. BEAT London is built around its sound system. Reign London also plays hip-hop alongside its shows.",
  },
  {
    question: "Which Mayfair clubs play house music?",
    answer:
      "Maddox is the best house music venue in Mayfair: deep house and tech house in a sophisticated dinner-to-dance setting. Selene London plays refined house and commercial in an elegant space. Scotch of St James and Dear Darling also lean towards house and lounge music.",
  },
  {
    question: "How much does it cost to get into a Mayfair nightclub?",
    answer:
      "Guestlist entry at most Mayfair clubs is free or has a nominal cover charge (£10 to £20). Table bookings typically start from £1,000 minimum spend. The real cost is in what you spend inside: bottles, cocktails, and service. For detailed table pricing and VIP bookings, check londonbottleservice.com.",
  },
  {
    question: "Which Mayfair clubs are open on Thursday?",
    answer:
      "Thursday is when Mayfair really kicks off. Reign London, Dear Darling, Maddox, Scotch of St James, The Box and Selene London are all open on Thursday nights, and BEAT London on select Thursdays. It's the best night for quality atmosphere without full weekend crowds.",
  },
  {
    question: "What time do Mayfair nightclubs open and close?",
    answer:
      "Most Mayfair nightclubs open between 10pm and 11pm and close between 3am and 3:30am. Dear Darling opens earlier (around 9pm to 9:30pm) as it serves cocktails before switching to late-night mode. Arrive between 11pm and midnight for the best experience: early enough to get in smoothly, late enough for atmosphere.",
  },
  {
    question: "Are Mayfair nightclubs open on weekdays?",
    answer:
      "Wednesday is when midweek Mayfair nightlife properly starts: Cirque Le Soir and The Box both open. Thursday is even bigger, with most clubs open. Monday and Tuesday options are very limited in Mayfair. Check our night-by-night guide for full details.",
  },
];
