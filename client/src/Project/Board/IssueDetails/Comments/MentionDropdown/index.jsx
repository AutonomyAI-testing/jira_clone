import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { KeyCodes } from 'shared/constants/keyCodes';
import Avatar from 'shared/components/Avatar';
import useOnOutsideClick from 'shared/hooks/onOutsideClick';

import { Dropdown, UserItem, UserInfo, UserName } from './Styles';

const propTypes = {
  users: PropTypes.array.isRequired,
  onUserSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
};

const defaultProps = {
  position: { top: 0, left: 0 },
};

const MentionDropdown = ({ users, onUserSelect, onClose, position }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdownRef = useRef(null);

  useOnOutsideClick(dropdownRef, true, onClose);

  useEffect(() => {
    setSelectedIndex(0);
  }, [users]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === KeyCodes.ARROW_DOWN) {
        event.preventDefault();
        setSelectedIndex(prev => (prev < users.length - 1 ? prev + 1 : prev));
      } else if (event.keyCode === KeyCodes.ARROW_UP) {
        event.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (event.keyCode === KeyCodes.ENTER || event.keyCode === KeyCodes.TAB) {
        event.preventDefault();
        onUserSelect(users[selectedIndex]);
      } else if (event.keyCode === KeyCodes.ESCAPE) {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [users, selectedIndex, onUserSelect, onClose]);

  if (users.length === 0) return null;

  return (
    <Dropdown ref={dropdownRef} style={{ top: position.top, left: position.left }}>
      {users.map((user, index) => (
        <UserItem
          key={user.id}
          isSelected={index === selectedIndex}
          onClick={() => onUserSelect(user)}
          onMouseEnter={() => setSelectedIndex(index)}
        >
          <Avatar name={user.name} avatarUrl={user.avatarUrl} size={24} />
          <UserInfo>
            <UserName>{user.name}</UserName>
          </UserInfo>
        </UserItem>
      ))}
    </Dropdown>
  );
};

MentionDropdown.propTypes = propTypes;
MentionDropdown.defaultProps = defaultProps;

export default MentionDropdown;
