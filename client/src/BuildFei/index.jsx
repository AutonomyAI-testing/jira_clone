import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

import feiWizardImg from 'App/assets/fei-wizard.png';
import { font, color } from 'shared/utils/styles';

// ─── Base animations ────────────────────────────────────────────────
const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
`;

const sparkleAppear = keyframes`
  0%   { opacity: 0;   transform: scale(0) rotate(0deg);   }
  20%  { opacity: 1;   transform: scale(1) rotate(45deg);  }
  80%  { opacity: 0.9; transform: scale(1) rotate(135deg); }
  100% { opacity: 0;   transform: scale(0) rotate(180deg); }
`;

const orbitCW = keyframes`
  from { transform: rotate(0deg)   translateX(var(--r)) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(var(--r)) rotate(-360deg); }
`;

const orbitCCW = keyframes`
  from { transform: rotate(0deg)    translateX(var(--r)) rotate(0deg); }
  to   { transform: rotate(-360deg) translateX(var(--r)) rotate(360deg); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(0.6); }
  50%       { opacity: 1;   transform: scale(1.2); }
`;

const drift = keyframes`
  0%   { transform: translate(0, 0)     rotate(0deg)   scale(1);   opacity: 0; }
  15%  { opacity: 1; }
  85%  { opacity: 0.8; }
  100% { transform: translate(var(--dx), var(--dy)) rotate(var(--dr)) scale(0.4); opacity: 0; }
`;

// ─── Page shell ─────────────────────────────────────────────────────
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: #0a0e1a;
`;

const StarField = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1.5px 1.5px at 15% 12%, rgba(255,255,255,0.85) 0%, transparent 100%),
    radial-gradient(1px 1px at 28% 35%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(2px 2px at 42% 8%, rgba(255,255,255,0.9) 0%, transparent 100%),
    radial-gradient(1px 1px at 57% 22%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 73% 15%, rgba(255,255,255,0.75) 0%, transparent 100%),
    radial-gradient(1px 1px at 86% 42%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(2px 2px at 92% 8%, rgba(255,255,255,0.8) 0%, transparent 100%),
    radial-gradient(1px 1px at 6% 65%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 19% 78%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 35% 55%, rgba(255,255,255,0.45) 0%, transparent 100%),
    radial-gradient(2px 2px at 48% 70%, rgba(255,255,255,0.8) 0%, transparent 100%),
    radial-gradient(1px 1px at 62% 48%, rgba(255,255,255,0.55) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 78% 62%, rgba(255,255,255,0.65) 0%, transparent 100%),
    radial-gradient(1px 1px at 95% 75%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(2px 2px at 10% 90%, rgba(255,255,255,0.85) 0%, transparent 100%),
    radial-gradient(1px 1px at 25% 95%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 55% 88%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 80% 92%, rgba(255,255,255,0.6) 0%, transparent 100%);
  background-size: 100% 100%;
`;

const MoonGlow = styled.div`
  position: absolute;
  top: -120px;
  right: -80px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(60, 90, 200, 0.35) 0%, transparent 70%);
  pointer-events: none;
`;

const BottomGlow = styled.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(60, 90, 200, 0.2) 0%, transparent 70%);
  pointer-events: none;
`;

// ─── Fei + orbiting sparkle container ───────────────────────────────
const FeiContainer = styled.div`
  position: relative;
  width: 300px;
  height: 360px;          /* tall enough to hold the image + orbit clearance */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const FeiImage = styled.img`
  width: 300px;
  height: auto;
  animation: ${float} 3.5s ease-in-out infinite;
  filter: drop-shadow(0 16px 32px rgba(60, 90, 200, 0.4));
  position: relative;
  z-index: 1;
`;

// ─── Orbit ring (the star travels along this invisible circle) ───────
const OrbitRing = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  --r: ${({ r }) => r}px;
  animation: ${({ cw }) => (cw ? orbitCW : orbitCCW)} ${({ dur }) => dur}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

// ─── 4-pointed star shape ────────────────────────────────────────────
const StarPoint = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width:  ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-top:  ${({ size }) => -size / 2}px;
  margin-left: ${({ size }) => -size / 2}px;
  background: ${({ col }) => col};
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%,
    79% 91%, 50% 70%, 21% 91%, 32% 57%,
    2%  35%, 39% 35%
  );
  animation: ${sparkleAppear} ${({ blink }) => blink}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  filter: blur(0.3px) drop-shadow(0 0 4px ${({ col }) => col});
`;

// ─── Tiny drifting particles that fly outward ────────────────────────
const DriftParticle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width:  ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-top:  ${({ size }) => -size / 2}px;
  margin-left: ${({ size }) => -size / 2}px;
  border-radius: 50%;
  background: ${({ col }) => col};
  --dx: ${({ dx }) => dx}px;
  --dy: ${({ dy }) => dy}px;
  --dr: ${({ dr }) => dr}deg;
  animation: ${drift} ${({ dur }) => dur}s ease-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  filter: blur(0.5px);
`;

// ─── Background twinkle dots (further from Fei) ──────────────────────
const TwinkleDot = styled.span`
  position: absolute;
  width:  ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: ${({ col }) => col};
  top:  ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  animation: ${twinkle} ${({ dur }) => dur}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  filter: blur(0.4px);
  pointer-events: none;
`;

const Title = styled.h1`
  ${font.black}
  font-size: 56px;
  letter-spacing: -1px;
  color: ${color.danger};
  margin: 24px 0 0 0;
  position: relative;
  z-index: 1;
  text-align: center;
  background: linear-gradient(90deg, #E13C3C 0%, #ff6b6b 50%, #E13C3C 100%);
  background-size: 800px auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
`;

const Subtitle = styled.p`
  ${font.medium}
  font-size: 16px;
  color: rgba(255,255,255,0.5);
  margin: 10px 0 0 0;
  position: relative;
  z-index: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

// ─── Sparkle colours ─────────────────────────────────────────────────
const COLORS = ['#ffe066', '#fff', '#b3c8ff', '#ffb3de', '#7effb3', '#ffd6a5'];

// ─── Seeded pseudo-random (avoids hydration mismatches) ──────────────
function seededRand(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// ─── Component ───────────────────────────────────────────────────────
const BuildFei = () => {
  const orbits = useMemo(() => {
    const rng = seededRand(42);
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      r:     120 + rng() * 80,          // orbit radius 120-200 px
      dur:   4   + rng() * 6,            // orbit period 4-10 s
      delay: -(rng() * 8),               // negative = already in motion
      cw:    i % 2 === 0,
      size:  8   + rng() * 10,           // star size 8-18 px
      blink: 1.5 + rng() * 2,
      blinkDelay: rng() * 2,
      col:   COLORS[Math.floor(rng() * COLORS.length)],
    }));
  }, []);

  const drifters = useMemo(() => {
    const rng = seededRand(99);
    return Array.from({ length: 14 }, (_, i) => {
      const angle = (i / 14) * 360 + rng() * 20;
      const rad   = (angle * Math.PI) / 180;
      const dist  = 160 + rng() * 80;
      return {
        id: i,
        size:  3 + rng() * 5,
        dx:    Math.cos(rad) * dist,
        dy:    Math.sin(rad) * dist,
        dr:    rng() * 360 - 180,
        dur:   2  + rng() * 3,
        delay: -(rng() * 4),
        col:   COLORS[Math.floor(rng() * COLORS.length)],
      };
    });
  }, []);

  const twinkles = useMemo(() => {
    const rng = seededRand(77);
    return Array.from({ length: 18 }, (_, i) => ({
      id:    i,
      size:  2 + rng() * 4,
      top:   10 + rng() * 80,
      left:  5  + rng() * 90,
      dur:   1.5 + rng() * 3,
      delay: rng() * 3,
      col:   COLORS[Math.floor(rng() * COLORS.length)],
    }));
  }, []);

  return (
    <PageWrapper>
      <StarField />
      <MoonGlow />
      <BottomGlow />

      {/* Ambient twinkle dots across the whole page */}
      {twinkles.map(t => (
        <TwinkleDot key={t.id} size={t.size} top={t.top} left={t.left}
          dur={t.dur} delay={t.delay} col={t.col} />
      ))}

      <FeiContainer>
        {/* Orbiting star sparkles */}
        {orbits.map(o => (
          <OrbitRing key={o.id} r={o.r} dur={o.dur} delay={o.delay} cw={o.cw}>
            <StarPoint size={o.size} blink={o.blink} delay={o.blinkDelay} col={o.col} />
          </OrbitRing>
        ))}

        {/* Drifting particle bursts */}
        {drifters.map(d => (
          <DriftParticle key={d.id} size={d.size} dx={d.dx} dy={d.dy} dr={d.dr}
            dur={d.dur} delay={d.delay} col={d.col} />
        ))}

        <FeiImage src={feiWizardImg} alt="Fei the Wizard" />
      </FeiContainer>

      <Title>Build Fei</Title>
      <Subtitle>powered by AutonomyAI</Subtitle>
    </PageWrapper>
  );
};

export default BuildFei;
