import React from 'react';
import PropTypes from 'prop-types';

import animeImage from './assets/anime.png';
import { Image, Letter, AnimeWrapper, AnimeInner } from './Styles';

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'anime']),
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
    'data-testid': name ? `avatar:${name}` : 'avatar',
    ...otherProps,
  };

  if (variant === 'anime') {
    const borderWidth = Math.max(2, Math.round(size * 0.08));
    const innerSize = size - borderWidth * 2;
    return (
      <AnimeWrapper
        style={{ width: size, height: size }}
        {...sharedProps}
      >
        <AnimeInner style={{ width: innerSize, height: innerSize }}>
          <img src={animeImage} alt="anime avatar" />
        </AnimeInner>
      </AnimeWrapper>
    );
  }

  if (avatarUrl) {
    return <Image avatarUrl={avatarUrl} size={size} {...sharedProps} />;
  }

  return (
    <Letter color={getColorFromName(name)} size={size} {...sharedProps}>
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
