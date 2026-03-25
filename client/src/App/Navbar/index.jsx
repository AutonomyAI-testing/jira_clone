import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Avatar from 'shared/components/Avatar';
import useCurrentUser from 'shared/hooks/currentUser';
import { removeStoredAuthToken } from 'shared/utils/authToken';

import UserMenu from './UserMenu';
import { NavbarContainer, UserSection, UserName } from './Styles';

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { currentUser } = useCurrentUser();
  const history = useHistory();

  const handleLogout = () => {
    removeStoredAuthToken();
    history.push('/authenticate');
  };

  if (!currentUser) {
    return null;
  }

  return (
    <NavbarContainer>
      <UserSection onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
        <Avatar avatarUrl={currentUser.avatarUrl} name={currentUser.name} size={32} />
        <UserName>{currentUser.name}</UserName>
      </UserSection>

      {isUserMenuOpen && (
        <UserMenu
          user={currentUser}
          onLogout={handleLogout}
          onClose={() => setIsUserMenuOpen(false)}
        />
      )}
    </NavbarContainer>
  );
};

export default Navbar;
