import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import { IssueTypeIcon, IssuePriorityIcon, Textarea, Select, TextEditor } from 'shared/components';
import { IssueType, IssueTypeCopy, IssueStatus, IssueStatusCopy, IssuePriority, IssuePriorityCopy } from 'shared/constants/issues';
import { KeyCodes } from 'shared/constants/keyCodes';
import api from 'shared/utils/api';
import { is, generateErrors } from 'shared/utils/validation';
import { getTextContentsFromHtmlString } from 'shared/utils/browser';

import { IssueLink, Issue, Title, Bottom, Assignees, AssigneeAvatar, EditMode, EditTitle, EditDescription, EditRow, EditLabel, Actions, SaveButton, CancelButton, DescriptionPreview } from './Styles';

const propTypes = {
  projectUsers: PropTypes.array.isRequired,
  issue: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const ProjectBoardListIssue = ({ projectUsers, issue, index }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(issue.title);
  const [editedDescription, setEditedDescription] = useState(issue.description || '');
  const [editedType, setEditedType] = useState(issue.type);
  const [editedStatus, setEditedStatus] = useState(issue.status);
  const [editedPriority, setEditedPriority] = useState(issue.priority);
  const [titleError, setTitleError] = useState(null);
  const editModeRef = useRef();

  const assignees = issue.userIds.map(userId => projectUsers.find(user => user.id === userId));

  useEffect(() => {
    const handleClickOutside = event => {
      if (isEditing && editModeRef.current && !editModeRef.current.contains(event.target)) {
        handleCancel();
      }
    };

    if (isEditing) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing]);

  const handleDoubleClick = event => {
    event.preventDefault();
    setIsEditing(true);
  };

  const handleSave = () => {
    setTitleError(null);

    const errors = generateErrors({ title: editedTitle }, { title: [is.required(), is.maxLength(200)] });

    if (errors.title) {
      setTitleError(errors.title);
      return;
    }

    const updatedFields = {};
    if (editedTitle !== issue.title) updatedFields.title = editedTitle;
    if (editedDescription !== (issue.description || '')) updatedFields.description = editedDescription;
    if (editedType !== issue.type) updatedFields.type = editedType;
    if (editedStatus !== issue.status) updatedFields.status = editedStatus;
    if (editedPriority !== issue.priority) updatedFields.priority = editedPriority;

    if (Object.keys(updatedFields).length > 0) {
      api.optimisticUpdate(`/issues/${issue.id}`, {
        updatedFields,
        currentFields: issue,
        setLocalData: () => {},
      });
    }

    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(issue.title);
    setEditedDescription(issue.description || '');
    setEditedType(issue.type);
    setEditedStatus(issue.status);
    setEditedPriority(issue.priority);
    setTitleError(null);
    setIsEditing(false);
  };

  const handleKeyDown = event => {
    if (event.keyCode === KeyCodes.ESCAPE) {
      handleCancel();
    }
  };

  const handleClick = event => {
    if (!isEditing) {
      event.preventDefault();
      history.push(`${match.url}/issues/${issue.id}`);
    }
  };

  return (
    <Draggable draggableId={issue.id.toString()} index={index} isDragDisabled={isEditing}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          data-testid="list-issue"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Issue
            isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}
            isEditing={isEditing}
            onDoubleClick={handleDoubleClick}
            onClick={handleClick}
          >
            {isEditing ? (
              <EditMode ref={editModeRef} onKeyDown={handleKeyDown}>
                <EditTitle
                  value={editedTitle}
                  onChange={value => setEditedTitle(value)}
                  placeholder="Issue title"
                  autoFocus
                  invalid={!!titleError}
                />
                {titleError && <div style={{ color: '#E13C3C', fontSize: '12.5px', marginTop: '4px' }}>{titleError}</div>}
                
                <EditRow>
                  <EditLabel>Description</EditLabel>
                  <TextEditor
                    placeholder="Add description..."
                    defaultValue={editedDescription}
                    onChange={setEditedDescription}
                  />
                </EditRow>

                <EditRow>
                  <EditLabel>Type</EditLabel>
                  <Select
                    variant="normal"
                    withClearValue={false}
                    name="type"
                    value={editedType}
                    options={Object.values(IssueType).map(type => ({
                      value: type,
                      label: IssueTypeCopy[type],
                    }))}
                    onChange={setEditedType}
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
                </EditRow>

                <EditRow>
                  <EditLabel>Status</EditLabel>
                  <Select
                    variant="normal"
                    withClearValue={false}
                    name="status"
                    value={editedStatus}
                    options={Object.values(IssueStatus).map(status => ({
                      value: status,
                      label: IssueStatusCopy[status],
                    }))}
                    onChange={setEditedStatus}
                  />
                </EditRow>

                <EditRow>
                  <EditLabel>Priority</EditLabel>
                  <Select
                    variant="normal"
                    withClearValue={false}
                    name="priority"
                    value={editedPriority}
                    options={Object.values(IssuePriority).map(priority => ({
                      value: priority,
                      label: IssuePriorityCopy[priority],
                    }))}
                    onChange={setEditedPriority}
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
                </EditRow>

                <Actions>
                  <SaveButton onClick={handleSave}>Save</SaveButton>
                  <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                </Actions>
              </EditMode>
            ) : (
              <>
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
              </>
            )}
          </Issue>
        </div>
      )}
    </Draggable>
  );
};

ProjectBoardListIssue.propTypes = propTypes;

export default ProjectBoardListIssue;
