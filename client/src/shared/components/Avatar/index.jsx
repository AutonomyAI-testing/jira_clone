import React from 'react';
import PropTypes from 'prop-types';

import { AvatarWrapper, Image, Letter, StatusDot } from './Styles';

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  status: PropTypes.oneOf(['online', 'offline', 'busy', 'away']),
};

const defaultProps = {
  className: undefined,
  avatarUrl: null,
  name: '',
  size: 32,
  status: undefined,
};

const Avatar = ({ className, avatarUrl, name, size, status, ...otherProps }) => {
  const sharedProps = {
    size,
    'data-testid': name ? `avatar:${name}` : 'avatar',
    ...otherProps,
  };

  const avatarEl = avatarUrl ? (
    <Image avatarUrl={avatarUrl} {...sharedProps} />
  ) : (
    <Letter color={getColorFromName(name)} {...sharedProps}>
      <span>{name.charAt(0)}</span>
    </Letter>
  );

  if (status) {
    return (
      <AvatarWrapper className={className}>
        {avatarEl}
        <StatusDot status={status} avatarSize={size} />
      </AvatarWrapper>
    );
  }

  return React.cloneElement(avatarEl, { className });
};

const colors = [
  '#DA7657',
  '#6ADA57',
  '#5784DA',
  '#AA57DA',
  '#DA5757',
  '#DA5792',
  '#57DACA',
  '#57A5DA',
];

const getColorFromName = name => colors[name.toLocaleLowerCase().charCodeAt(0) % colors.length];

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
