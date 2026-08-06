import styled, { keyframes } from 'styled-components';

import { color, font } from 'shared/utils/styles';

const floatAnimation = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

export const WelcomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
`;

export const WelcomeInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 48px 32px;
`;

export const MascotImage = styled.img`
  width: 220px;
  height: auto;
  margin-bottom: 32px;
  animation: ${floatAnimation} 3.5s ease-in-out infinite;
  filter: drop-shadow(0 12px 24px rgba(0, 82, 204, 0.18));
`;

export const Heading = styled.h1`
  ${font.black}
  ${font.size(52)}
  color: ${color.danger};
  margin: 0 0 16px 0;
  letter-spacing: -1px;
`;

export const Tagline = styled.p`
  ${font.medium}
  ${font.size(18)}
  color: ${color.textMedium};
  margin: 0 0 40px 0;
  max-width: 420px;
  line-height: 1.6;
`;

export const CtaWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
