import React from 'react';

import {
  ErrorPage,
  ErrorCode,
  ErrorTitle,
  ErrorSubtext,
  AvatarWrapper,
  CharacterImage,
  BackButton,
} from './Styles';
import avatarCharacter from './assets/avatar-character.png';

const PageError = () => (
  <ErrorPage>
    <ErrorCode>404</ErrorCode>
    <ErrorTitle>Page Not Found</ErrorTitle>
    <ErrorSubtext>
      Looks like this page wandered off. Let&#39;s get you back on track.
    </ErrorSubtext>
    <AvatarWrapper>
      <CharacterImage src={avatarCharacter} alt="404 character" />
    </AvatarWrapper>
    <BackButton href="/project">Back to Project</BackButton>
  </ErrorPage>
);

export default PageError;
