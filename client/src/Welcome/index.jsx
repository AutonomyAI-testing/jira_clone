import React from 'react';
import { useHistory } from 'react-router-dom';

import { Logo } from 'shared/components';

import mascotSrc from './assets/mascotBase64';
import {
  Page,
  Content,
  MascotWrapper,
  MascotImage,
  LogoRow,
  LogoLabel,
  Heading,
  Subheading,
  Actions,
  PrimaryButton,
  SecondaryButton,
  FeatureRow,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDesc,
  Footer,
} from './Styles';

const features = [
  {
    icon: '📋',
    iconLabel: 'clipboard',
    bg: '#D2E5FE',
    title: 'Kanban Board',
    desc: 'Visualize work and move issues across statuses.',
  },
  {
    icon: '🔍',
    iconLabel: 'magnifying glass',
    bg: '#E4FCEF',
    title: 'Issue Search',
    desc: 'Find any issue instantly with powerful search.',
  },
  {
    icon: '⚡',
    iconLabel: 'lightning bolt',
    bg: '#FFF0D2',
    title: 'Fast & Optimistic',
    desc: 'UI updates immediately; syncs to server in the background.',
  },
];

const Welcome = () => {
  const history = useHistory();

  return (
    <Page>
      <Content>
        <MascotWrapper>
          <MascotImage src={mascotSrc} alt="Jira Clone mascot — a friendly wizard robot" />
        </MascotWrapper>

        <LogoRow>
          <Logo size={32} />
          <LogoLabel>Jira Clone</LogoLabel>
        </LogoRow>

        <Heading>Your project, organized.</Heading>

        <Subheading>
          A modern, open-source Jira clone built with React. Track issues, manage sprints, and ship
          faster — all in one place.
        </Subheading>

        <Actions>
          <PrimaryButton onClick={() => history.push('/project')}>Go to Board</PrimaryButton>
          <SecondaryButton
            href="https://github.com/oldboyxx/jira_clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </SecondaryButton>
        </Actions>

        <FeatureRow>
          {features.map(({ icon, iconLabel, bg, title, desc }) => (
            <FeatureCard key={title}>
              <FeatureIcon bg={bg}>
                <span role="img" aria-label={iconLabel}>
                  {icon}
                </span>
              </FeatureIcon>
              <FeatureTitle>{title}</FeatureTitle>
              <FeatureDesc>{desc}</FeatureDesc>
            </FeatureCard>
          ))}
        </FeatureRow>

        <Footer>Made with React, Hooks, and styled-components · Open Source</Footer>
      </Content>
    </Page>
  );
};

export default Welcome;
