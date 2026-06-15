import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import useApi from 'shared/hooks/api';
import toast from 'shared/utils/toast';
import { Form, Breadcrumbs, Avatar } from 'shared/components';

import {
  FormCont,
  FormElement,
  ActionButton,
  AvatarPreviewSection,
  AvatarContainer,
  AvatarPreview,
  AvatarOverlay,
  AvatarInfo,
  AvatarName,
  AvatarEmail,
  AvatarUrlInputSection,
  AvatarUrlInput,
  AvatarUpdateButton,
  ProfileDetailsHeading,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const AvatarPage = ({ project }) => {
  // Fetch current user data on component mount
  const [{ data: currentUserData, isLoading }, fetchCurrentUser] = useApi.get(
    '/currentUser',
    {},
    { cachePolicy: 'cache-first' },
  );
  const [{ isUpdating }, updateUser] = useApi.put('/currentUser');

  const currentUser = get(currentUserData, 'currentUser');
  // Manage avatar URL separately from form state since it updates independently
  const [avatarUrl, setAvatarUrl] = useState(currentUser ? currentUser.avatarUrl : '');

  if (isLoading || !currentUser) {
    return <div>Loading...</div>;
  }

  const handleAvatarUpdate = () => {
    // Validate URL is not empty before submission
    if (!avatarUrl.trim()) {
      toast.error('Avatar URL cannot be empty');
      return;
    }
    // Update user with new avatar and refresh cached data
    updateUser({ avatarUrl }).then(() => {
      fetchCurrentUser();
      toast.success('Avatar updated successfully.');
    });
  };

  return (
    <Form
      initialValues={Form.initialValues(currentUser, getValue => ({
        name: getValue('name'),
        email: getValue('email'),
        bio: getValue('bio', ''),
        avatarUrl: getValue('avatarUrl'),
      }))}
      validations={{
        name: [Form.is.required(), Form.is.maxLength(100)],
        email: [Form.is.required(), Form.is.email()],
        bio: Form.is.maxLength(255),
      }}
      onSubmit={async (values, form) => {
        try {
          // Exclude avatarUrl from profile form submission (it's updated separately)
          const { avatarUrl: _, ...updateValues } = values;
          await updateUser(updateValues);
          await fetchCurrentUser();
          toast.success('Profile updated successfully.');
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormCont>
        <FormElement>
          <Breadcrumbs items={['Projects', project.name, 'Profile & Avatar']} />

          {/* Avatar Preview Section */}
          <AvatarPreviewSection>
            <AvatarContainer>
              <AvatarPreview>
                <Avatar
                  name={currentUser.name}
                  avatarUrl={currentUser.avatarUrl}
                  size={120}
                  data-testid="avatar-preview"
                />
                <AvatarOverlay>
                  <span>✎</span>
                </AvatarOverlay>
              </AvatarPreview>
            </AvatarContainer>

            <AvatarInfo>
              <AvatarName>{currentUser.name}</AvatarName>
              <AvatarEmail>{currentUser.email}</AvatarEmail>
            </AvatarInfo>
          </AvatarPreviewSection>

          {/* Avatar URL Update Section */}
          <AvatarUrlInputSection>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
              Avatar URL
              <AvatarUrlInput
                type="text"
                value={avatarUrl}
                onChange={e => setAvatarUrl(e.target.value)}
                placeholder="Enter avatar image URL"
              />
            </label>
            <AvatarUpdateButton type="button" variant="secondary" onClick={handleAvatarUpdate}>
              Update Avatar
            </AvatarUpdateButton>
          </AvatarUrlInputSection>

          {/* Profile Details Form */}
          <ProfileDetailsHeading>Profile Details</ProfileDetailsHeading>

          <Form.Field.Input name="name" label="Display Name" />
          <Form.Field.Input name="email" label="Email" type="email" />
          <Form.Field.Textarea name="bio" label="Bio" placeholder="Tell us about yourself" />

          <ActionButton type="submit" variant="primary" isWorking={isUpdating}>
            Save Changes
          </ActionButton>
        </FormElement>
      </FormCont>
    </Form>
  );
};

AvatarPage.propTypes = propTypes;

export default AvatarPage;
