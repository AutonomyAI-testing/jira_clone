import React from 'react';

import Logo from 'shared/components/Logo';

import {
  PageContainer,
  AuthCard,
  LogoSection,
  LogoText,
  FormHeading,
  BottomLinks,
  BottomLink,
} from '../Styles';
import { StubMessage, StubIcon } from './Styles';

const ForgotPassword = () => (
  <PageContainer>
    <AuthCard>
      <LogoSection>
        <Logo size={44} />
        <LogoText>Jira Clone</LogoText>
      </LogoSection>

      <FormHeading>Forgot your password?</FormHeading>

      <StubIcon>🔒</StubIcon>
      <StubMessage>
        Password reset is not yet available in this version. Please contact your administrator or
        use the <strong>Continue as Guest</strong> option on the login page.
      </StubMessage>

      <BottomLinks>
        <BottomLink to="/login">← Back to Log in</BottomLink>
      </BottomLinks>
    </AuthCard>
  </PageContainer>
);

export default ForgotPassword;
