import styled, { css, keyframes } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

const float = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -8%, 0);
  }
`;

const bounce = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  30% {
    transform: translate3d(0, -12%, 0);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  70% {
    transform: translate3d(0, -5%, 0);
  }
`;

const pulse = keyframes`
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
`;

const shimmer = keyframes`
  0%,
  100% {
    opacity: 0.55;
  }
  50% {
    opacity: 1;
  }
`;

const animationByVariant = {
  float: css`
    animation: ${float} 2s ease-in-out infinite;
  `,
  bounce: css`
    animation: ${bounce} 1.8s ease-in-out infinite;
  `,
  pulse: css`
    animation: ${pulse} 2s ease-in-out infinite;
  `,
};

const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  vertical-align: middle;
  ${mixin.hardwareAccelerate}
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${props =>
    props.isAnimated &&
    css`
      &:hover {
        transform: scale(1.08);
        box-shadow: 0 0 0 3px ${mixin.rgba(color.primary, 0.28)},
          0 8px 18px ${mixin.rgba('#000000', 0.14)};
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  ${props => mixin.backgroundImage(props.avatarUrl)}
  ${mixin.hardwareAccelerate}
  ${props =>
    props.isAnimated && (animationByVariant[props.animationVariant] || animationByVariant.float)}
  ${reducedMotion}
`;

export const Letter = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  text-transform: uppercase;
  color: #fff;
  background: ${props => props.color};
  ${font.medium}
  ${props => font.size(Math.round(props.size / 1.7))}
  ${mixin.hardwareAccelerate}
  ${props =>
    props.isAnimated && (animationByVariant[props.animationVariant] || animationByVariant.float)}
  ${reducedMotion}

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const Skeleton = styled.div`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  background: ${color.backgroundMedium};
  animation: ${shimmer} 1.2s ease-in-out infinite;
  ${reducedMotion}
`;
