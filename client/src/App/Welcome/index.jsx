import React from 'react';

import mascotSrc from './assets/mascotBase64';
import { Container, MascotWrapper, MascotImage, Title, Subtitle } from './Styles';

const Welcome = () => (
  <Container>
    <MascotWrapper>
      <MascotImage src={mascotSrc} alt="Wizard mascot" />
    </MascotWrapper>
    <Title>Welcome</Title>
    <Subtitle>Your project management workspace is ready.</Subtitle>
  </Container>
);

export default Welcome;
