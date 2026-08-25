"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FLAWS_DATA } from "@/data/flaws";
import { loadProgress, saveProgress, RoastTone } from "@/lib/storage";
import StoryIntro from "@/components/StoryIntro";
import ToneGate from "@/components/ToneGate";
import AppealCard from "@/components/AppealCard";
import ProgressDocket from "@/components/ProgressDocket";
import FinalVerdict from "@/components/FinalVerdict";
import SoundToggle from "@/components/SoundToggle";
import ObjectionButton from "@/components/ObjectionButton";

type AppPhase = "intro" | "tone_gate" | "cards" | "final_verdict";

export default function Home() {
  const [phase, setPhase] = useState<AppPhase>("intro");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dismissedCardIds, setDismissedCardIds] = useState<number[]>([]);
  const [tone, setTone] = useState<RoastTone>("medium");
  const [interludeMilestone, setInterludeMilestone] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved state from LocalStorage on mount
  useEffect(() => {
    const saved = loadProgress();
    if (saved) {
      if (saved.dismissedCardIds && saved.dismissedCardIds.length > 0) {
        setDismissedCardIds(saved.dismissedCardIds);
      }
      if (saved.currentCardIndex !== undefined) {
        setCurrentCardIndex(saved.currentCardIndex);
      }
      if (saved.tone) {
        setTone(saved.tone);
      }
      if (saved.hasSeenIntro) {
        setPhase("cards");
      }
    }
    setIsLoaded(true);
  }, []);

  const handleProceedFromIntro = () => {
    setPhase("tone_gate");
  };

  const handleSelectTone = (selectedTone: RoastTone) => {
    setTone(selectedTone);
    setPhase("cards");
    saveProgress({ tone: selectedTone, hasSeenIntro: true });
  };

  const handleSkipToVerdict = () => {
    setPhase("final_verdict");
  };

  const handleDismissCard = (flawId: number) => {
    setDismissedCardIds((prev) => {
      if (prev.includes(flawId)) return prev;
      const updated = [...prev, flawId];
      saveProgress({ dismissedCardIds: updated });

      // Check milestones (every 5 cards)
      const count = updated.length;
      if (count % 5 === 0 && count <= 30) {
        setInterludeMilestone(count);
      }

      return updated;
    });
  };

  const handleNextCard = () => {
    if (currentCardIndex < FLAWS_DATA.length - 1) {
      const nextIdx = currentCardIndex + 1;
      setCurrentCardIndex(nextIdx);
      saveProgress({ currentCardIndex: nextIdx });
    } else {
      setPhase("final_verdict");
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      const prevIdx = currentCardIndex - 1;
      setCurrentCardIndex(prevIdx);
      saveProgress({ currentCardIndex: prevIdx });
    }
  };

  const handleSelectCardFromDocket = (index: number) => {
    setCurrentCardIndex(index);
    saveProgress({ currentCardIndex: index });
  };

  const handleReplay = () => {
    setCurrentCardIndex(0);
    setPhase("intro");
  };

  if (!isLoaded) {
    return (
      <main className="min-h-[100dvh] w-full flex items-center justify-center bg-[#141018] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#E05A47] border-t-transparent animate-spin" />
          <span className="font-mono text-xs text-white/60 tracking-widest uppercase">
            Opening Case Docket...
          </span>
        </div>
      </main>
    );
  }

  const currentFlaw = FLAWS_DATA[currentCardIndex] || FLAWS_DATA[0];
  const isCurrentDismissed = dismissedCardIds.includes(currentFlaw.id);

  return (
    <main className="relative min-h-[100dvh] w-full bg-[#141018] flex flex-col items-center justify-center overflow-x-hidden p-0 sm:p-4">
      {/* Non-scrolling Noise Layer for Texture Depth */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50" />

      {/* Floating Sound Toggle */}
      <SoundToggle />

      {/* Desktop / Ambient Frame Wrapper */}
      <div className="w-full max-w-md min-h-[100dvh] sm:min-h-[740px] sm:h-[840px] sm:max-h-[92vh] sm:rounded-[2.5rem] sm:border sm:border-white/10 sm:shadow-2xl sm:shadow-black/70 bg-[#1A1918] flex flex-col relative overflow-hidden">
        {/* Phase Flow */}
        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <StoryIntro key="intro" onProceed={handleProceedFromIntro} />
          )}

          {phase === "tone_gate" && (
            <div key="tone_gate" className="w-full h-full flex-1 flex flex-col overflow-y-auto">
              <ToneGate
                initialTone={tone}
                onSelectTone={handleSelectTone}
                onSkipToVerdict={handleSkipToVerdict}
              />
            </div>
          )}

          {phase === "cards" && (
            <div key="cards" className="w-full h-full flex-1 flex flex-col justify-between p-3 sm:p-4 bg-story-gradient overflow-y-auto">
              {/* Progress & Milestone Map */}
              <ProgressDocket
                totalCards={FLAWS_DATA.length}
                currentIndex={currentCardIndex}
                dismissedCardIds={dismissedCardIds}
                onSelectCard={handleSelectCardFromDocket}
                interludeMilestone={interludeMilestone}
                onDismissMilestone={() => setInterludeMilestone(null)}
              />

              {/* Individual Flaw Card */}
              <AppealCard
                key={currentFlaw.id}
                flaw={currentFlaw}
                currentIndex={currentCardIndex}
                totalCards={FLAWS_DATA.length}
                tone={tone}
                isDismissed={isCurrentDismissed}
                onDismiss={handleDismissCard}
                onNext={handleNextCard}
                onPrev={handlePrevCard}
                canPrev={currentCardIndex > 0}
                canNext={true}
              />

              {/* Floating Courtroom Gavel Objection Button */}
              <ObjectionButton />
            </div>
          )}

          {phase === "final_verdict" && (
            <div key="final_verdict" className="w-full h-full flex-1 flex flex-col overflow-y-auto">
              <FinalVerdict onReplay={handleReplay} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
