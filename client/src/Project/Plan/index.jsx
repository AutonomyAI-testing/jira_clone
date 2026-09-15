import React from 'react';

import mascotSrc from './assets/mascotBase64';

import { PlanPage, MascotImage, PlanText } from './Styles';

const Plan = () => (
  <PlanPage>
    <MascotImage src={mascotSrc} alt="plan fei wizard mascot" />
    <PlanText>plan fei</PlanText>
  </PlanPage>
);

export default Plan;
