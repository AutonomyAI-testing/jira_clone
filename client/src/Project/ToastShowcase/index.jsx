import React from 'react';

import toast from 'shared/utils/toast';

import {
  PageContainer,
  HeroSection,
  HeroImage,
  IntroSection,
  SectionTitle,
  SectionDescription,
  CodeBlock,
  ExamplesGrid,
  ExampleCard,
  CardHeader,
  CardTitle,
  ColorBadge,
  CardDescription,
  CardButtons,
  TriggerButton,
  CardCode,
  CodeSnippet,
  ContentVariationsSection,
  VariationsGrid,
  VariationCard,
  VariationTitle,
  VariationDescription,
  ApiReferenceSection,
  ApiTable,
} from './Styles';

// Toast type colors used in variant cards and API reference table
const toastTypeColors = {
  success: '#0B875B',
  danger: '#E13C3C',
  warning: '#F89C1C',
  info: '#0052cc',
};

// Helper to create a handler that displays a toast with the given options
const createToastHandler = options => () => {
  toast.show(options);
};

const ToastShowcase = () => {
  // Toast display handlers for interactive examples
  const handleShowSuccess = createToastHandler({
    type: 'success',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    duration: 5,
  });

  const handleShowDanger = createToastHandler({
    type: 'danger',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    duration: 5,
  });

  const handleShowDangerLong = createToastHandler({
    type: 'danger',
    title: 'Error',
    message:
      'Failed to update issue: Connection timeout. Server did not respond within 30 seconds. Please check your network connection and try again.',
    duration: 0,
  });

  const handleShowWarning = createToastHandler({
    type: 'warning',
    title: 'Warning',
    message: 'This action cannot be undone. Please proceed with caution.',
    duration: 5,
  });

  const handleShowWarningLong = createToastHandler({
    type: 'warning',
    title: 'Warning',
    message:
      'This is a multi-line warning message that can span across several lines when the content is longer. Users can still dismiss it by clicking on the toast.',
    duration: 0,
  });

  const handleShowInfo = createToastHandler({
    type: 'info',
    title: 'Information',
    message: 'Project board has been updated with new filters.',
    duration: 5,
  });

  const handleShowTitleOnly = createToastHandler({
    type: 'success',
    title: 'Changes saved',
    duration: 5,
  });

  const handleShowMessageOnly = createToastHandler({
    type: 'info',
    message: 'Operation completed successfully',
    duration: 5,
  });

  const handleShowLongTitle = createToastHandler({
    type: 'warning',
    title: 'This is a very long title that might wrap to multiple lines',
    message: 'Short message',
    duration: 0,
  });

  const handleShowBothLong = createToastHandler({
    type: 'danger',
    title: 'Operation Failed',
    message:
      'The system encountered multiple validation errors. Please review the following: 1) Email address format is invalid, 2) Password must be at least 8 characters long, 3) Name field cannot be empty.',
    duration: 0,
  });

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroImage>
          <span role="img" aria-label="robot">
            🤖
          </span>
          <span role="img" aria-label="wizard">
            🧙
          </span>
        </HeroImage>
      </HeroSection>

      {/* Introduction Section */}
      <IntroSection>
        <SectionTitle style={{ color: toastTypeColors.danger }}>Toast Notifications</SectionTitle>
        <SectionDescription>
          Toast notifications are non-intrusive messages that appear in the top-right corner of the
          screen to provide user feedback about actions and system updates. They automatically
          dismiss after a configurable duration or can be manually dismissed by clicking.
        </SectionDescription>
        <SectionDescription>
          Use toasts to confirm successful actions, alert users to errors, warn about potentially
          destructive operations, or display important information without blocking the user&apos;s
          workflow.
        </SectionDescription>

        <SectionTitle style={{ marginTop: '30px', fontSize: '18px' }}>Quick Start</SectionTitle>
        <CodeBlock>{`import toast from 'shared/utils/toast';

// Show a toast with options
toast.show({
  type: 'success',
  title: 'Success!',
  message: 'Your changes have been saved.',
  duration: 5,  // auto-dismiss after 5 seconds (0 for persistent)
});

// Shorthand methods
toast.success('Operation completed');
toast.error(error);  // Extracts message from error object`}</CodeBlock>
      </IntroSection>

      {/* Toast Variants Section */}
      <IntroSection>
        <SectionTitle>Toast Variants</SectionTitle>
      </IntroSection>

      <ExamplesGrid>
        {/* Success Toast */}
        <ExampleCard>
          <CardHeader>
            <ColorBadge color={toastTypeColors.success} />
            <CardTitle>Success</CardTitle>
          </CardHeader>
          <CardDescription>
            Use for positive feedback and confirmations when operations complete successfully.
          </CardDescription>
          <CardButtons>
            <TriggerButton variant="success" onClick={handleShowSuccess}>
              Show Success Toast
            </TriggerButton>
          </CardButtons>
          <CardCode>
            <CodeSnippet>{`toast.show({
  type: 'success',
  title: 'Success!',
  message: 'Saved.',
})`}</CodeSnippet>
          </CardCode>
        </ExampleCard>

        {/* Danger Toast */}
        <ExampleCard>
          <CardHeader>
            <ColorBadge color={toastTypeColors.danger} />
            <CardTitle>Danger</CardTitle>
          </CardHeader>
          <CardDescription>
            Use for errors and critical failures that require user attention.
          </CardDescription>
          <CardButtons>
            <TriggerButton variant="danger" onClick={handleShowDanger}>
              Show Error
            </TriggerButton>
            <TriggerButton variant="danger" onClick={handleShowDangerLong}>
              Long Error
            </TriggerButton>
          </CardButtons>
          <CardCode>
            <CodeSnippet>{`toast.show({
  type: 'danger',
  title: 'Error',
  message: 'Something failed.',
  duration: 0,  // Don't auto-dismiss
})`}</CodeSnippet>
          </CardCode>
        </ExampleCard>

        {/* Warning Toast */}
        <ExampleCard>
          <CardHeader>
            <ColorBadge color={toastTypeColors.warning} />
            <CardTitle>Warning</CardTitle>
          </CardHeader>
          <CardDescription>
            Use for cautionary messages about potentially problematic actions.
          </CardDescription>
          <CardButtons>
            <TriggerButton variant="secondary" onClick={handleShowWarning}>
              Show Warning
            </TriggerButton>
            <TriggerButton variant="secondary" onClick={handleShowWarningLong}>
              Long Warning
            </TriggerButton>
          </CardButtons>
          <CardCode>
            <CodeSnippet>{`toast.show({
  type: 'warning',
  title: 'Warning',
  message: 'Proceed carefully.',
})`}</CodeSnippet>
          </CardCode>
        </ExampleCard>

        {/* Info Toast */}
        <ExampleCard>
          <CardHeader>
            <ColorBadge color={toastTypeColors.info} />
            <CardTitle>Info</CardTitle>
          </CardHeader>
          <CardDescription>
            Use for informational messages that don&apos;t require immediate action.
          </CardDescription>
          <CardButtons>
            <TriggerButton variant="primary" onClick={handleShowInfo}>
              Show Info
            </TriggerButton>
          </CardButtons>
          <CardCode>
            <CodeSnippet>{`toast.show({
  type: 'info',
  title: 'Information',
  message: 'Update available.',
})`}</CodeSnippet>
          </CardCode>
        </ExampleCard>
      </ExamplesGrid>

      {/* Content Variations Section */}
      <ContentVariationsSection>
        <SectionTitle>Content Variations</SectionTitle>
        <SectionDescription>
          Toasts are flexible in how you structure their content. Combine titles and messages in
          various ways to suit your use case.
        </SectionDescription>

        <VariationsGrid>
          <VariationCard>
            <VariationTitle>Title Only</VariationTitle>
            <VariationDescription>
              When you only need to convey a brief, simple message.
            </VariationDescription>
            <TriggerButton variant="success" onClick={handleShowTitleOnly}>
              Trigger Toast
            </TriggerButton>
            <CardCode>
              <CodeSnippet>{`toast.show({
  type: 'success',
  title: 'Changes saved',
})`}</CodeSnippet>
            </CardCode>
          </VariationCard>

          <VariationCard>
            <VariationTitle>Message Only</VariationTitle>
            <VariationDescription>
              When a title would be redundant and message is self-explanatory.
            </VariationDescription>
            <TriggerButton variant="primary" onClick={handleShowMessageOnly}>
              Trigger Toast
            </TriggerButton>
            <CardCode>
              <CodeSnippet>{`toast.show({
  type: 'info',
  message: 'Operation complete',
})`}</CodeSnippet>
            </CardCode>
          </VariationCard>

          <VariationCard>
            <VariationTitle>Long Title</VariationTitle>
            <VariationDescription>
              Toast handles longer titles gracefully with text wrapping.
            </VariationDescription>
            <TriggerButton variant="secondary" onClick={handleShowLongTitle}>
              Trigger Toast
            </TriggerButton>
            <CardCode>
              <CodeSnippet>{`toast.show({
  type: 'warning',
  title: 'Long title...',
  message: 'Short message',
  duration: 0,
})`}</CodeSnippet>
            </CardCode>
          </VariationCard>

          <VariationCard>
            <VariationTitle>Long Content</VariationTitle>
            <VariationDescription>
              Complex errors can be fully displayed with title and detailed message.
            </VariationDescription>
            <TriggerButton variant="danger" onClick={handleShowBothLong}>
              Trigger Toast
            </TriggerButton>
            <CardCode>
              <CodeSnippet>{`toast.show({
  type: 'danger',
  title: 'Operation Failed',
  message: 'Details here...',
  duration: 0,
})`}</CodeSnippet>
            </CardCode>
          </VariationCard>
        </VariationsGrid>
      </ContentVariationsSection>

      {/* API Reference Section */}
      <ApiReferenceSection>
        <SectionTitle>API Reference</SectionTitle>
        <SectionDescription>
          The toast utility provides three main methods for displaying notifications.
        </SectionDescription>

        <ApiTable>
          <thead>
            <tr>
              <th>Method</th>
              <th>Parameters</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>toast.show()</code>
              </td>
              <td>
                <code>{'{ type, title, message, duration }'}</code>
              </td>
              <td>
                Display a toast with full control. <code>duration</code> is in seconds (default 5,
                use 0 for persistent).
              </td>
            </tr>
            <tr>
              <td>
                <code>toast.success()</code>
              </td>
              <td>
                <code>title</code> (string)
              </td>
              <td>Shorthand for success toast with title only.</td>
            </tr>
            <tr>
              <td>
                <code>toast.error()</code>
              </td>
              <td>
                <code>error</code> (Error or string)
              </td>
              <td>
                Shorthand for danger toast. Extracts message from error object or uses string
                directly. Never auto-dismisses.
              </td>
            </tr>
          </tbody>
        </ApiTable>

        <SectionTitle style={{ marginTop: '30px', fontSize: '18px' }}>Toast Types</SectionTitle>
        <ApiTable>
          <thead>
            <tr>
              <th>Type</th>
              <th>Color</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>success</code>
              </td>
              <td style={{ color: toastTypeColors.success, fontWeight: 'bold' }}>■ Green</td>
              <td>Successful operations and positive confirmations</td>
            </tr>
            <tr>
              <td>
                <code>danger</code>
              </td>
              <td style={{ color: toastTypeColors.danger, fontWeight: 'bold' }}>■ Red</td>
              <td>Errors and critical failures</td>
            </tr>
            <tr>
              <td>
                <code>warning</code>
              </td>
              <td style={{ color: toastTypeColors.warning, fontWeight: 'bold' }}>■ Orange</td>
              <td>Cautions and alerts requiring attention</td>
            </tr>
            <tr>
              <td>
                <code>info</code>
              </td>
              <td style={{ color: toastTypeColors.info, fontWeight: 'bold' }}>■ Blue</td>
              <td>Informational messages and notifications</td>
            </tr>
          </tbody>
        </ApiTable>
      </ApiReferenceSection>

      {/* Best Practices Section */}
      <IntroSection style={{ marginTop: '50px' }}>
        <SectionTitle>Best Practices</SectionTitle>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>
            <SectionDescription style={{ margin: '0 0 8px 0' }}>
              Keep titles concise — aim for 1-3 words when possible
            </SectionDescription>
          </li>
          <li>
            <SectionDescription style={{ margin: '0 0 8px 0' }}>
              Use appropriate types to set user expectations (green = good, red = bad, etc.)
            </SectionDescription>
          </li>
          <li>
            <SectionDescription style={{ margin: '0 0 8px 0' }}>
              Set <code>duration: 0</code> for errors so users have time to read them
            </SectionDescription>
          </li>
          <li>
            <SectionDescription style={{ margin: '0 0 8px 0' }}>
              Don&apos;t overuse toasts — reserve them for important feedback
            </SectionDescription>
          </li>
          <li>
            <SectionDescription style={{ margin: '0 0 8px 0' }}>
              Users can dismiss toasts by clicking, so always allow manual dismissal
            </SectionDescription>
          </li>
          <li>
            <SectionDescription style={{ margin: '0 0 8px 0' }}>
              For validation errors, consider using the Form field-level error display instead
            </SectionDescription>
          </li>
        </ul>
      </IntroSection>
    </PageContainer>
  );
};

export default ToastShowcase;
