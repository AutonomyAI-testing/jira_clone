import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Tooltip } from 'shared/components';

import {
  Container,
  UserItem,
  AvatarWrapper,
  CapacityRing,
  UserName,
  CapacityLabel,
  SectionHeading,
  TooltipContentInner,
  TooltipTitle,
  TaskList,
  TaskItem,
  NoTasksMessage,
  TimeEstimate,
  TimeBar,
  TimeBarProgress,
  TimeInfo,
} from './Styles';

const propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string,
    }),
  ).isRequired,
  selectedUserIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  onUserSelect: PropTypes.func.isRequired,
  projectIssues: PropTypes.array,
};

const defaultProps = {
  projectIssues: [],
};

const AssigneeSelector = ({ users, selectedUserIds, onUserSelect, projectIssues }) => {

  const getUserCapacity = userId => {
    if (!projectIssues || projectIssues.length === 0) {
      return 0;
    }
    const assignedIssues = projectIssues.filter(issue => issue.userIds && issue.userIds.includes(userId));
    return assignedIssues.length;
  };

  const getUserTimeEstimate = userId => {
    if (!projectIssues || projectIssues.length === 0) {
      return { totalEstimate: 0, timeSpent: 0, timeRemaining: 0 };
    }
    const assignedIssues = projectIssues.filter(issue => issue.userIds && issue.userIds.includes(userId));
    const totalEstimate = assignedIssues.reduce((sum, issue) => sum + (issue.estimate || 0), 0);
    const timeSpent = assignedIssues.reduce((sum, issue) => sum + (issue.timeSpent || 0), 0);
    const timeRemaining = assignedIssues.reduce((sum, issue) => sum + (issue.timeRemaining || issue.estimate || 0), 0);
    return { totalEstimate, timeSpent, timeRemaining };
  };

  const getUserAssignedIssues = userId => {
    if (!projectIssues || projectIssues.length === 0) {
      return [];
    }
    return projectIssues.filter(issue => issue.userIds && issue.userIds.includes(userId));
  };

  const sortedUsers = [...users].sort((a, b) => {
    const capacityA = getUserCapacity(a.id);
    const capacityB = getUserCapacity(b.id);
    return capacityA - capacityB;
  });

  const maxCapacity = Math.max(...sortedUsers.map(u => getUserCapacity(u.id)), 1);

  const getCapacityPercentage = userId => {
    const capacity = getUserCapacity(userId);
    if (maxCapacity === 0) return 0;
    return (capacity / maxCapacity) * 100;
  };

  const handleUserClick = userId => {
    const isSelected = selectedUserIds.includes(userId);
    if (isSelected) {
      onUserSelect(selectedUserIds.filter(id => id !== userId));
    } else {
      onUserSelect([...selectedUserIds, userId]);
    }
  };

  return (
    <div>
      <SectionHeading>Assignees</SectionHeading>
      <Container>
        {sortedUsers.map((user, index) => {
          const isSelected = selectedUserIds.includes(user.id);
          const capacity = getUserCapacity(user.id);
          const capacityPercentage = getCapacityPercentage(user.id);

          const assignedIssues = getUserAssignedIssues(user.id);

          const timeData = getUserTimeEstimate(user.id);
          const progressPercentage = timeData.totalEstimate > 0 
            ? Math.min((timeData.timeSpent / timeData.totalEstimate) * 100, 100) 
            : 0;

          return (
            <Tooltip
              key={user.id}
              width={300}
              placement="top"
              renderLink={({ ref, onMouseEnter, onMouseLeave }) => (
                <UserItem 
                  ref={ref}
                  onClick={() => handleUserClick(user.id)} 
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  isSelected={isSelected}
                  index={index}
                >
                  <AvatarWrapper>
                    <CapacityRing capacityPercentage={capacityPercentage} isSelected={isSelected}>
                      <Avatar avatarUrl={user.avatarUrl} name={user.name} size={56} />
                    </CapacityRing>
                  </AvatarWrapper>
                  <UserName>{user.name}</UserName>
                  <CapacityLabel>{capacity} {capacity === 1 ? 'task' : 'tasks'}</CapacityLabel>
                </UserItem>
              )}
              renderContent={() => (
                <TooltipContentInner>
                  {assignedIssues.length === 0 ? (
                    <NoTasksMessage>No tasks assigned</NoTasksMessage>
                  ) : (
                    <div>
                      <TooltipTitle>{user.name}</TooltipTitle>
                      {timeData.totalEstimate > 0 && (
                        <TimeEstimate>
                          <TimeBar>
                            <TimeBarProgress progress={progressPercentage} />
                          </TimeBar>
                          <TimeInfo>{timeData.totalEstimate}h</TimeInfo>
                        </TimeEstimate>
                      )}
                      <TooltipTitle>Current tasks:</TooltipTitle>
                      <TaskList>
                        {assignedIssues.map((issue, taskIndex) => (
                          <TaskItem key={issue.id} index={taskIndex}>{issue.title}</TaskItem>
                        ))}
                      </TaskList>
                    </div>
                  )}
                </TooltipContentInner>
              )}
            />
          );
        })}
      </Container>
    </div>
  );
};

AssigneeSelector.propTypes = propTypes;
AssigneeSelector.defaultProps = defaultProps;

export default AssigneeSelector;
