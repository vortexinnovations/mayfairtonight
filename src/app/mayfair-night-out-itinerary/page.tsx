import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "Mayfair Night Out Itinerary — Plan the Perfect Evening",
  description:
    "Five ready-made Mayfair night out itineraries — from hip-hop to sophisticated supper clubs. Timelines, venue recommendations, dress codes, and booking tips for the perfect evening in London's most exclusive neighbourhood.",
  alternates: { canonical: "https://mayfairtonight.com/mayfair-night-out-itinerary" },
  openGraph: {
    title: "Mayfair Night Out Itinerary — Plan the Perfect Evening",
    description: "Five curated itineraries for a night out in Mayfair. Hip-hop, entertainment, sophisticated, group, and date night routes with timelines and tips.",
    url: "https://mayfairtonight.com/mayfair-night-out-itinerary",
  },
};

const faqs = [
  { question: "What time should a Mayfair night out start?", answer: "Plan to start around 7-8pm if you want dinner or cocktails first. If you're heading straight to a club, arrive between 11pm and midnight. Most Mayfair clubs don't get going until 11:30pm, so there's no rush to be the first through the door." },
  { question: "Can I visit multiple clubs in one night?", answer: "Yes, and it's common. Mayfair's clubs are clustered close together — many are within a 5-10 minute walk. Start at one venue and move on around 1am if you fancy a change. Just make sure you're on the guestlist at both venues." },
  { question: "How much should I budget for a Mayfair night out?", answer: "Without a table, expect to spend £80-150 per person on drinks across the evening. With a table, budget for your share of the minimum spend plus dinner if you're eating out first. Cocktails at a bar start around £15-18 each, and club drinks are similar." },
  { question: "Is Mayfair safe to walk around at night?", answer: "Yes. Mayfair is one of the safest areas in London, especially at night when the streets are well-lit and busy with nightlife-goers. The distances between clubs are short, and there are always people around. Taxis and ride-hails are easy to find on major roads." },
  { question: "Do I need to book everything in advance?", answer: "For the best experience, yes. Book your restaurant, get on the guestlist or reserve a table at the club, and have a backup venue in mind. Spontaneity can work midweek, but weekends reward planning. Message us on WhatsApp and we'll sort all your bookings in one conversation." },
];

export default function ItineraryPage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>{" / "}
          <Link href="/mayfair-nightlife-guide" className="hover:text-gold">Mayfair Nightlife Guide</Link>{" / "}
          <span className="text-gray-300">Night Out Itinerary</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair Night Out Itinerary — <span className="text-gold">Plan the Perfect Evening</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          Mayfair after dark is a world of its own — cocktail bars hidden behind unmarked doors, restaurants that turn into clubs, and dance floors that don&apos;t peak until 1am. Whether you want hip-hop, theatrics, a date night, or a group celebration, these five itineraries will guide your evening from first drink to last dance.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          Need to get on the guestlist first? <Link href="/mayfair-club-guestlist-guide" className="text-gold hover:text-gold-light">Read the guestlist guide</Link>. For what to wear, see the <Link href="/mayfair-club-dress-code" className="text-gold hover:text-gold-light">dress code guide</Link>.
        </p>

        {/* The Classic Mayfair Night */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">The Classic Mayfair Night — A Timeline</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-start py-2 border-b border-dark-border">
                <span className="text-gold font-medium w-24 shrink-0">7:00pm</span>
                <span className="text-gray-300">Pre-dinner cocktails. Find a bar near your dinner spot and ease into the evening. One or two drinks to set the tone.</span>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-dark-border">
                <span className="text-gold font-medium w-24 shrink-0">8:00pm</span>
                <span className="text-gray-300">Dinner. Mayfair has some of London&apos;s finest restaurants. Book somewhere close to your club — you don&apos;t want to be rushing across town later.</span>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-dark-border">
                <span className="text-gold font-medium w-24 shrink-0">10:00pm</span>
                <span className="text-gray-300">Post-dinner drinks. The gap between dinner and clubbing is the time for another cocktail or a glass of champagne. Don&apos;t over-do it — pace yourself.</span>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-dark-border">
                <span className="text-white font-medium w-24 shrink-0">11:00pm</span>
                <span className="text-white">Arrive at the club. This is the sweet spot. The venue is open, the room is filling, and the door is at its most welcoming.</span>
              </div>
              <div className="flex justify-between items-start py-2 border-b border-dark-border">
                <span className="text-gold font-medium w-24 shrink-0">12:30am</span>
                <span className="text-gray-300">Peak hours. The dance floor is full, the energy is high. This is what you came for.</span>
              </div>
              <div className="flex justify-between items-start py-2">
                <span className="text-gold font-medium w-24 shrink-0">2:00-3:00am</span>
                <span className="text-gray-300">Wind down or move on. Some venues close at 3am. If you want to keep going, a few late-night spots stay open later.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary 1: Hip-Hop Night */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Itinerary 1: The Hip-Hop Night</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div>
                <p className="text-gold font-semibold mb-1">8:30pm — Cocktails in Berkeley Square area</p>
                <p className="text-sm text-gray-300">Start with drinks near Berkeley Street. You&apos;re close to both your main venues. Keep it to two cocktails — the night is long.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">11:00pm — <Link href="/clubs/funky-buddha" className="text-gold hover:text-gold-light">Funky Buddha</Link> or <Link href="/clubs/tabu-london" className="text-gold hover:text-gold-light">TABU London</Link></p>
                <p className="text-sm text-gray-300">Both are hip-hop and R&amp;B focused and within walking distance of each other on Berkeley Street. Funky Buddha is intimate and legendary; TABU is newer and fashion-forward. Pick based on your mood — or try both if the night allows.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">1:00am — Late night at <Link href="/clubs/tape-london" className="text-gold hover:text-gold-light">Tape London</Link> (if you can get in)</p>
                <p className="text-sm text-gray-300">Tape is the ultimate late-night destination, but entry is extremely selective. You&apos;ll need a table or a strong promoter connection. If Tape isn&apos;t an option, stay at your first venue until close.</p>
              </div>
              <div className="border-t border-dark-border pt-3 mt-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-dark-muted">Dress code:</span> <span className="text-gray-300">Smart sharp. No trainers. Fitted trousers, good shoes, collared shirt or sharp knitwear.</span></div>
                  <div><span className="text-dark-muted">Budget (no table):</span> <span className="text-gray-300">£100-180 per person including cocktails and club drinks.</span></div>
                  <div><span className="text-dark-muted">Best for:</span> <span className="text-gray-300">Hip-hop lovers, birthday nights, mixed groups.</span></div>
                  <div><span className="text-dark-muted">Book ahead:</span> <span className="text-gray-300">Guestlist at Funky Buddha or TABU. Table at Tape if going late.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary 2: Entertainment Night */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Itinerary 2: The Entertainment Night</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div>
                <p className="text-gold font-semibold mb-1">8:00pm — Dinner near Piccadilly or Soho</p>
                <p className="text-sm text-gray-300">Eat somewhere between Mayfair and Soho. You&apos;ll be heading toward the entertainment venues later, so position yourself accordingly.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">10:30pm — <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">Cirque Le Soir</Link> or <Link href="/clubs/reign-london" className="text-gold hover:text-gold-light">Reign London</Link></p>
                <p className="text-sm text-gray-300">Cirque offers circus-themed entertainment with performers, fire-eaters, and theatrical surprises. Reign is a large-format venue with live performers and dramatic production. Both deliver spectacle beyond a standard club night.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">1:00am — <Link href="/clubs/the-box-london" className="text-gold hover:text-gold-light">The Box</Link> if you&apos;re feeling bold</p>
                <p className="text-sm text-gray-300">The Box takes entertainment to another level entirely — provocative, boundary-pushing cabaret that you won&apos;t forget. Not for everyone. Book through a promoter and dress with creative flair. The door curates by look and energy.</p>
              </div>
              <div className="border-t border-dark-border pt-3 mt-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-dark-muted">Dress code:</span> <span className="text-gray-300">Smart at Cirque and Reign. Creative and bold for The Box — they reward individuality.</span></div>
                  <div><span className="text-dark-muted">Budget (no table):</span> <span className="text-gray-300">£120-200 per person including dinner and drinks.</span></div>
                  <div><span className="text-dark-muted">Best for:</span> <span className="text-gray-300">Special occasions, visitors wanting a unique London experience, adventurous groups.</span></div>
                  <div><span className="text-dark-muted">Book ahead:</span> <span className="text-gray-300">Guestlist at Cirque or Reign. Promoter connection for The Box.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary 3: Sophisticated Night */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Itinerary 3: The Sophisticated Night</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div>
                <p className="text-gold font-semibold mb-1">8:00pm — Cocktails at <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light">Dear Darling</Link></p>
                <p className="text-sm text-gray-300">Start at Dear Darling for impeccably crafted cocktails in a refined setting. The bar atmosphere is conversational and elegant — the perfect warm-up for a sophisticated evening.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">10:00pm — Dinner and club at <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">Maddox</Link></p>
                <p className="text-sm text-gray-300">Maddox operates as a restaurant upstairs and a club in the basement. Book dinner and then transition downstairs as the DJ takes over. The dinner-to-dance flow is seamless. House music sets the soundtrack.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">12:30am — <Link href="/clubs/scotch-of-st-james" className="text-gold hover:text-gold-light">Scotch of St James</Link> or <Link href="/clubs/selene-london" className="text-gold hover:text-gold-light">Selene London</Link></p>
                <p className="text-sm text-gray-300">For a late-night change of scene, Scotch of St James offers a members-club intimacy with a loyal crowd. Selene is newer, elegant, and welcoming. Both are within walking distance of Maddox on the Dover Street strip.</p>
              </div>
              <div className="border-t border-dark-border pt-3 mt-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-dark-muted">Dress code:</span> <span className="text-gray-300">Elegant and refined throughout. Smart shoes essential. Women: cocktail attire. Men: tailored trousers, dress shirt, blazer optional.</span></div>
                  <div><span className="text-dark-muted">Budget (no table):</span> <span className="text-gray-300">£150-250 per person including cocktails, dinner, and club.</span></div>
                  <div><span className="text-dark-muted">Best for:</span> <span className="text-gray-300">Couples, anniversaries, impressing someone, refined taste.</span></div>
                  <div><span className="text-dark-muted">Book ahead:</span> <span className="text-gray-300">Dinner at Maddox. Guestlist at Scotch or Selene.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary 4: Big Group Night */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Itinerary 4: The Big Group Night</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div>
                <p className="text-gold font-semibold mb-1">9:00pm — Pre-drinks near Regent Street</p>
                <p className="text-sm text-gray-300">Gather the group at a bar near Piccadilly Circus or Regent Street. Get everyone together before heading to the main venue. Large groups are easier to manage when you arrive as one unit.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">11:00pm — <Link href="/clubs/cuckoo-club" className="text-gold hover:text-gold-light">Cuckoo Club</Link> (both floors)</p>
                <p className="text-sm text-gray-300">Cuckoo Club is ideal for groups. Two distinct floors mean variety — the main room is high-energy, the Garden room below is more intimate. The door is accessible, the guestlist is reliable, and the space can handle larger parties. For big groups, consider a table through <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">London Bottle Service</a> to guarantee everyone gets in.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">1:30am — Late-night options</p>
                <p className="text-sm text-gray-300">If the group wants to keep going, <Link href="/clubs/reign-london" className="text-gold hover:text-gold-light">Reign London</Link> has the space for large groups late at night. Or split up — half to Reign, half to <Link href="/clubs/cirque-le-soir" className="text-gold hover:text-gold-light">Cirque Le Soir</Link> — and compare notes tomorrow.</p>
              </div>
              <div className="border-t border-dark-border pt-3 mt-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-dark-muted">Dress code:</span> <span className="text-gray-300">Smart casual at Cuckoo. Standard Mayfair smart at Reign. Brief your group in advance — one person in trainers can hold everyone up.</span></div>
                  <div><span className="text-dark-muted">Budget (no table):</span> <span className="text-gray-300">£80-140 per person. Tables recommended for 8+ people.</span></div>
                  <div><span className="text-dark-muted">Best for:</span> <span className="text-gray-300">Birthdays, stag/hen nights, work socials, reunion groups.</span></div>
                  <div><span className="text-dark-muted">Book ahead:</span> <span className="text-gray-300">Guestlist or table at Cuckoo. Backup guestlist at Reign.</span></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-dark-muted mt-3">
            More group tips: <Link href="/best-clubs-for-groups-in-mayfair" className="text-gold hover:text-gold-light">Best clubs for groups in Mayfair</Link>
          </p>
        </section>

        {/* Itinerary 5: Date Night */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Itinerary 5: The Date Night</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div>
                <p className="text-gold font-semibold mb-1">7:30pm — Cocktails at <Link href="/clubs/dear-darling" className="text-gold hover:text-gold-light">Dear Darling</Link></p>
                <p className="text-sm text-gray-300">Dear Darling is the ideal date night opening. Intimate, beautifully designed, and the cocktails are among the best in Mayfair. Sit at the bar or grab a corner table. The atmosphere encourages conversation.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">9:00pm — Dinner at <Link href="/clubs/maddox" className="text-gold hover:text-gold-light">Maddox</Link></p>
                <p className="text-sm text-gray-300">Walk a few minutes to Maddox for dinner in their restaurant. The food is excellent and the setting is sleek without being cold. Book a table with a view of the room. Take your time — there&apos;s no rush.</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-1">11:30pm — Dancing downstairs at Maddox</p>
                <p className="text-sm text-gray-300">After dinner, head downstairs where the club is in full swing. House music, a well-dressed crowd, and you&apos;re already inside — no queue, no door stress. Dance until you&apos;re ready to call it a night.</p>
              </div>
              <div className="border-t border-dark-border pt-3 mt-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-dark-muted">Dress code:</span> <span className="text-gray-300">Your best. This is a date — dress to impress. Elegant, refined, confident.</span></div>
                  <div><span className="text-dark-muted">Budget:</span> <span className="text-gray-300">£200-350 for two including cocktails, dinner, and club drinks.</span></div>
                  <div><span className="text-dark-muted">Best for:</span> <span className="text-gray-300">Dates, anniversaries, impressing someone new.</span></div>
                  <div><span className="text-dark-muted">Book ahead:</span> <span className="text-gray-300">Dinner reservation at Maddox. Everything else flows naturally.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Around Mayfair */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Getting Around Mayfair</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>One of Mayfair&apos;s great advantages is that everything is walkable. Most clubs are within a 10-15 minute walk of each other, and the streets are safe and well-lit at night.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-gold font-semibold mb-2">Club Clusters</h3>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Berkeley Street:</strong> Funky Buddha, TABU — 2 min walk between</li>
                  <li>• <strong>Dover Street area:</strong> Scotch, Dear Darling, Maddox, Selene — all within 5 min</li>
                  <li>• <strong>Swallow Street:</strong> Cuckoo Club, Reign — next to Piccadilly Circus</li>
                  <li>• <strong>Soho border:</strong> Cirque Le Soir, The Box — 10 min walk from Mayfair core</li>
                </ul>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-gold font-semibold mb-2">Taxi Tips</h3>
                <ul className="text-sm space-y-1">
                  <li>• Black cabs cruise Berkeley Street and Piccadilly all night</li>
                  <li>• Uber pickup: use a main road — side streets cause confusion</li>
                  <li>• After 2am, surge pricing kicks in — consider walking to a quieter pickup spot</li>
                  <li>• Green Park and Bond Street tube stations close around midnight</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-dark-muted">
              For a full area breakdown: <Link href="/best-areas-around-hanover-square-and-berkeley-square-for-nightlife" className="text-gold hover:text-gold-light">Mayfair nightlife by area</Link>
            </p>
          </div>
        </section>

        {/* Before You Go Checklist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Before You Go — Checklist</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-2 text-sm">
              {[
                "Guestlist or table booked and confirmed (message us on WhatsApp if not)",
                "Dress code checked for your specific venue",
                "Valid photo ID — passport or driving licence",
                "Phone fully charged (you'll need it for taxis home)",
                "Some cash for tips, cloakroom, and late-night food",
                "Backup venue in mind in case your first choice is at capacity",
                "Group briefed on dress code and arrival time",
                "Restaurant reservation booked if doing dinner first",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 py-1">
                  <span className="text-gold mt-0.5">&#9744;</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-dark-muted mt-3">
            Planning for <a href="https://londonclubstonight.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">tonight specifically</a>? Check what&apos;s on right now.
          </p>
        </section>

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/mayfair-club-guestlist-guide" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Guestlist Guide</p>
              <p className="text-xs text-dark-muted mt-1">How to get on the list at any venue</p>
            </Link>
            <Link href="/mayfair-club-dress-code" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Dress Code Guide</p>
              <p className="text-xs text-dark-muted mt-1">What to wear for each itinerary</p>
            </Link>
            <Link href="/where-to-go-out-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Where to Go Out</p>
              <p className="text-xs text-dark-muted mt-1">The complete guide to Mayfair nightlife</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Night Out FAQ</h2>
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
          <h2 className="text-xl font-semibold text-white mb-2">Plan Your Night With Us</h2>
          <p className="text-dark-muted mb-4">Message us on WhatsApp and we&apos;ll help you plan the perfect Mayfair evening — guestlists, tables, and recommendations, all in one conversation.</p>
          <WhatsAppCTA size="lg" />
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mayfairtonight.com" }, { "@type": "ListItem", position: 2, name: "Mayfair Nightlife Guide", item: "https://mayfairtonight.com/mayfair-nightlife-guide" }, { "@type": "ListItem", position: 3, name: "Night Out Itinerary", item: "https://mayfairtonight.com/mayfair-night-out-itinerary" }] }) }} />
      <StickyBookingBar />
    </>
  );
}
