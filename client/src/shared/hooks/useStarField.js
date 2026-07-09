import { useEffect, useRef } from 'react';

const STAR_COUNT = 140;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function createStar(width, height) {
  return {
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    radius: randomBetween(0.4, 1.8),
    baseOpacity: randomBetween(0.25, 0.75),
    speed: randomBetween(0.06, 0.28),
    phase: randomBetween(0, Math.PI * 2),
    // mix of white and light-gold hues
    hue: Math.random() > 0.35 ? '255, 255, 255' : '255, 230, 160',
  };
}

export function useStarField(canvasRef) {
  // Keep a stable ref to stars and frame counter so cleanup is easy
  const starsRef = useRef([]);
  const frameRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();

    // Seed stars spread across the full canvas
    starsRef.current = Array.from({ length: STAR_COUNT }, () =>
      createStar(canvas.width, canvas.height),
    );

    const draw = () => {
      frameRef.current += 1;
      const frame = frameRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach(star => {
        // Drift upward
        star.y -= star.speed;

        // Wrap around to bottom
        if (star.y + star.radius < 0) {
          star.y = canvas.height + star.radius;
          star.x = randomBetween(0, canvas.width);
        }

        // Sinusoidal twinkle (very slow — 0.012 rad/frame)
        const twinkle = 0.5 + 0.5 * Math.sin(frame * 0.012 + star.phase);
        const opacity = star.baseOpacity * (0.6 + 0.4 * twinkle);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.hue}, ${opacity})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      setSize();
      // Re-scatter stars to new dimensions
      starsRef.current = Array.from({ length: STAR_COUNT }, () =>
        createStar(canvas.width, canvas.height),
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
}
