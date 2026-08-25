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
            setIsHoldingCandle(false);
            setCandleLit(true);
            setIsBlownOut(false);
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
            return 0;
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

  const [isBlownOut, setIsBlownOut] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);

  const handleMakeWish = () => {
    sound.playPop();
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate([20, 40, 20]);
      } catch {}
    }
    setWishMade(true);
    fireMiniBurst(0.5, 0.45);
  };

  const handleBlowOut = () => {
    sound.playClick();
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate(30);
      } catch {}
    }
    setIsHoldingCandle(false);
    setHoldProgress(0);
    setCandleLit(false);
    setIsBlownOut(true);
    setShowSmoke(true);
    setTimeout(() => setShowSmoke(false), 2500);
  };

  const handleRelight = () => {
    sound.playIgnite();
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate(25);
      } catch {}
    }
    setIsHoldingCandle(false);
    setHoldProgress(0);
    setCandleLit(true);
    setIsBlownOut(false);
    setShowSmoke(false);
    fireMiniBurst(0.5, 0.45);
  };

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
      <div className="mt-4 p-6 rounded-3xl bg-gradient-to-b from-[#141210] via-[#1E1B18] to-[#12100E] border border-[#3A342C] text-white text-center shadow-2xl relative overflow-hidden transition-all duration-700">
        {/* Dynamic Warm Ambient Candle Radiance */}
        {candleLit && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.75, 0.9, 0.75], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,158,11,0.22)_0%,rgba(217,119,6,0.08)_50%,transparent_75%)] pointer-events-none"
          />
        )}

        <div className="relative z-10 flex flex-col items-center">
          {/* Realistic Artisan Birthday Cake Display */}
          <div className="relative flex flex-col items-center pt-3 pb-2 mb-3">
            {/* Candle Assembly on Top of Cake */}
            <div className="relative flex items-end justify-center gap-4 z-20 -mb-1">
              {/* Left Companion Candle */}
              <div className="relative flex flex-col items-center">
                {candleLit && (
                  <div className="relative mb-0.5 flex flex-col items-center">
                    <div className="absolute -top-2 w-8 h-10 rounded-full bg-amber-400/20 blur-xs pointer-events-none" />
                    <div className="relative w-3.5 h-6 origin-bottom animate-flame" style={{ animationDelay: "0.25s" }}>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-500/60 blur-[0.5px]" />
                      <div className="w-full h-full rounded-full bg-gradient-to-t from-amber-600 via-yellow-400 to-amber-100 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                      <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-3.5 rounded-full bg-white blur-[0.2px]" />
                    </div>
                  </div>
                )}
                {showSmoke && (
                  <div className="relative mb-1 flex justify-center">
                    <div className="w-1 h-5 rounded-full bg-white/40 blur-xs animate-smoke" style={{ animationDelay: "0.15s" }} />
                  </div>
                )}
                <div className="w-[1.5px] h-2 bg-[#2D2A26] rounded-t-full" />
                <div className="w-4 h-9 rounded-t-sm rounded-b-xs bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 border border-purple-200/50 shadow-inner" />
              </div>

              {/* Center Main Candle (SARA) */}
              <div className="relative flex flex-col items-center scale-105">
                {candleLit && (
                  <div className="relative mb-0.5 flex flex-col items-center">
                    <div className="absolute -top-3 w-12 h-14 rounded-full bg-amber-400/25 blur-md pointer-events-none" />
                    <div className="relative w-5 h-9 origin-bottom animate-flame">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-2.5 rounded-full bg-indigo-500/60 blur-[0.5px]" />
                      <div className="w-full h-full rounded-full bg-gradient-to-t from-amber-600 via-yellow-400 to-amber-100 shadow-[0_0_14px_rgba(251,191,36,0.9)]" />
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-5 rounded-full bg-white blur-[0.3px]" />
                    </div>
                  </div>
                )}
                {showSmoke && (
                  <div className="relative mb-1 flex justify-center">
                    <div className="w-1.5 h-6 rounded-full bg-white/50 blur-xs animate-smoke" />
                  </div>
                )}
                <div className="w-[2px] h-2.5 bg-[#2D2A26] rounded-t-full" />
                <div className="relative w-7 h-13 rounded-t-sm rounded-b-xs bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400 border border-rose-200/50 shadow-inner flex items-center justify-center overflow-hidden">
                  <div className="absolute left-0.5 top-0 bottom-0 w-0.5 bg-white/40 rounded-full blur-[0.5px]" />
                  <span className="font-mono text-[8px] font-black text-rose-950/90 rotate-90 tracking-widest drop-shadow-xs select-none">
                    SARA
                  </span>
                </div>
              </div>

              {/* Right Companion Candle */}
              <div className="relative flex flex-col items-center">
                {candleLit && (
                  <div className="relative mb-0.5 flex flex-col items-center">
                    <div className="absolute -top-2 w-8 h-10 rounded-full bg-amber-400/20 blur-xs pointer-events-none" />
                    <div className="relative w-3.5 h-6 origin-bottom animate-flame" style={{ animationDelay: "0.45s" }}>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-500/60 blur-[0.5px]" />
                      <div className="w-full h-full rounded-full bg-gradient-to-t from-amber-600 via-yellow-400 to-amber-100 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                      <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-3.5 rounded-full bg-white blur-[0.2px]" />
                    </div>
                  </div>
                )}
                {showSmoke && (
                  <div className="relative mb-1 flex justify-center">
                    <div className="w-1 h-5 rounded-full bg-white/40 blur-xs animate-smoke" style={{ animationDelay: "0.25s" }} />
                  </div>
                )}
                <div className="w-[1.5px] h-2 bg-[#2D2A26] rounded-t-full" />
                <div className="w-4 h-9 rounded-t-sm rounded-b-xs bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 border border-amber-200/50 shadow-inner" />
              </div>
            </div>

            {/* Cake Structure */}
            <div className="relative w-44 flex flex-col items-center">
              {/* Cream Topping Dollops & Strawberries */}
              <div className="w-full flex justify-around items-center px-3 -mb-1.5 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-rose-300 shadow-xs transform -rotate-12" />
                <span className="w-3 h-2 rounded-full bg-white/90 shadow-xs" />
                <span className="w-3 h-3 rounded-full bg-rose-500 border border-rose-300 shadow-xs" />
                <span className="w-3 h-2 rounded-full bg-white/90 shadow-xs" />
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-rose-300 shadow-xs transform rotate-12" />
              </div>

              {/* Frosting Top Dome Layer */}
              <div className="w-full h-8 rounded-t-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FDF5ED] to-[#FCEAE0] border-t border-x border-[#F5DFD0] shadow-sm relative overflow-hidden flex flex-col justify-end">
                {/* Candle Light Specular Reflection on Cake Top */}
                {candleLit && (
                  <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-amber-300/35 to-transparent pointer-events-none" />
                )}
                {/* Frosting Dripping Scallop Border */}
                <div className="w-full flex justify-between px-1">
                  {[...Array(9)].map((_, i) => (
                    <span key={i} className="w-3.5 h-2.5 bg-[#FFFDF9] rounded-b-full shadow-xs -mb-1" />
                  ))}
                </div>
              </div>

              {/* Middle Strawberry Cream Ribbon */}
              <div className="w-full h-2 bg-gradient-to-r from-rose-300 via-rose-200 to-rose-300 border-y border-rose-300/50 relative z-10" />

              {/* Bottom Sponge Tier */}
              <div className="w-full h-9 rounded-b-xl bg-gradient-to-b from-[#FAF1E4] via-[#F4E3CB] to-[#E9D1B4] border-b border-x border-[#DEC19F] shadow-md relative overflow-hidden flex items-center justify-center">
                {/* Subtle Baked Texture Grain */}
                <div className="absolute inset-0 bg-radial from-amber-900/5 to-transparent pointer-events-none" />
                <span className="font-display text-[9px] font-bold tracking-widest text-[#8C6D4F]/70 uppercase">
                  HAPPY BIRTHDAY SARA
                </span>
              </div>

              {/* Pedestal Stand / Gold Cake Plate */}
              <div className="w-52 h-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] border border-[#C5A028] shadow-lg -mt-1 relative z-0 flex items-center justify-center">
                <div className="w-48 h-0.5 bg-white/40 rounded-full" />
              </div>
              <div className="w-24 h-1.5 rounded-b-lg bg-[#8A6710] shadow-xs" />
            </div>
          </div>

          <h4 className="font-display font-black text-xl text-amber-200 mb-1 tracking-tight">
            {candleLit ? "The Birthday Flame is Lit" : isBlownOut ? "Wish Released ✨" : "Birthday Candle Ceremony"}
          </h4>

          <p className="font-sans text-xs text-white/85 max-w-[30ch] mb-4 leading-relaxed">
            {candleLit
              ? "Official birthday verdict sealed: May your year ahead be filled with peace, laughter, and zero fake energy."
              : isBlownOut
              ? "Your silent wish has been sealed in the archives. Tap below to relight."
              : "Hold your thumb down on the ignition button to light the birthday candle."}
          </p>

          {/* Sealed Wish Blessing Alert */}
          {wishMade && candleLit && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs font-handwritten text-lg leading-snug"
            >
              &ldquo;Wish recorded in the judicial archives. May every good thing find you this year.&rdquo;
            </motion.div>
          )}

          {/* Ignition / Controls */}
          {!candleLit ? (
            <div className="w-full">
              {isBlownOut ? (
                <button
                  onClick={handleRelight}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 active:scale-98 text-black font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Flame className="w-4 h-4 text-orange-600 fill-orange-600 animate-bounce" />
                  <span>Relight Birthday Candle</span>
                </button>
              ) : (
                <button
                  onPointerDown={() => setIsHoldingCandle(true)}
                  onPointerUp={() => setIsHoldingCandle(false)}
                  onPointerLeave={() => setIsHoldingCandle(false)}
                  className="relative w-full py-3.5 px-6 rounded-2xl bg-[#2A241C] border border-amber-400/40 text-amber-200 font-display font-bold text-xs uppercase tracking-wider overflow-hidden shadow-xl select-none cursor-pointer group active:scale-98 transition-transform"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-75"
                    style={{ width: `${holdProgress}%` }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2 font-black">
                    <Flame className={`w-4 h-4 transition-transform ${isHoldingCandle ? "scale-125 text-red-600 fill-red-600" : "text-amber-400 fill-amber-400"}`} />
                    <span className={holdProgress > 50 ? "text-black" : "text-amber-100"}>
                      {isHoldingCandle
                        ? `Igniting Ceremony... ${holdProgress}%`
                        : "Hold Thumb to Light Candle"}
                    </span>
                  </span>
                </button>
              )}
            </div>
          ) : (
            <div className="w-full flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <button
                  onClick={handleMakeWish}
                  className="py-2.5 px-3 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 active:scale-95 text-amber-200 border border-amber-400/40 font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{wishMade ? "Wish Sealed ✨" : "Make a Wish 🕯️"}</span>
                </button>

                <button
                  onClick={handleBlowOut}
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white/90 border border-white/15 font-mono text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <span>Blow Out Flame 💨</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 w-full mt-1">
                <button
                  onClick={() => {
                    sound.playPop();
                    fireBirthdayConfetti();
                  }}
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white/90 border border-white/15 font-mono text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>More Confetti</span>
                </button>

                <button
                  onClick={handleShare}
                  className="py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
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
