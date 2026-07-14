import React from 'react';
import PropTypes from 'prop-types';

import wizardRobotSrc from './assets/wizardRobotBase64';
import { Image, Letter, WizardRobotAvatar } from './Styles';

const propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'wizardRobot']),
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

  if (variant === 'wizardRobot') {
    return <WizardRobotAvatar src={wizardRobotSrc} size={size} alt="Wizard Robot" {...sharedProps} />;
  }

  if (avatarUrl) {
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
