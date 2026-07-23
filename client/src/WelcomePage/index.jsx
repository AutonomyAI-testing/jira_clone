import React, { useEffect } from 'react';

import toast from 'shared/utils/toast';
import catImage from './assets/welcome-cat.jpg';

import {
  Page,
  Card,
  BadgeRow,
  Badge,
  BadgeDot,
  HeroImageWrapper,
  HeroImage,
  HeroGlow,
  Title,
  Subtitle,
  Actions,
  PrimaryButton,
  SecondaryButton,
  Stats,
  StatItem,
  StatValue,
  StatLabel,
  Bubbles,
  Bubble,
} from './Styles';

const bubbles = [
  { size: 60, left: 10, duration: 9, delay: 0 },
  { size: 30, left: 20, duration: 12, delay: 2 },
  { size: 80, left: 35, duration: 7, delay: 1.5 },
  { size: 20, left: 50, duration: 14, delay: 0.5 },
  { size: 50, left: 65, duration: 10, delay: 3 },
  { size: 35, left: 78, duration: 8, delay: 1 },
  { size: 70, left: 90, duration: 11, delay: 2.5 },
];

const WelcomePage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.show({
        type: 'success',
        title: '👋 Welcome back!',
        message: 'Your workspace is ready. Let\'s get things done.',
        duration: 6,
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    toast.show({
      type: 'success',
      title: '🚀 Let\'s go!',
      message: 'Redirecting you to your project board...',
      duration: 4,
    });
    setTimeout(() => {
      window.location.href = '/project';
    }, 1000);
  };

  const handleLearnMore = () => {
    toast.show({
      type: 'success',
      title: '📖 Documentation',
      message: 'Opening help docs in a new tab.',
      duration: 4,
    });
  };

  return (
    <Page>
      {/* Floating background bubbles */}
      <Bubbles aria-hidden="true">
        {bubbles.map((b, i) => (
          <Bubble
            key={i}
            size={b.size}
            left={b.left}
            duration={b.duration}
            delay={b.delay}
          />
        ))}
      </Bubbles>

      <Card>
        <BadgeRow>
          <Badge>
            <BadgeDot />
            All systems operational
          </Badge>
        </BadgeRow>

        <HeroImageWrapper>
          <HeroGlow />
          <HeroImage
            src={catImage}
            alt="Welcome mascot — a friendly cat waving hello"
          />
        </HeroImageWrapper>

        <Title>
          <span>Welcome to Jira</span>
        </Title>

        <Subtitle>
          Your all-in-one project management tool. Plan sprints, track issues,
          and ship great software — all from one place. Your team is waiting!
        </Subtitle>

        <Actions>
          <PrimaryButton onClick={handleGetStarted}>
            <span role="img" aria-label="rocket">🚀</span> Get Started
          </PrimaryButton>
          <SecondaryButton onClick={handleLearnMore}>
            <span role="img" aria-label="books">📖</span> Learn More
          </SecondaryButton>
        </Actions>

        <Stats>
          <StatItem>
            <StatValue>12k+</StatValue>
            <StatLabel>Issues Tracked</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>48</StatValue>
            <StatLabel>Sprints Done</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>99.9%</StatValue>
            <StatLabel>Uptime</StatLabel>
          </StatItem>
        </Stats>
      </Card>
    </Page>
  );
};

export default WelcomePage;
