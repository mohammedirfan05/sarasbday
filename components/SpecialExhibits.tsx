"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Flame, AlarmClock, Clapperboard, FolderLock, Sparkles, Plus, Check, Zap, Eye, ShieldAlert, Film } from "lucide-react";
import { sound } from "@/lib/audio";
import { fireMiniBurst } from "@/lib/confetti";

interface SpecialExhibitProps {
  type: "ai_water" | "snap_score" | "spam_drawer" | "noon_alarm" | "movie_strip" | "sabrina_gallery";
}

export default function SpecialExhibits({ type }: SpecialExhibitProps) {
  // 1. AI Water Tank State
  const [waterLevel, setWaterLevel] = useState(85);
  const [drainCount, setDrainCount] = useState(0);
  const [waterMessage, setWaterMessage] = useState("Status: 100% Organic Sara, 0% Robot Juice");

  const drainWater = () => {
    sound.playClick();
    setDrainCount((c) => c + 1);
    setWaterLevel((prev) => Math.max(10, prev - 25));
    const teasyNotes = [
      "Sara personally guarding the reservoir with her life.",
      "ChatGPT just drank another lake to generate a bad poem.",
      "Organic brain cells confirmed 1000x superior to the algorithm.",
      "Alert: Tap water protected from Silicon Valley tech bros."
    ];
    setWaterMessage(teasyNotes[drainCount % teasyNotes.length]);
  };

  const refillWater = () => {
    sound.playPop();
    fireMiniBurst(0.5, 0.5);
    setWaterLevel(100);
    setWaterMessage("Water supply fully replenished! Mother Nature thanks Sara.");
  };

  // 2. Snap Score State
  const [snapScore, setSnapScore] = useState(1048200);
  const [streakCount, setStreakCount] = useState(1400);

  useEffect(() => {
    if (type === "snap_score") {
      const interval = setInterval(() => {
        setSnapScore((prev) => prev + 1);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [type]);

  const boostSnap = () => {
    sound.playPop();
    setSnapScore((prev) => prev + 50);
    setStreakCount((prev) => prev + 1);
    fireMiniBurst(0.7, 0.6);
  };

  // 3. Spam Drawer State (Playful Burner Dossier without fake specifics)
  const [selectedSpam, setSelectedSpam] = useState<number>(0);
  const spamAccounts = [
    {
      title: "Burner #1: The Inner Circle",
      clearance: "TOP SECRET",
      desc: "Reserved strictly for unhinged voice notes, 3 AM thoughts, and the elite few who passed the vibe check.",
      badge: "VIP Diplomatic Immunity",
    },
    {
      title: "Burner #2: The Story Lurker",
      clearance: "GHOST PROTOCOL",
      desc: "Zero followers, zero posts, strictly used for top-tier investigative surveillance operations.",
      badge: "FBI Level Clearance",
    },
    {
      title: "Burner #3: The Aesthetic Archive",
      clearance: "CLASSIFIED",
      desc: "Curated photo dumps, obscure edits, and moodboards that the public feed simply doesn't deserve to see.",
      badge: "Main Character Feed",
    },
    {
      title: "Burner #4: The Chaos Vault",
      clearance: "MAX SECURITY",
      desc: "Linked directly in the main bio for aesthetic symmetry, but 100% of follow requests get rejected at the door.",
      badge: "Entry: Denied",
    },
  ];

  // 4. Noon Alarm State
  const [snoozeCount, setSnoozeCount] = useState(4);
  const [alarmTime, setAlarmTime] = useState("11:45 AM");

  const handleSnooze = () => {
    sound.playClick();
    const newCount = snoozeCount + 1;
    setSnoozeCount(newCount);
    const times = ["11:50 AM", "11:55 AM", "12:00 PM", "12:15 PM", "12:30 PM", "1:00 PM", "1:30 PM"];
    setAlarmTime(times[newCount % times.length]);
  };

  // 5. Movie Marathon State (Interactive Vibe Picker)
  const [activeMarathon, setActiveMarathon] = useState<number>(0);
  const marathonVibes = [
    {
      icon: Film,
      title: "The 9-Hour Couch Lock",
      status: "Level: Grandmaster",
      quote: "“Will not leave the blanket fort for anything less than snacks.”",
      stat: "4+ back-to-back movies logged",
    },
    {
      icon: Sparkles,
      title: "Plot Hole Investigator",
      status: "Active Debate Mode",
      quote: "“Will pause the movie to explain why the character made a terrible life decision.”",
      stat: "Forensic analysis: 10/10",
    },
    {
      icon: Eye,
      title: "Emotional Immersion",
      status: "100% Invested",
      quote: "“Lives inside the cinematic universe completely until the end credits roll.”",
      stat: "Tears shed: Justified",
    },
  ];

  // 6. Sabrina Reaction State
  const [activeSabrina, setActiveSabrina] = useState(0);
  const sabrinaCards = [
    {
      title: "Exhibit A: The Micro-Shrug",
      tagline: "When someone expects her to care.",
      quote: "“I'm working late 'cause I'm an icon.”",
      vibe: "Unbothered & Hydrated",
    },
    {
      title: "Exhibit B: The Sarcastic Wink",
      tagline: "Winning any argument instantly with zero effort.",
      quote: "“Case dismissed by order of pure charm.”",
      vibe: "100% Defense Win Rate",
    },
    {
      title: "Exhibit C: The Pop Princess Energy",
      tagline: "When the group chat needs elite reaction GIFs.",
      quote: "“Too iconic for courtroom drama today.”",
      vibe: "Short n' Sweet",
    },
  ];

  return (
    <div className="w-full mt-4 p-4 rounded-2xl bg-[#F4EFE6] border border-[#E2DDD5] text-[#1A1918] shadow-sm">
      {/* Exhibit Header */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#E2DDD5]/70">
        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#5A5752]">
          <Zap className="w-3 h-3 text-amber-600 animate-pulse" />
          <span>INTERACTIVE EVIDENCE LAB</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#1A1918] text-[#FAF7F2] font-mono text-[9px] font-bold tracking-wider">
          LIVE DEMO
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
                RESERVOIR HYDRATION: {waterLevel}%
              </span>
              <span className="font-sans text-[11px] text-white/90 drop-shadow mt-0.5 px-2">
                {waterMessage}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 w-full mt-3">
            <button
              onClick={drainWater}
              className="py-2.5 px-3 rounded-xl bg-slate-200 hover:bg-slate-300 active:scale-95 text-slate-800 text-xs font-semibold font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Droplet className="w-3.5 h-3.5 text-slate-600" />
              <span>Prompt AI (-25%)</span>
            </button>
            <button
              onClick={refillWater}
              className="py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 active:scale-95 text-white text-xs font-semibold font-mono transition-all flex items-center justify-center gap-1.5 shadow-md shadow-sky-600/20 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Drink Water (+100%)</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. Snap Score Counter */}
      {type === "snap_score" && (
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 p-3 w-full rounded-xl bg-amber-500/10 border border-amber-500/30">
            <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold shadow-sm">
              <Flame className="w-5 h-5 fill-black" />
            </div>
            <div className="text-left flex-1">
              <span className="font-mono text-[10px] text-amber-900 font-bold uppercase tracking-wider block">
                LIFETIME SNAP SCORE
              </span>
              <div className="font-mono font-black text-xl text-[#1A1918] tracking-tight">
                {snapScore.toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-amber-800 flex items-center justify-end gap-1">
                <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                {streakCount}d
              </span>
              <span className="text-[10px] text-gray-500 font-mono">Streak King</span>
            </div>
          </div>

          <button
            onClick={boostSnap}
            className="w-full mt-3 py-2.5 px-4 rounded-xl bg-[#1A1918] hover:bg-black active:scale-98 text-amber-300 font-display font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Spam 50 Snaps (+Streak Boost)</span>
          </button>
        </div>
      )}

      {/* 3. Spam Drawer (Covert Burner Dossier) */}
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
                className={`p-2.5 rounded-xl text-left text-xs font-mono transition-all cursor-pointer border ${
                  selectedSpam === idx
                    ? "bg-[#1A1918] text-[#FAF7F2] border-[#1A1918] shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <FolderLock className={`w-3.5 h-3.5 ${selectedSpam === idx ? "text-rose-400" : "text-gray-400"}`} />
                  <span className="truncate font-bold">Burner #{idx + 1}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E2DDD5] shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono font-bold text-xs text-rose-600">
                {spamAccounts[selectedSpam].title}
              </span>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 font-bold border border-rose-200">
                {spamAccounts[selectedSpam].clearance}
              </span>
            </div>
            <p className="font-sans text-xs text-gray-700 leading-relaxed mb-2.5">
              {spamAccounts[selectedSpam].desc}
            </p>
            <div className="pt-2 border-t border-gray-100 flex justify-between items-center font-mono text-[10px] text-gray-500">
              <span>Status: <strong className="text-gray-800">{spamAccounts[selectedSpam].badge}</strong></span>
              <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                <Check className="w-3 h-3" /> In Session
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 4. Noon Alarm */}
      {type === "noon_alarm" && (
        <div className="flex flex-col items-center text-center">
          <div className="p-4 w-full rounded-xl bg-[#1A1918] text-white border border-gray-800 shadow-inner">
            <div className="flex items-center justify-center gap-2 mb-1">
              <AlarmClock className="w-4 h-4 text-rose-400 animate-bounce" />
              <span className="font-mono text-xs text-rose-300 uppercase tracking-wider font-bold">
                Luxury European Schedule
              </span>
            </div>
            <div className="font-mono font-black text-3xl text-amber-300 tracking-wider">
              {alarmTime}
            </div>
            <p className="font-mono text-[11px] text-gray-400 mt-1">
              Snooze Count: {snoozeCount} times &bull; Morning People: Overruled
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
          <div className="grid grid-cols-3 gap-1.5 mb-2.5">
            {marathonVibes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    sound.playClick();
                    setActiveMarathon(idx);
                  }}
                  className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                    activeMarathon === idx
                      ? "bg-[#1A1918] text-white border-[#1A1918] shadow-md"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Icon className={`w-4 h-4 mx-auto mb-1 ${activeMarathon === idx ? "text-amber-300" : "text-gray-400"}`} />
                  <span className="font-display font-bold text-[10px] block truncate">
                    Vibe #{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E2DDD5] shadow-sm">
            <div className="flex items-center justify-between mb-1.5">
              <h5 className="font-display font-bold text-xs text-[#1A1918]">
                {marathonVibes[activeMarathon].title}
              </h5>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 font-bold border border-amber-200">
                {marathonVibes[activeMarathon].status}
              </span>
            </div>
            <p className="font-handwritten text-base text-gray-800 leading-snug font-bold mb-2">
              {marathonVibes[activeMarathon].quote}
            </p>
            <div className="pt-2 border-t border-gray-100 font-mono text-[10px] text-gray-500 flex justify-between">
              <span>{marathonVibes[activeMarathon].stat}</span>
              <span className="text-amber-600 font-bold">Popcorn: Maxed Out</span>
            </div>
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
                className={`p-2 rounded-xl text-center font-display font-bold text-xs transition-all cursor-pointer border ${
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
            <h5 className="font-display font-bold text-xs text-[#1A1918] mb-1">
              {sabrinaCards[activeSabrina].tagline}
            </h5>
            <p className="font-handwritten text-lg text-rose-700 font-bold mb-2">
              {sabrinaCards[activeSabrina].quote}
            </p>
            <div className="pt-2 border-t border-rose-200/60 font-mono text-[10px] text-rose-800/80 font-bold">
              Vibe: {sabrinaCards[activeSabrina].vibe}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
