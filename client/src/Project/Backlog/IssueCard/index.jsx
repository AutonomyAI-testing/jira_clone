import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { useRouteMatch, useHistory } from 'react-router-dom';

import {
  Select,
  IssueTypeIcon,
  IssuePriorityIcon,
  Avatar,
  InputDebounced,
  DatePicker,
} from 'shared/components';
import { IssueStatus, IssueStatusCopy, IssuePriority, IssuePriorityCopy } from 'shared/constants/issues';
import { issueStatusBackgroundColors } from 'shared/utils/styles';
import api from 'shared/utils/api';
import toast from 'shared/utils/toast';

import {
  Card,
  StatusBorder,
  TitleRow,
  Title,
  Fields,
  FieldRow,
  FieldLabel,
  FieldValue,
  Assignees,
  EstimateInput,
} from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  projectUsers: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const IssueCard = ({ issue, projectUsers, index, updateLocalProjectIssues }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const updateIssue = updatedFields => {
    api.optimisticUpdate(`/issues/${issue.id}`, {
      updatedFields,
      currentFields: issue,
      setLocalData: fields => {
        updateLocalProjectIssues(issue.id, fields);
        toast.success('Issue updated');
      },
    });
  };

  const handleTitleClick = () => {
    history.push(`${match.url.replace('/backlog', '/board')}/issues/${issue.id}`);
  };

  const assignees = issue.userIds.map(userId => projectUsers.find(user => user.id === userId));

  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <StatusBorder color={issueStatusBackgroundColors[issue.status]} />
          <div>
            <TitleRow>
              <IssueTypeIcon type={issue.type} />
              <Title onClick={handleTitleClick}>{issue.title}</Title>
            </TitleRow>

            <Fields>
              <FieldRow>
                <FieldLabel>Status</FieldLabel>
                <FieldValue>
                  <Select
                    variant="empty"
                    dropdownWidth={200}
                    withClearValue={false}
                    value={issue.status}
                    options={Object.values(IssueStatus).map(status => ({
                      value: status,
                      label: IssueStatusCopy[status],
                    }))}
                    onChange={status => updateIssue({ status })}
                  />
                </FieldValue>
              </FieldRow>

              <FieldRow>
                <FieldLabel>Priority</FieldLabel>
                <FieldValue>
                  <Select
                    variant="empty"
                    dropdownWidth={200}
                    withClearValue={false}
                    value={issue.priority}
                    options={Object.values(IssuePriority).map(priority => ({
                      value: priority,
                      label: IssuePriorityCopy[priority],
                    }))}
                    onChange={priority => updateIssue({ priority })}
                    renderValue={({ value }) => (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <IssuePriorityIcon priority={value} />
                        <span>{IssuePriorityCopy[value]}</span>
                      </div>
                    )}
                    renderOption={({ value }) => (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <IssuePriorityIcon priority={value} />
                        <span>{IssuePriorityCopy[value]}</span>
                      </div>
                    )}
                  />
                </FieldValue>
              </FieldRow>

              <FieldRow>
                <FieldLabel>Assignees</FieldLabel>
                <FieldValue>
                  <Select
                    variant="empty"
                    isMulti
                    withClearValue={false}
                    dropdownWidth={250}
                    value={issue.userIds}
                    options={projectUsers.map(user => ({ value: user.id, label: user.name }))}
                    onChange={userIds => updateIssue({ userIds })}
                    renderValue={({ value: userId }) => {
                      const user = projectUsers.find(u => u.id === userId);
                      return user ? <Avatar key={user.id} avatarUrl={user.avatarUrl} name={user.name} size={24} /> : null;
                    }}
                  />
                </FieldValue>
              </FieldRow>

              <FieldRow>
                <FieldLabel>Estimate</FieldLabel>
                <FieldValue>
                  <EstimateInput>
                    <InputDebounced
                      placeholder="0"
                      filter={/^\d{0,6}$/}
                      value={issue.estimate || ''}
                      onChange={stringValue => {
                        const value = stringValue.trim() ? Number(stringValue) : null;
                        updateIssue({ estimate: value });
                      }}
                    />
                    <span>hours</span>
                  </EstimateInput>
                </FieldValue>
              </FieldRow>

              <FieldRow>
                <FieldLabel>Start Date</FieldLabel>
                <FieldValue>
                  <DatePicker
                    withTime={false}
                    value={issue.startDate}
                    onChange={startDate => updateIssue({ startDate })}
                  />
                </FieldValue>
              </FieldRow>

              <FieldRow>
                <FieldLabel>Due Date</FieldLabel>
                <FieldValue>
                  <DatePicker
                    withTime={false}
                    value={issue.dueDate}
                    onChange={dueDate => updateIssue({ dueDate })}
                  />
                </FieldValue>
              </FieldRow>
            </Fields>
          </div>
        </Card>
      )}
    </Draggable>
  );
};

IssueCard.propTypes = propTypes;

export default IssueCard;
