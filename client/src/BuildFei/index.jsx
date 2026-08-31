import React from 'react';
import styled, { keyframes } from 'styled-components';

import feimascot from 'App/assets/fei-mascot.png';
import { color, font } from 'shared/utils/styles';

const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-18px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0%   { text-shadow: 0 0 10px rgba(11, 135, 91, 0.4), 0 0 20px rgba(11, 135, 91, 0.2); }
  50%  { text-shadow: 0 0 25px rgba(11, 135, 91, 0.8), 0 0 50px rgba(11, 135, 91, 0.4); }
  100% { text-shadow: 0 0 10px rgba(11, 135, 91, 0.4), 0 0 20px rgba(11, 135, 91, 0.2); }
`;

const twinkle = keyframes`
  0%   { opacity: 1;   transform: scale(1) rotate(0deg); }
  25%  { opacity: 0.6; transform: scale(0.85) rotate(15deg); }
  50%  { opacity: 1;   transform: scale(1.15) rotate(0deg); }
  75%  { opacity: 0.7; transform: scale(0.9) rotate(-10deg); }
  100% { opacity: 1;   transform: scale(1) rotate(0deg); }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 40%, #0a1628 70%, #050c1a 100%);
  position: relative;
  overflow: hidden;

  /* Stars background */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,215,0,0.6) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,255,255,0.6) 1.5px, transparent 1.5px);
    background-size: 120px 120px, 180px 180px, 240px 240px;
    background-position: 0 0, 60px 60px, 30px 90px;
    pointer-events: none;
  }
`;

const StarDecoration = styled.div`
  position: absolute;
  left: ${p => p.left};
  top: ${p => p.top};
  transform: translate(-50%, -50%);
  animation: ${twinkle} ${p => p.duration || '3s'} ease-in-out infinite;
  animation-delay: ${p => p.delay || '0s'};
  pointer-events: none;
  z-index: 2;

  svg {
    width: ${p => p.size || '48px'};
    height: ${p => p.size || '48px'};
    filter: drop-shadow(0 0 8px ${p => p.glowColor || 'rgba(255, 215, 0, 0.8)'});
  }
`;

const MascotWrapper = styled.div`
  animation: ${float} 4s ease-in-out infinite;
  margin-bottom: 36px;
  filter: drop-shadow(0 20px 40px rgba(0, 82, 204, 0.4));
`;

const Mascot = styled.img`
  width: 280px;
  height: auto;
  display: block;
`;

const Title = styled.h1`
  ${font.black}
  font-size: 72px;
  color: ${color.success};
  letter-spacing: -1px;
  margin: 0;
  animation: ${glow} 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
`;

const Subtitle = styled.p`
  ${font.medium}
  font-size: 18px;
  color: rgba(255, 255, 255, 0.55);
  margin: 12px 0 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
`;

// 4-point sparkle star SVG
const StarSVG = ({ color: c = '#FFD700', innerColor = '#FFF8DC' }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon
      points="50,2 56,44 98,50 56,56 50,98 44,56 2,50 44,44"
      fill={c}
    />
    <polygon
      points="50,18 53,47 82,50 53,53 50,82 47,53 18,50 47,47"
      fill={innerColor}
      opacity="0.6"
    />
  </svg>
);

const BuildFei = () => (
  <Page>
    {/* Top-left star */}
    <StarDecoration left="17.1%" top="21.1%" size="56px" duration="2.8s" delay="0s" glowColor="rgba(255,215,0,0.9)">
      <StarSVG />
    </StarDecoration>

    {/* Bottom-left star */}
    <StarDecoration left="16.4%" top="66.9%" size="44px" duration="3.4s" delay="0.7s" glowColor="rgba(255,215,0,0.9)">
      <StarSVG />
    </StarDecoration>

    {/* Top-right star */}
    <StarDecoration left="83.6%" top="23.9%" size="52px" duration="3.1s" delay="0.4s" glowColor="rgba(255,215,0,0.9)">
      <StarSVG />
    </StarDecoration>

    {/* Bottom-right star */}
    <StarDecoration left="83.6%" top="68.0%" size="48px" duration="2.6s" delay="1.1s" glowColor="rgba(255,215,0,0.9)">
      <StarSVG />
    </StarDecoration>

    <MascotWrapper>
      <Mascot src={feimascot} alt="Fei — the AutonomyAI wizard mascot" />
    </MascotWrapper>
    <Title>Build Fei</Title>
    <Subtitle>Your AI coding companion</Subtitle>
  </Page>
);

export default BuildFei;
