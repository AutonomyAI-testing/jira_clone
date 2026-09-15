import React from 'react';

import wizardImage from './wizard.png';
import { PageContainer, Title, WizardImage } from './Styles';

const Planning = () => (
  <PageContainer>
    <Title>Planning Fei</Title>
    <WizardImage src={wizardImage} alt="Planning Fei Wizard" />
  </PageContainer>
);

export default Planning;
