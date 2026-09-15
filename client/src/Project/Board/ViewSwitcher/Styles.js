import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const ViewSwitcherContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0;
  padding: 4px;
  background: ${color.backgroundLightest};
  border-radius: 20px;
  border: 1px solid ${color.borderLightest};
  height: 36px;
`;

export const ViewButton = styled.button`
  padding: 6px 14px;
  border: none;
  background: ${props => (props.active ? color.primary : 'transparent')};
  color: ${props => (props.active ? '#fff' : color.textDark)};
  ${font.size(13)}
  ${font.medium}
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.clickable}
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${props => (props.active ? color.primary : color.backgroundLight)};
  }

  &:active {
    transform: scale(0.98);
  }
`;
