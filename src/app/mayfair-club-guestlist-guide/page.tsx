import { Metadata } from "next";
import Link from "next/link";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "Mayfair Club Guestlist Guide — How to Get On the List",
  description:
    "Everything you need to know about getting on the guestlist at Mayfair nightclubs. How it works, which venues offer it, arrival times, and insider tips from promoters who manage the lists.",
  alternates: { canonical: "https://mayfairtonight.com/mayfair-club-guestlist-guide" },
  openGraph: {
    title: "Mayfair Club Guestlist Guide — How to Get On the List",
    description: "Step-by-step guide to getting on the guestlist at every Mayfair club. Venue-by-venue breakdown, tips, and what to expect.",
    url: "https://mayfairtonight.com/mayfair-club-guestlist-guide",
  },
};

const faqs = [
  { question: "Is getting on a Mayfair club guestlist free?", answer: "Yes. Guestlist is always free to arrange through a promoter. You may still face a cover charge at the door depending on the venue and the night, but the guestlist itself costs nothing. It simply guarantees your name is expected at the door." },
  { question: "How far in advance should I book a guestlist?", answer: "For weekends, book at least 24-48 hours ahead. Fridays and Saturdays fill up fast at popular venues like Cirque Le Soir and Reign London. Midweek nights are more flexible — same-day bookings usually work. Message us on WhatsApp for the fastest confirmation." },
  { question: "Can an all-male group get on the guestlist?", answer: "It depends on the venue. Some clubs like Cuckoo Club and BEAT London are more flexible. Others like Tape London and Scotch of St James are very difficult for all-male groups on guestlist alone. A table booking is the most reliable solution for all-male groups at strict venues." },
  { question: "What happens if I arrive late for guestlist?", answer: "Most venues honour guestlist until around midnight. After that, it depends on capacity. If the club is full, even a guestlist name won't get you through the door. Arriving between 11pm and 11:30pm is the safest window." },
  { question: "Do I still need to queue if I'm on the guestlist?", answer: "Usually yes, but the queue is shorter. Guestlist puts you in a priority lane, not a skip-the-queue pass. Table bookings are the only way to genuinely bypass the queue at most Mayfair venues." },
  { question: "Can I add people to the guestlist on the night?", answer: "Sometimes, but don't count on it. Adding names last-minute depends on the venue and how busy the night is. Always confirm your final group size and names with your promoter by early evening to avoid issues at the door." },
];

export default function GuestlistGuidePage() {
  return (
    <>
      <article className="max-w-4xl mx-auto px-4 pt-8">
        <nav className="text-sm text-dark-muted mb-4">
          <Link href="/" className="hover:text-gold">Tonight</Link>{" / "}
          <Link href="/mayfair-nightclubs" className="hover:text-gold">Mayfair Nightclubs</Link>{" / "}
          <span className="text-gray-300">Guestlist Guide</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Mayfair Club Guestlist Guide — <span className="text-gold">How to Get On the List</span>
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          The guestlist is how most people get into Mayfair clubs without booking a table. It&apos;s free, it&apos;s simple, and it works — if you know the rules. This guide breaks down exactly how guestlists operate at every major Mayfair venue, what to expect, and how to make sure your name actually means something at the door.
        </p>
        <p className="text-dark-muted text-sm mb-8">
          Already know you want a table? Read <Link href="/how-mayfair-nightclub-tables-work" className="text-gold hover:text-gold-light">how Mayfair tables work</Link>. For door policies, see our <Link href="/mayfair-club-entry-rules" className="text-gold hover:text-gold-light">entry rules guide</Link>.
        </p>

        {/* What Is a Guestlist? */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">What Is a Guestlist?</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>A guestlist in Mayfair is a pre-arranged entry list managed by promoters and the club&apos;s own team. Your name goes on the list, and when you arrive at the door, the team checks you off. It&apos;s not a ticket and it&apos;s not a reservation — it&apos;s an expectation that you&apos;re coming.</p>
            <p>In practice, being on the guestlist tells the door team that someone vouches for you. It smooths the entry process, often reduces or eliminates cover charges, and gives you priority over people walking up cold. At busier venues, it can be the difference between getting in and being turned away.</p>
            <p>Guestlists are arranged through promoters — people who work with the clubs to fill the room with the right crowd. You contact a promoter, give them your name, group size, and arrival time, and they handle the rest. There&apos;s no charge for this service.</p>
          </div>
        </section>

        {/* How to Get On the Guestlist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">How to Get On the Guestlist</h2>
          <div className="space-y-3">
            {[
              { step: "Contact a promoter", detail: "Message us on WhatsApp or reach out to a promoter who works with your target venue. Tell them which club, which night, and your group size. The earlier you do this, the better your chances on busy nights." },
              { step: "Provide your details", detail: "Full name (as it appears on your ID), number of guests, and the ratio of men to women in your group. Some venues ask for surnames of everyone in the group. Have this ready." },
              { step: "Get confirmation", detail: "A good promoter will confirm your guestlist placement and give you specific instructions — arrival time, which entrance to use, and any cover charge to expect." },
              { step: "Arrive on time", detail: "The arrival window matters. Most guestlists are honoured between 10:30pm and midnight. Arriving at 11-11:30pm is the sweet spot — the club is open but not yet at capacity." },
              { step: "Check in at the door", detail: "Give the door team your full name and mention which promoter arranged your guestlist. Be polite, have your ID ready, and follow the dress code. The door team will check you off and let you through." },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Step {i + 1}: {item.step}</h3>
                <p className="text-sm text-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Guestlist vs Walk-Up vs Tables */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Guestlist vs Walk-Up vs Tables</h2>
          <p className="text-gray-300 mb-4">Three ways to get into a Mayfair club. Here&apos;s an honest comparison.</p>
          <div className="space-y-4">
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Guestlist</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-green-400 font-medium mb-1">Pros</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>+ Free to arrange</li>
                    <li>+ Priority over walk-ups</li>
                    <li>+ Reduced or no cover charge</li>
                    <li>+ Available at most venues</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 font-medium mb-1">Cons</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>- Not guaranteed entry at capacity</li>
                    <li>- Time-sensitive arrival window</li>
                    <li>- No reserved space inside</li>
                    <li>- Harder for all-male groups</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Walk-Up (No Booking)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-green-400 font-medium mb-1">Pros</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>+ No planning required</li>
                    <li>+ Spontaneous — decide on the night</li>
                    <li>+ Works at some relaxed venues</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 font-medium mb-1">Cons</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>- High rejection risk at top venues</li>
                    <li>- Full cover charge</li>
                    <li>- Longest queue</li>
                    <li>- Nearly impossible at Tape, Scotch, The Box</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Table Booking</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-green-400 font-medium mb-1">Pros</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>+ Guaranteed entry</li>
                    <li>+ Skip the queue entirely</li>
                    <li>+ Your own space and bottle service</li>
                    <li>+ Works for any group composition</li>
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 font-medium mb-1">Cons</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>- Minimum spend required</li>
                    <li>- Needs advance booking</li>
                    <li>- Cost adds up quickly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guestlist Rules by Venue */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Guestlist Rules by Venue</h2>
          <p className="text-gray-300 mb-4">Every club handles guestlist differently. Here&apos;s what to expect at each.</p>
          <div className="space-y-3">
            {[
              { name: "Tape London", slug: "tape-london", info: "Guestlist is extremely limited. Tape operates primarily on tables and member referrals. If guestlist is available, it will be for small mixed groups only. Arrive by 11pm sharp. Expect a selective door regardless of your list placement." },
              { name: "Cirque Le Soir", slug: "cirque-le-soir", info: "Guestlist works well here, especially midweek. Weekend guestlists fill fast — book 48 hours ahead. Arrive before midnight. Cover charge may apply on Saturdays even with guestlist. Mixed groups preferred." },
              { name: "Reign London", slug: "reign-london", info: "Reliable guestlist system. Book through a promoter and you will be looked after. Arrive between 11pm and midnight. Standard Mayfair dress code. Cover charge varies by night — your promoter will confirm." },
              { name: "TABU London", slug: "tabu-london", info: "Guestlist available but the door is style-conscious. Your outfit matters as much as your name on the list. Mixed groups and well-dressed guests get priority. Arrive by 11:30pm." },
              { name: "Funky Buddha", slug: "funky-buddha", info: "Guestlist works but the door rewards familiarity. First-timers should book through a well-connected promoter. Arrive by 11pm on weekends. Dress sharp — the door here is fashion-aware." },
              { name: "Cuckoo Club", slug: "cuckoo-club", info: "One of the easiest Mayfair clubs for guestlist. Reliable, accessible, and the door is welcoming. Great starting point for Mayfair newcomers. Arrive by 11:30pm. Smart casual dress code." },
              { name: "Scotch of St James", slug: "scotch-of-st-james", info: "Difficult for guestlist. Members-club atmosphere means the door is selective even with a list placement. A strong promoter connection is essential. Small mixed groups only. Dress impeccably." },
              { name: "Dear Darling", slug: "dear-darling", info: "Bar-first atmosphere makes guestlist less critical, but it still helps on busy nights. Walk-ups can work earlier in the evening. Smart dress code. Relaxed but polished vibe." },
              { name: "Maddox", slug: "maddox", info: "Guestlist is available for the club nights. Dinner guests transition naturally downstairs. For club-only entry, book through a promoter. Arrive by 11pm. House music crowd — dress with intention." },
              { name: "The Box", slug: "the-box-london", info: "Guestlist exists but the door is curated by look and energy. Being on the list helps but does not guarantee entry. Creative, bold dressing is rewarded. Book through a promoter and arrive by 11pm." },
              { name: "Selene London", slug: "selene-london", info: "Guestlist is accessible and the door is welcoming. Newer venue still building its regular crowd. Book through a promoter for the smoothest experience. Elegant dress code — think refined, not flashy." },
              { name: "BEAT London", slug: "beat-london", info: "Most relaxed guestlist in the Mayfair circuit. Smart casual works. Clean designer trainers are acceptable. Book ahead for weekends but same-day guestlist often works midweek." },
              { name: "Luna Club London", slug: "luna-club-london", info: "Guestlist is accessible as the venue builds its reputation. Good option for groups who want a Mayfair experience without the hardest doors. Book through a promoter and arrive by 11:30pm." },
            ].map((venue) => (
              <div key={venue.slug} className="bg-dark-card border border-dark-border rounded-lg p-4">
                <Link href={`/clubs/${venue.slug}`} className="text-white font-semibold hover:text-gold">{venue.name}</Link>
                <p className="text-sm text-gray-300 mt-1">{venue.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips for Guestlist Success */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Tips for Guestlist Success</h2>
          <div className="space-y-3">
            {[
              { tip: "Arrive in the sweet spot", detail: "Between 11pm and 11:30pm. This is when the door is most accommodating and the venue is filling up. Too early feels awkward, too late risks capacity rejection." },
              { tip: "Nail the dress code", detail: "Guestlist does not exempt you from dress code standards. Smart shoes, fitted clothing, no sportswear. Check our dress code guide for venue-specific rules." },
              { tip: "Keep your group tight", detail: "Smaller groups (2-6 people) have an easier time than large parties. If you have a big group, consider splitting into smaller units and entering separately." },
              { tip: "Be genuinely polite at the door", detail: "Door staff remember faces and attitudes. A respectful, friendly approach goes further than name-dropping or showing attitude. Say please, have your ID ready, and be patient." },
              { tip: "Have a backup venue", detail: "Even with guestlist, capacity limits can stop you. Know your second-choice venue and have guestlist arranged there too. We can sort multiple venues in one WhatsApp conversation." },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-dark-border rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">{i + 1}. {item.tip}</h3>
                <p className="text-sm text-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-dark-muted mt-3">
            Full dress code details: <Link href="/mayfair-club-dress-code" className="text-gold hover:text-gold-light">Mayfair club dress code guide</Link>
          </p>
        </section>

        {/* When Guestlist Won't Work */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">When Guestlist Won&apos;t Work</h2>
          <div className="text-gray-300 space-y-4 leading-relaxed">
            <p>Guestlist is brilliant for most situations, but there are times when it simply won&apos;t be enough. Being honest about this saves you a wasted evening.</p>
            <div className="bg-dark-card border border-dark-border rounded-lg p-5">
              <h3 className="text-gold font-semibold mb-3">Consider a table instead if...</h3>
              <ul className="text-sm space-y-2">
                <li>• You have an all-male group of 4 or more heading to a strict venue</li>
                <li>• It&apos;s a peak night (NYE, bank holiday weekends, special events)</li>
                <li>• You want guaranteed entry regardless of arrival time</li>
                <li>• Your group is larger than 8 people</li>
                <li>• You&apos;re targeting Tape London or Scotch of St James specifically</li>
                <li>• You want your own space rather than standing on the dance floor</li>
              </ul>
            </div>
            <p className="text-sm text-dark-muted">
              If a table makes more sense for your night, <a href="https://londonbottleservice.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light">London Bottle Service</a> handles bookings at every Mayfair venue. You can also read our <Link href="/how-mayfair-nightclub-tables-work" className="text-gold hover:text-gold-light">guide to how tables work</Link> to understand what&apos;s involved.
            </p>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/mayfair-club-entry-rules" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Entry Rules</p>
              <p className="text-xs text-dark-muted mt-1">Door policies at every Mayfair venue</p>
            </Link>
            <Link href="/how-mayfair-nightclub-tables-work" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">How Tables Work</p>
              <p className="text-xs text-dark-muted mt-1">Minimum spends, bottle service, and the VIP experience</p>
            </Link>
            <Link href="/mayfair-club-dress-code" className="bg-dark-card border border-dark-border rounded-lg p-4 hover:border-gold/30 transition-colors">
              <p className="font-medium text-white">Dress Code Guide</p>
              <p className="text-xs text-dark-muted mt-1">What to wear to every Mayfair club</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Guestlist FAQ</h2>
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
          <h2 className="text-xl font-semibold text-white mb-2">Get On the Guestlist Tonight</h2>
          <p className="text-dark-muted mb-4">Message us on WhatsApp and we&apos;ll add you to the guestlist at any Mayfair club. Free, fast, sorted.</p>
          <WhatsAppCTA size="lg" />
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mayfairtonight.com" }, { "@type": "ListItem", position: 2, name: "Mayfair Nightclubs", item: "https://mayfairtonight.com/mayfair-nightclubs" }, { "@type": "ListItem", position: 3, name: "Guestlist Guide", item: "https://mayfairtonight.com/mayfair-club-guestlist-guide" }] }) }} />
      <StickyBookingBar />
    </>
  );
}
