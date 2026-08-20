import React from 'react';
import styled, { keyframes } from 'styled-components';

import bgImageSrc from 'App/assets/buildFeiBgBase64';

const pulse = keyframes`
  0%, 100% { opacity: 1; text-shadow: 0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.3); }
  50% { opacity: 0.85; text-shadow: 0 0 40px rgba(220, 38, 38, 0.9), 0 0 80px rgba(220, 38, 38, 0.5); }
`;

const PageWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImageSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f4a236;
`;

const Headline = styled.h1`
  font-family: CircularStdBlack, sans-serif;
  font-size: 72px;
  font-weight: 900;
  letter-spacing: 4px;
  color: #DC2626;
  animation: ${pulse} 2.5s ease-in-out infinite;
  user-select: none;
  margin: 0;
`;

const BuildFei = () => (
  <PageWrapper>
    <Headline>Build Fei</Headline>
  </PageWrapper>
);

export default BuildFei;
