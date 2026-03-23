import React, { useState, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import { IssueTypeIcon, IssuePriorityIcon, Select, Icon, Avatar } from 'shared/components';
import { IssueType, IssueTypeCopy, IssueStatus, IssueStatusCopy, IssuePriority, IssuePriorityCopy } from 'shared/constants/issues';
import { KeyCodes } from 'shared/constants/keyCodes';
import api from 'shared/utils/api';

import { IssueLink, Issue, Title, Bottom, Assignees, AssigneeAvatar, TitleInput, EditingOverlay, FieldsRow, FieldLabel, SelectWrapper, AssigneesWrapper } from './Styles';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  issue: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const ProjectBoardListIssue = ({ projectUsers, issue, index, updateLocalProjectIssues }) => {
  const match = useRouteMatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(issue.title);
  const titleInputRef = useRef();

  const assignees = issue.userIds.map(userId => projectUsers.find(user => user.id === userId));

  const handleCardClick = (e) => {
    if (!isEditing) {
      e.preventDefault();
      e.stopPropagation();
      setIsEditing(true);
      setEditedTitle(issue.title);
      setTimeout(() => {
        if (titleInputRef.current) {
          titleInputRef.current.focus();
          titleInputRef.current.select();
        }
      }, 0);
    }
  };

  const updateIssue = (updatedFields) => {
    api.optimisticUpdate(`/issues/${issue.id}`, {
      updatedFields,
      currentFields: issue,
      setLocalData: fields => updateLocalProjectIssues(issue.id, fields),
    });
  };

  const handleTitleSave = () => {
    const trimmedTitle = editedTitle.trim();
    if (trimmedTitle && trimmedTitle !== issue.title) {
      updateIssue({ title: trimmedTitle });
    }
    setIsEditing(false);
  };

  const handleTitleKeyDown = (e) => {
    if (e.keyCode === KeyCodes.ENTER) {
      e.preventDefault();
      handleTitleSave();
    } else if (e.keyCode === KeyCodes.ESCAPE) {
      setEditedTitle(issue.title);
      setIsEditing(false);
    }
  };

  const handleTitleBlur = () => {
    handleTitleSave();
  };

  const handleTypeChange = (type) => {
    updateIssue({ type });
  };

  const handleStatusChange = (status) => {
    updateIssue({ status });
  };

  const handlePriorityChange = (priority) => {
    updateIssue({ priority });
  };

  const handleAssigneesChange = (userIds) => {
    const users = userIds.map(userId => projectUsers.find(user => user.id === userId));
    updateIssue({ userIds, users });
  };

  const getUserById = userId => projectUsers.find(user => user.id === userId);

  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided, snapshot) => (
        <IssueLink
          to={`${match.url}/issues/${issue.id}`}
          ref={provided.innerRef}
          data-testid="list-issue"
          onClick={handleCardClick}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Issue isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating} isEditing={isEditing}>
            {isEditing ? (
              <Fragment>
                <TitleInput
                  ref={titleInputRef}
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  onBlur={handleTitleBlur}
                  onKeyDown={handleTitleKeyDown}
                  placeholder="Enter issue title"
                />
                <FieldsRow>
                  <div>
                    <FieldLabel>Type</FieldLabel>
                    <SelectWrapper>
                      <Select
                        variant="empty"
                        withClearValue={false}
                        name="type"
                        value={issue.type}
                        options={Object.values(IssueType).map(type => ({
                          value: type,
                          label: IssueTypeCopy[type],
                        }))}
                        onChange={handleTypeChange}
                        renderValue={({ value: type }) => (
                          <Fragment>
                            <IssueTypeIcon type={type} size={14} />
                            <span style={{ marginLeft: 4 }}>{IssueTypeCopy[type]}</span>
                          </Fragment>
                        )}
                      />
                    </SelectWrapper>
                  </div>
                  <div>
                    <FieldLabel>Priority</FieldLabel>
                    <SelectWrapper>
                      <Select
                        variant="empty"
                        withClearValue={false}
                        name="priority"
                        value={issue.priority}
                        options={Object.values(IssuePriority).map(priority => ({
                          value: priority,
                          label: IssuePriorityCopy[priority],
                        }))}
                        onChange={handlePriorityChange}
                        renderValue={({ value: priority }) => (
                          <Fragment>
                            <IssuePriorityIcon priority={priority} size={14} />
                            <span style={{ marginLeft: 4 }}>{IssuePriorityCopy[priority]}</span>
                          </Fragment>
                        )}
                      />
                    </SelectWrapper>
                  </div>
                </FieldsRow>
                <FieldsRow>
                  <div style={{ flex: 1 }}>
                    <FieldLabel>Status</FieldLabel>
                    <SelectWrapper>
                      <Select
                        variant="empty"
                        withClearValue={false}
                        name="status"
                        value={issue.status}
                        options={Object.values(IssueStatus).map(status => ({
                          value: status,
                          label: IssueStatusCopy[status],
                        }))}
                        onChange={handleStatusChange}
                        renderValue={({ value: status }) => (
                          <Fragment>
                            <span>{IssueStatusCopy[status]}</span>
                          </Fragment>
                        )}
                      />
                    </SelectWrapper>
                  </div>
                </FieldsRow>
                <div>
                  <FieldLabel>Assignees</FieldLabel>
                  <AssigneesWrapper>
                    <Select
                      isMulti
                      variant="empty"
                      placeholder="Unassigned"
                      name="assignees"
                      value={issue.userIds}
                      options={projectUsers.map(user => ({ value: user.id, label: user.name }))}
                      onChange={handleAssigneesChange}
                      renderValue={({ value: userId, removeOptionValue }) => {
                        const user = getUserById(userId);
                        return (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6,
                              padding: '4px 8px',
                              background: '#f4f5f7',
                              borderRadius: 3,
                              marginBottom: 4,
                              cursor: 'pointer',
                            }}
                            onClick={removeOptionValue}
                          >
                            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={20} />
                            <span style={{ fontSize: 13 }}>{user.name}</span>
                            <Icon type="close" size={12} />
                          </div>
                        );
                      }}
                      renderOption={({ value: userId }) => {
                        const user = getUserById(userId);
                        return (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={24} />
                            <span>{user.name}</span>
                          </div>
                        );
                      }}
                    />
                  </AssigneesWrapper>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <Title>{issue.title}</Title>
                <Bottom>
                  <div>
                    <IssueTypeIcon type={issue.type} />
                    <IssuePriorityIcon priority={issue.priority} top={-1} left={4} />
                  </div>
                  <Assignees>
                    {assignees.map(user => (
                      <AssigneeAvatar
                        key={user.id}
                        size={24}
                        avatarUrl={user.avatarUrl}
                        name={user.name}
                      />
                    ))}
                  </Assignees>
                </Bottom>
              </Fragment>
            )}
          </Issue>
        </IssueLink>
      )}
    </Draggable>
  );
};

ProjectBoardListIssue.propTypes = propTypes;

export default ProjectBoardListIssue;
