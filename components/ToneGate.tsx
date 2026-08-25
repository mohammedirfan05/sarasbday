"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, ArrowRight, HeartHandshake, Flame, Sparkles, FastForward } from "lucide-react";
import { RoastTone } from "@/lib/storage";
import { sound } from "@/lib/audio";

interface ToneGateProps {
  initialTone: RoastTone;
  onSelectTone: (tone: RoastTone) => void;
  onSkipToVerdict: () => void;
}

export default function ToneGate({
  initialTone,
  onSelectTone,
  onSkipToVerdict,
}: ToneGateProps) {
  const [selectedTone, setSelectedTone] = useState<RoastTone>(initialTone);

  const handleToneChange = (tone: RoastTone) => {
    sound.playClick();
    setSelectedTone(tone);
  };

  const handleConfirm = () => {
    sound.playStamp();
    onSelectTone(selectedTone);
  };

  const previewExamples: Record<RoastTone, { label: string; roast: string; badge: string }> = {
    soft: {
      label: "Soft & Sweet",
      badge: "Mild Banter",
      roast: "Mildly skeptical of approximately 50% of the global population.",
    },
    medium: {
      label: "Courtroom Sarcasm",
      badge: "Standard Sass",
      roast: "Her default setting for men is 'suspicious until proven tolerable'.",
    },
    drama: {
      label: "Supreme Drama",
      badge: "Full Theatrics",
      roast: "Treats meeting new guys like an FBI background check with zero bail options.",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="relative w-full max-w-md mx-auto min-h-[100dvh] flex flex-col justify-between p-5 sm:p-6 bg-[#FAF7F2] text-[#1A1918] overflow-hidden"
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-[#E2DDD5]">
          <div className="flex items-center gap-2">
            <span className="court-stamp text-[10px] text-[#2D6A4F] border-[#2D6A4F]">
              SECTION 02
            </span>
            <span className="font-mono text-xs text-[#5A5752] uppercase tracking-wider">
              Tone Calibration
            </span>
          </div>
          <SlidersHorizontal className="w-4 h-4 text-[#5A5752]" />
        </div>

        <div className="mt-5">
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#1A1918]">
            Set The Roast Intensity
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5A5752] mt-1.5 leading-relaxed">
            You are the judge. Pick how dramatic the accusations should sound before they are dismissed into tributes.
          </p>
        </div>

        {/* Tone Selector Options */}
        <div className="grid grid-cols-1 gap-3 mt-6">
          {/* Soft */}
          <button
            onClick={() => handleToneChange("soft")}
            className={`w-full p-3.5 rounded-xl text-left border-2 transition-all cursor-pointer flex items-center justify-between ${
              selectedTone === "soft"
                ? "bg-emerald-50 border-[#2D6A4F] shadow-md shadow-emerald-900/5"
                : "bg-white border-[#E2DDD5] hover:border-[#2D6A4F]/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  selectedTone === "soft"
                    ? "bg-[#2D6A4F] text-white"
                    : "bg-emerald-100 text-[#2D6A4F]"
                }`}
              >
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-[#1A1918]">
                  Soft &amp; Sweet
                </h4>
                <p className="font-sans text-xs text-[#5A5752]">
                  Gentle teasing with maximum tenderness.
                </p>
              </div>
            </div>
            {selectedTone === "soft" && (
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A4F]" />
            )}
          </button>

          {/* Medium */}
          <button
            onClick={() => handleToneChange("medium")}
            className={`w-full p-3.5 rounded-xl text-left border-2 transition-all cursor-pointer flex items-center justify-between ${
              selectedTone === "medium"
                ? "bg-amber-50 border-[#D4AF37] shadow-md shadow-amber-900/5"
                : "bg-white border-[#E2DDD5] hover:border-[#D4AF37]/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  selectedTone === "medium"
                    ? "bg-[#D4AF37] text-white"
                    : "bg-amber-100 text-[#B38F24]"
                }`}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-bold text-sm text-[#1A1918]">
                    Courtroom Sarcasm
                  </h4>
                  <span className="px-1.5 py-0.5 rounded bg-amber-200/60 font-mono text-[9px] font-bold text-amber-900">
                    RECOMMENDED
                  </span>
                </div>
                <p className="font-sans text-xs text-[#5A5752]">
                  Balanced banter. Classic best friend energy.
                </p>
              </div>
            </div>
            {selectedTone === "medium" && (
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
            )}
          </button>

          {/* Drama */}
          <button
            onClick={() => handleToneChange("drama")}
            className={`w-full p-3.5 rounded-xl text-left border-2 transition-all cursor-pointer flex items-center justify-between ${
              selectedTone === "drama"
                ? "bg-rose-50 border-[#E05A47] shadow-md shadow-rose-900/5"
                : "bg-white border-[#E2DDD5] hover:border-[#E05A47]/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  selectedTone === "drama"
                    ? "bg-[#E05A47] text-white"
                    : "bg-rose-100 text-[#E05A47]"
                }`}
              >
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-[#1A1918]">
                  Supreme Drama
                </h4>
                <p className="font-sans text-xs text-[#5A5752]">
                  Unfiltered theatrical courtroom exaggeration.
                </p>
              </div>
            </div>
            {selectedTone === "drama" && (
              <span className="w-2.5 h-2.5 rounded-full bg-[#E05A47]" />
            )}
          </button>
        </div>

        {/* Dynamic Microcopy Preview Box */}
        <div className="mt-5 p-3.5 rounded-xl bg-white border border-[#E2DDD5] shadow-sm">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#5A5752]">
              Live Docket Preview (Flaw 01)
            </span>
            <span className="px-2 py-0.5 rounded-full bg-gray-100 font-mono text-[9px] text-gray-700">
              {previewExamples[selectedTone].badge}
            </span>
          </div>
          <p className="font-sans text-xs italic text-[#1A1918] leading-relaxed">
            &ldquo;{previewExamples[selectedTone].roast}&rdquo;
          </p>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="w-full flex flex-col items-center gap-3 pt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleConfirm}
          className="w-full py-4 px-6 rounded-2xl bg-[#1A1918] text-[#FAF7F2] font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl hover:bg-[#2A2928] active:bg-black transition-all cursor-pointer"
        >
          <span>Open Case Docket</span>
          <ArrowRight className="w-4 h-4 text-[#E05A47]" />
        </motion.button>

        <button
          onClick={onSkipToVerdict}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5A5752] hover:text-[#1A1918] transition-colors cursor-pointer py-1"
        >
          <FastForward className="w-3.5 h-3.5" />
          <span>Skip teasing, take me to the birthday note</span>
        </button>
      </div>
    </motion.div>
  );
}
