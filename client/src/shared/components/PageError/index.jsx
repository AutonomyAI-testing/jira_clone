import React from 'react';

import { ErrorPage, ErrorPageInner, WizardImage, ErrorBox, Title } from './Styles';

const PageError = () => (
  <ErrorPage>
    <ErrorPageInner>
      <WizardImage />
      <ErrorBox>
        <Title>Our wizard is stumped…</Title>
        <p>
          {'Something went sideways in the spellbook. Please contact us or try our '}
          <a href="https://support.atlassian.com/jira-software-cloud/">Help Center</a>
          {" if the magic isn't back yet."}
        </p>
      </ErrorBox>
    </ErrorPageInner>
  </ErrorPage>
);

export default PageError;
