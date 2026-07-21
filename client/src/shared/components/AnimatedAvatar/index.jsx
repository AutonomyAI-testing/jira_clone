import React from 'react';
import PropTypes from 'prop-types';

import kittenSrc from './assets/kittenBase64';
import { Ring, Clip, Image } from './Styles';

const BORDER_WIDTH = 4;

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  animated: PropTypes.bool,
  name: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  size: 64,
  src: kittenSrc,
  alt: 'Waving kitten avatar',
  animated: true,
  name: undefined,
};

const AnimatedAvatar = ({ className, size, src, alt, animated, name }) => (
  <Ring
    className={className}
    size={size}
    $borderWidth={BORDER_WIDTH}
    $animated={animated}
    data-testid={name ? `animated-avatar:${name}` : 'animated-avatar'}
    role="img"
    aria-label={alt}
  >
    <Clip size={size}>
      <Image src={src} alt="" draggable={false} />
    </Clip>
  </Ring>
);

AnimatedAvatar.propTypes = propTypes;
AnimatedAvatar.defaultProps = defaultProps;

export default AnimatedAvatar;
