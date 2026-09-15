import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import useCurrentUser from 'shared/hooks/currentUser';
import useOnOutsideClick from 'shared/hooks/onOutsideClick';
import { Avatar } from 'shared/components';

import {
  Trigger,
  Popup,
  PopupContent,
  UserInfo,
  UserName,
  UserEmail,
  Divider,
  MenuItem,
  Container,
} from './Styles';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useCurrentUser();
  const $containerRef = useRef();

  useOnOutsideClick($containerRef, isOpen, () => setIsOpen(false));

  if (!currentUser) return null;

  return (
    <Container ref={$containerRef}>
      <Trigger onClick={() => setIsOpen(!isOpen)}>
        <Avatar name={currentUser.name} avatarUrl={currentUser.avatarUrl} size={32} />
      </Trigger>

      {isOpen && (
        <Popup>
          <PopupContent>
            <UserInfo>
              <UserName>{currentUser.name}</UserName>
              <UserEmail>{currentUser.email}</UserEmail>
            </UserInfo>
            <Divider />
            <MenuItem as={Link} to="/project/avatar">
              Avatar
            </MenuItem>
          </PopupContent>
        </Popup>
      )}
    </Container>
  );
};

export default UserMenu;
