import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title:
    "Mayfair Nightlife Guide — Everything You Need to Know Before Going Out",
  description:
    "The complete guide to Mayfair nightlife. Clubs, bars, dress codes, guestlists, best nights, costs, and insider tips. Everything you need for a night out in Mayfair, London.",
  alternates: {
    canonical: "https://mayfairtonight.com/mayfair-nightlife-guide",
  },
  openGraph: {
    title: "Mayfair Nightlife Guide — The Complete Insider Guide",
    description:
      "Everything you need to know about nightlife in Mayfair, London. Clubs, dress codes, guestlists, best nights, and insider tips.",
    url: "https://mayfairtonight.com/mayfair-nightlife-guide",
  },
};

const faqs = [
  {
    question: "Is Mayfair nightlife expensive?",
    answer:
      "Guestlist entry is often free. Cocktails run £12–£18 and bottles start from £300. Table minimums start at £1,000 at most venues. You can have a great night on guestlist for £50–£100 per person — you don't need a table to enjoy Mayfair. For table pricing, check londonbottleservice.com.",
  },
  {
    question: "What age group goes to Mayfair clubs?",
    answer:
      "Most Mayfair clubs attract 23–40 year olds. Venues like Maddox, Scotch of St James, and Dear Darling skew older and more sophisticated. Cuckoo Club and BEAT London attract a younger crowd. Tape London is ageless — it's about status and connections, not age.",
  },
  {
    question: "How do I get on the guestlist at Mayfair clubs?",
    answer:
      "Contact a promoter. Message us on WhatsApp and we'll add you to the guestlist at any venue. Most clubs require advance booking — walking up without a reservation rarely works, especially on weekends. Some clubs like Tape London are primarily tables and members only.",
  },
  {
    question: "Is Mayfair nightlife safe?",
    answer:
      "Mayfair is one of the safest areas in London for a night out. The clubs are well-staffed, the streets are busy, and the area is well-lit. Taxis and ride-shares are readily available. Standard big-city precautions apply, but Mayfair is about as safe as nightlife gets.",
  },
  {
    question: "What's the best area to stay for Mayfair nightlife?",
    answer:
      "Mayfair itself, obviously — the Dorchester, Claridge's, and The May Fair Hotel are all within walking distance of every club. Soho is also ideal and slightly more affordable. Marylebone and Fitzrovia work too. Avoid staying in East or South London if Mayfair is your focus — you'll spend too long in taxis.",
  },
  {
    question: "Can I go to a Mayfair club alone?",
    answer:
      "It's possible but not ideal. Most Mayfair clubs favour groups and couples over solo guests, especially solo men. If you're going alone, a table booking or a strong connection with a promoter helps. Dear Darling and Scotch of St James are the most solo-friendly due to their bar atmospheres.",
  },
];

export default function MayfairNightlifeGuidePage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Mayfair Nightlife Guide</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair Nightlife Guide —{" "}
          <span className="text-gold">The Insider&apos;s Handbook</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          Everything you need to know before going out in Mayfair. This is the
          guide we wish someone had given us the first time — where to go, what
          to wear, how to get in, and what to expect. Written by people who go
          out in Mayfair every week.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          Want to know what&apos;s on tonight?{" "}
          <a
            href="https://londonclubstonight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            Check londonclubstonight.com
          </a>
          . Ready to book a VIP table?{" "}
          <a
            href="https://londonbottleservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            London Bottle Service
          </a>{" "}
          handles all Mayfair bookings.
        </p>

        {/* Table of contents */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-5 mb-10">
          <h2 className="text-sm font-semibold text-gold uppercase tracking-wide mb-3">
            In this guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {[
              { id: "scene", label: "The Mayfair Club Scene" },
              { id: "types", label: "Types of Venues" },
              { id: "best-nights", label: "Best Nights to Go Out" },
              { id: "guestlist", label: "Getting on the Guestlist" },
              { id: "dress-code", label: "Dress Code" },
              { id: "cost", label: "How Much Does It Cost" },
              { id: "first-time", label: "First-Timer Tips" },
              { id: "by-vibe", label: "Clubs by Vibe" },
              { id: "area-guide", label: "Area Guide" },
              { id: "faqs", label: "FAQs" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-gold transition-colors"
              >
                → {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Section: The Scene */}
        <section id="scene" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Mayfair Club Scene
          </h2>
          <div className="prose-custom space-y-4 text-gray-300 leading-relaxed">
            <p>
              Mayfair is the epicentre of London&apos;s premium nightlife. Within
              a few streets, you have exclusive members clubs, theatrical
              showclubs, world-class cocktail bars, and some of the best
              hip-hop and house music rooms in the city. It&apos;s concentrated,
              walkable, and consistently delivers.
            </p>
            <p>
              What makes Mayfair different from Shoreditch or Soho is the
              emphasis on experience. Every venue curates its crowd, its music,
              and its atmosphere deliberately. You&apos;re not just going to a
              club — you&apos;re choosing a specific type of night. That&apos;s why
              picking the right venue matters more here than anywhere else in
              London.
            </p>
            <p>
              The scene has evolved significantly. It&apos;s no longer just about
              tables and bottles (though that world still thrives). Venues like{" "}
              <Link href="/clubs/the-box-london" className="text-gold hover:text-gold-light">
                The Box
              </Link>{" "}
              and{" "}
              <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">
                Cirque Le Soir
              </Link>{" "}
              have pushed entertainment boundaries.{" "}
              <Link href="/clubs/selene-london" className="text-gold hover:text-gold-light">
                Selene
              </Link>{" "}
              and{" "}
              <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light">
                Dear Darling
              </Link>{" "}
              have elevated the cocktail bar into a genuine late-night
              destination. The best Mayfair nights are not just about partying —
              they&apos;re about experiencing something memorable.
            </p>
          </div>
        </section>

        {/* Section: Types of Venues */}
        <section id="types" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Types of Mayfair Venues
          </h2>
          <div className="space-y-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">
                Exclusive Members Clubs
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                The inner circle.{" "}
                <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">
                  Tape London
                </Link>{" "}
                and{" "}
                <Link href="/clubs/scotch-of-st-james" className="text-gold hover:text-gold-light">
                  Scotch of St James
                </Link>{" "}
                operate with a members-first approach. Entry is restricted,
                tables are expensive, and the crowd is handpicked. The payoff is
                an atmosphere you simply cannot replicate elsewhere.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">
                Showclubs & Entertainment Venues
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                Nightlife meets theatre.{" "}
                <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">
                  Cirque Le Soir
                </Link>{" "}
                (circus),{" "}
                <Link href="/clubs/reign-london" className="text-gold hover:text-gold-light">
                  Reign London
                </Link>{" "}
                (aerial shows), and{" "}
                <Link href="/clubs/the-box-london" className="text-gold hover:text-gold-light">
                  The Box
                </Link>{" "}
                (provocative theatre) all wrap world-class entertainment around
                a club night. These are the venues that make Mayfair
                nightlife unique.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">
                Party Nightclubs
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                Pure nightlife energy.{" "}
                <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light">
                  Funky Buddha
                </Link>
                ,{" "}
                <Link href="/clubs/cuckoo-club" className="text-gold hover:text-gold-light">
                  Cuckoo Club
                </Link>
                , and{" "}
                <Link href="/clubs/tabu-london" className="text-gold hover:text-gold-light">
                  TABU
                </Link>{" "}
                are traditional nightclubs where the music and crowd are the
                main attraction. No gimmicks, just great nights out.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">
                Dinner-to-Dance & Bar-Clubs
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                Two experiences in one evening.{" "}
                <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">
                  Maddox
                </Link>{" "}
                transitions from Italian restaurant to house music club.{" "}
                <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light">
                  Dear Darling
                </Link>{" "}
                and{" "}
                <Link href="/clubs/selene-london" className="text-gold hover:text-gold-light">
                  Selene
                </Link>{" "}
                evolve from cocktail bars into late-night destinations. The
                grown-up way to do Mayfair.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Best Nights */}
        <section id="best-nights" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Best Nights to Go Out in Mayfair
          </h2>
          <div className="space-y-3">
            {[
              {
                night: "Wednesday",
                slug: "wednesday",
                desc: "Midweek Mayfair kicks off. Funky Buddha, Cuckoo Club, Cirque Le Soir, Maddox, Dear Darling, and The Box all open. Less crowded, more sociable — the savvy choice.",
              },
              {
                night: "Thursday",
                slug: "thursday",
                desc: "The best night in Mayfair. Nearly every club is open and the crowd is genuinely up for it. Thursday has the best energy-to-crowd ratio of the week.",
              },
              {
                night: "Friday",
                slug: "friday",
                desc: "The big one. Every club at full power. Peak London nightlife. Book ahead — everything sells out.",
              },
              {
                night: "Saturday",
                slug: "saturday",
                desc: "Maximum energy. Sold-out rooms, full performer lineups, the best DJ sets. Saturday in Mayfair is legendary — but plan it or miss out.",
              },
            ].map((n) => (
              <Link
                key={n.slug}
                href={`/nights/${n.slug}`}
                className="block bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-semibold">{n.night}</h3>
                    <p className="text-sm text-gray-300 mt-1">{n.desc}</p>
                  </div>
                  <span className="text-gold text-sm shrink-0">→</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-sm text-dark-muted mt-3">
            Monday and Tuesday are quiet in Mayfair. Sunday is limited to
            occasional events.{" "}
            <Link href="/nights/sunday" className="text-gold hover:text-gold-light">
              See Sunday options →
            </Link>
          </p>
        </section>

        {/* Section: Guestlist */}
        <section id="guestlist" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Getting on the Mayfair Club Guestlist
          </h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              The golden rule: never walk up to a Mayfair club door without a
              booking. It almost never works, and you&apos;ll spend your night
              getting turned away instead of dancing.
            </p>
            <p>
              The guestlist system works through promoters. Message us on
              WhatsApp with your name, group size, and preferred club — we&apos;ll
              add you to the list. Arrive before midnight, dress smart, and
              you&apos;re in. It&apos;s that straightforward.
            </p>

            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-3">
                Guestlist difficulty by venue
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Easiest</span>
                  <span className="text-white">
                    <Link href="/clubs/cuckoo-club" className="hover:text-gold">Cuckoo Club</Link>,{" "}
                    <Link href="/clubs/selene-london" className="hover:text-gold">Selene</Link>,{" "}
                    <Link href="/clubs/dear-darling" className="hover:text-gold">Dear Darling</Link>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Moderate</span>
                  <span className="text-white">
                    <Link href="/clubs/funky-buddha" className="hover:text-gold">Funky Buddha</Link>,{" "}
                    <Link href="/clubs/maddox" className="hover:text-gold">Maddox</Link>,{" "}
                    <Link href="/clubs/cirque-le-soir" className="hover:text-gold">Cirque</Link>,{" "}
                    <Link href="/clubs/reign-london" className="hover:text-gold">Reign</Link>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Hardest</span>
                  <span className="text-white">
                    <Link href="/clubs/tape-london" className="hover:text-gold">Tape London</Link>,{" "}
                    <Link href="/clubs/scotch-of-st-james" className="hover:text-gold">Scotch</Link>,{" "}
                    <Link href="/clubs/the-box-london" className="hover:text-gold">The Box</Link>,{" "}
                    <Link href="/clubs/tabu-london" className="hover:text-gold">TABU</Link>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-dark-muted">
              For table bookings and VIP service, visit{" "}
              <a
                href="https://londonbottleservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light"
              >
                londonbottleservice.com
              </a>
              . Tables guarantee entry and usually include queue-skip.
            </p>
          </div>
        </section>

        {/* Section: Dress Code */}
        <section id="dress-code" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Mayfair Dress Code
          </h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Every Mayfair club enforces a dress code. The standard is{" "}
              <strong className="text-white">smart</strong> — but what that
              means varies by venue. The universal truth: you will never get
              turned away for overdressing. When in doubt, go sharper.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-gold font-semibold mb-2">Men</h3>
                <ul className="text-sm space-y-1">
                  <li className="text-green-400">✓ Smart shoes (leather or designer)</li>
                  <li className="text-green-400">✓ Well-fitted trousers or smart jeans</li>
                  <li className="text-green-400">✓ Collared shirt or quality knitwear</li>
                  <li className="text-green-400">✓ Blazer (always helps)</li>
                  <li className="text-red-400">✗ Trainers (even designer, risky)</li>
                  <li className="text-red-400">✗ Sportswear, shorts, flip-flops</li>
                  <li className="text-red-400">✗ Football shirts, hoodies</li>
                </ul>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-gold font-semibold mb-2">Women</h3>
                <ul className="text-sm space-y-1">
                  <li className="text-green-400">✓ Cocktail dress or smart separates</li>
                  <li className="text-green-400">✓ Heels or smart boots</li>
                  <li className="text-green-400">✓ Smart jumpsuits</li>
                  <li className="text-green-400">✓ Fashion-forward looks welcome</li>
                  <li className="text-red-400">✗ Very casual dresses or beachwear</li>
                  <li className="text-red-400">✗ Flat trainers or sandals</li>
                  <li className="text-red-400">✗ Sportswear or festival wear</li>
                </ul>
              </div>
            </div>

            <p className="text-sm">
              Read the{" "}
              <Link href="/dress-code" className="text-gold hover:text-gold-light">
                full Mayfair dress code guide
              </Link>{" "}
              for club-specific advice.
            </p>
          </div>
        </section>

        {/* Section: Cost */}
        <section id="cost" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            How Much Does a Night Out in Mayfair Cost?
          </h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-gray-300">Guestlist entry</span>
                <span className="text-white font-medium">Free — £20</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-gray-300">Cocktails</span>
                <span className="text-white font-medium">£12 — £18</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-gray-300">Bottle of vodka/gin</span>
                <span className="text-white font-medium">£300 — £500</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-gray-300">Premium champagne</span>
                <span className="text-white font-medium">£400 — £1,500+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-gray-300">Table minimum spend</span>
                <span className="text-white font-medium">£1,000 — £1,500</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300">Realistic night (guestlist, 4–5 drinks)</span>
                <span className="text-white font-medium">£60 — £100 per person</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-dark-muted mt-3">
            For detailed table pricing and VIP packages, visit{" "}
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
        </section>

        {/* Section: First-Timer Tips */}
        <section id="first-time" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            First Time in Mayfair? Start Here
          </h2>
          <div className="space-y-3 text-gray-300 leading-relaxed">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">1. Book through a promoter</h3>
              <p className="text-sm">
                Don&apos;t walk up. Message us on WhatsApp, tell us what
                you&apos;re looking for, and we&apos;ll handle the rest. Guestlist is
                usually free.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">2. Go on a Thursday</h3>
              <p className="text-sm">
                Thursday has the best atmosphere-to-difficulty ratio. Every
                major club is open, the crowd is quality, and it&apos;s slightly
                easier to get in than Friday or Saturday.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">3. Overdress</h3>
              <p className="text-sm">
                Nobody gets turned away for looking too smart. Arrive sharp and
                you&apos;ve eliminated the biggest reason people get rejected at
                the door.{" "}
                <Link href="/dress-code" className="text-gold hover:text-gold-light">
                  Full dress code guide →
                </Link>
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">4. Start at the right venue</h3>
              <p className="text-sm">
                <Link href="/clubs/cuckoo-club" className="text-gold hover:text-gold-light">
                  Cuckoo Club
                </Link>{" "}
                is the best first Mayfair experience — accessible door, two
                floors, great atmosphere.{" "}
                <Link href="/clubs/reign-london" className="text-gold hover:text-gold-light">
                  Reign London
                </Link>{" "}
                if you want a night that feels like an event.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">5. Arrive between 11pm and midnight</h3>
              <p className="text-sm">
                Too early and the venue is empty. Too late and you risk capacity
                or a long queue. The sweet spot is 11–11:30pm.
              </p>
            </div>
          </div>
        </section>

        {/* Section: By Vibe */}
        <section id="by-vibe" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Mayfair Clubs by Vibe
          </h2>
          <p className="text-gray-300 mb-4">
            Not sure where to go? Pick your vibe. See our full{" "}
            <Link
              href="/where-to-go-tonight"
              className="text-gold hover:text-gold-light"
            >
              Where Should I Go Tonight
            </Link>{" "}
            decision guide for more detailed recommendations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                Hip-Hop & RnB Night
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/tape-london" className="text-white hover:text-gold">Tape</Link> →{" "}
                <Link href="/clubs/funky-buddha" className="text-white hover:text-gold">Funky Buddha</Link> →{" "}
                <Link href="/clubs/tabu-london" className="text-white hover:text-gold">TABU</Link>
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                House Music Night
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/maddox" className="text-white hover:text-gold">Maddox</Link> →{" "}
                <Link href="/clubs/selene-london" className="text-white hover:text-gold">Selene</Link> →{" "}
                <Link href="/clubs/cuckoo-club" className="text-white hover:text-gold">Cuckoo (downstairs)</Link>
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                Show & Entertainment
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/cirque-le-soir" className="text-white hover:text-gold">Cirque Le Soir</Link> →{" "}
                <Link href="/clubs/reign-london" className="text-white hover:text-gold">Reign</Link> →{" "}
                <Link href="/clubs/the-box-london" className="text-white hover:text-gold">The Box</Link>
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                Sophisticated & Elegant
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/dear-darling" className="text-white hover:text-gold">Dear Darling</Link> →{" "}
                <Link href="/clubs/scotch-of-st-james" className="text-white hover:text-gold">Scotch</Link> →{" "}
                <Link href="/clubs/selene-london" className="text-white hover:text-gold">Selene</Link>
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                Dinner Then Dancing
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/maddox" className="text-white hover:text-gold">Maddox</Link> →{" "}
                <Link href="/clubs/selene-london" className="text-white hover:text-gold">Selene</Link> →{" "}
                <Link href="/clubs/dear-darling" className="text-white hover:text-gold">Dear Darling</Link>
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">
                Maximum Party Energy
              </h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/funky-buddha" className="text-white hover:text-gold">Funky Buddha</Link> →{" "}
                <Link href="/clubs/cuckoo-club" className="text-white hover:text-gold">Cuckoo Club</Link> →{" "}
                <Link href="/clubs/cirque-le-soir" className="text-white hover:text-gold">Cirque Le Soir</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Section: Area Guide */}
        <section id="area-guide" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Area Guide — Where the Clubs Are
          </h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>
              Most Mayfair clubs are concentrated within a 10-minute walk of
              each other. The main nightlife areas:
            </p>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">
                Central Mayfair (Berkeley St / Dover St)
              </h3>
              <p className="text-sm">
                <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light">Funky Buddha</Link>,{" "}
                <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">Tape London</Link>,{" "}
                <Link href="/clubs/tabu-london" className="text-gold hover:text-gold-light">TABU</Link>,{" "}
                <Link href="/clubs/scotch-of-st-james" className="text-gold hover:text-gold-light">Scotch of St James</Link>,{" "}
                <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light">Dear Darling</Link>,{" "}
                <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">Maddox</Link>,{" "}
                <Link href="/clubs/selene-london" className="text-gold hover:text-gold-light">Selene</Link>.
                This is the heart of Mayfair nightlife — you can walk between
                all of these.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">
                Piccadilly / Swallow Street
              </h3>
              <p className="text-sm">
                <Link href="/clubs/reign-london" className="text-gold hover:text-gold-light">Reign London</Link>,{" "}
                <Link href="/clubs/cuckoo-club" className="text-gold hover:text-gold-light">Cuckoo Club</Link>.
                Just off Piccadilly Circus — easy to reach from anywhere in
                central London.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">
                Soho (Ganton Street area)
              </h3>
              <p className="text-sm">
                <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">Cirque Le Soir</Link>,{" "}
                <Link href="/clubs/the-box-london" className="text-gold hover:text-gold-light">The Box</Link>.
                Technically Soho but firmly part of the Mayfair nightlife
                circuit. A short walk from the Mayfair clubs.
              </p>
            </div>
          </div>
          <p className="text-sm text-dark-muted mt-3">
            Nearest tubes: Green Park, Bond Street, Piccadilly Circus, Oxford
            Circus. All within a 5–10 minute walk.
          </p>
        </section>

        {/* Section: FAQ */}
        <section id="faqs" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-white mb-4">
            Mayfair Nightlife FAQs
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

        {/* Related content */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Continue Exploring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mayfair-nightclubs"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">All Mayfair Nightclubs</p>
              <p className="text-xs text-dark-muted mt-1">
                Complete club-by-club directory
              </p>
            </Link>
            <Link
              href="/best-nightclubs-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Best Clubs — Ranked</p>
              <p className="text-xs text-dark-muted mt-1">
                Our opinionated rankings for 2026
              </p>
            </Link>
            <Link
              href="/clubs"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">All Clubs</p>
              <p className="text-xs text-dark-muted mt-1">
                Every venue we cover
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Let Us Plan Your Night
          </h2>
          <p className="text-dark-muted mb-4">
            Tell us what you&apos;re looking for and we&apos;ll recommend the perfect
            club, handle the guestlist, and sort your night. Or book a VIP
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
                name: "Mayfair Nightlife Guide",
                item: "https://mayfairtonight.com/mayfair-nightlife-guide",
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
