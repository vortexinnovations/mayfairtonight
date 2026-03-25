import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title:
    "Mayfair Club Dress Code — What to Wear to Every Venue in 2026",
  description:
    "The complete Mayfair nightclub dress code guide. Club-by-club breakdown of what to wear, what gets you turned away, and insider tips for every venue. Updated for 2026.",
  alternates: {
    canonical: "https://mayfairtonight.com/mayfair-club-dress-code",
  },
  openGraph: {
    title: "Mayfair Club Dress Code — What to Wear to Every Venue",
    description:
      "Club-by-club dress code breakdown for every Mayfair nightclub. What works, what doesn't, and insider tips from the door.",
    url: "https://mayfairtonight.com/mayfair-club-dress-code",
  },
};

interface ClubDressCode {
  name: string;
  slug: string;
  strictness: number;
  works: string[];
  doesnt: string[];
  insiderTip: string;
}

const clubDressCodes: ClubDressCode[] = [
  {
    name: "Tape London",
    slug: "tape-london",
    strictness: 5,
    works: [
      "Tailored suit or blazer with smart trousers",
      "Designer shoes — leather only",
      "Understated luxury — quality over flash",
      "For women: cocktail dress, designer heels",
    ],
    doesnt: [
      "Anything casual — no jeans of any kind",
      "Trainers regardless of brand",
      "Open-collar shirts without a jacket",
      "Loud logos or streetwear brands",
    ],
    insiderTip:
      "Tape has the strictest door in Mayfair. The crowd dresses like they are going to a private members dinner. Think Savile Row, not Selfridges.",
  },
  {
    name: "Cirque Le Soir",
    slug: "cirque-le-soir",
    strictness: 3,
    works: [
      "Smart shirt and trousers with good shoes",
      "Creative flair is welcome — Cirque rewards personality",
      "For women: anything from cocktail dress to fashion-forward",
      "Bold accessories and statement pieces",
    ],
    doesnt: [
      "Sportswear or tracksuits",
      "Trainers or open-toe shoes for men",
      "Overly casual jeans with t-shirts",
      "Fancy dress — the performers do that part",
    ],
    insiderTip:
      "Cirque is more relaxed than most Mayfair venues. The vibe is theatrical and the door appreciates style over formality. A well-fitted dark shirt with good trousers works perfectly.",
  },
  {
    name: "Reign London",
    slug: "reign-london",
    strictness: 4,
    works: [
      "Blazer and smart trousers — the Reign standard",
      "Polished shoes — brogues or Chelsea boots",
      "For women: glamorous cocktail or evening dress",
      "Smart dark denim with a blazer can work midweek",
    ],
    doesnt: [
      "Trainers or casual sneakers",
      "T-shirts without a jacket",
      "Sportswear or athleisure",
      "Shorts or sandals of any kind",
    ],
    insiderTip:
      "Reign is a showclub — the audience dresses for the occasion. Think opening-night energy. Women tend to dress up more here than any other Mayfair venue.",
  },
  {
    name: "TABU London",
    slug: "tabu-london",
    strictness: 4,
    works: [
      "Fashion-forward streetwear with smart shoes",
      "All-black fits work exceptionally well",
      "Designer pieces and creative outfits",
      "For women: edgy, fashion-conscious looks",
    ],
    doesnt: [
      "Generic high-street smart casual",
      "Dad shoes or chunky trainers",
      "Overly corporate — no banker vibes",
      "Baggy or ill-fitting clothing",
    ],
    insiderTip:
      "TABU is the most style-conscious door in Mayfair. The Japanese underground aesthetic means they reward fashion risk-takers. All black with one statement piece is the cheat code.",
  },
  {
    name: "Funky Buddha",
    slug: "funky-buddha",
    strictness: 3,
    works: [
      "Smart casual done well — shirt, good trousers, leather shoes",
      "Clean dark jeans with a blazer",
      "For women: smart dress or stylish separates",
      "Classic Mayfair smart — nothing too edgy needed",
    ],
    doesnt: [
      "Trainers — even expensive ones",
      "Hoodies or casual jumpers",
      "Ripped jeans or distressed denim",
      "Work boots or hiking shoes",
    ],
    insiderTip:
      "Funky Buddha rewards regulars. The dress code is strict but classic — think smart Mayfair rather than fashion-forward. A good shirt and well-fitted trousers with leather shoes is the winning formula.",
  },
  {
    name: "Cuckoo Club",
    slug: "cuckoo-club",
    strictness: 3,
    works: [
      "Smart shirt with trousers and leather shoes",
      "Clean dark jeans are accepted most nights",
      "For women: cocktail dress or smart going-out outfit",
      "Chelsea boots or smart loafers",
    ],
    doesnt: [
      "Sportswear or tracksuits",
      "Trainers — the door is consistent on this",
      "Very casual jeans with a basic t-shirt",
      "Baseball caps or beanies",
    ],
    insiderTip:
      "Cuckoo has one of the more forgiving doors in Mayfair but do not push it. Smart casual is the baseline — clean jeans work but pair them with a proper shirt and good shoes.",
  },
  {
    name: "Scotch of St James",
    slug: "scotch-of-st-james",
    strictness: 4,
    works: [
      "Tailored trousers with a quality shirt",
      "Blazer adds confidence at the door",
      "For women: elegant cocktail attire",
      "Understated, classic style over trends",
    ],
    doesnt: [
      "Anything too casual or youthful",
      "Trainers or chunky shoes",
      "Streetwear or logos",
      "Jeans without a jacket to balance them",
    ],
    insiderTip:
      "Scotch has a members-club feel and the dress code matches. The crowd is older and more refined. Think Mayfair dinner party rather than nightclub. A well-cut blazer solves most problems.",
  },
  {
    name: "Dear Darling",
    slug: "dear-darling",
    strictness: 3,
    works: [
      "Smart cocktail-bar attire — shirt and trousers",
      "Clean dark denim with a smart top half",
      "For women: elegant but not necessarily formal",
      "Loafers, brogues, or Chelsea boots",
    ],
    doesnt: [
      "Sportswear or very casual streetwear",
      "Trainers",
      "Overly casual — remember it is a cocktail bar first",
      "Shorts or beachwear",
    ],
    insiderTip:
      "Dear Darling is a cocktail bar that becomes a late-night venue. The dress code reflects that — sophisticated rather than club-ready. You should look like you appreciate good drinks.",
  },
  {
    name: "Maddox",
    slug: "maddox",
    strictness: 4,
    works: [
      "Restaurant-smart — blazer and tailored trousers",
      "Smart shoes are essential — brogues or Oxfords",
      "For women: dinner-to-dance outfits that work for both",
      "Sophisticated, European-influenced style",
    ],
    doesnt: [
      "Anything you would not wear to a good restaurant",
      "Trainers or casual footwear",
      "T-shirts even under a blazer",
      "Denim without smart counterbalance",
    ],
    insiderTip:
      "Most people arrive via the restaurant so the standard is high. Dress as though you are going for dinner at a top Italian restaurant — because you probably should be.",
  },
  {
    name: "The Box",
    slug: "the-box-london",
    strictness: 4,
    works: [
      "Creative, fashion-forward outfits encouraged",
      "Dark, stylish looks — all black works well",
      "For women: bold, artistic, fashion-conscious choices",
      "Statement pieces and unique accessories",
    ],
    doesnt: [
      "Generic smart casual — The Box wants personality",
      "Corporate or conservative looks",
      "Trainers or casual sportswear",
      "Anything bland — the door rewards effort",
    ],
    insiderTip:
      "The Box curates its crowd visually. Dress like you belong in Soho, not the City. Creative, edgy, and confident wins over expensive and safe. The door staff notice effort over labels.",
  },
  {
    name: "Selene London",
    slug: "selene-london",
    strictness: 3,
    works: [
      "Refined smart casual — quality fabrics and good fit",
      "Dark tones and elegant silhouettes",
      "For women: sophisticated cocktail looks",
      "Polished shoes — loafers or smart boots",
    ],
    doesnt: [
      "Overly casual or unkempt looks",
      "Trainers or chunky sneakers",
      "Loud streetwear brands",
      "Anything that looks rushed",
    ],
    insiderTip:
      "Selene is building a reputation for refined elegance. The crowd dresses well because they want to, not because they have to. Match the energy — think quality cocktail bar with a late-night edge.",
  },
  {
    name: "BEAT London",
    slug: "beat-london",
    strictness: 3,
    works: [
      "Stylish smart casual — shirt and good trousers",
      "Fashion-forward pieces are welcome",
      "For women: smart going-out outfits",
      "Clean, well-fitted looks that show effort",
    ],
    doesnt: [
      "Sportswear or tracksuits",
      "Trainers or very casual footwear",
      "Baggy or ill-fitting clothing",
      "Basic t-shirts without layers",
    ],
    insiderTip:
      "BEAT attracts a younger, fashion-aware crowd. The dress code is not as strict as Tape or Scotch but you still need to look like you have put thought into your outfit. Style matters more than price tags.",
  },
  {
    name: "Luna Club London",
    slug: "luna-club-london",
    strictness: 3,
    works: [
      "Smart casual with good shoes",
      "Clean dark jeans with a smart shirt",
      "For women: cocktail dress or smart separates",
      "Well-groomed and put-together appearance",
    ],
    doesnt: [
      "Sportswear or athleisure",
      "Trainers or casual sneakers",
      "Very casual streetwear",
      "Shorts or flip-flops",
    ],
    insiderTip:
      "Luna has a friendly, accessible door but still enforces Mayfair standards. A step above your local bar but you do not need to go full black tie. Smart and well-groomed is the benchmark.",
  },
];

const faqs = [
  {
    question: "Can I wear trainers to a Mayfair club?",
    answer:
      "No. Every Mayfair nightclub prohibits trainers regardless of brand or price. Even designer trainers from Gucci or Balenciaga will get you turned away. Wear leather shoes, loafers, Chelsea boots, or smart boots. This is the single most common reason people get refused at Mayfair doors.",
  },
  {
    question: "Can I wear jeans to a Mayfair nightclub?",
    answer:
      "Dark, clean, well-fitted jeans are accepted at most Mayfair clubs on non-peak nights — particularly at Cuckoo Club, Funky Buddha, Dear Darling, and Selene. Pair them with a blazer or smart shirt and leather shoes. Avoid ripped, distressed, or light-wash jeans everywhere. Tape London and Scotch of St James generally expect trousers over jeans.",
  },
  {
    question: "What should women wear to Mayfair clubs?",
    answer:
      "A cocktail dress or smart separates with heels or elegant flats is the standard. Women generally have more flexibility than men at Mayfair doors. The venues that reward fashion effort most are TABU, The Box, and Tape London. When in doubt, a well-fitted black dress works at every venue.",
  },
  {
    question: "Do Mayfair clubs have a strict dress code on Thursday?",
    answer:
      "Thursday dress codes are enforced but slightly more relaxed than Friday and Saturday at most venues. Dark jeans become more acceptable. Smart shoes remain essential every night. Tape London and Scotch of St James maintain the same standard regardless of the night.",
  },
  {
    question: "What is the best outfit for a man going to a Mayfair club?",
    answer:
      "A tailored blazer, well-fitted dark trousers, a quality shirt, and leather shoes. This combination works at every single Mayfair venue including the strictest doors. Add a pocket square or quality watch for Tape or Scotch. A good fit matters more than expensive brands.",
  },
  {
    question: "Will I get turned away for wearing a polo shirt?",
    answer:
      "It depends on the venue. A high-quality polo shirt can work at Cuckoo Club, Selene, Luna, and BEAT on quieter nights. It will not pass at Tape London, Scotch, Maddox, or Reign. A collared shirt is always the safer choice — it costs you nothing extra and opens every door.",
  },
];

export default function MayfairDressCodePage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">
            Tonight
          </Link>
          {" / "}
          <span className="text-gray-300">Mayfair Club Dress Code</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair Club Dress Code —{" "}
          <span className="text-gold">What to Wear to Every Venue</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          Getting turned away at the door is the worst start to a night out.
          This guide covers the dress code at every Mayfair nightclub — what
          works, what gets you refused, and the insider tips that make the
          difference. Written by people who stand at these doors every week.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          For the general London nightclub dress code, see our{" "}
          <Link
            href="/dress-code"
            className="text-gold hover:text-gold-light"
          >
            London dress code guide
          </Link>
          . Planning your full night?{" "}
          <Link
            href="/mayfair-nightlife-guide"
            className="text-gold hover:text-gold-light"
          >
            Read the complete Mayfair nightlife guide
          </Link>
          .
        </p>

        {/* General rules */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Universal Rules
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Every Mayfair club operates on the same basic principle: dress
            like you belong somewhere premium. The specifics vary by venue but
            these rules apply everywhere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Men — What Works</h3>
              <ul className="space-y-2">
                {[
                  "Tailored blazer or smart jacket",
                  "Well-fitted dark trousers",
                  "Collared shirt — no t-shirts",
                  "Leather shoes — Oxfords, loafers, Chelsea boots",
                  "Quality watch or subtle accessories",
                  "Clean, well-groomed appearance",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Men — What Doesn&apos;t</h3>
              <ul className="space-y-2">
                {[
                  "Trainers — any brand, any price",
                  "Sportswear, tracksuits, athleisure",
                  "Shorts or sandals",
                  "Baseball caps or beanies",
                  "Ripped or distressed clothing",
                  "Open-toe shoes or flip-flops",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Women — What Works</h3>
              <ul className="space-y-2">
                {[
                  "Cocktail dress or evening dress",
                  "Smart separates — tailored trousers and a quality top",
                  "Heels, elegant flats, or smart boots",
                  "Statement jewellery and accessories",
                  "Fashion-forward pieces at style-conscious venues",
                  "Classic black dress — works everywhere",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Women — What Doesn&apos;t</h3>
              <ul className="space-y-2">
                {[
                  "Trainers or casual sneakers",
                  "Sportswear or gym leggings",
                  "Flip-flops or very casual sandals",
                  "Overly casual daywear",
                  "Heavy coats — use the cloakroom",
                  "Fancy dress or costumes",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#10007;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Club-by-club breakdown */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Club-by-Club Dress Code Breakdown
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Every venue has its own personality at the door. Strictness is
            rated from 1 (relaxed) to 5 (black tie energy). Here is exactly
            what to expect at each club.
          </p>

          <div className="space-y-6">
            {clubDressCodes.map((club) => (
              <div
                key={club.slug}
                className="bg-dark-card border border-dark-border rounded-xl p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="hover:text-gold transition-colors"
                    >
                      {club.name}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-dark-muted uppercase tracking-wide">
                      Strictness
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-5 h-5 rounded-sm flex items-center justify-center text-xs font-bold ${
                            level <= club.strictness
                              ? "bg-gold/20 text-gold border border-gold/40"
                              : "bg-dark border border-dark-border text-dark-muted"
                          }`}
                        >
                          {level}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-2">
                      What works
                    </p>
                    <ul className="space-y-1.5">
                      {club.works.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-green-400 mt-0.5">&#10003;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-dark-muted uppercase tracking-wide mb-2">
                      What doesn&apos;t
                    </p>
                    <ul className="space-y-1.5">
                      {club.doesnt.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-red-400 mt-0.5">&#10007;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-dark border border-dark-border rounded-lg p-3">
                  <p className="text-xs text-gold uppercase tracking-wide mb-1">
                    Insider Tip
                  </p>
                  <p className="text-sm text-gray-300">{club.insiderTip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Gets You Turned Away */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Gets You Turned Away
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Door staff in Mayfair see the same mistakes every weekend. Avoid
            these and your chances of getting in go up dramatically.
          </p>
          <div className="space-y-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                Expensive trainers
              </h3>
              <p className="text-sm text-gray-300">
                The number one cause of rejection. It does not matter if they
                cost 800 pounds. Trainers are trainers. Every Mayfair door
                will turn you away. No exceptions.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                Ill-fitting clothes
              </h3>
              <p className="text-sm text-gray-300">
                An expensive outfit that does not fit properly looks worse than
                a cheaper outfit that fits perfectly. Mayfair door staff assess
                how you look, not what labels you wear. Tailoring matters more
                than brands.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                Looking like you came from the gym
              </h3>
              <p className="text-sm text-gray-300">
                Athleisure, joggers, hoodies, and gym bags are instant
                refusals. Even if you have changed your top, trainers and
                jogger-style trousers will give you away. Plan your outfit
                before you leave.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-white font-semibold mb-1">
                Loud logos and branding
              </h3>
              <p className="text-sm text-gray-300">
                Large visible logos scream effort in the wrong direction.
                Understated quality always beats loud branding in Mayfair. A
                plain well-cut blazer will outperform a logo-covered designer
                piece at every door.
              </p>
            </div>
          </div>
        </section>

        {/* Seasonal tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Seasonal Dress Code Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Summer</h3>
              <p className="text-sm text-gray-300">
                Lighter fabrics are fine but the same standards apply. Linen
                trousers with a smart shirt work well. No shorts, no sandals,
                no exceptions. Women can wear lighter dresses but keep it
                smart. Clubs are air-conditioned so you will not overheat.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Winter</h3>
              <p className="text-sm text-gray-300">
                Every venue has a cloakroom. Wear your best outfit underneath
                a warm coat and check the coat at the door. Do not let the
                weather downgrade your outfit. Smart boots are a strong winter
                choice for both men and women.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Festive Season</h3>
              <p className="text-sm text-gray-300">
                December in Mayfair runs at peak glamour. Dress a level above
                your normal effort. Sequins and sparkle work for women during
                the Christmas party season. Men should lean towards their best
                blazer and a quality shirt.
              </p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Midweek vs Weekend</h3>
              <p className="text-sm text-gray-300">
                Thursday is slightly more relaxed than Saturday at most venues.
                Dark jeans become more acceptable midweek. Smart shoes remain
                non-negotiable every night. Friday and Saturday demand your
                best effort across the board.
              </p>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            More Mayfair Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/dress-code"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">London Dress Code Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                General London nightclub dress code rules
              </p>
            </Link>
            <Link
              href="/mayfair-nightclubs"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">All Mayfair Nightclubs</p>
              <p className="text-xs text-dark-muted mt-1">
                Complete guide to every club in Mayfair
              </p>
            </Link>
            <Link
              href="/mayfair-club-entry-rules"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Entry Rules Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                ID, age policy, and door rules for every venue
              </p>
            </Link>
            <Link
              href="/where-to-go-out-in-mayfair"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Where to Go Out</p>
              <p className="text-xs text-dark-muted mt-1">
                Decision guide — match your vibe to a venue
              </p>
            </Link>
            <Link
              href="/mayfair-club-guestlist-guide"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Guestlist Guide</p>
              <p className="text-xs text-dark-muted mt-1">
                How to get on the list at every Mayfair club
              </p>
            </Link>
            <Link
              href="/mayfair-night-out-itinerary"
              className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors"
            >
              <p className="font-medium text-white">Night Out Itinerary</p>
              <p className="text-xs text-dark-muted mt-1">
                Plan your entire Mayfair evening step by step
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Mayfair Dress Code FAQs
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
            Not Sure What to Wear?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp with the venue you are heading to and we
            will give you specific advice. Or book a{" "}
            <a
              href="https://londonbottleservice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light"
            >
              VIP table
            </a>{" "}
            — table guests always get priority at the door.
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
                name: "Mayfair Club Dress Code",
                item: "https://mayfairtonight.com/mayfair-club-dress-code",
              },
            ],
          }),
        }}
      />

      <StickyBookingBar />
    </>
  );
}
