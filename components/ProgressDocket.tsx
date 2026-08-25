"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, X, Check, Award, ArrowRight } from "lucide-react";
import { sound } from "@/lib/audio";
import { fireMiniBurst } from "@/lib/confetti";

interface ProgressDocketProps {
  totalCards: number;
  currentIndex: number;
  dismissedCardIds: number[];
  onSelectCard: (index: number) => void;
  interludeMilestone: number | null;
  onDismissMilestone: () => void;
}

export default function ProgressDocket({
  totalCards,
  currentIndex,
  dismissedCardIds,
  onSelectCard,
  interludeMilestone,
  onDismissMilestone,
}: ProgressDocketProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDocket = () => {
    sound.playClick();
    setIsOpen(!isOpen);
  };

  const handleSelect = (idx: number) => {
    sound.playClick();
    onSelectCard(idx);
    setIsOpen(false);
  };

  const dismissedCount = dismissedCardIds.length;
  const progressPercent = Math.round((dismissedCount / totalCards) * 100);

  const milestoneMessages: Record<number, { title: string; subtitle: string; stamp: string }> = {
    5: {
      title: "5 Charges Dismissed!",
      subtitle: "Court is beginning to suspect the defendant is actually just iconic.",
      stamp: "5-0 STREAK",
    },
    10: {
      title: "10 Charges Dismissed!",
      subtitle: "The defense team is undefeated. Prosecution is questioning their life choices.",
      stamp: "DOUBLE DIGITS",
    },
    15: {
      title: "Halfway Through The Docket!",
      subtitle: "15 flaws flipped into undeniable proof of main character energy.",
      stamp: "HALFWAY ACQUITTED",
    },
    20: {
      title: "20 Charges Dismissed!",
      subtitle: "The jury has stopped taking notes and is just applauding her style.",
      stamp: "JURY DAZZLED",
    },
    25: {
      title: "25 Charges Dismissed!",
      subtitle: "Almost at the finish line. Prosecution is preparing a formal apology letter.",
      stamp: "NEAR PERFECTION",
    },
    30: {
      title: "All 30 Charges Overturned!",
      subtitle: "The courtroom has dissolved into a birthday tribute ceremony.",
      stamp: "UNCONDITIONAL VICTORY",
    },
  };

  return (
    <>
      {/* Top Floating Progress Bar Button */}
      <div className="w-full max-w-md mx-auto px-4 py-2 flex items-center justify-between">
        <button
          onClick={toggleDocket}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/90 text-xs font-mono hover:bg-black/60 active:scale-95 transition-all cursor-pointer"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-amber-300" />
          <span>
            Docket: {dismissedCount}/{totalCards} Dismissed
          </span>
        </button>

        {/* Mini progress track */}
        <div className="flex-1 max-w-[120px] mx-3 h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 via-rose-400 to-emerald-400"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <span className="font-mono text-xs text-white/80">{progressPercent}%</span>
      </div>

      {/* 30-Dot Full Docket Drawer Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm p-6 rounded-2xl bg-[#FAF7F2] text-[#1A1918] border-2 border-[#1A1918] shadow-2xl"
            >
              <button
                onClick={toggleDocket}
                className="absolute top-4 right-4 p-1 rounded-full text-gray-500 hover:text-black hover:bg-black/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="court-stamp text-[10px] text-[#2D6A4F] border-[#2D6A4F]">
                  DOCKET PINBOARD
                </span>
              </div>
              <h3 className="font-display font-black text-xl mb-1">
                Case Files Archive
              </h3>
              <p className="font-sans text-xs text-gray-600 mb-4">
                Tap any case dot to jump to that accusation card.
              </p>

              {/* 30 Dots Grid */}
              <div className="grid grid-cols-6 gap-2.5 p-3 rounded-xl bg-white border border-[#E2DDD5] mb-4">
                {Array.from({ length: totalCards }).map((_, idx) => {
                  const cardId = idx + 1;
                  const isDone = dismissedCardIds.includes(cardId);
                  const isCurrent = currentIndex === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      className={`h-9 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer border ${
                        isCurrent
                          ? "bg-[#1A1918] text-amber-300 border-[#1A1918] scale-110 shadow-md ring-2 ring-amber-400"
                          : isDone
                          ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                          : "bg-gray-100 text-gray-400 border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center text-[11px] font-mono text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Dismissed
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> Active Case
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-300" /> Pending
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Milestone Interlude Modal (Every 5 cards) */}
      <AnimatePresence>
        {interludeMilestone && milestoneMessages[interludeMilestone] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-sm p-6 sm:p-7 rounded-3xl bg-[#FAF7F2] text-[#1A1918] border-3 border-[#D4AF37] shadow-2xl text-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shadow-md">
                <Award className="w-7 h-7" />
              </div>

              <span className="court-stamp animate-stamp-slam text-xs text-[#2D6A4F] border-[#2D6A4F] mb-3">
                {milestoneMessages[interludeMilestone].stamp}
              </span>

              <h3 className="font-display font-black text-2xl mb-2 text-[#1A1918]">
                {milestoneMessages[interludeMilestone].title}
              </h3>

              <p className="font-sans text-sm text-[#3A3835] leading-relaxed mb-6">
                {milestoneMessages[interludeMilestone].subtitle}
              </p>

              <button
                onClick={() => {
                  sound.playFanfare();
                  fireMiniBurst(0.5, 0.4);
                  onDismissMilestone();
                }}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#1A1918] hover:bg-black text-[#FAF7F2] font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <span>Continue The Trial</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
