import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Dropdown = styled.div`
  position: absolute;
  z-index: 9999;
  min-width: 200px;
  max-width: 300px;
  max-height: 200px;
  overflow-y: auto;
  background: #fff;
  border-radius: 3px;
  ${mixin.boxShadowDropdown}
  border: 1px solid ${color.borderLightest};
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.1s;
  background: ${props => (props.isSelected ? color.backgroundLight : 'transparent')};
  
  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const UserName = styled.div`
  ${font.size(14)}
  color: ${color.textDark};
  ${font.medium}
`;
