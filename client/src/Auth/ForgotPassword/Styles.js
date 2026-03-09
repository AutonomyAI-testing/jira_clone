import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const StubIcon = styled.div`
  text-align: center;
  font-size: 48px;
  margin-bottom: 16px;
`;

export const StubMessage = styled.p`
  text-align: center;
  ${font.regular}
  ${font.size(14)}
  color: ${color.textMedium};
  line-height: 1.6;
  margin-bottom: 8px;
  strong {
    ${font.medium}
    color: ${color.textDark};
  }
`;
