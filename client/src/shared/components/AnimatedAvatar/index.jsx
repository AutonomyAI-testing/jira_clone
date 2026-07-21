import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import kittenBase64 from './assets/kittenBase64';
import { Image, Letter, Skeleton, Wrapper } from './Styles';

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  isAnimated: PropTypes.bool,
  animationVariant: PropTypes.oneOf(['float', 'bounce', 'pulse']),
};

const defaultProps = {
  className: undefined,
  avatarUrl: kittenBase64,
  name: 'Kitten',
  size: 64,
  isAnimated: true,
  animationVariant: 'float',
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

const getColorFromName = name => {
  if (!name) {
    return colors[0];
  }
  return colors[name.toLocaleLowerCase().charCodeAt(0) % colors.length];
};

const isEmbeddedDataUri = url => !!(url && url.indexOf('data:') === 0);

const AnimatedAvatar = ({
  className,
  avatarUrl,
  name,
  size,
  isAnimated,
  animationVariant,
  ...otherProps
}) => {
  const [isLoading, setIsLoading] = useState(!!avatarUrl && !isEmbeddedDataUri(avatarUrl));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!avatarUrl) {
      setIsLoading(false);
      setHasError(false);
      return undefined;
    }

    // Built-in/data URIs are already available — skip the loading skeleton flash.
    if (isEmbeddedDataUri(avatarUrl)) {
      setIsLoading(false);
      setHasError(false);
      return undefined;
    }

    let isActive = true;
    setIsLoading(true);
    setHasError(false);

    const img = new window.Image();
    img.onload = () => {
      if (isActive) {
        setIsLoading(false);
        setHasError(false);
      }
    };
    img.onerror = () => {
      if (isActive) {
        setIsLoading(false);
        setHasError(true);
      }
    };
    img.src = avatarUrl;

    return () => {
      isActive = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [avatarUrl]);

  const testId = name ? `animated-avatar:${name}` : 'animated-avatar';

  if (isLoading && avatarUrl) {
    return <Skeleton className={className} size={size} data-testid={`${testId}:loading`} />;
  }

  const showImage = avatarUrl && !hasError;

  return (
    <Wrapper
      className={className}
      size={size}
      isAnimated={isAnimated}
      data-testid={testId}
      role="img"
      aria-label={name || 'Avatar'}
      {...otherProps}
    >
      {showImage ? (
        <Image
          avatarUrl={avatarUrl}
          isAnimated={isAnimated}
          animationVariant={animationVariant}
        />
      ) : (
        <Letter
          color={getColorFromName(name)}
          size={size}
          isAnimated={isAnimated}
          animationVariant={animationVariant}
        >
          <span>{name ? name.charAt(0) : '?'}</span>
        </Letter>
      )}
    </Wrapper>
  );
};

AnimatedAvatar.propTypes = propTypes;
AnimatedAvatar.defaultProps = defaultProps;

export default AnimatedAvatar;
export { kittenBase64 };
