import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ViewSwitcherContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ViewButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  background: ${props => (props.active ? color.danger : 'white')};
  color: ${props => (props.active ? 'white' : color.danger)};
  ${font.size(14)}
  ${font.medium}
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: ${props => (props.active ? color.danger : color.backgroundLight)};
  }
`;
