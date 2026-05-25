import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const PageContainer = styled.div`
  padding: 30px 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  ${font.black}
  ${font.size(24)}
  color: #FF0000;
  margin: 0 0 10px 0;
  padding: 0;
`; /* Bright red color for high visual prominence */

export const FireAllButton = styled.div`
  margin-bottom: 32px;
`;

export const SectionGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 20px 24px;
  border-left: 4px solid ${(props) => props.color || color.textMedium};
  ${mixin.boxShadowMedium}
`;

export const SectionTitle = styled.h2`
  ${font.bold}
  ${font.size(16)}
  color: ${(props) => props.color || color.textDarkest};
  margin: 0 0 8px 0;
  padding: 0;
`;

export const SectionDesc = styled.p`
  ${font.regular}
  ${font.size(14)}
  color: ${color.textMedium};
  margin: 8px 0 16px 0;
  padding: 0;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const WizardSection = styled(Section)`
  background: #1a2540;
  border-left-color: #f89c1c;
  grid-column: 1 / -1;

  ${SectionTitle} {
    color: #fff;
  }

  ${SectionDesc} {
    color: #d0d5dd;
  }
`;
