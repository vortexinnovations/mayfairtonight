import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroImage from "@/components/HeroImage";
import { heroImages } from "@/data/images";

export const metadata: Metadata = {
  title:
    "Best Mayfair Clubs for Table Bookings — Where to Book a Table in 2026",
  description:
    "The best clubs for table bookings in Mayfair, ranked by experience. Compare table layouts, minimum spends, and vibes at Tape, Reign, Cirque Le Soir, Maddox and more.",
  alternates: {
    canonical: "https://mayfairtonight.com/best-clubs-for-tables-in-mayfair",
  },
  openGraph: {
    title: "Best Mayfair Clubs for Table Bookings",
    description:
      "Ranked guide to the best table experiences across Mayfair nightclubs. Insider comparison of every venue worth booking.",
    url: "https://mayfairtonight.com/best-clubs-for-tables-in-mayfair",
  },
};

interface TableClub {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  experience: string;
  layout: string;
  included: string;
  bestFor: string;
  minSpend: string;
  recommendation: string;
}

const tableClubs: TableClub[] = [
  {
    rank: 1,
    name: "Tape London",
    slug: "tape-london",
    tagline: "Most Exclusive",
    experience:
      "A table at Tape is the most coveted reservation in Mayfair. The room is intimate, so every table feels like the centre of the action. The crowd is A-list, the music is flawless hip-hop, and the atmosphere is electric without being overwhelming. Your table host knows your name. The bottles arrive with sparklers and theatre. Nothing in London matches this for exclusivity.",
    layout:
      "Compact room with booth-style tables lining the walls and a central dance floor. Every seat has sightlines across the entire venue. VIP booths at the back offer the most privacy.",
    included:
      "Dedicated table host, premium bottle selection, mixers, ice, and a level of personal service that justifies the spend.",
    bestFor: "High-rollers, celebrities, those who want the most exclusive night possible",
    minSpend: "From £1,500",
    recommendation: "Tables only. Guestlist is extremely limited.",
  },
  {
    rank: 2,
    name: "Reign London",
    slug: "reign-london",
    tagline: "Best Views",
    experience:
      "Reign is built for tables. The multi-level layout means you watch aerial acrobats and live performers from your booth while the dance floor erupts below. It feels like you have front-row seats to a Las Vegas production. The shows are genuinely spectacular, and your table becomes your home base for the entire night.",
    layout:
      "Tiered booths surrounding the central stage and dance floor. Upper-level tables offer the best views of the aerial acts. Stage-side tables put you in the middle of the action.",
    included:
      "Table host, premium bottles, mixers, front-row entertainment, and the best vantage point in the house.",
    bestFor: "Birthdays, special occasions, groups who want a show with their night",
    minSpend: "From £1,000",
    recommendation: "Tables recommended. Guestlist works but you miss the best views.",
  },
  {
    rank: 3,
    name: "Cirque Le Soir",
    slug: "cirque-le-soir",
    tagline: "Entertainment Surrounds You",
    experience:
      "At Cirque, the performers don't stay on a stage. They come to your table. Fire-breathers, contortionists, stilt-walkers — they weave through the room and your table becomes part of the show. It's interactive in a way no other club delivers. The energy is relentless and your table is the eye of the storm.",
    layout:
      "Intimate room with booths along the walls and a few prime tables near the DJ. The performers use the entire floor space, so every table gets the show.",
    included:
      "Dedicated host, bottles, mixers, and live entertainment that literally comes to you. Birthday packages available with bespoke performances.",
    bestFor: "Birthday groups, international visitors, anyone who wants entertainment woven into their night",
    minSpend: "From £1,000",
    recommendation: "Tables strongly recommended. The experience is completely different with a booking.",
  },
  {
    rank: 4,
    name: "Maddox",
    slug: "maddox",
    tagline: "Dinner + Club Combo",
    experience:
      "Maddox is the only Mayfair club where your table experience can start with a proper Italian dinner upstairs and transition seamlessly into the club below. The house music is curated, the crowd is sophisticated, and the basement club has an energy that builds perfectly through the night. It's the grown-up table booking.",
    layout:
      "Restaurant tables upstairs for dinner. Club booths downstairs surrounding the dance floor. The transition between the two is smooth and your host manages both.",
    included:
      "Full dinner service upstairs with Italian cuisine, then a dedicated club table downstairs with bottles and mixers. One booking, two experiences.",
    bestFor: "Couples, anniversary celebrations, groups who want dinner and dancing without changing venue",
    minSpend: "From £1,000",
    recommendation: "Tables are the way to experience Maddox properly. Book the dinner-to-club package.",
  },
  {
    rank: 5,
    name: "The Box",
    slug: "the-box-london",
    tagline: "Theatrical Immersion",
    experience:
      "A table at The Box puts you in the middle of London's most provocative nightclub. The performances are boundary-pushing, the crowd is fashion-forward, and the atmosphere crackles with decadent energy. Your table becomes a front-row seat to shows you genuinely will not see anywhere else. Not for the faint-hearted. Exactly the point.",
    layout:
      "Theatre-style layout with tables arranged around the performance area. Mezzanine tables offer an overview. Floor-level tables put you inches from the action.",
    included:
      "Premium bottles, mixers, table host, and unobstructed views of every performance throughout the night.",
    bestFor: "Adventurous groups, creative industries crowd, those who want stories to tell",
    minSpend: "From £1,000",
    recommendation: "Tables recommended. The shows hit differently when you have a proper seat.",
  },
  {
    rank: 6,
    name: "Funky Buddha",
    slug: "funky-buddha",
    tagline: "Legendary Atmosphere",
    experience:
      "Funky Buddha has been a Mayfair institution for years. A table here puts you in the middle of one of the most consistently brilliant atmospheres in London. The regulars know the regulars. The music swings between hip-hop and funky house. The vibe is warm, welcoming, and genuinely fun. This is Mayfair nightlife at its most authentic.",
    layout:
      "Compact venue with booth seating along the walls and a packed dance floor. Tables are close to the action — you feel the energy of the room from every seat.",
    included:
      "Bottles, mixers, dedicated host, and the intangible benefit of being part of a legendary Mayfair crowd.",
    bestFor: "Regulars, hip-hop fans, groups who want a proper Mayfair night with heritage",
    minSpend: "From £1,000",
    recommendation: "Tables guarantee your spot. Guestlist works midweek but weekends fill up fast.",
  },
  {
    rank: 7,
    name: "Dear Darling",
    slug: "dear-darling",
    tagline: "Cocktail-Focused",
    experience:
      "Dear Darling blurs the line between cocktail bar and nightclub. A table here means bespoke cocktails served in an opulent setting that transitions from sophisticated drinks to late-night energy. The cocktail programme is world-class, and the intimate space means your table feels genuinely private even when the room is full.",
    layout:
      "Elegant booth seating in a beautifully designed intimate space. Every table feels tucked away and personal. The bar is the centrepiece.",
    included:
      "Bottle service or bespoke cocktail packages, dedicated host, and an atmosphere that prioritises quality over volume.",
    bestFor: "Date nights, sophisticated groups, cocktail enthusiasts who want to stay out late",
    minSpend: "From £500",
    recommendation: "Tables or premium bar seating both work well here. The cocktail packages are worth exploring.",
  },
  {
    rank: 8,
    name: "TABU London",
    slug: "tabu-london",
    tagline: "Fashion-Forward",
    experience:
      "TABU's Japanese underground aesthetic makes a table here feel completely different to the rest of Mayfair. The lighting is moody, the design is immersive, and the fashion crowd around you treats the club like a runway. Your table is a statement — this is where the style-conscious book.",
    layout:
      "Dark, atmospheric room with booths arranged around the dance floor. The design immerses you in the Japanese underground theme from the moment you sit down.",
    included:
      "Bottles, premium mixers, table host, and an atmosphere that rewards those who dress for the occasion.",
    bestFor: "Fashion industry professionals, style-conscious groups, those who want something edgier",
    minSpend: "From £1,000",
    recommendation: "Tables are the best way to experience the venue. Guestlist is solid too.",
  },
  {
    rank: 9,
    name: "Cuckoo Club",
    slug: "cuckoo-club",
    tagline: "Versatile",
    experience:
      "Two floors mean you can book a table on the house floor or the hip-hop floor — or both. Cuckoo is one of the most sociable clubs in Mayfair, and a table gives you a base to explore. The crowd is young, fun, and unpretentious. It's the accessible table booking.",
    layout:
      "Tables available on both the ground floor (house music) and upstairs (hip-hop and RnB). Both rooms have booths surrounding their respective dance floors.",
    included:
      "Bottles, mixers, table host, and access to both floors regardless of which one your table is on.",
    bestFor: "Groups who want options, first-time Mayfair visitors, mixed-taste groups",
    minSpend: "From £1,000",
    recommendation: "Tables or guestlist both work well. Cuckoo is one of the easier bookings in Mayfair.",
  },
  {
    rank: 10,
    name: "Selene London",
    slug: "selene-london",
    tagline: "Refined",
    experience:
      "Selene offers a refined, elegant table experience that rivals venues with years more heritage. The cocktails are serious, the house music is tasteful, and the crowd is discerning without being pretentious. It's still building its reputation, which means tables are easier to book than the established names — a smart move right now.",
    layout:
      "Elegant room with well-spaced booths that offer genuine privacy. The design is sophisticated and the lighting creates an intimate atmosphere.",
    included:
      "Premium bottles, craft cocktail options, dedicated host, and a refined atmosphere that punches above its weight.",
    bestFor: "Those who want premium without the premium difficulty of booking, elegant nights out",
    minSpend: "From £800",
    recommendation: "Tables are easy to secure and the experience overdelivers. Great value for Mayfair.",
  },
];

const faqs = [
  {
    question: "What's included with a table booking at a Mayfair club?",
    answer:
      "A table booking typically includes a reserved booth or table area, a dedicated table host, your choice of premium bottles (spirits and champagne), mixers, ice, and garnishes. Some venues like Cirque Le Soir include live entertainment at your table. The minimum spend covers your bottles — anything above the minimum is additional. Think of it as buying drinks in bulk with guaranteed seating and personal service.",
  },
  {
    question: "Can you share a table with another group in Mayfair clubs?",
    answer:
      "Generally no — your table is your table. However, some venues offer shared VIP areas or standing VIP sections at a lower minimum spend. If your group is small (2-3 people), some promoters can arrange table-sharing, but this depends entirely on the venue and the night. For guaranteed privacy, book your own table through a promoter or directly via londonbottleservice.com.",
  },
  {
    question: "How far in advance should I book a table in Mayfair?",
    answer:
      "For Friday and Saturday nights, book at least a week in advance — premium tables at Tape London and Cirque Le Soir sell out earlier. Thursday bookings can often be made 2-3 days ahead. For special occasions like New Year's Eve or bank holiday weekends, book 2-4 weeks in advance. Midweek tables are usually available with shorter notice.",
  },
  {
    question: "Is a table booking worth it compared to guestlist?",
    answer:
      "It depends on your group and priorities. A table guarantees entry (no door risk), gives you a home base, includes bottle service, and often means faster entry. For groups of 6+, the per-person cost can be comparable to buying drinks at the bar all night. For smaller groups or budget nights, guestlist is the smarter play. Tables transform the experience at entertainment venues like Cirque Le Soir and Reign — at those clubs, we always recommend booking.",
  },
  {
    question: "What happens if you don't hit the minimum spend?",
    answer:
      "You still pay the minimum spend — it's a guarantee, not a target. Your card is charged the minimum regardless of how many bottles you order. Most groups comfortably hit or exceed the minimum. If you're worried about the spend, talk to your promoter beforehand — they can suggest the right venue and table tier for your budget. There's no penalty beyond paying what you agreed to.",
  },
];

export default function BestClubsForTablesPage() {
  return (
    <>
      <HeroImage src={heroImages.tablesGuide} alt="Table bookings at Mayfair clubs">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Best Clubs for Tables</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Best Mayfair Clubs for{" "}
          <span className="text-gold">Table Bookings</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl">
          Not all tables are created equal. Some Mayfair clubs are built for
          bottle service. Others just have a roped-off corner. This is the
          honest breakdown of where to book — ranked by the quality of the
          table experience itself.
        </p>
      </HeroImage>

      <article className="max-w-4xl mx-auto px-4 pt-8">
        <p className="text-dark-muted text-sm mb-8">
          Need the full venue rundown?{" "}
          <Link
            href="/mayfair-nightclubs"
            className="text-gold hover:text-gold-light"
          >
            Browse all Mayfair nightclubs
          </Link>
          . For pricing and availability on VIP tables, visit{" "}
          <a
            href="https://londonbottleservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            londonbottleservice.com
          </a>
          . Or check{" "}
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
          {tableClubs.map((club) => (
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
                  <p className="text-gold text-sm">{club.tagline}</p>
                </div>
                <WhatsAppCTA
                  variant="club"
                  clubName={club.name}
                  size="sm"
                  className="hidden sm:block shrink-0"
                />
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                {club.experience}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Table Layout
                  </p>
                  <p className="text-sm text-gray-300">{club.layout}</p>
                </div>
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    What&apos;s Included
                  </p>
                  <p className="text-sm text-gray-300">{club.included}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Minimum Spend
                  </p>
                  <p className="text-sm text-white font-medium">
                    {club.minSpend}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Our Recommendation
                  </p>
                  <p className="text-sm text-gray-300">{club.recommendation}</p>
                </div>
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

        {/* Tables vs Guestlist */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Tables vs Guestlist — Which Is Right for You?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-lg font-medium text-gold mb-3">
                Book a Table If...
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Your group is 6 or more — the per-person cost starts to make sense
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  It&apos;s a special occasion — birthday, celebration, stag/hen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  You want guaranteed entry with no door risk
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  You&apos;re going to Tape, Cirque, or Reign — the table experience defines these venues
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  You want a home base to regroup throughout the night
                </li>
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-lg font-medium text-white mb-3">
                Go Guestlist If...
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Your group is small — 2-4 people
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  You want to club-hop between venues
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Budget matters — guestlist entry is often free or low cover
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  It&apos;s a midweek night when the door is more relaxed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  You&apos;re going to Cuckoo or Selene where guestlist works brilliantly
                </li>
              </ul>
            </div>
          </div>
          <p className="text-dark-muted text-sm mt-4">
            Read more in our{" "}
            <Link
              href="/mayfair-club-guestlist-guide"
              className="text-gold hover:text-gold-light"
            >
              guestlist guide
            </Link>{" "}
            or learn{" "}
            <Link
              href="/how-mayfair-nightclub-tables-work"
              className="text-gold hover:text-gold-light"
            >
              how Mayfair nightclub tables work
            </Link>
            .
          </p>
        </section>

        {/* What to Expect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            What to Expect When You Book a Table
          </h2>
          <div className="space-y-4">
            <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
              <h3 className="text-white font-medium mb-1">1. The Booking</h3>
              <p className="text-gray-300 text-sm">
                Contact a promoter or book through{" "}
                <a
                  href="https://londonbottleservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light"
                >
                  londonbottleservice.com
                </a>
                . You&apos;ll agree a minimum spend, group size, and arrival time. A deposit or card on file is standard.
              </p>
            </div>
            <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
              <h3 className="text-white font-medium mb-1">2. Arrival</h3>
              <p className="text-gray-300 text-sm">
                Table bookings bypass the main queue. Give your name at the door and you&apos;re walked straight to your table. Arrive within 30 minutes of your confirmed time — venues can release tables that aren&apos;t claimed.
              </p>
            </div>
            <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
              <h3 className="text-white font-medium mb-1">3. The Setup</h3>
              <p className="text-gray-300 text-sm">
                Your host greets you, takes your bottle order, and gets everything set up. Most tables come with ice, mixers, and glassware ready. Bottles are often presented with sparklers — it&apos;s theatre, and it works.
              </p>
            </div>
            <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
              <h3 className="text-white font-medium mb-1">4. The Night</h3>
              <p className="text-gray-300 text-sm">
                Your table is yours all night. Come and go from the dance floor as you please. Your host keeps drinks topped up and orders more when you need them. The bill settles at the end — minimum spend applies regardless.
              </p>
            </div>
          </div>
          <p className="text-dark-muted text-sm mt-4">
            First time booking? Read our{" "}
            <Link
              href="/mayfair-vip-nightlife"
              className="text-gold hover:text-gold-light"
            >
              Mayfair VIP nightlife guide
            </Link>{" "}
            and check the{" "}
            <Link
              href="/mayfair-club-dress-code"
              className="text-gold hover:text-gold-light"
            >
              dress code guide
            </Link>{" "}
            — standards are higher for table guests.
          </p>
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

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            More Mayfair Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/how-mayfair-nightclub-tables-work"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">How Tables Work</p>
              <p className="text-xs text-dark-muted mt-1">
                The full breakdown of Mayfair table bookings
              </p>
            </Link>
            <Link
              href="/best-nightclubs-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Best Nightclubs in Mayfair</p>
              <p className="text-xs text-dark-muted mt-1">
                Our ranked picks for the top venues right now
              </p>
            </Link>
            <Link
              href="/mayfair-nightlife-guide"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Mayfair Nightlife Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                Everything you need to know before going out
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Ready to Book a Table?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp and we&apos;ll find the right table at
            the right club for your group. For full VIP table bookings, visit{" "}
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
                name: "Best Clubs for Tables in Mayfair",
                item: "https://mayfairtonight.com/best-clubs-for-tables-in-mayfair",
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
            name: "Best Mayfair Clubs for Table Bookings",
            itemListElement: tableClubs.map((club) => ({
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
