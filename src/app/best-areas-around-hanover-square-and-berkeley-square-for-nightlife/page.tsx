import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";
import HeroImage from "@/components/HeroImage";
import { heroImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Mayfair Nightlife by Area — Where to Go",
  description:
    "A neighbourhood-by-neighbourhood guide to Mayfair nightlife. Berkeley Square, Hanover Square, Dover Street, Swallow Street, and beyond — where every club is, how to walk between them, and what each area feels like at night.",
  alternates: { canonical: "https://mayfairtonight.com/best-areas-around-hanover-square-and-berkeley-square-for-nightlife" },
  openGraph: {
    title: "Mayfair Nightlife by Area — Where to Go",
    description: "Navigate Mayfair's nightlife geography. Club clusters, walking routes, transport, and late-night food by area.",
    url: "https://mayfairtonight.com/best-areas-around-hanover-square-and-berkeley-square-for-nightlife",
  },
};

const faqs = [
  { question: "Which area of Mayfair has the most clubs?", answer: "The Dover Street and Mayfair core area has the highest density. Scotch of St James, Dear Darling, Maddox, and Selene London are all within a five-minute walk of each other. You could visit three venues in one night without ever needing a taxi." },
  { question: "Can I walk between all the Mayfair clubs?", answer: "Most of them, yes. The furthest walk is from Berkeley Square to Cirque Le Soir near Soho, which takes about 12-15 minutes. Everything else is within 5-10 minutes on foot. Mayfair is compact and safe to walk at night." },
  { question: "Which tube station is best for Mayfair nightlife?", answer: "Green Park is the most central for Berkeley Square venues. Bond Street works for Dover Street clubs. Piccadilly Circus is ideal for Cuckoo Club and Reign. Oxford Circus is closest to BEAT London. All close around midnight, so plan your return journey by taxi or ride-hail." },
  { question: "Is it safe to walk around Mayfair at night?", answer: "Very safe. Mayfair is one of London's most affluent and well-patrolled neighbourhoods. The streets are well-lit, there are people around throughout the night, and the distances between clubs are short. Standard city awareness applies, but Mayfair is about as safe as it gets." },
  { question: "Where can I eat after clubbing in Mayfair?", answer: "Late-night options include spots around Shepherd Market for casual bites, the kebab and pizza places along Piccadilly, and a few restaurants near Berkeley Square that serve until the early hours. Some hotel restaurants also offer late-night menus." },
];

export default function NightlifeAreasPage() {
  return (
    <>
      <HeroImage src={heroImages.areasGuide} alt="Mayfair nightlife areas guide">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>{" / "}
          <Link href="/mayfair-nightlife-guide" className="hover:text-gold">Mayfair Nightlife Guide</Link>{" / "}
          <span className="text-gray-300">Nightlife Areas</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair Nightlife by Area — <span className="text-gold">Hanover Square, Berkeley Square &amp; Beyond</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl">
          Mayfair&apos;s nightclubs aren&apos;t scattered randomly — they cluster in distinct pockets, each with its own character. Understanding the geography helps you plan a smarter night.
        </p>
      </HeroImage>

      <article className="max-w-4xl mx-auto px-4 pt-8">
        <p className="text-dark-muted text-sm mb-8">
          Looking for a full club-by-club breakdown? See <Link href="/mayfair-nightclubs" className="text-gold hover:text-gold-light">all Mayfair nightclubs</Link>. For night-by-night planning, read our <Link href="/mayfair-night-out-itinerary" className="text-gold hover:text-gold-light">itinerary guide</Link>.
        </p>

        {/* Mayfair's Nightlife Geography */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Mayfair&apos;s Nightlife Geography</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>Mayfair sits between Oxford Street to the north, Piccadilly to the south, Regent Street to the east, and Park Lane to the west. Within this rectangle, nightlife concentrates in six distinct areas — each accessible on foot from the others.</p>
            <p>The beauty of Mayfair&apos;s layout is that you can walk from the most exclusive pocket around Hanover Square to the entertainment hub near Piccadilly in under fifteen minutes. Most club-hopping routes are even shorter. A night in Mayfair rewards those who understand the map.</p>
            <p>Below, we break down each area — what&apos;s there, what it feels like at night, and how it connects to the rest of the circuit.</p>
          </div>
        </section>

        {/* Area 1: Berkeley Square */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Area 1: Berkeley Square &amp; Berkeley Street</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Berkeley Square is one of Mayfair&apos;s most recognisable landmarks — a tree-lined garden square surrounded by grand Georgian townhouses. The square itself is quiet at night, but Berkeley Street, which runs south from it toward Piccadilly, is where the nightlife action happens.</p>
                <p>This strip is the hip-hop and R&amp;B corridor of Mayfair. The venues here attract a fashion-conscious, music-driven crowd. The energy is different from the house music scenes elsewhere — more urban, more style-focused, and the doors reflect that.</p>
              </div>
              <div className="border-t border-dark-border pt-3">
                <h3 className="text-gold font-semibold mb-2">Clubs in This Area</h3>
                <div className="space-y-2">
                  <div><Link href="/clubs/funky-buddha" className="text-white font-medium hover:text-gold">Funky Buddha</Link> <span className="text-dark-muted text-sm">— Legendary hip-hop spot. Intimate room, loyal crowd, discerning door. A Mayfair institution on Berkeley Street.</span></div>
                  <div><Link href="/clubs/tabu-london" className="text-white font-medium hover:text-gold">TABU London</Link> <span className="text-dark-muted text-sm">— Fashion-forward club with eclectic programming. Also on Berkeley Street, a short walk from Funky Buddha. Style-conscious door.</span></div>
                </div>
              </div>
              <div className="border-t border-dark-border pt-3">
                <p className="text-sm text-dark-muted"><strong>The walk:</strong> Funky Buddha and TABU are roughly two minutes apart on foot along Berkeley Street. Both are within five minutes of Green Park station.</p>
                <p className="text-sm text-dark-muted mt-1"><strong>The vibe:</strong> Upscale urban. Well-dressed crowds moving between venues. The street feels alive on weekends from 11pm onward.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Area 2: Hanover Square */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Area 2: Hanover Square</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Hanover Square sits in the northern part of Mayfair, close to Oxford Street. By day it&apos;s a quiet, elegant square. By night, it&apos;s the address of Mayfair&apos;s most exclusive nightclub.</p>
                <p>This is where the industry crowd gravitates. The area around Hanover Square feels deliberately quiet — no neon signs, no queues stretching down the block. The exclusivity is the point. If you&apos;re heading here, you already know where you&apos;re going.</p>
              </div>
              <div className="border-t border-dark-border pt-3">
                <h3 className="text-gold font-semibold mb-2">Clubs in This Area</h3>
                <div className="space-y-2">
                  <div><Link href="/clubs/tape-london" className="text-white font-medium hover:text-gold">Tape London</Link> <span className="text-dark-muted text-sm">— The most exclusive club in Mayfair. Members, tables, and industry connections. The hardest door in the neighbourhood. Worth the effort if you can get in.</span></div>
                </div>
              </div>
              <div className="border-t border-dark-border pt-3">
                <p className="text-sm text-dark-muted"><strong>Getting there:</strong> Bond Street station is the closest tube (5 minutes walk). From the Dover Street clubs, it&apos;s about 8-10 minutes north on foot.</p>
                <p className="text-sm text-dark-muted mt-1"><strong>The vibe:</strong> Quiet, exclusive, understated. The area doesn&apos;t announce itself. Taxis pull up, people disappear inside, and the street stays calm.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Area 3: Dover Street */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Area 3: Dover Street &amp; Mayfair Core</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>This is the densest nightlife cluster in Mayfair. Four venues within a five-minute walking radius, spanning cocktail bars, supper clubs, and late-night dance floors. If you only have one night in Mayfair, this is where to spend it.</p>
                <p>The area runs roughly from Dover Street through to Albemarle Street and the surrounding side streets. It&apos;s the heart of Mayfair&apos;s nightlife — sophisticated, varied, and endlessly walkable. You can start with cocktails, move to dinner, and end on a dance floor without ever needing to check a map.</p>
              </div>
              <div className="border-t border-dark-border pt-3">
                <h3 className="text-gold font-semibold mb-2">Clubs in This Area</h3>
                <div className="space-y-2">
                  <div><Link href="/clubs/scotch-of-st-james" className="text-white font-medium hover:text-gold">Scotch of St James</Link> <span className="text-dark-muted text-sm">— Members-club atmosphere on Mason&apos;s Yard. Intimate, exclusive, and loyal to its regulars. The door knows its people.</span></div>
                  <div><Link href="/clubs/dear-darling" className="text-white font-medium hover:text-gold">Dear Darling</Link> <span className="text-dark-muted text-sm">— Cocktail bar with a refined edge. Perfect for starting the evening. Beautiful interior, impeccable drinks, conversational atmosphere.</span></div>
                  <div><Link href="/clubs/maddox" className="text-white font-medium hover:text-gold">Maddox</Link> <span className="text-dark-muted text-sm">— Restaurant upstairs, club downstairs. The dinner-to-dance concept done right. House music, sleek design, well-dressed crowd.</span></div>
                  <div><Link href="/clubs/selene-london" className="text-white font-medium hover:text-gold">Selene London</Link> <span className="text-dark-muted text-sm">— Newer venue with an elegant approach. Building a strong reputation with a welcoming door and refined programming.</span></div>
                </div>
              </div>
              <div className="border-t border-dark-border pt-3">
                <p className="text-sm text-dark-muted"><strong>The route:</strong> Start at Dear Darling for cocktails. Walk two minutes to Maddox for dinner and dancing. Scotch of St James is a five-minute stroll through the backstreets. Selene is nearby on the same circuit.</p>
                <p className="text-sm text-dark-muted mt-1"><strong>The vibe:</strong> Sophisticated and varied. This is Mayfair at its most complete — every element of a great night within walking distance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Area 4: Swallow Street */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Area 4: Swallow Street &amp; Piccadilly</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>The southern edge of Mayfair, where it meets Piccadilly Circus, is the most accessible gateway into Mayfair nightlife. Swallow Street runs just off Piccadilly, and it&apos;s home to two of the area&apos;s most popular venues.</p>
                <p>This pocket has a different energy from the quieter streets further north. There&apos;s more foot traffic, more spontaneity, and the proximity to the West End means you might end up here after a show or dinner in Soho. The clubs here are well-established and cater to a broad crowd.</p>
              </div>
              <div className="border-t border-dark-border pt-3">
                <h3 className="text-gold font-semibold mb-2">Clubs in This Area</h3>
                <div className="space-y-2">
                  <div><Link href="/clubs/cuckoo-club" className="text-white font-medium hover:text-gold">Cuckoo Club</Link> <span className="text-dark-muted text-sm">— Two floors, two vibes. The most accessible Mayfair door. Great for groups and first-timers. Swallow Street location means you&apos;re steps from Piccadilly.</span></div>
                  <div><Link href="/clubs/reign-london" className="text-white font-medium hover:text-gold">Reign London</Link> <span className="text-dark-muted text-sm">— Large venue with live entertainment and dramatic production. Professional door, reliable guestlist. The biggest room in this part of Mayfair.</span></div>
                </div>
              </div>
              <div className="border-t border-dark-border pt-3">
                <p className="text-sm text-dark-muted"><strong>Getting there:</strong> Piccadilly Circus station is a two-minute walk. This is the easiest part of Mayfair to reach by public transport.</p>
                <p className="text-sm text-dark-muted mt-1"><strong>The vibe:</strong> Energetic and accessible. The gateway between the West End buzz and Mayfair exclusivity. Busier pavements, more options for late-night food nearby.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Area 5: Soho Border */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Area 5: Soho Border — Ganton Street &amp; Beyond</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>Technically in Soho, but very much part of the Mayfair nightlife circuit. The clubs here sit just east of Regent Street — a natural extension of a Mayfair evening, especially for those who start in the Dover Street or Piccadilly area and want something different later.</p>
                <p>Soho brings a grittier, more creative edge that contrasts with Mayfair&apos;s polish. The venues here lean into entertainment, performance, and spectacle. The walk from central Mayfair takes 10-15 minutes, crossing Regent Street into a different world.</p>
              </div>
              <div className="border-t border-dark-border pt-3">
                <h3 className="text-gold font-semibold mb-2">Clubs in This Area</h3>
                <div className="space-y-2">
                  <div><Link href="/clubs/cirque-le-soir" className="text-white font-medium hover:text-gold">Cirque Le Soir</Link> <span className="text-dark-muted text-sm">— Circus-themed nightclub with live performers, theatrical production, and a surreal atmosphere. Ganton Street, just off Carnaby. A Mayfair-circuit staple despite the Soho postcode.</span></div>
                  <div><Link href="/clubs/the-box-london" className="text-white font-medium hover:text-gold">The Box</Link> <span className="text-dark-muted text-sm">— Provocative cabaret and boundary-pushing performances. A venue that divides opinion — you either love it or find it too much. Curated door, creative dress code.</span></div>
                </div>
              </div>
              <div className="border-t border-dark-border pt-3">
                <p className="text-sm text-dark-muted"><strong>The walk from Mayfair:</strong> From Dover Street, head east along Piccadilly or cut through Burlington Arcade to Regent Street. Cross into Soho and you&apos;re there in 10-12 minutes. From Berkeley Square, allow 15 minutes.</p>
                <p className="text-sm text-dark-muted mt-1"><strong>The vibe:</strong> Creative, edgy, theatrical. The contrast with Mayfair&apos;s refinement is part of the appeal. Late-night Soho has energy that the quieter Mayfair streets don&apos;t.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Area 6: Fitzrovia */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Area 6: Fitzrovia — Margaret Street</h2>
          <div className="bg-dark-card border border-dark-border rounded-lg p-5">
            <div className="space-y-4">
              <div className="text-gray-300 space-y-3 leading-relaxed">
                <p>North of Oxford Street, in the creative district of Fitzrovia, BEAT London offers something different from the central Mayfair clubs. It&apos;s a slight detour from the main circuit, but worth the trip for anyone who wants a more relaxed, musically-driven experience.</p>
                <p>Fitzrovia has its own identity — younger, more casual, with a media and creative industry crowd. The walk from Mayfair crosses Oxford Street and enters a neighbourhood that feels distinctly different from the polished streets to the south.</p>
              </div>
              <div className="border-t border-dark-border pt-3">
                <h3 className="text-gold font-semibold mb-2">Clubs in This Area</h3>
                <div className="space-y-2">
                  <div><Link href="/clubs/beat-london" className="text-white font-medium hover:text-gold">BEAT London</Link> <span className="text-dark-muted text-sm">— The most relaxed venue on the Mayfair circuit. Smart casual dress code, designer trainers acceptable. Music-focused programming in a Fitzrovia setting.</span></div>
                </div>
              </div>
              <div className="border-t border-dark-border pt-3">
                <p className="text-sm text-dark-muted"><strong>Getting there:</strong> Oxford Circus station is the closest tube (3 minutes walk). From Hanover Square, it&apos;s about 8 minutes north on foot. From Berkeley Square, allow 12-15 minutes.</p>
                <p className="text-sm text-dark-muted mt-1"><strong>The vibe:</strong> Relaxed, creative, music-first. A welcome change of pace if the Mayfair dress code intensity isn&apos;t your thing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Walking Routes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Walking Routes</h2>
          <p className="text-gray-300 mb-4">Three suggested routes for a multi-venue Mayfair night, all on foot.</p>
          <div className="space-y-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-2">Route 1: The Core Circuit</h3>
              <p className="text-sm text-gray-300 mb-2">Dear Darling → Maddox → Scotch of St James → Selene</p>
              <p className="text-sm text-dark-muted">Total walking time: about 10 minutes across the whole route. All four venues are in the Dover Street cluster. This is the tightest circuit in Mayfair — you could visit all four in a single night without breaking stride.</p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-2">Route 2: The Hip-Hop to House Crossover</h3>
              <p className="text-sm text-gray-300 mb-2">Funky Buddha → TABU → walk north → Maddox or Scotch</p>
              <p className="text-sm text-dark-muted">Start on Berkeley Street for hip-hop, then walk 8-10 minutes north through Mayfair to the Dover Street area for house music. A great way to experience two sides of Mayfair in one night.</p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-2">Route 3: The Grand Tour</h3>
              <p className="text-sm text-gray-300 mb-2">Cuckoo Club → walk through Mayfair → Dear Darling → Maddox → walk east → Cirque Le Soir</p>
              <p className="text-sm text-dark-muted">The most ambitious route. Start at Piccadilly with Cuckoo Club, walk north through the heart of Mayfair to Dover Street, then cross into Soho for Cirque Le Soir. Total walking time: about 20 minutes end to end, but you&apos;ll be stopping at venues along the way.</p>
            </div>
          </div>
        </section>

        {/* Transport */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Transport</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Nearest Tube Stations</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• <strong>Green Park</strong> — Best for Berkeley Square, Funky Buddha, TABU</li>
                <li>• <strong>Bond Street</strong> — Best for Hanover Square, Tape London, Dover Street clubs</li>
                <li>• <strong>Piccadilly Circus</strong> — Best for Cuckoo Club, Reign, and the Soho border</li>
                <li>• <strong>Oxford Circus</strong> — Best for BEAT London and northern approach to Mayfair</li>
              </ul>
              <p className="text-xs text-dark-muted mt-2">All stations close around midnight on most nights. Friday and Saturday Night Tube services run on some lines — check before you go.</p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-4">
              <h3 className="text-gold font-semibold mb-2">Taxis &amp; Ride-Hails</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Black cabs are plentiful on Piccadilly, Berkeley Street, and Park Lane</li>
                <li>• Uber and Bolt work well — use main roads for pickup to avoid confusion</li>
                <li>• After 2am, expect surge pricing. Walking to a quieter road can reduce the fare</li>
                <li>• Park Lane and Piccadilly are the best spots to hail a black cab late at night</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Late Night Food */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Late Night Food</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>When the clubs close, hunger strikes. Here&apos;s where to eat in each area of Mayfair after dark.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-gold font-semibold mb-2">Berkeley Square Area</h3>
                <p className="text-sm text-gray-300">Shepherd Market, a short walk south, has a cluster of small restaurants and cafes. Some stay open late on weekends. The area has a village-like feel that&apos;s a welcome contrast to the club scene.</p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-gold font-semibold mb-2">Piccadilly Area</h3>
                <p className="text-sm text-gray-300">Piccadilly itself and the streets running off it have the most late-night food options. Quick bites, pizza by the slice, and a few restaurants that serve until 2-3am. The West End crowd keeps this area fed.</p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-gold font-semibold mb-2">Dover Street Area</h3>
                <p className="text-sm text-gray-300">Options are more limited in the immediate area, but a five-minute walk south toward Piccadilly opens things up. Some hotel restaurants in the area also serve late.</p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-gold font-semibold mb-2">Soho Border</h3>
                <p className="text-sm text-gray-300">Soho is London&apos;s best late-night food neighbourhood. After Cirque Le Soir or The Box, you&apos;re already in the right place. Chinatown is a ten-minute walk for some of the best post-club eating in the city.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/mayfair-night-out-itinerary" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Night Out Itineraries</p>
              <p className="text-xs text-dark-muted mt-1">Five ready-made plans for the perfect evening</p>
            </Link>
            <Link href="/best-nightclubs-in-mayfair" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Best Nightclubs</p>
              <p className="text-xs text-dark-muted mt-1">Our picks for the top Mayfair venues</p>
            </Link>
            <Link href="/mayfair-club-guestlist-guide" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Guestlist Guide</p>
              <p className="text-xs text-dark-muted mt-1">How to get on the list at any venue</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Nightlife Areas FAQ</h2>
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
          <h2 className="text-xl font-semibold text-white mb-2">Need Help Navigating Mayfair?</h2>
          <p className="text-dark-muted mb-4">Message us on WhatsApp and we&apos;ll plan your route — guestlists, tables, and venue recommendations based on where you want to be.</p>
          <WhatsAppCTA size="lg" />
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mayfairtonight.com" }, { "@type": "ListItem", position: 2, name: "Mayfair Nightlife Guide", item: "https://mayfairtonight.com/mayfair-nightlife-guide" }, { "@type": "ListItem", position: 3, name: "Nightlife Areas", item: "https://mayfairtonight.com/best-areas-around-hanover-square-and-berkeley-square-for-nightlife" }] }) }} />
      <StickyBookingBar />
    </>
  );
}
