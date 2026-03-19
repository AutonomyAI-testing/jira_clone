import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  SectionLabel,
  AvatarsContainer,
  AvatarWrapper,
  CircularProgress,
  Circle,
  StyledAvatar,
  UserName,
  WorkloadBadge,
} from './Styles';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  selectedUserIds: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  getUserWorkload: PropTypes.func.isRequired,
};

const AssigneeSelector = ({ projectUsers, selectedUserIds, onSelect, getUserWorkload }) => {
  const toggleUser = userId => {
    if (selectedUserIds.includes(userId)) {
      onSelect(selectedUserIds.filter(id => id !== userId));
    } else {
      onSelect([...selectedUserIds, userId]);
    }
  };

  const calculateWorkloadPercentage = workload => {
    // If no tasks, they're free (0%)
    if (workload.activeCount === 0) {
      return 0;
    }
    
    // Calculate workload based on active tasks and time estimate
    // Cap at 100% to keep the circle from over-filling
    const taskWeight = workload.activeCount * 20; // Each task adds 20%
    const timeWeight = Math.min(workload.totalEstimate / 10, 50); // Max 50% from time
    return Math.min(taskWeight + timeWeight, 100);
  };

  const getWorkloadStatus = workload => {
    const percentage = calculateWorkloadPercentage(workload);
    if (percentage === 0) return 'free';
    if (percentage < 60) return 'light';
    if (percentage < 85) return 'moderate';
    return 'busy';
  };

  return (
    <Container>
      <SectionLabel>Assignees</SectionLabel>
      <AvatarsContainer>
        {projectUsers.map(user => {
          const workload = getUserWorkload(user.id);
          const workloadPercentage = calculateWorkloadPercentage(workload);
          const workloadStatus = getWorkloadStatus(workload);
          const isSelected = selectedUserIds.includes(user.id);
          const isBusy = workloadStatus === 'busy';

          const avatarElement = (
            <AvatarWrapper
              key={user.id}
              isSelected={isSelected}
              workloadStatus={workloadStatus}
              onClick={() => toggleUser(user.id)}
              title={`${user.name}${workload.activeCount === 0 ? ' - No active tasks' : ` - ${workload.activeCount} ${workload.activeCount === 1 ? 'task' : 'tasks'}${workload.totalEstimate > 0 ? ` · ${workload.totalEstimate}h remaining` : ''}`}${isBusy ? ' ⚠️ Consider choosing someone with less workload' : ''}`}
            >
              <CircularProgress workloadPercentage={workloadPercentage} workloadStatus={workloadStatus}>
                <Circle />
                <StyledAvatar avatarUrl={user.avatarUrl} name={user.name} size={56} />
              </CircularProgress>
              <UserName>{user.name.split(' ')[0]}</UserName>
              {workloadStatus === 'free' && <WorkloadBadge>Free</WorkloadBadge>}
            </AvatarWrapper>
          );

          // Return the avatar element directly - tooltip on hover is handled by title attribute
          return avatarElement;
        })}
      </AvatarsContainer>
    </Container>
  );
};

AssigneeSelector.propTypes = propTypes;

export default AssigneeSelector;
