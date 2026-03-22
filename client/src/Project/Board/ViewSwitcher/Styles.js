import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const ViewSwitcherContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 4px;
  background: ${color.backgroundLightest};
  border-radius: 8px;
  border: 1px solid ${color.borderLightest};
`;

export const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background: ${props => (props.active ? '#fff' : 'transparent')};
  color: ${props => (props.active ? color.primary : color.textMedium)};
  ${font.size(14)}
  ${font.medium}
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => (props.active ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none')};
  position: relative;

  &:hover {
    background: ${props => (props.active ? '#fff' : color.backgroundMedium)};
    color: ${props => (props.active ? color.primary : color.textDark)};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const ViewIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

export const ViewLabel = styled.span`
  line-height: 1;
`;
