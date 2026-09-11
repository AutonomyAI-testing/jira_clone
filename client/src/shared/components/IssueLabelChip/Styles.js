import styled from 'styled-components';

import { font, issueLabelColors, issueLabelBackgroundColors } from 'shared/utils/styles';

export const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 6px;
  border-radius: 4px;
  color: ${props => issueLabelColors[props.color]};
  background: ${props => issueLabelBackgroundColors[props.color]};
  ${font.bold}
  ${font.size(11)}
  white-space: nowrap;
`;
