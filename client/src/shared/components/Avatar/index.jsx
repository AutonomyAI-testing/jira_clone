import React from 'react';
import PropTypes from 'prop-types';

import catAvatarUrl from './assets/catAvatarBase64';
import { Image } from './Styles';

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  avatarUrl: null,
  name: '',
  size: 32,
};

const Avatar = ({ className, avatarUrl, name, size, ...otherProps }) => {
  const sharedProps = {
    className,
    size,
    'data-testid': name ? `avatar:${name}` : 'avatar',
    ...otherProps,
  };

  if (avatarUrl) {
    return <Image avatarUrl={avatarUrl} {...sharedProps} />;
  }

  return <Image avatarUrl={catAvatarUrl} {...sharedProps} />;

};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
