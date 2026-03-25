import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useOnOutsideClick from 'shared/hooks/onOutsideClick';

import { UserMenuDropdown, MenuItem, MenuDivider } from './Styles';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const UserMenu = ({ isOpen, onClose, onSettingsClick, onLogout }) => {
  const $menuRef = useRef();

  useOnOutsideClick($menuRef, isOpen, onClose);

  const handleSettingsClick = () => {
    onSettingsClick();
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <UserMenuDropdown ref={$menuRef}>
      <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
      <MenuDivider />
      <MenuItem isDanger onClick={handleLogout}>
        Logout
      </MenuItem>
    </UserMenuDropdown>
  );
};

UserMenu.propTypes = propTypes;

export default UserMenu;
