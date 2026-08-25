"use client";

import React, { useState } from "react";
import { Gavel, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/audio";
import { OBJECTIONS_DATA } from "@/data/flaws";
import { fireMiniBurst } from "@/lib/confetti";

export default function ObjectionButton() {
  const [currentObjection, setCurrentObjection] = useState<string | null>(null);

  const raiseObjection = () => {
    sound.playGavel();
    fireMiniBurst(0.85, 0.85);
    const randomIndex = Math.floor(Math.random() * OBJECTIONS_DATA.length);
    setCurrentObjection(OBJECTIONS_DATA[randomIndex]);
  };

  const closeObjection = () => {
    sound.playClick();
    setCurrentObjection(null);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={raiseObjection}
        aria-label="Raise an objection in court"
        className="fixed bottom-5 right-4 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#1A1918] text-[#FAF7F2] border border-[#E05A47]/40 shadow-xl shadow-black/30 text-xs font-bold tracking-wider uppercase cursor-pointer hover:bg-[#2A2928] transition-colors"
      >
        <Gavel className="w-4 h-4 text-[#E05A47] rotate-[-20deg]" />
        <span>Objection!</span>
      </motion.button>

      <AnimatePresence>
        {currentObjection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-sm p-6 rounded-2xl bg-[#FAF7F2] text-[#1A1918] border-2 border-[#E05A47] shadow-2xl"
            >
              <button
                onClick={closeObjection}
                className="absolute top-3.5 right-3.5 p-1 rounded-full text-[#1A1918]/60 hover:text-[#1A1918] hover:bg-black/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="court-stamp text-xs text-[#E05A47] border-[#E05A47]">
                  SUSTAINED
                </span>
                <span className="font-mono text-[10px] text-[#5A5752] uppercase tracking-widest">
                  Emergency Motion
                </span>
              </div>

              <h4 className="font-display font-bold text-lg mb-2 text-[#1A1918]">
                Court Overrules The Prosecution
              </h4>
              <p className="font-sans text-sm text-[#3A3835] leading-relaxed mb-4">
                &ldquo;{currentObjection}&rdquo;
              </p>

              <button
                onClick={closeObjection}
                className="w-full py-2.5 rounded-xl bg-[#E05A47] text-white font-medium text-xs tracking-wider uppercase hover:bg-[#C84B31] active:scale-98 transition-all cursor-pointer"
              >
                Return To The Record
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
