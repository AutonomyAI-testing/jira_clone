import React from 'react';

import mascotBase64 from '../assets/mascotBase64';
import { WelcomeContainer, AvatarCircle, AvatarImage, WelcomeText } from './Styles';

const WelcomeSection = () => (
  <WelcomeContainer>
    <AvatarCircle>
      <AvatarImage src={mascotBase64} alt="Wizard mascot" />
    </AvatarCircle>
    <WelcomeText>Welcome!</WelcomeText>
  </WelcomeContainer>
);

export default WelcomeSection;
