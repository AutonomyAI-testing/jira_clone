import React from 'react';

import mascotImage from './assets/mascot.png';
import { PageContainer, MascotImage, WelcomeHeading } from './Styles';

const Welcome = () => (
  <PageContainer>
    <MascotImage src={mascotImage} alt="Robot wizard mascot" />
    <WelcomeHeading>Welcome</WelcomeHeading>
  </PageContainer>
);

export default Welcome;
