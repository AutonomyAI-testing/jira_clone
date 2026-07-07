import React from 'react';

import {
  ErrorPage,
  ErrorPageInner,
  AvatarWrapper,
  ErrorCode,
  Title,
  Description,
  HomeButton,
} from './Styles';

import avatarImage from './assets/avatar.png';

const PageError500 = () => (
  <ErrorPage>
    <ErrorPageInner>
      <AvatarWrapper>
        <img src={avatarImage} alt="500 character" />
      </AvatarWrapper>
      <ErrorCode>500</ErrorCode>
      <Title>Internal server error</Title>
      <Description>
        Something went wrong on our end. We&apos;re working to fix it &mdash; please try again in
        a moment or contact support if the issue persists.
      </Description>
      <HomeButton href="/">← Back to Home</HomeButton>
    </ErrorPageInner>
  </ErrorPage>
);

export default PageError500;
