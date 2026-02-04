import React from 'react';
import PropTypes from 'prop-types';

import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import useCurrentUser from 'shared/hooks/currentUser';
import { Form, Breadcrumbs, Avatar } from 'shared/components';

import {
  FormCont,
  FormHeading,
  FormElement,
  ActionButton,
  AvatarSection,
  AvatarLabel,
  AvatarWrapper,
} from './Styles';

const propTypes = {
  fetchProject: PropTypes.func.isRequired,
};

const UserSettings = ({ fetchProject }) => {
  const [{ isUpdating }, updateCurrentUser] = useApi.put('/currentUser');
  const { currentUser } = useCurrentUser({ cachePolicy: 'cache-only' });

  if (!currentUser) return null;

  return (
    <Form
      initialValues={Form.initialValues(currentUser, get => ({
        avatarUrl: get('avatarUrl', ''),
      }))}
      validations={{
        avatarUrl: [
          Form.is.url(),
          Form.is.match(
            url => !url || /\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url),
            'Must be a valid image URL (jpg, jpeg, png, gif, webp)',
          ),
        ],
      }}
      onSubmit={async (values, form) => {
        try {
          await updateCurrentUser(values);
          await fetchProject();
          toast.success('Avatar updated successfully.');
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormCont>
        <FormElement>
          <Breadcrumbs items={['Projects', 'User Settings']} />
          <FormHeading>User Settings</FormHeading>

          <AvatarSection>
            <AvatarLabel>Current Avatar</AvatarLabel>
            <AvatarWrapper>
              <Avatar avatarUrl={currentUser.avatarUrl} name={currentUser.name} size={80} />
            </AvatarWrapper>
          </AvatarSection>

          <Form.Field.Input
            name="avatarUrl"
            label="Avatar URL"
            tip="Enter a direct link to an image (jpg, png, gif, webp). Max 5MB recommended."
          />

          <ActionButton type="submit" variant="primary" isWorking={isUpdating}>
            Save changes
          </ActionButton>
        </FormElement>
      </FormCont>
    </Form>
  );
};

UserSettings.propTypes = propTypes;

export default UserSettings;
