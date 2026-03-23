import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import { intersection } from 'lodash';

import { IssueType, IssueTypeCopy, IssueStatus, IssueStatusCopy, IssuePriority, IssuePriorityCopy } from 'shared/constants/issues';
import { Avatar, IssueTypeIcon, IssuePriorityIcon, Select, Icon, Button } from 'shared/components';
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
  ActionsRow,
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
  const [editedFields, setEditedFields] = useState({});

  const filteredIssues = filterIssues(project.issues, filters, currentUserId);
  const sortedIssues = filteredIssues.sort((a, b) => b.id - a.id);

  const handleRowClick = (issueId, issue) => {
    if (editingIssueId !== issueId) {
      setEditingIssueId(issueId);
      setEditedTitle(issue.title);
      setEditedFields({
        type: issue.type,
        priority: issue.priority,
        status: issue.status,
        userIds: issue.userIds,
        productArea: issue.productArea || '',
      });
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

  const handleSave = (issueId) => {
    const trimmedTitle = editedTitle.trim();
    const updatedFields = {};
    
    if (trimmedTitle) {
      updatedFields.title = trimmedTitle;
    }
    if (editedFields.type !== undefined) updatedFields.type = editedFields.type;
    if (editedFields.priority !== undefined) updatedFields.priority = editedFields.priority;
    if (editedFields.status !== undefined) updatedFields.status = editedFields.status;
    if (editedFields.userIds !== undefined) {
      updatedFields.userIds = editedFields.userIds;
      updatedFields.users = editedFields.userIds.map(userId => project.users.find(u => u.id === userId));
    }
    if (editedFields.productArea !== undefined) updatedFields.productArea = editedFields.productArea;
    
    updateIssue(issueId, updatedFields);
    setEditingIssueId(null);
    setEditedFields({});
  };

  const handleCancel = (issue) => {
    setEditedTitle(issue.title);
    setEditingIssueId(null);
    setEditedFields({});
  };

  const handleTitleKeyDown = (e, issueId, issue) => {
    if (e.keyCode === KeyCodes.ENTER) {
      e.preventDefault();
      handleSave(issueId);
    } else if (e.keyCode === KeyCodes.ESCAPE) {
      handleCancel(issue);
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
                    handleRowClick(issue.id, issue);
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
                    <div>
                      <input
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        onKeyDown={(e) => handleTitleKeyDown(e, issue.id, issue)}
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
                      <ActionsRow>
                        <Button variant="empty" onClick={(e) => { e.stopPropagation(); handleCancel(issue); }}>
                          Cancel
                        </Button>
                        <Button variant="primary" onClick={(e) => { e.stopPropagation(); handleSave(issue.id); }}>
                          Save
                        </Button>
                      </ActionsRow>
                    </div>
                  ) : (
                    <IssueTitle>{issue.title}</IssueTitle>
                  )}
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  {isEditing ? (
                    <input
                      value={editedFields.productArea || ''}
                      onChange={(e) => setEditedFields({ ...editedFields, productArea: e.target.value })}
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
                      value={editedFields.type}
                      dropdownWidth={220}
                      options={Object.values(IssueType).map(type => ({
                        value: type,
                        label: IssueTypeCopy[type],
                      }))}
                      onChange={(type) => setEditedFields({ ...editedFields, type })}
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
                      value={editedFields.priority}
                      dropdownWidth={220}
                      options={Object.values(IssuePriority).map(priority => ({
                        value: priority,
                        label: IssuePriorityCopy[priority],
                      }))}
                      onChange={(priority) => setEditedFields({ ...editedFields, priority })}
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
                      value={editedFields.status}
                      dropdownWidth={220}
                      options={Object.values(IssueStatus).map(status => ({
                        value: status,
                        label: IssueStatusCopy[status],
                      }))}
                      onChange={(status) => setEditedFields({ ...editedFields, status })}
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
                      value={editedFields.userIds}
                      dropdownWidth={250}
                      options={project.users.map(user => ({ value: user.id, label: user.name }))}
                      onChange={(userIds) => setEditedFields({ ...editedFields, userIds })}
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
                            onClick={(e) => { e.stopPropagation(); removeOptionValue(); }}
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
