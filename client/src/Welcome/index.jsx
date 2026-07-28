import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'shared/components/Button';

import mascotImage from './assets/mascot.png';
import { PageContainer, ContentBox, MascotImage, Heading, Subtext } from './Styles';

const Welcome = () => {
  const history = useHistory();

  return (
    <PageContainer>
      <ContentBox>
        <MascotImage src={mascotImage} alt="Jira Clone mascot — a friendly robot wizard" />
        <Heading>Welcome</Heading>
        <Subtext>
          Your project management workspace is ready. Let&apos;s get things done together!
        </Subtext>
        <Button variant="primary" onClick={() => history.push('/project/board')}>
          Go to Board
        </Button>
      </ContentBox>
    </PageContainer>
  );
};

export default Welcome;
