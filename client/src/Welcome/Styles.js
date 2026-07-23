import styled, { keyframes } from 'styled-components';

import { color, font } from 'shared/utils/styles';

const floatUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const mascotFloat = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const WelcomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLightest};
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 24px;
  animation: ${floatUp} 0.55s ease both;
`;

export const MascotImage = styled.img`
  width: 260px;
  height: auto;
  margin-bottom: 32px;
  animation: ${mascotFloat} 3.5s ease-in-out infinite;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.12));
`;

export const Heading = styled.h1`
  margin: 0 0 16px;
  ${font.black}
  ${font.size(36)}
  color: ${color.danger};
  letter-spacing: -0.5px;
`;

export const Description = styled.p`
  margin: 0 0 36px;
  max-width: 460px;
  ${font.regular}
  ${font.size(17)}
  color: ${color.textMedium};
  line-height: 1.6;
`;

export const CTAWrapper = styled.div`
  button {
    padding: 12px 32px;
    ${font.medium}
    ${font.size(16)}
    border-radius: 5px;
    letter-spacing: 0.2px;
  }
`;
