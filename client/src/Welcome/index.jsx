import React from 'react';

import mascotSrc from './assets/mascotBase64';
import { Page, MascotWrapper, MascotImage, Title, Subtitle, CTAButton } from './Styles';

const Welcome = () => (
  <Page>
    <MascotWrapper>
      <MascotImage src={mascotSrc} alt="Jira Clone Mascot" />
    </MascotWrapper>
    <Title>Welcome</Title>
    <Subtitle>
      Your project board is ready. Start tracking issues, managing sprints, and collaborating with
      your team.
    </Subtitle>
    <CTAButton href="/project">Go to your board</CTAButton>
  </Page>
);

export default Welcome;
