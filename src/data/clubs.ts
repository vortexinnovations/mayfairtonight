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
}

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
  },
  {
    slug: "the-london-reign",
    name: "The London Reign",
    tagline: "Mayfair's most extravagant showclub",
    description:
      "The London Reign takes nightlife and turns it into theatre. Based on Piccadilly, this showclub features aerial acrobats, live singers, and jaw-dropping performances between DJ sets. The production value is insane — think Las Vegas meets Mayfair. If you want your night to feel like an event, The London Reign delivers every single time.",
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
  },
  {
    slug: "libertine",
    name: "Libertine",
    tagline: "Sophisticated and futuristic Mayfair nightlife",
    description:
      "Libertine is sleek, modern, and unapologetically futuristic. The venue feels like stepping into a sci-fi film — LED panels, cutting-edge design, and a sound system that hits. The music leans hip-hop and RnB, the crowd is young and affluent, and the atmosphere is electric. One of Mayfair's most popular clubs for a reason.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["Hip-Hop", "RnB", "Commercial"],
    dressCode: "Smart dress code. No trainers, no casual wear. Smart jeans with a blazer works.",
    dressCodeNotes: "Standard Mayfair smart dress code. Keep it sharp.",
    tableMinimum: "£1,000",
    openNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingTime: "22:30",
    closingTime: "03:30",
    vibe: "Futuristic, high-energy, young and affluent",
    insiderTip:
      "Libertine's Saturday nights are legendary. Book early — tables sell out fast on weekends.",
    whatToExpect:
      "A visually stunning venue with incredible lighting and sound. The dance floor gets packed after midnight, and the energy builds through the night. Tables line the edges with bottle service flowing. It's a proper party — loud, fun, and high-energy.",
    bestFor: "Groups who want a high-energy party atmosphere",
  },
  {
    slug: "luxx-club",
    name: "Luxx Club London",
    tagline: "Mayfair's electric light show experience",
    description:
      "Luxx is all about the visual experience. LED walls, immersive lighting, and a production setup that rivals a festival stage — all packed into a premium Mayfair venue. The music is open format with a hip-hop lean, the crowd is up for it, and the atmosphere is pure energy. If you want your night to feel like an event, Luxx delivers.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["Open Format", "Hip-Hop", "Commercial"],
    dressCode: "Smart casual to smart. No sportswear, no casual trainers.",
    dressCodeNotes: "Keep it clean and stylish. Smart jeans and a good shirt will do.",
    tableMinimum: "£1,000",
    openNights: ["Friday", "Saturday"],
    openingTime: "22:30",
    closingTime: "03:30",
    vibe: "Immersive, high-production, electric",
    insiderTip:
      "Arrive by 11pm to get the full visual experience before the room fills up.",
    whatToExpect:
      "Walk in and the LED walls hit you immediately. The production value is high — think club meets immersive art installation. The music is diverse, the sound system is serious, and the crowd is there to party. It's one of the more visual experiences in Mayfair.",
    bestFor: "Those who want a visually stunning night out",
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
  },
  {
    slug: "ministry-of-sound",
    name: "Ministry of Sound",
    tagline: "London's iconic super club",
    description:
      "Ministry of Sound needs no introduction. This Elephant & Castle institution has been at the centre of electronic music for over three decades. Multiple rooms, world-class sound systems, and lineups that read like a festival poster. It's not Mayfair — it's South London — but if you want a proper clubbing experience, nowhere else comes close.",
    location: "Elephant & Castle, South London",
    area: "South London",
    musicPolicy: ["House", "Techno", "Electronic", "Drum & Bass"],
    dressCode: "Casual and comfortable. This is a proper club — dress for dancing. No formal dress code.",
    dressCodeNotes: "Ministry is about the music, not the outfit. Wear whatever you're comfortable dancing in.",
    tableMinimum: "£1,000",
    openNights: ["Friday", "Saturday"],
    openingTime: "23:00",
    closingTime: "06:00",
    vibe: "Iconic, music-first, marathon clubbing",
    insiderTip:
      "The Box (main room) has one of the best sound systems on the planet. Start there, then explore the other rooms as the night unfolds.",
    whatToExpect:
      "Multiple rooms, each with its own sound and vibe. The main room (The Box) is a cathedral of sound. Other rooms offer different genres and tempos. The crowd is there for the music — this isn't a see-and-be-seen venue. Expect to dance until sunrise.",
    bestFor: "Serious music lovers and anyone who wants to dance until dawn",
  },
  {
    slug: "lio-london",
    name: "Lio Club London",
    tagline: "Gourmet dining meets Mayfair glamour",
    description:
      "Lio brings the Ibiza-born concept to Mayfair — gourmet dining, live entertainment, and nightclub energy all in one evening. Start with a multi-course dinner, enjoy performances from singers and dancers between courses, then the tables get cleared and the room transforms into a full nightclub. It's the most complete night out in Mayfair.",
    location: "Mayfair",
    area: "Mayfair",
    musicPolicy: ["Commercial", "House", "Pop"],
    dressCode: "Smart and glamorous. This is a dinner-to-dance venue — dress for the occasion.",
    dressCodeNotes: "Think Ibiza glamour meets Mayfair elegance. Dress up.",
    tableMinimum: "£1,000",
    openNights: ["Wednesday", "Thursday", "Friday", "Saturday"],
    openingTime: "20:00",
    closingTime: "03:00",
    vibe: "Glamorous, entertainment-driven, dinner-to-dance",
    insiderTip:
      "Book the full dinner experience. The transition from dining to clubbing is what makes Lio special — skipping dinner means missing half the show.",
    whatToExpect:
      "You'll sit down to a multi-course dinner while performers entertain between courses. As the evening progresses, the energy builds. By midnight, the dining room has transformed into a nightclub and the party is in full swing. It's theatrical, glamorous, and unlike anything else in London.",
    bestFor: "Special occasions and those who want the full experience",
  },
];

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}

export function getClubsByNight(night: string): Club[] {
  return clubs.filter((c) =>
    c.openNights.map((n) => n.toLowerCase()).includes(night.toLowerCase())
  );
}
