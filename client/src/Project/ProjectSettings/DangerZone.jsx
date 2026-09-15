import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal, Button, Icon } from 'shared/components';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import history from 'browserHistory';

import {
  DangerZoneSection,
  DangerHeading,
  DangerDescription,
  DangerButton,
  DeleteModalCont,
  DeleteModalTitle,
  DeleteModalWarning,
  DeleteModalInstruction,
  DeleteModalInput,
  DeleteModalActions,
} from './Styles';

const propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const DangerZone = ({
  project,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmName, setConfirmName] = useState('');
  const [{ isDeleting }, deleteProject] = useApi.delete('/project');

  const handleDeleteConfirm = async () => {
    try {
      await deleteProject();
      toast.success('Project has been deleted.');
      history.push('/');
    } catch (error) {
      toast.error(error.message || 'Failed to delete project.');
    }
  };

  const isDeleteDisabled = confirmName !== project.name;

  return (
    <React.Fragment>
      <DangerZoneSection>
        <DangerHeading>
          <Icon type="help" size={18} />
          Danger Zone
        </DangerHeading>
        <DangerDescription>
          Once you delete a project, there is no going back. Please be certain.
        </DangerDescription>
        <DangerButton
          variant="danger"
          onClick={() => {
            setIsModalOpen(true);
            setConfirmName('');
          }}
        >
          Delete this project
        </DangerButton>
      </DangerZoneSection>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        renderContent={({ close }) => (
          <DeleteModalCont>
            <DeleteModalTitle>Delete project?</DeleteModalTitle>
            <DeleteModalWarning>
              This action cannot be undone. This will permanently delete the <strong>{project.name}</strong> project,
              including all issues and comments.
            </DeleteModalWarning>
            <DeleteModalInstruction>
              Please type the project name to confirm:
            </DeleteModalInstruction>
            <DeleteModalInput
              type="text"
              placeholder={project.name}
              value={confirmName}
              onChange={e => setConfirmName(e.target.value)}
              autoFocus
            />
            <DeleteModalActions>
              <Button variant="secondary" onClick={close}>
                Cancel
              </Button>
              <Button
                variant="danger"
                disabled={isDeleteDisabled}
                isWorking={isDeleting}
                onClick={handleDeleteConfirm}
              >
                Delete this project
              </Button>
            </DeleteModalActions>
          </DeleteModalCont>
        )}
      />
    </React.Fragment>
  );
};

DangerZone.propTypes = propTypes;

export default DangerZone;
