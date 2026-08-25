"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Flame, Sparkles, Award, RotateCcw, Share2, Check, Heart } from "lucide-react";
import { sound } from "@/lib/audio";
import { fireBirthdayConfetti, fireMiniBurst } from "@/lib/confetti";

interface FinalVerdictProps {
  onReplay: () => void;
}

export default function FinalVerdict({ onReplay }: FinalVerdictProps) {
  const [openedEnvelope, setOpenedEnvelope] = useState<number | null>(null);
  const [candleLit, setCandleLit] = useState(false);
  const [isHoldingCandle, setIsHoldingCandle] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [copiedBadge, setCopiedBadge] = useState(false);

  // Hold to light candle
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHoldingCandle && !candleLit) {
      timer = setInterval(() => {
        setHoldProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setCandleLit(true);
            sound.playIgnite();
            if (typeof navigator !== "undefined" && navigator.vibrate) {
              try {
                navigator.vibrate([30, 60, 30]);
              } catch {
                // ignore
              }
            }
            setTimeout(() => {
              sound.playFanfare();
              fireBirthdayConfetti();
            }, 300);
            return 100;
          }
          return prev + 4;
        });
      }, 30);
    } else {
      setHoldProgress(0);
    }
    return () => clearInterval(timer);
  }, [isHoldingCandle, candleLit]);

  const toggleEnvelope = (index: number) => {
    sound.playPop();
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate(15);
      } catch {
        // ignore
      }
    }
    if (openedEnvelope === index) {
      setOpenedEnvelope(null);
    } else {
      setOpenedEnvelope(index);
      fireMiniBurst(0.5, 0.4);
    }
  };

  const handleShare = () => {
    sound.playClick();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(
        "Official Judicial Verdict: Sara has been acquitted of all flaws and is hereby declared 100% Iconic & Irreplaceable! Happy Birthday!"
      );
      setCopiedBadge(true);
      setTimeout(() => setCopiedBadge(false), 2500);
    }
  };

  const envelopes = [
    {
      id: 1,
      title: "Things I Love About You",
      seal: "EXHIBIT 1",
      preview: "Your late wakeups, your secret little spam accounts, your specific opinions...",
      content:
        "Your late wakeups, your secret little spam accounts, your very specific opinions, and the random shit you somehow get invested in. And somehow, that’s exactly what makes you so easy to love and impossible to replace.",
    },
    {
      id: 2,
      title: "Things I Secretly Admire",
      seal: "EXHIBIT 2",
      preview: "Your authenticity, standards, and unapologetic style...",
      content:
        "How you never perform for a room. When you dress up, you dress for yourself. When you have an opinion, you stand on it. And even when you drop a casual 'idc', you care deeply about the people in your life. You have a rare authenticity that most people spend their entire lives trying to fake.",
    },
    {
      id: 3,
      title: "The Birthday Letter",
      seal: "FINAL NOTE",
      preview: "The sincere, tender truth behind this website...",
      content:
        "Happy Late Birthday, Sara. I am truly sorry for making that Instagram story too random and weird. The joke got dumb, but building this site was the only way I knew how to fix it properly: by proving that every single one of those things is actually a reason you are deeply valued, admired, and irreplaceable. Wishing you an iconic year ahead filled with good movies, zero annoying fake friends, and everything you deserve, idk how to explain but i just love u so fucking much more than i could to anyone .",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-md mx-auto p-4 sm:p-6 pb-24 bg-[#FAF7F2] text-[#1A1918] flex flex-col gap-4"
    >
      {/* Top Banner */}
      <div className="text-center pb-4 border-b border-[#E2DDD5]">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="court-stamp text-xs text-[#2D6A4F] border-[#2D6A4F] bg-emerald-50">
            CASE CLOSED &bull; FULL ACQUITTAL
          </span>
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1A1918] tracking-tight">
          The Supreme Verdict
        </h2>
        <p className="font-mono text-xs text-[#5A5752] mt-1">
          Case #0820 &bull; Official Judicial Resolution
        </p>
      </div>

      {/* Main Verdict Scroll */}
      <div className="my-4 p-5 rounded-2xl bg-white border border-[#E2DDD5] shadow-lg relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#1A1918] text-[#FAF7F2] font-mono text-[9px] font-bold tracking-widest uppercase">
          JUDICIAL DECREE
        </div>

        <p className="font-sans text-sm sm:text-base text-[#1A1918] leading-relaxed font-medium mt-1">
          &ldquo;You’re honestly just one of those people who makes life more fun by being exactly who you are. The random shit, the stubborn moments, the little things you care about, somehow it all just makes you, you. And I wouldn’t change that.&rdquo;
        </p>
      </div>

      {/* 3 Wax-Sealed Envelopes */}
      <div className="flex flex-col gap-3 my-2">
        <span className="font-mono text-[10px] uppercase font-bold text-[#5A5752] tracking-widest text-center">
          CONFIDENTIAL CASE EXHIBITS (TAP TO OPEN)
        </span>

        {envelopes.map((env, idx) => {
          const isOpen = openedEnvelope === idx;
          return (
            <div
              key={env.id}
              className={`rounded-2xl transition-all border-2 overflow-hidden ${
                isOpen
                  ? "bg-amber-50/70 border-[#D4AF37] shadow-md"
                  : "bg-white border-[#E2DDD5] hover:border-amber-400"
              }`}
            >
              <button
                onClick={() => toggleEnvelope(idx)}
                className="w-full p-4 text-left flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold transition-colors ${
                      isOpen
                        ? "bg-[#D4AF37] text-white shadow-sm"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase font-bold text-amber-800 tracking-wider block">
                      {env.seal}
                    </span>
                    <h4 className="font-display font-bold text-sm text-[#1A1918]">
                      {env.title}
                    </h4>
                  </div>
                </div>

                <span
                  className={`text-xs font-mono px-2 py-1 rounded-full transition-all ${
                    isOpen
                      ? "bg-[#1A1918] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {isOpen ? "Close" : "Open"}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 pt-1 border-t border-amber-200/60"
                  >
                    <p className="font-sans text-sm text-[#3A3835] leading-relaxed italic bg-white/80 p-3 rounded-xl border border-amber-200/40">
                      &ldquo;{env.content}&rdquo;
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Birthday Candle Interactive Climax */}
      <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-[#1A1918] to-[#2D2A26] text-white text-center shadow-xl relative overflow-hidden">
        {/* Ambient Candle Glow */}
        {candleLit && (
          <div className="absolute inset-0 bg-radial from-amber-500/20 via-transparent to-transparent pointer-events-none animate-pulse" />
        )}

        <div className="relative z-10 flex flex-col items-center">
          {/* Candle Graphic */}
          <div className="relative flex flex-col items-center mb-3">
            {/* Flame */}
            {candleLit && (
              <div className="relative mb-1">
                <div className="w-5 h-8 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white animate-flame" />
                <div className="absolute inset-0 w-5 h-8 rounded-full bg-amber-400 blur-sm animate-pulse opacity-75" />
              </div>
            )}
            {!candleLit && (
              <div className="w-0.5 h-3 bg-gray-400 mb-0.5 rounded-full" />
            )}

            {/* Candle Body */}
            <div className="w-7 h-14 rounded-md bg-gradient-to-b from-rose-300 via-rose-400 to-rose-500 border border-rose-200 shadow-md flex items-center justify-center">
              <span className="font-mono text-[9px] font-black text-rose-900 rotate-90 tracking-widest">
                SARA
              </span>
            </div>
          </div>

          <h4 className="font-display font-black text-lg text-amber-200 mb-1">
            {candleLit ? "Wish Granted!" : "Birthday Candle Ceremony"}
          </h4>

          <p className="font-sans text-xs text-white/80 max-w-[28ch] mb-4">
            {candleLit
              ? "Official birthday verdict sealed: May your year ahead be as iconic as you are."
              : "Hold your thumb on the button to light the birthday candle."}
          </p>

          {!candleLit ? (
            <button
              onPointerDown={() => setIsHoldingCandle(true)}
              onPointerUp={() => setIsHoldingCandle(false)}
              onPointerLeave={() => setIsHoldingCandle(false)}
              className="relative w-full py-3.5 px-6 rounded-xl bg-amber-400 text-black font-display font-bold text-xs uppercase tracking-wider overflow-hidden shadow-lg shadow-amber-400/20 select-none cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-amber-500 transition-all duration-75"
                style={{ width: `${holdProgress}%` }}
              />
              <span className="relative z-10 flex items-center justify-center gap-1.5 font-black">
                <Flame className="w-4 h-4 text-red-600 fill-red-600 animate-bounce" />
                <span>
                  {isHoldingCandle
                    ? `Igniting... ${holdProgress}%`
                    : "Hold Thumb to Light Candle"}
                </span>
              </span>
            </button>
          ) : (
            <div className="w-full flex items-center justify-center gap-2">
              <button
                onClick={() => {
                  sound.playPop();
                  fireBirthdayConfetti();
                }}
                className="py-2.5 px-4 rounded-xl bg-white/20 hover:bg-white/30 text-white font-mono text-xs tracking-wider flex items-center gap-1.5 transition-all cursor-pointer backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>More Confetti</span>
              </button>

              <button
                onClick={handleShare}
                className="py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                {copiedBadge ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-900" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Verdict</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-4 pt-3 border-t border-[#E2DDD5] flex items-center justify-between">
        <button
          onClick={() => {
            sound.playClick();
            onReplay();
          }}
          className="flex items-center gap-1.5 text-xs font-mono text-[#5A5752] hover:text-[#1A1918] transition-colors cursor-pointer py-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay The Flaws Appeal</span>
        </button>

        <span className="font-mono text-[10px] text-[#8A857D] flex items-center gap-1">
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          <span>Crafted with pure respect</span>
        </span>
      </div>
    </motion.div>
  );
}
