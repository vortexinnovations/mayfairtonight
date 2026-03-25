import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title:
    "Mayfair VIP Nightlife — The Insider Guide to Exclusive Clubs",
  description:
    "The complete guide to VIP nightlife in Mayfair. Exclusivity tiers, table booking guide, guestlist vs VIP comparison, and what to expect at every venue. Insider access.",
  alternates: {
    canonical: "https://mayfairtonight.com/mayfair-vip-nightlife",
  },
  openGraph: {
    title: "Mayfair VIP Nightlife — The Insider Guide",
    description:
      "Exclusivity tiers, table bookings, and VIP access at every Mayfair club. The insider guide to London's most exclusive nightlife.",
    url: "https://mayfairtonight.com/mayfair-vip-nightlife",
  },
};

const faqs = [
  {
    question: "How much does a VIP table in Mayfair cost?",
    answer:
      "Table minimums start from around 1,000 pounds at entry-level venues like Cuckoo Club, Luna, and BEAT. Mid-tier venues like Reign, Cirque Le Soir, and Maddox start from 1,500 to 2,000 pounds. Top-tier venues like Tape London start from 2,000 to 3,000 pounds minimum spend. Premium table positions cost more. For exact pricing visit londonbottleservice.com.",
  },
  {
    question: "Is VIP worth it in Mayfair?",
    answer:
      "It depends on your group size and priorities. For groups of four or more a table often makes financial sense when you factor in guaranteed entry, a home base, and bottle prices versus buying drinks individually. For couples or small groups guestlist entry is usually the smarter play. The experience difference at venues like Tape and Cirque is significant with a table.",
  },
  {
    question: "Can I get VIP access without a table?",
    answer:
      "At most Mayfair clubs VIP simply means table booking — there is no separate VIP section with a cheaper entry fee. Guestlist gets you through the door at standard venues. At members clubs like Scotch of St James and Tape London membership or a members invitation is the alternative to a table.",
  },
  {
    question: "What is included with a VIP table in Mayfair?",
    answer:
      "A VIP table booking includes a reserved table and seating area, a dedicated server, and a minimum spend requirement which covers bottles and mixers. Most venues offer champagne and premium spirits. The minimum spend is not a fee on top of drinks — it is the amount you commit to spending on bottles and service.",
  },
  {
    question: "How do I book a VIP table in Mayfair?",
    answer:
      "The easiest way is through a booking service like londonbottleservice.com which handles all Mayfair venues. You can also message us on WhatsApp and we will arrange everything. Booking directly with the venue works but you may miss out on promoter perks like priority positioning or complimentary upgrades.",
  },
];

export default function MayfairVIPPage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Mayfair VIP Nightlife</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair VIP Nightlife —{" "}
          <span className="text-gold">The Insider Guide to Exclusive Clubs</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          VIP in Mayfair means different things at different venues. At some
          clubs it means a table with bottle service. At others it means
          knowing the right person. This guide breaks down the exclusivity
          levels, explains how the system actually works, and tells you
          exactly what to expect at every venue.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          Ready to book a table?{" "}
          <a
            href="https://londonbottleservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            London Bottle Service
          </a>{" "}
          handles all Mayfair VIP bookings. Need to decide on a venue first?{" "}
          <Link
            href="/best-nightclubs-in-mayfair"
            className="text-gold hover:text-gold-light"
          >
            See our ranked guide
          </Link>
          .
        </p>

        {/* What VIP Actually Means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            What VIP Actually Means in Mayfair
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Mayfair nightlife runs on a three-tier access system. Understanding
            how it works saves you money and sets the right expectations.
          </p>

          <div className="space-y-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-2">
                Tables (Bottle Service)
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                The standard VIP experience. You reserve a table, commit to a
                minimum spend on bottles, and get a dedicated server for the
                night. This is what most people mean when they say VIP in
                Mayfair. It guarantees entry, gives your group a home base,
                and at the best venues puts you in the centre of the action.
              </p>
              <p className="text-sm text-dark-muted">
                Minimums range from 1,000 to 5,000+ pounds depending on the
                venue, night, and table position. Premium tables near the DJ
                or stage cost more. For pricing across all venues, check{" "}
                <a
                  href="https://londonbottleservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light"
                >
                  londonbottleservice.com
                </a>
                .
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-2">
                Guestlist
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                Free or reduced-cover entry arranged through a promoter.
                Guestlist does not include a table or reserved area. You get
                through the door but you are on the dance floor or at the bar
                like everyone else. At most Mayfair clubs guestlist is the
                standard way in for non-table guests.
              </p>
              <p className="text-sm text-dark-muted">
                Works well at Cuckoo Club, Funky Buddha, Cirque Le Soir,
                Reign, and most mid-tier venues. Less reliable at Tape London
                and Scotch where tables and membership dominate.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-2">
                Membership
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                A few Mayfair venues operate as members clubs or have
                membership elements. Membership gives you priority access,
                members-only nights, and a personal relationship with the
                venue. It is the highest tier of access but it is not
                something you buy online — it requires a connection.
              </p>
              <p className="text-sm text-dark-muted">
                Scotch of St James and Tape London have the strongest
                members-club cultures. At other venues the distinction
                between VIP table guest and member is minimal.
              </p>
            </div>
          </div>
        </section>

        {/* The VIP Tier List */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Mayfair VIP Tier List
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Not all VIP experiences are equal. We have ranked every Mayfair
            club by exclusivity level so you know exactly what you are booking
            into. Higher tier means harder access, more exclusive crowd, and
            a more premium experience.
          </p>

          {/* Tier 1 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold/10 border border-gold/40 rounded-lg px-3 py-1">
                <span className="text-gold font-bold text-sm">TIER 1</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Ultra-Exclusive
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              The pinnacle. These venues operate on exclusivity as their core
              product. The crowds are genuinely A-list, the rooms are intimate,
              and access is earned not bought. A table helps but it is not
              always enough — you need to look the part and know the right
              people.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      <Link
                        href="/clubs/tape-london"
                        className="hover:text-gold transition-colors"
                      >
                        Tape London
                      </Link>
                    </h4>
                    <p className="text-gold text-sm">The Hardest Door in Mayfair</p>
                  </div>
                  <WhatsAppCTA
                    variant="club"
                    clubName="Tape London"
                    size="sm"
                    className="shrink-0"
                  />
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Tape is tables and members only on most nights. The room is
                  small, the crowd is A-list, and the atmosphere is unlike
                  anything else in London. Celebrities, musicians, and
                  high-net-worth individuals fill the room. Guestlist access
                  is extremely limited — a{" "}
                  <a
                    href="https://londonbottleservice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light"
                  >
                    table booking
                  </a>{" "}
                  is the most reliable way in.
                </p>
                <p className="text-sm text-dark-muted">
                  Best for: The ultimate exclusive Mayfair experience. Groups
                  who want the most prestigious night possible.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      <Link
                        href="/clubs/scotch-of-st-james"
                        className="hover:text-gold transition-colors"
                      >
                        Scotch of St James
                      </Link>
                    </h4>
                    <p className="text-gold text-sm">Heritage Members Club</p>
                  </div>
                  <WhatsAppCTA
                    variant="club"
                    clubName="Scotch of St James"
                    size="sm"
                    className="shrink-0"
                  />
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Scotch has decades of London nightlife history and operates
                  with a members-club mentality. The crowd is older, wealthier,
                  and more understated than the flashy Mayfair set. Access
                  requires a connection or a promoter relationship. The
                  intimate basement setting and heritage atmosphere create
                  something money alone cannot buy.
                </p>
                <p className="text-sm text-dark-muted">
                  Best for: Those who value history, intimacy, and refined
                  company over spectacle.
                </p>
              </div>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold/10 border border-gold/40 rounded-lg px-3 py-1">
                <span className="text-gold font-bold text-sm">TIER 2</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Premium Experience
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              These venues deliver genuinely premium experiences with
              high-calibre crowds. Tables are the play here — guestlist works
              but the VIP table experience is where these clubs really shine.
              Expect world-class entertainment, fashion-forward crowds, and
              nights you will remember.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      <Link
                        href="/clubs/the-box-london"
                        className="hover:text-gold transition-colors"
                      >
                        The Box
                      </Link>
                    </h4>
                    <p className="text-gold text-sm">Provocative Theatre</p>
                  </div>
                  <WhatsAppCTA
                    variant="club"
                    clubName="The Box"
                    size="sm"
                    className="shrink-0"
                  />
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  The Box curates its crowd carefully. The performances are
                  boundary-pushing and the atmosphere is decadent. A table
                  gives you a front-row seat to the shows and positions you
                  among the fashion and media crowd. The door selects based
                  on style and attitude as much as booking status.
                </p>
                <p className="text-sm text-dark-muted">
                  Best for: Adventurous, creative types who want a night they
                  will talk about for weeks.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      <Link
                        href="/clubs/tabu-london"
                        className="hover:text-gold transition-colors"
                      >
                        TABU London
                      </Link>
                    </h4>
                    <p className="text-gold text-sm">Fashion Underground</p>
                  </div>
                  <WhatsAppCTA
                    variant="club"
                    clubName="TABU London"
                    size="sm"
                    className="shrink-0"
                  />
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  TABU attracts the fashion crowd — influencers, stylists,
                  and creatives. The Japanese underground aesthetic is unlike
                  anything else in Mayfair. The door is curated based on
                  style. A table here puts you among the best-dressed people
                  in London. The hip-hop is on point and the atmosphere is
                  dark and moody in the best way.
                </p>
                <p className="text-sm text-dark-muted">
                  Best for: Fashion-conscious groups who want something cooler
                  than standard Mayfair.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      <Link
                        href="/clubs/cirque-le-soir"
                        className="hover:text-gold transition-colors"
                      >
                        Cirque Le Soir
                      </Link>
                    </h4>
                    <p className="text-gold text-sm">The Circus Experience</p>
                  </div>
                  <WhatsAppCTA
                    variant="club"
                    clubName="Cirque Le Soir"
                    size="sm"
                    className="shrink-0"
                  />
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  A VIP table at Cirque puts you at the centre of the chaos.
                  Performers interact with table guests, the energy is
                  electric, and the full circus experience happens around you.
                  This is one of the best table experiences in Mayfair
                  because the entertainment element makes the spend feel
                  completely justified.
                </p>
                <p className="text-sm text-dark-muted">
                  Best for: Groups celebrating birthdays, hen nights, or
                  anyone who wants maximum entertainment.
                </p>
              </div>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold/10 border border-gold/40 rounded-lg px-3 py-1">
                <span className="text-gold font-bold text-sm">TIER 3</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Established & Reliable
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              The backbone of Mayfair nightlife. These clubs deliver
              consistently excellent nights with strong VIP offerings.
              Guestlist works well here but a table elevates the experience
              significantly. The crowds are quality and the atmosphere is
              reliable every weekend.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      <Link
                        href="/clubs/funky-buddha"
                        className="hover:text-gold transition-colors"
                      >
                        Funky Buddha
                      </Link>
                    </h4>
                    <p className="text-gold text-sm">Legendary Status</p>
                  </div>
                  <WhatsAppCTA
                    variant="club"
                    clubName="Funky Buddha"
                    size="sm"
                    className="shrink-0"
                  />
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Funky Buddha has earned its reputation through years of
                  consistency. The loyal crowd, brilliant music, and community
                  atmosphere make every night feel quality. A table here gives
                  you a base in one of Mayfair&apos;s most energetic rooms.
                  The dance floor is always packed and the hip-hop curation is
                  best-in-class.
                </p>
                <p className="text-sm text-dark-muted">
                  Best for: Groups who want a proven, high-energy Mayfair
                  night with serious credentials.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      <Link
                        href="/clubs/reign-london"
                        className="hover:text-gold transition-colors"
                      >
                        Reign London
                      </Link>
                    </h4>
                    <p className="text-gold text-sm">Showclub Production</p>
                  </div>
                  <WhatsAppCTA
                    variant="club"
                    clubName="Reign London"
                    size="sm"
                    className="shrink-0"
                  />
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  The table experience at Reign is elevated by the live
                  entertainment. Aerial acrobats perform directly above the
                  tables, live vocalists fill the room, and the production
                  value is genuinely impressive. Book a{" "}
                  <a
                    href="https://londonbottleservice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light"
                  >
                    table near the stage
                  </a>{" "}
                  for the best experience.
                </p>
                <p className="text-sm text-dark-muted">
                  Best for: Special occasions, corporate entertainment, and
                  groups who want a spectacle.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      <Link
                        href="/clubs/maddox"
                        className="hover:text-gold transition-colors"
                      >
                        Maddox
                      </Link>
                    </h4>
                    <p className="text-gold text-sm">Dinner to Dance</p>
                  </div>
                  <WhatsAppCTA
                    variant="club"
                    clubName="Maddox"
                    size="sm"
                    className="shrink-0"
                  />
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Maddox offers the most complete VIP evening in Mayfair.
                  Start with Italian dining upstairs then transition to the
                  basement club for proper house music. The dinner-to-dance
                  flow is seamless. A table in the club gives you a
                  sophisticated base surrounded by a thirty-something crowd
                  that genuinely appreciates the music.
                </p>
                <p className="text-sm text-dark-muted">
                  Best for: Couples, date nights, and groups who want dinner
                  and dancing in one venue.
                </p>
              </div>
            </div>
          </div>

          {/* Tier 4 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold/10 border border-gold/40 rounded-lg px-3 py-1">
                <span className="text-gold font-bold text-sm">TIER 4</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Accessible Premium
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Excellent venues with lower barriers to entry. Guestlist access
              is straightforward and tables are available at more accessible
              minimum spends. These are smart choices if you want a quality
              Mayfair experience without the intensity of the top-tier
              doors. The crowd is still quality and the nights are still
              premium.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-1">
                  <Link
                    href="/clubs/cuckoo-club"
                    className="hover:text-gold transition-colors"
                  >
                    Cuckoo Club
                  </Link>
                  <span className="text-gold text-sm ml-2">Most Versatile</span>
                </h4>
                <p className="text-sm text-gray-300 mb-2">
                  Two floors with different music policies. One of the most
                  accessible guestlists in Mayfair. Tables available at
                  reasonable minimums. The young, sociable crowd makes this
                  the perfect entry point into Mayfair VIP nightlife. A table
                  on either floor gives you a solid base for the night.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-1">
                  <Link
                    href="/clubs/dear-darling"
                    className="hover:text-gold transition-colors"
                  >
                    Dear Darling
                  </Link>
                  <span className="text-gold text-sm ml-2">Cocktail Elegance</span>
                </h4>
                <p className="text-sm text-gray-300 mb-2">
                  The most refined bar-to-club experience in Mayfair. Booking
                  a table here means outstanding cocktails with dedicated
                  service in an opulent setting. The intimate size means every
                  table feels premium. Perfect for date nights and smaller
                  groups who prefer quality over chaos.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-1">
                  <Link
                    href="/clubs/selene-london"
                    className="hover:text-gold transition-colors"
                  >
                    Selene London
                  </Link>
                  <span className="text-gold text-sm ml-2">Refined Newcomer</span>
                </h4>
                <p className="text-sm text-gray-300 mb-2">
                  Still building its reputation which works in your favour —
                  premium experience with easier access than the established
                  names. The cocktail programme is impressive, the house music
                  is tasteful, and the crowd is discerning. One of the
                  smartest VIP bookings in Mayfair right now.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-1">
                  <Link
                    href="/clubs/luna-club-london"
                    className="hover:text-gold transition-colors"
                  >
                    Luna Club London
                  </Link>
                  <span className="text-gold text-sm ml-2">Friendly Premium</span>
                </h4>
                <p className="text-sm text-gray-300 mb-2">
                  An approachable venue with a quality atmosphere. The most
                  relaxed door in Mayfair without sacrificing the premium
                  feel. Tables offer good value and the crowd is friendly and
                  up for a good time. A strong option for groups new to
                  Mayfair nightlife.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h4 className="text-lg font-bold text-white mb-1">
                  <Link
                    href="/clubs/beat-london"
                    className="hover:text-gold transition-colors"
                  >
                    BEAT London
                  </Link>
                  <span className="text-gold text-sm ml-2">Young & Energetic</span>
                </h4>
                <p className="text-sm text-gray-300 mb-2">
                  A younger, fashion-conscious crowd with plenty of energy.
                  Tables are available at accessible price points and the
                  atmosphere is lively without being overwhelming. Good music,
                  good crowd, and a solid VIP offering for those who want
                  premium without the exclusivity pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Tables Work */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            How Tables Work in Mayfair
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Table booking is the primary VIP mechanism across Mayfair. Here
            is the short version of how it works. For the full breakdown read
            our{" "}
            <Link
              href="/how-mayfair-nightclub-tables-work"
              className="text-gold hover:text-gold-light"
            >
              complete guide to Mayfair nightclub tables
            </Link>
            .
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                Minimum Spend
              </h3>
              <p className="text-sm text-gray-300">
                You commit to spending a set amount on bottles and drinks.
                This is not a fee — it is your bar tab. Anything you order
                counts towards it. Most tables for four to six people start
                around 1,000 to 1,500 pounds.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                Table Positions
              </h3>
              <p className="text-sm text-gray-300">
                Not all tables are equal. Prime positions near the DJ, dance
                floor, or stage cost more. Corner tables and quieter areas
                are cheaper. At Reign the tables closest to the aerial
                performances command the highest premiums.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                What You Get
              </h3>
              <p className="text-sm text-gray-300">
                Reserved seating, a dedicated server, priority entry, and
                bottles with mixers. Some venues include a complimentary
                bottle for special occasions. Your server handles everything
                — you never queue at the bar.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                How to Book
              </h3>
              <p className="text-sm text-gray-300">
                Book through{" "}
                <a
                  href="https://londonbottleservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light"
                >
                  London Bottle Service
                </a>{" "}
                for the best table positions and potential upgrades. Or
                message us on WhatsApp and we will arrange everything
                directly.
              </p>
            </div>
          </div>
        </section>

        {/* VIP vs Guestlist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            VIP Table vs Guestlist — Which Should You Choose?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The right choice depends on your group size, budget, and what
            kind of night you want. Here is an honest comparison.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-gold/30 rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-3">
                Choose a Table If...
              </h3>
              <ul className="space-y-2">
                {[
                  "Your group is four or more people",
                  "You are celebrating a special occasion",
                  "You want guaranteed entry at a top venue",
                  "You prefer having a home base in the club",
                  "You want bottle service without queuing at the bar",
                  "You are visiting Tape, Scotch, or The Box where guestlist is limited",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-white font-semibold mb-3">
                Choose Guestlist If...
              </h3>
              <ul className="space-y-2">
                {[
                  "You are a couple or small group of two to three",
                  "Budget matters and you want to keep costs down",
                  "You prefer being on the dance floor rather than seated",
                  "You are going to an accessible venue like Cuckoo or Funky Buddha",
                  "It is a midweek night when the clubs are less busy",
                  "You want the flexibility to venue-hop during the night",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-gold mt-0.5">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-dark-muted text-sm mt-4">
            More on guestlists:{" "}
            <Link
              href="/mayfair-club-guestlist-guide"
              className="text-gold hover:text-gold-light"
            >
              Complete Mayfair guestlist guide
            </Link>
            . Need it tonight?{" "}
            <a
              href="https://londonclubstonight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light"
            >
              Check tonight&apos;s availability
            </a>
            .
          </p>
        </section>

        {/* Related guides */}
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
                Full guide to table bookings and minimum spends
              </p>
            </Link>
            <Link
              href="/best-clubs-for-tables-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Best Clubs for Tables</p>
              <p className="text-xs text-dark-muted mt-1">
                Ranked by table experience and value
              </p>
            </Link>
            <Link
              href="/best-nightclubs-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Best Nightclubs Ranked</p>
              <p className="text-xs text-dark-muted mt-1">
                Our honest ranking of every Mayfair club
              </p>
            </Link>
            <Link
              href="/mayfair-club-dress-code"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Dress Code Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                What to wear to every Mayfair venue
              </p>
            </Link>
            <Link
              href="/best-celebrity-clubs-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Celebrity Clubs</p>
              <p className="text-xs text-dark-muted mt-1">
                Where the famous faces go in Mayfair
              </p>
            </Link>
            <Link
              href="/where-to-go-out-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Where to Go Out</p>
              <p className="text-xs text-dark-muted mt-1">
                Match your vibe to the perfect venue
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Mayfair VIP Nightlife FAQs
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
            Ready to Book VIP?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp for guestlist access or personalised venue
            recommendations. For VIP table bookings at any Mayfair club,
            visit{" "}
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
                name: "Mayfair VIP Nightlife",
                item: "https://mayfairtonight.com/mayfair-vip-nightlife",
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
