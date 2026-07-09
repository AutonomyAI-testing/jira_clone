import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import wizardRobotImage from 'App/assets/wizard-robot.jpg';
import { getStoredAuthToken, storeAuthToken } from 'shared/utils/authToken';

import {
  PageContainer,
  LeftPanel,
  RightPanel,
  MascotWrapper,
  MascotImage,
  AppTitle,
  AppSubtitle,
  WelcomeHeading,
  WelcomeSubheading,
  SectionLabel,
  UserCardsGrid,
  UserCard,
  UserInfo,
  UserName,
  UserEmail,
  SelectedBadge,
  ContinueButton,
  FooterText,
  Divider,
} from './Styles';

// Demo users available for sign-in
const DEMO_USERS = [
  {
    id: 1,
    name: 'Lord Gaben',
    email: 'gaben@jira.guest',
    avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
    color: '#DA7657',
  },
  {
    id: 2,
    name: 'Pickle Rick',
    email: 'pickle.rick@jira.guest',
    avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
    color: '#6ADA57',
  },
  {
    id: 3,
    name: 'Baby Yoda',
    email: 'baby.yoda@jira.guest',
    avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
    color: '#5784DA',
  },
];

// Avatar component with graceful fallback to colored initials
const UserAvatar = ({ user, isSelected }) => {
  const [imgFailed, setImgFailed] = React.useState(false);
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        flexShrink: 0,
        border: `2px solid ${isSelected ? '#0052cc' : 'transparent'}`,
        transition: 'border-color 0.15s ease',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: imgFailed ? user.color : 'transparent',
        fontSize: 18,
        fontWeight: 700,
        color: '#fff',
        textTransform: 'uppercase',
      }}
    >
      {!imgFailed ? (
        <img
          src={user.avatarUrl}
          alt={user.name}
          onError={() => setImgFailed(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        user.name.charAt(0)
      )}
    </div>
  );
};

const Login = () => {
  const history = useHistory();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // If already authenticated, skip straight to the project board
  useEffect(() => {
    if (getStoredAuthToken()) {
      history.replace('/project');
    }
  }, [history]);

  const handleContinue = () => {
    if (!selectedUserId || isLoading) return;
    setIsLoading(true);

    // Simulate a brief loading state for polish
    setTimeout(() => {
      storeAuthToken('mock-auth-token');
      history.push('/project');
    }, 400);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && selectedUserId) {
      handleContinue();
    }
  };

  return (
    <PageContainer onKeyDown={handleKeyDown}>
      {/* ── Left Panel: Mascot + Branding ── */}
      <LeftPanel>
        <MascotWrapper>
          <MascotImage
            src={wizardRobotImage}
            alt="Jira Clone Mascot — Wizard Robot"
            onError={e => {
              // Fallback to an emoji illustration if the image isn't found
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Emoji fallback — hidden until image fails to load */}
          <div
            style={{
              display: 'none',
              fontSize: '120px',
              textAlign: 'center',
              lineHeight: 1,
              filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.2))',
            }}
          >
            <span role="img" aria-label="robot">
              🤖
            </span>
          </div>
        </MascotWrapper>
        <AppTitle>Jira Clone</AppTitle>
        <AppSubtitle>Track your work. Your way.</AppSubtitle>
      </LeftPanel>

      {/* ── Right Panel: Login Form ── */}
      <RightPanel>
        <WelcomeHeading>
          Welcome back <span role="img" aria-label="waving hand">👋</span>
        </WelcomeHeading>
        <WelcomeSubheading>Choose your account to continue to the board.</WelcomeSubheading>

        <SectionLabel>Demo Accounts</SectionLabel>

        <UserCardsGrid role="listbox" aria-label="Select a user account">
          {DEMO_USERS.map(user => {
            const isSelected = selectedUserId === user.id;
            return (
              <UserCard
                key={user.id}
                isSelected={isSelected}
                onClick={() => setSelectedUserId(user.id)}
                role="option"
                aria-selected={isSelected}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedUserId(user.id);
                  }
                }}
              >
                <UserAvatar user={user} isSelected={isSelected} />
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </UserInfo>
                {isSelected && <SelectedBadge aria-hidden="true" />}
              </UserCard>
            );
          })}
        </UserCardsGrid>

        <Divider />

        <ContinueButton
          onClick={handleContinue}
          disabled={!selectedUserId || isLoading}
          aria-disabled={!selectedUserId || isLoading}
        >
          {isLoading ? 'Signing in…' : 'Continue →'}
        </ContinueButton>

        <FooterText>
          Demo app &mdash; no real credentials needed.{' '}
          <button
            type="button"
            onClick={() => {
              storeAuthToken('mock-auth-token');
              history.push('/project');
            }}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'inherit', font: 'inherit', textDecoration: 'underline' }}
          >
            Enter as guest
          </button>
        </FooterText>
      </RightPanel>
    </PageContainer>
  );
};

export default Login;
