import styled, { css, keyframes } from 'styled-components';

import { mixin } from 'shared/utils/styles';

const wave = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
  12% {
    transform: translate3d(-2%, -12%, 0) rotate(-14deg) scale(1.04);
  }
  28% {
    transform: translate3d(3%, -4%, 0) rotate(12deg) scale(1.02);
  }
  44% {
    transform: translate3d(-1%, -14%, 0) rotate(-16deg) scale(1.05);
  }
  60% {
    transform: translate3d(2%, -3%, 0) rotate(10deg) scale(1.02);
  }
  78% {
    transform: translate3d(-2%, -9%, 0) rotate(-11deg) scale(1.03);
  }
`;

const PHOTO_BLUE = '#00a0e3';

const glow = keyframes`
  0%,
  100% {
    box-shadow: 0 0 0 2px #fff, 0 4px 12px ${mixin.rgba(PHOTO_BLUE, 0.28)};
  }
  50% {
    box-shadow: 0 0 0 2px #fff, 0 8px 22px ${mixin.rgba(PHOTO_BLUE, 0.48)};
  }
`;

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Ring = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size + props.$borderWidth * 2}px;
  height: ${props => props.size + props.$borderWidth * 2}px;
  border-radius: 50%;
  padding: ${props => props.$borderWidth}px;
  background: linear-gradient(145deg, #b8ecff 0%, #00a0e3 45%, #005a9e 100%);
  box-shadow: 0 0 0 2px #fff, 0 4px 12px ${mixin.rgba(PHOTO_BLUE, 0.28)};
  flex-shrink: 0;
  box-sizing: border-box;
  ${props =>
    props.$animated &&
    css`
      transform-origin: 50% 85%;
      will-change: transform;
      animation: ${wave} 1.15s ease-in-out infinite, ${glow} 2.4s ease-in-out infinite;
      ${reducedMotion}
    `}
`;

export const Clip = styled.div`
  width: ${props => props.size + 2}px;
  height: ${props => props.size + 2}px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  margin: -1px;
  transform: translateZ(0);
  isolation: isolate;
  background-color: #00a0e3;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 35%;
`;
