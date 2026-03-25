import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Icon from 'shared/components/Icon';
import useOnOutsideClick from 'shared/hooks/onOutsideClick';

import { MenuContainer, UserInfo, UserEmail, MenuItem, MenuItemIcon, UserName } from './Styles';

const propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const defaultProps = {};

const UserMenu = ({ user, onLogout, onClose }) => {
  const $menuRef = useRef();

  useOnOutsideClick($menuRef, true, onClose);

  const handleLogout = () => {
    onClose();
    onLogout();
  };

  return (
    <MenuContainer ref={$menuRef}>
      <UserInfo>
        <UserName>{user.name}</UserName>
        {user.email && <UserEmail>{user.email}</UserEmail>}
      </UserInfo>

      <MenuItem onClick={handleLogout}>
        <MenuItemIcon>
          <Icon type="arrow-left" size={16} />
        </MenuItemIcon>
        Logout
      </MenuItem>
    </MenuContainer>
  );
};

UserMenu.propTypes = propTypes;
UserMenu.defaultProps = defaultProps;

export default UserMenu;
