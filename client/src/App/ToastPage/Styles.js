import styled from 'styled-components';
import { color, font, mixin } from 'shared/utils/styles';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background: ${color.backgroundLightest};
  min-height: 100vh;
`;

export const PageTitle = styled.h1`
  ${font.size(32)}
  ${font.bold}
  /* Red color emphasizes this is a demo/documentation page */
  color: #ff0000;
  margin: 0 0 16px 0;
`;

export const Description = styled.p`
  ${font.size(15)}
  ${font.regular}
  color: ${color.textMedium};
  margin: 0 0 40px 0;
  line-height: 1.6;
  max-width: 800px;
`;

export const Section = styled.div`
  margin-bottom: 50px;
`;

export const SectionTitle = styled.h2`
  ${font.size(20)}
  ${font.bold}
  color: ${color.textDarkest};
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background: white;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  transition: all 0.15s;
  ${mixin.clickable}

  &:hover {
    ${mixin.boxShadowMedium}
  }

  button {
    width: 100%;
  }
`;

export const ButtonLabel = styled.div`
  ${font.size(13)}
  ${font.regular}
  color: ${color.textMedium};
  line-height: 1.4;
`;
