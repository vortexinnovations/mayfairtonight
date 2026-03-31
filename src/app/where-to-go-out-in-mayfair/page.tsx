import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroImage from "@/components/HeroImage";
import { heroImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Where to Go Out in Mayfair — Your Night, Sorted",
  description:
    "Not sure where to go out in Mayfair tonight? Our insider decision guide matches your vibe to the perfect club. Hip-hop, house, shows, cocktails, groups — we cover it all.",
  alternates: {
    canonical: "https://mayfairtonight.com/where-to-go-out-in-mayfair",
  },
  openGraph: {
    title: "Where to Go Out in Mayfair — Your Night, Sorted",
    description:
      "The insider decision guide to going out in Mayfair. Tell us what you want, we tell you where to go.",
    url: "https://mayfairtonight.com/where-to-go-out-in-mayfair",
  },
};

const faqs = [
  {
    question: "Is Mayfair safe for a night out?",
    answer:
      "Mayfair is one of the safest areas in London for nightlife. The streets are well-lit, there is a visible security presence outside every venue, and the area is busy with people throughout the night. Taxis and Ubers are always available on the surrounding main roads. Stick to the main streets and you will have zero issues.",
  },
  {
    question: "How do I get home from Mayfair after a night out?",
    answer:
      "Uber and Bolt work well from Mayfair — surge pricing kicks in around 2:30am so order early or wait until 3:30am when it drops. Black cabs are plentiful on Berkeley Street and Park Lane. Green Park and Bond Street tube stations are nearby but close before most clubs let out. Night buses run along Oxford Street and Piccadilly.",
  },
  {
    question: "What time should I arrive at a Mayfair club?",
    answer:
      "Arrive between 11pm and midnight. Before 11pm the room is empty and the energy is flat. After midnight the queues build and guestlist entry becomes harder. The sweet spot is 11:30pm — you walk in smoothly and the night is just getting started.",
  },
  {
    question: "How much does a night out in Mayfair cost?",
    answer:
      "On guestlist entry is free or up to 20 pounds cover. Cocktails run 14 to 18 pounds each. A realistic budget for a guestlist night is 60 to 120 pounds per person including drinks. Table bookings start from 1,000 pounds minimum spend. For table pricing check londonbottleservice.com.",
  },
  {
    question: "Can I go out in Mayfair on my own?",
    answer:
      "Solo nights in Mayfair are trickier than group nights. Most doors prefer groups or mixed groups. Your best options solo are Cuckoo Club which has the most sociable crowd, Dear Darling which works as a bar early on, or Maddox where you can start with dinner. Getting on a promoter guestlist helps — message us on WhatsApp.",
  },
  {
    question: "What is the age range at Mayfair clubs?",
    answer:
      "Most Mayfair clubs attract a 23 to 35 crowd, though it varies by venue. TABU and BEAT skew younger with a fashion-forward early-twenties crowd. Scotch of St James, Maddox, and Dear Darling draw a more mature 28 to 40 crowd. All venues are strictly 18 plus but most prefer 21 plus on weekends.",
  },
];

export default function WhereToGoOutPage() {
  return (
    <>
      <HeroImage src={heroImages.whereToGoOut} alt="Where to go out in Mayfair">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Where to Go Out in Mayfair</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Where to Go Out in Mayfair —{" "}
          <span className="text-gold">Your Night, Sorted</span>
        </h1>
        <p className="text-gray-300 text-lg mb-0 max-w-3xl">
          Thirteen clubs. One square mile. Too many options. This guide cuts
          through the noise — honest insider recommendations from people who
          are out in Mayfair every week.
        </p>
      </HeroImage>

      <article className="max-w-4xl mx-auto px-4 pt-8">
        <p className="text-dark-muted text-sm mb-8">
          Already know what you want and need it tonight?{" "}
          <a
            href="https://londonclubstonight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light"
          >
            Check londonclubstonight.com
          </a>{" "}
          for live availability. Want the full breakdown of every venue?{" "}
          <Link
            href="/mayfair-nightclubs"
            className="text-gold hover:text-gold-light"
          >
            See our complete Mayfair nightclubs guide
          </Link>
          .
        </p>

        {/* Tonight's Quick Pick */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-5 mb-10">
          <h2 className="text-sm font-semibold text-gold uppercase tracking-wide mb-2">
            Tonight&apos;s Quick Pick
          </h2>
          <p className="text-gray-300 text-sm mb-3">
            Don&apos;t want to read the whole guide? Fair enough. If you need a
            solid Mayfair night with zero research, go to{" "}
            <Link
              href="/clubs/funky-buddha"
              className="text-gold hover:text-gold-light"
            >
              Funky Buddha
            </Link>{" "}
            on a Saturday or{" "}
            <Link
              href="/clubs/cuckoo-club"
              className="text-gold hover:text-gold-light"
            >
              Cuckoo Club
            </Link>{" "}
            on a Thursday. Both deliver every time. For what is open and
            available right now, check{" "}
            <a
              href="https://londonclubstonight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light"
            >
              londonclubstonight.com
            </a>
            .
          </p>
          <WhatsAppCTA size="sm" />
        </div>

        {/* Decision sections */}
        <div className="space-y-10">
          {/* Hip-Hop & RnB */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              For Hip-Hop & RnB
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mayfair does hip-hop better than anywhere else in London. The
              sound systems are built for bass, the DJs are top tier, and the
              crowds actually care about the music. Three standout options
              depending on your priorities.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/tape-london"
                    className="hover:text-gold transition-colors"
                  >
                    Tape London
                  </Link>
                  <span className="text-gold text-sm ml-2">The Exclusive Pick</span>
                </h3>
                <p className="text-sm text-gray-300">
                  The hardest door in Mayfair. Celebrity crowd. Intimate room
                  with immaculate sound. If you can get in or book a{" "}
                  <a
                    href="https://londonbottleservice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light"
                  >
                    VIP table
                  </a>
                  , nothing else compares for hip-hop.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/funky-buddha"
                    className="hover:text-gold transition-colors"
                  >
                    Funky Buddha
                  </Link>
                  <span className="text-gold text-sm ml-2">The Legendary Pick</span>
                </h3>
                <p className="text-sm text-gray-300">
                  The most consistent hip-hop night in Mayfair. Loyal crowd,
                  brilliant DJs, and a dance floor that stays packed until
                  close. The guestlist is accessible — arrive by midnight.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/tabu-london"
                    className="hover:text-gold transition-colors"
                  >
                    TABU London
                  </Link>
                  <span className="text-gold text-sm ml-2">The Fashion Pick</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Japanese underground aesthetic. The crowd dresses harder here
                  than anywhere else. Darker, moodier, cooler. The antidote to
                  generic bottle-service hip-hop.
                </p>
              </div>
            </div>
            <p className="text-dark-muted text-sm mt-3">
              More options:{" "}
              <Link
                href="/best-hip-hop-clubs-in-mayfair"
                className="text-gold hover:text-gold-light"
              >
                Best hip-hop clubs in Mayfair
              </Link>
            </p>
          </section>

          {/* House Music */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              For House Music
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mayfair is not Shoreditch. The house music here is polished,
              refined, and played for crowds who dress up. If you want deep
              house, tech house, or melodic house in a premium setting, these
              are your options.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/maddox"
                    className="hover:text-gold transition-colors"
                  >
                    Maddox
                  </Link>
                  <span className="text-gold text-sm ml-2">The Purist&apos;s Choice</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Proper deep house and tech house in the basement club.
                  Sophisticated thirty-something crowd. Book dinner first and
                  the night flows naturally downstairs.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/selene-london"
                    className="hover:text-gold transition-colors"
                  >
                    Selene London
                  </Link>
                  <span className="text-gold text-sm ml-2">The Elegant Pick</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Refined house music in a beautifully designed space.
                  Impressive cocktail programme. Still building its reputation
                  so access is easier than the big names.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/cuckoo-club"
                    className="hover:text-gold transition-colors"
                  >
                    Cuckoo Club
                  </Link>
                  <span className="text-gold text-sm ml-2">The Hidden Gem</span>
                </h3>
                <p className="text-sm text-gray-300">
                  The downstairs room is a proper house music spot that most
                  people overlook. Upstairs is hip-hop, downstairs is house.
                  Two clubs in one.
                </p>
              </div>
            </div>
            <p className="text-dark-muted text-sm mt-3">
              Full breakdown:{" "}
              <Link
                href="/mayfair-clubs-by-music-style"
                className="text-gold hover:text-gold-light"
              >
                Mayfair clubs by music style
              </Link>
            </p>
          </section>

          {/* Live Entertainment & Shows */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              For Live Entertainment & Shows
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This is what sets Mayfair apart from the rest of London. Three
              venues offer genuine live entertainment that turns a night out
              into a story. Completely different experiences — pick based on
              your tolerance for the unexpected.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/cirque-le-soir"
                    className="hover:text-gold transition-colors"
                  >
                    Cirque Le Soir
                  </Link>
                  <span className="text-gold text-sm ml-2">The Circus</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Acrobats, fire breathers, stilt walkers, contortionists —
                  all while you dance. The most chaotic, joyful, unpredictable
                  night out in London. Perfect for birthdays and celebrations.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/reign-london"
                    className="hover:text-gold transition-colors"
                  >
                    Reign London
                  </Link>
                  <span className="text-gold text-sm ml-2">The Showclub</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Las Vegas meets Mayfair. Aerial acrobats above your table,
                  live vocalists, world-class production. The most visually
                  impressive night in the area. Book a{" "}
                  <a
                    href="https://londonbottleservice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light"
                  >
                    table near the stage
                  </a>{" "}
                  for the full experience.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/the-box-london"
                    className="hover:text-gold transition-colors"
                  >
                    The Box
                  </Link>
                  <span className="text-gold text-sm ml-2">The Theatre</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Provocative, boundary-pushing performance art in a nightclub
                  setting. Not for the easily shocked. The crowd is
                  self-selecting and the atmosphere is electric. You will talk
                  about it for weeks.
                </p>
              </div>
            </div>
          </section>

          {/* Cocktails & Late Night */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              For Cocktails & Late Night
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Not every night needs a full-on club. These venues start as
              sophisticated cocktail spots and transition into late-night energy
              without the intensity of the big rooms.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/dear-darling"
                    className="hover:text-gold transition-colors"
                  >
                    Dear Darling
                  </Link>
                  <span className="text-gold text-sm ml-2">Best Cocktails</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Outstanding cocktail programme in an opulent setting. Opens
                  earlier than most venues. The transition from cocktail bar
                  to late-night energy happens naturally around midnight.
                  Perfect for dates and small groups.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/selene-london"
                    className="hover:text-gold transition-colors"
                  >
                    Selene London
                  </Link>
                  <span className="text-gold text-sm ml-2">Refined & Elegant</span>
                </h3>
                <p className="text-sm text-gray-300">
                  The cocktail menu rivals dedicated bars. House music
                  provides the backdrop. The crowd is discerning and the
                  atmosphere is more lounge than club until late.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/scotch-of-st-james"
                    className="hover:text-gold transition-colors"
                  >
                    Scotch of St James
                  </Link>
                  <span className="text-gold text-sm ml-2">Historic & Intimate</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Decades of rock and roll history. Intimate rooms, quality
                  drinks, and a members-club atmosphere without the
                  membership fee. The grown-up option for a refined late night.
                </p>
              </div>
            </div>
          </section>

          {/* Dinner Then Dancing */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              For Dinner Then Dancing
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The best nights in Mayfair start with a good meal. These venues
              handle both halves of the evening so you never need to walk
              between spots or queue twice.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/maddox"
                    className="hover:text-gold transition-colors"
                  >
                    Maddox
                  </Link>
                  <span className="text-gold text-sm ml-2">The Complete Night</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Italian restaurant upstairs, house music club downstairs.
                  Book dinner for 9:30pm, finish around 11:30, walk downstairs
                  into a room that is properly going. The seamless transition
                  is the whole point. Best dinner-to-dance in Mayfair.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/reign-london"
                    className="hover:text-gold transition-colors"
                  >
                    Reign London
                  </Link>
                  <span className="text-gold text-sm ml-2">Dinner & A Show</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Dining with live entertainment followed by the full club
                  experience. The shows start during dinner service so you
                  catch the spectacle from your table before the room
                  transforms into a dance floor.
                </p>
              </div>
            </div>
            <p className="text-dark-muted text-sm mt-3">
              Planning the full evening?{" "}
              <Link
                href="/mayfair-night-out-itinerary"
                className="text-gold hover:text-gold-light"
              >
                See our Mayfair night out itinerary
              </Link>
            </p>
          </section>

          {/* Big Group Night */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              For a Big Group Night
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Groups of six or more need a venue that can handle the energy
              without splitting you up. Table service is usually the play here
              — it gives your group a base and guaranteed entry. These venues
              handle groups best.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/cirque-le-soir"
                    className="hover:text-gold transition-colors"
                  >
                    Cirque Le Soir
                  </Link>
                  <span className="text-gold text-sm ml-2">Best for Birthdays</span>
                </h3>
                <p className="text-sm text-gray-300">
                  The entertainment gives everyone something to talk about.
                  Groups of all sizes thrive here because the atmosphere does
                  the work. Book a{" "}
                  <a
                    href="https://londonbottleservice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light"
                  >
                    table
                  </a>{" "}
                  for guaranteed entry and a home base.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/cuckoo-club"
                    className="hover:text-gold transition-colors"
                  >
                    Cuckoo Club
                  </Link>
                  <span className="text-gold text-sm ml-2">Most Flexible</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Two floors mean your group can split and reunite naturally.
                  House downstairs, hip-hop upstairs. The most accessible
                  guestlist for larger groups. Great energy on both levels.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/reign-london"
                    className="hover:text-gold transition-colors"
                  >
                    Reign London
                  </Link>
                  <span className="text-gold text-sm ml-2">Best for Special Occasions</span>
                </h3>
                <p className="text-sm text-gray-300">
                  The grand multi-level space absorbs groups without feeling
                  cramped. The shows give the night structure. Perfect for
                  hen parties, stag dos, and milestone birthdays.
                </p>
              </div>
            </div>
            <p className="text-dark-muted text-sm mt-3">
              Full group guide:{" "}
              <Link
                href="/best-clubs-for-groups-in-mayfair"
                className="text-gold hover:text-gold-light"
              >
                Best clubs for groups in Mayfair
              </Link>
            </p>
          </section>

          {/* Intimate Night */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              For an Intimate Night
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sometimes you want a smaller room, a quieter crowd, and a night
              that feels personal rather than performative. Mayfair does
              intimate better than anywhere in London.
            </p>
            <div className="space-y-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/tape-london"
                    className="hover:text-gold transition-colors"
                  >
                    Tape London
                  </Link>
                  <span className="text-gold text-sm ml-2">Ultra-Exclusive</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Small room, A-list crowd, no pretence. The most intimate
                  setting in Mayfair with the highest calibre of guest. Tables
                  only most nights — book through{" "}
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
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/scotch-of-st-james"
                    className="hover:text-gold transition-colors"
                  >
                    Scotch of St James
                  </Link>
                  <span className="text-gold text-sm ml-2">Heritage Vibes</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Rock and roll history in an intimate basement setting. The
                  crowd is older, more refined, and here for the atmosphere
                  rather than the scene. Understated wealth. Timeless appeal.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">
                  <Link
                    href="/clubs/dear-darling"
                    className="hover:text-gold transition-colors"
                  >
                    Dear Darling
                  </Link>
                  <span className="text-gold text-sm ml-2">Cocktail Intimacy</span>
                </h3>
                <p className="text-sm text-gray-300">
                  Small enough to feel special, stylish enough to impress.
                  Start with cocktails and let the night develop naturally.
                  The most date-friendly venue in Mayfair.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* First Time in Mayfair */}
        <section className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            First Time in Mayfair? Five Quick Tips
          </h2>
          <div className="space-y-3">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                1. Always book ahead
              </h3>
              <p className="text-sm text-gray-300">
                Walking up to a Mayfair door without a{" "}
                <Link
                  href="/mayfair-club-guestlist-guide"
                  className="text-gold hover:text-gold-light"
                >
                  guestlist booking
                </Link>{" "}
                or table reservation rarely ends well. Get on a list — it
                takes two minutes on WhatsApp.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                2. Dress the part
              </h3>
              <p className="text-sm text-gray-300">
                Smart dress code is non-negotiable. No trainers, no sportswear,
                no exceptions. When in doubt, overdress. Check our{" "}
                <Link
                  href="/mayfair-club-dress-code"
                  className="text-gold hover:text-gold-light"
                >
                  Mayfair dress code guide
                </Link>{" "}
                for venue-specific rules.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                3. Arrive at the right time
              </h3>
              <p className="text-sm text-gray-300">
                Between 11pm and midnight is the window. Too early and the
                room is dead. Too late and the queue is long. Guestlist
                entry usually closes by 12:30am.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                4. Bring ID
              </h3>
              <p className="text-sm text-gray-300">
                Passport or driving licence. Every venue checks. No photo
                of your ID on your phone — it must be the physical document.
                Read the full{" "}
                <Link
                  href="/mayfair-club-entry-rules"
                  className="text-gold hover:text-gold-light"
                >
                  entry rules guide
                </Link>
                .
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                5. Have a backup plan
              </h3>
              <p className="text-sm text-gray-300">
                Even with a guestlist booking, capacity limits apply. Know
                two venues in case your first choice is full. All the clubs
                are within walking distance of each other in Mayfair.
              </p>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            More Mayfair Nightlife Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/best-nightclubs-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Best Nightclubs in Mayfair</p>
              <p className="text-xs text-dark-muted mt-1">
                Our ranked picks for the best clubs right now
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
            <Link
              href="/mayfair-vip-nightlife"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">VIP Nightlife Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                Tables, exclusivity tiers, and insider access
              </p>
            </Link>
            <Link
              href="/mayfair-club-dress-code"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Mayfair Dress Code Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                What to wear to every Mayfair club
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
              href="/girls-guestlist-clubs-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Girls Guestlist Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                Best guestlist options for girls&apos; nights
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Going Out in Mayfair — FAQs
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
            Still Not Sure? Let Us Decide for You
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp with your group size, music taste, and
            budget. We will put you on the right guestlist within minutes. For
            VIP tables, visit{" "}
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
                name: "Where to Go Out in Mayfair",
                item: "https://mayfairtonight.com/where-to-go-out-in-mayfair",
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
