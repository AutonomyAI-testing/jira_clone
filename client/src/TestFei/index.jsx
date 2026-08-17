import React from 'react';

import mascotSrc from './mascotBase64';
import { Page, MascotImage, Title } from './Styles';

const TestFei = () => (
  <Page>
    <MascotImage src={mascotSrc} alt="Wizard Robot Mascot" />
    <Title>Test Fei</Title>
  </Page>
);

export default TestFei;
