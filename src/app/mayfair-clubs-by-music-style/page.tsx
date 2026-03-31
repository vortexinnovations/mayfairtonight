import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroImage from "@/components/HeroImage";
import { heroImages } from "@/data/images";

export const metadata: Metadata = {
  title:
    "Mayfair Clubs by Music Style — Find Your Sound in 2026",
  description:
    "Which Mayfair clubs play hip-hop, house, RnB, or open format? Complete music guide to every venue by genre. Find the right sound for your night out.",
  alternates: {
    canonical: "https://mayfairtonight.com/mayfair-clubs-by-music-style",
  },
  openGraph: {
    title: "Mayfair Clubs by Music Style — Find Your Sound",
    description:
      "The definitive guide to music at Mayfair nightclubs. Hip-hop, house, RnB, commercial — find the club that plays what you want to hear.",
    url: "https://mayfairtonight.com/mayfair-clubs-by-music-style",
  },
};

interface GenreClub {
  name: string;
  slug: string;
  description: string;
  style: string;
  bestNight: string;
  djs: string;
}

const hipHopClubs: GenreClub[] = [
  {
    name: "Tape London",
    slug: "tape-london",
    description:
      "The gold standard for hip-hop in Mayfair. Tape's DJs curate sets that blend current hits with classic anthems, and the intimate room means the bass hits properly. The A-list crowd adds to the energy — when a Drake track drops here, the room goes off in a way that bigger venues can't replicate.",
    style: "Current hip-hop, classic anthems, trap, RnB",
    bestNight: "Friday and Saturday — the DJs bring their A-game",
    djs: "Resident selectors with deep hip-hop knowledge. Guest DJs from the UK urban scene.",
  },
  {
    name: "Funky Buddha",
    slug: "funky-buddha",
    description:
      "Funky Buddha's hip-hop sets are legendary. The DJs swing between old-school classics and modern bangers with a funky house twist that keeps the dance floor unpredictable. You'll hear 90s hip-hop anthems followed by current chart hits, then a curveball house remix. The crowd sings every word.",
    style: "Old-school hip-hop, modern hits, funky house crossovers",
    bestNight: "Wednesday and Thursday for the purists, Saturday for peak energy",
    djs: "Long-standing residents who know the Funky Buddha crowd inside out. The music is curated, not algorithmic.",
  },
  {
    name: "TABU London",
    slug: "tabu-london",
    description:
      "TABU's hip-hop leans darker and moodier, matching the Japanese underground aesthetic. Expect trap-influenced sets, slower RnB, and a curation that feels more fashion-week runway than mainstream club. The crowd dresses to match the music — this is hip-hop for people who take their sound seriously.",
    style: "Trap, moody RnB, dark hip-hop, underground flavours",
    bestNight: "Friday for the fashion crowd, Saturday for fuller energy",
    djs: "Curators who understand the TABU brand. Music matches the aesthetic perfectly.",
  },
  {
    name: "Cuckoo Club",
    slug: "cuckoo-club",
    description:
      "Upstairs at Cuckoo is dedicated hip-hop territory. The room is compact and the energy is concentrated. Current chart hip-hop, RnB singalongs, and enough throwbacks to keep everyone happy. It's the accessible hip-hop option — no pretension, just good music and a packed dance floor.",
    style: "Chart hip-hop, RnB, throwbacks",
    bestNight: "Thursday is the standout night upstairs",
    djs: "Residents who read the room well. Commercial enough to keep everyone dancing, credible enough to impress.",
  },
  {
    name: "BEAT London",
    slug: "beat-london",
    description:
      "BEAT brings a raw, music-first approach to hip-hop. The sound system is serious, the crowd is there for the music, and the atmosphere is closer to a concert than a typical Mayfair club. Expect deeper cuts alongside the hits — the DJs have genuine credibility.",
    style: "Hip-hop, UK rap, grime crossovers, RnB",
    bestNight: "Saturday for the fullest programme",
    djs: "Music-focused selectors. BEAT books DJs for their taste, not their Instagram following.",
  },
  {
    name: "Cirque Le Soir",
    slug: "cirque-le-soir",
    description:
      "Cirque's hip-hop soundtrack is the engine that drives the circus. High-energy beats underpin the performances, and the DJs know exactly when to drop a banger for maximum impact. The music works with the entertainment to create peaks of energy that hit harder than a standard club set.",
    style: "High-energy hip-hop, RnB, party anthems",
    bestNight: "Saturday for the full entertainment programme with the strongest music",
    djs: "Residents who sync perfectly with the live performances. Music and entertainment are choreographed.",
  },
];

const houseClubs: GenreClub[] = [
  {
    name: "Maddox",
    slug: "maddox",
    description:
      "Maddox is the house music purist's choice in Mayfair. No commercial filler, no crowd-pleasing compromises — just proper house music played on a quality sound system to a crowd that appreciates it. Deep house, tech house, and classic house cuts delivered by DJs who know their craft. This is the grown-up Mayfair night.",
    style: "Deep house, tech house, classic house, no commercial",
    bestNight: "Friday and Saturday for the best DJ bookings",
    djs: "Serious house selectors. Maddox books quality over celebrity. Regular guest DJs from the London house scene.",
  },
  {
    name: "Selene London",
    slug: "selene-london",
    description:
      "Selene's house music is tasteful and refined, matching the elegant atmosphere. Think smooth deep house, melodic house, and carefully selected commercial house that never descends into cheesy territory. The sound complements the cocktail programme perfectly — sophisticated without being inaccessible.",
    style: "Melodic house, deep house, refined commercial house",
    bestNight: "Friday for the most curated sets",
    djs: "Residents who understand the Selene brand. Music supports the atmosphere rather than dominating it.",
  },
  {
    name: "Cuckoo Club",
    slug: "cuckoo-club",
    description:
      "Downstairs at Cuckoo is the house floor. The room has its own energy — deeper, darker, more focused on the music. The DJs play proper house that builds through the night. It's one of the only venues in Mayfair where you can choose between house and hip-hop in the same building.",
    style: "House, deep house, some tech house",
    bestNight: "Thursday and Saturday — both floors are firing",
    djs: "Dedicated house residents downstairs. Quality curation that rewards those who seek it out.",
  },
  {
    name: "Scotch of St James",
    slug: "scotch-of-st-james",
    description:
      "Scotch blends house with disco and funk in a way that feels timeless. The heritage of the venue — Hendrix played here — infuses the music policy with a sense of history. The DJs draw from deep crates, mixing classic house with disco edits and soulful grooves. It's music for people who love music.",
    style: "House, disco, funk, soulful grooves",
    bestNight: "Saturday for the richest musical programme",
    djs: "Curators with deep record collections. Scotch attracts DJs who appreciate the venue's history.",
  },
  {
    name: "Dear Darling",
    slug: "dear-darling",
    description:
      "Dear Darling's house music starts subtle and builds through the evening. Early on, it's lounge and deep house that accompanies the cocktail service. As the night progresses, the tempo lifts and the beats become more insistent. The transition is seamless — you don't notice the shift until you're dancing.",
    style: "Lounge, deep house, melodic house, late-night grooves",
    bestNight: "Thursday and Friday for the best cocktail-to-dance transition",
    djs: "Residents who manage the evening's musical arc. The transition from bar to club is a skill and Dear Darling's DJs nail it.",
  },
];

const commercialClubs: GenreClub[] = [
  {
    name: "Reign London",
    slug: "reign-london",
    description:
      "Reign's music policy is broad by design — the shows need a soundtrack that works for the widest possible audience. Commercial hits, current chart toppers, sing-along anthems, and enough hip-hop and house to keep everyone moving. The DJs play between performances, building energy for the next act.",
    style: "Commercial, chart hits, open format, some hip-hop and house",
    bestNight: "Saturday for the full show programme and the broadest music selection",
    djs: "Residents who work seamlessly with the entertainment schedule. Versatile selectors who read a mixed crowd.",
  },
  {
    name: "Luna Club London",
    slug: "luna-club-london",
    description:
      "Luna delivers a crowd-pleasing open format that mixes genres freely. Commercial dance, pop remixes, hip-hop hits, and house — all blended into a set that keeps the dance floor packed. It's accessible, fun, and never too serious about any one genre. The DJ reads the room and gives the crowd what it wants.",
    style: "Open format, commercial dance, pop, hip-hop crossovers",
    bestNight: "Friday and Saturday",
    djs: "Versatile residents who prioritise keeping the floor full. Reading the crowd is the skill here.",
  },
  {
    name: "BEAT London",
    slug: "beat-london",
    description:
      "BEAT blends commercial appeal with genuine musical credibility. The open format sets lean heavier on hip-hop and UK sounds than pure pop, giving it an edge that separates it from generic commercial clubs. The sound system ensures everything hits properly.",
    style: "Open format, hip-hop heavy, UK sounds, commercial",
    bestNight: "Saturday for the broadest programme",
    djs: "Selectors who balance commercial appeal with musical taste. The sound system makes everything sound better.",
  },
];

const eclecticClubs: GenreClub[] = [
  {
    name: "The Box",
    slug: "the-box-london",
    description:
      "The Box's music is as unpredictable as its performances. One moment it's hip-hop, the next it's house, then a disco classic, then something you can't quite categorise. The eclecticism matches the venue's ethos — expect the unexpected. The DJs play for the mood, not the genre purists.",
    style: "Eclectic, hip-hop, house, disco, unclassifiable",
    bestNight: "Thursday and Saturday for the most adventurous programming",
    djs: "Creative selectors who mirror the theatrical energy. Music that surprises you is the brief.",
  },
  {
    name: "Scotch of St James",
    slug: "scotch-of-st-james",
    description:
      "Scotch's programming spans house, disco, RnB, and everything in between. The intimate setting means the DJ can take risks — dropping a Northern Soul classic into a house set, or weaving funk into RnB. The heritage of the venue encourages musical adventurousness.",
    style: "Mixed — house, disco, RnB, funk, soul",
    bestNight: "Different nights bring different flavours. Thursday for RnB-leaning sets, Saturday for the full range.",
    djs: "DJs with eclectic taste and deep collections. Scotch rewards musical curiosity.",
  },
  {
    name: "Dear Darling",
    slug: "dear-darling",
    description:
      "Dear Darling's cocktail bar roots mean the music has to work across moods and moments. Early evening jazz and soul gives way to deep house and disco, which evolves into more energetic house and commercial as the night peaks. The genre shifts with the atmosphere.",
    style: "Jazz, soul, deep house, disco, late-night house",
    bestNight: "Friday for the fullest musical journey from cocktails to dancing",
    djs: "Musically literate selectors who manage the evening's progression. The best DJs here are storytellers.",
  },
];

const musicGrid = [
  { name: "Tape London", slug: "tape-london", hiphop: true, house: false, commercial: false, eclectic: false },
  { name: "Cirque Le Soir", slug: "cirque-le-soir", hiphop: true, house: false, commercial: false, eclectic: false },
  { name: "Funky Buddha", slug: "funky-buddha", hiphop: true, house: true, commercial: false, eclectic: false },
  { name: "TABU London", slug: "tabu-london", hiphop: true, house: false, commercial: false, eclectic: false },
  { name: "Cuckoo Club", slug: "cuckoo-club", hiphop: true, house: true, commercial: true, eclectic: false },
  { name: "BEAT London", slug: "beat-london", hiphop: true, house: false, commercial: true, eclectic: false },
  { name: "Maddox", slug: "maddox", hiphop: false, house: true, commercial: false, eclectic: false },
  { name: "Selene London", slug: "selene-london", hiphop: false, house: true, commercial: false, eclectic: false },
  { name: "Scotch of St James", slug: "scotch-of-st-james", hiphop: false, house: true, commercial: false, eclectic: true },
  { name: "Dear Darling", slug: "dear-darling", hiphop: false, house: true, commercial: false, eclectic: true },
  { name: "Reign London", slug: "reign-london", hiphop: false, house: false, commercial: true, eclectic: false },
  { name: "Luna Club London", slug: "luna-club-london", hiphop: false, house: false, commercial: true, eclectic: false },
  { name: "The Box", slug: "the-box-london", hiphop: false, house: false, commercial: false, eclectic: true },
];

const faqs = [
  {
    question: "Can you request songs at Mayfair clubs?",
    answer:
      "It depends on the venue. At most Mayfair clubs, DJs curate their sets and don't take requests from the floor. However, if you have a table booking, your table host can sometimes pass a request to the DJ — though there's no guarantee. Cirque Le Soir and Reign are entertainment-focused, so requests rarely apply. Cuckoo Club and Funky Buddha are more flexible, especially if the DJ knows you.",
  },
  {
    question: "Do DJs change by night at Mayfair clubs?",
    answer:
      "Yes. Most Mayfair clubs have different DJs for different nights of the week. Thursday might have a hip-hop specialist while Saturday brings a more versatile selector. The music policy stays consistent (Maddox is always house, for example), but the individual DJ style varies. Check the venue's socials for specific DJ lineups on your chosen night.",
  },
  {
    question: "Which Mayfair club has the best sound system?",
    answer:
      "BEAT London is purpose-built for sound quality — it's a music-first venue and the system reflects that. Maddox has an excellent setup for house music in its basement club. Tape London's intimate room means the sound is powerful without needing enormous speakers. For sheer impact during performances, Reign London's production-grade system is impressive.",
  },
  {
    question: "Is it the same music every night at Mayfair clubs?",
    answer:
      "The genre stays consistent but the energy and specific tracks vary. Maddox is always house music, but a Thursday set is different to a Saturday set. Cuckoo Club always has hip-hop upstairs and house downstairs, but the DJs and specific sounds change. Some venues run themed nights — check individual club pages for weekly schedules.",
  },
  {
    question: "What does open format mean at a nightclub?",
    answer:
      "Open format means the DJ plays across multiple genres rather than sticking to one. They might blend hip-hop into house, throw in a pop remix, then switch to a classic anthem. Reign London and Luna Club London are the main open-format venues in Mayfair. It's designed to keep a mixed crowd happy rather than catering to genre purists.",
  },
];

export default function MayfairClubsByMusicPage() {
  return (
    <>
      <HeroImage src={heroImages.musicStyle} alt="Mayfair clubs by music style">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Clubs by Music Style</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair Clubs by Music Style —{" "}
          <span className="text-gold">Find Your Sound</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl">
          The wrong music ruins a night out. The right music makes it. Every
          Mayfair club has a distinct sound — this guide matches you to the
          venue that plays what you actually want to hear.
        </p>
      </HeroImage>

      <article className="max-w-4xl mx-auto px-4 pt-8">
        <p className="text-dark-muted text-sm mb-8">
          Want the full club rankings?{" "}
          <Link
            href="/best-nightclubs-in-mayfair"
            className="text-gold hover:text-gold-light"
          >
            Read our best nightclubs guide
          </Link>
          . Looking for hip-hop specifically?{" "}
          <Link
            href="/best-hip-hop-clubs-in-mayfair"
            className="text-gold hover:text-gold-light"
          >
            See the hip-hop clubs guide
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

        {/* Hip-Hop & RnB */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            Hip-Hop & RnB
          </h2>
          <p className="text-gray-300 mb-4">
            The dominant sound across Mayfair. But not all hip-hop is equal — some venues play chart-friendly commercial hip-hop while others dig deeper into trap, grime, and classic anthems. Here&apos;s where to go for every flavour.
          </p>
          <div className="space-y-6">
            {hipHopClubs.map((club) => (
              <div
                key={club.slug}
                className="bg-dark-card border border-dark-border rounded-xl p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="hover:text-gold transition-colors"
                    >
                      {club.name}
                    </Link>
                  </h3>
                  <WhatsAppCTA
                    variant="club"
                    clubName={club.name}
                    size="sm"
                    className="hidden sm:block shrink-0"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {club.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      Style
                    </p>
                    <p className="text-sm text-gray-300">{club.style}</p>
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      Best Night
                    </p>
                    <p className="text-sm text-white">{club.bestNight}</p>
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      DJs
                    </p>
                    <p className="text-sm text-gray-300">{club.djs}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm">
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

        {/* House & Deep House */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            House & Deep House
          </h2>
          <p className="text-gray-300 mb-4">
            For those who prefer four-to-the-floor over bars and hooks. Mayfair&apos;s house music scene ranges from pure deep house to disco-infused grooves. These venues take the music seriously.
          </p>
          <div className="space-y-6">
            {houseClubs.map((club) => (
              <div
                key={club.slug}
                className="bg-dark-card border border-dark-border rounded-xl p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="hover:text-gold transition-colors"
                    >
                      {club.name}
                    </Link>
                  </h3>
                  <WhatsAppCTA
                    variant="club"
                    clubName={club.name}
                    size="sm"
                    className="hidden sm:block shrink-0"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {club.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      Style
                    </p>
                    <p className="text-sm text-gray-300">{club.style}</p>
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      Best Night
                    </p>
                    <p className="text-sm text-white">{club.bestNight}</p>
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      DJs
                    </p>
                    <p className="text-sm text-gray-300">{club.djs}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm">
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

        {/* Commercial & Open Format */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            Commercial & Open Format
          </h2>
          <p className="text-gray-300 mb-4">
            Not everyone wants to commit to one genre. These clubs play across the board — hits, anthems, and whatever gets the floor moving. Ideal for mixed groups where everyone has different taste.
          </p>
          <div className="space-y-6">
            {commercialClubs.map((club) => (
              <div
                key={club.slug}
                className="bg-dark-card border border-dark-border rounded-xl p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="hover:text-gold transition-colors"
                    >
                      {club.name}
                    </Link>
                  </h3>
                  <WhatsAppCTA
                    variant="club"
                    clubName={club.name}
                    size="sm"
                    className="hidden sm:block shrink-0"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {club.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      Style
                    </p>
                    <p className="text-sm text-gray-300">{club.style}</p>
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      Best Night
                    </p>
                    <p className="text-sm text-white">{club.bestNight}</p>
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      DJs
                    </p>
                    <p className="text-sm text-gray-300">{club.djs}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm">
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

        {/* Mixed / Eclectic */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            Mixed / Eclectic
          </h2>
          <p className="text-gray-300 mb-4">
            These venues defy easy categorisation. The music moves between genres, the DJs take creative risks, and the result is a night where you genuinely don&apos;t know what&apos;s coming next. For the musically curious.
          </p>
          <div className="space-y-6">
            {eclecticClubs.map((club) => (
              <div
                key={club.slug}
                className="bg-dark-card border border-dark-border rounded-xl p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="hover:text-gold transition-colors"
                    >
                      {club.name}
                    </Link>
                  </h3>
                  <WhatsAppCTA
                    variant="club"
                    clubName={club.name}
                    size="sm"
                    className="hidden sm:block shrink-0"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {club.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      Style
                    </p>
                    <p className="text-sm text-gray-300">{club.style}</p>
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      Best Night
                    </p>
                    <p className="text-sm text-white">{club.bestNight}</p>
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-1">
                      DJs
                    </p>
                    <p className="text-sm text-gray-300">{club.djs}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-sm">
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

        {/* Two-Floor Clubs */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Two-Floor Clubs — Why Cuckoo Club Is Unique
          </h2>
          <div className="bg-dark-card border border-gold/30 rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              <Link
                href="/clubs/cuckoo-club"
                className="text-gold hover:text-gold-light font-medium"
              >
                Cuckoo Club
              </Link>{" "}
              is the only Mayfair venue that genuinely offers two distinct music experiences under one roof. Downstairs is house music — deep, building, four-to-the-floor. Upstairs is hip-hop and RnB — chart hits, throwbacks, sing-along energy.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This matters for mixed groups. If half your friends want hip-hop and the other half want house, Cuckoo is the only venue where nobody has to compromise. Move between floors as the mood takes you. Start with house, switch to hip-hop, come back down for the late-night deep cuts.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Other venues have different areas, but none split it as cleanly as Cuckoo. It&apos;s the diplomat&apos;s choice — everyone gets what they want without changing venue.
            </p>
          </div>
        </section>

        {/* Music Policy Comparison Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Music Policy Comparison
          </h2>
          <p className="text-dark-muted text-sm mb-4">
            Quick reference for which clubs play which genres. Some venues span multiple categories.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="text-left py-3 pr-4 text-white font-medium">Club</th>
                  <th className="text-center py-3 px-3 text-white font-medium">Hip-Hop</th>
                  <th className="text-center py-3 px-3 text-white font-medium">House</th>
                  <th className="text-center py-3 px-3 text-white font-medium">Commercial</th>
                  <th className="text-center py-3 px-3 text-white font-medium">Eclectic</th>
                </tr>
              </thead>
              <tbody>
                {musicGrid.map((club) => (
                  <tr key={club.slug} className="border-b border-dark-border/50">
                    <td className="py-3 pr-4">
                      <Link
                        href={`/clubs/${club.slug}`}
                        className="text-gold hover:text-gold-light"
                      >
                        {club.name}
                      </Link>
                    </td>
                    <td className="text-center py-3 px-3">
                      {club.hiphop ? (
                        <span className="text-gold">&#10003;</span>
                      ) : (
                        <span className="text-dark-muted">—</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-3">
                      {club.house ? (
                        <span className="text-gold">&#10003;</span>
                      ) : (
                        <span className="text-dark-muted">—</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-3">
                      {club.commercial ? (
                        <span className="text-gold">&#10003;</span>
                      ) : (
                        <span className="text-dark-muted">—</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-3">
                      {club.eclectic ? (
                        <span className="text-gold">&#10003;</span>
                      ) : (
                        <span className="text-dark-muted">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What If You Want Both? */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            What If You Want Both? — Club-Hopping by Genre
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-2">Hip-Hop Then House</h3>
              <p className="text-sm text-gray-300">
                Start at{" "}
                <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light">
                  Funky Buddha
                </Link>{" "}
                for hip-hop energy, then walk to{" "}
                <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">
                  Maddox
                </Link>{" "}
                for proper house music. Both are in Mayfair, minutes apart. Or just go to{" "}
                <Link href="/clubs/cuckoo-club" className="text-gold hover:text-gold-light">
                  Cuckoo Club
                </Link>{" "}
                and do both floors.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-2">Entertainment Then Dancing</h3>
              <p className="text-sm text-gray-300">
                Start at{" "}
                <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">
                  Cirque Le Soir
                </Link>{" "}
                for the shows and hip-hop energy, then move to{" "}
                <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">
                  Tape London
                </Link>{" "}
                if you can get in — or{" "}
                <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light">
                  Funky Buddha
                </Link>{" "}
                for a legendary finish.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-2">Cocktails Then Club</h3>
              <p className="text-sm text-gray-300">
                Start at{" "}
                <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light">
                  Dear Darling
                </Link>{" "}
                for world-class cocktails with lounge house, then head to{" "}
                <Link href="/clubs/selene-london" className="text-gold hover:text-gold-light">
                  Selene
                </Link>{" "}
                or{" "}
                <Link href="/clubs/scotch-of-st-james" className="text-gold hover:text-gold-light">
                  Scotch of St James
                </Link>{" "}
                for a proper house music club.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-gold font-semibold mb-2">Dinner Then Dancing</h3>
              <p className="text-sm text-gray-300">
                <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">
                  Maddox
                </Link>{" "}
                does this in one venue — Italian dinner upstairs, house music club downstairs. No venue change needed. The transition is seamless and the house music builds as the night progresses.
              </p>
            </div>
          </div>
          <p className="text-dark-muted text-sm mt-4">
            For more nightlife planning, read our{" "}
            <Link
              href="/mayfair-nightlife-guide"
              className="text-gold hover:text-gold-light"
            >
              complete Mayfair nightlife guide
            </Link>{" "}
            or browse{" "}
            <Link
              href="/where-to-go-out-in-mayfair"
              className="text-gold hover:text-gold-light"
            >
              where to go out in Mayfair
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
              href="/best-hip-hop-clubs-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Best Hip-Hop Clubs</p>
              <p className="text-xs text-dark-muted mt-1">
                Deep dive into Mayfair&apos;s hip-hop scene
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
            <Link
              href="/mayfair-nightclubs"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">All Mayfair Nightclubs</p>
              <p className="text-xs text-dark-muted mt-1">
                Complete directory with guestlist tips
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Not Sure Which Sound Is for You?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp with your music taste and we&apos;ll
            recommend the right club and the right night. For VIP tables, visit{" "}
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
                name: "Mayfair Clubs by Music Style",
                item: "https://mayfairtonight.com/mayfair-clubs-by-music-style",
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
