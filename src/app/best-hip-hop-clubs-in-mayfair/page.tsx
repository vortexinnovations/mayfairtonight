import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroImage from "@/components/HeroImage";
import { heroImages } from "@/data/images";

export const metadata: Metadata = {
  title:
    "Best Hip-Hop & RnB Clubs in Mayfair — Where the Music Actually Hits",
  description:
    "The best hip-hop and RnB clubs in Mayfair, London — ranked by music quality, crowd, and vibe. From old school classics to modern trap. Insider picks for 2026.",
  alternates: {
    canonical: "https://mayfairtonight.com/best-hip-hop-clubs-in-mayfair",
  },
  openGraph: {
    title: "Best Hip-Hop & RnB Clubs in Mayfair",
    description:
      "Ranked guide to the best hip-hop and RnB nights in Mayfair. Real recommendations from people who actually care about the music.",
    url: "https://mayfairtonight.com/best-hip-hop-clubs-in-mayfair",
  },
};

interface HipHopClub {
  rank: number;
  name: string;
  slug: string;
  musicStyle: string;
  crowd: string;
  bestNights: string;
  vibe: string;
  guestlistOrTables: string;
  verdict: string;
}

const hipHopClubs: HipHopClub[] = [
  {
    rank: 1,
    name: "Tape London",
    slug: "tape-london",
    musicStyle:
      "Old school hip-hop meets modern trap. The DJs here read the room better than anywhere in Mayfair — expect seamless transitions from 90s classics to Drake deep cuts.",
    crowd:
      "A-list celebrities, music industry insiders, and well-connected regulars. This is not a casual crowd. Everyone is here because they earned their spot on the list.",
    bestNights: "Thursday and Saturday",
    vibe:
      "Intimate, high-energy, exclusive. The room is small enough that the bass hits your chest. When the right track drops, the whole room reacts.",
    guestlistOrTables:
      "Tables strongly recommended. Guestlist is limited and selective. This is a tables-first venue — if you want the full Tape experience, book a table.",
    verdict:
      "The undisputed king of hip-hop in Mayfair. The music curation is best-in-class, the crowd matches the energy, and the intimate room creates an atmosphere that bigger clubs simply cannot replicate. If hip-hop is your thing, Tape is the benchmark.",
  },
  {
    rank: 2,
    name: "Funky Buddha",
    slug: "funky-buddha",
    musicStyle:
      "Classic hip-hop and RnB with funky house crossovers. Think Biggie into Beyoncé into Disclosure — the transitions are what make this place special.",
    crowd:
      "Loyal regulars, music lovers, and people who actually dance. The Funky Buddha crowd has taste and they come for the music, not the Instagram story.",
    bestNights: "Thursday and Saturday",
    vibe:
      "Legendary. There is a reason this club has survived decades in Mayfair. The energy on the dance floor is infectious and the atmosphere feels earned — built over years of quality nights.",
    guestlistOrTables:
      "Guestlist works well here, especially on Thursdays. Tables are excellent for groups of 6+. One of the better guestlist-to-table ratios in Mayfair.",
    verdict:
      "The most authentic hip-hop heritage in Mayfair. Funky Buddha does not chase trends — it sets them. The music switches between hip-hop bangers and funky grooves in a way that keeps the floor packed from midnight until close.",
  },
  {
    rank: 3,
    name: "TABU London",
    slug: "tabu-london",
    musicStyle:
      "Underground-leaning hip-hop and RnB. Darker, moodier selections — think Travis Scott, The Weeknd, and Afrobeats crossovers. The playlist matches the aesthetic perfectly.",
    crowd:
      "Fashion-forward, style-conscious, and young. This is where the cool kids go. The crowd dresses like they are going to a fashion week afterparty.",
    bestNights: "Friday and Saturday",
    vibe:
      "Dark, stylish, and immersive. The Japanese underground theme creates a completely different energy to the rest of Mayfair. It feels like a secret you discovered.",
    guestlistOrTables:
      "Guestlist is solid on Fridays. Saturday leans tables-heavy. Book through a promoter for the best experience either way.",
    verdict:
      "The coolest hip-hop club in Mayfair. TABU brings a fashion-forward edge that other venues lack. If you want hip-hop without the mainstream bottle-popping clichés, this is your spot.",
  },
  {
    rank: 4,
    name: "Cuckoo Club",
    slug: "cuckoo-club",
    musicStyle:
      "Hip-hop and RnB upstairs, house music downstairs. The upstairs room plays crowd-pleasing hip-hop — chart hits, classic anthems, and singalong moments.",
    crowd:
      "Young, sociable, and fun. Mixed groups, birthday parties, and people who want to dance without taking themselves too seriously.",
    bestNights: "Wednesday and Saturday",
    vibe:
      "Energetic and accessible. Cuckoo does not try to be exclusive — it tries to be fun. The upstairs hip-hop room gets properly rowdy on the right night.",
    guestlistOrTables:
      "One of the easiest guestlists in Mayfair. Great for groups who want guaranteed entry without the stress. Tables are well-priced for the area.",
    verdict:
      "The most accessible hip-hop night in Mayfair. If you want to dance to hip-hop without the exclusive door or eye-watering table minimums, Cuckoo upstairs delivers. The two-floor layout means you can switch between hip-hop and house all night.",
  },
  {
    rank: 5,
    name: "BEAT London",
    slug: "beat-london",
    musicStyle:
      "Commercial hip-hop and RnB with Afrobeats influence. The music leans younger and more current — heavy on the playlists that are trending right now.",
    crowd:
      "Young professionals, international visitors, and groups celebrating. High energy, diverse, and ready to party.",
    bestNights: "Friday and Saturday",
    vibe:
      "Pure party energy. BEAT is built for dancing and it does not pretend otherwise. The sound system is loud, the lights are dynamic, and the crowd matches the intensity.",
    guestlistOrTables:
      "Guestlist works well. Tables are good value compared to the bigger Mayfair names. Solid option for groups who want a VIP experience without the premium price tag.",
    verdict:
      "The newest hip-hop contender in Mayfair. BEAT brings raw energy and a younger crowd. If the established names feel too refined, BEAT strips it back to what matters — good music and a packed dance floor.",
  },
  {
    rank: 6,
    name: "Cirque Le Soir",
    slug: "cirque-le-soir",
    musicStyle:
      "Hip-hop and RnB as the backbone, but the live performers change everything. The music drives the energy between acts — expect anthems that the whole room knows.",
    crowd:
      "International, high-energy, and up for anything. The Cirque crowd comes for an experience, and the hip-hop soundtrack ties the night together.",
    bestNights: "Wednesday and Saturday",
    vibe:
      "Theatrical chaos meets hip-hop energy. The performers, the fire-breathers, the dancers — it is all set to a hip-hop and RnB soundtrack that keeps the party moving between acts.",
    guestlistOrTables:
      "Tables recommended for the best experience — they position you right in the action. Guestlist works on Wednesdays. Saturday is tables-only most weeks.",
    verdict:
      "Not a pure hip-hop club, but the hip-hop and RnB soundtrack is the thread that ties the Cirque experience together. If you want your hip-hop served with circus performers and genuine spectacle, there is nothing else like it.",
  },
];

const faqs = [
  {
    question: "What is the best night for hip-hop in Mayfair?",
    answer:
      "Thursday and Saturday are the strongest hip-hop nights across Mayfair. Thursday at Tape London is considered the gold standard — the crowd is up for it and the DJs play deeper cuts. Saturday is peak energy everywhere. Wednesday at Cirque Le Soir is the underrated pick if you want hip-hop with entertainment.",
  },
  {
    question: "What is the dress code for hip-hop clubs in Mayfair?",
    answer:
      "Smart and stylish — Mayfair hip-hop clubs are not casual. Think designer trainers (clean, premium brands), tailored trousers or quality jeans, and a sharp shirt or fitted top. No sportswear, no shorts, no flip-flops. Women dress up. The vibe is polished streetwear meets smart casual. Read our full dress code guide for specifics.",
  },
  {
    question: "Can you request songs at Mayfair hip-hop clubs?",
    answer:
      "At most venues, no. The DJs at Tape London, Funky Buddha, and TABU are hired for their curation — they read the room, not request slips. If you book a table, your table host might pass a request to the DJ, but there are no guarantees. Cuckoo Club upstairs is the most request-friendly of the lot.",
  },
  {
    question: "What age range goes to hip-hop clubs in Mayfair?",
    answer:
      "Most hip-hop clubs in Mayfair attract a 23-35 crowd. TABU and BEAT skew slightly younger (21-30). Funky Buddha and Tape London attract a more established crowd (25-38). All venues are 18+ but most guestlists prefer 21+. Groups that look underage will struggle at the door regardless of ID.",
  },
  {
    question: "Can I get on the guestlist for hip-hop nights in Mayfair?",
    answer:
      "Yes — most venues offer guestlist for hip-hop nights, but availability varies. Cuckoo Club and BEAT have the most open guestlists. Funky Buddha and TABU work through promoters. Tape London is the hardest — guestlist spots are limited and tables are the primary route in. Message us on WhatsApp and we can sort guestlist at any of these venues.",
  },
];

export default function BestHipHopClubsPage() {
  return (
    <>
      <HeroImage src={heroImages.hipHopClubs} alt="Hip-hop clubs in Mayfair">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <Link href="/mayfair-nightclubs" className="hover:text-gold">
            Mayfair Nightclubs
          </Link>
          {" / "}
          <span className="text-gray-300">Hip-Hop & RnB Clubs</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Best Hip-Hop & RnB Clubs in Mayfair —{" "}
          <span className="text-gold">Ranked for 2026</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl">
          Mayfair does hip-hop differently. No sticky floors. No average DJs.
          These are clubs where the music is curated, the crowd matches the
          energy, and the sound systems actually do the bass justice.
        </p>
      </HeroImage>

      <article className="max-w-4xl mx-auto px-4 pt-8">
        <p className="text-dark-muted text-sm mb-8">
          Looking for the full venue breakdown?{" "}
          <Link
            href="/best-nightclubs-in-mayfair"
            className="text-gold hover:text-gold-light"
          >
            See our ranked guide to all Mayfair nightclubs
          </Link>
          . Want{" "}
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
          {hipHopClubs.map((club) => (
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
                  <p className="text-gold text-sm">{club.musicStyle.split(".")[0]}</p>
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
                    Music Style
                  </p>
                  <p className="text-sm text-white">{club.musicStyle}</p>
                </div>
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Best Nights
                  </p>
                  <p className="text-sm text-white">{club.bestNights}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    The Crowd
                  </p>
                  <p className="text-sm text-gray-300">{club.crowd}</p>
                </div>
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    The Vibe
                  </p>
                  <p className="text-sm text-gray-300">{club.vibe}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                  Guestlist vs Tables
                </p>
                <p className="text-sm text-gray-300">
                  {club.guestlistOrTables}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm">
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

        {/* Hip-Hop vs RnB */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Hip-Hop vs RnB — Which Clubs Lean Which Way
          </h2>
          <p className="text-gray-300 mb-6">
            Not all hip-hop nights are created equal. Some clubs lean harder
            into rap and trap. Others play smoother RnB and soulful grooves.
            Here is how the Mayfair hip-hop map breaks down.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                Leans Hip-Hop / Trap
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>
                    <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">Tape London</Link>
                    {" "}— modern trap mixed with 90s classics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>
                    <Link href="/clubs/tabu-london" className="text-gold hover:text-gold-light">TABU London</Link>
                    {" "}— darker, underground hip-hop selections
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>
                    <Link href="/clubs/beat-london" className="text-gold hover:text-gold-light">BEAT London</Link>
                    {" "}— current chart hip-hop and Afrobeats
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                Leans RnB / Soul
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>
                    <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light">Funky Buddha</Link>
                    {" "}— classic RnB with funky house crossovers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>
                    <Link href="/clubs/cuckoo-club" className="text-gold hover:text-gold-light">Cuckoo Club</Link>
                    {" "}— crowd-pleasing RnB anthems upstairs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>
                    <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">Cirque Le Soir</Link>
                    {" "}— RnB-heavy sets between performances
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Night Recommendation */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Best Night for Hip-Hop in Mayfair
          </h2>
          <div className="bg-dark-card border border-gold/30 rounded-xl p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-gold font-semibold mb-2">
                  Thursday — The Insider Pick
                </h3>
                <p className="text-sm text-gray-300">
                  Thursday is the best night for hip-hop in Mayfair. The crowd
                  is genuinely up for it — no tourists, no casual visitors.{" "}
                  <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">Tape London</Link>,{" "}
                  <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light">Funky Buddha</Link>,
                  and{" "}
                  <Link href="/clubs/tabu-london" className="text-gold hover:text-gold-light">TABU</Link>{" "}
                  all deliver on Thursdays. DJs play deeper, the rooms feel
                  more intimate, and the atmosphere is electric.
                </p>
              </div>
              <div>
                <h3 className="text-gold font-semibold mb-2">
                  Saturday — Peak Energy
                </h3>
                <p className="text-sm text-gray-300">
                  Saturday is when every venue is at full capacity. The energy
                  is higher, the rooms are packed, and the music stays
                  commercial and crowd-pleasing. If you want the big-night-out
                  feeling with hip-hop as the soundtrack, Saturday is the move.
                  Book tables early — Saturday sells out fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Music Policy Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="text-left py-3 px-3 text-dark-muted font-medium">Club</th>
                  <th className="text-left py-3 px-3 text-dark-muted font-medium">Primary Sound</th>
                  <th className="text-left py-3 px-3 text-dark-muted font-medium">Best Night</th>
                  <th className="text-left py-3 px-3 text-dark-muted font-medium">Entry Route</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 px-3 text-white font-medium">Tape London</td>
                  <td className="py-3 px-3">Hip-Hop / Trap</td>
                  <td className="py-3 px-3">Thu & Sat</td>
                  <td className="py-3 px-3">Tables preferred</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 px-3 text-white font-medium">Funky Buddha</td>
                  <td className="py-3 px-3">RnB / Hip-Hop / Funk</td>
                  <td className="py-3 px-3">Thu & Sat</td>
                  <td className="py-3 px-3">Guestlist or tables</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 px-3 text-white font-medium">TABU London</td>
                  <td className="py-3 px-3">Hip-Hop / RnB / Afrobeats</td>
                  <td className="py-3 px-3">Fri & Sat</td>
                  <td className="py-3 px-3">Guestlist or tables</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 px-3 text-white font-medium">Cuckoo Club</td>
                  <td className="py-3 px-3">RnB / Chart Hip-Hop</td>
                  <td className="py-3 px-3">Wed & Sat</td>
                  <td className="py-3 px-3">Guestlist easy</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 px-3 text-white font-medium">BEAT London</td>
                  <td className="py-3 px-3">Commercial Hip-Hop / Afrobeats</td>
                  <td className="py-3 px-3">Fri & Sat</td>
                  <td className="py-3 px-3">Guestlist or tables</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-white font-medium">Cirque Le Soir</td>
                  <td className="py-3 px-3">Hip-Hop / RnB + Entertainment</td>
                  <td className="py-3 px-3">Wed & Sat</td>
                  <td className="py-3 px-3">Tables recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Guides */}
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
              href="/mayfair-club-dress-code"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Hip-Hop Club Dress Code</p>
              <p className="text-xs text-dark-muted mt-1">
                What to wear to Mayfair hip-hop nights
              </p>
            </Link>
            <Link
              href="/mayfair-club-guestlist-guide"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Guestlist Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                How to get on the list at every venue
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
            Ready to Book a Hip-Hop Night?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp and we&apos;ll sort your guestlist or table
            at any Mayfair hip-hop club. For VIP table bookings, visit{" "}
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
              {
                "@type": "ListItem",
                position: 3,
                name: "Best Hip-Hop & RnB Clubs",
                item: "https://mayfairtonight.com/best-hip-hop-clubs-in-mayfair",
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
            name: "Best Hip-Hop & RnB Clubs in Mayfair — Ranked for 2026",
            itemListElement: hipHopClubs.map((club) => ({
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
