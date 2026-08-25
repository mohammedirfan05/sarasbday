"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Flame, AlarmClock, Clapperboard, FolderLock, Sparkles, Plus, Check } from "lucide-react";
import { sound } from "@/lib/audio";
import { fireMiniBurst } from "@/lib/confetti";

interface SpecialExhibitProps {
  type: "ai_water" | "snap_score" | "spam_drawer" | "noon_alarm" | "movie_strip" | "sabrina_gallery";
}

export default function SpecialExhibits({ type }: SpecialExhibitProps) {
  // 1. AI Water Tank State
  const [waterLevel, setWaterLevel] = useState(70);
  const [waterMessage, setWaterMessage] = useState("Status: Optimal Hydration");

  const drainWater = () => {
    sound.playClick();
    setWaterLevel((prev) => Math.max(15, prev - 25));
    setWaterMessage("ChatGPT just consumed 0.5L cooling server racks.");
  };

  const refillWater = () => {
    sound.playPop();
    fireMiniBurst(0.5, 0.5);
    setWaterLevel(100);
    setWaterMessage("Water replenished! Organic Sara wins forever.");
  };

  // 2. Snap Score State
  const [snapScore, setSnapScore] = useState(1248920);
  const [streakCount, setStreakCount] = useState(1428);

  useEffect(() => {
    if (type === "snap_score") {
      const interval = setInterval(() => {
        setSnapScore((prev) => prev + 1);
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [type]);

  const boostSnap = () => {
    sound.playPop();
    setSnapScore((prev) => prev + 50);
    setStreakCount((prev) => prev + 1);
    fireMiniBurst(0.7, 0.6);
  };

  // 3. Spam Drawer State
  const [selectedSpam, setSelectedSpam] = useState<number | null>(0);
  const spamAccounts = [
    {
      handle: "@username0767381",
      bio: "pfp changes every 3 business days like clockwork",
      posts: "Classified",
      followers: "0 (Stealth)",
    },
    {
      handle: "@user020306767",
      bio: "permanently memorized by the defense • strictly 0 pfp forever",
      posts: "Redacted",
      followers: "Ghost",
    },
    {
      handle: "@saras_secretaccount",
      bio: "pfp updates strictly according to whatever movie she just watched",
      posts: "Cinema Dump",
      followers: "Top Secret",
    },
    {
      handle: "@maks_weickowski_fanpage",
      bio: "official covert operation used to stalk my stories occasionally",
      posts: "Undercover",
      followers: "Caught 4K",
    },
  ];

  // 4. Noon Alarm State
  const [snoozeCount, setSnoozeCount] = useState(6);
  const [alarmTime, setAlarmTime] = useState("11:45 AM");

  const handleSnooze = () => {
    sound.playClick();
    setSnoozeCount((prev) => prev + 1);
    const times = ["11:50 AM", "11:55 AM", "12:00 PM", "12:15 PM", "12:30 PM", "1:00 PM"];
    const nextTime = times[snoozeCount % times.length];
    setAlarmTime(nextTime);
  };

  // 5. Movie Marathon State
  const [activeMovie, setActiveMovie] = useState(0);
  const movies = [
    { title: "Interstellar", genre: "Mind-bending Sci-Fi", review: "Cried at the bookcase scene, zero regrets." },
    { title: "10 Things I Hate About You", genre: "Late 90s Rom-Com", review: "Heath Ledger singing on the bleachers is pure law." },
    { title: "La La Land", genre: "Musical Tragedy", review: "The alternate ending timeline lives rent-free." },
    { title: "Pride & Prejudice", genre: "Period Drama", review: "The hand flex scene requires an emergency recess." },
  ];

  // 6. Sabrina Reaction State
  const [activeSabrina, setActiveSabrina] = useState(0);
  const sabrinaCards = [
    {
      title: "Exhibit A: The Micro-Shrug",
      tagline: "When someone asks if I cared.",
      quote: "“I'm working late 'cause I'm an icon.”",
      color: "from-amber-400/20 to-rose-400/20",
    },
    {
      title: "Exhibit B: The Nonsense Outro",
      tagline: "Rhyme timing: Lethal.",
      quote: "“This argument is hereby dismissed by order of charm.”",
      color: "from-purple-400/20 to-pink-400/20",
    },
    {
      title: "Exhibit C: The Espresso Energy",
      tagline: "Say you can't sleep? Baby, I know.",
      quote: "“Too caffeinated for court today.”",
      color: "from-rose-400/20 to-orange-400/20",
    },
  ];

  return (
    <div className="w-full mt-4 p-4 rounded-xl bg-[#F4EFE6] border border-[#E2DDD5] text-[#1A1918]">
      {/* Exhibit Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A5752]">
          INTERACTIVE EXHIBIT
        </span>
        <span className="px-2 py-0.5 rounded-full bg-[#1A1918] text-[#FAF7F2] font-mono text-[9px] font-bold">
          EVIDENCE LAB
        </span>
      </div>

      {/* 1. AI Water Tank */}
      {type === "ai_water" && (
        <div className="flex flex-col items-center">
          <div className="relative w-full h-28 rounded-xl bg-slate-900 border-2 border-slate-700 overflow-hidden shadow-inner flex flex-col justify-end">
            <div
              className="w-full bg-gradient-to-t from-sky-600 via-cyan-500 to-sky-400 transition-all duration-500 relative"
              style={{ height: `${waterLevel}%` }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-white/40 animate-pulse" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center pointer-events-none">
              <span className="font-mono text-xs font-bold text-white drop-shadow">
                WATER TANK: {waterLevel}%
              </span>
              <span className="font-sans text-[11px] text-white/90 drop-shadow mt-0.5">
                {waterMessage}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 w-full mt-3">
            <button
              onClick={drainWater}
              className="py-2 px-3 rounded-lg bg-slate-200 hover:bg-slate-300 active:scale-95 text-slate-800 text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Droplet className="w-3.5 h-3.5 text-slate-600" />
              <span>Prompt AI (-25%)</span>
            </button>
            <button
              onClick={refillWater}
              className="py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 active:scale-95 text-white text-xs font-medium transition-all flex items-center justify-center gap-1.5 shadow-md shadow-sky-600/20 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Hydrate (+100%)</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. Snap Score Counter */}
      {type === "snap_score" && (
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 p-3 w-full rounded-xl bg-amber-500/10 border border-amber-500/30">
            <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold">
              <Flame className="w-5 h-5 fill-black" />
            </div>
            <div className="text-left flex-1">
              <span className="font-mono text-[10px] text-amber-900 font-bold uppercase tracking-wider">
                LIFETIME SNAP SCORE
              </span>
              <div className="font-mono font-black text-xl text-[#1A1918] tracking-tight">
                {snapScore.toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-amber-800 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                {streakCount}d
              </span>
              <span className="text-[10px] text-gray-500 font-mono">Streak</span>
            </div>
          </div>

          <button
            onClick={boostSnap}
            className="w-full mt-3 py-2.5 px-4 rounded-xl bg-[#1A1918] hover:bg-black active:scale-98 text-amber-300 font-display font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Send 50 Snaps (+Streak)</span>
          </button>
        </div>
      )}

      {/* 3. Spam Drawer */}
      {type === "spam_drawer" && (
        <div>
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {spamAccounts.map((acc, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setSelectedSpam(idx);
                }}
                className={`p-2 rounded-lg text-left text-xs font-mono transition-all cursor-pointer border ${
                  selectedSpam === idx
                    ? "bg-[#1A1918] text-[#FAF7F2] border-[#1A1918] shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center gap-1">
                  <FolderLock className="w-3 h-3 text-rose-400" />
                  <span className="truncate font-bold">Burner #{idx + 1}</span>
                </div>
              </button>
            ))}
          </div>

          {selectedSpam !== null && (
            <div className="p-3 rounded-xl bg-white border border-[#E2DDD5] shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono font-bold text-xs text-rose-600">
                  {spamAccounts[selectedSpam].handle}
                </span>
                <span className="font-mono text-[10px] text-gray-500">
                  {spamAccounts[selectedSpam].followers}
                </span>
              </div>
              <p className="font-sans text-xs text-gray-600 italic">
                &ldquo;{spamAccounts[selectedSpam].bio}&rdquo;
              </p>
              <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between font-mono text-[10px] text-gray-500">
                <span>Posts: {spamAccounts[selectedSpam].posts}</span>
                <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                  <Check className="w-3 h-3" /> Unlocked in Docket
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. Noon Alarm */}
      {type === "noon_alarm" && (
        <div className="flex flex-col items-center text-center">
          <div className="p-4 w-full rounded-xl bg-[#1A1918] text-white border border-gray-800 shadow-inner">
            <div className="flex items-center justify-center gap-2 mb-1">
              <AlarmClock className="w-4 h-4 text-rose-400 animate-bounce" />
              <span className="font-mono text-xs text-rose-300 uppercase tracking-wider">
                Morning Beauty Protocol
              </span>
            </div>
            <div className="font-mono font-black text-3xl text-amber-300 tracking-wider">
              {alarmTime}
            </div>
            <p className="font-mono text-[11px] text-gray-400 mt-1">
              Snooze Count: {snoozeCount} times &bull; Sunlight: Postponed
            </p>
          </div>

          <button
            onClick={handleSnooze}
            className="w-full mt-3 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-98 text-white font-display font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-rose-900/20 cursor-pointer"
          >
            Hit Snooze (+15 Min Beauty Sleep)
          </button>
        </div>
      )}

      {/* 5. Movie Marathon Strip */}
      {type === "movie_strip" && (
        <div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {movies.map((m, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setActiveMovie(idx);
                }}
                className={`shrink-0 w-32 p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                  activeMovie === idx
                    ? "bg-[#1A1918] text-white border-[#1A1918] shadow-md"
                    : "bg-white text-gray-800 border-gray-200 hover:border-gray-400"
                }`}
              >
                <Clapperboard className="w-3.5 h-3.5 text-amber-400 mb-1" />
                <h5 className="font-display font-bold text-xs truncate">
                  {m.title}
                </h5>
                <span className="font-mono text-[9px] text-gray-400 block">
                  {m.genre}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-2 p-3 rounded-xl bg-white border border-[#E2DDD5] text-xs font-sans text-gray-700 italic">
            &ldquo;{movies[activeMovie].review}&rdquo;
          </div>
        </div>
      )}

      {/* 6. Sabrina Reaction Showcase */}
      {type === "sabrina_gallery" && (
        <div>
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {sabrinaCards.map((c, idx) => (
              <button
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setActiveSabrina(idx);
                }}
                className={`p-2 rounded-lg text-center font-display font-bold text-xs transition-all cursor-pointer border ${
                  activeSabrina === idx
                    ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-rose-300"
                }`}
              >
                Exhibit {String.fromCharCode(65 + idx)}
              </button>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-200/80 shadow-sm text-center">
            <span className="font-mono text-[10px] text-rose-600 font-bold uppercase tracking-wider block mb-1">
              {sabrinaCards[activeSabrina].title}
            </span>
            <h5 className="font-display font-bold text-sm text-[#1A1918] mb-1">
              {sabrinaCards[activeSabrina].tagline}
            </h5>
            <p className="font-handwritten text-lg text-rose-700 font-bold">
              {sabrinaCards[activeSabrina].quote}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
