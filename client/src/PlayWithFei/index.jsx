import React from 'react';

import feiMascot from 'App/assets/feiMascotBase64';

import {
  PageContainer,
  MascotContainer,
  MascotImage,
  Title,
  GlowRing,
} from './Styles';

const PlayWithFei = () => (
  <PageContainer>
    <GlowRing />
    <MascotContainer>
      <MascotImage src={feiMascot} alt="Fei the wizard mascot" />
    </MascotContainer>
    <Title>Play with Fei</Title>
  </PageContainer>
);

export default PlayWithFei;
