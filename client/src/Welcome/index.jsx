import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'shared/components/Button';
import mascotBase64 from './assets/mascotBase64';
import { PageContainer, ContentBox, MascotImage, Heading, Subtext } from './Styles';

const Welcome = () => {
  const history = useHistory();

  return (
    <PageContainer>
      <ContentBox>
        <MascotImage src={mascotBase64} alt="Jira Clone mascot — a friendly robot wizard" />
        <Heading>Welcome</Heading>
        <Subtext>
          Your project management workspace is ready. Let&apos;s get things done together!
        </Subtext>
        <Button variant="primary" onClick={() => history.push('/project')}>
          Go to Project Board
        </Button>
      </ContentBox>
    </PageContainer>
  );
};

export default Welcome;
