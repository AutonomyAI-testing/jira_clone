import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'shared/components';
import WizardSvg from './WizardSvg';
import { PageError, ErrorPageInner, ErrorBox, StyledWizard, Title, Subtitle, StyledButton } from './Styles';

// Error page displayed when a user navigates to an undefined route
const NotFound404 = () => {
  const history = useHistory();

  // Navigate to the project dashboard when user clicks the action button
  const handleBackToDashboard = () => {
    history.push('/project');
  };

  return (
    <PageError>
      <ErrorPageInner>
        <ErrorBox>
          <StyledWizard>
            <WizardSvg />
          </StyledWizard>
          <Title>404 — Page Not Found</Title>
          <Subtitle>
            Looks like our wizard bot cast a spell on this URL and it vanished.
            <br />
            Don&apos;t worry — your data is safe!
          </Subtitle>
          <StyledButton>
            <Button variant="primary" onClick={handleBackToDashboard}>
              Back to Dashboard
            </Button>
          </StyledButton>
        </ErrorBox>
      </ErrorPageInner>
    </PageError>
  );
};

export default NotFound404;
