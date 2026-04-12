import React, { Fragment, useState } from 'react';
import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';
import 'App/fontStyles.css';

import Authenticate from './Authenticate';
import { Container, Title, Description, LoginButton } from './Styles';

export default {
  title: 'Auth/Authenticate',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Fragment>
        <NormalizeStyles />
        <BaseStyles />
        <div style={{ width: '100%', minHeight: '100vh', background: '#fff' }}>
          <Story />
        </div>
      </Fragment>
    ),
  ],
};

// Default login page with interactive button
export const Default = () => <Authenticate />;

// Button in loading state - shows green spinner
export const Loading = () => (
  <Container>
    <Title>Welcome to Jira Clone</Title>
    <Description>Click the button below to create a guest account and start exploring.</Description>
    <LoginButton
      variant="success"
      isWorking={true}
      disabled={false}
      onClick={() => {}}
    >
      Login as Guest
    </LoginButton>
  </Container>
);

// Button in disabled state - reduced opacity, not clickable
export const Disabled = () => (
  <Container>
    <Title>Welcome to Jira Clone</Title>
    <Description>Click the button below to create a guest account and start exploring.</Description>
    <LoginButton
      variant="success"
      isWorking={false}
      disabled={true}
      onClick={() => {}}
    >
      Login as Guest
    </LoginButton>
  </Container>
);

// Interactive demo showing state transitions
export const Interactive = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <Title>Interactive Button States</Title>
      <Description>
        Test the button states: Click the button to see loading state, or toggle disabled state below.
      </Description>
      <LoginButton
        variant="success"
        isWorking={isLoading}
        disabled={isDisabled}
        onClick={handleClick}
      >
        Login as Guest
      </LoginButton>
      <div style={{ marginTop: '20px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={isDisabled}
            onChange={(e) => setIsDisabled(e.target.checked)}
          />
          Disable button
        </label>
      </div>
    </Container>
  );
};
