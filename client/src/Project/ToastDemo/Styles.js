import styled, { css } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import Button from 'shared/components/Button';

export const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  margin: 0 0 8px 0;
  ${font.size(32)}
  ${font.bold}
  /* Red color highlights the demo/test nature of this interface */
  color: #FF0000;
`;

export const Subtitle = styled.p`
  margin: 0;
  ${font.size(16)}
  ${font.regular}
  color: ${color.textMedium};
`;

export const Section = styled.div`
  margin-bottom: 50px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 20px 0;
  ${font.size(20)}
  ${font.bold}
  color: ${color.textDarkest};
  border-bottom: 1px solid ${color.borderLightest};
  padding-bottom: 12px;
`;

export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 999px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

// Map toast types to their theme colors for visual preview cards that users can click to trigger
const toastTypeStyles = {
  success: css`
    background: ${color.success};
  `,
  danger: css`
    background: ${color.danger};
  `,
  warning: css`
    background: ${color.warning};
  `,
  info: css`
    background: ${color.primary};
  `,
};

export const PreviewCard = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.boxShadowMedium}
  ${props => toastTypeStyles[props.type]}

  &:hover {
    opacity: 0.9;
    /* Subtle lift effect on hover for better interactivity feedback */
    transform: translateY(-2px);
  }
`;

export const PreviewCardIcon = styled.div`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const PreviewCardTitle = styled.div`
  ${font.size(16)}
  ${font.bold}
  margin-bottom: 8px;
`;

export const PreviewCardDescription = styled.div`
  ${font.size(13)}
  ${font.regular}
  opacity: 0.95;
  margin-bottom: 8px;
`;

export const PreviewCardBadge = styled.div`
  ${font.size(11)}
  ${font.medium}
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.8;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 30px;

  @media (max-width: 999px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
`;

export const ConfigSection = styled.div`
  background: ${color.backgroundLightest};
  padding: 24px;
  border-radius: 3px;
  border: 1px solid ${color.borderLightest};
`;

export const ConfigGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const ConfigField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConfigLabel = styled.label`
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDarkest};
  margin-bottom: 8px;
  display: block;
`;

export const ConfigInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  ${font.size(14)}
  ${font.regular}
  color: ${color.textDarkest};
  transition: border-color 0.1s;

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    /* Visual focus ring for accessibility */
    box-shadow: 0 0 0 4px ${color.backgroundLightPrimary};
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

export const ConfigSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  ${font.size(14)}
  ${font.regular}
  color: ${color.textDarkest};
  background: #fff;
  transition: border-color 0.1s;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    /* Visual focus ring for accessibility */
    box-shadow: 0 0 0 4px ${color.backgroundLightPrimary};
  }
`;

export const ConfigTextarea = styled.textarea`
  padding: 12px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  ${font.size(14)}
  ${font.regular}
  color: ${color.textDarkest};
  font-family: "CircularStdBook", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.1s;

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    /* Visual focus ring for accessibility */
    box-shadow: 0 0 0 4px ${color.backgroundLightPrimary};
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

export const ConfigActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const StatusContainer = styled.div`
  background: ${color.backgroundLightest};
  padding: 16px;
  border-radius: 3px;
  border: 1px solid ${color.borderLightest};
`;

export const StatusLabel = styled.div`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textMedium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`;

export const StatusValue = styled.div`
  ${font.size(18)}
  ${font.bold}
  color: ${color.primary};
`;
