import styled, { keyframes } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

const floatUp = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

export const WelcomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8f5ee 50%, #f4f5f7 100%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 560px;
  padding: 60px 40px;
`;

export const MascotWrapper = styled.div`
  animation: ${floatUp} 3.5s ease-in-out infinite;
  margin-bottom: 32px;
  filter: drop-shadow(0 8px 24px rgba(0, 82, 204, 0.18));
`;

export const MascotImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: contain;
`;

export const Title = styled.h1`
  ${font.black}
  font-size: 32px;
  line-height: 1.2;
  color: ${color.textDarkest};
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
`;

export const TitleAccent = styled.span`
  color: ${color.primary};
`;

export const TitleRed = styled.span`
  color: ${color.danger};
`;

export const Subtitle = styled.p`
  ${font.regular}
  font-size: 16px;
  line-height: 1.6;
  color: ${color.textMedium};
  margin: 0 0 40px 0;
  max-width: 440px;
`;

export const FeatureList = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FeatureChip = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 20px;
  ${font.medium}
  font-size: 13px;
  color: ${color.textDark};
  ${mixin.boxShadowMedium};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`;

export const FeatureDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ dotColor }) => dotColor || color.primary};
  flex-shrink: 0;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const StyledPrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 28px;
  height: 44px;
  background: ${color.primary};
  color: #fff;
  border: none;
  border-radius: 3px;
  ${font.medium}
  font-size: 15px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${mixin.darken(color.primary, 0.15)};
  }

  &:active {
    background: ${mixin.darken(color.primary, 0.25)};
  }
`;

export const StyledSecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  height: 44px;
  background: #fff;
  color: ${color.textDark};
  border: 1px solid ${color.borderLight};
  border-radius: 3px;
  ${font.medium}
  font-size: 15px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${color.backgroundLight};
    border-color: ${color.borderLight};
  }
`;

export const Divider = styled.div`
  width: 40px;
  height: 3px;
  background: ${color.primary};
  border-radius: 2px;
  margin: 0 auto 32px;
  opacity: 0.4;
`;
