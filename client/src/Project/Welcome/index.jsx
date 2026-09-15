import React from 'react';
import PropTypes from 'prop-types';

import { Breadcrumbs } from 'shared/components';
import wizardAvatar from './assets/wizardAvatarBase64';
import {
  WelcomeContainer,
  AvatarWrapper,
  AvatarImage,
  WelcomeHeading,
  WelcomeSubtext,
  WelcomeBadge,
  WelcomeDot,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const Welcome = ({ project }) => (
  <div>
    <Breadcrumbs items={['Projects', project.name, 'Welcome']} />
    <WelcomeContainer>
      <WelcomeBadge>
        <WelcomeDot />
        {project.name}
      </WelcomeBadge>
      <AvatarWrapper>
        <AvatarImage src={wizardAvatar} alt="Wizard mascot" />
      </AvatarWrapper>
      <WelcomeHeading>Welcome</WelcomeHeading>
      <WelcomeSubtext>
        Your project is all set up and ready to go. Explore your board, manage issues,
        and collaborate with your team.
      </WelcomeSubtext>
    </WelcomeContainer>
  </div>
);

Welcome.propTypes = propTypes;

export default Welcome;
