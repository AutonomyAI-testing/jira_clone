import React from 'react';
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
  TooltipContent,
  TooltipTitle,
  TaskList,
  TaskItem,
  NoTasksMessage,
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
        {sortedUsers.map(user => {
          const isSelected = selectedUserIds.includes(user.id);
          const capacity = getUserCapacity(user.id);
          const capacityPercentage = getCapacityPercentage(user.id);

          const assignedIssues = getUserAssignedIssues(user.id);

          return (
            <Tooltip
              key={user.id}
              placement="top"
              width={300}
              renderLink={({ ref, onClick }) => (
                <UserItem 
                  ref={ref} 
                  onClick={(e) => {
                    onClick(e);
                    handleUserClick(user.id);
                  }} 
                  isSelected={isSelected}
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
                <TooltipContent>
                  {assignedIssues.length === 0 ? (
                    <NoTasksMessage>No tasks assigned</NoTasksMessage>
                  ) : (
                    <div>
                      <TooltipTitle>Current tasks:</TooltipTitle>
                      <TaskList>
                        {assignedIssues.map(issue => (
                          <TaskItem key={issue.id}>{issue.title}</TaskItem>
                        ))}
                      </TaskList>
                    </div>
                  )}
                </TooltipContent>
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
