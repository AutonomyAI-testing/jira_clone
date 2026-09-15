import React from 'react';
import { useHistory } from 'react-router-dom';

import mascotSrc from './assets/mascotBase64';
import {
  WelcomePage,
  Container,
  MascotWrapper,
  MascotImage,
  Title,
  TitleAccent,
  TitleRed,
  Subtitle,
  FeatureList,
  FeatureChip,
  FeatureDot,
  Actions,
  Divider,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from './Styles';

const features = [
  { label: 'Kanban Board', dotColor: '#4FADE6' },
  { label: 'Issue Tracking', dotColor: '#65BA43' },
  { label: 'Team Collaboration', dotColor: '#F89C1C' },
  { label: 'Project Settings', dotColor: '#E13C3C' },
];

const Welcome = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push('/project/board');
  };

  const handleLearnMore = () => {
    window.open('https://github.com/oldboyxx/jira_clone', '_blank', 'noopener noreferrer');
  };

  return (
    <WelcomePage>
      <Container>
        <MascotWrapper>
          <MascotImage src={mascotSrc} alt="Jira Clone mascot — a friendly robot wizard" />
        </MascotWrapper>

        <Divider />

        <Title>
          <TitleRed>Welcome</TitleRed> to <TitleAccent>Jira Clone</TitleAccent>
        </Title>

        <Subtitle>
          A simplified, open-source project management tool built with React. Track issues,
          manage your team&apos;s work, and ship projects faster &mdash; all in one place.
        </Subtitle>

        <FeatureList>
          {features.map(({ label, dotColor }) => (
            <FeatureChip key={label}>
              <FeatureDot dotColor={dotColor} />
              {label}
            </FeatureChip>
          ))}
        </FeatureList>

        <Actions>
          <StyledPrimaryButton type="button" onClick={handleGetStarted}>
            Go to Board
          </StyledPrimaryButton>
          <StyledSecondaryButton type="button" onClick={handleLearnMore}>
            View on GitHub
          </StyledSecondaryButton>
        </Actions>
      </Container>
    </WelcomePage>
  );
};

export default Welcome;
