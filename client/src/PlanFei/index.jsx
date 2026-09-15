import React from 'react';

import mascotBase64 from './assets/mascotBase64';
import { Page, MascotImage, PlanFeiText } from './Styles';

const PlanFei = () => (
  <Page>
    <MascotImage src={mascotBase64} alt="Plan Fei mascot" />
    <PlanFeiText>Plan Fei</PlanFeiText>
  </Page>
);

export default PlanFei;
