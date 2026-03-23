import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import { intersection } from 'lodash';

import { IssueStatusCopy, IssueTypeCopy } from 'shared/constants/issues';
import { IssueTypeIcon, Avatar } from 'shared/components';

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

  // Generate week markers for the header
  const weeks = useMemo(() => {
    const weeksList = [];
    const current = startDate.clone();
    let dayOffset = 0;

    while (current.isSameOrBefore(endDate)) {
      const weekStart = current.clone().startOf('week');
      const weekEnd = current.clone().endOf('week');
      const clampedStart = moment.max(weekStart, startDate);
      const clampedEnd = moment.min(weekEnd, endDate);
      const daysInWeek = clampedEnd.diff(clampedStart, 'days') + 1;

      weeksList.push({
        label: current.format('D'),
        days: daysInWeek,
        offset: dayOffset,
      });

      dayOffset += daysInWeek;
      current.add(1, 'week').startOf('week');
    }

    return weeksList;
  }, [startDate, endDate]);

  const handleTaskClick = issueId => {
    history.push(`${match.url}/issues/${issueId}`);
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
          <TimelineHeader style={{ flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
              {months.map((month, index) => (
                <MonthCell key={index} width={month.days * dayWidth}>
                  {month.name}
                </MonthCell>
              ))}
            </div>
            <div style={{ display: 'flex', borderTop: '1px solid #dfe1e6' }}>
              {weeks.map((week, index) => (
                <div
                  key={index}
                  style={{
                    width: week.days * dayWidth,
                    minWidth: week.days * dayWidth,
                    textAlign: 'center',
                    padding: '4px 0',
                    fontSize: 11,
                    color: '#5e6c84',
                    borderRight: '1px solid #dfe1e6',
                  }}
                >
                  {week.label}
                </div>
              ))}
            </div>
          </TimelineHeader>
        </TimelineContainer>
      </GanttHeader>

      {sortedIssues.map(issue => {
        const { left, width } = calculateTaskPosition(issue);

        return (
          <TaskRow key={issue.id}>
            <TaskListContainer>
              <TaskInfo onClick={() => handleTaskClick(issue.id)}>
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
                >
                  <TaskBarInner title={`${issue.title} (${issue.startDate ? moment(issue.startDate).format('MMM D') : 'N/A'} - ${issue.dueDate ? moment(issue.dueDate).format('MMM D') : 'N/A'})`}>
                    {issue.title}
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
