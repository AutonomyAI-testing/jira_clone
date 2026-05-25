import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button, Input } from 'shared/components';

export const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  margin-bottom: 40px;
`;

export const PageTitle = styled.h1`
  padding: 15px 0 10px;
  ${font.size(32)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const PageSubtitle = styled.p`
  margin: 10px 0 0;
  ${font.size(15)}
  color: ${color.textMedium};
  line-height: 1.5;
`;

export const Section = styled.div`
  margin-bottom: 50px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  ${font.size(20)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const PlaygroundCard = styled.div`
  padding: 30px;
  background: ${color.backgroundLightest};
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
`;

export const FormRow = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  ${font.size(13)}
  ${font.bold}
  color: ${color.textDarkest};
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

export const TypeButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const TypeButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 2px solid ${color.borderLightest};
  background: white;
  ${font.size(14)}
  ${font.medium}
  color: ${color.textDark};
  cursor: pointer;
  transition: all 0.2s;
  ${mixin.clickable}

  ${props =>
    props.isActive &&
    `
    border-color: ${color.primary};
    background: ${color.backgroundLightPrimary};
    color: ${color.primary};
  `}

  &:hover {
    border-color: ${color.primary};
  }
`;

export const InputField = styled(Input)`
  width: 100%;
`;

export const DurationButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const DurationButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${color.borderLight};
  background: white;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textDark};
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.clickable}

  ${props =>
    props.isActive &&
    `
    background: ${color.primary};
    border-color: ${color.primary};
    color: white;
  `}

  &:hover {
    border-color: ${color.primary};
  }
`;

export const ShowToastButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  ${font.size(15)}
  ${font.bold}
`;

export const ExamplesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const ExampleCard = styled.div`
  position: relative;
  padding: 20px;
  background: white;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  display: flex;
  flex-direction: column;
  transition: all 0.2s;

  &:hover {
    ${mixin.boxShadowMedium}
  }
`;

export const ExampleBorder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  border-radius: 4px 0 0 4px;
  background: ${props => {
    const typeMap = {
      success: '#0B875B',
      danger: '#E13C3C',
      warning: '#F89C1C',
      primary: '#0052cc',
    };
    return typeMap[props.type] || color.primary;
  }};
`;

export const ExampleLabel = styled.div`
  margin-bottom: 8px;
  margin-left: 12px;
  ${font.size(14)}
  ${font.bold}
  color: ${color.textDarkest};
`;

export const ExampleDescription = styled.p`
  margin: 0 0 16px 12px;
  ${font.size(12)}
  color: ${color.textMedium};
  line-height: 1.4;
  flex: 1;
`;

export const ExampleButton = styled(Button)`
  align-self: flex-start;
  margin-left: 12px;
  ${font.size(13)}
`;
