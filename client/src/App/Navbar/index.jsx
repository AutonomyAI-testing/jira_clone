import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useCurrentUser from 'shared/hooks/currentUser';
import { removeStoredAuthToken } from 'shared/utils/authToken';
import { Avatar } from 'shared/components';

import {
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
  UserSection,
  UserInfo,
  UserName,
  UserEmail,
} from './Styles';
import UserMenu from './UserMenu';

const Navbar = () => {
  const history = useHistory();
  const { currentUser } = useCurrentUser();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    removeStoredAuthToken();
    history.push('/authenticate');
  };

  const handleSettingsClick = () => {
    history.push('/project/settings');
  };

  if (!currentUser) return null;

  const { name, email, avatarUrl } = currentUser;

  return (
    <NavbarContainer>
      <NavbarLeft />
      <NavbarRight>
        <UserSection
          isOpen={isUserMenuOpen}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <Avatar name={name} avatarUrl={avatarUrl} size={32} />
          <UserInfo>
            <UserName>{name}</UserName>
            <UserEmail>{email}</UserEmail>
          </UserInfo>
        </UserSection>
        <UserMenu
          isOpen={isUserMenuOpen}
          onClose={() => setIsUserMenuOpen(false)}
          onSettingsClick={handleSettingsClick}
          onLogout={handleLogout}
        />
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
