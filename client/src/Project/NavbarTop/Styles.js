import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';

export const NavbarTop = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: ${color.primary};
  ${mixin.hardwareAccelerate}
  z-index: ${zIndexValues.navLeft + 10};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const LogoText = styled.span`
  color: #fff;
  ${font.bold}
  ${font.size(18)}
  margin-left: 8px;
  letter-spacing: 0.5px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  margin-left: 32px;
`;

export const NavItem = styled.button`
  color: #fff;
  background: transparent;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s;
  ${font.regular}
  ${font.size(14)}
  border-radius: 3px;

  &:hover {
    background: ${mixin.rgba(color.primary, 0.8)};
  }

  &.active {
    background: rgba(255, 255, 255, 0.2);
    ${font.medium}
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
`;

export const UserProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s;
  color: #fff;

  &:hover {
    background: ${mixin.rgba(color.primary, 0.8)};
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const UserName = styled.span`
  color: #fff;
  ${font.regular}
  ${font.size(13)}
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Separator = styled.div`
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
`;
