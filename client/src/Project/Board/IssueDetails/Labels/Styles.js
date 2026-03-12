import styled, { css } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { IssueLabelColors } from 'shared/constants/issues';

export const Label = styled.div`
  display: inline-block;
  margin: 0 10px 5px 0;
  padding: 4px 8px;
  border-radius: 3px;
  ${font.size(13)}
  font-weight: 500;
  background: ${props => IssueLabelColors[props.label] && IssueLabelColors[props.label].bg};
  color: ${props => IssueLabelColors[props.label] && IssueLabelColors[props.label].text};
  border: 1px solid ${props => IssueLabelColors[props.label] && IssueLabelColors[props.label].border};
  ${mixin.clickable}

  ${props =>
    props.isSelectValue &&
    css`
      transition: all 0.1s;
      &:hover {
        opacity: 0.8;
      }
    `}
`;
