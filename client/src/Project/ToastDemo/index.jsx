import React from 'react';

import toast from 'shared/utils/toast';
import { Button, Breadcrumbs } from 'shared/components';
import { color } from 'shared/utils/styles';

import {
  PageContainer,
  PageTitle,
  FireAllButton,
  SectionGroup,
  Section,
  SectionTitle,
  SectionDesc,
  ButtonRow,
  WizardSection,
} from './Styles';

/**
 * ToastDemo is a demonstration page for the toast notification system.
 * It shows all available toast types (success, danger, warning, info, wizard)
 * with examples of how each type can be triggered and how they behave.
 * Users can click individual buttons to see each toast type, or use the
 * "Fire all toasts" button to see how multiple toasts stack in the UI.
 */
const ToastDemo = () => {
  // Sequential timing for demo purposes - shows how multiple toasts stack
  const TOAST_DELAY_MS = 500;

  const handleFireAllToasts = () => {
    toast.show({
      type: 'success',
      title: '✓ Success',
      message: 'Your changes have been saved successfully.',
      duration: 5,
    });

    setTimeout(() => {
      toast.show({
        type: 'danger',
        title: '✗ Error',
        message: 'Something went wrong. Please try again.',
        duration: 0, // Danger toasts persist until manually dismissed
      });
    }, TOAST_DELAY_MS);

    setTimeout(() => {
      toast.show({
        type: 'warning',
        title: '⚠ Warning',
        message: 'Your session will expire in 5 minutes.',
        duration: 5,
      });
    }, TOAST_DELAY_MS * 2);

    setTimeout(() => {
      toast.show({
        type: 'primary',
        title: 'ℹ Info',
        message: 'A new update is available. Please refresh the page.',
        duration: 5,
      });
    }, TOAST_DELAY_MS * 3);

    setTimeout(() => {
      toast.show({
        type: 'warning',
        title: '🧙 Wizard Says...',
        message: 'You shall not pass! But seriously, check your inputs.',
        duration: 5,
      });
    }, TOAST_DELAY_MS * 4);
  };

  return (
    <PageContainer>
      <Breadcrumbs items={['Components', 'Toast Notifications']} />
      <PageTitle>Toast Notifications</PageTitle>

      <FireAllButton>
        <Button onClick={handleFireAllToasts} variant="primary">
          Fire all toasts
        </Button>
      </FireAllButton>

      <SectionGroup>
        {/* Success toast: Auto-dismisses after 5 seconds. Use for positive feedback on completed actions */}
        <Section color={color.success}>
          <SectionTitle color={color.success}>Success</SectionTitle>
          <SectionDesc>
            Shows when an operation completes successfully. Auto-dismisses after 5 seconds.
          </SectionDesc>
          <ButtonRow>
            <Button
              variant="success"
              onClick={() =>
                toast.show({
                  type: 'success',
                  title: '✓ Success',
                  message: 'Your changes have been saved successfully.',
                  duration: 5,
                })
              }
            >
              Save completed
            </Button>
            <Button
              variant="success"
              onClick={() =>
                toast.show({
                  type: 'success',
                  title: '✓ Published',
                  message: 'Your project has been published to all team members.',
                  duration: 5,
                })
              }
            >
              Project published
            </Button>
          </ButtonRow>
        </Section>

        {/* Danger toast: Persists (duration: 0) until user dismisses it. Critical for error states */}
        <Section color={color.danger}>
          <SectionTitle color={color.danger}>Danger / Error</SectionTitle>
          <SectionDesc>Shows when something goes wrong. Does not auto-dismiss.</SectionDesc>
          <ButtonRow>
            <Button
              variant="danger"
              onClick={() =>
                toast.show({
                  type: 'danger',
                  title: '✗ Error',
                  message: 'Failed to save your changes. Please try again.',
                  duration: 0,
                })
              }
            >
              Save failed
            </Button>
            <Button
              variant="danger"
              onClick={() =>
                toast.show({
                  type: 'danger',
                  title: '✗ Invalid input',
                  message: 'Please check all required fields are filled.',
                  duration: 0,
                })
              }
            >
              Validation error
            </Button>
          </ButtonRow>
        </Section>

        {/* Warning toast: Auto-dismisses after 5 seconds. Use for alerts that need attention but aren't critical */}
        <Section color={color.warning}>
          <SectionTitle color={color.warning}>Warning</SectionTitle>
          <SectionDesc>
            Shows important warnings that need attention. Auto-dismisses after 5 seconds.
          </SectionDesc>
          <ButtonRow>
            <Button
              variant="secondary"
              onClick={() =>
                toast.show({
                  type: 'warning',
                  title: '⚠ Warning',
                  message: 'Your session will expire in 5 minutes.',
                  duration: 5,
                })
              }
            >
              Session expiring
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                toast.show({
                  type: 'warning',
                  title: '⚠ Unsaved changes',
                  message: 'You have unsaved changes that will be lost.',
                  duration: 5,
                })
              }
            >
              Unsaved data
            </Button>
          </ButtonRow>
        </Section>

        {/* Info toast: Auto-dismisses after 5 seconds. Use for informational notices and status updates */}
        <Section color={color.primary}>
          <SectionTitle color={color.primary}>Info</SectionTitle>
          <SectionDesc>Shows informational messages. Auto-dismisses after 5 seconds.</SectionDesc>
          <ButtonRow>
            <Button
              variant="secondary"
              onClick={() =>
                toast.show({
                  type: 'primary',
                  title: 'ℹ Info',
                  message: 'A new update is available. Please refresh the page.',
                  duration: 5,
                })
              }
            >
              Update available
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                toast.show({
                  type: 'primary',
                  title: 'ℹ Syncing',
                  message: 'Your changes are being synchronized.',
                  duration: 5,
                })
              }
            >
              Syncing data
            </Button>
          </ButtonRow>
        </Section>

        {/* Wizard toast: A playful variant (dark theme) using warning type. Good for light-hearted or secondary notifications */}
        <WizardSection>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <SectionTitle>🧙 Wizard</SectionTitle>
          <SectionDesc>
            A fun variant for special notifications. Perfect for guidance and Easter eggs!
          </SectionDesc>
          <ButtonRow>
            <Button
              variant="secondary"
              onClick={() =>
                toast.show({
                  type: 'warning',
                  title: '🧙 Wizard Says...',
                  message: 'You shall not pass! But seriously, check your inputs.',
                  duration: 5,
                })
              }
            >
              Wizard quote
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                toast.show({
                  type: 'warning',
                  title: '✨ Magic Moment',
                  message: 'Something magical just happened! ✨',
                  duration: 5,
                })
              }
            >
              Magic moment
            </Button>
          </ButtonRow>
        </WizardSection>
      </SectionGroup>
    </PageContainer>
  );
};

export default ToastDemo;
