import React from 'react';

import toast from 'shared/utils/toast';
import { formatDate } from 'shared/utils/dateTime';
import useApi from 'shared/hooks/api';
import { Form, Avatar, PageLoader, PageError, Breadcrumbs } from 'shared/components';

import {
  PageCont,
  PageElement,
  PageHeading,
  ProfileHeader,
  AvatarWrapper,
  UserInfo,
  UserName,
  UserEmail,
  UserSince,
  SectionDivider,
  ActionButton,
} from './Styles';

const AvatarPage = () => {
  // Fetch user data on mount with no-cache policy to ensure fresh data
  const [{ data: userData, error: userError }, fetchUser] = useApi.get('/currentUser', {}, { cachePolicy: 'no-cache' });
  // PUT endpoint for updating user profile
  const [{ isUpdating }, updateUser] = useApi.put('/currentUser');

  // Show loading state until user data is available
  if (!userData) return <PageLoader />;
  // Show error state if data fetch failed
  if (userError) return <PageError />;

  const { currentUser } = userData;

  return (
    <Form
      initialValues={Form.initialValues(currentUser, get => ({
        name: get('name'),
        email: get('email'),
        avatarUrl: get('avatarUrl', ''),
        bio: get('bio', ''),
      }))}
      validations={{
        name: [Form.is.required(), Form.is.maxLength(100)],
        email: [Form.is.required(), Form.is.email()],
        bio: Form.is.maxLength(300),
      }}
      // Update user profile and refresh data on successful submission
      onSubmit={async (values, form) => {
        try {
          await updateUser(values);
          // Refetch after update to ensure UI reflects the latest server state
          await fetchUser();
          toast.success('Profile updated successfully.');
        } catch (error) {
          // API errors are handled by Form.handleAPIError, which displays field-level validation errors
          Form.handleAPIError(error, form);
        }
      }}
    >
      <PageCont>
        <PageElement>
          <Breadcrumbs items={['My Profile']} />

          {/* Display user's current profile information */}
          <ProfileHeader>
            <AvatarWrapper>
              <Avatar
                avatarUrl={currentUser.avatarUrl}
                name={currentUser.name}
                size={96}
              />
            </AvatarWrapper>
            <UserInfo>
              <UserName>{currentUser.name}</UserName>
              <UserEmail>{currentUser.email}</UserEmail>
              <UserSince>
                Member since {formatDate(currentUser.createdAt)}
              </UserSince>
            </UserInfo>
          </ProfileHeader>

          <SectionDivider />

          <PageHeading>Profile Settings</PageHeading>

          <Form.Field.Input name="name" label="Display Name" />
          <Form.Field.Input name="email" label="Email" />
          <Form.Field.Input
            name="avatarUrl"
            label="Avatar URL"
            placeholder="https://..."
          />
          <Form.Field.Textarea
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself..."
          />

          <ActionButton type="submit" variant="primary" isWorking={isUpdating}>
            Save changes
          </ActionButton>
        </PageElement>
      </PageCont>
    </Form>
  );
};

export default AvatarPage;
