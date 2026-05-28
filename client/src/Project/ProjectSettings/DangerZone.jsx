import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useCurrentUser from 'shared/hooks/currentUser';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Icon, ConfirmModal } from 'shared/components';

import {
  SectionHeading,
  DangerContainer,
  DangerWarning,
  DangerAction,
  DangerActionTitle,
  DangerActionDescription,
  DangerButton,
} from './Styles';

const propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.shape({
          id: PropTypes.string,
        }),
        role: PropTypes.string,
      }),
    ),
  }).isRequired,
  onProjectDelete: PropTypes.func.isRequired,
};

const DangerZone = ({ project, onProjectDelete }) => {
  const { currentUserId } = useCurrentUser();
  const [{ isUpdating: isDeleting }, deleteProject] = useApi.delete('/project/:projectId');
  const [{ isUpdating: isLeaving }, leaveProject] = useApi.post('/project-member/leave');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  // Check if current user is owner
  const ownerMember = (project.members || []).find(m => m.role === 'Owner');
  const isOwner = currentUserId === (ownerMember && ownerMember.user && ownerMember.user.id);

  const handleDeleteProject = async ({ close }) => {
    if (confirmText !== project.name) {
      toast.error('Project name does not match. Please try again.');
      return;
    }

    try {
      await deleteProject({ projectId: project.id });
      close();
      toast.success('Project deleted successfully.');
      onProjectDelete();
    } catch (error) {
      toast.error('Failed to delete project.');
    }
  };

  const handleLeaveProject = async ({ close }) => {
    try {
      await leaveProject({});
      close();
      toast.success("You've left the project.");
      onProjectDelete();
    } catch (error) {
      toast.error('Failed to leave project.');
    }
  };

  return (
    <>
      <SectionHeading>Danger Zone</SectionHeading>

      <DangerContainer>
        <DangerWarning>
          <Icon type="help" size={18} />
          <span>Dangerous operations below. Be careful!</span>
        </DangerWarning>

        <DangerAction>
          <DangerActionTitle>Delete Project</DangerActionTitle>
          <DangerActionDescription>
            Once you delete a project, there is no going back. Please be certain.
          </DangerActionDescription>
          <DangerButton
            variant="danger"
            onClick={() => setShowDeleteModal(true)}
            disabled={isDeleting}
          >
            Delete this project
          </DangerButton>
        </DangerAction>

        {!isOwner && (
          <>
            <DangerAction>
              <DangerActionTitle>Leave Project</DangerActionTitle>
              <DangerActionDescription>
                You will lose access to this project and all its issues.
              </DangerActionDescription>
              <DangerButton
                variant="danger"
                onClick={() => setShowLeaveModal(true)}
                disabled={isLeaving}
              >
                Leave project
              </DangerButton>
            </DangerAction>
          </>
        )}
      </DangerContainer>

      {showDeleteModal && (
        <ConfirmModal
          variant="danger"
          title="Delete Project?"
          message={
            <>
              <p>This action cannot be undone. All data will be permanently lost.</p>
              <p style={{ marginTop: '16px', fontSize: '13px' }}>
                <strong>Type the project name to confirm:</strong>
              </p>
              <input
                type="text"
                placeholder={project.name}
                value={confirmText}
                onChange={e => setConfirmText(e.target.value)}
                style={{
                  width: '100%',
                  marginTop: '8px',
                  padding: '6px 8px',
                  border: '1px solid #dfe1e6',
                  borderRadius: '3px',
                  fontSize: '13px',
                }}
              />
            </>
          }
          confirmText={confirmText === project.name ? 'Delete' : 'Delete'}
          cancelText="Cancel"
          onConfirm={handleDeleteProject}
          renderLink={({ openModal }) => (
            <button
              style={{ display: 'none' }}
              onClick={openModal}
              data-testid="delete-project-button"
            />
          )}
        />
      )}

      {showLeaveModal && (
        <ConfirmModal
          variant="danger"
          title="Leave Project?"
          message={`Are you sure you want to leave "${project.name}"? You won't be able to access this project anymore.`}
          confirmText="Leave"
          cancelText="Cancel"
          onConfirm={handleLeaveProject}
          renderLink={({ openModal }) => (
            <button
              style={{ display: 'none' }}
              onClick={openModal}
              data-testid="leave-project-button"
            />
          )}
        />
      )}
    </>
  );
};

DangerZone.propTypes = propTypes;

export default DangerZone;
