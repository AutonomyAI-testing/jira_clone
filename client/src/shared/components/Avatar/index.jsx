import React from 'react';
import PropTypes from 'prop-types';

import { Image, Letter, GradientRing, OutlineRing, ClipWrapper } from './Styles';

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  gradientBorder: PropTypes.bool,
  redOutline: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  avatarUrl: null,
  name: '',
  size: 32,
  gradientBorder: false,
  redOutline: false,
};

const Avatar = ({ className, avatarUrl, name, size, gradientBorder, redOutline, ...otherProps }) => {
  const testId = name ? `avatar:${name}` : 'avatar';

  const hasRing = gradientBorder || redOutline;

  const content = avatarUrl ? (
    <Image
      avatarUrl={avatarUrl}
      size={size}
      data-testid={!hasRing ? testId : undefined}
      className={!hasRing ? className : undefined}
      {...(!hasRing ? otherProps : {})}
    />
  ) : (
    <Letter
      color={getColorFromName(name)}
      size={size}
      data-testid={!hasRing ? testId : undefined}
      className={!hasRing ? className : undefined}
      {...(!hasRing ? otherProps : {})}
    >
      <span>{name.charAt(0)}</span>
    </Letter>
  );

  if (gradientBorder) {
    return (
      <GradientRing
        size={size}
        className={className}
        data-testid={testId}
        {...otherProps}
      >
        <ClipWrapper size={size}>
          {content}
        </ClipWrapper>
      </GradientRing>
    );
  }

  if (redOutline) {
    return (
      <OutlineRing
        size={size}
        outlineColor="#E13C3C"
        className={className}
        data-testid={testId}
        {...otherProps}
      >
        <ClipWrapper size={size}>
          {content}
        </ClipWrapper>
      </OutlineRing>
    );
  }

  return content;
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
