import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: ${color.backgroundDarkPrimary};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  z-index: ${zIndexValues.navbar};
  ${mixin.hardwareAccelerate}
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.1s;
  ${mixin.clickable}
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const UserName = styled.span`
  color: #deebff;
  ${font.medium}
  ${font.size(14)}
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 56px;
  right: 20px;
  background: #fff;
  border-radius: 4px;
  min-width: 200px;
  box-shadow: 0 4px 8px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  z-index: ${zIndexValues.navbar};
`;

export const UserInfo = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${color.borderLightest};
`;

export const UserEmail = styled.div`
  color: ${color.textMedium};
  ${font.regular}
  ${font.size(12)}
  margin-top: 4px;
  ${mixin.truncateText}
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.1s;
  color: ${color.textDarkest};
  ${font.regular}
  ${font.size(13)}
  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const MenuItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${color.textMedium};
`;
