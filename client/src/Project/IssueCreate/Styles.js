import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  overflow: hidden;
`;

export const GradientBackground = styled.div`
  ${mixin.cover}
  background: linear-gradient(135deg, 
    ${mixin.rgba(color.primary, 0.05)} 0%,
    ${mixin.rgba('#8B5CF6', 0.08)} 25%,
    ${mixin.rgba('#EC4899', 0.05)} 50%,
    ${mixin.rgba(color.primary, 0.08)} 75%,
    ${mixin.rgba('#10B981', 0.05)} 100%
  );
  z-index: 0;
  
  &::before {
    content: '';
    ${mixin.cover}
    background: radial-gradient(circle at 20% 30%, ${mixin.rgba(color.primary, 0.15)} 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, ${mixin.rgba('#EC4899', 0.12)} 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, ${mixin.rgba('#8B5CF6', 0.1)} 0%, transparent 50%);
    animation: gradientShift 20s ease infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1) rotate(5deg);
    }
  }
`;

export const ContentCard = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  background: ${mixin.rgba('#ffffff', 0.95)};
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid ${mixin.rgba('#ffffff', 0.8)};
  box-shadow: 
    0 20px 60px ${mixin.rgba(color.primary, 0.08)},
    0 8px 24px ${mixin.rgba('#000000', 0.04)},
    0 0 0 1px ${mixin.rgba(color.primary, 0.04)};
  padding: 48px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    box-shadow: 
      0 24px 72px ${mixin.rgba(color.primary, 0.12)},
      0 12px 32px ${mixin.rgba('#000000', 0.06)},
      0 0 0 1px ${mixin.rgba(color.primary, 0.06)};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 32px 24px;
    border-radius: 20px;
  }
`;

export const Header = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

export const HeaderTitle = styled.h1`
  ${font.black}
  ${font.size(32)}
  color: ${color.textDarkest};
  margin: 0 0 12px 0;
  background: linear-gradient(135deg, ${color.textDarkest} 0%, ${color.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    ${font.size(26)}
  }
`;

export const HeaderSubtitle = styled.p`
  ${font.regular}
  ${font.size(15)}
  color: ${color.textMedium};
  margin: 0;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`;

export const FormSection = styled.div`
  margin-bottom: 28px;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SectionLabel = styled.label`
  display: block;
  ${font.medium}
  ${font.size(14)}
  color: ${color.textDarkest};
  margin-bottom: 10px;
  letter-spacing: -0.1px;
`;

export const FieldGroup = styled.div`
  position: relative;
  
  & > div {
    transition: all 0.2s ease;
  }
  
  &:focus-within > div {
    transform: translateY(-1px);
  }
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 2px 0;
  ${props => props.withBottomMargin && `margin-bottom: 6px;`}
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateX(2px);
  }
`;

export const SelectItemLabel = styled.div`
  ${font.regular}
  ${font.size(14)}
  color: ${color.textDark};
  flex: 1;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: ${mixin.rgba(color.primary, 0.06)};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${mixin.rgba(color.primary, 0.12)};
    transform: scale(1.1);
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${mixin.rgba(color.borderLightest, 0.5)} 20%,
    ${color.borderLightest} 50%,
    ${mixin.rgba(color.borderLightest, 0.5)} 80%,
    transparent 100%
  );
  margin: 32px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: ${color.borderLight};
    border-radius: 50%;
    box-shadow: 0 0 0 3px ${mixin.rgba(color.borderLight, 0.2)};
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding-top: 40px;
  margin-top: 32px;
  border-top: 1px solid ${mixin.rgba(color.borderLightest, 0.6)};
  
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    
    button {
      width: 100%;
    }
  }
`;

export const ActionButton = styled(Button)`
  min-width: 140px;
  height: 44px;
  border-radius: 12px;
  ${font.medium}
  ${font.size(15)}
  letter-spacing: -0.2px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px ${mixin.rgba('#000000', 0.04)};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${mixin.rgba('#000000', 0.08)};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &[type="submit"] {
    background: linear-gradient(135deg, ${color.primary} 0%, ${mixin.darken(color.primary, 0.1)} 100%);
    box-shadow: 
      0 2px 8px ${mixin.rgba(color.primary, 0.2)},
      0 1px 2px ${mixin.rgba(color.primary, 0.3)};
    
    &:hover {
      box-shadow: 
        0 4px 16px ${mixin.rgba(color.primary, 0.3)},
        0 2px 4px ${mixin.rgba(color.primary, 0.4)};
    }
  }
  
  @media (max-width: 480px) {
    min-width: unset;
  }
`;
