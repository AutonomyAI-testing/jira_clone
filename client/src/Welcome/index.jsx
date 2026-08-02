import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'shared/components/Button';
import mascotSrc from './assets/mascotBase64';
import { Page, MascotImage, Heading, Tagline } from './Styles';

const Welcome = () => {
  const history = useHistory();

  return (
    <Page>
      <MascotImage src={mascotSrc} alt="Jira Clone wizard mascot" />
      <Heading>Welcome!</Heading>
      <Tagline>Your friendly project management wizard is ready. Let&apos;s get things done.</Tagline>
      <Button variant="primary" onClick={() => history.push('/project/board')}>
        Go to Board
      </Button>
    </Page>
  );
};

export default Welcome;
