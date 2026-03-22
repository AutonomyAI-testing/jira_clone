import React, { useMemo, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import { intersection } from 'lodash';

import { IssueStatusCopy, IssueTypeCopy, IssuePriorityCopy, IssueStatus, IssueType, IssuePriority } from 'shared/constants/issues';
import { IssueTypeIcon, Avatar, Select, TextEditor, IssuePriorityIcon } from 'shared/components';
import { KeyCodes } from 'shared/constants/keyCodes';
import api from 'shared/utils/api';
import { is, generateErrors } from 'shared/utils/validation';

import {
  GanttContainer,
  GanttHeader,
  TaskListContainer,
  TimelineContainer,
  TaskRow,
  TaskInfo,
  TaskName,
  TaskMeta,
  Timeline,
  TimelineHeader,
  MonthCell,
  DayCell,
  TaskBar,
  TaskBarInner,
  DependencyLine,
  AssigneesContainer,
  EditTaskRow,
  EditContent,
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

const GanttView = ({ project, filters, currentUserId }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const [editingIssueId, setEditingIssueId] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [titleError, setTitleError] = useState(null);
  const editRowRef = useRef();

  const filteredIssues = filterIssues(project.issues, filters, currentUserId);
  const sortedIssues = filteredIssues.sort((a, b) => {
    const aStart = a.startDate ? new Date(a.startDate) : new Date();
    const bStart = b.startDate ? new Date(b.startDate) : new Date();
    return aStart - bStart;
  });

  const { startDate, endDate, dayWidth, totalDays } = useMemo(() => {
    if (sortedIssues.length === 0) {
      const today = moment();
      return {
        startDate: today.clone().startOf('month'),
        endDate: today
          .clone()
          .add(2, 'months')
          .endOf('month'),
        dayWidth: 30,
        totalDays: 90,
      };
    }

    const allDates = sortedIssues.flatMap(issue => [
      issue.startDate ? moment(issue.startDate) : moment(),
      issue.dueDate ? moment(issue.dueDate) : moment().add(7, 'days'),
    ]);

    const minDate = moment.min(allDates).startOf('month');
    const maxDate = moment.max(allDates).endOf('month');
    const days = maxDate.diff(minDate, 'days') + 1;

    return {
      startDate: minDate,
      endDate: maxDate,
      dayWidth: 30,
      totalDays: days,
    };
  }, [sortedIssues]);

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

  const months = useMemo(() => {
    const monthsList = [];
    const current = startDate.clone();

    while (current.isSameOrBefore(endDate, 'month')) {
      const monthStart = current.clone().startOf('month');
      const monthEnd = current.clone().endOf('month');

      const daysInView = monthEnd.diff(moment.max(monthStart, startDate), 'days') + 1;

      monthsList.push({
        name: current.format('MMMM YYYY'),
        days: daysInView,
      });

      current.add(1, 'month');
    }

    return monthsList;
  }, [startDate, endDate]);

  const handleTaskClick = issueId => {
    if (!editingIssueId) {
      history.push(`${match.url}/issues/${issueId}`);
    }
  };

  const handleTaskDoubleClick = (event, issue) => {
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

  const calculateTaskPosition = issue => {
    const taskStart = issue.startDate ? moment(issue.startDate) : moment();
    const taskEnd = issue.dueDate ? moment(issue.dueDate) : taskStart.clone().add(7, 'days');

    const left = taskStart.diff(startDate, 'days') * dayWidth;
    const duration = taskEnd.diff(taskStart, 'days') + 1;
    const width = duration * dayWidth;

    return { left, width };
  };

  return (
    <GanttContainer>
      <GanttHeader>
        <TaskListContainer style={{ width: 400 }}>
          <div style={{ padding: '12px 16px', fontWeight: 600 }}>Task</div>
        </TaskListContainer>
        <TimelineContainer>
          <TimelineHeader>
            {months.map((month, index) => (
              <MonthCell key={index} width={month.days * dayWidth}>
                {month.name}
              </MonthCell>
            ))}
          </TimelineHeader>
        </TimelineContainer>
      </GanttHeader>

      {sortedIssues.map(issue => {
        const { left, width } = calculateTaskPosition(issue);
        const isEditing = editingIssueId === issue.id;

        if (isEditing) {
          return (
            <EditTaskRow key={issue.id} ref={editRowRef} onKeyDown={handleKeyDown}>
              <EditContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '12px' }}>
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
              </EditContent>
            </EditTaskRow>
          );
        }

        return (
          <TaskRow key={issue.id}>
            <TaskListContainer>
              <TaskInfo onClick={() => handleTaskClick(issue.id)} onDoubleClick={e => handleTaskDoubleClick(e, issue)}>
                <IssueTypeIcon type={issue.type} size={16} />
                <TaskName>{issue.title}</TaskName>
              </TaskInfo>
              <TaskMeta>
                <AssigneesContainer>
                  {issue.users.slice(0, 3).map(user => (
                    <Avatar key={user.id} size={20} avatarUrl={user.avatarUrl} name={user.name} />
                  ))}
                </AssigneesContainer>
              </TaskMeta>
            </TaskListContainer>
            <TimelineContainer>
              <Timeline width={totalDays * dayWidth}>
                {/* Render day grid */}
                {Array.from({ length: totalDays }).map((_, index) => (
                  <DayCell key={index} width={dayWidth} />
                ))}
                {/* Render task bar */}
                <TaskBar
                  left={left}
                  width={width}
                  status={issue.status}
                  onClick={() => handleTaskClick(issue.id)}
                  onDoubleClick={e => handleTaskDoubleClick(e, issue)}
                >
                  <TaskBarInner>
                    {issue.title.length > 20 ? `${issue.title.substring(0, 20)}...` : issue.title}
                  </TaskBarInner>
                </TaskBar>
              </Timeline>
            </TimelineContainer>
          </TaskRow>
        );
      })}
    </GanttContainer>
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

GanttView.propTypes = propTypes;
GanttView.defaultProps = defaultProps;

export default GanttView;
