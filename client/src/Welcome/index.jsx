import React from 'react';

import Button from 'shared/components/Button';
import history from 'browserHistory';
import mascot from './assets/mascotBase64';
import { WelcomePage, WelcomeInner, MascotImage, Heading, Tagline, CtaWrapper } from './Styles';

const Welcome = () => (
  <WelcomePage>
    <WelcomeInner>
      <MascotImage src={mascot} alt="Wizard Robot Mascot" />
      <Heading>Welcome</Heading>
      <Tagline>
        Your friendly project management tool — plan, track and ship great work, together.
      </Tagline>
      <CtaWrapper>
        <Button variant="primary" onClick={() => history.push('/project')}>
          Go to Project
        </Button>
      </CtaWrapper>
    </WelcomeInner>
  </WelcomePage>
);

export default Welcome;
