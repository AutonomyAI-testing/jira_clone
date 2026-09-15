import styled, { css } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button } from 'shared/components';

// Page Container
export const PageContainer = styled.div`
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Hero Section
export const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
  border-radius: 8px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const HeroImage = styled.div`
  font-size: 120px;
  text-align: center;
  line-height: 1;

  > * {
    margin: 0 10px;
  }
`;

// Introduction Section
export const IntroSection = styled.div`
  margin-bottom: 50px;
`;

export const SectionTitle = styled.h2`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
  color: ${color.textDarkest};
  margin: 0;
`;

export const SectionDescription = styled.p`
  ${font.size(14)}
  ${font.regular}
  color: ${color.textMedium};
  margin: 0 0 20px 0;
  line-height: 1.5;
  max-width: 700px;
`;

export const CodeBlock = styled.pre`
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  ${font.size(13)}
  line-height: 1.5;
  margin: 0;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;

  code {
    font-family: inherit;
    color: inherit;
  }
`;

// Shared grid CSS for Examples and Variations sections
const showcaseGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: 999px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

// Examples Grid
export const ExamplesGrid = styled.div`
  ${showcaseGrid};
  margin-bottom: 50px;
`;

// Example Card
export const ExampleCard = styled.div`
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  padding: 20px;
  background: #fff;
  transition: all 0.15s;

  &:hover {
    ${mixin.boxShadowMedium}
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`;

export const CardTitle = styled.h3`
  ${font.size(16)}
  ${font.medium}
  color: ${color.textDarkest};
  margin: 0;
`;

export const ColorBadge = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background: ${props => props.color};
  flex-shrink: 0;
`;

export const CardDescription = styled.p`
  ${font.size(13)}
  ${font.regular}
  color: ${color.textMedium};
  margin: 0 0 16px 0;
  line-height: 1.5;
`;

export const CardButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const TriggerButton = styled(Button)`
  ${font.size(13)}
`;

export const CardCode = styled.div`
  background: #f5f5f5;
  border: 1px solid ${color.borderLightest};
  border-radius: 4px;
  padding: 12px;
  margin-top: 12px;
  overflow-x: auto;
`;

export const CodeSnippet = styled.pre`
  ${font.size(12)}
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  color: ${color.textDark};
  margin: 0;
  line-height: 1.4;

  code {
    font-family: inherit;
    color: inherit;
  }
`;

// Content Variations Section
export const ContentVariationsSection = styled.div`
  margin-bottom: 50px;
`;

export const VariationsGrid = styled.div`
  ${showcaseGrid};
`;

export const VariationCard = styled(ExampleCard)``;

export const VariationTitle = styled.h4`
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDarkest};
  margin: 0 0 12px 0;
`;

export const VariationDescription = styled.p`
  ${font.size(13)}
  ${font.regular}
  color: ${color.textMedium};
  margin: 0 0 12px 0;
  line-height: 1.5;
`;

// API Reference Section
export const ApiReferenceSection = styled.div`
  margin-bottom: 30px;
`;

export const ApiTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid ${color.borderLightest};

  th {
    background: ${color.backgroundLight};
    padding: 12px 16px;
    text-align: left;
    border-bottom: 2px solid ${color.borderLightest};
    ${font.size(14)}
    ${font.medium}
    color: ${color.textDarkest};
  }

  td {
    padding: 12px 16px;
    border-bottom: 1px solid ${color.borderLightest};
    ${font.size(13)}
    ${font.regular}
    color: ${color.textMedium};
  }

  tr:last-child td {
    border-bottom: none;
  }

  code {
    background: #f5f5f5;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    ${font.size(12)}
    color: ${color.textDark};
  }
`;
