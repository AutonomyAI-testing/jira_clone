import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import { intersection } from 'lodash';

import { IssueStatusCopy, IssueTypeCopy, IssuePriorityCopy, IssueStatus, IssueType, IssuePriority } from 'shared/constants/issues';
import { Avatar, IssueTypeIcon, IssuePriorityIcon, Select, TextEditor } from 'shared/components';
import { formatDate } from 'shared/utils/dateTime';
import { KeyCodes } from 'shared/constants/keyCodes';
import api from 'shared/utils/api';
import { is, generateErrors } from 'shared/utils/validation';

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
  EditRow,
  EditCell,
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

const ListView = ({ project, filters, currentUserId }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const [editingIssueId, setEditingIssueId] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [titleError, setTitleError] = useState(null);
  const editRowRef = useRef();

  const filteredIssues = filterIssues(project.issues, filters, currentUserId);
  const sortedIssues = filteredIssues.sort((a, b) => b.id - a.id);

  useEffect(() => {
    const handleClickOutside = event => {
      if (editingIssueId && editRowRef.current && !editRowRef.current.contains(event.target)) {
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

  const handleRowClick = issueId => {
    if (!editingIssueId) {
      history.push(`${match.url}/issues/${issueId}`);
    }
  };

  const handleRowDoubleClick = (event, issue) => {
    event.preventDefault();
    event.stopPropagation();
    setEditingIssueId(issue.id);
    setEditedFields({
      title: issue.title,
      description: issue.description || '',
      type: issue.type,
      status: issue.status,
      priority: issue.priority,
      productArea: issue.productArea || '',
    });
    setTitleError(null);
  };

  const handleSaveEdit = () => {
    const issue = project.issues.find(i => i.id === editingIssueId);
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

            if (isEditing) {
              return (
                <EditRow key={issue.id} ref={editRowRef} onKeyDown={handleKeyDown}>
                  <EditCell colSpan={10}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '8px 0' }}>
                      <div>
                        <EditLabel>Title *</EditLabel>
                        <EditInput
                          value={editedFields.title}
                          onChange={e => updateEditedField('title', e.target.value)}
                          placeholder="Issue title"
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

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
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
                  </EditCell>
                </EditRow>
              );
            }

            return (
              <TableRow
                key={issue.id}
                onClick={() => handleRowClick(issue.id)}
                onDoubleClick={e => handleRowDoubleClick(e, issue)}
                clickable
              >
                <TableCell>
                  <IssueKey>{`TASK-${issue.id}`}</IssueKey>
                </TableCell>
                <TableCell>
                  <IssueTitle>{issue.title}</IssueTitle>
                </TableCell>
                <TableCell>{issue.productArea || '-'}</TableCell>
                <TableCell>
                  <IssueTypeIcon type={issue.type} size={16} />
                  <span style={{ marginLeft: 6 }}>{IssueTypeCopy[issue.type]}</span>
                </TableCell>
                <TableCell>
                  <IssuePriorityIcon priority={issue.priority} size={16} />
                  <span style={{ marginLeft: 6 }}>{IssuePriorityCopy[issue.priority]}</span>
                </TableCell>
                <TableCell>{IssueStatusCopy[issue.status]}</TableCell>
                <TableCell>
                  <AssigneesContainer>
                    {issue.users.map(user => (
                      <Avatar key={user.id} size={24} avatarUrl={user.avatarUrl} name={user.name} />
                    ))}
                  </AssigneesContainer>
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
