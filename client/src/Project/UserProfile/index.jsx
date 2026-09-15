import React from 'react';

import useCurrentUser from 'shared/hooks/currentUser';
import useApi from 'shared/hooks/api';
import toast from 'shared/utils/toast';
import { Form, Breadcrumbs, Avatar } from 'shared/components';

import { FormCont, FormHeading, FormElement, AvatarPreview, ActionButton } from './Styles';

const UserProfile = () => {
  const { currentUser } = useCurrentUser();
  const [{ isUpdating }, updateUser] = useApi.put('/currentUser');

  if (!currentUser) return null;

  return (
    <Form
      initialValues={Form.initialValues(currentUser, (get) => ({
        name: get('name'),
        avatarUrl: get('avatarUrl'),
      }))}
      validations={{
        name: [Form.is.required(), Form.is.maxLength(100)],
        avatarUrl: [Form.is.maxLength(2000)],
      }}
      onSubmit={async (values, form) => {
        try {
          await updateUser(values);
          toast.success('Profile updated successfully.');
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      {({ values }) => (
        <FormCont>
          <FormElement>
            <Breadcrumbs items={['Projects', 'My Profile', 'Account Settings']} />
            <FormHeading>Account Settings</FormHeading>
            <AvatarPreview>
              <Avatar avatarUrl={values.avatarUrl} name={currentUser.name} size={120} />
            </AvatarPreview>
            <Form.Field.Input name="name" label="Name" />
            <Form.Field.Input name="avatarUrl" label="Avatar URL" />
            <ActionButton type="submit" variant="primary" isWorking={isUpdating}>
              Save changes
            </ActionButton>
          </FormElement>
        </FormCont>
      )}
    </Form>
  );
};

export default UserProfile;
