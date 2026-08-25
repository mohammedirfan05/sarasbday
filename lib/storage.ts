export type RoastTone = "soft" | "medium" | "drama";

export interface CourtProgress {
  currentCardIndex: number;
  dismissedCardIds: number[];
  tone: RoastTone;
  hasSeenIntro: boolean;
  objectionsRaised: number;
  unlockedEnvelopes: number[];
  candleLit: boolean;
}

const STORAGE_KEY = "saras_bday_court_progress_v2";

export function loadProgress(): CourtProgress {
  if (typeof window === "undefined") {
    return {
      currentCardIndex: 0,
      dismissedCardIds: [],
      tone: "medium",
      hasSeenIntro: false,
      objectionsRaised: 0,
      unlockedEnvelopes: [],
      candleLit: false,
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        currentCardIndex: 0,
        dismissedCardIds: [],
        tone: "medium",
        hasSeenIntro: false,
        objectionsRaised: 0,
        unlockedEnvelopes: [],
        candleLit: false,
      };
    }
    return JSON.parse(raw);
  } catch {
    return {
      currentCardIndex: 0,
      dismissedCardIds: [],
      tone: "medium",
      hasSeenIntro: false,
      objectionsRaised: 0,
      unlockedEnvelopes: [],
      candleLit: false,
    };
  }
}

export function saveProgress(progress: Partial<CourtProgress>) {
  if (typeof window === "undefined") return;
  try {
    const current = loadProgress();
    const updated = { ...current, ...progress };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Ignore storage quota errors
  }
}

export function resetCourtProgress() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
}
