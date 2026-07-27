import React from 'react';
import PropTypes from 'prop-types';

import wizardBotSrc from './assets/wizardBotBase64';
import { CircleWrapper, WizardImg, PlainWrapper } from './Styles';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.oneOf(['circle', 'plain']),
};

const defaultProps = {
  className: undefined,
  size: 40,
  variant: 'circle',
};

const AvatarLogo = ({ className, size, variant }) => {
  if (variant === 'plain') {
    return (
      <PlainWrapper className={className} size={size}>
        <WizardImg src={wizardBotSrc} alt="Wizard Bot Logo" />
      </PlainWrapper>
    );
  }

  return (
    <CircleWrapper className={className} size={size}>
      <WizardImg src={wizardBotSrc} alt="Wizard Bot Logo" />
    </CircleWrapper>
  );
};

AvatarLogo.propTypes = propTypes;
AvatarLogo.defaultProps = defaultProps;

export default AvatarLogo;
