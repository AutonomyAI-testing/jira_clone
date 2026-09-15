import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const PageContainer = styled.div`
  max-width: 900px;
`;

export const PageHeader = styled.h1`
  padding: 6px 0 15px;
  ${font.size(24)}
  ${font.medium}
  color: red;
`;

export const HeroSection = styled.div`
  padding: 40px 32px;
  margin-bottom: 40px;
  border-radius: 8px;
  background: ${color.backgroundLight};
  border: 1px solid ${color.borderLightest};
  text-align: center;
`;

export const HeroTitle = styled.h2`
  ${font.size(28)}
  ${font.bold}
  margin: 0 0 12px 0;
`;

export const HeroSubtitle = styled.p`
  ${font.size(16)}
  color: ${color.textMedium};
  margin: 0;
`;

export const SectionContainer = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  ${font.size(18)}
  ${font.bold}
  color: ${color.textDarkest};
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const DemoFormContainer = styled.div`
  padding: 24px;
  background: ${color.backgroundLightest};
  border-radius: 6px;
  border: 1px solid ${color.borderLightest};
`;

export const FormField = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDark};
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const SelectField = styled.div`
  flex: 1;
  min-width: 150px;

  @media (max-width: 680px) {
    margin-bottom: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  flex-wrap: wrap;
`;

export const QuickFireButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const CodeBlock = styled.pre`
  padding: 16px;
  background: ${color.textDarkest};
  color: #fff;
  border-radius: 6px;
  overflow-x: auto;
  margin: 0;
  ${font.size(13)}
  line-height: 1.6;
  font-family: 'Courier New', Courier, monospace;
`;

export const ToastPreviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ToastPreviewCard = styled.div`
  padding: 20px;
  border-radius: 6px;
  border: 1px solid ${color.borderLightest};
  background: ${color.backgroundLightest};
`;

export const PreviewLabel = styled.div`
  ${font.size(12)}
  ${font.bold}
  color: ${color.textMedium};
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

export const StyledToastPreview = styled.div`
  position: relative;
  width: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  background: ${props => color[props.type]};
  ${mixin.boxShadowMedium}
`;

export const ToastPreviewTitle = styled.div`
  padding-right: 22px;
  ${font.size(15)}
  ${font.medium}
`;

export const ToastPreviewMessage = styled.div`
  padding: 8px 10px 0 0;
  white-space: pre-wrap;
  ${font.size(14)}
  ${font.medium}
`;

export const CodeSection = styled.div`
  padding: 24px;
  background: ${color.backgroundLightest};
  border-radius: 6px;
  border: 1px solid ${color.borderLightest};
`;

export const CodeExampleBlock = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CodeExampleTitle = styled.div`
  ${font.size(13)}
  ${font.bold}
  color: ${color.textMedium};
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
