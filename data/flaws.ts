export type InteractionType = "scratch" | "flip" | "stamp" | "hold";
export type SpecialType = "ai_water" | "noon_alarm" | "snap_score" | "lash_flutter" | "gaslight_meter";

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
    docketCode: "DOCKET #01/26",
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
    why: "You literally never lower your standards for anyone and watching you protect your peace is better anyway.",
    funFact: "0 men harmed, but several fragile egos definitely bruised."
  },
  {
    id: 2,
    docketCode: "DOCKET #02/26",
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
    docketCode: "DOCKET #03/26",
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
    why: "You can just vanish into your own zone, mind your business, and be completely unbothered in your own bubble for hours idrc cutiee i still love u either way 😋",
    funFact: "Defendant's average daily FYP consumption: off the charts."
  },
  {
    id: 4,
    docketCode: "DOCKET #04/26",
    original: "Has multiple spam accounts (4+)",
    category: "Social Lore",
    stampVerdict: "CLASSIFIED DOSSIER",
    interactionType: "stamp",
    roastVariants: {
      soft: "Maintains private accounts for her inner circle.",
      medium: "Has multiple distinct spam accounts for different moods.",
      drama: "Running a whole multi-account covert network with zero intention of following randoms back."
    },
    translation: "She keeps her personal life exclusive, sharing different sides of herself only with those who earned it.",
    why: "Watching you keep your world private, goofy, and reserved for the people who actually matter is lowk one of the hardest things about you.",
    funFact: "Covert security level: Maximum."
  },
  {
    id: 5,
    docketCode: "DOCKET #05/26",
    original: "Binge-watches movies the whole day",
    category: "Daily Habits",
    stampVerdict: "CINEMA CERTIFIED",
    interactionType: "scratch",
    roastVariants: {
      soft: "Just a casual cinematic deep dive.",
      medium: "Will sit down and knock out movie after movie before realizing the sun went down.",
      drama: "Treats movie marathons like an Olympic sport where leaving the blanket is an immediate disqualification."
    },
    translation: "When she locks into a story, she lives inside it completely and feels every single scene.",
    why: "I love how intensely you get invested in characters and stories when something catches your interest especially marvel stuff.",
    funFact: "Marathon endurance: 10/10."
  },
  {
    id: 6,
    docketCode: "DOCKET #06/26",
    original: "Still stalks their ex but lies to themselves",
    category: "The Secret Soft Side",
    stampVerdict: "CASE EXPUNGED",
    interactionType: "scratch",
    roastVariants: {
      soft: "Routine historical research check.",
      medium: "Says 'I literally don't care at all' while checking in anyway.",
      drama: "The FBI wishes they had her 2:00 AM forensic tracking capabilities."
    },
    translation: "It's not that she misses him; she just needs visual proof that his fits are still tragic and the glow-down happened.",
    why: "You're messy in the most hilarious, human way possible and you're 1000x out of his league anyway.",
    funFact: "Status: 100% out of his league."
  },
  {
    id: 7,
    docketCode: "DOCKET #07/26",
    original: "Hates AI",
    category: "Personality Crimes",
    stampVerdict: "100% ORGANIC HUMAN",
    interactionType: "stamp",
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
    docketCode: "DOCKET #08/26",
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
    why: "You don’t switch up what you believe in just because everyone else thinks differently. You really stand on your shit, and I respect you for that.",
    funFact: "Ballon d'Or vote: Permanently withheld."
  },
  {
    id: 9,
    docketCode: "DOCKET #09/26",
    original: "Wakes up almost at noon",
    category: "Daily Habits",
    stampVerdict: "BEAUTY REST CHAMPION",
    interactionType: "hold",
    specialType: "noon_alarm",
    roastVariants: {
      soft: "Operates on a luxury European schedule.",
      medium: "The world starts at 7 AM; Sara's consciousness doesn't boot up until lunchtime.",
      drama: "Thinks morning people are literally insane and actively participating in a psychological experiment."
    },
    translation: "She runs on late-night creativity and refuses to pretend morning alarms were ever a good idea.",
    why: "Those random late night convos i have with u are literally the best ones and my fav.",
    funFact: "Morning alarms survived: 14 snoozes."
  },
  {
    id: 10,
    docketCode: "DOCKET #10/26",
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
    why: "Welpp You only do things that genuinely bring you joy and you drop whatever bores you without guilt.",
    funFact: "Steam completion rate: perfectly chaotic."
  },
  {
    id: 11,
    docketCode: "DOCKET #11/26",
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
    why: "You have your own mind and you don't just swallow what people tell you to believe and its ur choice tbh.",
    funFact: "Belief in Sara being iconic: 100% statistically confirmed."
  },
  {
    id: 12,
    docketCode: "DOCKET #12/26",
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
    why: "I love how you get genuinely excited about the places and shit you wanna experience. Go live ur best life, , ill always be ur side no matter what .",
    funFact: "Dream Starbucks order: venti iced vanilla latte."
  },
  {
    id: 13,
    docketCode: "DOCKET #13/26",
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
    docketCode: "DOCKET #14/26",
    original: "Gaslights and tries to put the blame on others",
    category: "Personality Crimes",
    stampVerdict: "CHIEF DEFENSE ATTY",
    interactionType: "hold",
    specialType: "gaslight_meter",
    roastVariants: {
      soft: "Re-edits the narrative in real time with incredible confidence.",
      medium: "Will drop a glass and somehow convince you that gravity was your fault.",
      drama: "Could walk into a courtroom with zero evidence and leave the judge apologizing to her."
    },
    translation: "She has the debate timing of a supreme court lawyer and arguing with her is absurdly entertaining.",
    why: "Uhm your little arguments, and the way you never back down are honestly some of my favorite things about you.  .",
    funFact: "Winning rate in trivial arguments: 99.8%."
  },
  {
    id: 15,
    docketCode: "DOCKET #15/26",
    original: "Dry replies / mood swings",
    category: "The Secret Soft Side",
    stampVerdict: "DYNAMIC WEATHER",
    interactionType: "hold",
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
    docketCode: "DOCKET #16/26",
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
    why: "I actually like that talking to you never feels predictable. You can have one opinion today and some completely different take tomorrow and somehow it's still fun listening to you yap about it.",
    funFact: "Status: pending next week's discourse."
  },
  {
    id: 17,
    docketCode: "DOCKET #17/26",
    original: "1m+ snap score",
    category: "Social Lore",
    stampVerdict: "STREAK ROYALTY",
    interactionType: "stamp",
    specialType: "snap_score",
    roastVariants: {
      soft: "High-bandwidth social connectivity.",
      medium: "Her thumbs have sent enough red squares to build a 3-bedroom brick house.",
      drama: "Snapchat should literally erect a bronze statue of her outside their headquarters."
    },
    translation: "She is fiercely loyal to her friendships and keeps people in her daily orbit no matter what.",
    why: "I actually think it's really cute how you keep in touch with your people and make them a part of your everyday life. It says a lot about how much you value the people you care about.",
    funFact: "Snap streak longevity: ancient."
  },
  {
    id: 18,
    docketCode: "DOCKET #18/26",
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
    why: "Okayyy you may not like the outfits I liked, but I’ll let that slide because at least you know what you like and you actually stick to your own taste. I’ll keep my questionable outfit opinions to myself now.",
    funFact: "Strangers staring in awe: daily."
  },
  {
    id: 19,
    docketCode: "DOCKET #19/26",
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
    why: "You liking attention honestly isn't even a crime when you make it this easy to give you. You deserve even every little thing.",
    funFact: "Stage presence level: 10/10."
  },
  {
    id: 20,
    docketCode: "DOCKET #20/26",
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
    why: "You can say 'idc' all you want but I know that little sentence isn't always the whole story. And honestly, that softer side of you is sumn my fav, especially after all this time i be messing and u still dont give up on me.",
    funFact: "Heart size: noticeably large."
  },
  {
    id: 21,
    docketCode: "DOCKET #21/26",
    original: "Thinks AI consumes all the water",
    category: "Personality Crimes",
    stampVerdict: "ECO CONSCIOUS",
    interactionType: "stamp",
    specialType: "ai_water",
    roastVariants: {
      soft: "Monitoring data center cooling ethics.",
      medium: "Convinced that every prompt typed in ChatGPT drinks a local lake dry.",
      drama: "Guards the kitchen tap with her life every time someone opens an AI app."
    },
    translation: "She cares about the real physical world and isn't blinded by tech hype.",
    why: "I kinda love that you can hear some random fact about AI and immediately start caring about whether it's actually doing something bad (it doesnt but ok).",
    funFact: "Water tank status: fully replenished."
  },
  {
    id: 22,
    docketCode: "DOCKET #22/26",
    original: "Hates marriage",
    category: "Personality Crimes",
    stampVerdict: "DYNASTY PROTOCOL",
    interactionType: "stamp",
    roastVariants: {
      soft: "Values absolute sovereign freedom.",
      medium: "Looks at wedding Pinterest boards with mild biological disgust.",
      drama: "Refuses to sign any contract where she can't fire the other party on 24 hours notice."
    },
    translation: "She knows her worth and refuses to conform to traditional scripts just to please society.",
    why: "Honestly, I kinda respect you for knowing what you don't want instead of forcing yourself into sumn just because everyone says you should.",
    funFact: "Court finds: Future self-made dynasty confirmed."
  },
  {
    id: 23,
    docketCode: "DOCKET #23/26",
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
    why: "The requirements are fucking insane but I can't even hate because at least you know exactly what you want. uhm, we'll figure the weight thing out dont worry lol (i love u the way u are rn btw).",
    funFact: "Height filter: strictly enforced at the gate."
  },
  {
    id: 24,
    docketCode: "DOCKET #24/26",
    original: "Uses eye lashes often",
    category: "Aesthetic Rules",
    stampVerdict: "HIGH GLAMOUR",
    interactionType: "scratch",
    specialType: "lash_flutter",
    roastVariants: {
      soft: "Elevates visual presentation with precision lash engineering.",
      medium: "One blink and she creates a gentle localized breeze in the room.",
      drama: "Treats putting on lashes like performing delicate open-heart surgery with high stakes."
    },
    translation: "She takes pride in looking incredible and turns beauty routines into an absolute art form.",
    why: "Okay I can't even lie, the lashes are kinda your thing. You clearly love putting that little extra effort in and honestly, it suits you",
    funFact: "Lash flutter aerodynamic rating: Category 5."
  },
  {
    id: 25,
    docketCode: "DOCKET #25/26",
    original: "Has their spam account mentioned in their main",
    category: "Social Lore",
    stampVerdict: "OPEN SECRET",
    interactionType: "hold",
    roastVariants: {
      soft: "A transparent doorway to her private diary.",
      medium: "Puts the secret password in neon lights on the front porch.",
      drama: "The world's least undercover covert operation in social media history."
    },
    translation: "She keeps her spam account linked for aesthetic symmetry, then keeps it completely exclusive.",
    why: "Uhm i really wished i could be part of ur spam but its just i dont wanna make u feel even slightly weird or sumn. and yea ik you can trust me but idk its still ur space and ik you love ur space",
    funFact: "Bio status: strictly VIP access only."
  },
  {
    id: 26,
    docketCode: "DOCKET #26/26",
    original: "Most often uses these Sabrina Carpenter gifs, especially in their girl BSF posts or somewhere",
    category: "The Secret Soft Side",
    stampVerdict: "SHORT N' SWEET ICON",
    interactionType: "stamp",
    roastVariants: {
      soft: "Communicates via top-tier pop princess micro-reactions.",
      medium: "Her emotional vocabulary is 80% Sabrina flips, winks, micro-shrugs, and chaos.",
      drama: "Sabrina Carpenter should be paying her royalties for global GIF distribution."
    },
    translation: "Her reaction GIFs are basically a fluent second language of charm, sarcasm, and confidence.",
    why: " i have absolutely no evidence for this one btw, it just felt right putting it here cuz uhm idk i love u but ik u hate me after this, i am really sorry",
    funFact: "Reaction speed with top-tier GIFs: instant."
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
