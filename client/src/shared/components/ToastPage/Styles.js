import styled, { css } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button } from 'shared/components';

// Maps toast types to their corresponding colors for consistent styling
const TYPE_COLOR_MAP = {
  success: color.success,
  danger: color.danger,
  warning: color.warning,
  primary: color.primary,
};

export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0d1117 0%, #1a1f2e 100%);
  color: #fff;
  padding: 40px 24px;
  font-family: 'CircularStdBook', sans-serif;
`;

export const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const AvatarPlaceholder = styled.div`
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff 0%, #0052cc 50%, #a855f7 100%);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  position: relative;

  &::after {
    content: '✦';
    position: absolute;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    border-radius: 50%;
    background: linear-gradient(135deg, #ffa500 0%, #ff7500 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const MainTitle = styled.h1`
  margin: 0 0 12px 0;
  ${font.size(48)}
  ${font.bold}
  background: linear-gradient(135deg, #00d4ff 0%, #0052cc 50%, #ffa500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
`;

export const Subtitle = styled.p`
  margin: 0;
  ${font.size(18)}
  color: #ff4444;
  ${font.regular}
`;

export const SectionTitle = styled.h2`
  margin: 32px 0 20px 0;
  ${font.size(22)}
  ${font.bold}
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 24px;
    background: linear-gradient(180deg, #00d4ff 0%, #0052cc 100%);
    border-radius: 2px;
  }
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
  max-width: 600px;
`;

export const ToastButton = styled(Button)`
  height: 44px;
  ${font.size(14.5)}
  min-width: 120px;
  /* Dynamic color override for non-standard variants like warning (orange instead of standard colors) */
  ${(props) =>
    props.$colorOverride &&
    css`
      background: ${props.$colorOverride} !important;
      color: #fff !important;
      &:hover {
        background: ${mixin.lighten(props.$colorOverride, 0.15)} !important;
      }
      &:active {
        background: ${mixin.darken(props.$colorOverride, 0.1)} !important;
      }
    `}
`;

export const CustomToastSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
`;

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormLabel = styled.label`
  ${font.size(12)}
  color: rgba(255, 255, 255, 0.7);
  ${font.medium}
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const StyledInput = styled.input`
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  ${font.size(14)}
  transition: all 0.2s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }
`;

export const CustomButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
`;

export const ToastCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 16px;
  backdrop-filter: blur(10px);
  overflow: hidden;

  ${(props) => {
    const borderColor = TYPE_COLOR_MAP[props.type] || color.primary;

    return css`
      border-left: 4px solid ${borderColor};

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, ${borderColor}, transparent);
      }
    `;
  }}

  position: relative;
`;

export const ToastCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  ${font.size(14)}
  ${font.bold}
  color: #fff;
`;

export const ToastCardIcon = styled.span`
  ${font.size(18)}
  line-height: 1;
`;

export const ToastCardMessage = styled.div`
  ${font.size(13)}
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

export const DescriptionText = styled.p`
  margin: 8px 0 0 0;
  ${font.size(12)}
  color: rgba(255, 255, 255, 0.5);
  ${font.regular}
`;
