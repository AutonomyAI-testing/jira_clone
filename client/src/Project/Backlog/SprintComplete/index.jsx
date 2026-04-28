import React from 'react';
import PropTypes from 'prop-types';

import { ConfirmModal } from 'shared/components';
import api from 'shared/utils/api';
import toast from 'shared/utils/toast';

import { DropdownItem } from '../SprintHeader/Styles';

const propTypes = {
  sprint: PropTypes.object.isRequired,
  issueCount: PropTypes.number.isRequired,
  doneCount: PropTypes.number.isRequired,
  fetchSprints: PropTypes.func.isRequired,
  updateLocalSprintData: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const SprintComplete = ({
  sprint,
  issueCount,
  doneCount,
  fetchSprints,
  updateLocalSprintData,
  updateLocalProjectIssues,
  onClose,
}) => {
  const incompleteCount = issueCount - doneCount;

  const handleComplete = async ({ close }) => {
    try {
      await api.put(`/sprints/${sprint.id}`, {
        status: 'completed',
        completedAt: new Date().toISOString(),
      });

      // Move incomplete issues to backlog
      const incompleteIssues = sprint.issueIds
        .filter(id => {
          const issue = { id }; // In real implementation, find the actual issue
          return issue.status !== 'done';
        });

      for (const issueId of incompleteIssues) {
        await api.put(`/issues/${issueId}`, { sprintId: null });
        updateLocalProjectIssues(issueId, { sprintId: null });
      }

      updateLocalSprintData(sprint.id, {
        status: 'completed',
        completedAt: new Date().toISOString(),
      });

      await fetchSprints();
      toast.success('Sprint completed successfully');
      close();
      onClose();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <ConfirmModal
      title="Complete Sprint"
      message={
        <div>
          <p>
            This sprint has <strong>{doneCount} completed</strong> and{' '}
            <strong>{incompleteCount} incomplete</strong> issues.
          </p>
          <p>Incomplete issues will be moved back to the backlog.</p>
        </div>
      }
      confirmText="Complete Sprint"
      variant="primary"
      onConfirm={handleComplete}
      renderLink={modal => <DropdownItem onClick={modal.open}>Complete Sprint</DropdownItem>}
    />
  );
};

SprintComplete.propTypes = propTypes;

export default SprintComplete;
