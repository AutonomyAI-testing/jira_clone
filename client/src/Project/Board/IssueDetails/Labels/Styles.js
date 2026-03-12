import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Label = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  margin-bottom: ${props => (props.withBottomMargin ? '6px' : '0')};
  border-radius: 3px;
  background-color: ${color.backgroundLight};
  cursor: ${props => (props.isSelectValue ? 'pointer' : 'default')};

  &:hover {
    background-color: ${props => (props.isSelectValue ? color.backgroundMedium : 'transparent')};
  }

  & > * {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const LabelTag = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${props => props.color};
  flex-shrink: 0;
`;

export const LabelText = styled.span`
  ${font.size(13)}
  color: ${color.textDarkest};
`;
