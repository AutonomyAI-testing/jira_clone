import React from 'react';
import PropTypes from 'prop-types';

import mascotBase64 from './assets/mascotBase64';
import { Container, MascotImage } from './Styles';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  alt: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  size: 40,
  alt: 'Wizard Robot Mascot',
};

const MascotLogo = ({ className, size, alt }) => (
  <Container className={className} size={size}>
    <MascotImage src={mascotBase64} alt={alt} />
  </Container>
);

MascotLogo.propTypes = propTypes;
MascotLogo.defaultProps = defaultProps;

export default MascotLogo;
