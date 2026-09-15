import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'shared/components';

import {
  WelcomePage,
  WelcomeCard,
  Mascot,
  Title,
  Subtitle,
  Features,
  Feature,
  FeatureIcon,
  FeatureLabel,
} from './Styles';

const features = [
  { icon: 'board', label: 'Kanban boards' },
  { icon: 'issues', label: 'Issue tracking' },
  { icon: 'search', label: 'Filters & search' },
];

const Welcome = () => {
  const history = useHistory();

  return (
    <WelcomePage>
      <WelcomeCard>
        <Mascot />
        <Title>Welcome to Jira Clone</Title>
        <Subtitle>
          Plan, track, and ship great software with your team — all in one place. Let’s get you
          set up.
        </Subtitle>
        <Features>
          {features.map(({ icon, label }) => (
            <Feature key={icon}>
              <FeatureIcon type={icon} size={24} />
              <FeatureLabel>{label}</FeatureLabel>
            </Feature>
          ))}
        </Features>
        <Button variant="primary" onClick={() => history.push('/authenticate')}>
          Get started
        </Button>
      </WelcomeCard>
    </WelcomePage>
  );
};

export default Welcome;
