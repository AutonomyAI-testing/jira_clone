import styled, { css } from 'styled-components';

import { color, sizes, font, mixin, zIndexValues } from 'shared/utils/styles';

export const NavbarContainer = styled.nav`
  z-index: ${zIndexValues.navbar};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: ${color.backgroundDarkPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  ${mixin.hardwareAccelerate}
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.1s;
  ${mixin.clickable}

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.isOpen &&
    css`
      background: rgba(255, 255, 255, 0.15);
    `}
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const UserName = styled.div`
  ${font.bold}
  ${font.size(14)}
  color: #fff;
`;

export const UserEmail = styled.div`
  ${font.regular}
  ${font.size(12)}
  color: #deebff;
`;

export const UserMenuDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: #fff;
  border-radius: 4px;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: ${zIndexValues.dropdown};
`;

export const MenuItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.1s;
  color: ${color.textDarkest};
  ${font.regular}
  ${font.size(14)}

  &:hover {
    background: ${color.backgroundLight};
  }

  &:active {
    background: ${color.backgroundMedium};
  }

  ${props =>
    props.isDanger &&
    css`
      color: ${color.danger};
      border-top: 1px solid ${color.borderLightest};
    `}
`;

export const MenuDivider = styled.div`
  height: 1px;
  background: ${color.borderLightest};
`;
