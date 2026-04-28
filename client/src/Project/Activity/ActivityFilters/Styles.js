import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${color.borderLightest};
  background: ${props => (props.active ? color.primary : 'white')};
  color: ${props => (props.active ? 'white' : color.textDark)};
  ${font.size(14)}
  ${font.medium}
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: ${props => (props.active ? color.primary : color.backgroundLight)};
  }
`;

export const UserFilters = styled.div`
  display: flex;
  gap: 6px;
`;

export const UserFilterAvatar = styled.div`
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid ${props => (props.active ? color.primary : 'transparent')};
  box-shadow: ${props => (props.active ? `0 0 0 1px ${color.primary}` : 'none')};
  transition: all 0.1s;

  &:hover {
    transform: translateY(-2px);
  }
`;
