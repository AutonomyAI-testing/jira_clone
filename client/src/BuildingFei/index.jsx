import React from 'react';
import styled, { keyframes } from 'styled-components';

import feiWizard from 'App/assets/fei-wizard.png';
import { color, font } from 'shared/utils/styles';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50% { transform: translateY(-18px) rotate(1deg); }
`;

const carpetWave = keyframes`
  0%, 100% {
    transform: perspective(300px) rotateX(18deg) scaleX(1) translateY(0px);
  }
  50% {
    transform: perspective(300px) rotateX(14deg) scaleX(1.03) translateY(-18px);
  }
`;

const shimmer = keyframes`
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  position: relative;
  overflow: hidden;
`;

const Stars = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1.5px 1.5px at 10% 15%, rgba(255,255,255,0.9) 0%, transparent 100%),
    radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(2px 2px at 40% 10%, rgba(255,220,100,0.8) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 55% 30%, rgba(255,255,255,0.9) 0%, transparent 100%),
    radial-gradient(1px 1px at 70% 55%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(2px 2px at 80% 20%, rgba(255,220,100,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 90% 70%, rgba(255,255,255,0.8) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 15% 75%, rgba(255,255,255,0.7) 0%, transparent 100%),
    radial-gradient(1px 1px at 35% 85%, rgba(255,220,100,0.6) 0%, transparent 100%),
    radial-gradient(2px 2px at 60% 90%, rgba(255,255,255,0.8) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 75% 80%, rgba(255,255,255,0.5) 0%, transparent 100%),
    radial-gradient(1px 1px at 88% 45%, rgba(255,220,100,0.7) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 5% 50%, rgba(255,255,255,0.6) 0%, transparent 100%),
    radial-gradient(1px 1px at 48% 62%, rgba(255,255,255,0.9) 0%, transparent 100%),
    radial-gradient(2px 2px at 92% 5%, rgba(255,220,100,0.8) 0%, transparent 100%);
  pointer-events: none;
`;

const GlowOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;

  &.orb1 {
    width: 400px;
    height: 400px;
    background: rgba(82, 60, 180, 0.35);
    top: -100px;
    right: -100px;
  }

  &.orb2 {
    width: 350px;
    height: 350px;
    background: rgba(30, 100, 200, 0.3);
    bottom: -80px;
    left: -80px;
  }

  &.orb3 {
    width: 250px;
    height: 250px;
    background: rgba(200, 150, 20, 0.15);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ContentCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  z-index: 1;
`;

/* ── Carpet ── */
const CarpetWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Carpet = styled.div`
  width: 260px;
  height: 52px;
  border-radius: 40% 40% 35% 35% / 60% 60% 40% 40%;
  background:
    /* central medallion */
    radial-gradient(ellipse 30px 20px at 50% 52%, #f4c542 0%, transparent 100%),
    radial-gradient(ellipse 18px 12px at 50% 52%, #e8851a 0%, transparent 100%),
    /* teal/gold diamond pattern */
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 28px,
      rgba(0,180,160,0.25) 28px,
      rgba(0,180,160,0.25) 32px
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 14px,
      rgba(0,180,160,0.2) 14px,
      rgba(0,180,160,0.2) 16px
    ),
    /* main carpet gradient */
    linear-gradient(180deg,
      #c0392b 0%,
      #9b2335 30%,
      #7d1a2a 60%,
      #9b2335 80%,
      #c0392b 100%
    );
  /* side border stripes */
  box-shadow:
    inset 0 0 0 4px rgba(244, 197, 66, 0.6),
    inset 0 0 0 7px rgba(155, 35, 53, 0.4),
    inset 0 0 0 10px rgba(244, 197, 66, 0.3),
    0 8px 30px rgba(180, 30, 40, 0.5),
    0 2px 8px rgba(0,0,0,0.4);

  animation: ${carpetWave} 3.5s ease-in-out infinite;
  transform-origin: center bottom;
  position: relative;

  /* tassels – left */
  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 36px;
    background: repeating-linear-gradient(
      180deg,
      #f4c542 0px, #f4c542 4px,
      #9b2335 4px, #9b2335 8px
    );
    border-radius: 0 0 6px 6px;
    clip-path: polygon(30% 0, 70% 0, 100% 100%, 0% 100%);
    filter: drop-shadow(-2px 2px 3px rgba(0,0,0,0.4));
  }

  /* tassels – right */
  &::after {
    content: '';
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 36px;
    background: repeating-linear-gradient(
      180deg,
      #f4c542 0px, #f4c542 4px,
      #9b2335 4px, #9b2335 8px
    );
    border-radius: 0 0 6px 6px;
    clip-path: polygon(30% 0, 70% 0, 100% 100%, 0% 100%);
    filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.4));
  }
`;

/* thin front fringe row */
const CarpetFringe = styled.div`
  position: absolute;
  bottom: -10px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
`;

const FringeStrand = styled.div`
  width: 4px;
  height: 12px;
  border-radius: 0 0 3px 3px;
  background: linear-gradient(180deg, #f4c542 0%, #e8851a 100%);
  animation: ${shimmer} 3.5s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || '0s'};
`;

/* glow shadow beneath carpet */
const CarpetGlow = styled.div`
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 18px;
  background: radial-gradient(ellipse, rgba(192, 57, 43, 0.55) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(6px);
  pointer-events: none;
`;

/* ── Fei image ── */
const FeiImageWrapper = styled.div`
  animation: ${float} 3.5s ease-in-out infinite;
  filter: drop-shadow(0 12px 24px rgba(82, 60, 180, 0.45));
  position: relative;
  z-index: 2;
  /* overlap Fei's feet onto the carpet so it reads as riding it */
  margin-bottom: -20px;
`;

const FeiImage = styled.img`
  width: 280px;
  height: auto;
  display: block;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const MainTitle = styled.h1`
  ${font.black}
  font-size: 54px;
  line-height: 1;
  letter-spacing: -1px;
  color: ${color.danger};
  text-shadow:
    0 0 30px rgba(225, 60, 60, 0.6),
    0 0 60px rgba(225, 60, 60, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  text-align: center;
`;

const Subtitle = styled.p`
  ${font.medium}
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const MagicDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;

  &::before,
  &::after {
    content: '';
    width: 60px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(225, 60, 60, 0.6),
      transparent
    );
  }
`;

const MagicStar = styled.span`
  color: #f4c542;
  font-size: 16px;
`;

const fringeDelays = ['0s','0.3s','0.6s','0.9s','1.2s','1.5s','1.8s','2.1s','2.4s','2.7s','3s','3.3s'];

const BuildingFei = () => (
  <PageWrapper>
    <Stars />
    <GlowOrb className="orb1" />
    <GlowOrb className="orb2" />
    <GlowOrb className="orb3" />

    <ContentCard>
      {/* Fei riding the carpet */}
      <CarpetWrapper>
        <FeiImageWrapper>
          <FeiImage src={feiWizard} alt="Fei the wizard robot" />
        </FeiImageWrapper>

        <Carpet>
          <CarpetFringe>
            {fringeDelays.map((d, i) => (
              <FringeStrand key={i} delay={d} />
            ))}
          </CarpetFringe>
        </Carpet>
        <CarpetGlow />
      </CarpetWrapper>

      <TextContainer>
        <Subtitle>Welcome to</Subtitle>
        <MainTitle>Building Fei</MainTitle>
        <MagicDivider>
          <MagicStar>✦</MagicStar>
          <MagicStar>✦</MagicStar>
          <MagicStar>✦</MagicStar>
        </MagicDivider>
      </TextContainer>
    </ContentCard>
  </PageWrapper>
);

export default BuildingFei;
