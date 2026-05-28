import React, { useState } from 'react';
import PropTypes from 'prop-types';

import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Avatar, Button, ConfirmModal } from 'shared/components';

import {
  MemberRow as MemberRowContainer,
  MemberAvatar,
  MemberInfo,
  MemberName,
  MemberEmail,
  MemberRole,
  MemberRoleSelect,
  MemberRoleBadge,
  MemberActions,
  RemoveButton,
} from '../Styles';

const propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string,
    }).isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  isOwner: PropTypes.bool.isRequired,
  canRemove: PropTypes.bool.isRequired,
  onMemberUpdate: PropTypes.func.isRequired,
};

const ROLE_OPTIONS = ['Owner', 'Admin', 'Member', 'Viewer'];

const MemberRow = ({ member, isOwner, canRemove, onMemberUpdate }) => {
  const [{ isUpdating: isChangingRole }, changeRole] = useApi.put('/project-member/:memberId');
  const [{ isUpdating: isRemoving }, removeMember] = useApi.delete('/project-member/:memberId');
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const handleRoleChange = async newRole => {
    if (newRole === member.role) return;

    try {
      await changeRole({ memberId: member.id }, { role: newRole });
      toast.success('Member role updated successfully.');
      onMemberUpdate();
    } catch (error) {
      toast.error('Failed to update member role.');
    }
  };

  const handleRemove = async ({ close }) => {
    try {
      await removeMember({ memberId: member.id });
      close();
      toast.success('Member removed from project.');
      onMemberUpdate();
    } catch (error) {
      toast.error('Failed to remove member.');
    }
  };

  return (
    <>
      <MemberRowContainer>
        <MemberAvatar
          avatarUrl={member.user.avatarUrl}
          name={member.user.name}
          size={32}
        />
        <MemberInfo>
          <MemberName>{member.user.name}</MemberName>
          <MemberEmail>{member.user.email}</MemberEmail>
        </MemberInfo>
        <MemberRole>
          {isOwner ? (
            <MemberRoleBadge>{member.role}</MemberRoleBadge>
          ) : (
            <MemberRoleSelect
              value={member.role}
              onChange={e => handleRoleChange(e.target.value)}
              disabled={isChangingRole}
            >
              {ROLE_OPTIONS.map(role => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </MemberRoleSelect>
          )}
        </MemberRole>
        <MemberActions>
          {canRemove && (
            <RemoveButton
              variant="secondary"
              onClick={() => setShowRemoveModal(true)}
              disabled={isRemoving}
            >
              Remove
            </RemoveButton>
          )}
        </MemberActions>
      </MemberRowContainer>

      {showRemoveModal && (
        <ConfirmModal
          variant="danger"
          title="Remove Member?"
          message={`Are you sure you want to remove ${member.user.name} from this project?`}
          confirmText="Remove"
          cancelText="Cancel"
          onConfirm={handleRemove}
          renderLink={({ openModal }) => (
            <button
              style={{ display: 'none' }}
              onClick={openModal}
              data-testid="remove-member-button"
            />
          )}
        />
      )}
    </>
  );
};

MemberRow.propTypes = propTypes;

export default MemberRow;
