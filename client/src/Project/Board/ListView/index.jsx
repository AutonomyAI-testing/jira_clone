import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import { intersection } from 'lodash';

import { IssueType, IssueTypeCopy, IssueStatus, IssueStatusCopy, IssuePriority, IssuePriorityCopy } from 'shared/constants/issues';
import { Avatar, IssueTypeIcon, IssuePriorityIcon, Select, Icon } from 'shared/components';
import { formatDate } from 'shared/utils/dateTime';
import { KeyCodes } from 'shared/constants/keyCodes';
import api from 'shared/utils/api';

import {
  ListViewContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  IssueKey,
  IssueTitle,
  AssigneesContainer,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  currentUserId: PropTypes.number,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const defaultProps = {
  currentUserId: null,
};

const ListView = ({ project, filters, currentUserId, updateLocalProjectIssues }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const [editingIssueId, setEditingIssueId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  const filteredIssues = filterIssues(project.issues, filters, currentUserId);
  const sortedIssues = filteredIssues.sort((a, b) => b.id - a.id);

  const handleRowClick = (issueId, title) => {
    if (editingIssueId !== issueId) {
      setEditingIssueId(issueId);
      setEditedTitle(title);
    }
  };

  const updateIssue = (issueId, updatedFields) => {
    const issue = project.issues.find(i => i.id === issueId);
    api.optimisticUpdate(`/issues/${issueId}`, {
      updatedFields,
      currentFields: issue,
      setLocalData: fields => updateLocalProjectIssues(issueId, fields),
    });
  };

  const handleTitleSave = (issueId, originalTitle) => {
    const trimmedTitle = editedTitle.trim();
    if (trimmedTitle && trimmedTitle !== originalTitle) {
      updateIssue(issueId, { title: trimmedTitle });
    }
    setEditingIssueId(null);
  };

  const handleTitleKeyDown = (e, issueId, originalTitle) => {
    if (e.keyCode === KeyCodes.ENTER) {
      e.preventDefault();
      handleTitleSave(issueId, originalTitle);
    } else if (e.keyCode === KeyCodes.ESCAPE) {
      setEditedTitle(originalTitle);
      setEditingIssueId(null);
    }
  };

  const getDependencyTitles = (dependencies, allIssues) => {
    if (!dependencies || dependencies.length === 0) return 'None';
    return dependencies
      .map(depId => {
        const issue = allIssues.find(i => i.id === depId);
        return issue ? issue.title : `#${depId}`;
      })
      .join(', ');
  };

  return (
    <ListViewContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell width="8%">Key</TableHeaderCell>
            <TableHeaderCell width="22%">Summary</TableHeaderCell>
            <TableHeaderCell width="10%">Product Area</TableHeaderCell>
            <TableHeaderCell width="8%">Type</TableHeaderCell>
            <TableHeaderCell width="8%">Priority</TableHeaderCell>
            <TableHeaderCell width="8%">Status</TableHeaderCell>
            <TableHeaderCell width="10%">Assignees</TableHeaderCell>
            <TableHeaderCell width="9%">Start Date</TableHeaderCell>
            <TableHeaderCell width="9%">Due Date</TableHeaderCell>
            <TableHeaderCell width="8%">Dependencies</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedIssues.map(issue => {
            const isEditing = editingIssueId === issue.id;
            return (
              <TableRow
                key={issue.id}
                onClick={(e) => {
                  if (!isEditing) {
                    e.stopPropagation();
                    handleRowClick(issue.id, issue.title);
                  }
                }}
                clickable={!isEditing}
                isEditing={isEditing}
              >
                <TableCell>
                  <IssueKey>{`TASK-${issue.id}`}</IssueKey>
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  {isEditing ? (
                    <input
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      onBlur={() => handleTitleSave(issue.id, issue.title)}
                      onKeyDown={(e) => handleTitleKeyDown(e, issue.id, issue.title)}
                      autoFocus
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #4C9AFF',
                        borderRadius: 3,
                        fontSize: 14,
                        outline: 'none',
                      }}
                    />
                  ) : (
                    <IssueTitle>{issue.title}</IssueTitle>
                  )}
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  {isEditing ? (
                    <input
                      value={issue.productArea || ''}
                      onChange={(e) => updateIssue(issue.id, { productArea: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #dfe1e6',
                        borderRadius: 3,
                        fontSize: 13,
                        outline: 'none',
                      }}
                    />
                  ) : (
                    issue.productArea || '-'
                  )}
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  {isEditing ? (
                    <Select
                      variant="empty"
                      withClearValue={false}
                      name="type"
                      value={issue.type}
                      options={Object.values(IssueType).map(type => ({
                        value: type,
                        label: IssueTypeCopy[type],
                      }))}
                      onChange={(type) => updateIssue(issue.id, { type })}
                      renderValue={({ value: type }) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <IssueTypeIcon type={type} size={16} />
                          <span style={{ marginLeft: 6, fontSize: 13 }}>{IssueTypeCopy[type]}</span>
                        </div>
                      )}
                    />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IssueTypeIcon type={issue.type} size={16} />
                      <span style={{ marginLeft: 6 }}>{IssueTypeCopy[issue.type]}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  {isEditing ? (
                    <Select
                      variant="empty"
                      withClearValue={false}
                      name="priority"
                      value={issue.priority}
                      options={Object.values(IssuePriority).map(priority => ({
                        value: priority,
                        label: IssuePriorityCopy[priority],
                      }))}
                      onChange={(priority) => updateIssue(issue.id, { priority })}
                      renderValue={({ value: priority }) => (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <IssuePriorityIcon priority={priority} size={16} />
                          <span style={{ marginLeft: 6, fontSize: 13 }}>{IssuePriorityCopy[priority]}</span>
                        </div>
                      )}
                    />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IssuePriorityIcon priority={issue.priority} size={16} />
                      <span style={{ marginLeft: 6 }}>{IssuePriorityCopy[issue.priority]}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  {isEditing ? (
                    <Select
                      variant="empty"
                      withClearValue={false}
                      name="status"
                      value={issue.status}
                      options={Object.values(IssueStatus).map(status => ({
                        value: status,
                        label: IssueStatusCopy[status],
                      }))}
                      onChange={(status) => updateIssue(issue.id, { status })}
                      renderValue={({ value: status }) => (
                        <span style={{ fontSize: 13 }}>{IssueStatusCopy[status]}</span>
                      )}
                    />
                  ) : (
                    IssueStatusCopy[issue.status]
                  )}
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  {isEditing ? (
                    <Select
                      isMulti
                      variant="empty"
                      placeholder="Unassigned"
                      name="assignees"
                      value={issue.userIds}
                      options={project.users.map(user => ({ value: user.id, label: user.name }))}
                      onChange={(userIds) => {
                        const users = userIds.map(userId => project.users.find(u => u.id === userId));
                        updateIssue(issue.id, { userIds, users });
                      }}
                      renderValue={({ value: userId, removeOptionValue }) => {
                        const user = project.users.find(u => u.id === userId);
                        return (
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 4,
                              padding: '2px 6px',
                              background: '#f4f5f7',
                              borderRadius: 3,
                              marginRight: 4,
                              cursor: 'pointer',
                            }}
                            onClick={removeOptionValue}
                          >
                            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={18} />
                            <span style={{ fontSize: 12 }}>{user.name}</span>
                            <Icon type="close" size={10} />
                          </div>
                        );
                      }}
                      renderOption={({ value: userId }) => {
                        const user = project.users.find(u => u.id === userId);
                        return (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={24} />
                            <span>{user.name}</span>
                          </div>
                        );
                      }}
                    />
                  ) : (
                    <AssigneesContainer>
                      {issue.users.map(user => (
                        <Avatar key={user.id} size={24} avatarUrl={user.avatarUrl} name={user.name} />
                      ))}
                    </AssigneesContainer>
                  )}
                </TableCell>
                <TableCell>{issue.startDate ? formatDate(issue.startDate) : '-'}</TableCell>
                <TableCell>{issue.dueDate ? formatDate(issue.dueDate) : '-'}</TableCell>
                <TableCell>{getDependencyTitles(issue.dependencies, project.issues)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </ListViewContainer>
  );
};

const filterIssues = (projectIssues, filters, currentUserId) => {
  const { searchTerm, userIds, myOnly, recent } = filters;
  let issues = projectIssues;

  if (searchTerm) {
    issues = issues.filter(issue => issue.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  if (userIds.length > 0) {
    issues = issues.filter(issue => intersection(issue.userIds, userIds).length > 0);
  }
  if (myOnly && currentUserId) {
    issues = issues.filter(issue => issue.userIds.includes(currentUserId));
  }
  if (recent) {
    issues = issues.filter(issue => moment(issue.updatedAt).isAfter(moment().subtract(3, 'days')));
  }
  return issues;
};

ListView.propTypes = propTypes;
ListView.defaultProps = defaultProps;

export default ListView;
