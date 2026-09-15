import React from 'react';

import mascotSrc from './assets/mascotBase64';
import { Page, MascotWrapper, MascotImage, Title } from './Styles';

const Welcome = () => (
  <Page>
    <MascotWrapper>
      <MascotImage src={mascotSrc} alt="Welcome mascot" />
    </MascotWrapper>
    <Title>Welcome</Title>
  </Page>
);

export default Welcome;
