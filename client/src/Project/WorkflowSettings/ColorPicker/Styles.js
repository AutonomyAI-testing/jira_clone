import styled from 'styled-components';

import { color } from 'shared/utils/styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 12px;
  background: ${color.backgroundLightest};
  border: 1px solid ${color.borderLight};
  border-radius: 3px;
  margin-bottom: 12px;
`;

export const Swatch = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${props => props.color};
  border: 2px solid ${props => (props.isSelected ? color.textDarkest : 'transparent')};
  cursor: pointer;
  transition: transform 0.1s, border-color 0.1s;

  &:hover {
    transform: scale(1.15);
  }
`;
