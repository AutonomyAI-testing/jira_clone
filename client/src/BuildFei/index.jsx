import React from 'react';

import { PageWrapper, BackgroundCharacter, ContentBox, FeiImage, Title, Tagline } from './Styles';

const BuildFei = () => (
  <PageWrapper>
    <BackgroundCharacter />
    <ContentBox>
      <FeiImage />
      <Title>Build Fei</Title>
      <Tagline>Your AI-powered engineering companion</Tagline>
    </ContentBox>
  </PageWrapper>
);

export default BuildFei;
