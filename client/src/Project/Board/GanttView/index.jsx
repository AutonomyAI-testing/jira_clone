import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import { intersection } from 'lodash';

import { IssueType, IssueTypeCopy, IssueStatus, IssueStatusCopy, IssuePriority, IssuePriorityCopy } from 'shared/constants/issues';
import { IssueTypeIcon, IssuePriorityIcon, Avatar, Select, Icon, Button } from 'shared/components';
import { KeyCodes } from 'shared/constants/keyCodes';
import api from 'shared/utils/api';

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

const GanttView = ({ project, filters, currentUserId, updateLocalProjectIssues }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const [editingIssueId, setEditingIssueId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

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

  const handleTaskClick = (issueId, title, e) => {
    if (e) {
      e.stopPropagation();
    }
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

  const handleSave = (issueId, originalTitle) => {
    const trimmedTitle = editedTitle.trim();
    if (trimmedTitle && trimmedTitle !== originalTitle) {
      updateIssue(issueId, { title: trimmedTitle });
    }
    setEditingIssueId(null);
  };

  const handleCancel = (originalTitle) => {
    setEditedTitle(originalTitle);
    setEditingIssueId(null);
  };

  const handleTitleKeyDown = (e, issueId, originalTitle) => {
    if (e.keyCode === KeyCodes.ENTER) {
      e.preventDefault();
      handleSave(issueId, originalTitle);
    } else if (e.keyCode === KeyCodes.ESCAPE) {
      handleCancel(originalTitle);
    }
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

        return (
          <TaskRow key={issue.id} isEditing={isEditing}>
            <TaskListContainer>
              {isEditing ? (
                <div style={{ padding: '8px 12px' }}>
                  <input
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    onKeyDown={(e) => handleTitleKeyDown(e, issue.id, issue.title)}
                    autoFocus
                    style={{
                      width: '100%',
                      padding: '6px 8px',
                      border: '1px solid #4C9AFF',
                      borderRadius: 3,
                      fontSize: 14,
                      outline: 'none',
                      marginBottom: 8,
                    }}
                  />
                  <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
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
                          <IssueTypeIcon type={type} size={14} />
                          <span style={{ marginLeft: 4, fontSize: 12 }}>{IssueTypeCopy[type]}</span>
                        </div>
                      )}
                    />
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
                          <IssuePriorityIcon priority={priority} size={14} />
                          <span style={{ marginLeft: 4, fontSize: 12 }}>{IssuePriorityCopy[priority]}</span>
                        </div>
                      )}
                    />
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
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
                        <span style={{ fontSize: 12 }}>{IssueStatusCopy[status]}</span>
                      )}
                    />
                  </div>
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
                            marginBottom: 4,
                            cursor: 'pointer',
                          }}
                          onClick={removeOptionValue}
                        >
                          <Avatar avatarUrl={user.avatarUrl} name={user.name} size={16} />
                          <span style={{ fontSize: 11 }}>{user.name}</span>
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
                  <ActionsRow>
                    <Button variant="empty" onClick={() => handleCancel(issue.title)}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSave(issue.id, issue.title)}>
                      Save
                    </Button>
                  </ActionsRow>
                </div>
              ) : (
                <div>
                  <TaskInfo onClick={(e) => handleTaskClick(issue.id, issue.title, e)}>
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
                </div>
              )}
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
                  onClick={(e) => handleTaskClick(issue.id, issue.title, e)}
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
