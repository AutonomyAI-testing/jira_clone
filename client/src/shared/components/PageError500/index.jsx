import React from 'react';

import { ErrorPage, ErrorPageInner, ErrorBox, StyledIcon, Title } from '../PageError/Styles';

// PageError500 displays a 500 Internal Server Error page with the same layout as PageError
// but with a different message and a red error code for visual distinction
const PageError500 = () => (
  <ErrorPage>
    <ErrorPageInner>
      <ErrorBox>
        <StyledIcon type="bug" />
        {/* Inline red color for error code to distinguish it visually from the message text */}
        <Title>
          500 – <span style={{ color: 'red' }}>Internal Server Error</span>
        </Title>
        <p>
          Something went wrong on our end. Please try refreshing the page, or contact us if the
          problem persists.
        </p>
      </ErrorBox>
    </ErrorPageInner>
  </ErrorPage>
);

export default PageError500;
