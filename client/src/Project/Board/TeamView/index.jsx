import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Avatar, IssueTypeIcon, IssuePriorityIcon, Select, TextEditor } from 'shared/components';
import { IssueTypeCopy, IssuePriorityCopy, IssueStatus, IssueStatusCopy, IssueType, IssuePriority } from 'shared/constants/issues';
import { KeyCodes } from 'shared/constants/keyCodes';
import api from 'shared/utils/api';
import { is, generateErrors } from 'shared/utils/validation';

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
  EditTaskItem,
  EditLabel,
  EditInput,
  EditActions,
  SaveButton,
  CancelButton,
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
  const [editingIssueId, setEditingIssueId] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [titleError, setTitleError] = useState(null);
  const editItemRef = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
      if (editingIssueId && editItemRef.current && !editItemRef.current.contains(event.target)) {
        handleCancelEdit();
      }
    };

    if (editingIssueId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editingIssueId]);

  const handleTaskDoubleClick = (event, task) => {
    event.preventDefault();
    event.stopPropagation();
    setEditingIssueId(task.id);
    setEditedFields({
      title: task.title,
      description: task.description || '',
      type: task.type,
      status: task.status,
      priority: task.priority,
      productArea: task.productArea || '',
    });
    setTitleError(null);
  };

  const handleSaveEdit = () => {
    const issue = issues.find(i => i.id === editingIssueId);
    if (!issue) return;

    setTitleError(null);

    const errors = generateErrors({ title: editedFields.title }, { title: [is.required(), is.maxLength(200)] });

    if (errors.title) {
      setTitleError(errors.title);
      return;
    }

    const updatedFields = {};
    if (editedFields.title !== issue.title) updatedFields.title = editedFields.title;
    if (editedFields.description !== (issue.description || '')) updatedFields.description = editedFields.description;
    if (editedFields.type !== issue.type) updatedFields.type = editedFields.type;
    if (editedFields.status !== issue.status) updatedFields.status = editedFields.status;
    if (editedFields.priority !== issue.priority) updatedFields.priority = editedFields.priority;
    if (editedFields.productArea !== (issue.productArea || '')) updatedFields.productArea = editedFields.productArea;

    if (Object.keys(updatedFields).length > 0) {
      api.optimisticUpdate(`/issues/${issue.id}`, {
        updatedFields,
        currentFields: issue,
        setLocalData: () => {},
      });
    }

    setEditingIssueId(null);
    setEditedFields({});
  };

  const handleCancelEdit = () => {
    setEditingIssueId(null);
    setEditedFields({});
    setTitleError(null);
  };

  const handleKeyDown = event => {
    if (event.keyCode === KeyCodes.ESCAPE) {
      handleCancelEdit();
    }
  };

  const updateEditedField = (field, value) => {
    setEditedFields(prev => ({ ...prev, [field]: value }));
  };

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
              {userTasks.slice(0, 5).map(task => {
                const isEditing = editingIssueId === task.id;

                if (isEditing) {
                  return (
                    <EditTaskItem key={task.id} ref={editItemRef} onKeyDown={handleKeyDown}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '8px 0' }}>
                        <div>
                          <EditLabel>Title *</EditLabel>
                          <EditInput
                            value={editedFields.title}
                            onChange={e => updateEditedField('title', e.target.value)}
                            placeholder="Task title"
                            autoFocus
                          />
                          {titleError && <div style={{ color: '#E13C3C', fontSize: '12.5px', marginTop: '4px' }}>{titleError}</div>}
                        </div>

                        <div>
                          <EditLabel>Description</EditLabel>
                          <TextEditor
                            placeholder="Add description..."
                            defaultValue={editedFields.description}
                            onChange={value => updateEditedField('description', value)}
                          />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                          <div>
                            <EditLabel>Type</EditLabel>
                            <Select
                              variant="normal"
                              withClearValue={false}
                              name="type"
                              value={editedFields.type}
                              options={Object.values(IssueType).map(type => ({
                                value: type,
                                label: IssueTypeCopy[type],
                              }))}
                              onChange={value => updateEditedField('type', value)}
                              renderValue={({ value: type }) => (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <IssueTypeIcon type={type} />
                                  {IssueTypeCopy[type]}
                                </div>
                              )}
                              renderOption={({ value: type }) => (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <IssueTypeIcon type={type} />
                                  {IssueTypeCopy[type]}
                                </div>
                              )}
                            />
                          </div>

                          <div>
                            <EditLabel>Priority</EditLabel>
                            <Select
                              variant="normal"
                              withClearValue={false}
                              name="priority"
                              value={editedFields.priority}
                              options={Object.values(IssuePriority).map(priority => ({
                                value: priority,
                                label: IssuePriorityCopy[priority],
                              }))}
                              onChange={value => updateEditedField('priority', value)}
                              renderValue={({ value: priority }) => (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <IssuePriorityIcon priority={priority} />
                                  {IssuePriorityCopy[priority]}
                                </div>
                              )}
                              renderOption={({ value: priority }) => (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <IssuePriorityIcon priority={priority} />
                                  {IssuePriorityCopy[priority]}
                                </div>
                              )}
                            />
                          </div>

                          <div>
                            <EditLabel>Status</EditLabel>
                            <Select
                              variant="normal"
                              withClearValue={false}
                              name="status"
                              value={editedFields.status}
                              options={Object.values(IssueStatus).map(status => ({
                                value: status,
                                label: IssueStatusCopy[status],
                              }))}
                              onChange={value => updateEditedField('status', value)}
                            />
                          </div>

                          <div>
                            <EditLabel>Product Area</EditLabel>
                            <EditInput
                              value={editedFields.productArea}
                              onChange={e => updateEditedField('productArea', e.target.value)}
                              placeholder="Product area"
                            />
                          </div>
                        </div>

                        <EditActions>
                          <SaveButton onClick={handleSaveEdit}>Save</SaveButton>
                          <CancelButton onClick={handleCancelEdit}>Cancel</CancelButton>
                        </EditActions>
                      </div>
                    </EditTaskItem>
                  );
                }

                return (
                  <TaskItem key={task.id} onDoubleClick={e => handleTaskDoubleClick(e, task)}>
                    <TaskTitle>{task.title}</TaskTitle>
                    <TaskMeta>
                      {IssueTypeCopy[task.type]} • {IssuePriorityCopy[task.priority]} • {task.timeSpent}h / {task.estimate}h
                    </TaskMeta>
                  </TaskItem>
                );
              })}
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
