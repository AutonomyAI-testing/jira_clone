import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon, AboutTooltip } from 'shared/components';
import useCurrentUser from 'shared/hooks/currentUser';
import useOnOutsideClick from 'shared/hooks/onOutsideClick';

import {
  NavLeft,
  LogoLink,
  StyledLogo,
  Bottom,
  Item,
  ItemText,
  UserMenuContainer,
  UserMenuButton,
  UserMenuDropdown,
  StyledAvatar,
  UserMenuLink,
  MenuDivider,
} from './Styles';

const propTypes = {
  issueSearchModalOpen: PropTypes.func.isRequired,
  issueCreateModalOpen: PropTypes.func.isRequired,
};

const ProjectNavbarLeft = ({ issueSearchModalOpen, issueCreateModalOpen }) => {
  const { currentUser } = useCurrentUser();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const $menuRef = useRef(null);
  const $buttonRef = useRef(null);

  // Close menu when user clicks outside of it (except on the trigger button)
  useOnOutsideClick($menuRef, isMenuOpen, () => setMenuOpen(false), $buttonRef);

  if (!currentUser) {
    return (
      <NavLeft>
        <LogoLink to="/">
          <StyledLogo color="#fff" />
        </LogoLink>
        <Item onClick={issueSearchModalOpen}>
          <Icon type="search" size={22} top={1} left={3} />
          <ItemText>Search issues</ItemText>
        </Item>
        <Item onClick={issueCreateModalOpen}>
          <Icon type="plus" size={27} />
          <ItemText>Create Issue</ItemText>
        </Item>
        <Bottom>
          <AboutTooltip
            placement="right"
            offset={{ top: -218 }}
            renderLink={linkProps => (
              <Item {...linkProps}>
                <Icon type="help" size={25} />
                <ItemText>About</ItemText>
              </Item>
            )}
          />
        </Bottom>
      </NavLeft>
    );
  }

  return (
    <NavLeft>
      <LogoLink to="/">
        <StyledLogo color="#fff" />
      </LogoLink>

      <Item onClick={issueSearchModalOpen}>
        <Icon type="search" size={22} top={1} left={3} />
        <ItemText>Search issues</ItemText>
      </Item>

      <Item onClick={issueCreateModalOpen}>
        <Icon type="plus" size={27} />
        <ItemText>Create Issue</ItemText>
      </Item>

      <Bottom>
        {/* User menu with avatar and dropdown options */}
        <UserMenuContainer>
          <UserMenuButton
            ref={$buttonRef}
            onClick={() => setMenuOpen(!isMenuOpen)}
            isOpen={isMenuOpen}
          >
            <StyledAvatar avatarUrl={currentUser.avatarUrl} name={currentUser.name} size={32} />
          </UserMenuButton>
          {/* Dropdown menu shown when button is clicked */}
          {isMenuOpen && (
            <UserMenuDropdown ref={$menuRef}>
              <UserMenuLink as={Link} to="/project/avatar">
                <Icon type="edit" size={16} />
                Change Avatar
              </UserMenuLink>
              <MenuDivider />
              <UserMenuLink as="div" onClick={() => {/* TODO: Implement sign out functionality */}}>
                <Icon type="logoff" size={16} />
                Sign Out
              </UserMenuLink>
            </UserMenuDropdown>
          )}
        </UserMenuContainer>
        <AboutTooltip
          placement="right"
          offset={{ top: -218 }}
          renderLink={linkProps => (
            <Item {...linkProps}>
              <Icon type="help" size={25} />
              <ItemText>About</ItemText>
            </Item>
          )}
        />
      </Bottom>
    </NavLeft>
  );
};

ProjectNavbarLeft.propTypes = propTypes;

export default ProjectNavbarLeft;
