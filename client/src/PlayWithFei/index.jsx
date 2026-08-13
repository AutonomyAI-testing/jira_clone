import React from 'react';

import feiMascot from './assets/fei-mascot.png';
import { PageContainer, MascotImage, Title } from './Styles';

const PlayWithFei = () => (
  <PageContainer>
    <MascotImage src={feiMascot} alt="Fei the wizard robot mascot" />
    <Title>Play with Fei</Title>
  </PageContainer>
);

export default PlayWithFei;
