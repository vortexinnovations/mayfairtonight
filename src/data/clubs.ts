export interface Club {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  area: string;
  musicPolicy: string[];
  dressCode: string;
  dressCodeNotes: string;
  tableMinimum: string;
  openNights: string[];
  openingTime: string;
  closingTime: string;
  vibe: string;
  insiderTip: string;
  whatToExpect: string;
  bestFor: string;
  status: "open" | "closed";
  closedMessage?: string;
}

// ─── OPEN VENUES ────────────────────────────────────────────

export const clubs: Club[] = [
  {
    slug: "tape-london",
    name: "Tape London",
    tagline: "Mayfair's most exclusive members club",
    description:
      "Tape is where celebrities and high-rollers disappear to after midnight. Tucked away on Hanover Square, this members-only venue is one of the hardest doors in London. The music is hip-hop heavy, the crowd is A-list, and the tables don't come cheap. If you want the most exclusive night out in Mayfair, this is it.",
    location: "Hanover Square, Mayfair",
    area: "Mayfair",
    musicPolicy: ["Hip-Hop", "RnB", "Commercial"],
    dressCode: "Smart and stylish. No trainers, no sportswear. Think designer — this is Mayfair's most exclusive room.",
    dressCodeNotes: "Tape has one of the strictest doors in London. Dress to impress or don't bother.",
    tableMinimum: "£1,500",
    openNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingTime: "22:00",
    closingTime: "03:30",
    vibe: "Exclusive, celebrity-heavy, intimate",
    insiderTip:
      "Tape is invite-only most nights. Book a table through a promoter — walking up to the door rarely works.",
    whatToExpect:
      "A dark, intimate room with incredible sound. The crowd is small and handpicked. Expect to see faces you recognise. The dance floor is compact but the energy is unmatched when it gets going after 1am.",
    bestFor: "Those who want the most exclusive night possible",
    status: "open",
  },
  {
    slug: "cirque-le-soir",
    name: "Cirque Le Soir",
    tagline: "The wildest show in London nightlife",
    description:
      "Cirque Le Soir is not just a nightclub — it's a full-blown circus. Fire breathers, contortionists, snake charmers, and performers roam the venue while you party. The music is hip-hop and RnB, the crowd is international and celebrity-heavy, and every night feels like an event. Based on Ganton Street just off Carnaby, it's one of London's most unique nights out.",
    location: "Ganton Street, Soho",
    area: "Soho",
    musicPolicy: ["Hip-Hop", "RnB"],
    dressCode: "Smart casual. No sportswear, no shorts. Smart jeans are fine with the right shoes.",
    dressCodeNotes: "The door is firm but fair. Look put-together and you'll be fine.",
    tableMinimum: "£1,000",
    openNights: ["Wednesday", "Friday", "Saturday"],
    openingTime: "22:30",
    closingTime: "03:30",
    vibe: "Wild, theatrical, high-energy",
    insiderTip:
      "Get there before midnight to catch the first performances. The shows happen throughout the night but the early ones set the tone.",
    whatToExpect:
      "You'll walk in and immediately be greeted by performers. The venue is dark and theatrical — think burlesque meets carnival. Tables surround the central dance floor, and performers weave through the crowd all night. It's loud, it's wild, and it's unforgettable.",
    bestFor: "Groups who want entertainment with their night out",
    status: "open",
  },
  {
    slug: "reign-london",
    name: "Reign London",
    tagline: "Mayfair's most extravagant showclub",
    description:
      "Reign takes nightlife and turns it into theatre. Based on Piccadilly, this showclub features aerial acrobats, live singers, and jaw-dropping performances between DJ sets. The production value is insane — think Las Vegas meets Mayfair. If you want your night to feel like an event, Reign delivers every single time.",
    location: "Piccadilly, Mayfair",
    area: "Mayfair",
    musicPolicy: ["Commercial", "House", "Hip-Hop"],
    dressCode: "Smart dress code. Collared shirts for men, heels or smart shoes for women. No casual wear.",
    dressCodeNotes: "Standard Mayfair dress code applies. Dress sharp.",
    tableMinimum: "£1,000",
    openNights: ["Thursday", "Friday", "Saturday"],
    openingTime: "22:00",
    closingTime: "03:30",
    vibe: "Extravagant, theatrical, glamorous",
    insiderTip:
      "Book a table near the stage for the best view of the performances. The aerial acts happen directly overhead.",
    whatToExpect:
      "A grand, multi-level venue with a central stage. Throughout the night, performers take to the stage and the air — aerial silks, fire acts, live vocals. Between performances, the DJ keeps the energy high. The crowd is dressed up and ready for a big night.",
    bestFor: "Special occasions and groups who want a show",
    status: "open",
  },
  {
    slug: "tabu-london",
    name: "TABU London",
    tagline: "Japanese underground meets Mayfair nightlife",
    description:
      "TABU brings a completely different energy to Mayfair. The Japanese underground theme runs through everything — the decor, the lighting, the atmosphere. It's dark, moody, and cool. The music is hip-hop and RnB, the crowd is fashionable, and the vibe is effortlessly stylish. This is where the fashion crowd goes.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["Hip-Hop", "RnB"],
    dressCode: "Smart and fashion-forward. Streetwear can work if it's high-end. No basic trainers or sportswear.",
    dressCodeNotes: "TABU attracts a fashion-conscious crowd. Dress accordingly.",
    tableMinimum: "£1,000",
    openNights: ["Thursday", "Friday", "Saturday"],
    openingTime: "22:00",
    closingTime: "03:30",
    vibe: "Dark, moody, fashion-forward",
    insiderTip:
      "TABU is popular with the fashion and music industry crowd. Thursday nights tend to have a more intimate vibe.",
    whatToExpect:
      "A sleek, dark venue with Japanese-inspired design elements. The lighting is moody, the music is on point, and the crowd looks like they just walked off a runway. It's not as rowdy as some Mayfair clubs — the vibe is cooler and more composed.",
    bestFor: "Fashion-conscious crowds who want something different",
    status: "open",
  },
  {
    slug: "funky-buddha",
    name: "Funky Buddha",
    tagline: "Mayfair's legendary late-night institution",
    description:
      "Funky Buddha on Berkeley Street is one of the most iconic names in London nightlife. This venue has been a Mayfair staple for years, attracting a loyal crowd of regulars, celebrities, and people who know that the best nights out don't need gimmicks — just great music, a packed dance floor, and the right crowd. The music is hip-hop, RnB, and funky house, and the atmosphere is pure Mayfair energy.",
    location: "Berkeley Street, Mayfair",
    area: "Mayfair",
    musicPolicy: ["Hip-Hop", "RnB", "Funky House"],
    dressCode: "Smart. No trainers, no sportswear. Smart shoes and well-fitted clothes. Mayfair standard applies.",
    dressCodeNotes: "The door knows its regulars. Dress sharp and be polite — attitude matters here.",
    tableMinimum: "£1,000",
    openNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingTime: "22:00",
    closingTime: "03:30",
    vibe: "Legendary, celebrity-favourite, high-energy",
    insiderTip:
      "Funky Buddha rewards loyalty. Become a regular and the experience gets better every time. Thursday and Saturday are the standout nights.",
    whatToExpect:
      "A dark, intimate venue with a dance floor that gets packed fast. The music switches between hip-hop bangers and funky house grooves. The crowd is well-dressed and sociable. Bottle service is slick, and the atmosphere builds through the night. By 1am, the room is electric.",
    bestFor: "Those who want a classic Mayfair night with serious music credentials",
    status: "open",
  },
  {
    slug: "cuckoo-club",
    name: "Cuckoo Club",
    tagline: "Two floors of Mayfair nightlife",
    description:
      "Cuckoo Club sits on Swallow Street and packs two distinct floors into one venue. Downstairs is house music with a more underground feel. Upstairs is hip-hop and RnB with a party atmosphere. Pick your vibe — or do both. The crowd is young, fun, and sociable. It's one of Mayfair's most reliable nights out.",
    location: "Swallow Street, Mayfair",
    area: "Mayfair",
    musicPolicy: ["House", "Hip-Hop", "RnB"],
    dressCode: "Smart casual. No trainers, no sportswear. Smart jeans and a shirt works.",
    dressCodeNotes: "Keep it clean. Standard Mayfair smart casual.",
    tableMinimum: "£1,000",
    openNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingTime: "22:00",
    closingTime: "03:00",
    vibe: "Social, fun, two-floor versatility",
    insiderTip:
      "Start upstairs for the party atmosphere, then head down when you want the music to get deeper.",
    whatToExpect:
      "Two very different experiences under one roof. The upstairs room is louder and more party-oriented — think birthday groups and big nights. Downstairs is darker, moodier, and more about the music. The venue is well-designed with good sightlines from the tables.",
    bestFor: "Groups who want options and versatility",
    status: "open",
  },
  {
    slug: "scotch-of-st-james",
    name: "Scotch of St James",
    tagline: "Mayfair's most storied nightclub",
    description:
      "Scotch has been a Mayfair institution since the 1960s — Jimi Hendrix played here, The Rolling Stones drank here, and it's been the backdrop to some of London's most legendary nights. Today it carries that heritage with elegant parties, quality DJs, and a crowd that appreciates history. It's intimate, it's classy, and it's timeless.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["Mixed", "House", "Disco", "RnB"],
    dressCode: "Smart and elegant. This is an old-school Mayfair members club — dress like it.",
    dressCodeNotes: "Elegant is the word. Think classic, not trendy.",
    tableMinimum: "£1,000",
    openNights: ["Thursday", "Friday", "Saturday"],
    openingTime: "22:00",
    closingTime: "03:00",
    vibe: "Historic, elegant, intimate",
    insiderTip:
      "Ask about the history when you're there. The walls could tell stories. Thursday nights tend to be the most intimate.",
    whatToExpect:
      "A compact, beautifully designed space with a rich sense of history. The room is small enough that it fills quickly and the atmosphere becomes electric. The music varies by night but always has taste. The crowd is a mix of regulars, members, and people who know where to find the real Mayfair.",
    bestFor: "Those who appreciate history and intimate venues",
    status: "open",
  },
  {
    slug: "dear-darling",
    name: "Dear Darling",
    tagline: "Mayfair's most opulent late-night bar",
    description:
      "Dear Darling is pure Mayfair opulence — chandeliers, velvet booths, and cocktails that justify their price tag. It straddles the line between high-end bar and late-night venue. The cocktail programme is serious, the atmosphere is intimate, and it transitions beautifully from early evening drinks to late-night energy. Perfect for those who want sophistication without the full nightclub experience.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["House", "Lounge", "Commercial"],
    dressCode: "Smart. Cocktail attire encouraged. No casual wear whatsoever.",
    dressCodeNotes: "This is an opulent venue — dress the part. Think cocktail bar, not nightclub.",
    tableMinimum: "£1,000",
    openNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingTime: "21:00",
    closingTime: "02:30",
    vibe: "Opulent, intimate, cocktail-focused",
    insiderTip:
      "Start your evening here with cocktails before heading to a club. Or stay — it gets lively enough after midnight to be the whole night.",
    whatToExpect:
      "A beautiful, dimly-lit space dripping with glamour. The cocktail menu is extensive and creative. The music starts low and atmospheric, building as the night progresses. By midnight, the dance floor opens up. It's the most civilised way to go out in Mayfair.",
    bestFor: "Date nights and groups who prefer bars to clubs",
    status: "open",
  },
  {
    slug: "maddox",
    name: "Maddox",
    tagline: "Where Mayfair dining meets nightlife",
    description:
      "Maddox is the rare venue that does both dinner and nightclub properly. Start with Italian cuisine in the restaurant, then walk downstairs into one of Mayfair's best house music rooms. The transition from dinner to dancing is seamless. The crowd is sophisticated, the music is house-driven, and the atmosphere is refined without being stuffy.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["House", "Deep House", "Tech House"],
    dressCode: "Smart. This is a restaurant-to-club venue — dress for dinner in Mayfair.",
    dressCodeNotes: "Think smart dinner attire. No casual wear.",
    tableMinimum: "£1,000",
    openNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingTime: "22:00",
    closingTime: "03:00",
    vibe: "Sophisticated, dinner-to-dance, house music",
    insiderTip:
      "Book dinner first, then transition to the club. It's the best way to experience Maddox — and the restaurant is genuinely excellent.",
    whatToExpect:
      "Upstairs is a refined Italian restaurant. Downstairs is a sleek club space with warm lighting and a quality sound system. The crowd is older and more sophisticated than most Mayfair clubs. The music is house — no hip-hop here. It's the grown-up night out in Mayfair.",
    bestFor: "Couples and groups who want dinner and dancing",
    status: "open",
  },
  {
    slug: "the-box-london",
    name: "The Box",
    tagline: "London's most provocative theatre-nightclub",
    description:
      "The Box is not for the faint-hearted. This theatrical nightclub pushes boundaries with provocative performances, burlesque acts, and shows that range from jaw-dropping to genuinely shocking. Born in New York, the London outpost brings the same energy — a dark, decadent room where the entertainment is as much the point as the music. If you want a night out that you'll be talking about for weeks, The Box delivers.",
    location: "Soho",
    area: "Soho",
    musicPolicy: ["Commercial", "Hip-Hop", "House"],
    dressCode: "Smart and creative. The Box appreciates effort — dress to match the theatrical energy.",
    dressCodeNotes: "Think fashionable and bold. This is a venue that celebrates excess and style.",
    tableMinimum: "£1,000",
    openNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingTime: "22:30",
    closingTime: "03:30",
    vibe: "Provocative, theatrical, decadent",
    insiderTip:
      "Don't sit near the stage if you're easily shocked. The performances are designed to push boundaries. Book a booth for the best experience — you'll have the show and the party in one.",
    whatToExpect:
      "A dark, opulent room centred around a stage. Throughout the night, performers deliver acts that range from burlesque to avant-garde theatre. Between shows, the DJ keeps the energy high and the dance floor fills. The crowd is a mix of fashionable Londoners, international visitors, and people who've heard the stories and want to see for themselves.",
    bestFor: "Adventurous groups who want a boundary-pushing night out",
    status: "open",
  },
  {
    slug: "luna-club-london",
    name: "Luna Club London",
    tagline: "Mayfair's newest premium nightclub",
    description:
      "Luna has quickly established itself as one of Mayfair's most exciting venues. The design is celestial and atmospheric — think moonlit luxury with sleek interiors and an intimate dance floor. The music policy is open format with a lean towards hip-hop and RnB, and the crowd is young, affluent, and well-dressed. Luna brings fresh energy to a scene that needed it.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["Hip-Hop", "RnB", "Open Format"],
    dressCode: "Smart. No trainers, no sportswear. Standard Mayfair dress code with a contemporary edge.",
    dressCodeNotes: "Luna attracts a stylish crowd. Match the energy.",
    tableMinimum: "£1,000",
    openNights: ["Thursday", "Friday", "Saturday"],
    openingTime: "22:00",
    closingTime: "03:30",
    vibe: "Fresh, stylish, atmospheric",
    insiderTip:
      "Luna is still building its reputation, which means tables are easier to book than the established venues. Take advantage while you can — it won't stay this way.",
    whatToExpect:
      "A beautifully designed venue with celestial-inspired decor. The lighting is atmospheric, the sound system is excellent, and the dance floor is intimate enough that the energy concentrates. The crowd is fashionable and the bottle service is on point. It's a premium experience without the wait-list drama of the most established clubs.",
    bestFor: "Those who want a premium Mayfair experience at a newer venue",
    status: "open",
  },
  {
    slug: "selene-london",
    name: "Selene London",
    tagline: "Refined elegance in the heart of Mayfair",
    description:
      "Selene brings understated luxury to Mayfair's nightlife scene. Named after the Greek goddess of the moon, the venue is elegant without being over-the-top — think soft lighting, refined interiors, and a cocktail programme that rivals dedicated cocktail bars. The music blends house and commercial, and the atmosphere sits between high-end bar and intimate nightclub. It's the kind of place that makes you feel sophisticated just for walking in.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["House", "Commercial", "Deep House"],
    dressCode: "Smart and refined. Cocktail attire. No casual wear.",
    dressCodeNotes: "Selene is elegant — the dress code reflects it. Think upscale evening out.",
    tableMinimum: "£1,000",
    openNights: ["Thursday", "Friday", "Saturday"],
    openingTime: "21:30",
    closingTime: "03:00",
    vibe: "Refined, elegant, moonlit luxury",
    insiderTip:
      "Start with cocktails at the bar before moving to a table. Selene's cocktail menu is genuinely impressive — don't skip it for straight bottles.",
    whatToExpect:
      "An elegant, softly-lit venue with refined design. The music is tasteful house and commercial — never too loud, never too quiet. The crowd is well-dressed and sociable. Bottle service is polished and attentive. It's the kind of venue that works equally well for a date night or a group celebration.",
    bestFor: "Those who want elegance and refinement over high-energy partying",
    status: "open",
  },
  {
    slug: "beat-london",
    name: "BEAT London",
    tagline: "High-energy nightclub with serious sound",
    description:
      "BEAT lives up to its name. Based on Margaret Street, this club is built around its sound system — and it shows. The bass hits different here. The music policy leans towards high-energy sets, the crowd is young and up for it, and the atmosphere is pure nightclub. No gimmicks, no shows — just great music and a proper party.",
    location: "Margaret Street",
    area: "Fitzrovia",
    musicPolicy: ["Hip-Hop", "RnB", "Commercial", "House"],
    dressCode: "Smart casual. No sportswear. Smart trainers can work with the right outfit.",
    dressCodeNotes: "More relaxed than some Mayfair venues but still keep it smart.",
    tableMinimum: "£1,000",
    openNights: ["Thursday", "Friday", "Saturday"],
    openingTime: "22:00",
    closingTime: "03:30",
    vibe: "High-energy, music-focused, proper nightclub",
    insiderTip:
      "BEAT's sound system is the star. Get near the speakers and you'll feel it in your chest.",
    whatToExpect:
      "A no-nonsense nightclub experience. The room is dark, the sound is loud, and the crowd is there to dance. Tables are available but the dance floor is the main attraction. If you want a pure nightclub experience without the bells and whistles, BEAT delivers.",
    bestFor: "Those who prioritise music and dancing over everything else",
    status: "open",
  },

  // ─── PERMANENTLY CLOSED VENUES (kept for SEO) ──────────────

  {
    slug: "libertine",
    name: "Libertine",
    tagline: "Sophisticated and futuristic Mayfair nightlife",
    description:
      "Libertine was a sleek, modern nightclub in the heart of Mayfair known for its futuristic design, LED panels, and cutting-edge sound system. The music leaned hip-hop and RnB, the crowd was young and affluent, and the atmosphere was electric. Libertine was one of Mayfair's most popular clubs during its run.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["Hip-Hop", "RnB", "Commercial"],
    dressCode: "Smart dress code.",
    dressCodeNotes: "Standard Mayfair smart dress code.",
    tableMinimum: "£1,000",
    openNights: [],
    openingTime: "22:30",
    closingTime: "03:30",
    vibe: "Futuristic, high-energy, young and affluent",
    insiderTip: "Libertine has permanently closed.",
    whatToExpect: "Libertine has permanently closed. For a similar high-energy Mayfair experience, check out Funky Buddha, Luna Club London, or BEAT London.",
    bestFor: "This venue has permanently closed",
    status: "closed",
    closedMessage: "Libertine has permanently closed. Looking for a similar experience? Try Funky Buddha for high-energy hip-hop, Luna Club London for a stylish Mayfair party, or BEAT London for serious sound.",
  },
  {
    slug: "luxx-club",
    name: "Luxx Club London",
    tagline: "Mayfair's electric light show experience",
    description:
      "Luxx Club London was known for its immersive LED walls, cutting-edge lighting, and premium sound system. The visual experience rivalled a festival stage, packed into a Mayfair venue. The music was open format with a hip-hop lean.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["Open Format", "Hip-Hop", "Commercial"],
    dressCode: "Smart casual to smart.",
    dressCodeNotes: "Standard Mayfair dress code.",
    tableMinimum: "£1,000",
    openNights: [],
    openingTime: "22:30",
    closingTime: "03:30",
    vibe: "Immersive, high-production, electric",
    insiderTip: "Luxx Club has permanently closed.",
    whatToExpect: "Luxx Club London has permanently closed. For visually impressive Mayfair nightlife, check out Reign London for production value or The Box for theatrical experiences.",
    bestFor: "This venue has permanently closed",
    status: "closed",
    closedMessage: "Luxx Club London has permanently closed. Looking for a visually stunning night? Try Reign London for world-class production or The Box for theatrical nightlife.",
  },
  {
    slug: "lio-london",
    name: "Lio Club London",
    tagline: "Gourmet dining meets Mayfair glamour",
    description:
      "Lio Club London brought the famous Ibiza-born concept to Mayfair — gourmet dining, live entertainment, and nightclub energy all in one evening. The multi-course dinner with performances between courses, followed by a full nightclub transformation, was one of the most complete nights out in London.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["Commercial", "House", "Pop"],
    dressCode: "Smart and glamorous.",
    dressCodeNotes: "Dinner-to-dance attire.",
    tableMinimum: "£1,000",
    openNights: [],
    openingTime: "20:00",
    closingTime: "03:00",
    vibe: "Glamorous, entertainment-driven, dinner-to-dance",
    insiderTip: "Lio Club London has permanently closed.",
    whatToExpect: "Lio Club London has permanently closed. For a dinner-to-dance experience, try Maddox for Italian dining into house music, or Reign London for shows and entertainment.",
    bestFor: "This venue has permanently closed",
    status: "closed",
    closedMessage: "Lio Club London has permanently closed. For dinner and clubbing in one evening, try Maddox — Italian fine dining upstairs, house music downstairs. For entertainment and shows, Reign London is the best alternative.",
  },
];

// Helper functions — these only return OPEN venues by default

export function getOpenClubs(): Club[] {
  return clubs.filter((c) => c.status === "open");
}

export function getClosedClubs(): Club[] {
  return clubs.filter((c) => c.status === "closed");
}

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}

export function getClubsByNight(night: string): Club[] {
  return clubs.filter(
    (c) =>
      c.status === "open" &&
      c.openNights.map((n) => n.toLowerCase()).includes(night.toLowerCase())
  );
}
