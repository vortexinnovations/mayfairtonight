import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title:
    "Girls' Night Mayfair — Best Clubs & Guestlist Guide for 2026",
  description:
    "The best Mayfair clubs for girls' nights out. Guestlist tips, dress code advice, and venue picks for all-female groups. Free entry options and birthday planning.",
  alternates: {
    canonical: "https://mayfairtonight.com/girls-guestlist-clubs-mayfair",
  },
  openGraph: {
    title: "Girls' Night Mayfair — Best Clubs & Guestlist Guide",
    description:
      "Insider guide to the best Mayfair clubs for girls' nights. Guestlist access, dress code tips, and the safest, most fun venues for all-female groups.",
    url: "https://mayfairtonight.com/girls-guestlist-clubs-mayfair",
  },
};

interface GirlsClub {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  whyItWorks: string;
  guestlist: string;
  dressTips: string;
  bestNight: string;
  vibe: string;
}

const girlsClubs: GirlsClub[] = [
  {
    rank: 1,
    name: "Cuckoo Club",
    slug: "cuckoo-club",
    tagline: "Sociable & Two Floors",
    whyItWorks:
      "Cuckoo Club is the go-to for girls' nights in Mayfair. Two floors mean you can start with house music downstairs and move to hip-hop upstairs when the mood hits. The crowd is young, sociable, and genuinely friendly. The door is one of the most accessible in Mayfair — all-female groups rarely have issues. It's fun without pretension, which is exactly what a great girls' night needs.",
    guestlist:
      "One of the easiest guestlists in Mayfair. All-female groups are welcomed. Book through a promoter, give your names, and arrive before midnight.",
    dressTips:
      "Smart glamour works perfectly. Cocktail dresses, heels, and statement accessories. Cuckoo isn't as strict as Tape or Maddox — you have room to express your style, but keep it elevated.",
    bestNight:
      "Thursday is the standout. The crowd is buzzing, both floors are packed, and the energy is perfect for a group night. Saturday for peak atmosphere.",
    vibe:
      "Fun, inclusive, and energetic. The staff are welcoming and the crowd makes friends easily. One of the safest and most comfortable venues for all-female groups.",
  },
  {
    rank: 2,
    name: "Cirque Le Soir",
    slug: "cirque-le-soir",
    tagline: "The Event Night",
    whyItWorks:
      "Cirque turns a girls' night into an event. Fire-breathers at your table, contortionists on the dance floor, stilt-walkers through the crowd — it's a show that gives you something to scream about together. The energy is infectious and the performers create moments that become the stories you tell for years. Every birthday group should experience this at least once.",
    guestlist:
      "Guestlist works well for female groups. Book through a promoter and arrive on time. Larger groups (8+) should book a table for the best experience — birthday packages are exceptional.",
    dressTips:
      "Go all out. Cirque is theatrical and your outfit should match. Sequins, bold colours, statement pieces — this is the night to dress up. Think glamorous, not understated.",
    bestNight:
      "Saturday is the flagship night with the full entertainment programme. Wednesday and Friday are excellent too with slightly easier access.",
    vibe:
      "High-energy, celebratory, and utterly unique. The performers create a safe, joyful atmosphere. Security is tight and professional. Groups are well looked after.",
  },
  {
    rank: 3,
    name: "Dear Darling",
    slug: "dear-darling",
    tagline: "Cocktails First, Dancing Later",
    whyItWorks:
      "Dear Darling is perfect for the group that wants proper cocktails before the night kicks off. The cocktail programme is world-class — not just vodka-cranberries. The intimate space means your group stays together, the atmosphere transitions beautifully from sophisticated drinks to late-night energy, and it never feels overwhelming. It's the refined girls' night.",
    guestlist:
      "Book ahead through a promoter. The intimate size means capacity fills quickly. All-female groups are well received.",
    dressTips:
      "Elegant and sophisticated. Think little black dress territory — classic, polished, put-together. Dear Darling rewards understated glamour over bold statement pieces.",
    bestNight:
      "Thursday and Friday are ideal. The cocktail-to-party transition is perfectly paced. Saturday is busier and the bar books out faster.",
    vibe:
      "Intimate, elegant, and genuinely welcoming. The bartenders engage with guests, the space feels personal, and the crowd is well-mannered. Excellent for smaller groups of 4-6.",
  },
  {
    rank: 4,
    name: "Selene London",
    slug: "selene-london",
    tagline: "Refined & Elegant",
    whyItWorks:
      "Selene is the smart choice for groups who want premium without the difficulty of getting into the older established names. The house music is tasteful, the cocktails rival dedicated bars, and the crowd is sophisticated. It's still building its reputation, which means your group gets treated exceptionally well. The staff go out of their way to make your night special.",
    guestlist:
      "Straightforward guestlist process. Book through a promoter, arrive before midnight. One of the easier premium venues to access for all-female groups.",
    dressTips:
      "Elegant and refined. Selene attracts a discerning crowd — think polished cocktail attire. Heels, a beautiful dress, minimal but quality accessories.",
    bestNight:
      "Friday is the sweet spot. The crowd is engaged, the music is on point, and the atmosphere builds beautifully through the night.",
    vibe:
      "Sophisticated, calm confidence. No chaos, no pushiness, just a well-curated room with excellent music. The newer venue energy means attentive service and a crowd that's there because they want to be.",
  },
  {
    rank: 5,
    name: "Reign London",
    slug: "reign-london",
    tagline: "The Show Makes It Special",
    whyItWorks:
      "Reign turns a girls' night into a spectacle. Aerial acrobats, live singers, and production values that feel like Las Vegas. It gives the whole group something to watch, react to, and photograph together. The multi-level venue means you can find your spot — close to the action or overlooking from above. It's the night out that feels like an event without any extra effort.",
    guestlist:
      "Guestlist available through promoters. Female groups are welcomed — book ahead for Saturday nights. Table bookings recommended for birthdays to get the best views.",
    dressTips:
      "Glamorous. Reign is a showclub and the audience dresses accordingly. Evening dresses, heels, statement jewellery. Think opening night at the theatre, not casual Friday.",
    bestNight:
      "Saturday is the main event with the full show programme. Thursday is excellent with a slightly more relaxed atmosphere.",
    vibe:
      "Grand, exciting, and celebratory. The shows create natural conversation and energy. Security is visible and professional. Large groups are well managed.",
  },
  {
    rank: 6,
    name: "Funky Buddha",
    slug: "funky-buddha",
    tagline: "Energy & Atmosphere",
    whyItWorks:
      "Funky Buddha has an atmosphere that makes every night feel like the best night ever. The music swings between hip-hop bangers and funky house, the dance floor is always packed, and the crowd has genuine energy. It's the Mayfair club where you'll dance all night and mean it. The regulars create a warm, community feel that's rare in this postcode.",
    guestlist:
      "Guestlist through promoters works well. All-female groups have strong access. Arrive before midnight on weekends.",
    dressTips:
      "Smart and stylish with room for personality. Funky Buddha appreciates individual style — statement pieces, bold choices, fashion-forward looks. Keep it smart but let your personality show.",
    bestNight:
      "Wednesday and Thursday are brilliant for girls' nights — the crowd is passionate about being there. Saturday is peak energy.",
    vibe:
      "Warm, energetic, and authentically fun. The crowd knows each other, the staff remember faces, and the atmosphere is welcoming. A Mayfair institution for good reason.",
  },
];

const faqs = [
  {
    question: "Is it free for girls to get into Mayfair clubs?",
    answer:
      "Many Mayfair clubs offer free guestlist entry for women, particularly on midweek nights (Wednesday and Thursday). Weekend guestlist may have a small cover charge of £10-£20. The key is booking through a promoter — walk-ups without a guestlist or table booking will pay full door prices or may not get in. Free entry is never guaranteed, but all-female groups on a promoter's guestlist have the best chances.",
  },
  {
    question: "Can an all-female group get into Mayfair clubs?",
    answer:
      "Yes — all-female groups are generally welcomed at Mayfair clubs. You'll have the easiest access at Cuckoo Club, Selene, and Dear Darling. The key factors are: book through a promoter, dress smart, arrive before midnight, and keep your group to a manageable size (4-8 is ideal). Very large all-female groups (10+) should consider a table booking for guaranteed entry and a better experience.",
  },
  {
    question: "Which Mayfair clubs are safest for girls' nights?",
    answer:
      "All the top Mayfair clubs have professional security and well-managed environments. Cuckoo Club, Dear Darling, and Selene stand out for their welcoming, well-behaved crowds and attentive staff. Cirque Le Soir and Reign have highly visible security teams and the entertainment focus creates a positive, celebratory atmosphere. If a venue is on our recommended list, we're confident in the safety standards.",
  },
  {
    question: "What's the best night for a girls' night in Mayfair?",
    answer:
      "Thursday is the sweet spot. Every major club is open, the atmosphere is buzzing, guestlist access is easier, and the crowd is genuinely up for a good time. Saturday is peak energy but busier and harder to access. Wednesday is the underrated option — smaller crowds, easier doors, and the people who come out midweek really want to be there.",
  },
  {
    question: "How do girls get free entry to Mayfair clubs?",
    answer:
      "Contact a promoter or book through a guestlist service. Give your full names, group size, and the night you want. The promoter adds you to the venue's guestlist. Arrive before midnight (earlier is better), dress to the venue's standard, and check in at the door with your name. Most midweek guestlists are free. Weekend nights may have a reduced cover. Read our full guestlist guide for the step-by-step process.",
  },
];

export default function GirlsGuestlistPage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Girls&apos; Night Mayfair</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Girls&apos; Night Mayfair —{" "}
          <span className="text-gold">Best Clubs & Guestlist Guide</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          Planning a girls&apos; night in Mayfair? Some clubs are built for
          it. Others make all-female groups an afterthought. This is the
          honest guide to the venues that actually deliver — with guestlist
          tips, dress code advice, and everything you need to plan the night.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          Need the full venue rundown?{" "}
          <Link
            href="/mayfair-nightclubs"
            className="text-gold hover:text-gold-light"
          >
            Browse all Mayfair nightclubs
          </Link>
          . Want to know what to wear?{" "}
          <Link
            href="/mayfair-club-dress-code"
            className="text-gold hover:text-gold-light"
          >
            Read the dress code guide
          </Link>
          . Checking{" "}
          <a
            href="https://londonclubstonight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            what&apos;s on tonight
          </a>
          ?
        </p>

        {/* Rankings */}
        <div className="space-y-8">
          {girlsClubs.map((club) => (
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
                {club.whyItWorks}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Guestlist
                  </p>
                  <p className="text-sm text-gray-300">{club.guestlist}</p>
                </div>
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    What to Wear
                  </p>
                  <p className="text-sm text-gray-300">{club.dressTips}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Best Night
                  </p>
                  <p className="text-sm text-white">{club.bestNight}</p>
                </div>
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Atmosphere & Safety
                  </p>
                  <p className="text-sm text-gray-300">{club.vibe}</p>
                </div>
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

        {/* How the Guestlist Works */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            How the Girls&apos; Guestlist Works
          </h2>
          <div className="space-y-4">
            <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
              <h3 className="text-white font-medium mb-1">1. Contact a Promoter</h3>
              <p className="text-gray-300 text-sm">
                Message us on WhatsApp or reach out through a guestlist service. Give your full names (first and surname for everyone), group size, and the night you want. Promoters manage the guestlist for specific venues — they&apos;re your way in.
              </p>
            </div>
            <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
              <h3 className="text-white font-medium mb-1">2. Group Size Matters</h3>
              <p className="text-gray-300 text-sm">
                The ideal girls&apos; guestlist group is 4-8 people. Smaller groups (2-3) work fine but may be asked to join a shared table or wait briefly. Very large groups (10+) should book a table — it guarantees entry and gives you a proper base for the night.
              </p>
            </div>
            <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
              <h3 className="text-white font-medium mb-1">3. Arrive on Time</h3>
              <p className="text-gray-300 text-sm">
                Before midnight is the rule. Before 11pm is the smart play. The earlier you arrive, the smoother the entry. Late arrivals risk the guestlist closing when the venue hits capacity. This is the single biggest factor in whether guestlist works.
              </p>
            </div>
            <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
              <h3 className="text-white font-medium mb-1">4. Ratio Policies</h3>
              <p className="text-gray-300 text-sm">
                Good news: all-female groups have the easiest time at Mayfair doors. There are no ratio requirements working against you. Mixed groups sometimes face stricter scrutiny on male-to-female ratio, but a group of women on a promoter&apos;s guestlist is the strongest position you can be in.
              </p>
            </div>
          </div>
          <p className="text-dark-muted text-sm mt-4">
            Full details in our{" "}
            <Link
              href="/mayfair-club-guestlist-guide"
              className="text-gold hover:text-gold-light"
            >
              complete guestlist guide
            </Link>{" "}
            and{" "}
            <Link
              href="/mayfair-club-entry-rules"
              className="text-gold hover:text-gold-light"
            >
              entry rules breakdown
            </Link>
            .
          </p>
        </section>

        {/* What to Wear */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            What to Wear — Girls&apos; Night Edition
          </h2>
          <p className="text-gray-300 mb-4">
            Every Mayfair club enforces a dress code, but the interpretation varies. Here&apos;s the venue-by-venue breakdown for women.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-lg font-medium text-green-400 mb-3">
                The Safe Bet
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Cocktail dress or evening dress with heels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Smart jumpsuit with statement accessories
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Tailored separates — blazer, skirt, heels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Quality fabrics and polished finishing
                </li>
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-lg font-medium text-red-400 mb-3">
                What Gets You Turned Away
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Flat shoes with casual jeans
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Any sportswear or athleisure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Beachwear or festival outfits
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  Anything you&apos;d wear to brunch
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-lg p-4 space-y-2">
            <p className="text-sm text-gray-300">
              <span className="text-gold font-medium">Cirque Le Soir:</span> Go bold. Sequins, colour, theatrical glamour. This is the venue that rewards dressing up.
            </p>
            <p className="text-sm text-gray-300">
              <span className="text-gold font-medium">Dear Darling & Selene:</span> Classic elegance. Little black dress territory. Understated polish over statement pieces.
            </p>
            <p className="text-sm text-gray-300">
              <span className="text-gold font-medium">Cuckoo Club & Funky Buddha:</span> Smart glamour with room for personality. Express your style, keep it elevated.
            </p>
            <p className="text-sm text-gray-300">
              <span className="text-gold font-medium">Reign London:</span> Full glamour. Evening dresses and heels. The showclub atmosphere demands it.
            </p>
          </div>
          <p className="text-dark-muted text-sm mt-4">
            Full breakdown in our{" "}
            <Link
              href="/mayfair-club-dress-code"
              className="text-gold hover:text-gold-light"
            >
              Mayfair dress code guide
            </Link>
            .
          </p>
        </section>

        {/* Planning Your Night */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Planning Your Night — The Timeline
          </h2>
          <div className="space-y-3">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <p className="text-gold font-medium text-sm">7:00 - 9:00 PM</p>
              <h3 className="text-white font-medium">Pre-Drinks</h3>
              <p className="text-sm text-gray-300 mt-1">
                Start at a Mayfair bar or restaurant. The bars along Bruton Street and around Shepherd Market are ideal for pre-drinks before heading to the clubs. Keep it civilised — arriving noticeably drunk is the fastest way to get turned away.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <p className="text-gold font-medium text-sm">10:00 - 11:00 PM</p>
              <h3 className="text-white font-medium">Arrival</h3>
              <p className="text-sm text-gray-300 mt-1">
                Arrive at the club between 10:30 and 11:00 PM. This is the sweet spot — guestlist is open, the queue is manageable, and you get settled before the room fills up. Have your names ready and check in confidently.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <p className="text-gold font-medium text-sm">11:30 PM - 1:00 AM</p>
              <h3 className="text-white font-medium">Peak Hours</h3>
              <p className="text-sm text-gray-300 mt-1">
                The main room fills, the music peaks, and the energy is at its highest. This is the golden window. The dance floor is packed, the atmosphere is electric, and the DJs play their best sets.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <p className="text-gold font-medium text-sm">2:00 - 3:00 AM</p>
              <h3 className="text-white font-medium">Home Time</h3>
              <p className="text-sm text-gray-300 mt-1">
                Most Mayfair clubs close between 2:00 and 3:00 AM. Pre-book an Uber or Bolt — surge pricing hits hard outside Mayfair clubs. The smarter play is booking your ride at 1:30 AM for a 2:00 AM pickup. Alternatively, the night bus or a short walk to Green Park station covers you.
              </p>
            </div>
          </div>
        </section>

        {/* Birthday Girls' Night */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Birthday Girls&apos; Night — Where to Celebrate
          </h2>
          <p className="text-gray-300 mb-4">
            A birthday changes the calculation. You want guaranteed entry, special treatment, and a night that feels like an event. Here are the top picks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-gold/30 rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-2">Best Overall: Cirque Le Soir</h3>
              <p className="text-sm text-gray-300">
                Birthday packages with bespoke performances. The performers come to your table, the energy is celebratory, and it turns any birthday into an unforgettable event. Book a table — the experience is completely different.
              </p>
            </div>
            <div className="bg-dark-card border border-gold/30 rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-2">Most Spectacular: Reign London</h3>
              <p className="text-sm text-gray-300">
                Aerial acrobats and live shows make the birthday girl feel like a VIP. Stage-side tables offer the best views. The production value alone makes this a memorable celebration.
              </p>
            </div>
            <div className="bg-dark-card border border-gold/30 rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-2">Most Fun: Cuckoo Club</h3>
              <p className="text-sm text-gray-300">
                Two floors, great music, sociable crowd. Cuckoo&apos;s energy is perfect for birthdays — the staff make a fuss, the atmosphere is fun, and the accessible door means your whole group gets in.
              </p>
            </div>
            <div className="bg-dark-card border border-gold/30 rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-2">Most Elegant: Dear Darling</h3>
              <p className="text-sm text-gray-300">
                For the birthday girl who prefers cocktails to chaos. Bespoke cocktail packages, intimate atmosphere, and a level of personal service that makes the night feel truly special.
              </p>
            </div>
          </div>
          <p className="text-dark-muted text-sm mt-4">
            For birthday table bookings and packages, visit{" "}
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light"
            >
              londonbottleservice.com
            </a>{" "}
            or read our{" "}
            <Link
              href="/best-clubs-for-groups-in-mayfair"
              className="text-gold hover:text-gold-light"
            >
              groups guide
            </Link>
            .
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
              href="/mayfair-club-dress-code"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Dress Code Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                What to wear to every Mayfair club
              </p>
            </Link>
            <Link
              href="/mayfair-club-guestlist-guide"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Guestlist Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                How to get on the list at any venue
              </p>
            </Link>
            <Link
              href="/best-nightclubs-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Best Nightclubs in Mayfair</p>
              <p className="text-xs text-dark-muted mt-1">
                Our ranked picks for the top venues
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Planning a Girls&apos; Night?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp and we&apos;ll sort your guestlist, recommend
            the right venue, and make sure your whole group gets in. Birthday?
            We&apos;ll make it special.
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
                name: "Girls' Night Mayfair",
                item: "https://mayfairtonight.com/girls-guestlist-clubs-mayfair",
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
