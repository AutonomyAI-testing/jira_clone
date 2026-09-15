import React from 'react';
import PropTypes from 'prop-types';

import toast from 'shared/utils/toast';
import { Button, ConfirmModal } from 'shared/components';

import { Container, DangerCard, CardLeft, CardTitle, CardDescription, CardRight } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectSettingsDangerZone = ({ project }) => {
  const handleDeleteProject = () => {
    toast.warning('Project deletion is coming soon.');
  };

  return (
    <Container>
      <DangerCard>
        <CardLeft>
          <CardTitle>Delete this project</CardTitle>
          <CardDescription>
            This action cannot be undone. All issues, comments, and project data will be permanently
            deleted.
          </CardDescription>
        </CardLeft>
        <CardRight>
          <ConfirmModal
            title="Delete project"
            message={`Are you sure you want to delete "${project.name}"? This action cannot be undone.`}
            confirmText="Delete Project"
            variant="danger"
            onConfirm={handleDeleteProject}
            renderLink={({ open }) => (
              <Button variant="danger" onClick={open}>
                Delete Project
              </Button>
            )}
          />
        </CardRight>
      </DangerCard>
    </Container>
  );
};

ProjectSettingsDangerZone.propTypes = propTypes;

export default ProjectSettingsDangerZone;
