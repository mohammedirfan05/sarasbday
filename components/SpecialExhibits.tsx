"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Flame, AlarmClock, Sparkles, Plus, Zap, Scale, Wind, Heart, CheckCircle2 } from "lucide-react";
import { sound } from "@/lib/audio";
import { fireMiniBurst } from "@/lib/confetti";

interface SpecialExhibitProps {
  type: "ai_water" | "snap_score" | "noon_alarm" | "lash_flutter" | "gaslight_meter";
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

  // 3. Noon Alarm State
  const [snoozeCount, setSnoozeCount] = useState(4);
  const [alarmTime, setAlarmTime] = useState("11:45 AM");

  const handleSnooze = () => {
    sound.playClick();
    const newCount = snoozeCount + 1;
    setSnoozeCount(newCount);
    const times = ["11:50 AM", "11:55 AM", "12:00 PM", "12:15 PM", "12:30 PM", "1:00 PM", "1:30 PM"];
    setAlarmTime(times[newCount % times.length]);
  };

  // 4. Lash Flutter State
  const [flutterCount, setFlutterCount] = useState(0);
  const [isBreezing, setIsBreezing] = useState(false);

  const triggerLashFlutter = () => {
    sound.playPop();
    try {
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate([15, 30, 15]);
      }
    } catch {}
    setFlutterCount((c) => c + 1);
    setIsBreezing(true);
    fireMiniBurst(0.5, 0.4);
    setTimeout(() => setIsBreezing(false), 900);
  };

  // 5. Gaslight Argument Debater State
  const [argueTaps, setArgueTaps] = useState(0);
  const [argumentVerdict, setArgumentVerdict] = useState<string | null>(null);

  const handleArgue = () => {
    sound.playStamp();
    try {
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate(35);
      }
    } catch {}
    const newCount = argueTaps + 1;
    setArgueTaps(newCount);
    const verdicts = [
      "Verdict: Sara is 100% right. Gravity was clearly at fault.",
      "Verdict: Argument dismissed with prejudice. Prosecution apologizes.",
      "Verdict: Defense wins on pure charisma and rhetorical dominance.",
      "Verdict: Sara re-wrote the timeline. The court is in agreement."
    ];
    setArgumentVerdict(verdicts[newCount % verdicts.length]);
  };

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
              <span className="text-[10px] text-gray-500 font-mono">Streak Master</span>
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

      {/* 3. Noon Alarm */}
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
              Snooze Count: {snoozeCount} times &bull; Morning Alarms Overruled
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

      {/* 4. Lash Flutter Simulator */}
      {type === "lash_flutter" && (
        <div className="flex flex-col items-center text-center">
          <div className="p-3.5 w-full rounded-xl bg-gradient-to-r from-rose-50 via-amber-50 to-rose-50 border border-rose-200/80 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-center gap-1.5 mb-1 text-rose-700 font-mono text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: "3s" }} />
              <span>Glamour Aerodynamics</span>
            </div>
            <div className="font-display font-bold text-sm text-[#1A1918] mb-1">
              {isBreezing ? "✨ Category 5 Lash Breeze Generated! ✨" : "Lash Flutter Rating: Iconic"}
            </div>
            <p className="font-mono text-[10px] text-gray-600">
              Total Blinks Generated: <strong className="text-rose-600">{flutterCount}</strong>
            </p>
          </div>

          <button
            onClick={triggerLashFlutter}
            className="w-full mt-3 py-2.5 px-4 rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-98 text-white font-display font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-rose-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Wind className="w-3.5 h-3.5" />
            <span>Blink / Flutter Lashes</span>
          </button>
        </div>
      )}

      {/* 5. Gaslight Argument Meter */}
      {type === "gaslight_meter" && (
        <div className="flex flex-col items-center text-center">
          <div className="p-3.5 w-full rounded-xl bg-gradient-to-br from-amber-50 to-emerald-50 border border-amber-200 shadow-sm">
            <div className="flex items-center justify-center gap-1.5 mb-1 text-amber-900 font-mono text-[10px] font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-amber-700" />
              <span>Supreme Debate Simulator</span>
            </div>
            <div className="font-sans text-xs text-[#1A1918] font-bold mb-1">
              {argumentVerdict || "Status: Defense undefeated in all 26 jurisdictions"}
            </div>
            <div className="pt-2 border-t border-amber-200/60 font-mono text-[10px] text-emerald-700 font-bold flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Sara Win Rate: 99.8%</span>
            </div>
          </div>

          <button
            onClick={handleArgue}
            className="w-full mt-3 py-2.5 px-4 rounded-xl bg-[#1A1918] hover:bg-black active:scale-98 text-amber-300 font-display font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{argueTaps === 0 ? "Testify & Win Argument" : "Argue Again (100% Win Rate)"}</span>
          </button>
        </div>
      )}
    </div>
  );
}
