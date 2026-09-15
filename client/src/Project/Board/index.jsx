import React from 'react';

import mascotSrc from './assets/mascotBase64';
import { WelcomeContainer, MascotImage, WelcomeHeading } from './Styles';

const ProjectBoard = () => (
  <WelcomeContainer>
    <MascotImage src={mascotSrc} alt="Wizard mascot" />
    <WelcomeHeading>Welcome</WelcomeHeading>
  </WelcomeContainer>
);

export default ProjectBoard;
