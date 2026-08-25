"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, RotateCw, Stamp, ArrowRight, ArrowLeft, Heart, Sparkles, AlertCircle } from "lucide-react";
import { FlawItem } from "@/data/flaws";
import { RoastTone } from "@/lib/storage";
import { sound } from "@/lib/audio";
import ScratchCard from "./ScratchCard";
import SpecialExhibits from "./SpecialExhibits";

interface AppealCardProps {
  flaw: FlawItem;
  currentIndex: number;
  totalCards: number;
  tone: RoastTone;
  isDismissed: boolean;
  onDismiss: (flawId: number) => void;
  onNext: () => void;
  onPrev: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export default function AppealCard({
  flaw,
  currentIndex,
  totalCards,
  tone,
  isDismissed,
  onDismiss,
  onNext,
  onPrev,
  canPrev,
  canNext,
}: AppealCardProps) {
  const [isFlipped, setIsFlipped] = useState(isDismissed);
  const [holdProgress, setHoldProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [shakeCard, setShakeCard] = useState(false);

  useEffect(() => {
    setIsFlipped(isDismissed);
  }, [isDismissed, flaw.id]);

  // Handle stamp slam
  const handleStampSlam = () => {
    sound.playStamp();
    setShakeCard(true);
    setTimeout(() => setShakeCard(false), 300);
    setIsFlipped(true);
    onDismiss(flaw.id);
  };

  // Handle 3D Flip
  const handleFlipToggle = () => {
    sound.playClick();
    const nextState = !isFlipped;
    setIsFlipped(nextState);
    if (nextState && !isDismissed) {
      onDismiss(flaw.id);
    }
  };

  // Handle Scratch Reveal
  const handleScratchReveal = () => {
    setIsFlipped(true);
    onDismiss(flaw.id);
  };

  // Handle Hold to Testify progress
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHolding && !isFlipped && holdProgress < 100) {
      timer = setInterval(() => {
        setHoldProgress((prev) => Math.min(100, prev + 5));
      }, 35);
    } else if (!isHolding && holdProgress < 100) {
      setHoldProgress(0);
    }
    return () => clearInterval(timer);
  }, [isHolding, isFlipped, holdProgress]);

  // When hold progress completes, trigger slam safely outside of render/reducer
  useEffect(() => {
    if (holdProgress >= 100 && !isFlipped) {
      handleStampSlam();
    }
  }, [holdProgress, isFlipped]);

  return (
    <div className="relative w-full max-w-md mx-auto flex flex-col justify-between py-2 px-1">
      {/* Top Docket Bar */}
      <div className="flex items-center justify-between px-2 pb-2 text-xs">
        <div className="flex items-center gap-1.5 font-mono text-[#FAF7F2]/80">
          <span className="w-2 h-2 rounded-full bg-[#E05A47] animate-ping" />
          <span className="font-bold text-amber-300">{flaw.docketCode}</span>
        </div>

        <span className="font-mono text-[11px] text-white/60">
          Case {currentIndex + 1} of {totalCards}
        </span>
      </div>

      {/* Main Physical Scrapbook Card */}
      <motion.div
        key={flaw.id}
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: -15 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className={`relative w-full rounded-2xl scrapbook-paper text-[#1A1918] p-5 sm:p-6 overflow-hidden transition-transform ${
          shakeCard ? "animate-screen-shake" : ""
        }`}
      >
        {/* Tape Strips at Corners for Scrapbook Aesthetic */}
        <div className="absolute -top-3 left-8 w-16 h-6 bg-amber-200/70 -rotate-6 border border-amber-300/50 shadow-sm pointer-events-none" />
        <div className="absolute -top-3 right-8 w-16 h-6 bg-amber-200/70 rotate-6 border border-amber-300/50 shadow-sm pointer-events-none" />

        {/* Scratch Card Overlay if applicable */}
        {flaw.interactionType === "scratch" && !isDismissed && (
          <ScratchCard
            onReveal={handleScratchReveal}
            isRevealed={isFlipped || isDismissed}
            coverTitle="SCRATCH CONFIDENTIAL CHARGE"
            coverSubtitle="Reveal the affectionate truth underneath"
          />
        )}

        {/* Category & Status Badges */}
        <div className="flex items-center justify-between mb-4 pt-1">
          <span className="px-2.5 py-0.5 rounded-full bg-[#1A1918]/5 text-[#5A5752] font-mono text-[10px] uppercase font-bold tracking-wider">
            {flaw.category}
          </span>

          {isDismissed ? (
            <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-700 font-bold uppercase tracking-wider bg-emerald-100/80 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3" /> Dismissed
            </span>
          ) : (
            <span className="flex items-center gap-1 font-mono text-[10px] text-[#E05A47] font-bold uppercase tracking-wider bg-rose-100 px-2 py-0.5 rounded-full">
              <AlertCircle className="w-3 h-3" /> On Trial
            </span>
          )}
        </div>

        {/* The Original Accusation Block */}
        <div className="mb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#E05A47] font-bold block mb-1">
            ORIGINAL CHARGE
          </span>
          <h3 className="font-display font-black text-xl sm:text-2xl text-[#1A1918] tracking-tight leading-snug">
            &ldquo;{flaw.original}&rdquo;
          </h3>
        </div>

        {/* Interaction Trigger Area if not yet revealed */}
        {!isFlipped && (
          <div className="my-5 p-4 rounded-xl bg-white/70 border border-[#E2DDD5] text-center">
            {flaw.interactionType === "stamp" && (
              <button
                onClick={handleStampSlam}
                className="w-full py-3.5 px-4 rounded-xl bg-[#E05A47] hover:bg-[#C84B31] active:scale-95 text-white font-display font-bold text-xs tracking-wider uppercase shadow-lg shadow-rose-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Stamp className="w-4 h-4" />
                <span>Slam Gavel &amp; Dismiss Charge</span>
              </button>
            )}

            {flaw.interactionType === "flip" && (
              <button
                onClick={handleFlipToggle}
                className="w-full py-3.5 px-4 rounded-xl bg-[#1A1918] hover:bg-[#2A2928] active:scale-95 text-[#FAF7F2] font-display font-bold text-xs tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCw className="w-4 h-4 text-amber-300" />
                <span>Flip Card to View Defense</span>
              </button>
            )}

            {flaw.interactionType === "hold" && (
              <button
                onPointerDown={() => setIsHolding(true)}
                onPointerUp={() => setIsHolding(false)}
                onPointerLeave={() => setIsHolding(false)}
                className="relative w-full py-3.5 px-4 rounded-xl bg-[#1A1918] text-[#FAF7F2] font-display font-bold text-xs tracking-wider uppercase shadow-md overflow-hidden flex items-center justify-center gap-2 select-none cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-[#2D6A4F] transition-all duration-75"
                  style={{ width: `${holdProgress}%` }}
                />
                <span className="relative z-10 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
                  <span>
                    {isHolding
                      ? `Testifying... ${holdProgress}%`
                      : "Hold Thumb to Testify"}
                  </span>
                </span>
              </button>
            )}

            {flaw.interactionType === "scratch" && (
              <p className="font-mono text-xs text-[#5A5752]">
                Scratch the dark coating with your finger to reveal the defense.
              </p>
            )}
          </div>
        )}

        {/* Revealed Truth & Affectionate Defense */}
        <AnimatePresence>
          {isFlipped && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-4 pt-4 border-t border-[#E2DDD5]"
            >
              {/* Rubber Stamp Slam Badge */}
              <div className="mb-3">
                <span className="court-stamp animate-stamp-slam text-xs text-[#2D6A4F] border-[#2D6A4F] bg-emerald-50/50">
                  {flaw.stampVerdict}
                </span>
              </div>

              {/* Tender Why Section */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-2">
                <span className="font-mono text-[9px] uppercase font-bold text-amber-900 tracking-wider flex items-center gap-1 mb-1">
                  <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                  <span>Why This Makes You Irreplaceable:</span>
                </span>
                <p className="font-handwritten text-xl sm:text-2xl text-[#1A1918] leading-tight font-bold">
                  &ldquo;{flaw.why}&rdquo;
                </p>
              </div>

              {/* Special interactive exhibits if configured */}
              {flaw.specialType && <SpecialExhibits type={flaw.specialType} />}

              {flaw.funFact && (
                <span className="font-mono text-[10px] text-[#5A5752] block text-center mt-3">
                  &bull; {flaw.funFact}
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Navigation Dock */}
      <div className="w-full flex items-center justify-between gap-3 mt-3 px-1">
        <button
          onClick={() => {
            sound.playClick();
            onPrev();
          }}
          disabled={!canPrev}
          aria-label="Previous case"
          className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-mono tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer backdrop-blur-md border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Prev Case</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            onNext();
          }}
          disabled={!canNext}
          aria-label="Next case"
          className="flex-1 py-3 px-4 rounded-xl bg-[#FAF7F2] hover:bg-white active:scale-95 disabled:opacity-30 disabled:pointer-events-none text-[#1A1918] text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-lg"
        >
          <span>Next Case</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E05A47]" />
        </button>
      </div>
    </div>
  );
}
