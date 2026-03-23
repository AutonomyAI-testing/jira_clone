import React, { Fragment, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';

import {
  Input,
  Select,
  InputDebounced,
  DatePicker,
  IssueTypeIcon,
  IssuePriorityIcon,
  Avatar,
  Icon,
} from 'shared/components';
import {
  IssueType,
  IssueTypeCopy,
  IssueStatus,
  IssueStatusCopy,
  IssuePriority,
  IssuePriorityCopy,
} from 'shared/constants/issues';
import useOnOutsideClick from 'shared/hooks/onOutsideClick';
import useOnEscapeKeyDown from 'shared/hooks/onEscapeKeyDown';

import {
  EditorContainer,
  EditorGrid,
  EditorField,
  FieldLabel,
  CloseButton,
  StatusTag,
  PriorityOption,
  TypeOption,
  UserOption,
  UserName,
} from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  projectUsers: PropTypes.array.isRequired,
  updateIssue: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const ProjectBoardInlineIssueEditor = ({ issue, projectUsers, updateIssue, onClose }) => {
  const [localTitle, setLocalTitle] = useState(issue.title);
  const $containerRef = useRef();

  useOnOutsideClick($containerRef, true, onClose);
  useOnEscapeKeyDown(true, onClose);

  const handleTitleChange = value => {
    setLocalTitle(value);
  };

  const handleTitleBlur = () => {
    if (localTitle.trim() && localTitle !== issue.title) {
      updateIssue({ title: localTitle.trim() });
    }
  };

  const getUserById = userId => projectUsers.find(user => user.id === userId);

  return (
    <EditorContainer ref={$containerRef}>
      <CloseButton type="close" size={16} onClick={onClose} />

      <EditorGrid>
        <EditorField gridArea="title">
          <FieldLabel>Title</FieldLabel>
          <Input
            value={localTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
          />
        </EditorField>

        <EditorField gridArea="type">
          <FieldLabel>Type</FieldLabel>
          <Select
            variant="empty"
            dropdownWidth={200}
            withClearValue={false}
            name="type"
            value={issue.type}
            options={Object.values(IssueType).map(type => ({
              value: type,
              label: IssueTypeCopy[type],
            }))}
            onChange={type => updateIssue({ type })}
            renderValue={({ value: type }) => (
              <TypeOption>
                <IssueTypeIcon type={type} size={16} />
                <span>{IssueTypeCopy[type]}</span>
              </TypeOption>
            )}
            renderOption={({ value: type }) => (
              <TypeOption>
                <IssueTypeIcon type={type} size={16} />
                <span>{IssueTypeCopy[type]}</span>
              </TypeOption>
            )}
          />
        </EditorField>

        <EditorField gridArea="status">
          <FieldLabel>Status</FieldLabel>
          <Select
            variant="empty"
            dropdownWidth={200}
            withClearValue={false}
            name="status"
            value={issue.status}
            options={Object.values(IssueStatus).map(status => ({
              value: status,
              label: IssueStatusCopy[status],
            }))}
            onChange={status => updateIssue({ status })}
            renderValue={({ value: status }) => (
              <StatusTag color={status}>
                <div>{IssueStatusCopy[status]}</div>
                <Icon type="chevron-down" size={16} />
              </StatusTag>
            )}
            renderOption={({ value: status }) => (
              <StatusTag color={status}>{IssueStatusCopy[status]}</StatusTag>
            )}
          />
        </EditorField>

        <EditorField gridArea="priority">
          <FieldLabel>Priority</FieldLabel>
          <Select
            variant="empty"
            dropdownWidth={200}
            withClearValue={false}
            name="priority"
            value={issue.priority}
            options={Object.values(IssuePriority).map(priority => ({
              value: priority,
              label: IssuePriorityCopy[priority],
            }))}
            onChange={priority => updateIssue({ priority })}
            renderValue={({ value: priority }) => (
              <PriorityOption>
                <IssuePriorityIcon priority={priority} size={18} />
                <span>{IssuePriorityCopy[priority]}</span>
              </PriorityOption>
            )}
            renderOption={({ value: priority }) => (
              <PriorityOption>
                <IssuePriorityIcon priority={priority} size={18} />
                <span>{IssuePriorityCopy[priority]}</span>
              </PriorityOption>
            )}
          />
        </EditorField>

        <EditorField gridArea="assignees">
          <FieldLabel>Assignees</FieldLabel>
          <Select
            isMulti
            variant="empty"
            dropdownWidth={300}
            placeholder="Unassigned"
            name="assignees"
            value={issue.userIds}
            options={projectUsers.map(user => ({ value: user.id, label: user.name }))}
            onChange={userIds => {
              updateIssue({ userIds, users: userIds.map(getUserById) });
            }}
            renderValue={({ value: userId, removeOptionValue }) => (
              <UserOption
                key={userId}
                isSelectValue
                onClick={() => removeOptionValue && removeOptionValue()}
              >
                <Avatar avatarUrl={getUserById(userId).avatarUrl} name={getUserById(userId).name} size={24} />
                <UserName>{getUserById(userId).name}</UserName>
                {removeOptionValue && <Icon type="close" size={14} />}
              </UserOption>
            )}
            renderOption={({ value: userId }) => (
              <UserOption>
                <Avatar avatarUrl={getUserById(userId).avatarUrl} name={getUserById(userId).name} size={24} />
                <UserName>{getUserById(userId).name}</UserName>
              </UserOption>
            )}
          />
        </EditorField>

        <EditorField gridArea="estimate">
          <FieldLabel>Estimate (hours)</FieldLabel>
          <InputDebounced
            placeholder="Number"
            filter={/^\d{0,6}$/}
            value={isNil(issue.estimate) ? '' : issue.estimate}
            onChange={stringValue => {
              const value = stringValue.trim() ? Number(stringValue) : null;
              updateIssue({ estimate: value });
            }}
          />
        </EditorField>

        <EditorField gridArea="startDate">
          <FieldLabel>Start Date</FieldLabel>
          <DatePicker
            withTime={false}
            value={issue.startDate}
            onChange={startDate => updateIssue({ startDate })}
          />
        </EditorField>

        <EditorField gridArea="dueDate">
          <FieldLabel>Due Date</FieldLabel>
          <DatePicker
            withTime={false}
            value={issue.dueDate}
            onChange={dueDate => updateIssue({ dueDate })}
          />
        </EditorField>
      </EditorGrid>
    </EditorContainer>
  );
};

ProjectBoardInlineIssueEditor.propTypes = propTypes;

export default ProjectBoardInlineIssueEditor;
