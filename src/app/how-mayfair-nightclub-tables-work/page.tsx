import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "How Mayfair Nightclub Tables Work — The Complete Guide",
  description:
    "Everything you need to know about booking a table at a Mayfair nightclub. Minimum spends, bottle service, what you get, and what to expect at London's most exclusive venues.",
  alternates: { canonical: "https://mayfairtonight.com/how-mayfair-nightclub-tables-work" },
  openGraph: {
    title: "How Mayfair Nightclub Tables Work — The Complete Guide",
    description: "Minimum spends, bottle service, the VIP experience — an honest breakdown of how table bookings work at every top Mayfair club.",
    url: "https://mayfairtonight.com/how-mayfair-nightclub-tables-work",
  },
};

const faqs = [
  { question: "What is a minimum spend at a Mayfair club?", answer: "A minimum spend is the amount you commit to spending on drinks at your table. It's not an entry fee — it's your drinks budget. You choose bottles and mixers from the menu, and your total needs to hit the agreed minimum. Anything you order counts toward it." },
  { question: "Can I split the minimum spend across my group?", answer: "Absolutely. Most groups split the cost. A table for 8 people with a £1,500 minimum works out to under £200 per person — which includes all your drinks for the night. When you factor in saved cover charges and drinks at the bar, it can be surprisingly good value." },
  { question: "What happens if I don't reach the minimum spend?", answer: "You'll still be charged the minimum spend amount. The club will either add the difference to your bill or suggest additional bottles. It's a commitment, not a target — plan to meet it. Your promoter can help you choose the right minimum for your group size." },
  { question: "Do I need to tip the table host?", answer: "Tipping isn't mandatory but is customary and appreciated. A service charge is usually included on the bill already. Beyond that, tipping your host £20-50 if they've looked after you well is a nice gesture and ensures great service next time." },
  { question: "Can I book a table for just 2 people?", answer: "Yes, but you'll still need to meet the minimum spend. For couples or small groups, some venues offer smaller tables or bar-adjacent positions with lower minimums. Ask your promoter about options suited to smaller parties." },
];

export default function TablesGuidePage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>{" / "}
          <Link href="/mayfair-nightclubs" className="hover:text-gold">Mayfair Nightclubs</Link>{" / "}
          <span className="text-gray-300">How Tables Work</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          How Mayfair Nightclub Tables Work — <span className="text-gold">The Complete Guide</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          A table at a Mayfair club isn&apos;t just a seat — it&apos;s guaranteed entry, your own space, bottle service, and a completely different night out. But how does it actually work? What&apos;s a minimum spend? What do you get? This guide explains everything so there are no surprises.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          Prefer guestlist? Read our <Link href="/mayfair-club-guestlist-guide" className="text-gold hover:text-gold-light">guestlist guide</Link>. For door policies, see <Link href="/mayfair-club-entry-rules" className="text-gold hover:text-gold-light">entry rules</Link>.
        </p>

        {/* What Is a Table Booking? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What Is a Table Booking?</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>A table booking at a Mayfair nightclub means you reserve a dedicated space in the venue for your group, with a committed minimum spend on drinks. It&apos;s not a cover charge — the money goes toward bottles, mixers, and whatever else you order from the table menu.</p>
            <p>Think of it as pre-committing to your drinks budget for the night. Instead of queuing at the bar and paying per round, everything comes to your table. A dedicated host takes care of you, pours your drinks, keeps your ice fresh, and makes sure your group has everything it needs.</p>
            <p>The real advantage is access. A table booking means guaranteed entry, no queue, and your own area in the club. At venues like <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">Tape London</Link> and <Link href="/clubs/scotch-of-st-james" className="text-gold hover:text-gold-light">Scotch of St James</Link>, a table is often the only way in.</p>
          </div>
        </section>

        {/* What You Get With a Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What You Get With a Table</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Guaranteed Entry", desc: "No risk of being turned away. Your booking is confirmed, your names are on the list, and you walk straight in." },
              { title: "Queue Skip", desc: "Table guests enter through a separate entrance or priority lane. You won't wait in the main queue." },
              { title: "Dedicated Space", desc: "A booth, sofa area, or raised platform that's yours for the night. Somewhere to sit, dance, and leave your things." },
              { title: "Bottle Service", desc: "Choose bottles from the menu — vodka, champagne, whisky, tequila. They arrive with mixers, ice, and garnishes." },
              { title: "Personal Host", desc: "A dedicated member of staff who pours your drinks, clears your table, and handles any requests throughout the night." },
              { title: "Any Group Works", desc: "All-male, all-female, mixed, couples — table bookings eliminate the group composition concerns that affect guestlist entry." },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Minimum Spend Explained */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Minimum Spend Explained</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>The minimum spend is the core of every table booking. It&apos;s the amount your group agrees to spend on drinks. This isn&apos;t an entrance fee that disappears — every pound goes toward bottles and drinks on your table.</p>
            <p>Typical minimum spends at Mayfair clubs range from around £1,000 to £1,500 or more, depending on the venue, the night of the week, and where the table is positioned. Premium spots — closer to the DJ, dance floor, or stage — command higher minimums. Quieter nights and less central tables start lower.</p>

            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">What Counts Toward Your Minimum</h3>
              <ul className="text-sm space-y-2">
                <li>• All bottles of spirits (vodka, whisky, tequila, rum, gin)</li>
                <li>• Champagne and wine</li>
                <li>• Mixers and soft drinks ordered with bottles</li>
                <li>• Individual cocktails ordered to the table</li>
                <li>• Any food ordered (at venues with late-night menus)</li>
              </ul>
            </div>

            <p className="text-sm text-dark-muted">
              A standard bottle of premium vodka with mixers typically serves 4-6 people comfortably. Two bottles and a bottle of champagne will keep a group of 6-8 well-served for the night. Your promoter can help you plan your order to match the minimum without over-ordering.
            </p>
          </div>
        </section>

        {/* The Table Experience at Each Venue */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">The Table Experience at Each Venue</h2>
          <p className="text-gray-300 mb-4">Every venue delivers the table experience differently. Here&apos;s what to expect at the top Mayfair clubs.</p>
          <div className="space-y-4">
            {[
              { name: "Tape London", slug: "tape-london", desc: "The most exclusive table experience in Mayfair. Intimate room with plush booth seating. Tables are positioned around the main floor, close to the action. The sound system is exceptional and the crowd is industry-heavy. Bottles arrive with a sparkler presentation. Service is impeccable — your host anticipates before you ask." },
              { name: "Cirque Le Soir", slug: "cirque-le-soir", desc: "Tables here come with entertainment built into the night. Expect circus performers, dancers, and theatrical moments happening around you. Booths line the walls of the main room with clear sightlines to the stage. The atmosphere is high-energy and surreal. The table experience is as much about the spectacle as the drinks." },
              { name: "Reign London", slug: "reign-london", desc: "Expansive space with varied table positions. Some are elevated, giving you a view over the dance floor. The room is large enough to feel like an event. Bottle presentations are dramatic with LED sparklers and music coordination. Good for groups who want space and energy." },
              { name: "Funky Buddha", slug: "funky-buddha", desc: "Legendary late-night spot with cosy, low-lit booths. The room is compact, which creates an intense atmosphere. Tables feel intimate and close to the dance floor. Hip-hop and R&B soundtrack. The crowd tends to be well-connected and the vibe is exclusive without being pretentious." },
              { name: "The Box", slug: "the-box-london", desc: "Theatrically designed space over multiple levels. Tables offer different perspectives on the stage shows — some are uncomfortably close, which is part of the appeal. The performances are provocative and unforgettable. Not for the easily shocked. The table experience here is unique in London." },
              { name: "Maddox", slug: "maddox", desc: "Sophisticated two-level venue. The restaurant upstairs transitions to the club basement. Tables in the club are positioned around the dance floor in a sleek, minimal setting. House music dominates. Dinner-to-dance packages offer a seamless evening — eat upstairs, then descend to your table with the party already started." },
              { name: "TABU London", slug: "tabu-london", desc: "Fashion-forward setting with plush seating and moody lighting. Tables are arranged to create distinct zones — some more private, others more social. The music programming is eclectic and the crowd is style-conscious. Bottle presentations are coordinated with the DJ." },
              { name: "Cuckoo Club", slug: "cuckoo-club", desc: "Two distinct floors offering different table experiences. The main room is energetic with tables around the dance floor. The Garden room downstairs is more intimate with a different musical flavour. Great for groups who want variety within one venue — start upstairs, move down later." },
            ].map((venue) => (
              <div key={venue.slug} className="bg-dark-card border border-dark-border rounded-lg p-5">
                <Link href={`/clubs/${venue.slug}`} className="text-gold font-semibold hover:text-gold-light text-lg">{venue.name}</Link>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">{venue.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Table vs Guestlist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Table vs Guestlist — Which Should You Choose?</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Choose Guestlist If...</h3>
              <ul className="text-sm space-y-2">
                <li>• You&apos;re a mixed group of 2-6 people</li>
                <li>• You don&apos;t mind standing and using the bar</li>
                <li>• You&apos;re happy to arrive between 11pm and midnight</li>
                <li>• You want to keep costs low</li>
                <li>• You&apos;re targeting accessible venues like Cuckoo Club or Reign</li>
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Choose a Table If...</h3>
              <ul className="text-sm space-y-2">
                <li>• You have an all-male group or a large group</li>
                <li>• You want guaranteed entry with no risk</li>
                <li>• You&apos;re celebrating something special (birthday, stag, promotion)</li>
                <li>• You want to arrive whenever suits you</li>
                <li>• You&apos;re targeting exclusive venues like Tape or Scotch</li>
                <li>• You want your own space and bottle service</li>
              </ul>
            </div>
            <p className="text-sm text-dark-muted">
              Not sure? <Link href="/mayfair-club-guestlist-guide" className="text-gold hover:text-gold-light">Read the guestlist guide</Link> and compare. Or message us on WhatsApp — we&apos;ll recommend the right option for your group.
            </p>
          </div>
        </section>

        {/* How to Book */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Book a Table</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>Booking a table is straightforward once you know what you want. Here&apos;s the process.</p>
            <div className="space-y-3">
              {[
                { step: "Choose your venue and date", detail: "Consider what kind of night you want — intimate and exclusive, or high-energy and theatrical. Each venue has a distinct character. Our guides can help you choose." },
                { step: "Contact a promoter", detail: "Message us on WhatsApp or reach out to a booking specialist. We'll confirm availability, explain the minimum spend options, and help you pick the right table position." },
                { step: "Confirm your booking", detail: "You'll receive confirmation with all the details — venue, date, table position, minimum spend, and arrival instructions. Some venues require a deposit or credit card to hold the booking." },
                { step: "Arrive and enjoy", detail: "On the night, give your name at the door. You'll be escorted to your table where your host is waiting. Order your bottles and the night begins." },
              ].map((item, i) => (
                <div key={i} className="bg-dark-card border border-dark-border rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-1">Step {i + 1}: {item.step}</h3>
                  <p className="text-sm text-gray-300">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-dark-muted">
              For table bookings at any Mayfair venue, <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">London Bottle Service</a> manages availability and pricing across the board. You can also message us directly on WhatsApp for a quick quote.
            </p>
          </div>
        </section>

        {/* Tipping & Etiquette */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Tipping &amp; Table Etiquette</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Tipping</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• A service charge is usually included on the bill</li>
                <li>• Additional tips for your host are appreciated but not required</li>
                <li>• £20-50 for good service is customary</li>
                <li>• Cash tips go directly to the person who served you</li>
                <li>• Great tippers are remembered — and looked after next time</li>
              </ul>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Etiquette</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Don&apos;t invite strangers to your table without checking with your host</li>
                <li>• Treat your host and security with respect</li>
                <li>• Keep your area tidy — your host helps, but don&apos;t make their job harder</li>
                <li>• Don&apos;t stand on the furniture</li>
                <li>• Settle the bill at the end of the night without fuss</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/best-clubs-for-tables-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Best Clubs for Tables</p>
              <p className="text-xs text-dark-muted mt-1">Where to book for the best table experience</p>
            </Link>
            <Link href="/mayfair-club-guestlist-guide" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Guestlist Guide</p>
              <p className="text-xs text-dark-muted mt-1">The free alternative to table bookings</p>
            </Link>
            <Link href="/mayfair-vip-nightlife" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">VIP Nightlife</p>
              <p className="text-xs text-dark-muted mt-1">The full VIP experience in Mayfair</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Table Booking FAQ</h2>
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
          <h2 className="text-xl font-semibold text-white mb-2">Book Your Table Tonight</h2>
          <p className="text-dark-muted mb-4">Message us on WhatsApp for instant table availability and pricing at any Mayfair venue.</p>
          <WhatsAppCTA size="lg" />
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mayfairtonight.com" }, { "@type": "ListItem", position: 2, name: "Mayfair Nightclubs", item: "https://mayfairtonight.com/mayfair-nightclubs" }, { "@type": "ListItem", position: 3, name: "How Tables Work", item: "https://mayfairtonight.com/how-mayfair-nightclub-tables-work" }] }) }} />
      <StickyBookingBar />
    </>
  );
}
