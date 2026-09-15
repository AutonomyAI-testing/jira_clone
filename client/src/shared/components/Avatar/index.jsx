import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Image, Letter } from './Styles';

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

// Hidden image element to detect load failures via onError callback
// Positioned off-screen but still triggers load events to set state
const HiddenImage = React.forwardRef(({ src, onError }, ref) => (
  <img
    ref={ref}
    src={src}
    onError={onError}
    style={{
      position: 'absolute',
      width: 0,
      height: 0,
      visibility: 'hidden',
    }}
    alt=""
  />
));

const Avatar = ({ className, avatarUrl, name, size, ...otherProps }) => {
  const [imageLoadFailed, setImageLoadFailed] = useState(false);

  // Shared props for both Image and Letter variants ensure consistent sizing/styling
  const sharedProps = {
    className,
    size,
    'data-testid': name ? `avatar:${name}` : 'avatar',
    ...otherProps,
  };

  // Show initials when no avatar URL provided or when remote image fails to load
  const showInitialsFallback = !avatarUrl || imageLoadFailed;

  if (showInitialsFallback) {
    return (
      <Letter color={getColorFromName(name)} {...sharedProps}>
        <span>{name.charAt(0)}</span>
      </Letter>
    );
  }

  return (
    <React.Fragment>
      <Image avatarUrl={avatarUrl} {...sharedProps} />
      <HiddenImage src={avatarUrl} onError={() => setImageLoadFailed(true)} />
    </React.Fragment>
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

// Generates a consistent color for an avatar based on first character of name
// Uses modulo to cycle through palette — same name always gets same color
const getColorFromName = name => colors[name.toLocaleLowerCase().charCodeAt(0) % colors.length];

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
