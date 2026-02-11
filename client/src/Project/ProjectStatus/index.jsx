import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IssueStatus, IssueStatusCopy } from 'shared/constants/issues';
import toast from 'shared/utils/toast';
import { Breadcrumbs, Button, Input, Icon } from 'shared/components';

import {
  PageContainer,
  PageHeading,
  PageDescription,
  StatusList,
  StatusItem,
  StatusInfo,
  StatusBadge,
  StatusName,
  StatusDescription,
  StatusActions,
  EmptyState,
  AddStatusSection,
  AddStatusForm,
  FormRow,
  FormLabel,
  FormActions,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectStatus = ({ project }) => {
  const [isAddingStatus, setIsAddingStatus] = useState(false);
  const [newStatusName, setNewStatusName] = useState('');
  const [newStatusDescription, setNewStatusDescription] = useState('');

  const statuses = Object.keys(IssueStatus).map(key => ({
    key,
    value: IssueStatus[key],
    label: IssueStatusCopy[IssueStatus[key]],
  }));

  const handleAddStatus = () => {
    if (!newStatusName.trim()) {
      toast.error('Status name is required');
      return;
    }

    // This would normally call an API endpoint
    toast.success('Status management feature coming soon!');
    setNewStatusName('');
    setNewStatusDescription('');
    setIsAddingStatus(false);
  };

  const handleCancelAdd = () => {
    setNewStatusName('');
    setNewStatusDescription('');
    setIsAddingStatus(false);
  };

  const handleEditStatus = (statusKey) => {
    toast.info(`Edit functionality for ${IssueStatusCopy[IssueStatus[statusKey]]} coming soon!`);
  };

  const handleDeleteStatus = (statusKey) => {
    toast.error(`Delete functionality for ${IssueStatusCopy[IssueStatus[statusKey]]} coming soon!`);
  };

  return (
    <PageContainer>
      <Breadcrumbs items={['Projects', project.name, 'Status Management']} />
      
      <PageHeading>Issue Status Management</PageHeading>
      <PageDescription>
        Manage the different statuses that issues can have in your project. 
        These statuses represent the workflow stages of your team.
      </PageDescription>

      <StatusList>
        {statuses.map((status, index) => (
          <StatusItem key={status.key}>
            <StatusInfo>
              <StatusBadge index={index}>
                <Icon type="component" size={14} />
              </StatusBadge>
              <div>
                <StatusName>{status.label}</StatusName>
                <StatusDescription>
                  {getStatusDescription(status.key)}
                </StatusDescription>
              </div>
            </StatusInfo>
            <StatusActions>
              {status.key === 'INREVIEW' && (
                <span style={{ 
                  fontSize: '12px', 
                  color: '#5E6C84', 
                  fontWeight: '500',
                  background: '#DFE1E6',
                  padding: '2px 8px',
                  borderRadius: '3px',
                  marginRight: '8px'
                }}>
                  NEW
                </span>
              )}
              <Button
                variant="empty"
                icon="settings"
                iconSize={16}
                onClick={() => handleEditStatus(status.key)}
              />
              <Button
                variant="empty"
                icon="trash"
                iconSize={16}
                onClick={() => handleDeleteStatus(status.key)}
              />
            </StatusActions>
          </StatusItem>
        ))}
      </StatusList>

      <AddStatusSection>
        {!isAddingStatus ? (
          <Button 
            variant="secondary" 
            icon="plus"
            onClick={() => setIsAddingStatus(true)}
          >
            Add Custom Status
          </Button>
        ) : (
          <AddStatusForm>
            <FormRow>
              <div style={{ flex: 1 }}>
                <FormLabel>Status Name</FormLabel>
                <Input
                  value={newStatusName}
                  onChange={setNewStatusName}
                  placeholder="e.g., Code Review, Testing, Deployment"
                />
              </div>
            </FormRow>
            <FormRow>
              <div style={{ flex: 1 }}>
                <FormLabel>Description (Optional)</FormLabel>
                <Input
                  value={newStatusDescription}
                  onChange={setNewStatusDescription}
                  placeholder="Describe what this status represents"
                />
              </div>
            </FormRow>
            <FormActions>
              <Button variant="primary" onClick={handleAddStatus}>
                Add Status
              </Button>
              <Button variant="empty" onClick={handleCancelAdd}>
                Cancel
              </Button>
            </FormActions>
          </AddStatusForm>
        )}
      </AddStatusSection>

      {statuses.length === 0 && (
        <EmptyState>
          <Icon type="issues" size={48} />
          <p>No statuses configured yet.</p>
        </EmptyState>
      )}
    </PageContainer>
  );
};

const getStatusDescription = (statusKey) => {
  const descriptions = {
    BACKLOG: 'Issues that are not yet prioritized or scheduled for development',
    SELECTED: 'Issues that have been selected and are ready to be worked on',
    INPROGRESS: 'Issues that are currently being worked on by the team',
    INREVIEW: 'Issues that are under review before being marked as complete',
    DONE: 'Issues that have been completed and delivered',
  };
  return descriptions[statusKey] || 'No description available';
};

ProjectStatus.propTypes = propTypes;

export default ProjectStatus;
