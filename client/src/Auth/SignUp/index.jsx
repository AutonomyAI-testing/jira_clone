import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import { storeAuthToken } from 'shared/utils/authToken';
import { Form } from 'shared/components';
import Logo from 'shared/components/Logo';

import {
  PageContainer,
  AuthCard,
  LogoSection,
  LogoText,
  FormHeading,
  ActionButton,
  BottomLinks,
  BottomLink,
} from '../Styles';
import { FormElement, WorkingSpinner } from './Styles';

const SignUp = () => {
  const history = useHistory();
  const [isWorking, setIsWorking] = useState(false);

  const handleSubmit = async (values, form) => {
    try {
      setIsWorking(true);
      const { authToken } = await api.post('/authentication/register', values);
      storeAuthToken(authToken);
      history.push('/project');
    } catch (error) {
      Form.handleAPIError(error, form);
    } finally {
      setIsWorking(false);
    }
  };

  return (
    <PageContainer>
      <AuthCard>
        <LogoSection>
          <Logo size={44} />
          <LogoText>Jira Clone</LogoText>
        </LogoSection>

        <FormHeading>Create your account</FormHeading>

        <Form
          initialValues={{ name: '', username: '', email: '', password: '' }}
          validations={{
            name: Form.is.required(),
            username: Form.is.required(),
            email: [Form.is.required(), Form.is.email()],
            password: [Form.is.required(), Form.is.minLength(6)],
          }}
          onSubmit={handleSubmit}
        >
          <FormElement>
            <Form.Field.Input
              name="name"
              label="Full Name"
              placeholder="Enter your full name"
            />
            <Form.Field.Input
              name="username"
              label="Username"
              placeholder="Choose a username"
            />
            <Form.Field.Input
              name="email"
              label="Email"
              placeholder="Enter your email address"
              type="email"
            />
            <Form.Field.Input
              name="password"
              label="Password"
              placeholder="Create a password (min. 6 characters)"
              type="password"
            />

            <ActionButton type="submit" disabled={isWorking}>
              {isWorking ? <WorkingSpinner size={20} color="#fff" /> : 'Create account'}
            </ActionButton>
          </FormElement>
        </Form>

        <BottomLinks>
          {'Already have an account? '}
          <BottomLink to="/login">Log in</BottomLink>
        </BottomLinks>
      </AuthCard>
    </PageContainer>
  );
};

export default SignUp;
