import React from 'react';

import toast from 'shared/utils/toast';
import { Button } from 'shared/components';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Grid,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  ButtonGroup,
  Section,
  SectionTitle,
  SectionContent,
  PreviewContainer,
  StyledToastPreview,
} from './Styles';

const ToastPage = () => {

  const handleShowToast = (type, title, message) => {
    toast.show({ type, title, message, duration: 5 });
  };

  const handleShowStackedToasts = () => {
    const toastConfigs = [
      { type: 'success', title: 'Upload Complete', message: 'Your file has been uploaded.' },
      { type: 'primary', title: 'Info Updated', message: 'Your changes are being synced.' },
      { type: 'warning', title: 'Warning', message: 'This action cannot be undone.' },
    ];

    toastConfigs.forEach((config, index) => {
      setTimeout(() => {
        toast.show({ ...config, duration: 5 });
      }, index * 150);
    });
  };

  const handleShowPersistentToast = (type, title, message) => {
    toast.show({ type, title, message, duration: 0 });
  };

  return (
    <Container>
      <Header>
        <Title>Toast Notifications</Title>
        <Subtitle>Interactive demos for all toast notification types</Subtitle>
      </Header>

      <Grid>
        <Card>
          <CardHeader type="success" />
          <CardTitle>Success Toast</CardTitle>
          <CardDescription>Used to confirm successful operations</CardDescription>
          <CardContent>
            <ButtonGroup>
              <Button
                variant="success"
                onClick={() =>
                  handleShowToast('success', 'Operation Successful', 'Your changes have been saved.')
                }
              >
                With Message
              </Button>
              <Button
                variant="success"
                onClick={() => handleShowToast('success', 'Done!')}
              >
                Title Only
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader type="danger" />
          <CardTitle>Danger Toast</CardTitle>
          <CardDescription>Used to alert about errors or issues</CardDescription>
          <CardContent>
            <ButtonGroup>
              <Button
                variant="danger"
                onClick={() =>
                  handleShowToast('danger', 'Error', 'Something went wrong. Please try again.')
                }
              >
                With Message
              </Button>
              <Button
                variant="danger"
                onClick={() => handleShowToast('danger', 'Failed')}
              >
                Title Only
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader type="warning" />
          <CardTitle>Warning Toast</CardTitle>
          <CardDescription>Used for important notices and cautions</CardDescription>
          <CardContent>
            <ButtonGroup>
              <Button
                onClick={() =>
                  handleShowToast('warning', 'Warning', 'Please review before proceeding.')
                }
              >
                With Message
              </Button>
              <Button
                onClick={() => handleShowToast('warning', 'Attention')}
              >
                Title Only
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader type="primary" />
          <CardTitle>Info Toast</CardTitle>
          <CardDescription>Used for general information messages</CardDescription>
          <CardContent>
            <ButtonGroup>
              <Button
                variant="primary"
                onClick={() =>
                  handleShowToast('primary', 'Information', 'Your notification has been received.')
                }
              >
                With Message
              </Button>
              <Button
                variant="primary"
                onClick={() => handleShowToast('primary', 'FYI')}
              >
                Title Only
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Grid>

      <Section>
        <SectionTitle>Advanced Examples</SectionTitle>

        <Card>
          <CardTitle>Persistent Toast (No Auto-Dismiss)</CardTitle>
          <CardDescription>Click the X to manually dismiss the notification</CardDescription>
          <CardContent>
            <ButtonGroup>
              <Button
                variant="success"
                onClick={() =>
                  handleShowPersistentToast(
                    'success',
                    'Stay Here',
                    'This toast will not disappear automatically.',
                  )
                }
              >
                Show Persistent
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>

        <Card>
          <CardTitle>Stacked Toasts</CardTitle>
          <CardDescription>Multiple toasts appear at the same time</CardDescription>
          <CardContent>
            <ButtonGroup>
              <Button variant="primary" onClick={handleShowStackedToasts}>
                Stack 3 Toasts
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Toast Preview</SectionTitle>
        <SectionContent>
          <p>
            Toasts appear in the top-right corner of your screen. When you click any button above,
            check the corner to see the notification.
          </p>
          <PreviewContainer>
            <p>Notifications appear here ↗</p>
          </PreviewContainer>
        </SectionContent>
      </Section>
    </Container>
  );
};

export default ToastPage;
