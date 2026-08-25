"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Sparkles, Eye } from "lucide-react";
import { sound } from "@/lib/audio";

interface ScratchCardProps {
  onReveal: () => void;
  isRevealed: boolean;
  coverTitle?: string;
  coverSubtitle?: string;
}

export default function ScratchCard({
  onReveal,
  isRevealed,
  coverTitle = "SCRATCH TO REVEAL TRUTH",
  coverSubtitle = "Swipe finger to clear confidential overlay",
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isCleared, setIsCleared] = useState(isRevealed);
  const isDrawing = useRef(false);
  const lastSoundTime = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isRevealed) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // Draw luxury metallic charcoal coating
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#2D2A26");
    gradient.addColorStop(0.5, "#3D3934");
    gradient.addColorStop(1, "#1F1D1A");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Decorative texture & pattern
    ctx.strokeStyle = "rgba(212, 175, 55, 0.18)";
    ctx.lineWidth = 1;
    for (let i = -rect.height; i < rect.width + rect.height; i += 16) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + rect.height, rect.height);
      ctx.stroke();
    }

    // Border
    ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
    ctx.lineWidth = 2;
    ctx.strokeRect(4, 4, rect.width - 8, rect.height - 8);

    // Center badge
    ctx.fillStyle = "rgba(20, 18, 16, 0.7)";
    ctx.fillRect(rect.width / 2 - 110, rect.height / 2 - 28, 220, 56);
    ctx.strokeStyle = "rgba(224, 90, 71, 0.6)";
    ctx.strokeRect(rect.width / 2 - 110, rect.height / 2 - 28, 220, 56);

    // Text
    ctx.fillStyle = "#FAF7F2";
    ctx.font = "bold 11px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(coverTitle, rect.width / 2, rect.height / 2 - 6);

    ctx.fillStyle = "#D4AF37";
    ctx.font = "9px sans-serif";
    ctx.fillText(coverSubtitle, rect.width / 2, rect.height / 2 + 12);
  }, [isRevealed, coverTitle, coverSubtitle]);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isCleared && !isRevealed) initCanvas();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas, isCleared, isRevealed]);

  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isCleared) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let transparentPixels = 0;
      const totalPixels = data.length / 4;

      // Sample every 16th pixel for high performance
      for (let i = 3; i < data.length; i += 64) {
        if (data[i] === 0) {
          transparentPixels++;
        }
      }

      const ratio = transparentPixels / (totalPixels / 16);
      if (ratio > 0.36) {
        setIsCleared(true);
        sound.playStamp();
        if (typeof navigator !== "undefined" && navigator.vibrate) {
          try {
            navigator.vibrate(20);
          } catch {
            // ignore
          }
        }
        onReveal();
      }
    } catch {
      // fallback
    }
  }, [isCleared, onReveal]);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isCleared) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    const now = Date.now();
    if (now - lastSoundTime.current > 70) {
      sound.playScratch();
      lastSoundTime.current = now;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    if (!isDrawing.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = (e?: React.PointerEvent<HTMLCanvasElement>) => {
    if (e) e.stopPropagation();
    if (isDrawing.current) {
      isDrawing.current = false;
      checkScratchPercentage();
    }
  };

  const forceReveal = () => {
    setIsCleared(true);
    sound.playStamp();
    onReveal();
  };

  if (isCleared || isRevealed) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-20 w-full h-full rounded-2xl overflow-hidden touch-none select-none flex flex-col justify-end p-3"
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="scratch-canvas absolute inset-0 w-full h-full"
      />

      <div className="relative z-30 flex items-center justify-between pointer-events-auto">
        <span className="flex items-center gap-1 text-[10px] font-mono text-white/80 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-amber-300 animate-spin" />
          <span>Scratch with finger</span>
        </span>

        <button
          onClick={forceReveal}
          className="flex items-center gap-1 text-[10px] font-mono text-white/90 bg-white/20 hover:bg-white/30 active:scale-95 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer"
        >
          <Eye className="w-3 h-3" />
          <span>Instant Reveal</span>
        </button>
      </div>
    </div>
  );
}
