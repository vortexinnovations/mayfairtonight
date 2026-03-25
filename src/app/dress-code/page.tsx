import { Metadata } from "next";
import Link from "next/link";
import { getOpenClubs } from "@/data/clubs";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "Mayfair Club Dress Code Guide — What to Wear at London Nightclubs",
  description:
    "The complete dress code guide for Mayfair nightclubs. What to wear for men and women, what gets you turned away, and specific dress codes for every club. Don't get caught at the door.",
  alternates: { canonical: "https://mayfairtonight.com/dress-code" },
  openGraph: {
    title: "Mayfair Club Dress Code Guide — What to Wear",
    description:
      "Everything you need to know about dressing for Mayfair's nightclubs. Specific dress codes for every venue, tips for men and women.",
    url: "https://mayfairtonight.com/dress-code",
  },
};

const faqs = [
  {
    question: "What is the dress code for Mayfair nightclubs?",
    answer:
      "Most Mayfair nightclubs enforce a smart dress code. For men, this means smart shoes, tailored trousers or smart jeans, and a collared shirt or well-fitted top. For women, heels or smart shoes with a dress, skirt, or smart trousers. No sportswear, trainers, or casual clothing at any venue.",
  },
  {
    question: "Can I wear trainers to a Mayfair club?",
    answer:
      "Generally no. Most Mayfair clubs do not allow trainers. Some more relaxed venues like BEAT London may accept clean, designer trainers as part of a smart outfit, but casual trainers will get you turned away at every door in Mayfair.",
  },
  {
    question: "What should men wear to a Mayfair nightclub?",
    answer:
      "Smart shoes (loafers, Oxfords, or Chelsea boots), tailored trousers or smart dark jeans, and a well-fitted shirt or smart top. A blazer is always a safe choice. Avoid anything casual — no t-shirts, no sportswear, no shorts.",
  },
  {
    question: "What should women wear to a Mayfair nightclub?",
    answer:
      "Heels or smart shoes, a dress, smart jumpsuit, or tailored separates. Mayfair clubs expect glamour — think cocktail bar meets fashion week. Avoid casual wear like flat shoes with jeans.",
  },
  {
    question: "Which Mayfair club has the strictest dress code?",
    answer:
      "Tape London has the strictest door in Mayfair. It's a members club with an invite-only policy most nights, and the dress code reflects that — think designer labels and serious style. Maddox and Selene London also enforce strict smart dress codes given their refined venues.",
  },
  {
    question: "Does BEAT London have a strict dress code?",
    answer:
      "BEAT London is more relaxed than most Mayfair venues. It's a music-first club where the focus is on the sound system and the party. Smart casual works — no sportswear, but smart trainers with a sharp outfit are usually fine.",
  },
];

export default function DressCodePage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>
          {" / "}
          <span className="text-gray-300">Dress Code Guide</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair Club <span className="text-gold">Dress Code</span> Guide
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl">
          What to wear, what to avoid, and what each club expects. Read this
          before you leave the house — getting turned away at the door is the
          fastest way to ruin a night out.
        </p>

        {/* The golden rule */}
        <section className="bg-dark-card border border-gold/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gold mb-3">
            The Golden Rule
          </h2>
          <p className="text-gray-300 leading-relaxed">
            When in doubt, overdress. No one has ever been turned away from a
            Mayfair club for looking too smart. The opposite happens every single
            night. Dress like you&apos;re going somewhere that matters — because
            you are.
          </p>
        </section>

        {/* Men's guide */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Dress Code for Men
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-lg font-medium text-green-400 mb-3">
                What Works
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Smart shoes — loafers, Chelsea boots, Oxfords</li>
                <li>• Tailored trousers or smart dark jeans</li>
                <li>• Collared shirt or smart fitted top</li>
                <li>• Blazer or sport coat (always a safe bet)</li>
                <li>• Designer pieces — they notice at the door</li>
                <li>• A watch. It signals effort</li>
              </ul>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-lg font-medium text-red-400 mb-3">
                What Gets You Turned Away
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Trainers (even expensive ones, at most venues)</li>
                <li>• Sportswear of any kind — no joggers, no hoodies</li>
                <li>• Shorts — even in summer</li>
                <li>• Casual t-shirts</li>
                <li>• Flip-flops or sandals</li>
                <li>• Anything you&apos;d wear to the gym</li>
              </ul>
            </div>
          </div>

          <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm italic">
              The safe play for men: dark smart jeans, a well-fitted button-down
              shirt, Chelsea boots, and a blazer. You&apos;ll get into every
              venue on this list dressed like that.
            </p>
          </div>
        </section>

        {/* Women's guide */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Dress Code for Women
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-lg font-medium text-green-400 mb-3">
                What Works
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Heels or smart shoes/boots</li>
                <li>• Cocktail dress or evening dress</li>
                <li>• Smart jumpsuit or co-ord set</li>
                <li>• Tailored separates — blazer and skirt, etc.</li>
                <li>• Statement accessories</li>
                <li>• Think: cocktail bar meets fashion week</li>
              </ul>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-xl p-5">
              <h3 className="text-lg font-medium text-red-400 mb-3">
                What to Avoid
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Flat shoes with casual jeans</li>
                <li>• Sportswear or athleisure</li>
                <li>• Overly casual daywear</li>
                <li>• Beachwear or festival outfits</li>
                <li>• Anything you&apos;d wear to brunch</li>
              </ul>
            </div>
          </div>

          <div className="bg-dark-card border-l-2 border-gold p-4 rounded-r-lg">
            <p className="text-gray-300 text-sm italic">
              The safe play for women: a cocktail dress with heels, or smart
              tailored separates with statement accessories. Mayfair venues
              appreciate glamour.
            </p>
          </div>
        </section>

        {/* Dress code by club */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Dress Code by Club
          </h2>
          <div className="space-y-3">
            {getOpenClubs().map((club) => (
              <div
                key={club.slug}
                className="bg-dark-card border border-dark-border rounded-lg p-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <Link
                      href={`/clubs/${club.slug}`}
                      className="font-medium text-white hover:text-gold transition-colors"
                    >
                      {club.name}
                    </Link>
                    <p className="text-sm text-gray-300 mt-1">{club.dressCode}</p>
                    <p className="text-xs text-dark-muted mt-1">
                      {club.dressCodeNotes}
                    </p>
                  </div>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="text-xs text-gold hover:text-gold-light shrink-0"
                  >
                    Club info →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Dress Code FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-dark-card border border-dark-border rounded-lg group"
              >
                <summary className="p-4 cursor-pointer text-white font-medium list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-gold ml-2 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Not Sure About the Dress Code?
          </h2>
          <p className="text-dark-muted mb-4">
            Message us on WhatsApp and we&apos;ll tell you exactly what to wear
            for where you&apos;re going.
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

      <StickyBookingBar />
    </>
  );
}
