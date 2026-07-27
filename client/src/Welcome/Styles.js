import styled, { keyframes } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(145deg, #e8f0fe 0%, #f0f4ff 40%, #f4f5f7 100%);
  padding: 48px 24px;
  position: relative;
  overflow: hidden;

  /* Decorative background circles */
  &::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 82, 204, 0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(11, 135, 91, 0.07) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 640px;
  width: 100%;
  animation: ${fadeIn} 0.6s ease-out both;
`;

export const MascotWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 32px;
  animation: ${float} 4s ease-in-out infinite;
  filter: drop-shadow(0px 16px 24px rgba(9, 30, 66, 0.18));
`;

export const MascotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const LogoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
  animation: ${fadeIn} 0.6s ease-out 0.1s both;
`;

export const LogoLabel = styled.span`
  ${font.black}
  ${font.size(22)}
  color: ${color.primary};
  letter-spacing: -0.5px;
`;

export const Heading = styled.h1`
  ${font.black}
  ${font.size(36)}
  color: #E13C3C;
  line-height: 1.2;
  margin-bottom: 16px;
  animation: ${fadeIn} 0.6s ease-out 0.15s both;
`;

export const Subheading = styled.p`
  ${font.regular}
  ${font.size(17)}
  color: ${color.textMedium};
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 480px;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeIn} 0.6s ease-out 0.25s both;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 24px;
  background: ${color.primary};
  color: #fff;
  border-radius: 3px;
  ${font.medium}
  ${font.size(15)}
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease;
  border: none;

  &:hover {
    background: ${mixin.darken(color.primary, 0.15)};
    color: #fff;
    text-decoration: none;
  }

  &:active {
    background: ${mixin.darken(color.primary, 0.25)};
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 24px;
  background: #fff;
  color: ${color.textDark};
  border-radius: 3px;
  ${font.medium}
  ${font.size(15)}
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  border: 1px solid ${color.borderLight};
  box-shadow: 0 1px 3px rgba(9, 30, 66, 0.08);

  &:hover {
    background: ${color.backgroundLight};
    color: ${color.textDark};
    text-decoration: none;
  }

  &:active {
    background: ${color.backgroundMedium};
  }
`;

export const FeatureRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 56px;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeIn} 0.6s ease-out 0.35s both;
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  padding: 20px;
  width: 180px;
  box-shadow: 0 1px 3px rgba(9, 30, 66, 0.08);
  text-align: left;
`;

export const FeatureIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 3px;
  background: ${({ bg }) => bg || color.backgroundLightPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const FeatureTitle = styled.div`
  ${font.medium}
  ${font.size(13)}
  color: ${color.textDarkest};
  margin-bottom: 4px;
`;

export const FeatureDesc = styled.div`
  ${font.regular}
  ${font.size(12)}
  color: ${color.textMedium};
  line-height: 1.4;
`;

export const Footer = styled.div`
  margin-top: 40px;
  ${font.size(12)}
  color: ${color.textLight};
  animation: ${fadeIn} 0.6s ease-out 0.4s both;
`;
