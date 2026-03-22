import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';
import { IssueTypeCopy, IssuePriorityCopy } from 'shared/constants/issues';

import UserWorkloadTooltip from '../UserWorkloadTooltip';
import {
  Container,
  UserCard,
  UserHeader,
  UserInfo,
  UserName,
  UserEmail,
  WorkloadBar,
  WorkloadFill,
  WorkloadStats,
  TasksSection,
  SectionTitle,
  TaskItem,
  TaskTitle,
  TaskMeta,
  InteractionsSection,
  InteractionItem,
  InteractionUser,
  InteractionBadge,
  BlockersSection,
  BlockerItem,
  BlockerTitle,
  BlockerDependency,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  currentUserId: PropTypes.number,
};

const defaultProps = {
  currentUserId: null,
};

const TeamView = ({ project, filters, currentUserId }) => {
  const { users, issues } = project;

  const getUserTasks = userId => {
    let userIssues = issues.filter(issue => issue.userIds.includes(userId));
    
    // Apply filters
    if (filters.searchTerm) {
      userIssues = userIssues.filter(issue =>
        issue.title.toLowerCase().includes(filters.searchTerm.toLowerCase()),
      );
    }
    if (filters.userIds.length > 0) {
      userIssues = userIssues.filter(issue =>
        issue.userIds.some(id => filters.userIds.includes(id)),
      );
    }
    
    return userIssues;
  };

  const getUserInteractions = userId => {
    const userTasks = getUserTasks(userId);
    const interactions = {};

    userTasks.forEach(task => {
      task.userIds.forEach(collaboratorId => {
        if (collaboratorId !== userId) {
          if (!interactions[collaboratorId]) {
            interactions[collaboratorId] = {
              user: users.find(u => u.id === collaboratorId),
              count: 0,
            };
          }
          interactions[collaboratorId].count += 1;
        }
      });
    });

    return Object.values(interactions).sort((a, b) => b.count - a.count);
  };

  const getUserBlockers = userId => {
    const userTasks = getUserTasks(userId);
    const blockers = [];

    userTasks.forEach(task => {
      if (task.dependencies && task.dependencies.length > 0) {
        task.dependencies.forEach(depId => {
          const dependentTask = issues.find(i => i.id === depId);
          if (dependentTask && dependentTask.status !== 'done') {
            blockers.push({
              task,
              dependentTask,
              blockedBy: dependentTask.userIds
                .map(id => users.find(u => u.id === id))
                .filter(Boolean),
            });
          }
        });
      }
    });

    return blockers;
  };

  const calculateWorkload = userId => {
    const userTasks = issues.filter(issue => issue.userIds.includes(userId));
    const totalAssigned = userTasks.reduce((sum, task) => sum + (task.timeRemaining || 0), 0);
    const totalCapacity = 40;
    const percentage = Math.min((totalAssigned / totalCapacity) * 100, 100);
    
    return { totalAssigned, totalCapacity, percentage };
  };

  const filteredUsers = filters.myOnly && currentUserId
    ? users.filter(u => u.id === currentUserId)
    : users;

  return (
    <Container>
      {filteredUsers.map(user => {
        const userTasks = getUserTasks(user.id);
        const workload = calculateWorkload(user.id);
        const interactions = getUserInteractions(user.id);
        const blockers = getUserBlockers(user.id);
        const allUserTasks = issues.filter(issue => issue.userIds.includes(user.id));

        return (
          <UserCard key={user.id}>
            <UserHeader>
              <UserWorkloadTooltip user={user} userTasks={allUserTasks}>
                <Avatar avatarUrl={user.avatarUrl} name={user.name} size={48} />
              </UserWorkloadTooltip>
              <UserInfo>
                <UserName>{user.name}</UserName>
                <UserEmail>{user.email}</UserEmail>
              </UserInfo>
            </UserHeader>

            <WorkloadBar>
              <WorkloadFill percentage={workload.percentage} isOverloaded={workload.percentage >= 100} />
            </WorkloadBar>
            <WorkloadStats>
              {workload.totalAssigned}h / {workload.totalCapacity}h
              {workload.percentage >= 100 && ' (Overloaded)'}
            </WorkloadStats>

            <TasksSection>
              <SectionTitle>Active Tasks ({userTasks.length})</SectionTitle>
              {userTasks.slice(0, 5).map(task => (
                <TaskItem key={task.id}>
                  <TaskTitle>{task.title}</TaskTitle>
                  <TaskMeta>
                    {IssueTypeCopy[task.type]} • {IssuePriorityCopy[task.priority]} • {task.timeSpent}h / {task.estimate}h
                  </TaskMeta>
                </TaskItem>
              ))}
              {userTasks.length > 5 && (
                <TaskMeta>+ {userTasks.length - 5} more tasks</TaskMeta>
              )}
            </TasksSection>

            {interactions.length > 0 && (
              <InteractionsSection>
                <SectionTitle>Collaborating With</SectionTitle>
                {interactions.map(({ user: collaborator, count }) => (
                  <InteractionItem key={collaborator.id}>
                    <Avatar avatarUrl={collaborator.avatarUrl} name={collaborator.name} size={28} />
                    <InteractionUser>{collaborator.name}</InteractionUser>
                    <InteractionBadge>{count} {count === 1 ? 'task' : 'tasks'}</InteractionBadge>
                  </InteractionItem>
                ))}
              </InteractionsSection>
            )}

            {blockers.length > 0 && (
              <BlockersSection>
                <SectionTitle>Blocked By ({blockers.length})</SectionTitle>
                {blockers.map(({ task, dependentTask, blockedBy }, idx) => (
                  <BlockerItem key={idx}>
                    <BlockerTitle>{task.title}</BlockerTitle>
                    <BlockerDependency>
                      Waiting on: {dependentTask.title}
                      {blockedBy.length > 0 && (
                        <span style={{ marginLeft: '8px' }}>
                          ({blockedBy.map(u => u.name).join(', ')})
                        </span>
                      )}
                    </BlockerDependency>
                  </BlockerItem>
                ))}
              </BlockersSection>
            )}
          </UserCard>
        );
      })}
    </Container>
  );
};

TeamView.propTypes = propTypes;
TeamView.defaultProps = defaultProps;

export default TeamView;
