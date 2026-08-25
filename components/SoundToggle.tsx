"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { sound } from "@/lib/audio";

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(sound.getMuted());
  }, []);

  const toggle = () => {
    const nextState = sound.toggleMute();
    setIsMuted(nextState);
  };

  return (
    <button
      onClick={toggle}
      aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
      className="fixed top-4 right-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/90 text-xs font-mono tracking-wider hover:bg-black/60 active:scale-95 transition-all shadow-lg cursor-pointer"
    >
      {isMuted ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-red-300" />
          <span className="hidden sm:inline text-white/60">SFX OFF</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
          <span className="hidden sm:inline text-white/80">SFX ON</span>
        </>
      )}
    </button>
  );
}
