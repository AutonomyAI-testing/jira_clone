import React from 'react';
import PropTypes from 'prop-types';

import mascotSrc from './assets/mascotBase64';
import { PageWrapper, ContentBox, MascotWrapper, MascotImg, Heading, Subtitle, StyledButton } from './Styles';

const propTypes = {
  history: PropTypes.object,
};

const defaultProps = {
  history: null,
};

const Welcome = ({ history }) => {
  const handleGoToBoard = () => {
    if (history) {
      history.push('/project/board');
    }
  };

  return (
    <PageWrapper>
      <ContentBox>
        <MascotWrapper>
          <MascotImg src={mascotSrc} alt="Jira Clone mascot wizard" />
        </MascotWrapper>

        <Heading>Welcome</Heading>

        <Subtitle>
          Your project board is ready. Manage issues, track progress, and keep your team in sync — all in one place.
        </Subtitle>

        <StyledButton variant="primary" onClick={handleGoToBoard}>
          Go to Board
        </StyledButton>
      </ContentBox>
    </PageWrapper>
  );
};

Welcome.propTypes = propTypes;
Welcome.defaultProps = defaultProps;

export default Welcome;
