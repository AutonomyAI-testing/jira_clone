import React from 'react';

import Button from 'shared/components/Button';
import history from 'browserHistory';

import mascot from './assets/mascotBase64';
import {
  WelcomePage,
  Inner,
  MascotImage,
  Heading,
  Description,
  CTAWrapper,
} from './Styles';

const Welcome = () => (
  <WelcomePage>
    <Inner>
      <MascotImage src={mascot} alt="Jira Clone wizard mascot" />
      <Heading>Welcome to Jira Clone</Heading>
      <Description>
        A simplified project management tool built for teams. Plan sprints, track issues, and ship
        great software — all in one place.
      </Description>
      <CTAWrapper>
        <Button variant="primary" onClick={() => history.push('/project/board')}>
          Go to Project Board
        </Button>
      </CTAWrapper>
    </Inner>
  </WelcomePage>
);

export default Welcome;
