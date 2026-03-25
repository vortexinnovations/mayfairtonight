import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title:
    "Celebrity Clubs in Mayfair — Where the A-List Actually Goes Out",
  description:
    "The most exclusive celebrity clubs in Mayfair, London. Where the A-list goes, how to get in, and what to expect. Honest insider guide for 2026.",
  alternates: {
    canonical: "https://mayfairtonight.com/best-celebrity-clubs-in-mayfair",
  },
  openGraph: {
    title: "Celebrity Clubs in Mayfair — Where the A-List Goes",
    description:
      "Insider guide to Mayfair's most exclusive clubs. Which venues attract the celebrity crowd and how to experience them yourself.",
    url: "https://mayfairtonight.com/best-celebrity-clubs-in-mayfair",
  },
};

interface CelebrityClub {
  rank: number;
  name: string;
  slug: string;
  whyCelebritiesChooseIt: string;
  crowd: string;
  doorExclusivity: string;
  insiderTip: string;
  verdict: string;
}

const celebrityClubs: CelebrityClub[] = [
  {
    rank: 1,
    name: "Tape London",
    slug: "tape-london",
    whyCelebritiesChooseIt:
      "Privacy. The room is small, the door is iron-clad, and the layout means tables feel genuinely secluded. Celebrities come to Tape because they can actually relax. No phones in faces. No random walk-ups. The staff are trained to protect the room, and it shows.",
    crowd:
      "Music artists, athletes, models, and the connected crowd that orbits them. On any given Thursday or Saturday, you are sharing the room with people you have seen on screen or on stage. The crowd is self-selecting — if you are in, you belong.",
    doorExclusivity:
      "The hardest door in Mayfair. Guestlist is extremely limited and curated. Tables are the primary entry route, and even table bookings are vetted. This is not a club that needs to fill the room — it chooses who gets in.",
    insiderTip:
      "Book a table through a trusted promoter with an established relationship with the venue. Walk-ups almost never work. Thursday is slightly more accessible than Saturday. Dress impeccably — the door team makes decisions in seconds.",
    verdict:
      "The most celebrity-dense club in Mayfair by a significant margin. Tape is where the A-list goes when they want to go out but do not want the world to know. The intimate room, the flawless music, and the ironclad privacy make it the top choice for anyone who values exclusivity above everything.",
  },
  {
    rank: 2,
    name: "The Box",
    slug: "the-box-london",
    whyCelebritiesChooseIt:
      "Creative credibility. The Box attracts a different kind of celebrity — the fashion designers, the artists, the actors who want something genuinely provocative. Born in New York, perfected in London. The performances are boundary-pushing, and that attracts people who live outside boundaries.",
    crowd:
      "Fashion industry insiders, creative directors, actors, and the culturally connected. The crowd is not here to be seen — they are here to see something they cannot see anywhere else. It is the most creatively interesting room in Mayfair.",
    doorExclusivity:
      "Curated, not just exclusive. The Box does not just want wealthy people — it wants interesting people. The door team assesses vibe, style, and energy. Groups that look fun and fashion-forward have better odds than groups that just look expensive.",
    insiderTip:
      "Dress creatively, not just expensively. The Box rewards individuality. Book a table for guaranteed entry. Arrive between 11pm and midnight. Do not ask about the performances in advance — discovering them live is the whole point.",
    verdict:
      "The most creatively exclusive club in Mayfair. The Box attracts celebrities who want an experience, not just a night out. The provocative performances, the theatrical atmosphere, and the fashion-forward crowd make this a magnet for the creative A-list.",
  },
  {
    rank: 3,
    name: "Funky Buddha",
    slug: "funky-buddha",
    whyCelebritiesChooseIt:
      "Legacy and loyalty. Funky Buddha has been the music industry's living room for years. Artists, producers, and label executives treat it like a second home. The staff know the regulars by name. The atmosphere is earned through decades of quality nights, and that history attracts people who know the difference.",
    crowd:
      "Music industry professionals, established regulars, and people who have been coming for years. This is not a see-and-be-seen crowd. It is a community that happens to include some very famous faces. The vibe is familiar, not performative.",
    doorExclusivity:
      "Tough but fair. The door respects regulars and people who book through the right channels. Walk-ups can work if you arrive early and dress well. It is not as impenetrable as Tape, but it is not easy either.",
    insiderTip:
      "Become a regular. Funky Buddha rewards loyalty more than any other Mayfair club. Start with a Thursday, book through a promoter, and the relationship builds from there. The staff remember faces.",
    verdict:
      "The music industry's club of choice. Funky Buddha attracts celebrities organically because the music is genuinely brilliant and the atmosphere feels like home. No gimmicks. No performances. Just quality music and a crowd that has taste.",
  },
  {
    rank: 4,
    name: "Cirque Le Soir",
    slug: "cirque-le-soir",
    whyCelebritiesChooseIt:
      "Spectacle. International celebrities and high-net-worth visitors choose Cirque because nothing else exists like it. The live circus performers, the theatrical energy, and the sheer unpredictability create a night that even people who have been everywhere find genuinely surprising.",
    crowd:
      "International jet-setters, visiting celebrities, high-net-worth groups, and people celebrating in style. The crowd is global — on any night you might hear five languages at the tables around you. Cirque attracts the kind of celebrity that travels the world looking for the next great experience.",
    doorExclusivity:
      "Tables are the route in. Saturday is particularly exclusive and often tables-only. Wednesday is slightly more accessible via guestlist. The door is managed but the focus is on maintaining energy rather than pure exclusivity.",
    insiderTip:
      "Book a table on Saturday for the full experience. The performances build through the night, peaking around 1am. Position your table close to the stage if you want the immersive experience. For a lower-cost entry point, try Wednesday guestlist.",
    verdict:
      "The celebrity experience club. Cirque Le Soir attracts international celebrities and high-profile visitors who want their night to be an event. The performances, the energy, and the spectacle make it a bucket-list venue for the global elite.",
  },
  {
    rank: 5,
    name: "Scotch of St James",
    slug: "scotch-of-st-james",
    whyCelebritiesChooseIt:
      "Heritage. Scotch has a history that reads like a music documentary. Hendrix. The Rolling Stones. Decades of London nightlife royalty have walked through this door. Today, it attracts people who appreciate that weight of history — musicians, actors, and tastemakers who want substance over flash.",
    crowd:
      "Sophisticated, cultured, and discerning. The Scotch crowd values elegance and history. It is an older, more established crowd than most Mayfair venues. Think 30s and above, well-travelled, and genuinely interesting.",
    doorExclusivity:
      "Members club atmosphere without the formal membership. The door is selective but warm. If you look like you belong in an intimate, elegant setting, you will get in. Book through a promoter to be safe.",
    insiderTip:
      "Mention nothing about celebrity spotting at the door. Scotch values discretion above all else. Dress elegantly — think dinner party, not nightclub. The intimate setting means every person in the room matters. Arrive before midnight for the best atmosphere.",
    verdict:
      "The heritage choice. Scotch of St James carries a celebrity legacy that no other Mayfair club can match. The current incarnation honours that history with elegant parties, quality music, and a crowd that appreciates where they are standing.",
  },
];

const faqs = [
  {
    question: "Will I actually see celebrities at Mayfair clubs?",
    answer:
      "At the right venue on the right night, yes. Tape London on Thursday and Saturday regularly has recognisable faces. The Box attracts fashion and creative industry celebrities. Funky Buddha has music industry regulars. We never guarantee celebrity sightings — but at these venues, the crowd is genuinely A-list. Do not go expecting to take photos though. Privacy is respected and phones are often discouraged.",
  },
  {
    question: "Is it worth the money to go to a celebrity club?",
    answer:
      "That depends on what you value. If you want the most exclusive atmosphere, the best music curation, and genuinely world-class service, then yes — these clubs deliver experiences you cannot get elsewhere. Table minimums at Tape London start from around £1,500. Cirque Le Soir from £1,000. For guestlist options, clubs like Funky Buddha and Scotch offer a more accessible entry point. Visit londonbottleservice.com for current table prices.",
  },
  {
    question: "Do you need to know someone to get into celebrity clubs?",
    answer:
      "Not necessarily, but connections help enormously. At Tape London, having a promoter relationship is almost essential. At The Box, your look and energy matter as much as who you know. At Funky Buddha and Scotch, booking through the right promoter gets you in the door. Message us on WhatsApp — we can connect you with the right people at every venue.",
  },
  {
    question: "What is the best night for the celebrity crowd in Mayfair?",
    answer:
      "Thursday and Saturday. Thursday is the insider night — the crowd is industry-heavy, the atmosphere is more intimate, and celebrities are more relaxed. Saturday is peak energy with the highest-profile tables booked out. Wednesday at Cirque Le Soir and The Box is the midweek alternative. Friday tends to be more corporate across the board.",
  },
  {
    question: "What should I wear to exclusive Mayfair clubs?",
    answer:
      "Immaculate. These clubs have strict dress codes enforced by experienced door teams. For men: tailored trousers, quality shoes (no trainers at most venues), a sharp shirt or blazer. For women: cocktail attire, heels, polished styling. The key word is effortless. You want to look like you did not try too hard but clearly have taste. Read our full dress code guide for venue-specific advice.",
  },
];

export default function BestCelebrityClubsPage() {
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
          <span className="text-gray-300">Celebrity Clubs</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Celebrity Clubs in Mayfair —{" "}
          <span className="text-gold">Where the A-List Goes</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          This is not a gossip page. This is a guide to which Mayfair clubs
          attract the most exclusive crowds, why they choose those venues, and
          how you can experience the same rooms. These clubs earn their
          reputation through privacy, service, and atmosphere — not by chasing
          headlines.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          Want to see all Mayfair clubs ranked?{" "}
          <Link
            href="/best-nightclubs-in-mayfair"
            className="text-gold hover:text-gold-light"
          >
            Read our full rankings
          </Link>
          . Need{" "}
          <a
            href="https://londonbottleservice.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            VIP table bookings
          </a>
          ? Or see{" "}
          <a
            href="https://londonclubstonight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            what&apos;s happening tonight
          </a>
          .
        </p>

        {/* Rankings */}
        <div className="space-y-8">
          {celebrityClubs.map((club) => (
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
                  <p className="text-gold text-sm">
                    {club.whyCelebritiesChooseIt.split(".")[0]}
                  </p>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Why Celebrities Choose It
                  </p>
                  <p className="text-sm text-gray-300">
                    {club.whyCelebritiesChooseIt}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    The Crowd
                  </p>
                  <p className="text-sm text-gray-300">{club.crowd}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Door Exclusivity
                  </p>
                  <p className="text-sm text-gray-300">
                    {club.doorExclusivity}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                    Insider Tip
                  </p>
                  <p className="text-sm text-gray-300">{club.insiderTip}</p>
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

        {/* What Makes a Club Celebrity-Friendly */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Makes a Club Celebrity-Friendly
          </h2>
          <p className="text-gray-300 mb-6">
            It is not about having a velvet rope. The clubs that attract genuine
            A-list clientele share specific qualities that create an environment
            where high-profile guests feel comfortable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-gray-300">
                Phone policies, discreet table layouts, and staff trained to
                protect the room. At{" "}
                <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">
                  Tape London
                </Link>
                , the intimate room and strict door mean celebrities can
                genuinely let their guard down. Discretion is the foundation.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Table Layout</h3>
              <p className="text-sm text-gray-300">
                VIP areas that feel genuinely private, not just roped-off
                sections. The best celebrity clubs design their rooms so tables
                have sightlines to the dance floor but physical separation from
                it. Check our guide on{" "}
                <Link href="/how-mayfair-nightclub-tables-work" className="text-gold hover:text-gold-light">
                  how Mayfair tables work
                </Link>
                .
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Door Policy</h3>
              <p className="text-sm text-gray-300">
                A curated door that protects the atmosphere. Celebrity-friendly
                clubs do not just let anyone in — the door team builds the room.
                Read our{" "}
                <Link href="/mayfair-club-entry-rules" className="text-gold hover:text-gold-light">
                  entry rules guide
                </Link>{" "}
                for specifics on each venue.
              </p>
            </div>
          </div>
        </section>

        {/* Can You Get In? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Can You Get In? — Honest Access Guide
          </h2>
          <p className="text-gray-300 mb-6">
            Let us be straight. These are the most exclusive clubs in Mayfair.
            But that does not mean they are impossible. Here is the honest
            breakdown of your options at each venue.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="text-left py-3 px-3 text-dark-muted font-medium">Club</th>
                  <th className="text-left py-3 px-3 text-dark-muted font-medium">Guestlist</th>
                  <th className="text-left py-3 px-3 text-dark-muted font-medium">Tables From</th>
                  <th className="text-left py-3 px-3 text-dark-muted font-medium">Difficulty</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 px-3 text-white font-medium">Tape London</td>
                  <td className="py-3 px-3">Very limited</td>
                  <td className="py-3 px-3">~£1,500</td>
                  <td className="py-3 px-3 text-gold">Hardest in Mayfair</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 px-3 text-white font-medium">The Box</td>
                  <td className="py-3 px-3">Curated guestlist</td>
                  <td className="py-3 px-3">~£1,000</td>
                  <td className="py-3 px-3 text-gold">Hard — vibe matters</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 px-3 text-white font-medium">Funky Buddha</td>
                  <td className="py-3 px-3">Via promoter</td>
                  <td className="py-3 px-3">~£1,000</td>
                  <td className="py-3 px-3 text-gold">Moderate</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 px-3 text-white font-medium">Cirque Le Soir</td>
                  <td className="py-3 px-3">Wed guestlist, Sat tables</td>
                  <td className="py-3 px-3">~£1,000</td>
                  <td className="py-3 px-3 text-gold">Moderate–Hard</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-white font-medium">Scotch of St James</td>
                  <td className="py-3 px-3">Via promoter</td>
                  <td className="py-3 px-3">~£800</td>
                  <td className="py-3 px-3 text-gold">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-dark-muted mt-4">
            Need help getting in? Message us on WhatsApp. We have relationships
            with every venue on this list and can advise on the best route for
            your group. For table pricing, visit{" "}
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

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            More Mayfair Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/mayfair-vip-nightlife"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">VIP Nightlife Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                Everything about the VIP experience
              </p>
            </Link>
            <Link
              href="/dress-code"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Dress Code Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                What to wear to Mayfair&apos;s most exclusive clubs
              </p>
            </Link>
            <Link
              href="/where-to-go-out-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Where to Go Out</p>
              <p className="text-xs text-dark-muted mt-1">
                Decision guide for choosing the right venue
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
            Want Access to These Clubs?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp and we&apos;ll connect you with the right
            people at Mayfair&apos;s most exclusive venues. For VIP table
            bookings, visit{" "}
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
                name: "Celebrity Clubs in Mayfair",
                item: "https://mayfairtonight.com/best-celebrity-clubs-in-mayfair",
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
