import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from 'shared/components/Tooltip';
import Avatar from 'shared/components/Avatar';
import { IssueTypeCopy } from 'shared/constants/issues';

import { TooltipContent, UserHeader, UserName, WorkloadSummary, TaskList, TaskItem, TaskTitle, TaskHours, AvailabilityRow, AvailabilityLabel, AvailabilityValue, AvailableHours } from './Styles';

const propTypes = {
  user: PropTypes.object.isRequired,
  userTasks: PropTypes.array.isRequired,
  totalCapacityHours: PropTypes.number,
  children: PropTypes.node,
};

const defaultProps = {
  totalCapacityHours: 40,
  children: null,
};

const UserWorkloadTooltip = ({ user, userTasks, totalCapacityHours, children }) => {
  const totalAssignedHours = userTasks.reduce((sum, task) => sum + (task.timeRemaining || 0), 0);
  const totalCompletedHours = userTasks.reduce((sum, task) => sum + (task.timeSpent || 0), 0);
  const availableHours = totalCapacityHours - totalAssignedHours;

  return (
    <Tooltip
      width={320}
      placement="bottom"
      renderLink={({ ref, onClick }) =>
        children ? (
          <div ref={ref} onClick={onClick}>
            {children}
          </div>
        ) : (
          <div ref={ref} onClick={onClick}>
            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={32} />
          </div>
        )
      }
      renderContent={() => (
        <TooltipContent>
          <UserHeader>
            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={40} />
            <UserName>{user.name}</UserName>
          </UserHeader>
          
          <WorkloadSummary>
            <AvailabilityRow>
              <AvailabilityLabel>Assigned Hours:</AvailabilityLabel>
              <AvailabilityValue>{totalAssignedHours}h</AvailabilityValue>
            </AvailabilityRow>
            <AvailabilityRow>
              <AvailabilityLabel>Completed Hours:</AvailabilityLabel>
              <AvailabilityValue>{totalCompletedHours}h</AvailabilityValue>
            </AvailabilityRow>
            <AvailabilityRow>
              <AvailabilityLabel>Capacity:</AvailabilityLabel>
              <AvailabilityValue>{totalCapacityHours}h/week</AvailabilityValue>
            </AvailabilityRow>
            <AvailabilityRow highlight>
              <AvailabilityLabel>Available:</AvailabilityLabel>
              <AvailableHours isOverloaded={availableHours < 0}>
                {availableHours}h
              </AvailableHours>
            </AvailabilityRow>
          </WorkloadSummary>

          {userTasks.length > 0 && (
            <TaskList>
              {userTasks.map(task => (
                <TaskItem key={task.id}>
                  <TaskTitle>
                    {task.title}
                    <span style={{ fontSize: '11px', color: '#626F86', marginLeft: '6px' }}>
                      ({IssueTypeCopy[task.type]})
                    </span>
                  </TaskTitle>
                  <TaskHours>
                    {task.timeSpent}h / {task.estimate}h
                  </TaskHours>
                </TaskItem>
              ))}
            </TaskList>
          )}
        </TooltipContent>
      )}
    />
  );
};

UserWorkloadTooltip.propTypes = propTypes;
UserWorkloadTooltip.defaultProps = defaultProps;

export default UserWorkloadTooltip;
