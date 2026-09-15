import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { storeAuthToken } from 'shared/utils/authToken';
import { useStarField } from 'shared/hooks/useStarField';
import wizardRobotImg from '../assets/wizard-robot.jpg';

import {
  PageWrapper,
  StarCanvas,
  Card,
  AvatarWrapper,
  AvatarImage,
  WelcomeText,
  SubText,
  Form,
  InputGroup,
  Label,
  Input,
  LoginButton,
  GuestButton,
  Divider,
  FooterText,
  SparkleIcon,
} from './Styles';

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const canvasRef = useRef(null);
  useStarField(canvasRef);

  const handleLogin = e => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login — store a token and redirect
    setTimeout(() => {
      storeAuthToken('mock-auth-token');
      history.push('/project');
    }, 800);
  };

  const handleGuestLogin = () => {
    storeAuthToken('mock-auth-token');
    history.push('/project');
  };

  return (
    <PageWrapper>
      <StarCanvas ref={canvasRef} />
      <Card>
        <AvatarWrapper>
          <AvatarImage src={wizardRobotImg} alt="Wizard Robot — your magic guide" />
        </AvatarWrapper>

        <WelcomeText>Welcome back, wizard</WelcomeText>
        <SubText>Sign in to continue your quest</SubText>

        <Form onSubmit={handleLogin}>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </InputGroup>

          <LoginButton type="submit" disabled={isLoading}>
            <SparkleIcon>✦</SparkleIcon>
            {isLoading ? 'Casting spell…' : 'Sign In'}
          </LoginButton>
        </Form>

        <Divider style={{ marginTop: 20 }}>or</Divider>

        <GuestButton type="button" onClick={handleGuestLogin} style={{ marginTop: 12 }}>
          Continue as guest
        </GuestButton>

        <FooterText>
          Powered by magic &amp; open source{' '}
          <span role="img" aria-label="sparkles">✨</span>
        </FooterText>
      </Card>
    </PageWrapper>
  );
};

export default LoginPage;
