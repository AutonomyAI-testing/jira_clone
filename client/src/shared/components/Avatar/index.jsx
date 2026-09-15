import React from 'react';
import PropTypes from 'prop-types';

import { GradientBorderWrapper, Image, Letter } from './Styles';

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  withGradientBorder: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  avatarUrl: null,
  name: '',
  size: 32,
  withGradientBorder: false,
};

const Avatar = ({ className, avatarUrl, name, size, withGradientBorder, ...otherProps }) => {
  const sharedProps = {
    size,
    'data-testid': name ? `avatar:${name}` : 'avatar',
    ...otherProps,
  };

  let avatar;

  if (avatarUrl) {
    avatar = <Image avatarUrl={avatarUrl} {...sharedProps} />;
  } else {
    avatar = (
      <Letter color={getColorFromName(name)} {...sharedProps}>
        <span>{name.charAt(0)}</span>
      </Letter>
    );
  }

  if (withGradientBorder) {
    return (
      <GradientBorderWrapper size={size} className={className}>
        {avatar}
      </GradientBorderWrapper>
    );
  }

  return React.cloneElement(avatar, { className });
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
