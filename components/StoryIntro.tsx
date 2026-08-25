"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";
import { sound } from "@/lib/audio";

interface StoryIntroProps {
  onProceed: () => void;
}

export default function StoryIntro({ onProceed }: StoryIntroProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    sound.playStamp();
    setIsExiting(true);
    setTimeout(() => {
      onProceed();
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className={`relative w-full h-full flex-1 flex flex-col justify-between p-5 sm:p-6 bg-story-gradient text-white overflow-hidden ${
        isExiting ? "animate-screen-shake" : ""
      }`}
    >
      {/* Top Story Progress Bars */}
      <div>
        <div className="w-full grid grid-cols-3 gap-1.5 pt-1 pb-3">
          <div className="h-1 rounded-full bg-white/90" />
          <div className="h-1 rounded-full bg-white/90" />
          <div className="h-1 rounded-full bg-white/40 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              className="h-full bg-white"
            />
          </div>
        </div>

        {/* Story Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600">
              <div className="w-full h-full rounded-full bg-[#1A1918] flex items-center justify-center font-display font-black text-xs text-rose-300">
                S
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#2D0E3E]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-white">
                  case_0820_appeal
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
              </div>
              <p className="font-mono text-[10px] text-white/70">
                19 Aug 23:34 &bull; Close Friends
              </p>
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[9px] font-mono uppercase tracking-widest text-amber-200">
            DELUXE APPEAL
          </div>
        </div>
      </div>

      {/* Story Center Showcase Content */}
      <div className="my-auto py-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[11px] font-mono tracking-wider text-rose-200"
        >
          <ShieldAlert className="w-3 h-3 text-rose-400" />
          <span>ORIGINAL CHARGES RETRACTED</span>
        </motion.div>

        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl font-black tracking-tight leading-[1.1] mb-2 text-white drop-shadow-md"
        >
          The 30 Flaws <br />
          <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-pink-200 bg-clip-text text-transparent italic">
            Appeal Court
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs sm:text-sm text-white/85 max-w-[32ch] font-sans leading-relaxed mb-4"
        >
          Before August 20, I posted 30 flaws as ragebait. Here is the official judicial re-trial where every roast turns into proof you&apos;re irreplaceable.
        </motion.p>

        {/* Polaroid Scrapbook Sticker */}
        <motion.div
          initial={{ rotate: -3, scale: 0.95, opacity: 0 }}
          animate={{ rotate: -1.5, scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="relative px-4 py-2.5 rounded-xl bg-white text-[#1A1918] shadow-xl border border-white/40 max-w-xs transform hover:rotate-0 transition-transform"
        >
          <div className="absolute -top-2 left-6 w-10 h-3.5 bg-amber-200/80 -rotate-3 border border-amber-300/60 shadow-sm" />
          <p className="font-handwritten text-lg sm:text-xl text-rose-600 font-bold -rotate-1">
            &ldquo;No ragebait this time. Mostly.&rdquo;
          </p>
          <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block mt-0.5">
            DEFENDANT: SARA &bull; VERDICT: ICONIC
          </span>
        </motion.div>
      </div>

      {/* Action Footer with Proceed Button */}
      <div className="w-full flex flex-col items-center gap-2 pt-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleStart}
          className="w-full py-3.5 px-6 rounded-2xl bg-white text-[#1A1918] font-display font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-black/30 hover:bg-rose-50 active:bg-rose-100 transition-all cursor-pointer group"
        >
          <span>Proceed Carefully</span>
          <ArrowRight className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <p className="font-mono text-[10px] text-white/70 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>Tap to swear in as Chief Judge</span>
        </p>
      </div>
    </motion.div>
  );
}
