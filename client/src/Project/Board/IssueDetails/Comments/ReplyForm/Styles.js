import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const ReplyLink = styled.div`
  display: inline-block;
  margin-left: 12px;
  padding: 2px 0;
  color: ${color.textMedium};
  ${font.size(14.5)}
  ${mixin.clickable}
  &:hover {
    text-decoration: underline;
  }
  &:before {
    position: relative;
    right: 6px;
    content: '·';
    display: inline-block;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;
