import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { opacity: 0.3; transform: scale(0.95); }
  50% { opacity: 0.6; transform: scale(1.05); }
  100% { opacity: 0.3; transform: scale(0.95); }
`;

const shimmer = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Subtle star-field background */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 40% 10%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 55% 70%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 25%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 80% 55%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 15% 85%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 35% 60%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 65% 90%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 88% 12%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 5% 50%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 95% 45%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 48% 30%, rgba(255,220,100,0.4) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 72% 68%, rgba(255,220,100,0.3) 0%, transparent 100%);
    pointer-events: none;
  }

  /* Deep space radial glow */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 50% 50%,
      rgba(60, 0, 120, 0.25) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    pointer-events: none;
  }
`;

export const GlowRing = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 200, 80, 0.08) 0%,
    rgba(0, 120, 50, 0.12) 40%,
    transparent 70%
  );
  animation: ${pulse} 3s ease-in-out infinite;
  pointer-events: none;
  z-index: 1;
`;

export const MascotContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 4s ease-in-out infinite;
  filter: drop-shadow(0 0 32px rgba(255, 215, 0, 0.25))
          drop-shadow(0 20px 40px rgba(0, 0, 0, 0.7));
  margin-bottom: 36px;
`;

export const MascotImage = styled.img`
  width: 280px;
  height: auto;
  display: block;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 2;
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 52px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #00e84a;
  text-shadow:
    0 0 20px rgba(0, 232, 74, 0.8),
    0 0 40px rgba(0, 200, 60, 0.5),
    0 0 80px rgba(0, 150, 40, 0.3),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  animation: ${shimmer} 2.5s ease-in-out infinite;
`;
