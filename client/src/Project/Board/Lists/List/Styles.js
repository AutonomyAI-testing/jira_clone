import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  min-height: 400px;
  flex: 1;
  border-radius: 3px;
  background: ${color.backgroundLightest};
`;

export const Title = styled.div`
  padding: 13px 10px 17px;
  text-transform: uppercase;
  color: ${color.textMedium};
  border-top: 3px solid ${props => props.columnColor || color.backgroundMedium};
  background: ${props => {
    if (props.isOverLimit) return mixin.rgba(color.danger, 0.08);
    if (props.isAtLimit) return mixin.rgba(color.warning, 0.08);
    return 'transparent';
  }};
  ${font.size(12.5)};
  ${mixin.truncateText}
`;

export const IssuesCount = styled.span`
  text-transform: lowercase;
  color: ${props => {
    if (props.isOverLimit) return color.danger;
    if (props.isAtLimit) return color.warning;
    return 'inherit';
  }};
  ${font.size(13)};
  ${props => (props.isOverLimit || props.isAtLimit) && `${font.bold}`};
  ${props => props.isOverLimit && `&:before { content: '⚠ '; }`};
`;

export const Issues = styled.div`
  height: 100%;
  padding: 0 5px;
`;
