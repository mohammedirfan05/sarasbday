import confetti from "canvas-confetti";

export function fireBirthdayConfetti() {
  if (typeof window === "undefined") return;

  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Multi-tier organic burst
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF92A9"],
  });

  fire(0.2, {
    spread: 60,
    colors: ["#D4AF37", "#E05A47", "#FFE66D", "#FF6B6B"],
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ["#F39C12", "#E74C3C", "#9B59B6", "#1ABC9C"],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    shapes: ["circle"],
    colors: ["#FFD700", "#FF69B4", "#00FFFF"],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ["#D4AF37", "#FFFFFF", "#FF85A1"],
  });
}

export function fireMiniBurst(x = 0.5, y = 0.5) {
  if (typeof window === "undefined") return;

  confetti({
    particleCount: 35,
    spread: 50,
    origin: { x, y },
    zIndex: 9999,
    colors: ["#FF6B6B", "#FFD93D", "#D4AF37", "#FF92A9"],
    scalar: 0.7,
  });
}
