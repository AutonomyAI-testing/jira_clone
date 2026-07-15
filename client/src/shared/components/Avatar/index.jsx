import React from 'react';
import PropTypes from 'prop-types';

import { Image, Letter, GradientBorderWrapper, RedOutlineWrapper } from './Styles';

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'gradientBorder', 'redOutline']),
};

const defaultProps = {
  className: undefined,
  avatarUrl: null,
  name: '',
  size: 32,
  variant: 'default',
};

const Avatar = ({ className, avatarUrl, name, size, variant, ...otherProps }) => {
  const sharedProps = {
    className,
    size,
    'data-testid': name ? `avatar:${name}` : 'avatar',
    ...otherProps,
  };

  if (avatarUrl) {
    if (variant === 'gradientBorder') {
      return (
        <GradientBorderWrapper size={size} className={className}>
          <img
            src={avatarUrl}
            alt={name || 'avatar'}
            width={size}
            height={size}
            data-testid={name ? `avatar:${name}` : 'avatar'}
          />
        </GradientBorderWrapper>
      );
    }
    if (variant === 'redOutline') {
      return (
        <RedOutlineWrapper size={size} className={className}>
          <img
            src={avatarUrl}
            alt={name || 'avatar'}
            width={size}
            height={size}
            data-testid={name ? `avatar:${name}` : 'avatar'}
          />
        </RedOutlineWrapper>
      );
    }
    return <Image avatarUrl={avatarUrl} {...sharedProps} />;
  }

  return (
    <Letter color={getColorFromName(name)} {...sharedProps}>
      <span>{name.charAt(0)}</span>
    </Letter>
  );
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
