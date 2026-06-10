import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, Breadcrumbs, Button, Form } from 'shared/components';
import useApi from 'shared/hooks/api';
import toast from 'shared/utils/toast';

import {
  Container,
  Header,
  Title,
  Grid,
  Card,
  AvatarWrapper,
  UserName,
  UserEmail,
  RoleBadge,
  IssueCount,
  ViewIssuesButton,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  ProfileEditSection,
  EditSectionTitle,
  FormGroup,
  FormField,
  FieldLabel,
  AvatarPreviewWrapper,
  AvatarPreviewLabel,
  FormActions,
  CurrentUserBadge,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const AvatarPage = ({ project }) => {
  // First user is treated as current user (hardcoded for mock data scenario)
  // In production, this would come from authentication context
  const currentUserId = 1;
  const users = project.users || [];
  const issues = project.issues || [];
  const [{ isUpdating }, updateCurrentUser] = useApi.put('/currentUser');

  // Derives role from user name patterns in mock data
  // In production, this would come from an actual role field
  const getRoleFromName = (name) => {
    if (name.includes('Gaben')) return 'Admin';
    if (name.includes('Pickle')) return 'Developer';
    if (name.includes('Yoda')) return 'Designer';
    return 'Team Member';
  };

  // Counts issues assigned to a user by filtering through user array in each issue
  const getIssueCountForUser = (userId) =>
    issues.filter((issue) => issue.users && issue.users.some((u) => u.id === userId)).length;

  // Handles profile form submission with API error handling via Form utility
  const handleProfileUpdate = async (values, form) => {
    try {
      await updateCurrentUser(values);
      toast.success('Profile updated successfully');
    } catch (error) {
      Form.handleAPIError(error, form);
    }
  };

  const currentUser = users.find((u) => u.id === currentUserId);

  if (users.length === 0) {
    return (
      <Container>
        <Header>
          <Breadcrumbs items={['Projects', project.name || 'Project', 'Team']} />
          <Title>Team Members</Title>
        </Header>
        <EmptyState>
          <EmptyIcon>
            <span role="img" aria-label="wizard emoji">
              🧙
            </span>
          </EmptyIcon>
          <EmptyTitle>No wizards on this team yet</EmptyTitle>
          <EmptyDescription>Get started by adding your first team member.</EmptyDescription>
          <Button variant="secondary">Add Member</Button>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Breadcrumbs items={['Projects', project.name || 'Project', 'Team']} />
        <Title>Team Members</Title>
      </Header>

      <Grid>
        {users.map((user) => (
          <Card key={user.id} isCurrentUser={user.id === currentUserId}>
            {user.id === currentUserId && <CurrentUserBadge>You</CurrentUserBadge>}
            <AvatarWrapper>
              <Avatar avatarUrl={user.avatarUrl} name={user.name} size={72} />
            </AvatarWrapper>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <RoleBadge>{getRoleFromName(user.name)}</RoleBadge>
            <IssueCount>{getIssueCountForUser(user.id)} issues assigned</IssueCount>
            <ViewIssuesButton>
              <Button variant="empty">View Issues</Button>
            </ViewIssuesButton>
          </Card>
        ))}
      </Grid>

      {currentUser && (
        <Form
          initialValues={Form.initialValues(currentUser, (get) => ({
            name: get('name'),
            email: get('email'),
            avatarUrl: get('avatarUrl'),
          }))}
          validations={{
            name: Form.is.required(),
            email: [Form.is.required(), Form.is.email()],
          }}
          onSubmit={handleProfileUpdate}
        >
          {({ values }) => (
            <ProfileEditFormContent
              currentUser={currentUser}
              isUpdating={isUpdating}
              values={values}
            />
          )}
        </Form>
      )}
    </Container>
  );
};

const ProfileEditFormContent = ({ currentUser, isUpdating, values }) => {
  return (
    <ProfileEditSection>
      <EditSectionTitle>Edit Your Profile</EditSectionTitle>

      <FormGroup>
        <FormField>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Form.Field.Input
            id="name"
            name="name"
            label=""
            placeholder="Enter your name"
            maxLength={100}
          />
        </FormField>
        <FormField>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Form.Field.Input
            id="email"
            name="email"
            label=""
            type="email"
            placeholder="Enter your email"
          />
        </FormField>
      </FormGroup>

      <FormGroup>
        <FormField>
          <FieldLabel htmlFor="avatarUrl">Avatar URL</FieldLabel>
          <Form.Field.Input
            id="avatarUrl"
            name="avatarUrl"
            label=""
            placeholder="https://example.com/avatar.jpg (optional)"
          />
        </FormField>
      </FormGroup>

      {values.avatarUrl && (
        <AvatarPreviewWrapper>
          <AvatarPreviewLabel>Avatar Preview:</AvatarPreviewLabel>
          <Avatar avatarUrl={values.avatarUrl} name={values.name || currentUser.name} size={40} />
        </AvatarPreviewWrapper>
      )}

      <FormActions>
        <Button type="submit" variant="primary" isWorking={isUpdating}>
          Save Changes
        </Button>
      </FormActions>
    </ProfileEditSection>
  );
};

AvatarPage.propTypes = propTypes;

export default AvatarPage;
