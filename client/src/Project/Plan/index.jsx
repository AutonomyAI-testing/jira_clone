import React from 'react';

import wizardMascot from './assets/wizard-mascot.png';

import { PlanPage, Title, MascotImage } from './Styles';

const Plan = () => (
  <PlanPage>
    <Title>Plan Fei</Title>
    <MascotImage src={wizardMascot} alt="Plan Fei Wizard Mascot" />
  </PlanPage>
);

export default Plan;
