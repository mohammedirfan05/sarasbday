"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FLAWS_DATA } from "@/data/flaws";
import { loadProgress, saveProgress, RoastTone } from "@/lib/storage";
import StoryIntro from "@/components/StoryIntro";
import AppealCard from "@/components/AppealCard";
import ProgressDocket from "@/components/ProgressDocket";
import FinalVerdict from "@/components/FinalVerdict";
import SoundToggle from "@/components/SoundToggle";
import ObjectionButton from "@/components/ObjectionButton";

type AppPhase = "intro" | "cards" | "final_verdict";

export default function Home() {
  const [phase, setPhase] = useState<AppPhase>("intro");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dismissedCardIds, setDismissedCardIds] = useState<number[]>([]);
  const [tone] = useState<RoastTone>("medium");
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
      if (saved.hasSeenIntro) {
        setPhase("cards");
      }
    }
    setIsLoaded(true);
  }, []);

  const handleProceedFromIntro = () => {
    setPhase("cards");
    saveProgress({ hasSeenIntro: true });
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

  // Keyboard navigation for desktop testing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase !== "cards") return;
      if (e.key === "ArrowRight") {
        handleNextCard();
      } else if (e.key === "ArrowLeft") {
        handlePrevCard();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase, currentCardIndex]);

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

          {phase === "cards" && (
            <div key="cards" className="w-full h-full flex-1 flex flex-col p-3 sm:p-4 bg-story-gradient overflow-y-auto min-h-0">
              {/* Progress & Milestone Map */}
              <div className="w-full flex-shrink-0 pt-1 pb-1">
                <ProgressDocket
                  totalCards={FLAWS_DATA.length}
                  currentIndex={currentCardIndex}
                  dismissedCardIds={dismissedCardIds}
                  onSelectCard={handleSelectCardFromDocket}
                  interludeMilestone={interludeMilestone}
                  onDismissMilestone={() => setInterludeMilestone(null)}
                />
              </div>

              {/* Individual Flaw Card - Vertically Centered */}
              <div className="w-full flex-1 flex flex-col justify-center items-center my-auto min-h-0 py-2">
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
              </div>

              {/* Floating Courtroom Gavel Objection Button */}
              <ObjectionButton />
            </div>
          )}

          {phase === "final_verdict" && (
            <div key="final_verdict" className="w-full h-full flex-1 overflow-y-auto bg-[#FAF7F2]">
              <FinalVerdict onReplay={handleReplay} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
