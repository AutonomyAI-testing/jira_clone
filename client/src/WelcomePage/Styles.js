import styled, { keyframes } from 'styled-components';
import { font } from 'shared/utils/styles';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1ab3c8 0%, #0e8fa3 30%, #0b7a8c 60%, #086b7d 100%);
  padding: 40px 24px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 60%);
    pointer-events: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;
  width: 100%;
  animation: ${fadeInUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

export const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
  animation: ${fadeInUp} 0.6s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  color: #fff;
  backdrop-filter: blur(4px);
  ${font.size(13)}
  ${font.medium}
`;

export const BadgeDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #a5f3a0;
  box-shadow: 0 0 6px rgba(165, 243, 160, 0.8);
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  margin-bottom: 36px;
  animation: ${float} 4s ease-in-out infinite;
`;

export const HeroImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 5px solid rgba(255, 255, 255, 0.4);
  box-shadow:
    0 0 0 10px rgba(255, 255, 255, 0.12),
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 8px 24px rgba(0, 0, 0, 0.2);
`;

export const HeroGlow = styled.div`
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
  pointer-events: none;
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  margin: 0 0 16px;
  line-height: 1.15;
  ${font.size(42)}
  ${font.bold}
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  animation: ${fadeInUp} 0.6s 0.2s cubic-bezier(0.22, 1, 0.36, 1) both;

  span {
    display: inline-block;
    background: linear-gradient(90deg, #fff 0%, #e0f8ff 40%, #fff 60%, #c8f0ff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 3s linear infinite;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.88);
  margin: 0 0 36px;
  max-width: 480px;
  line-height: 1.7;
  ${font.size(16)}
  ${font.regular}
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.6s 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeInUp} 0.6s 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 28px;
  border-radius: 6px;
  border: none;
  background: #fff;
  color: #0b7a8c;
  cursor: pointer;
  transition: all 0.2s;
  ${font.size(15)}
  ${font.bold}
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
    background: #f0fdff;
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.14);
  }
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 28px;
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0.55);
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  ${font.size(15)}
  ${font.medium}
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(255, 255, 255, 0.22);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 52px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${fadeInUp} 0.6s 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const StatValue = styled.div`
  color: #fff;
  ${font.size(24)}
  ${font.bold}
  line-height: 1;
`;

export const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.72);
  ${font.size(12)}
  ${font.regular}
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const Bubbles = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const rise = keyframes`
  0% { transform: translateY(100%) scale(0.8); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.3; }
  100% { transform: translateY(-100vh) scale(1.1); opacity: 0; }
`;

export const Bubble = styled.div`
  position: absolute;
  bottom: -80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  animation: ${rise} linear infinite;
  animation-duration: ${props => props.duration || '8'}s;
  animation-delay: ${props => props.delay || '0'}s;
  left: ${props => props.left || '50'}%;
  width: ${props => props.size || '40'}px;
  height: ${props => props.size || '40'}px;
`;
