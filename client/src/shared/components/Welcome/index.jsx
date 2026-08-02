import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'shared/components';
import mascotSrc from './assets/mascotBase64';
import {
  WelcomePage,
  Card,
  MascotWrapper,
  MascotImage,
  Greeting,
  Tagline,
  Subtitle,
  ButtonRow,
  StyledLink,
} from './Styles';

const Welcome = () => {
  const history = useHistory();

  return (
    <WelcomePage>
      <Card>
        <MascotWrapper>
          <MascotImage src={mascotSrc} alt="Friendly wizard robot mascot" />
        </MascotWrapper>

        <Greeting>Welcome to Jira Clone!</Greeting>

        <Tagline>
          A real-world project management board built with modern React patterns.
          Track issues, manage sprints, and collaborate with your team.
        </Tagline>

        <Subtitle>Ready to see what we can do together?</Subtitle>

        <ButtonRow>
          <Button
            variant="primary"
            onClick={() => history.push('/project/board')}
          >
            Go to Board
          </Button>
          <Button
            variant="secondary"
            onClick={() => history.push('/project/settings')}
          >
            Project Settings
          </Button>
        </ButtonRow>

        <StyledLink
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 24 }}
        >
          View on GitHub →
        </StyledLink>
      </Card>
    </WelcomePage>
  );
};

export default Welcome;
