export interface NightInfo {
  slug: string;
  day: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  vibe: string;
  bestFor: string;
  recommendation: string;
}

export const nights: NightInfo[] = [
  {
    slug: "monday",
    day: "Monday",
    title: "Monday Night in Mayfair",
    metaTitle: "Monday Night Mayfair — Clubs Open Monday London | Mayfair Tonight",
    metaDescription:
      "Find out which clubs are open on Monday night in Mayfair and London. Quiet start to the week — here's where the industry crowd goes.",
    h1: "Monday Night in Mayfair",
    intro:
      "Monday in Mayfair has more going on than most people realise. Cirque Le Soir opens its doors on Mondays, which means you can get a full nightclub experience with circus performers, hip-hop, and a proper party atmosphere — even at the start of the week. The crowd on a Monday tends to be smaller and more intimate, which is often a better experience than the weekend rush.",
    vibe: "Intimate, theatrical, surprisingly lively",
    bestFor: "Those who want a real nightclub experience without the weekend crowds",
    recommendation:
      "Cirque Le Soir is your best option on a Monday — full circus performers, hip-hop and RnB, and a genuinely great atmosphere. Book a table to guarantee entry. It's one of London's most underrated Monday nights.",
  },
  {
    slug: "tuesday",
    day: "Tuesday",
    title: "Tuesday Night in Mayfair",
    metaTitle: "Tuesday Night Mayfair — Clubs Open Tuesday London | Mayfair Tonight",
    metaDescription:
      "Which clubs are open on Tuesday in Mayfair? The midweek scene is building — here's where early-week party people head.",
    h1: "Tuesday Night in Mayfair",
    intro:
      "Tuesday in Mayfair punches well above the midweek average. Both Tape London and Reign London open on Tuesdays, giving you access to two of Mayfair's most impressive venues with smaller, more intimate crowds than the weekend. Tuesday at Tape in particular is one of the most exclusive nights of the week — easier to get in, but still delivering the full Tape experience.",
    vibe: "Exclusive, intimate, midweek energy",
    bestFor: "Those who want Tape or Reign without the weekend chaos",
    recommendation:
      "Tuesday is better than you think. Tape London is the standout — exclusive, intimate, and easier to access than a Friday or Saturday. Reign London also opens Tuesdays with the full showclub experience. Both venues offer table booking, and Tuesday crowds tend to be more sociable.",
  },
  {
    slug: "wednesday",
    day: "Wednesday",
    title: "Wednesday Night in Mayfair",
    metaTitle: "Best Wednesday Night London — Mayfair Clubs Open Wednesday | Mayfair Tonight",
    metaDescription:
      "Wednesday is when Mayfair's midweek nightlife kicks off. Discover which clubs are open and where the best Wednesday night parties are in London.",
    h1: "Wednesday Night in Mayfair",
    intro:
      "Wednesday is when Mayfair nightlife properly begins. The big clubs open their doors, the tables fill up, and the energy of the weekend starts building three days early. Wednesday nights in Mayfair attract a savvy crowd — people who know that midweek clubbing often has better vibes, shorter queues, and a more sociable atmosphere than the weekend rush.",
    vibe: "Midweek buzz, sociable, less crowded than weekends",
    bestFor: "Midweek party people, sociable groups, those who want big-club energy without weekend crowds",
    recommendation:
      "Wednesday is brilliant in Mayfair. Cirque Le Soir runs its full circus-nightclub experience on Wednesdays — one of the best midweek nights in London. TABU opens for a dark, fashion-forward vibe. Selene is a refined choice for house music and cocktails. Cuckoo Club does its signature two-floor party. The Box opens for something edgier and theatrical. Note: Funky Buddha doesn't open on Wednesdays.",
  },
  {
    slug: "thursday",
    day: "Thursday",
    title: "Thursday Night in Mayfair",
    metaTitle: "Thursday Night Out Mayfair — Best Thursday Clubs London | Mayfair Tonight",
    metaDescription:
      "Thursday night is huge in Mayfair. Nearly every club is open and the weekend starts early. Find the best Thursday night clubs in London.",
    h1: "Thursday Night in Mayfair",
    intro:
      "Thursday is the new Friday in Mayfair — and it has been for years. Nearly every club opens its doors, the energy is high, and the crowd is a mix of locals starting their weekend early and international visitors making the most of London. Thursday nights often have the best atmosphere because the crowd is genuinely up for it, not just going through the motions.",
    vibe: "High energy, the weekend starts here, buzzing",
    bestFor: "Everyone — Thursday is the most versatile night in Mayfair",
    recommendation:
      "Thursday is the sweet spot. TABU delivers its dark, fashion-forward vibe. Reign London opens for shows and bottle service. For pure party energy, Funky Buddha and Cuckoo Club are both excellent on a Thursday. BEAT London is the go-to for high-energy music. Maddox is the best dinner-to-dance option. Note: Scotch only opens Friday and Saturday, so skip that one on a Thursday.",
  },
  {
    slug: "friday",
    day: "Friday",
    title: "Friday Night in Mayfair",
    metaTitle: "Best Friday Night London Clubs — Mayfair Friday Night Out | Mayfair Tonight",
    metaDescription:
      "Friday night in Mayfair — every major club is open and the energy is electric. Find the best Friday night clubs and events in London.",
    h1: "Friday Night in Mayfair",
    intro:
      "Friday night in Mayfair is the main event. Every major club is open, the tables are booked out, and the streets buzz with energy from 10pm onwards. This is when London's nightlife hits its peak. The crowd is a mix of Londoners celebrating the end of the work week and visitors from around the world. Expect queues, expect energy, and expect a brilliant night if you plan it right.",
    vibe: "Peak nightlife, electric, packed, celebratory",
    bestFor: "Anyone who wants the full London Friday night experience",
    recommendation:
      "Friday is when you go big. Tape London for exclusivity. Cirque Le Soir for entertainment. Funky Buddha or BEAT London for pure party energy. If you want something more refined, Maddox's dinner-to-dance offering is perfect for a Friday. The Box for something provocative and unforgettable. Reign London for world-class shows.",
  },
  {
    slug: "saturday",
    day: "Saturday",
    title: "Saturday Night in Mayfair",
    metaTitle: "Saturday Night Out London — Best Saturday Clubs Mayfair | Mayfair Tonight",
    metaDescription:
      "Saturday night in Mayfair is legendary. Every club is open, the energy peaks, and the night goes late. Find the best Saturday night out in London.",
    h1: "Saturday Night in Mayfair",
    intro:
      "Saturday night in Mayfair is the pinnacle. Every venue is at capacity, the DJs bring their best sets, and the energy is unmatched. This is the night that Mayfair was built for. Whether you want exclusivity, entertainment, house music, or hip-hop — Saturday delivers it all. Book ahead. Saturday tables sell out fast and guestlists fill up. Plan it, book it, enjoy it.",
    vibe: "Peak, sold-out energy, legendary, the big one",
    bestFor: "The main event — this is the night everyone is out",
    recommendation:
      "Saturday is about going all-in. Tape London is the pinnacle of exclusivity. Reign London delivers spectacular shows with aerial acts. For raw party energy, Funky Buddha, BEAT, and Luna Club are all brilliant. Cirque Le Soir's Saturday is the wildest night in London. The Box pushes boundaries. And Selene offers refined elegance for those who want something more sophisticated.",
  },
  {
    slug: "sunday",
    day: "Sunday",
    title: "Sunday Night in Mayfair",
    metaTitle: "Clubs Open Sunday London — Sunday Night Mayfair | Mayfair Tonight",
    metaDescription:
      "Which clubs are open on Sunday in London? The weekend isn't over yet — here's where to extend your Saturday night into Sunday.",
    h1: "Sunday Night in Mayfair",
    intro:
      "Sunday in Mayfair is for those who refuse to let the weekend end. Most of the big Mayfair clubs are closed, but the night isn't over. A handful of bars and late-night venues stay open for the after-party crowd. Sunday is about extending the weekend, not starting a new one.",
    vibe: "After-party, extended weekend, wind-down or keep going",
    bestFor: "Night owls, after-party seekers, those extending a big Saturday",
    recommendation:
      "Sunday has two reliable options in Mayfair. Tape London runs on Sundays — one of the only proper Sunday club nights in central London. Dear Darling is also open, offering cocktails and a bar atmosphere that carries late into the night. Between these two, Sunday in Mayfair is better than its reputation suggests.",
  },
];

export function getNightBySlug(slug: string): NightInfo | undefined {
  return nights.find((n) => n.slug === slug);
}
