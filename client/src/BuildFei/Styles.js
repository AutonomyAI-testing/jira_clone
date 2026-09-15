import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
`;

export const PageWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: -2%;
  right: 5%;
  width: min(70vmin, 580px);
  min-width: 300px;
  opacity: 0.55;
  pointer-events: none;
  user-select: none;
  /* Restore vibrant colors: boost saturation + brightness */
  filter: brightness(1.4) saturate(1.7) contrast(1.05);
  animation: ${floatAnimation} 5s ease-in-out infinite;
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: CircularStdBlack, sans-serif;
  font-size: clamp(52px, 10vw, 100px);
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #e11d1d;
  text-shadow:
    0 0 40px rgba(225, 29, 29, 0.7),
    0 0 100px rgba(225, 29, 29, 0.35);
  line-height: 1;
`;
