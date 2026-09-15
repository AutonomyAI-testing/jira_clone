import React, { useState } from 'react';
import PropTypes from 'prop-types';

import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';

import {
  InviteForm as InviteFormContainer,
  InviteField,
  InviteLabel,
  InviteInput,
  InviteSelect,
  InviteButton,
} from '../Styles';

const propTypes = {
  projectId: PropTypes.string.isRequired,
  onInviteSent: PropTypes.func.isRequired,
};

const ROLE_OPTIONS = ['Member', 'Admin'];

const InviteForm = ({ projectId, onInviteSent }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Member');
  const [{ isUpdating }, sendInvite] = useApi.post('/project-member/invite');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error('Please enter an email address.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      await sendInvite({}, { email, role });
      toast.success('Invitation sent successfully.');
      setEmail('');
      setRole('Member');
      onInviteSent();
    } catch (error) {
      toast.error('Failed to send invitation. Please try again.');
    }
  };

  return (
    <InviteFormContainer onSubmit={handleSubmit}>
      <InviteField>
        <InviteLabel>Email</InviteLabel>
        <InviteInput
          type="email"
          placeholder="user@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isUpdating}
        />
      </InviteField>

      <InviteField>
        <InviteLabel>Role</InviteLabel>
        <InviteSelect
          value={role}
          onChange={e => setRole(e.target.value)}
          disabled={isUpdating}
        >
          {ROLE_OPTIONS.map(r => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </InviteSelect>
      </InviteField>

      <InviteButton
        type="submit"
        variant="primary"
        isWorking={isUpdating}
        disabled={isUpdating}
      >
        Send Invite
      </InviteButton>
    </InviteFormContainer>
  );
};

InviteForm.propTypes = propTypes;

export default InviteForm;
