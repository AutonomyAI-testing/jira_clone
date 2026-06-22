import React, { useState } from 'react';

import toast from 'shared/utils/toast';
import { Breadcrumbs } from 'shared/components';
import { color } from 'shared/utils/styles';

import {
  PageHeading,
  PageDescription,
  SectionHeading,
  Grid,
  Card,
  CardHeader,
  ColorSwatch,
  CardTitle,
  CardDescription,
  TriggerButton,
  Divider,
  CustomForm,
  FormRow,
  FormField,
  Label,
  StyledInput,
  StyledSelect,
  FireButton,
} from './Styles';

// Toast variant configurations for the showcase page
const toastVariants = [
  {
    type: 'success',
    label: 'Success',
    swatchColor: color.success,
    description: 'Confirms a completed action — saved settings, created issue, updated record.',
    exampleTitle: 'Changes saved!',
    exampleMessage: 'Your project settings have been updated.',
  },
  {
    type: 'danger',
    label: 'Error',
    swatchColor: color.danger,
    description: 'Signals something went wrong — network failure, validation error, API rejection.',
    exampleTitle: 'Something went wrong',
    exampleMessage: 'Unable to save changes. Please try again.',
  },
  {
    type: 'warning',
    label: 'Warning',
    swatchColor: color.warning,
    description: 'Draws attention to a potential risk or non-blocking issue that needs awareness.',
    exampleTitle: 'Heads up!',
    exampleMessage: 'This action will affect all project members.',
  },
  {
    type: 'info',
    label: 'Info',
    swatchColor: color.primary,
    description: 'Shares helpful context, background updates, or informational nudges.',
    exampleTitle: 'New update available',
    exampleMessage: 'Refresh the page to see the latest changes.',
  },
];

// Initial state for the custom toast form builder
const defaultCustomState = {
  title: '',
  message: '',
  type: 'success',
  duration: '5',
};

const ToastShowcase = () => {
  const [custom, setCustom] = useState(defaultCustomState);

  // Fires a toast showing the example message for this variant
  // Does not auto-dismiss (duration not specified) so user can see the full design
  const fireVariant = variant => {
    toast.show({
      type: variant.type,
      title: variant.exampleTitle,
      message: variant.exampleMessage,
    });
  };

  // Fires a custom toast from form inputs
  // Returns early if neither title nor message is provided (prevents empty toasts)
  const fireCustom = () => {
    if (!custom.title && !custom.message) return;
    toast.show({
      type: custom.type,
      title: custom.title || undefined,
      message: custom.message || undefined,
      duration: Number(custom.duration),
    });
  };

  // Form change handler — creates a higher-order function for each field
  // This allows the same handler to work for title, message, type, and duration fields
  const handleChange = field => e => {
    setCustom(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div>
      <Breadcrumbs items={['Projects', 'Toast Notifications']} />
      <PageHeading>Toast Notifications</PageHeading>
      <PageDescription>
        In-app notifications for user feedback. Click any card to see a live preview.
      </PageDescription>

      <SectionHeading>Variants</SectionHeading>
      <Grid>
        {toastVariants.map(variant => (
          <Card key={variant.type}>
            <CardHeader>
              <ColorSwatch bg={variant.swatchColor} />
              <CardTitle>{variant.label}</CardTitle>
            </CardHeader>
            <CardDescription>{variant.description}</CardDescription>
            <TriggerButton variant="secondary" onClick={() => fireVariant(variant)}>
              Preview {variant.label}
            </TriggerButton>
          </Card>
        ))}
      </Grid>

      <Divider />

      <SectionHeading>Custom Toast Builder</SectionHeading>
      <CustomForm>
        <FormRow>
          <FormField>
            <Label htmlFor="toast-title">Title</Label>
            <StyledInput
              id="toast-title"
              type="text"
              placeholder="Toast title"
              value={custom.title}
              onChange={handleChange('title')}
            />
          </FormField>
          <FormField>
            <Label htmlFor="toast-type">Type</Label>
            <StyledSelect
              id="toast-type"
              value={custom.type}
              onChange={handleChange('type')}
            >
              <option value="success">Success</option>
              <option value="danger">Error</option>
              <option value="warning">Warning</option>
              <option value="info">Info</option>
            </StyledSelect>
          </FormField>
        </FormRow>

        <FormRow>
          <FormField>
            <Label htmlFor="toast-message">Message (optional)</Label>
            <StyledInput
              id="toast-message"
              type="text"
              placeholder="Additional detail..."
              value={custom.message}
              onChange={handleChange('message')}
            />
          </FormField>
          <FormField>
            <Label htmlFor="toast-duration">Duration (seconds, 0 = persistent)</Label>
            <StyledSelect
              id="toast-duration"
              value={custom.duration}
              onChange={handleChange('duration')}
            >
              <option value="3">3s</option>
              <option value="5">5s</option>
              <option value="8">8s</option>
              <option value="0">Persistent</option>
            </StyledSelect>
          </FormField>
        </FormRow>

        <FireButton variant="primary" onClick={fireCustom}>
          Fire Toast
        </FireButton>
      </CustomForm>
    </div>
  );
};

export default ToastShowcase;
