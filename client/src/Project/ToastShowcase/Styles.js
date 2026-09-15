import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const PageCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Hero section with a warm gradient background to introduce the showcase
export const Hero = styled.div`
  background: linear-gradient(135deg, #f9f7f2 0%, #faf8f5 100%);
  border-radius: 8px;
  padding: 50px 40px;
  margin-bottom: 60px;
  text-align: center;
`;

export const HeroMascot = styled.div`
  font-size: 120px;
  margin-bottom: 20px;
  ${mixin.hardwareAccelerate}
`;

export const HeroTitle = styled.h1`
  ${font.size(28)}
  ${font.bold}
  color: #E13C3C;
  margin: 0 0 8px 0;
`;

export const HeroSubtitle = styled.p`
  ${font.size(16)}
  ${font.regular}
  color: ${color.textMedium};
  margin: 0;
`;

export const SectionTitle = styled.h2`
  ${font.size(20)}
  ${font.bold}
  color: ${color.textDarkest};
  margin: 0 0 30px 0;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 60px;

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
  }
`;

// Card for each toast variant with a left border accent matching the variant's color
// Creates visual hierarchy and helps users quickly identify notification types
export const VariantCard = styled.div`
  background: #fff;
  border: 1px solid ${color.borderLightest};
  border-radius: 6px;
  padding: 24px;
  border-left: 4px solid ${props => props.borderColor};
  transition: all 0.15s;

  &:hover {
    ${mixin.boxShadowMedium}
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const CardIcon = styled.div`
  font-size: 28px;
  margin-right: 12px;
`;

export const CardName = styled.h3`
  ${font.size(16)}
  ${font.bold}
  color: ${color.textDarkest};
  margin: 0;
`;

export const CardDescription = styled.p`
  ${font.size(14)}
  ${font.regular}
  color: ${color.textMedium};
  margin: 0 0 16px 0;
`;

// Display the default toast message in a monospace font to show what the notification will look like
export const CardMessage = styled.div`
  background: ${color.backgroundLightest};
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
  ${font.size(13)}
  ${font.regular}
  color: ${color.textDark};
  word-break: break-word;
  font-family: 'Courier New', monospace;
`;

export const CustomMessageContainer = styled.div`
  margin-bottom: 16px;
`;

export const CustomMessageLabel = styled.label`
  ${font.size(12)}
  ${font.medium}
  color: ${color.textDark};
  display: block;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CustomMessageInput = styled.textarea`
  width: 100%;
  min-height: 60px;
  padding: 10px;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  ${font.size(13)}
  ${font.regular}
  color: ${color.textDark};
  resize: vertical;
  font-family: 'Courier New', monospace;

  &:focus {
    outline: none;
    border-color: ${color.borderInputFocus};
    box-shadow: 0 0 0 3px rgba(76, 154, 255, 0.1);
  }

  &::placeholder {
    color: ${color.textLight};
  }
`;

// Button to trigger the toast notification
// Full width for emphasis and consistent interaction patterns
export const TriggerButton = styled.button`
  width: 100%;
  padding: 10px 16px;
  background: ${color.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  ${font.size(14)}
  ${font.medium}
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.clickable}

  &:hover {
    background: ${mixin.darken(color.primary, 0.1)};
  }

  &:active {
    background: ${mixin.darken(color.primary, 0.2)};
  }
`;

// Code example section showing how to use the toast system in application code
export const CodeSection = styled.div`
  background: ${color.backgroundLightest};
  border: 1px solid ${color.borderLightest};
  border-radius: 6px;
  padding: 30px;
  margin-top: 40px;
`;

export const CodeTitle = styled.h3`
  ${font.size(16)}
  ${font.bold}
  color: ${color.textDarkest};
  margin: 0 0 16px 0;
`;

// Dark themed code block for better readability of the usage example
export const CodeBlock = styled.pre`
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  ${font.size(13)}
  margin: 0;
  font-family: 'Courier New', monospace;
  line-height: 1.6;

  code {
    font-family: 'Courier New', monospace;
  }
`;
