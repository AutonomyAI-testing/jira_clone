import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  margin: 0 0 8px 0;
  padding: 0;
  color: #36B37E;
  ${font.size(32)}
  ${font.black}
`;

export const Subtitle = styled.p`
  margin: 0;
  padding: 0;
  color: ${color.textMedium};
  ${font.size(16)}
  ${font.regular}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  border: 1px solid ${color.borderLightest};
  overflow: hidden;
  ${mixin.boxShadowMedium}
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12);
  }
`;

export const CardHeader = styled.div`
  height: 6px;
  background: ${props => {
    const typeColorMap = {
      success: color.success,
      danger: color.danger,
      warning: color.warning,
      primary: color.primary,
    };
    return typeColorMap[props.type] || color.primary;
  }};
`;

export const CardTitle = styled.h2`
  margin: 0;
  padding: 20px 20px 8px 20px;
  color: ${color.textDarkest};
  ${font.size(16)}
  ${font.bold}
`;

export const CardDescription = styled.p`
  margin: 0;
  padding: 0 20px 16px 20px;
  color: ${color.textMedium};
  ${font.size(13)}
  ${font.regular}
`;

export const CardContent = styled.div`
  padding: 16px 20px 20px 20px;
  border-top: 1px solid ${color.borderLightest};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  button {
    flex: 1;
    min-width: 120px;
  }

  @media (max-width: 999px) {
    button {
      flex: 0 1 calc(50% - 4px);
    }
  }
`;

export const Section = styled.div`
  margin-bottom: 48px;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 24px 0;
  padding: 0;
  color: ${color.textDarkest};
  ${font.size(20)}
  ${font.bold}
`;

export const SectionContent = styled.div`
  p {
    margin: 0 0 16px 0;
    padding: 0;
    color: ${color.textMedium};
    ${font.size(14)}
    ${font.regular}
  }
`;

export const PreviewContainer = styled.div`
  padding: 40px;
  background: ${color.backgroundLightest};
  border: 2px dashed ${color.borderLightest};
  border-radius: 5px;
  text-align: center;
  color: ${color.textMedium};
  ${font.size(14)}
  ${font.regular}
`;

export const StyledToastPreview = styled.div`
  position: relative;
  width: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  background: ${props => props.background || color.success};
  color: #fff;
  ${mixin.boxShadowMedium}
  margin-bottom: 10px;

  div:first-child {
    ${font.size(15)}
    ${font.medium}
    margin-bottom: 8px;
  }

  div:last-child {
    ${font.size(14)}
    ${font.medium}
  }
`;
