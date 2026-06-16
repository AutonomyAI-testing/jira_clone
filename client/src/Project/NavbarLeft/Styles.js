import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { font, sizes, color, mixin, zIndexValues } from 'shared/utils/styles';
import { Logo, Avatar } from 'shared/components';

export const NavLeft = styled.aside`
  z-index: ${zIndexValues.navLeft};
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  height: 100vh;
  width: ${sizes.appNavBarLeftWidth}px;
  background: ${color.backgroundDarkPrimary};
  transition: all 0.1s;
  ${mixin.hardwareAccelerate}
  &:hover {
    width: 200px;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
  }
`;

export const LogoLink = styled(NavLink)`
  display: block;
  position: relative;
  left: 0;
  margin: 20px 0 10px;
  transition: left 0.1s;
`;

export const StyledLogo = styled(Logo)`
  display: inline-block;
  margin-left: 8px;
  padding: 10px;
  ${mixin.clickable}
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding-left: 64px;
  color: #deebff;
  transition: color 0.1s;
  ${mixin.clickable}
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  i {
    position: absolute;
    left: 18px;
  }
`;

export const ItemText = styled.div`
  position: relative;
  right: 12px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;
  ${font.bold}
  ${font.size(12)}
  ${NavLeft}:hover & {
    right: 0;
    visibility: visible;
    opacity: 1;
  }
`;

export const UserMenuContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 5px 0;
`;

export const UserMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 42px;
  padding-left: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #deebff;
  transition: background 0.1s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  ${props => (props.isOpen ? 'background: rgba(255, 255, 255, 0.15);' : '')}
`;

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;

export const UserMenuDropdown = styled.div`
  position: absolute;
  bottom: calc(100% + 5px);
  left: 0;
  background: ${color.backgroundDarkPrimary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  width: 180px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: ${zIndexValues.navLeft + 1};
  animation: slideUp 0.15s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const UserMenuLink = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  color: #deebff;
  ${mixin.clickable}
  transition: background 0.1s;
  ${font.size(13)}
  gap: 10px;
  white-space: nowrap;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  i {
    flex-shrink: 0;
  }
`;

export const MenuDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 5px 0;
`;
