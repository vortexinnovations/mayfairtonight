import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title:
    "Best Mayfair Clubs for Groups — Where to Take Your Crew in 2026",
  description:
    "The best clubs in Mayfair for groups, birthdays, work nights out, and big parties. Group size guide, table tips, and honest recommendations for 2026.",
  alternates: {
    canonical: "https://mayfairtonight.com/best-clubs-for-groups-in-mayfair",
  },
  openGraph: {
    title: "Best Mayfair Clubs for Groups — Where to Take Your Crew",
    description:
      "Insider guide to the best Mayfair clubs for groups of every size. From birthday parties to corporate nights out.",
    url: "https://mayfairtonight.com/best-clubs-for-groups-in-mayfair",
  },
};

interface GroupRecommendation {
  category: string;
  description: string;
  clubs: {
    name: string;
    slug: string;
    why: string;
    guestlistOrTables: string;
    approxGroupCost: string;
    bestNight: string;
  }[];
}

const groupRecommendations: GroupRecommendation[] = [
  {
    category: "Birthday Groups",
    description:
      "Your birthday should feel like an event. These clubs turn a night out into a celebration with production value, VIP treatment, and crowds that match the occasion.",
    clubs: [
      {
        name: "Cirque Le Soir",
        slug: "cirque-le-soir",
        why: "The performers, the spectacle, the sheer chaos — Cirque turns any birthday into the most memorable night of the year. The entertainment is built into the experience, so you do not need to organise anything. Just book and show up.",
        guestlistOrTables:
          "Tables strongly recommended for birthdays. The venue can arrange birthday extras — sparklers, personalised bottle presentations, and announcements. Guestlist works on Wednesdays for smaller birthday groups.",
        approxGroupCost:
          "Table from ~£1,000 min spend (6-8 guests). Guestlist free but drinks at bar prices (budget £50-80pp).",
        bestNight: "Saturday for the full production. Wednesday for a more intimate celebration.",
      },
      {
        name: "Reign London",
        slug: "reign-london",
        why: "Aerial acrobats, live singers, and Las Vegas-level production value. Reign makes the birthday person feel like a VIP without trying. The multi-level venue means your group can spread out while staying together. Perfect for groups that want a show with their celebration.",
        guestlistOrTables:
          "Tables are the way to do birthdays here. Reign offers excellent birthday packages with personalised touches. The production value at your table makes the minimum spend feel worth it.",
        approxGroupCost:
          "Table from ~£1,000 min spend (6-8 guests). Birthday packages available — ask when booking.",
        bestNight: "Saturday for peak energy. Friday for a slightly more relaxed celebration.",
      },
    ],
  },
  {
    category: "Work Nights Out",
    description:
      "The corporate night out needs a venue that is impressive enough to feel like a treat but accessible enough that everyone has a good time. No overly exclusive doors. No intimidating dress codes. Just quality venues where colleagues can actually enjoy themselves.",
    clubs: [
      {
        name: "Cuckoo Club",
        slug: "cuckoo-club",
        why: "Two floors, two music policies, one venue. Cuckoo is the ultimate crowd-pleaser for mixed groups. The house music crowd gravitates downstairs, the hip-hop lovers go upstairs, and everyone meets at the bar in between. The door is accessible and the atmosphere is sociable.",
        guestlistOrTables:
          "Guestlist is easy to arrange for work groups. Tables are well-priced and accommodate larger bookings. The two-floor layout means your group never feels crammed into one space.",
        approxGroupCost:
          "Guestlist free, budget £40-60pp for drinks. Tables from ~£800 min spend (8-10 guests).",
        bestNight: "Thursday for the best atmosphere. Wednesday for a more relaxed midweek option.",
      },
      {
        name: "Maddox",
        slug: "maddox",
        why: "Start with dinner upstairs at the Italian restaurant, then move downstairs to the club. The transition is seamless and it gives the night a natural structure. Colleagues who are not hardcore clubbers appreciate the dinner element. The house music downstairs is sophisticated enough for everyone.",
        guestlistOrTables:
          "Book dinner and club as a package for the best value. The restaurant accommodates groups well and the transition to the club feels natural. Tables downstairs available if you want to extend the VIP experience.",
        approxGroupCost:
          "Dinner ~£60-80pp plus club entry. Club tables from ~£1,000 min spend. Dinner-to-dance packages offer better value.",
        bestNight: "Thursday or Friday. Saturday works but book dinner early.",
      },
    ],
  },
  {
    category: "Stag / Hen Adjacent",
    description:
      "Mayfair is not the traditional stag or hen territory — and that is exactly why it works. Skip the generic party bus and give the group a premium night they will actually remember. These clubs deliver high energy without the tourist-trap feeling.",
    clubs: [
      {
        name: "Funky Buddha",
        slug: "funky-buddha",
        why: "Legendary atmosphere, brilliant music, and a crowd that is genuinely up for it. Funky Buddha has the energy of a great party without the chaos of a stag-night venue. The music switches between hip-hop and funky house in a way that keeps everyone dancing. The group will feel like they discovered somewhere special.",
        guestlistOrTables:
          "Tables work brilliantly for stag and hen groups — they give you a base in the room. Guestlist is possible on Thursdays. Make sure the group meets the dress code. Funky Buddha is not a casual venue.",
        approxGroupCost:
          "Table from ~£1,000 min spend (6-8 guests). Guestlist free on selected nights.",
        bestNight: "Saturday for peak energy. Thursday for a more relaxed but still quality night.",
      },
      {
        name: "BEAT London",
        slug: "beat-london",
        why: "Pure party energy with a younger, high-energy crowd. BEAT does not overthink it — the music is loud, the lights are dynamic, and the atmosphere is built for groups who want to dance. Good value tables compared to the bigger Mayfair names make it a smart choice for larger groups watching the budget.",
        guestlistOrTables:
          "Guestlist works well. Tables offer great value for the area — more room to celebrate without the premium pricing of the established names. Ideal for groups of 8-12 who want a VIP experience at a reasonable cost.",
        approxGroupCost:
          "Tables from ~£800 min spend. Guestlist free, budget £40-50pp for drinks.",
        bestNight: "Friday or Saturday.",
      },
    ],
  },
  {
    category: "Mixed Groups",
    description:
      "Mixed groups need venues that cater to different tastes. The house music purist. The hip-hop head. The person who just wants good cocktails. These clubs have enough variety to keep everyone happy.",
    clubs: [
      {
        name: "Cuckoo Club",
        slug: "cuckoo-club",
        why: "The two-floor format is perfect for mixed groups. Send the hip-hop lovers upstairs and the house music fans downstairs. Everyone reconvenes at the bar. The sociable, unpretentious atmosphere means nobody feels out of place.",
        guestlistOrTables:
          "One of the easiest guestlists in Mayfair — perfect for mixed groups where not everyone is a regular clubber. Tables available if you want to guarantee a base for the group.",
        approxGroupCost:
          "Guestlist free. Tables from ~£800 min spend (8-10 guests).",
        bestNight: "Wednesday or Saturday.",
      },
      {
        name: "Luna Club London",
        slug: "luna-club-london",
        why: "A fresh addition to the Mayfair scene that blends quality music with an approachable atmosphere. Luna is stylish without being intimidating — the crowd is young, sociable, and mixed. It is the kind of venue where different friendship groups merge on the dance floor.",
        guestlistOrTables:
          "Guestlist is accessible and the door is welcoming to well-dressed mixed groups. Tables are competitively priced for Mayfair. A solid choice for groups trying Mayfair for the first time.",
        approxGroupCost:
          "Guestlist free. Tables from ~£800 min spend.",
        bestNight: "Friday or Saturday.",
      },
    ],
  },
];

const faqs = [
  {
    question: "What is the minimum spend for group tables in Mayfair?",
    answer:
      "Most Mayfair clubs start table minimums at around £800-£1,000 for a standard table (6-8 guests). Premium tables and weekend nights can be £1,500-£3,000+. Tape London starts from around £1,500. Cirque Le Soir and Reign from £1,000. Cuckoo Club and BEAT offer tables from around £800. For current table prices and group packages, visit londonbottleservice.com or message us on WhatsApp.",
  },
  {
    question: "Can mixed groups get on the guestlist in Mayfair?",
    answer:
      "Yes, but the ratio matters. Most Mayfair clubs prefer an even gender ratio or female-heavy groups on guestlist. All-male groups will struggle at some venues without a table booking. Mixed groups of 4-8 with a good gender balance work best. Book through a promoter for the smoothest experience. For all-female groups, check out our girls guestlist guide.",
  },
  {
    question: "What is the best night for groups in Mayfair?",
    answer:
      "Thursday is the best night for groups. Every major club is open, the atmosphere is excellent, and guestlists are more available than Saturday. Saturday is peak energy but tables sell out fast and guestlist spots are limited. Wednesday is the underrated option — Cirque Le Soir and Cuckoo Club both run quality midweek nights with easier access for groups.",
  },
  {
    question: "Can we split the bill on a table booking?",
    answer:
      "Most venues require one card on the table for the minimum spend, but your group can settle up internally. Some clubs allow split payments if arranged in advance. The minimum spend is on bottles and drinks — whatever your group orders counts towards it. Any unspent minimum is still charged. Discuss payment arrangements with your table host when you arrive.",
  },
  {
    question: "What should a group wear to Mayfair clubs?",
    answer:
      "Everyone in the group needs to meet the dress code — one person in trainers can turn away the whole group. For men: smart shoes, tailored trousers, collared shirt or smart knitwear. No sportswear. For women: heels, cocktail-appropriate attire. Send the group our dress code guide before the night so nobody gets caught out. The door team judges the group as a whole.",
  },
];

export default function BestClubsForGroupsPage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <Link href="/mayfair-nightclubs" className="hover:text-gold">
            Mayfair Nightclubs
          </Link>
          {" / "}
          <span className="text-gray-300">Best Clubs for Groups</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Best Mayfair Clubs for Groups —{" "}
          <span className="text-gold">Where to Take Your Crew</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          Taking a group to Mayfair requires a different strategy than going
          solo or as a couple. You need a venue that handles numbers, keeps
          everyone happy, and does not turn into a logistical nightmare at the
          door. Here are the best Mayfair clubs for every type of group, with
          honest advice on costs, guestlists, and what actually works.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          Need the full club directory?{" "}
          <Link
            href="/mayfair-nightclubs"
            className="text-gold hover:text-gold-light"
          >
            See all Mayfair nightclubs
          </Link>
          . For group table bookings and pricing, visit{" "}
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

        {/* Group Type Recommendations */}
        <div className="space-y-10">
          {groupRecommendations.map((group) => (
            <section key={group.category}>
              <h2 className="text-2xl font-bold text-white mb-2">
                {group.category}
              </h2>
              <p className="text-gray-300 mb-6">{group.description}</p>

              <div className="space-y-6">
                {group.clubs.map((club) => (
                  <div
                    key={club.slug}
                    className="bg-dark-card border border-dark-border rounded-xl p-5 sm:p-6"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white">
                          <Link
                            href={`/clubs/${club.slug}`}
                            className="hover:text-gold transition-colors"
                          >
                            {club.name}
                          </Link>
                        </h3>
                      </div>
                      <WhatsAppCTA
                        variant="club"
                        clubName={club.name}
                        size="sm"
                        className="hidden sm:block shrink-0"
                      />
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      {club.why}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                          Guestlist vs Tables for Groups
                        </p>
                        <p className="text-sm text-gray-300">
                          {club.guestlistOrTables}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                          Approximate Group Cost
                        </p>
                        <p className="text-sm text-gray-300">
                          {club.approxGroupCost}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-dark-muted">
                        Best night: {club.bestNight}
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
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* All-Female Groups Callout */}
        <section className="mt-10 mb-8">
          <div className="bg-dark-card border border-gold/30 rounded-xl p-5 sm:p-6">
            <h2 className="text-xl font-bold text-white mb-2">
              All-Female Groups
            </h2>
            <p className="text-gray-300 mb-3">
              All-female groups have the best guestlist access in Mayfair. Most
              venues prioritise well-dressed female groups on their guestlists,
              and the experience is often smoother at the door. We have a
              dedicated guide with the best venues, guestlist tips, and safety
              advice.
            </p>
            <Link
              href="/mayfair-nightlife-guide"
              className="text-gold hover:text-gold-light text-sm"
            >
              Read our Mayfair nightlife guide for tips →
            </Link>
          </div>
        </section>

        {/* Group Size Guide */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Group Size Guide
          </h2>
          <p className="text-gray-300 mb-6">
            Not every club handles large groups well. Here is how to match your
            group size to the right venue.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">4–6 People</h3>
              <p className="text-sm text-gray-300 mb-3">
                The sweet spot for Mayfair. Almost every venue handles this
                size comfortably on guestlist or with a single table.
              </p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">Tape London</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light">Dear Darling</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/scotch-of-st-james" className="text-gold hover:text-gold-light">Scotch of St James</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/selene-london" className="text-gold hover:text-gold-light">Selene London</Link>
                </li>
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">8–12 People</h3>
              <p className="text-sm text-gray-300 mb-3">
                Mid-size groups need venues with space and flexible table
                configurations. These clubs accommodate without feeling
                overcrowded.
              </p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/cuckoo-club" className="text-gold hover:text-gold-light">Cuckoo Club</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">Cirque Le Soir</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light">Funky Buddha</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">Maddox</Link>
                </li>
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">12+ People</h3>
              <p className="text-sm text-gray-300 mb-3">
                Large groups need multi-table bookings or venues with generous
                VIP areas. Book early and through a promoter who can coordinate
                the setup.
              </p>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/reign-london" className="text-gold hover:text-gold-light">Reign London</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">Cirque Le Soir</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/cuckoo-club" className="text-gold hover:text-gold-light">Cuckoo Club</Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <Link href="/clubs/beat-london" className="text-gold hover:text-gold-light">BEAT London</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Book for a Group */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            How to Book for a Group
          </h2>
          <div className="bg-dark-card border border-dark-border rounded-xl p-5 sm:p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-gold font-semibold mb-1">
                  1. Decide on Guestlist or Table
                </h3>
                <p className="text-sm text-gray-300">
                  Groups of 4-6 can work on guestlist at most venues. Groups of
                  8+ should seriously consider a table — it guarantees entry,
                  gives you a base, and the minimum spend covers your drinks
                  anyway. Read our{" "}
                  <Link href="/how-mayfair-nightclub-tables-work" className="text-gold hover:text-gold-light">
                    guide to how tables work
                  </Link>{" "}
                  for the full breakdown.
                </p>
              </div>
              <div>
                <h3 className="text-gold font-semibold mb-1">
                  2. Book Through a Promoter
                </h3>
                <p className="text-sm text-gray-300">
                  Never try to walk up with a large group. Book through a
                  promoter who knows the venue. They will confirm your numbers,
                  arrange the table configuration, and brief the door team. For
                  table bookings, visit{" "}
                  <a
                    href="https://londonbottleservice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light"
                  >
                    londonbottleservice.com
                  </a>
                  . For guestlist, message us on WhatsApp.
                </p>
              </div>
              <div>
                <h3 className="text-gold font-semibold mb-1">
                  3. Confirm Your Numbers Early
                </h3>
                <p className="text-sm text-gray-300">
                  Give the venue an accurate headcount at least 48 hours before.
                  Showing up with 12 people when you booked for 8 will cause
                  problems. If your numbers change, update the promoter
                  immediately. Venues plan table layouts and staffing based on
                  confirmed numbers.
                </p>
              </div>
              <div>
                <h3 className="text-gold font-semibold mb-1">
                  4. Brief the Group on Dress Code
                </h3>
                <p className="text-sm text-gray-300">
                  One person in the wrong outfit can get the whole group turned
                  away. Send everyone our{" "}
                  <Link href="/dress-code" className="text-gold hover:text-gold-light">
                    dress code guide
                  </Link>{" "}
                  before the night. Smart shoes, no sportswear, and polished
                  styling for everyone. No exceptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Group Guestlist Tips */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Group Guestlist Tips
          </h2>
          <div className="bg-dark-card border border-dark-border rounded-xl p-5 sm:p-6">
            <ul className="space-y-3">
              <li className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-gold mt-0.5 font-bold">•</span>
                <span>
                  <strong className="text-white">Arrive together.</strong>{" "}
                  Staggered arrivals make the door team&apos;s job harder and
                  reduce your chances. Get everyone to a nearby bar first, then
                  walk to the club as one group.
                </span>
              </li>
              <li className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-gold mt-0.5 font-bold">•</span>
                <span>
                  <strong className="text-white">Arrive before midnight.</strong>{" "}
                  Guestlist windows close. Most Mayfair clubs want guestlist
                  arrivals between 10:30pm and midnight. After midnight, the door
                  tightens and groups are the first to be turned away.
                </span>
              </li>
              <li className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-gold mt-0.5 font-bold">•</span>
                <span>
                  <strong className="text-white">Gender ratio matters.</strong>{" "}
                  Mixed groups with an even ratio or more women have the best
                  chances on guestlist. All-male groups of 4+ will struggle at
                  most venues without a table. Check our{" "}
                  <Link href="/mayfair-club-guestlist-guide" className="text-gold hover:text-gold-light">
                    guestlist guide
                  </Link>{" "}
                  for more.
                </span>
              </li>
              <li className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-gold mt-0.5 font-bold">•</span>
                <span>
                  <strong className="text-white">Have one point of contact.</strong>{" "}
                  Nominate one person to communicate with the promoter and the
                  door team. Having five people waving phones at the bouncer does
                  not help anyone.
                </span>
              </li>
              <li className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-gold mt-0.5 font-bold">•</span>
                <span>
                  <strong className="text-white">Have a backup plan.</strong>{" "}
                  Guestlist is never guaranteed. If the room is full, you need a
                  Plan B. Check{" "}
                  <a
                    href="https://londonclubstonight.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light"
                  >
                    londonclubstonight.com
                  </a>{" "}
                  for alternative options on the night.
                </span>
              </li>
            </ul>
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
                Complete directory with every venue
              </p>
            </Link>
            <Link
              href="/mayfair-club-dress-code"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Group Dress Code</p>
              <p className="text-xs text-dark-muted mt-1">
                Make sure everyone passes the door
              </p>
            </Link>
            <Link
              href="/how-mayfair-nightclub-tables-work"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">How Tables Work</p>
              <p className="text-xs text-dark-muted mt-1">
                Minimum spends, what is included, and tips
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
            Planning a Group Night?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp with your group size, date, and vibe — we
            will recommend the perfect venue and sort your guestlist or table.
            For group table bookings and pricing, visit{" "}
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
                name: "Best Clubs for Groups",
                item: "https://mayfairtonight.com/best-clubs-for-groups-in-mayfair",
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
