import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Dates = styled.div`
  margin-top: 11px;
  padding-top: 13px;
  line-height: 22px;
  border-top: 1px solid ${color.borderLightest};
  color: ${color.textMedium};
  ${font.size(13)}
`;

export const DateField = styled.div`
  margin-bottom: 15px;
`;

export const DateLabel = styled.div`
  margin-bottom: 5px;
  color: ${color.textDark};
  font-weight: 600;
  ${font.size(13)}
`;
