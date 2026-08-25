export type InteractionType = "scratch" | "flip" | "stamp" | "hold" | "special";
export type SpecialType = "spam_drawer" | "movie_strip" | "ai_water" | "noon_alarm" | "snap_score" | "sabrina_gallery";

export interface FlawItem {
  id: number;
  docketCode: string;
  original: string;
  category: "Social Lore" | "Daily Habits" | "Personality Crimes" | "Aesthetic Rules" | "The Secret Soft Side";
  stampVerdict: string;
  interactionType: InteractionType;
  specialType?: SpecialType;
  roastVariants: {
    soft: string;
    medium: string;
    drama: string;
  };
  translation: string;
  why: string;
  funFact?: string;
}

export const FLAWS_DATA: FlawItem[] = [
  {
    id: 1,
    docketCode: "DOCKET #01/30",
    original: "Hates men",
    category: "Social Lore",
    stampVerdict: "STANDARDS TOO HIGH",
    interactionType: "stamp",
    roastVariants: {
      soft: "Mildly skeptical of men (honestly fair point).",
      medium: "Her default attitude toward men is 'guilty until proven non-annoying'.",
      drama: "Treats meeting a new guy like she's interrogating a war criminal with zero bail options."
    },
    translation: "Her standards have 24/7 armed security at the perimeter. Annoying for society, top-tier self-preservation for her.",
    why: "You literally never lower your standards for anyone and watching you protect your peace is iconic.",
    funFact: "0 men harmed, but several fragile egos definitely bruised."
  },
  {
    id: 2,
    docketCode: "DOCKET #02/30",
    original: "Somehow has multiple guy BSFs although being a man hater",
    category: "Social Lore",
    stampVerdict: "VIP DIPLOMATIC IMMUNITY",
    interactionType: "flip",
    roastVariants: {
      soft: "Issued like 3 official character visas.",
      medium: "Says 'men are the absolute worst' then joins the Discord call with the boys 5 minutes later.",
      drama: "Runs a strict man-hater regime but granted VIP diplomatic immunity to the selected council."
    },
    translation: "She doesn't hate men; she just has zero tolerance for weird/boring ones and only keeps the funny ones around.",
    why: "Knowing I made the cut to be one of the few exceptions is a permanent flex.",
    funFact: "Acceptance rate into her circle: 0.04%."
  },
  {
    id: 3,
    docketCode: "DOCKET #03/30",
    original: "Doomscrolls TikTok all the time",
    category: "Daily Habits",
    stampVerdict: "CULTURE CURATOR",
    interactionType: "scratch",
    roastVariants: {
      soft: "Just checking what the algorithm cooked up today for the 4th consecutive hour.",
      medium: "Her screen time report would send a Victorian child straight into a medical coma.",
      drama: "ByteDance owes her a salary, health insurance, and dental coverage at this point."
    },
    translation: "She has her own curated mental archive of niche aesthetics, edits, and humor that belongs 100% to her.",
    why: "You can just vanish into your own zone, mind your business, and be completely unbothered in your own bubble for hours.",
    funFact: "Defendant's average daily FYP consumption: off the charts."
  },
  {
    id: 4,
    docketCode: "DOCKET #04/30",
    original: "Has multiple spam accounts (4+)",
    category: "Social Lore",
    stampVerdict: "CLASSIFIED DOSSIER",
    interactionType: "special",
    specialType: "spam_drawer",
    roastVariants: {
      soft: "Maintains 4 separate secret-service identities for no apparent reason.",
      medium: "Has 4 distinct spam accounts and I literally have them memorized like nuclear launch codes.",
      drama: "Running a whole 4-account covert surveillance operation with zero intention of following anyone back."
    },
    translation: "She runs a multi-tier undercover network where each burner has its own hyper-specific personality and movie pfp.",
    why: "The fact that I don't even follow them but have 'user020306767' permanently burned into my memory will never not be hilarious.",
    funFact: "The maks_weickowski_fanpage story-stalking incidents: formally logged."
  },
  {
    id: 5,
    docketCode: "DOCKET #05/30",
    original: "Binge-watches movies the whole day",
    category: "Daily Habits",
    stampVerdict: "CINEMA CERTIFIED",
    interactionType: "special",
    specialType: "movie_strip",
    roastVariants: {
      soft: "Just a casual 9-hour cinematic deep dive.",
      medium: "Will sit on the couch and knock out 4 movies back-to-back before realizing the sun went down.",
      drama: "Treats movie marathons like an Olympic sport where leaving the blanket is an immediate disqualification."
    },
    translation: "When she locks into a story, she lives inside it completely and feels every single scene.",
    why: "I love how intensely you get invested in characters and how you'll debate a plot hole for 2 hours.",
    funFact: "Popcorn consumed per marathon: classified."
  },
  {
    id: 6,
    docketCode: "DOCKET #06/30",
    original: "Still stalks their ex but lies to themselves",
    category: "The Secret Soft Side",
    stampVerdict: "CASE EXPUNGED",
    interactionType: "flip",
    roastVariants: {
      soft: "Routine historical research check.",
      medium: "Says 'I literally don't care at all' while watching his story from a burner with 0 followers.",
      drama: "The FBI wishes they had her 2:00 AM forensic tracking capabilities."
    },
    translation: "It's not that she misses him; she just needs visual proof that his fits are still tragic and the glow-down happened.",
    why: "You're messy in the most hilarious, human way possible and you're 1000x out of his league anyway.",
    funFact: "Status: 100% out of his league."
  },
  {
    id: 7,
    docketCode: "DOCKET #07/30",
    original: "Hates AI",
    category: "Personality Crimes",
    stampVerdict: "100% ORGANIC HUMAN",
    interactionType: "special",
    specialType: "ai_water",
    roastVariants: {
      soft: "Supports local human stupidity over robotic intelligence.",
      medium: "Looks at ChatGPT like an 1800s peasant looking at a solar eclipse.",
      drama: "Will fight the robot uprising with bare hands and a handwritten angry letter."
    },
    translation: "She values real human soul, genuine effort, and vibe over sterile artificial shortcuts.",
    why: "The irony is I had to write thousands of lines of real code just to make this apology look handmade for you.",
    funFact: "AI Water footprint: neutralized with respect."
  },
  {
    id: 8,
    docketCode: "DOCKET #08/30",
    original: "Hates Ronaldo",
    category: "Personality Crimes",
    stampVerdict: "SIUUU OVERRULED",
    interactionType: "stamp",
    roastVariants: {
      soft: "Immune to the SIUUU propaganda machine.",
      medium: "Hates the celebration, hates the haircut, hates the fanboys screaming in her comment sections.",
      drama: "Would personally delete Instagram if Ronaldo showed up on her feed two days in a row."
    },
    translation: "She refuses to jump on worldwide hype trains just because loud dudes on the internet told her to.",
    why: "You stand 10 toes down on your opinions no matter how many people disagree.",
    funFact: "Ballon d'Or vote: Permanently withheld."
  },
  {
    id: 9,
    docketCode: "DOCKET #09/30",
    original: "Wakes up almost at noon",
    category: "Daily Habits",
    stampVerdict: "BEAUTY REST CHAMPION",
    interactionType: "special",
    specialType: "noon_alarm",
    roastVariants: {
      soft: "Operates on a luxury European schedule.",
      medium: "The world starts at 7 AM; Sara's consciousness doesn't boot up until lunchtime.",
      drama: "Thinks morning people are literally insane and actively participating in a psychological experiment."
    },
    translation: "She runs on late-night creativity and refuses to pretend morning alarms were ever a good idea.",
    why: "Those random late-night convos when everyone else is asleep are literally the best conversations we have.",
    funFact: "Morning alarms survived: 14 snoozes."
  },
  {
    id: 10,
    docketCode: "DOCKET #10/30",
    original: "Doesn't stick to one video game",
    category: "Daily Habits",
    stampVerdict: "EXPLORER PASS",
    interactionType: "scratch",
    roastVariants: {
      soft: "A diversified gaming tourist.",
      medium: "Downloads 60GB, plays the tutorial, gets distracted by another game, uninstalls forever.",
      drama: "Has gaming commitment issues worse than a Netflix cancellation bot."
    },
    translation: "She plays strictly for sensory joy and aesthetic fun, not to grind chores like it's a 9-5 job.",
    why: "You only do things that genuinely bring you joy and you drop whatever bores you without guilt.",
    funFact: "Steam completion rate: perfectly chaotic."
  },
  {
    id: 11,
    docketCode: "DOCKET #11/30",
    original: "Atheist",
    category: "Personality Crimes",
    stampVerdict: "FREE THINKER",
    interactionType: "flip",
    roastVariants: {
      soft: "Needs peer-reviewed data before believing in anything.",
      medium: "Needs to see the source code of the universe in 4K before subscribing.",
      drama: "Will ask the universe for a sign, get three of them, and still ask for a double-blind peer review."
    },
    translation: "She thinks for herself, questions everything, and builds her own moral compass instead of following the crowd.",
    why: "You have your own mind and you don't just swallow what people tell you to believe.",
    funFact: "Belief in Sara being iconic: 100% statistically confirmed."
  },
  {
    id: 12,
    docketCode: "DOCKET #12/30",
    original: "Loves USA",
    category: "Social Lore",
    stampVerdict: "BORDER CLEARED",
    interactionType: "stamp",
    roastVariants: {
      soft: "Appreciates the cinematic Americana aesthetic from a safe distance.",
      medium: "Down bad for iced coffees, Target runs, and American diner vibes.",
      drama: "Has a mental itinerary for a New York / LA trip planned down to the exact iced vanilla latte order."
    },
    translation: "She dreams big, loves cinematic energy, and wants to experience every single corner of the world.",
    why: "Your face when you talk about traveling and big plans is genuinely the best thing to see.",
    funFact: "Dream Starbucks order: venti iced vanilla latte."
  },
  {
    id: 13,
    docketCode: "DOCKET #13/30",
    original: "Easily gets brainwashed by random social stuff",
    category: "Social Lore",
    stampVerdict: "PASSIONATELY CURIOUS",
    interactionType: "scratch",
    roastVariants: {
      soft: "Highly receptive to micro-trends.",
      medium: "One 30-second TikTok and she has an entirely new skincare philosophy and a new iced drink recipe.",
      drama: "Could watch a video with ominous background music and be convinced that tap water alters your aura."
    },
    translation: "She's curious, enthusiastic, and genuinely fascinated by how people live and what they think.",
    why: "Life is so much more fun with someone who gets genuinely excited by random new rabbit holes.",
    funFact: "New hyperfixations per month: ~7."
  },
  {
    id: 14,
    docketCode: "DOCKET #14/30",
    original: "Gaslights and tries to put the blame on others",
    category: "Personality Crimes",
    stampVerdict: "CHIEF DEFENSE ATTY",
    interactionType: "hold",
    roastVariants: {
      soft: "Re-edits the narrative in real time with incredible confidence.",
      medium: "Will drop a glass and somehow convince you that gravity was your fault.",
      drama: "Could walk into a courtroom with zero evidence and leave the judge apologizing to her."
    },
    translation: "She has the debate timing of a supreme court lawyer and arguing with her is absurdly entertaining.",
    why: "Even when you're completely making stuff up, your quick wit and comedic timing is unmatched.",
    funFact: "Winning rate in trivial arguments: 99.8%."
  },
  {
    id: 15,
    docketCode: "DOCKET #15/30",
    original: "Dry replies / mood swings",
    category: "The Secret Soft Side",
    stampVerdict: "DYNAMIC WEATHER",
    interactionType: "flip",
    roastVariants: {
      soft: "Has distinct communicative weather systems.",
      medium: "Either replies with 6 voice notes and 12 photos or just sends 'k' and vanishes for 8 hours.",
      drama: "Her texting speed is governed by current caffeine levels and planetary alignments."
    },
    translation: "Her moods are real. A little terrifying to navigate sometimes, but at least she never fakes being okay.",
    why: "When you are excited and hyped, it's 100x more real because you never put on a fake customer-service personality.",
    funFact: "Safe protocol: send a meme and wait 10 mins."
  },
  {
    id: 16,
    docketCode: "DOCKET #16/30",
    original: "Gets influenced by whatever opinion is trending that week",
    category: "Social Lore",
    stampVerdict: "TREND AUDITOR",
    interactionType: "stamp",
    roastVariants: {
      soft: "Test-driving cultural discourse.",
      medium: "Adopts a whole new controversial hot take every Tuesday morning.",
      drama: "Her philosophical stances get software updates faster than iOS."
    },
    translation: "She stays plugged into culture, experiments with ideas, and isn't afraid to change her mind.",
    why: "Talking to you is never boring or predictable. You always bring something fresh to the table.",
    funFact: "Status: pending next week's discourse."
  },
  {
    id: 17,
    docketCode: "DOCKET #17/30",
    original: "1m+ snap score",
    category: "Social Lore",
    stampVerdict: "STREAK ROYALTY",
    interactionType: "special",
    specialType: "snap_score",
    roastVariants: {
      soft: "High-bandwidth social connectivity.",
      medium: "Her thumbs have sent enough red squares to build a 3-bedroom brick house.",
      drama: "Snapchat should literally erect a bronze statue of her outside their headquarters."
    },
    translation: "She is fiercely loyal to her friendships and keeps people in her daily orbit no matter what.",
    why: "That ridiculous number just proves how many people genuinely want to talk to you every single day.",
    funFact: "Snap streak longevity: ancient."
  },
  {
    id: 18,
    docketCode: "DOCKET #18/30",
    original: "Dresses for themselves",
    category: "Aesthetic Rules",
    stampVerdict: "MAIN CHARACTER LAW",
    interactionType: "flip",
    roastVariants: {
      soft: "Strictly follows personal curation over trends.",
      medium: "Doesn't check what everyone else is wearing; shows up and makes everyone else feel underdressed.",
      drama: "Would wear sunglasses indoors just because the ceiling lights insulted her aesthetic."
    },
    translation: "She doesn't perform for the room. The room just has to deal with her unapologetic confidence.",
    why: "Your style is 100% yours. You never dress to blend in or ask for anyone's approval.",
    funFact: "Strangers staring in awe: daily."
  },
  {
    id: 19,
    docketCode: "DOCKET #19/30",
    original: "Loves attention",
    category: "Personality Crimes",
    stampVerdict: "NATURAL SPOTLIGHT",
    interactionType: "scratch",
    roastVariants: {
      soft: "Naturally commands the room.",
      medium: "Allergic to the background; thrives directly in the spotlight.",
      drama: "Enters a quiet coffee shop and the lighting automatically dims for her main character entrance."
    },
    translation: "She has natural charisma and magnetic energy that makes every room she enters 10x more alive.",
    why: "You deserve to be noticed, and you make being the center of attention look completely effortless.",
    funFact: "Stage presence level: 10/10."
  },
  {
    id: 20,
    docketCode: "DOCKET #20/30",
    original: "Says 'idc' then overthinks it",
    category: "The Secret Soft Side",
    stampVerdict: "SECRETLY TENDER",
    interactionType: "hold",
    roastVariants: {
      soft: "Defensive nonchalance before deep reflection.",
      medium: "Drops a casual 'idc' then stares at the ceiling at 3 AM analyzing the subtext in 4D.",
      drama: "Claims zero emotional investment while drafting a 40-page mental case file in her head."
    },
    translation: "She acts unbothered to protect herself, but the truth is she cares deeply about the people in her world.",
    why: "Your soft, caring side is the best part about you, even when you try to hide it behind sarcasm.",
    funFact: "Heart size: noticeably large."
  },
  {
    id: 21,
    docketCode: "DOCKET #21/30",
    original: "Thinks AI consumes all the water",
    category: "Personality Crimes",
    stampVerdict: "ECO CONSCIOUS",
    interactionType: "special",
    specialType: "ai_water",
    roastVariants: {
      soft: "Monitoring data center cooling ethics.",
      medium: "Convinced that every prompt typed in ChatGPT drinks a local lake dry.",
      drama: "Guards the kitchen tap with her life every time someone opens an AI app."
    },
    translation: "She cares about the real physical world and isn't blinded by tech hype.",
    why: "I love that your mind connects random environmental facts and actually cares about the outcome.",
    funFact: "Water tank status: fully replenished."
  },
  {
    id: 22,
    docketCode: "DOCKET #22/30",
    original: "[Slot 22: Redacted Story Screenshot]",
    category: "Social Lore",
    stampVerdict: "SEALED EVIDENCE",
    interactionType: "flip",
    roastVariants: {
      soft: "Evidence currently protected under attorney-client privilege.",
      medium: "This charge was so chaotic the screenshot had to be officially redacted.",
      drama: "The clerk temporarily lost this case file behind the courtroom water cooler."
    },
    translation: "Standing by for the exact 22nd story line whenever you want to insert it.",
    why: "No matter what this flaw was, you already know I have an unconditional defense ready for it.",
    funFact: "Customizable slot in data/flaws.ts."
  },
  {
    id: 23,
    docketCode: "DOCKET #23/30",
    original: "[Slot 23: Redacted Story Screenshot]",
    category: "Daily Habits",
    stampVerdict: "SEALED EVIDENCE",
    interactionType: "scratch",
    roastVariants: {
      soft: "Confidential case note currently under review.",
      medium: "Another classic Sara quirk waiting to be officially cataloged.",
      drama: "Classified top secret by order of the Supreme Birthday Tribunal."
    },
    translation: "This placeholder stands ready for your missing story item.",
    why: "Every single one of these items just proves how irreplaceable your personality is.",
    funFact: "Customizable slot in data/flaws.ts."
  },
  {
    id: 24,
    docketCode: "DOCKET #24/30",
    original: "[Slot 24: Redacted Story Screenshot]",
    category: "Personality Crimes",
    stampVerdict: "SEALED EVIDENCE",
    interactionType: "stamp",
    roastVariants: {
      soft: "Pending court transcription from the original story.",
      medium: "A mystery flaw that probably involves stubbornness or immaculate taste.",
      drama: "The defense is holding this piece of evidence in an undisclosed vault."
    },
    translation: "Reserved for the real screenshot line whenever you want to insert it.",
    why: "You make even the most chaotic moments memorable.",
    funFact: "Customizable slot in data/flaws.ts."
  },
  {
    id: 25,
    docketCode: "DOCKET #25/30",
    original: "[Slot 25: Redacted Story Screenshot]",
    category: "Aesthetic Rules",
    stampVerdict: "SEALED EVIDENCE",
    interactionType: "flip",
    roastVariants: {
      soft: "A waiting room for the 25th piece of story evidence.",
      medium: "Pre-approved acquittal for whatever missing chaos was here.",
      drama: "Redacted by the supreme court of iconic behavior."
    },
    translation: "Waiting to receive the exact line so it can join the permanent record of reasons you are loved.",
    why: "You're one of a kind and no generic birthday wish could ever capture it.",
    funFact: "Customizable slot in data/flaws.ts."
  },
  {
    id: 26,
    docketCode: "DOCKET #26/30",
    original: "Hates marriage",
    category: "Personality Crimes",
    stampVerdict: "DYNASTY PROTOCOL",
    interactionType: "flip",
    roastVariants: {
      soft: "Values absolute sovereign freedom.",
      medium: "Looks at wedding Pinterest boards with mild biological disgust.",
      drama: "Refuses to sign any contract where she can't fire the other party on 24 hours notice."
    },
    translation: "She knows her worth and refuses to conform to traditional scripts just to please society.",
    why: "Your independence and self-reliance inspire everyone around you.",
    funFact: "Court finds: Future self-made dynasty confirmed."
  },
  {
    id: 27,
    docketCode: "DOCKET #27/30",
    original: "Wants a 6ft+ while weighing more than him",
    category: "Social Lore",
    stampVerdict: "LUXURY SPEC",
    interactionType: "stamp",
    roastVariants: {
      soft: "Has strict architectural height specifications.",
      medium: "Wants a basketball player build for purely aesthetic proportions.",
      drama: "Requires a tape measure, industrial scale, and notarized height affidavit at the door."
    },
    translation: "She likes what she likes, owns her preferences with zero shame, and never settles.",
    why: "You're hilarious, self-aware, and completely unapologetic about what you want.",
    funFact: "Height filter: strictly enforced at the gate."
  },
  {
    id: 28,
    docketCode: "DOCKET #28/30",
    original: "Uses eye lashes often",
    category: "Aesthetic Rules",
    stampVerdict: "HIGH GLAMOUR",
    interactionType: "scratch",
    roastVariants: {
      soft: "Elevates visual presentation with precision lash engineering.",
      medium: "One blink and she creates a gentle localized breeze in the room.",
      drama: "Treats putting on lashes like performing delicate open-heart surgery with high stakes."
    },
    translation: "She takes pride in looking incredible and turns beauty routines into an absolute art form.",
    why: "You look stunning naturally, but your eye for detail and aesthetic effort is unmatched.",
    funFact: "Lash flutter aerodynamic rating: Category 5."
  },
  {
    id: 29,
    docketCode: "DOCKET #29/30",
    original: "Has their spam account mentioned in their main",
    category: "Social Lore",
    stampVerdict: "OPEN SECRET",
    interactionType: "special",
    specialType: "spam_drawer",
    roastVariants: {
      soft: "A transparent doorway to her private diary.",
      medium: "Puts the secret password in neon lights on the front porch.",
      drama: "The world's least undercover covert operation in social media history."
    },
    translation: "She puts her spam in her bio for aesthetic symmetry, then denies follow requests with elite discretion.",
    why: "Having saras_secretaccount sitting right in your main bio while keeping it totally locked down is top-tier comedy.",
    funFact: "Bio status: mentions the spam, rejects 100% of follow requests."
  },
  {
    id: 30,
    docketCode: "DOCKET #30/30",
    original: "Most often uses these Sabrina Carpenter gifs, especially in their girl BSF posts or somewhere",
    category: "The Secret Soft Side",
    stampVerdict: "SHORT N' SWEET ICON",
    interactionType: "special",
    specialType: "sabrina_gallery",
    roastVariants: {
      soft: "Communicates via top-tier pop princess micro-reactions.",
      medium: "Her emotional vocabulary is 80% Sabrina flips, winks, micro-shrugs, and chaos.",
      drama: "Sabrina Carpenter should be paying her royalties for global GIF distribution."
    },
    translation: "Her reaction GIFs are basically a fluent second language of charm, sarcasm, and confidence.",
    why: "Your messages always bring energy, humor, and that unmistakable spark that nobody else has.",
    funFact: "Favorite quote: 'I'm working late cause I'm a singer... and Sara is iconic.'"
  }
];

export const OBJECTIONS_DATA = [
  "Objection! The defendant's eyelashes were too flawless for cross-examination.",
  "Objection! Defense submits Exhibit A: She is literally just iconic.",
  "Objection! Court notes that her 12:00 PM wake-up time was strictly prescribed beauty rest.",
  "Objection! The AI water consumption argument was dismissed due to overwhelming charm.",
  "Objection! The prosecution concedes that her standards are entirely justified.",
  "Objection! Court finds no evidence of flaws—only premium character traits."
];
