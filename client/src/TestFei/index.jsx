import React from 'react';
import styled from 'styled-components';

import wizardRobotSrc from './assets/wizardRobotBase64';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
`;

const Title = styled.h1`
  font-family: CircularStdBlack, sans-serif;
  font-size: 48px;
  font-weight: 900;
  color: #00c853;
  margin: 0 0 40px 0;
  letter-spacing: 2px;
`;

const MascotImage = styled.img`
  width: 240px;
  height: auto;
`;

const TestFei = () => (
  <Page>
    <Title>Test Fei</Title>
    <MascotImage src={wizardRobotSrc} alt="Fei wizard robot mascot" />
  </Page>
);

export default TestFei;
