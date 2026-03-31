// ── Image mapping for the entire site ────────────────────────
// All paths are relative to /gallery/images/ (proxied via next.config rewrite)
// NEVER use the Supabase URL directly.

const IMG = (filename: string) => `/gallery/images/${filename}`;

// ── HERO IMAGES (wide shots, atmospheric, dramatic) ─────────

export const heroImages = {
  homepage: IMG("fe4414_153a500be2f04c34a8e909c741511d23.jpg"),
  clubs: IMG("fe4414_15f9a848e20f46e0830878cdc02ef314.jpg"),
  thisWeekend: IMG("fe4414_16a4f9f6906b41aa8f20b18ac3899475.jpg"),
  whereToGo: IMG("fe4414_1700d1cd0c8f417493e5e7a301dbcfa7.jpg"),
  whereToGoTonight: IMG("fe4414_1713518fc385447b9c0c5f2c485428a0.jpg"),
  dressCode: IMG("fe4414_1726ac3dd44f4c1387da5f489b5cab86.jpg"),
  mayfairDressCode: IMG("fe4414_178615124386417ba6d6a0921305e0b9.jpg"),
  mayfairNightclubs: IMG("fe4414_17b5d83792d8412abf2893e2cdd81941.jpg"),
  bestNightclubs: IMG("fe4414_17bbb73e0d7f46828a7212e9b95e2db3.jpg"),
  nightlifeGuide: IMG("fe4414_18e8a41be77f47299e26e115913fd8de.jpg"),
  vipNightlife: IMG("NL_TAPE_CLEAN_1229_639.jpg"),
  contact: IMG("fe4414_190cd2eca32340478a002a02a2f8051a.jpg"),
  blog: IMG("fe4414_0da5b1d362b845eda0fd7208e737c37f.jpg"),
  hipHopClubs: IMG("fe4414_072d223d158244a6815f1ed7b01e900b.jpg"),
  celebrityClubs: IMG("TapeSaturdayNYE311222-130.jpg"),
  groupsGuide: IMG("fe4414_0908e40d5430400dbcd1bde279384671.jpg"),
  tablesGuide: IMG("Tape-259.jpg"),
  girlsGuestlist: IMG("fe4414_145fca2770044da29f676a99439f6e34.jpg"),
  musicStyle: IMG("fe4414_0528f444f562494791e99146e727f269.jpg"),
  entryRules: IMG("fe4414_079171b00717438b8594796362b0247d.jpg"),
  guestlistGuide: IMG("fe4414_0e78eec042ae483cb581ada1fad923a5.jpg"),
  tablesWork: IMG("Tape-281.jpg"),
  itinerary: IMG("fe4414_0fa0b169a4174ff2ad141e2e69126bb5.jpg"),
  areasGuide: IMG("fe4414_10bd0c1bef6d4bac952c91a416f7d807.jpg"),
  whereToGoOut: IMG("fe4414_0f46af13e668485caa3ba59af386f370.jpg"),
};

// ── CLUB-SPECIFIC IMAGES ────────────────────────────────────

export const clubImages: Record<string, { hero: string; card: string; interior: string }> = {
  "tape-london": {
    hero: IMG("Tape-1.jpg"),
    card: IMG("Tape-10.jpg"),
    interior: IMG("NL_TAPE_CLEAN_1229_549.jpg"),
  },
  "cirque-le-soir": {
    hero: IMG("fe4414_1326d2f02b504420abb30e47ad400b8a.jpg"),
    card: IMG("fe4414_1375f9dfe47e414f8bdcbbaf625af943.jpg"),
    interior: IMG("fe4414_1399298fdc124e97b08d7ab2ca857526.jpg"),
  },
  "reign-london": {
    hero: IMG("fe4414_1417410b755b4c71add90a1ac9a8e0f1.jpg"),
    card: IMG("fe4414_141a8e5a0dc0400caa5217cf2d206ba5.jpg"),
    interior: IMG("fe4414_14215a177bd145bc8a61ed0ee4b18217.jpg"),
  },
  "tabu-london": {
    hero: IMG("fe4414_1462f563979d4a04a8a2991d56c3b384.jpg"),
    card: IMG("fe4414_1016cb8f2f854fcba503d8b29d4ebf9d.jpg"),
    interior: IMG("fe4414_1036a15d056b412b9726c8b4556052e7.jpg"),
  },
  "funky-buddha": {
    hero: IMG("fe4414_10afb3199f46404bb4b1cafdd9ef545d.jpg"),
    card: IMG("fe4414_10b096491888432598b5a27177f140f9.jpg"),
    interior: IMG("fe4414_10d980e9eafe4511aa039df9199cf114.jpg"),
  },
  "cuckoo-club": {
    hero: IMG("fe4414_11a552e726fa49a4a469fe4ce46a7272.jpg"),
    card: IMG("fe4414_12418cd5e5264ad0aaff1cb8bdfe39ba.jpg"),
    interior: IMG("fe4414_124e349671964aa29f1f68ae2d45d115.jpg"),
  },
  "scotch-of-st-james": {
    hero: IMG("fe4414_12832d40673b426d9faf3d07656aad64.jpg"),
    card: IMG("fe4414_0023ee263fca4fe9806bc09d74113eaa.jpg"),
    interior: IMG("fe4414_002538ddacfe4ce1a4fe89fa0e8305ae.jpg"),
  },
  "dear-darling": {
    hero: IMG("fe4414_00edcb5adc4c4c4cb5dd97d80ea2f4c4.jpg"),
    card: IMG("fe4414_0152b4f29a9540be8eef055230e66221.jpg"),
    interior: IMG("fe4414_016460dc35074665a9f15d051da0d9de.jpg"),
  },
  maddox: {
    hero: IMG("fe4414_0165fb3b91da4e7993307b522fb58de4.jpg"),
    card: IMG("fe4414_01702fa34a044f768289fe742cd80053.jpg"),
    interior: IMG("fe4414_03d0d58e1fb54eb885d6b4ae0986f483.jpg"),
  },
  "the-box-london": {
    hero: IMG("fe4414_03db13b7a1d845d2887fe95e547b1369.jpg"),
    card: IMG("fe4414_03e57f432c7d4f689fa9a2d9906ef9d0.jpg"),
    interior: IMG("fe4414_059f2162e2de4e39a12f8c67843cc717.jpg"),
  },
  "luna-club-london": {
    hero: IMG("fe4414_0628cad52eb04160b0e05f31c8ab7adf.jpg"),
    card: IMG("fe4414_0671e2a8f6974449a73307a48ce1b12e.jpg"),
    interior: IMG("fe4414_0676bc05b33b43d1b091746138a35a8a.jpg"),
  },
  "selene-london": {
    hero: IMG("fe4414_06c4956241eb411b8774897492ccdb20.jpg"),
    card: IMG("fe4414_07bc468fe5a042e0a11c182c21dc63ad.jpg"),
    interior: IMG("fe4414_07f1808f9ba84bdd8fe93d124ef624ae.jpg"),
  },
  "beat-london": {
    hero: IMG("fe4414_08ffe6ecd7e64958b22d4b1ab42d1722.jpg"),
    card: IMG("fe4414_0901bc84893644f297dce6bab32eedf0.jpg"),
    interior: IMG("fe4414_091285b805994cfc8a1f60f2da0dcb9c.jpg"),
  },
  // Closed venues (for their SEO pages)
  libertine: {
    hero: IMG("fe4414_093630378f1e499889ffc7920902d7f6.jpg"),
    card: IMG("fe4414_0a9241c0940740cba4cdbc9ec6705847.jpg"),
    interior: IMG("fe4414_0b0ef282cb324fc59641002ddeb34465.jpg"),
  },
  "luxx-club": {
    hero: IMG("fe4414_0b515258f9b045329589a7de8017c4ee.jpg"),
    card: IMG("fe4414_0b56407f8e7340daab04b2f48da1b04a.jpg"),
    interior: IMG("fe4414_0cba03ea5abe4657beb2d4e9b87a2f35.jpg"),
  },
  "lio-london": {
    hero: IMG("fe4414_0da8a7994beb4cf9a8cbc05f1e3b133a.jpg"),
    card: IMG("fe4414_0de6edc0e91842caa94cd80d20c6a200.jpg"),
    interior: IMG("fe4414_0e5e4e6b5fa641e9a0b8b9fe23d7669f.jpg"),
  },
};

// ── BLOG POST FEATURED IMAGES ───────────────────────────────

export const blogImages: Record<string, { featured: string; inline: string[] }> = {
  "best-clubs-in-mayfair": {
    featured: IMG("Tape-3.jpg"),
    inline: [IMG("fe4414_18e8a41be77f47299e26e115913fd8de.jpg"), IMG("Tape-156.jpg")],
  },
  "best-hip-hop-clubs-london": {
    featured: IMG("fe4414_0ef6e0b0e0ca483d9699b51a08cb4f4f.jpg"),
    inline: [IMG("TapeFriday041024PartyNextDoor-279.jpg")],
  },
  "best-house-music-clubs-london": {
    featured: IMG("fe4414_0f98ea637df04e108c62d994b68b6e16.jpg"),
    inline: [IMG("fe4414_0faa88166fab49de81428e96bf3ea606.jpg")],
  },
  "best-new-clubs-mayfair": {
    featured: IMG("fe4414_0fc8e5a674c64c5ca02e90c4e90f78e3.jpg"),
    inline: [IMG("fe4414_1075cb5077704dcfbe926cec4270ba09.jpg")],
  },
  "best-thursday-night-london": {
    featured: IMG("fe4414_17b5d83792d8412abf2893e2cdd81941.jpg"),
    inline: [IMG("TapeTuesday170924-248.jpg")],
  },
  "clubs-with-live-entertainment-london": {
    featured: IMG("fe4414_17bbb73e0d7f46828a7212e9b95e2db3.jpg"),
    inline: [IMG("fe4414_1949bb37981e48da989264fa0d381f0b.jpg")],
  },
  "dinner-and-clubbing-mayfair": {
    featured: IMG("fe4414_19701f5d944c4c07aeb3c13dcedcc5cc.jpg"),
    inline: [IMG("fe4414_178615124386417ba6d6a0921305e0b9.jpg")],
  },
  "first-time-clubbing-mayfair": {
    featured: IMG("fe4414_1726ac3dd44f4c1387da5f489b5cab86.jpg"),
    inline: [IMG("fe4414_190cd2eca32340478a002a02a2f8051a.jpg")],
  },
  "funky-buddha-london-guide": {
    featured: IMG("DSC_6749.jpg"),
    inline: [IMG("DSC_6780.jpg"), IMG("DSC_6827.jpg")],
  },
  "how-to-get-into-mayfair-clubs": {
    featured: IMG("Tape-4-2.jpg"),
    inline: [IMG("Tape-36.jpg")],
  },
  "luna-club-london-review": {
    featured: IMG("fe4414_1713518fc385447b9c0c5f2c485428a0.jpg"),
    inline: [IMG("fe4414_1bbe011379224fa08212fe7f2841d580.jpg")],
  },
  "mayfair-clubs-near-piccadilly": {
    featured: IMG("fe4414_1c2dca3e10424af1967250305d218af3.jpg"),
    inline: [IMG("DSC_6848.jpg")],
  },
  "mayfair-nightlife-guide": {
    featured: IMG("Tape-157.jpg"),
    inline: [IMG("TapeSaturdayNYE311222-114.jpg"), IMG("DSC_6873.jpg")],
  },
  "reign-london-shows-entertainment": {
    featured: IMG("fe4414_1417410b755b4c71add90a1ac9a8e0f1.jpg"),
    inline: [IMG("fe4414_14215a177bd145bc8a61ed0ee4b18217.jpg")],
  },
  "saturday-night-london-guide": {
    featured: IMG("TapeSaturday191024-102.jpg"),
    inline: [IMG("TapeSaturday191024-108.jpg"), IMG("DSC_6899.jpg")],
  },
  "selene-london-club-guide": {
    featured: IMG("fe4414_06c4956241eb411b8774897492ccdb20.jpg"),
    inline: [IMG("fe4414_07bc468fe5a042e0a11c182c21dc63ad.jpg")],
  },
  "the-box-london-nightclub-guide": {
    featured: IMG("fe4414_03db13b7a1d845d2887fe95e547b1369.jpg"),
    inline: [IMG("fe4414_03e57f432c7d4f689fa9a2d9906ef9d0.jpg")],
  },
  "what-to-do-in-mayfair-at-night": {
    featured: IMG("DSC_6910.jpg"),
    inline: [IMG("DSC_6920.jpg"), IMG("DSC_6930.jpg")],
  },
  // New blog posts
  "scotch-of-st-james-guide": {
    featured: IMG("fe4414_12832d40673b426d9faf3d07656aad64.jpg"),
    inline: [IMG("fe4414_0023ee263fca4fe9806bc09d74113eaa.jpg")],
  },
  "beat-london-nightclub-guide": {
    featured: IMG("fe4414_08ffe6ecd7e64958b22d4b1ab42d1722.jpg"),
    inline: [IMG("fe4414_0901bc84893644f297dce6bab32eedf0.jpg")],
  },
  "corporate-entertaining-mayfair-clubs": {
    featured: IMG("Tape-263.jpg"),
    inline: [IMG("NL_TAPE_CLEAN_1229_567.jpg")],
  },
  "best-cocktail-bars-before-clubbing-mayfair": {
    featured: IMG("fe4414_0da5b1d362b845eda0fd7208e737c37f.jpg"),
    inline: [IMG("fe4414_0de6edc0e91842caa94cd80d20c6a200.jpg")],
  },
  "where-to-eat-after-clubbing-mayfair": {
    featured: IMG("photo-dec-23-2024-1-11-03-am.jpg"),
    inline: [IMG("photo-dec-23-2024-2-34-05-am.jpg")],
  },
  "mayfair-vs-shoreditch-vs-chelsea-nightlife": {
    featured: IMG("DSC_6795.jpg"),
    inline: [IMG("DSC_6800.jpg")],
  },
  "date-night-mayfair-clubs": {
    featured: IMG("fe4414_00edcb5adc4c4c4cb5dd97d80ea2f4c4.jpg"),
    inline: [IMG("fe4414_0165fb3b91da4e7993307b522fb58de4.jpg")],
  },
  "over-30s-nightlife-mayfair": {
    featured: IMG("Tape-89.jpg"),
    inline: [IMG("NL_TAPE_CLEAN_1229_545.jpg")],
  },
  "going-out-alone-mayfair": {
    featured: IMG("DSC_6802.jpg"),
    inline: [IMG("DSC_6837.jpg")],
  },
  "getting-home-from-mayfair-clubs": {
    featured: IMG("fe4414_0f46af13e668485caa3ba59af386f370.jpg"),
    inline: [IMG("fe4414_10bd0c1bef6d4bac952c91a416f7d807.jpg")],
  },
};

// ── SECTION / ATMOSPHERIC IMAGES ────────────────────────────

export const sectionImages = {
  ctaBooking: IMG("Tape-20.jpg"),
  ctaGuestlist: IMG("TapeFriday041024PartyNextDoor-333.jpg"),
  ctaWeekend: IMG("TapeFriday041024PartyNextDoor-410.jpg"),
  nightSkyline: IMG("DSC_6945.jpg"),
  danceFloor: IMG("DSC_6982.jpg"),
  djBooth: IMG("DSC_6989.jpg"),
  vipArea: IMG("Tape-15.jpg"),
  bottleService: IMG("Tape-19.jpg"),
  crowdEnergy: IMG("DSC_6997.jpg"),
  neonLights: IMG("DSC_7013.jpg"),
  entrance: IMG("DSC_7019.jpg"),
  champagne: IMG("Tape-17.jpg"),
  performer: IMG("fe4414_1949bb37981e48da989264fa0d381f0b.jpg"),
};

// ── NIGHT-SPECIFIC IMAGES ───────────────────────────────────

export const nightImages: Record<string, string> = {
  monday: IMG("DSC_6763.jpg"),
  tuesday: IMG("DSC_6767.jpg"),
  wednesday: IMG("DSC_6776.jpg"),
  thursday: IMG("DSC_6808.jpg"),
  friday: IMG("TapeFriday041024PartyNextDoor-279.jpg"),
  saturday: IMG("TapeSaturday191024-102.jpg"),
  sunday: IMG("DSC_6868.jpg"),
};
