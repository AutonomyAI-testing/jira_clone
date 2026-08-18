import React from 'react';

import feiWizard from './feiWizardBase64';
import { PageWrapper, BackgroundImage, Content, Title } from './Styles';

const BuildFei = () => (
  <PageWrapper>
    <BackgroundImage src={feiWizard} alt="" aria-hidden="true" />
    <Content>
      <Title>Build Fei</Title>
    </Content>
  </PageWrapper>
);

export default BuildFei;
