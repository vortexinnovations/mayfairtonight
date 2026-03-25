import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "Mayfair Club Entry Rules — How to Get Into Every Venue",
  description:
    "The complete guide to Mayfair nightclub entry rules. Door policies, ID requirements, group ratios, arrival times, and what gets you turned away. Insider tips from someone who knows every door.",
  alternates: { canonical: "https://mayfairtonight.com/mayfair-club-entry-rules" },
  openGraph: {
    title: "Mayfair Club Entry Rules — Insider Door Guide",
    description: "Everything you need to know about getting into Mayfair clubs. Door policies, ID, ratios, and insider tips.",
    url: "https://mayfairtonight.com/mayfair-club-entry-rules",
  },
};

const faqs = [
  { question: "Do Mayfair clubs check ID?", answer: "Yes. Every Mayfair club checks ID at the door. Bring a valid passport or driving licence. Most venues won't accept expired ID or photocopies. If you're visiting from abroad, your passport is the safest bet." },
  { question: "Can I get into a Mayfair club without a booking?", answer: "It's possible at some venues but risky. Cuckoo Club and Dear Darling are more walk-up friendly. Tape London, Scotch of St James, and The Box are almost impossible without a booking or table. Always book through a promoter — it's free and eliminates the guesswork." },
  { question: "What time should I arrive at a Mayfair club?", answer: "Between 11pm and midnight is the sweet spot. Before 11pm the venue is empty. After midnight you risk capacity limits and longer queues. If you're on guestlist, arriving at 11:15-11:30 is ideal." },
  { question: "Do Mayfair clubs have a gender ratio policy?", answer: "Unofficially, yes. Most Mayfair doors prefer mixed groups or groups with more women. All-male groups of 4+ face the toughest scrutiny. Mixed groups of any size rarely have issues. All-female groups are generally welcomed everywhere." },
  { question: "Can I get in wearing trainers?", answer: "At most Mayfair clubs, no. BEAT London and Cuckoo Club are the most lenient — clean, designer trainers can work. Tape, Scotch, The Box, and Maddox will turn you away regardless of the brand. Smart leather shoes are always the safe choice." },
  { question: "What happens if I'm denied entry?", answer: "Don't argue — it never helps. The door team's decision is final. If you're turned away for dress code, you can try another venue with a more relaxed policy. If it's a capacity issue, waiting 20-30 minutes sometimes works. The best insurance is booking through a promoter." },
];

export default function EntryRulesPage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>{" / "}
          <Link href="/mayfair-nightclubs" className="hover:text-gold">Mayfair Nightclubs</Link>{" / "}
          <span className="text-gray-300">Entry Rules</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair Club Entry Rules — <span className="text-gold">How to Get Past Every Door</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          Mayfair doors are the toughest in London. The wrong shoes, the wrong attitude, or simply not being on a list can end your night before it starts. This guide covers exactly what every venue expects — so you walk in, not walk away.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          For dress code specifics, see our <Link href="/mayfair-club-dress-code" className="text-gold hover:text-gold-light">Mayfair dress code guide</Link>. For guestlist booking, read the <Link href="/mayfair-club-guestlist-guide" className="text-gold hover:text-gold-light">guestlist guide</Link>.
        </p>

        {/* The Golden Rules */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">The Five Golden Rules of Mayfair Doors</h2>
          <div className="space-y-3">
            {[
              { rule: "Always have a booking", detail: "Guestlist, table, or promoter contact. Walking up cold to a Mayfair club door is the fastest way to get turned away. Message us on WhatsApp and we'll sort it." },
              { rule: "Dress sharp, not trendy", detail: "Smart shoes, fitted clothes, no sportswear. When in doubt, overdress. Nobody gets rejected for looking too smart. Full guide at our dress code page." },
              { rule: "Arrive between 11pm and midnight", detail: "Too early means an empty room. Too late means capacity issues. The window of 11-11:30pm is when doors are most accommodating." },
              { rule: "Be polite to door staff", detail: "Mayfair door teams remember faces — for good and bad reasons. A friendly, respectful approach goes further than dropping names or arguing." },
              { rule: "Bring valid photo ID", detail: "Passport or driving licence. Every venue checks, regardless of how old you look. No ID, no entry — no exceptions." },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">{i + 1}. {item.rule}</h3>
                <p className="text-sm text-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Door Difficulty */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Door Difficulty by Venue</h2>
          <p className="text-gray-300 mb-4">Not all Mayfair doors are equal. Here&apos;s an honest breakdown of how hard each club is to get into.</p>

          <div className="space-y-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Hardest Doors — Booking Essential</h3>
              <div className="space-y-3">
                <div><Link href="/clubs/tape-london" className="text-white font-medium hover:text-gold">Tape London</Link> <span className="text-dark-muted text-sm">— Members and tables almost exclusively. Guestlist is extremely rare. Book a table through a promoter or know a member. The hardest door in Mayfair.</span></div>
                <div><Link href="/clubs/scotch-of-st-james" className="text-white font-medium hover:text-gold">Scotch of St James</Link> <span className="text-dark-muted text-sm">— Members club atmosphere. Door knows its regulars. New faces need a connection or promoter. Respectful approach matters enormously here.</span></div>
                <div><Link href="/clubs/the-box-london" className="text-white font-medium hover:text-gold">The Box</Link> <span className="text-dark-muted text-sm">— Curated door. They select based on look, energy, and group composition. Creative dressing helps. Book through a promoter for the best chance.</span></div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Firm but Fair — Book Ahead</h3>
              <div className="space-y-3">
                <div><Link href="/clubs/tabu-london" className="text-white font-medium hover:text-gold">TABU London</Link> <span className="text-dark-muted text-sm">— Fashion-conscious door. They curate the crowd by style. Look sharp, book through a promoter, and your group composition matters.</span></div>
                <div><Link href="/clubs/funky-buddha" className="text-white font-medium hover:text-gold">Funky Buddha</Link> <span className="text-dark-muted text-sm">— Door knows its regulars and rewards loyalty. First-timers should book through a promoter. Polite and well-dressed gets you far.</span></div>
                <div><Link href="/clubs/cirque-le-soir" className="text-white font-medium hover:text-gold">Cirque Le Soir</Link> <span className="text-dark-muted text-sm">— Guestlist works but arrive before midnight. After that, even guestlist doesn&apos;t guarantee entry at capacity. Weekends book out fast.</span></div>
                <div><Link href="/clubs/reign-london" className="text-white font-medium hover:text-gold">Reign London</Link> <span className="text-dark-muted text-sm">— Professional door team. Guestlist is available and reliable if you book ahead. Standard Mayfair dress code enforced.</span></div>
                <div><Link href="/clubs/maddox" className="text-white font-medium hover:text-gold">Maddox</Link> <span className="text-dark-muted text-sm">— Dinner guests transition to the club easily. Club-only entry requires a booking. House music crowd tends to be well-dressed by default.</span></div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Most Accessible — Still Book, But Easier</h3>
              <div className="space-y-3">
                <div><Link href="/clubs/cuckoo-club" className="text-white font-medium hover:text-gold">Cuckoo Club</Link> <span className="text-dark-muted text-sm">— The most accessible Mayfair door. Guestlist works reliably. Dress smart casual, arrive before midnight, and you&apos;re in. Great for first-timers.</span></div>
                <div><Link href="/clubs/dear-darling" className="text-white font-medium hover:text-gold">Dear Darling</Link> <span className="text-dark-muted text-sm">— Bar-first atmosphere means the door is more relaxed. Smart dress code still applies. Walk-ups can work earlier in the evening.</span></div>
                <div><Link href="/clubs/selene-london" className="text-white font-medium hover:text-gold">Selene London</Link> <span className="text-dark-muted text-sm">— Newer venue building its crowd. Guestlist is accessible and the door is welcoming. Dress elegantly and you&apos;ll have no issues.</span></div>
                <div><Link href="/clubs/luna-club-london" className="text-white font-medium hover:text-gold">Luna Club London</Link> <span className="text-dark-muted text-sm">— Still establishing itself. Tables and guestlist both accessible. Good option while the established names are harder to crack.</span></div>
                <div><Link href="/clubs/beat-london" className="text-white font-medium hover:text-gold">BEAT London</Link> <span className="text-dark-muted text-sm">— More relaxed than central Mayfair clubs. Smart casual works. One of the few venues where clean designer trainers are acceptable.</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Group Ratios */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Group Composition & Ratios</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>Mayfair doors pay attention to group composition. It&apos;s not written on any sign, but every door team applies unspoken rules about who gets priority.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-green-400 font-semibold mb-2">Easy Entry</h3>
                <ul className="text-sm space-y-1">
                  <li>• Mixed groups (men and women)</li>
                  <li>• All-female groups of any size</li>
                  <li>• Couples</li>
                  <li>• Groups with a table booking</li>
                  <li>• Groups with a promoter connection</li>
                </ul>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-red-400 font-semibold mb-2">Tougher Entry</h3>
                <ul className="text-sm space-y-1">
                  <li>• All-male groups of 4+</li>
                  <li>• Large groups without a booking</li>
                  <li>• Groups that appear intoxicated</li>
                  <li>• Late arrivals without a table</li>
                  <li>• Anyone who argues with door staff</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-dark-muted">
              The solution for all-male groups is simple: book a table through <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">London Bottle Service</a> or get on the guestlist through a promoter. It changes the dynamic entirely.
            </p>
          </div>
        </section>

        {/* Timing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">When to Arrive</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-gray-300">Before 10:30pm</span>
                <span className="text-dark-muted">Too early — venue nearly empty</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-gray-300">10:30 — 11:00pm</span>
                <span className="text-dark-muted">Good for dinner-to-dance venues (Maddox, Selene)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-white font-medium">11:00 — 11:30pm</span>
                <span className="text-gold">Sweet spot — best time to arrive</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-gray-300">11:30pm — midnight</span>
                <span className="text-dark-muted">Still good — atmosphere building</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-dark-border">
                <span className="text-gray-300">Midnight — 1:00am</span>
                <span className="text-dark-muted">Riskier — capacity becomes an issue</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300">After 1:00am</span>
                <span className="text-red-400">Tables only at most venues</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Gets You Turned Away */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What Gets You Turned Away</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-red-400 font-semibold mb-2">Instant Rejection</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Sportswear, shorts, flip-flops</li>
                <li>• Visibly intoxicated</li>
                <li>• No valid photo ID</li>
                <li>• Aggressive or argumentative behaviour</li>
                <li>• Under 18 (under 21 at some venues)</li>
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Risky — Depends on Venue</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Trainers (even designer at strict venues)</li>
                <li>• Large all-male groups without booking</li>
                <li>• Arriving after 1am without a table</li>
                <li>• Jeans at the most formal venues</li>
                <li>• No booking on busy nights</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-dark-muted mt-3">
            Full dress code breakdown: <Link href="/mayfair-club-dress-code" className="text-gold hover:text-gold-light">Mayfair club dress code guide</Link>
          </p>
        </section>

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/mayfair-club-dress-code" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Dress Code Guide</p>
              <p className="text-xs text-dark-muted mt-1">What to wear to every Mayfair club</p>
            </Link>
            <Link href="/mayfair-club-guestlist-guide" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Guestlist Guide</p>
              <p className="text-xs text-dark-muted mt-1">How to get on the list at any venue</p>
            </Link>
            <Link href="/mayfair-vip-nightlife" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">VIP Nightlife Guide</p>
              <p className="text-xs text-dark-muted mt-1">Tables, exclusivity, and the VIP experience</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Entry Rules FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-dark-card border border-dark-border rounded-lg group">
                <summary className="p-4 cursor-pointer text-white font-medium list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-gold group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-300 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="bg-dark-card border border-gold/30 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">Skip the Door Drama</h2>
          <p className="text-dark-muted mb-4">Message us on WhatsApp and we&apos;ll get you on the guestlist at any Mayfair club. Free, fast, guaranteed entry.</p>
          <WhatsAppCTA size="lg" />
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mayfairtonight.com" }, { "@type": "ListItem", position: 2, name: "Mayfair Nightclubs", item: "https://mayfairtonight.com/mayfair-nightclubs" }, { "@type": "ListItem", position: 3, name: "Entry Rules", item: "https://mayfairtonight.com/mayfair-club-entry-rules" }] }) }} />
      <StickyBookingBar />
    </>
  );
}
