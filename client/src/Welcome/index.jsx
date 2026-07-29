import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'shared/components/Button';
import mascotSrc from './assets/mascotBase64';
import { PageContainer, ContentColumn, MascotImage, Heading, Subtitle } from './Styles';

const Welcome = () => {
  const history = useHistory();

  return (
    <PageContainer>
      <ContentColumn>
        <MascotImage src={mascotSrc} alt="Wizard robot mascot" />
        <Heading>Welcome</Heading>
        <Subtitle>Your project board is ready. Let&apos;s get to work!</Subtitle>
        <Button variant="primary" onClick={() => history.push('/project/board')}>
          Go to Board
        </Button>
      </ContentColumn>
    </PageContainer>
  );
};

export default Welcome;
