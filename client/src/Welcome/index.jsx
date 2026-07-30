import React from 'react';
import { useHistory } from 'react-router-dom';
import mascotSrc from './assets/mascotBase64';
import {
  PageContainer,
  ContentWrapper,
  MascotWrapper,
  MascotImage,
  WelcomeHeading,
  Subtitle,
  ActionButton,
} from './Styles';

const Welcome = () => {
  const history = useHistory();

  const handleGetStarted = e => {
    e.preventDefault();
    history.push('/project');
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <MascotWrapper>
          <MascotImage src={mascotSrc} alt="Wizard mascot" />
        </MascotWrapper>
        <WelcomeHeading>Welcome</WelcomeHeading>
        <Subtitle>
          Your project management workspace is ready. Let&#39;s get started building something great.
        </Subtitle>
        <ActionButton href="/project" onClick={handleGetStarted}>
          Go to your project
        </ActionButton>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Welcome;
