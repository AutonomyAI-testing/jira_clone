import React, { useState } from 'react';
import { Button, Input } from 'shared/components';
import toast from 'shared/utils/toast';
import {
  Container,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  VariantsGrid,
  Card,
  ColorBadge,
  CardTitle,
  CardDescription,
  ExampleBox,
  ExampleText,
  TriggerButton,
  CustomSection,
  CustomSectionTitle,
  FormRow,
  FormGroup,
  SelectInput,
  FormActions,
} from './Styles';

const toastVariants = [
  {
    type: 'success',
    title: 'Changes Saved',
    message: 'Your project settings have been updated successfully.',
    color: '#0B875B',
    buttonLabel: 'Show Success Toast',
    buttonVariant: 'success',
  },
  {
    type: 'danger',
    title: 'Action Failed',
    message: 'Something went wrong. Please try again later.',
    color: '#E13C3C',
    buttonLabel: 'Show Danger Toast',
    buttonVariant: 'danger',
  },
  {
    type: 'warning',
    title: 'Storage Warning',
    message: "You're using 90% of your storage. Consider archiving old projects.",
    color: '#F89C1C',
    buttonLabel: 'Show Warning Toast',
    buttonVariant: 'secondary',
  },
  {
    type: 'info',
    title: 'New Update',
    message: 'A new version is available. Refresh to get the latest features.',
    color: '#0052cc',
    buttonLabel: 'Show Info Toast',
    buttonVariant: 'primary',
  },
  {
    type: 'wizard',
    title: 'Wizard Mode Active',
    message: 'Spells and enchantments are now available in your toolkit.',
    color: '#403294',
    buttonLabel: 'Show Wizard Toast',
    buttonVariant: 'primary',
  },
];

const ToastShowcase = () => {
  const [customTitle, setCustomTitle] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [customType, setCustomType] = useState('success');

  const handleShowToast = (type, title, message) => {
    toast.show({ type, title, message, duration: 5 });
  };

  const handleShowCustom = () => {
    if (customTitle.trim() || customMessage.trim()) {
      toast.show({ type: customType, title: customTitle, message: customMessage, duration: 5 });
      setCustomTitle('');
      setCustomMessage('');
    }
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Toast Notifications</HeaderTitle>
        <HeaderSubtitle>Interactive showcase of all toast variants</HeaderSubtitle>
      </Header>

      <VariantsGrid>
        {toastVariants.map(variant => (
          <Card key={variant.type}>
            <ColorBadge color={variant.color}>{variant.type}</ColorBadge>
            <CardTitle>
              {variant.type === 'success' && '✅'} {variant.type === 'danger' && '❌'}{' '}
              {variant.type === 'warning' && '⚠️'} {variant.type === 'info' && 'ℹ️'}{' '}
              {variant.type === 'wizard' && '🧙‍♂️'} {variant.title}
            </CardTitle>

            <CardDescription>
              {variant.type === 'success' && 'For successful operations and confirmations'}
              {variant.type === 'danger' && 'For errors and failed operations'}
              {variant.type === 'warning' && 'For warnings and important alerts'}
              {variant.type === 'info' && 'For informational messages and updates'}
              {variant.type === 'wizard' && 'For magic moments & special announcements'}
            </CardDescription>

            <ExampleBox color={variant.color}>
              <ExampleText>
                <strong>{variant.title}</strong>
              </ExampleText>
              <ExampleText>{variant.message}</ExampleText>
            </ExampleBox>

            <TriggerButton
              onClick={() => handleShowToast(variant.type, variant.title, variant.message)}
              variant={variant.buttonVariant}
              data-testid={`toast-trigger-${variant.type}`}
            >
              {variant.buttonLabel}
            </TriggerButton>
          </Card>
        ))}
      </VariantsGrid>

      <CustomSection>
        <CustomSectionTitle>Custom Toast</CustomSectionTitle>
        <FormRow>
          <FormGroup>
            <Input
              placeholder="Toast title"
              value={customTitle}
              onChange={setCustomTitle}
              data-testid="custom-toast-title"
            />
          </FormGroup>

          <FormGroup>
            <Input
              placeholder="Toast message"
              value={customMessage}
              onChange={setCustomMessage}
              data-testid="custom-toast-message"
            />
          </FormGroup>

          <FormGroup>
            <SelectInput
              value={customType}
              onChange={e => setCustomType(e.target.value)}
              data-testid="custom-toast-type"
            >
              <option value="success">Success</option>
              <option value="danger">Danger</option>
              <option value="warning">Warning</option>
              <option value="info">Info</option>
              <option value="wizard">Wizard</option>
            </SelectInput>
          </FormGroup>

          <FormActions>
            <Button onClick={handleShowCustom} variant="primary" data-testid="custom-toast-show">
              Show Toast
            </Button>
          </FormActions>
        </FormRow>
      </CustomSection>
    </Container>
  );
};

export default ToastShowcase;
