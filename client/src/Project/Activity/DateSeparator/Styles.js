import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Separator = styled.div`
  position: relative;
  margin: 24px 0 16px;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: ${color.borderLightest};
  }
`;

export const DateText = styled.span`
  position: relative;
  background: white;
  padding: 0 12px;
  ${font.size(13)}
  ${font.medium}
  color: ${color.textMedium};
`;
