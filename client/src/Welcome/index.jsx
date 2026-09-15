import React from 'react';

import mascotSrc from './assets/mascotBase64';
import { Page, MascotWrapper, MascotImage, WelcomeTitle } from './Styles';

const Welcome = () => (
  <Page>
    <MascotWrapper>
      <MascotImage src={mascotSrc} alt="Welcome mascot" />
    </MascotWrapper>
    <WelcomeTitle>Welcome</WelcomeTitle>
  </Page>
);

export default Welcome;
