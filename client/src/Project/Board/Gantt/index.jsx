import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { IssueStatus, IssueStatusCopy } from 'shared/constants/issues';
import { IssueTypeIcon } from 'shared/components';

import {
  GanttContainer,
  GanttHeader,
  TaskColumn,
  TimelineColumn,
  MonthsRow,
  MonthCell,
  DaysRow,
  DayCell,
  GanttBody,
  TaskRow,
  TaskInfo,
  TaskTitle,
  TaskMeta,
  TaskStatus,
  TimelineArea,
  TimelineGrid,
  TimelineGridCell,
  TaskBar,
  EmptyState,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const STATUS_COLORS = {
  [IssueStatus.BACKLOG]: '#DFE1E6',
  [IssueStatus.SELECTED]: '#4BADE8',
  [IssueStatus.IN_PROGRESS]: '#0052CC',
  [IssueStatus.DONE]: '#00875A',
};

const STATUS_TEXT_COLORS = {
  [IssueStatus.BACKLOG]: '#42526E',
  [IssueStatus.SELECTED]: '#fff',
  [IssueStatus.IN_PROGRESS]: '#fff',
  [IssueStatus.DONE]: '#fff',
};

const ProjectBoardGantt = ({ project }) => {
  const match = useRouteMatch();
  const history = useHistory();

  // Filter issues with dates
  const issuesWithDates = useMemo(() => {
    return project.issues.filter(issue => issue.startDate || issue.dueDate);
  }, [project.issues]);

  // Calculate timeline range
  const { startDate, months, days } = useMemo(() => {
    if (issuesWithDates.length === 0) {
      // Default to current month if no issues with dates
      const start = moment().startOf('month');
      const end = moment().endOf('month');
      return calculateTimeline(start, end);
    }

    const dates = issuesWithDates.reduce((acc, issue) => {
      if (issue.startDate) acc.push(moment(issue.startDate));
      if (issue.dueDate) acc.push(moment(issue.dueDate));
      return acc;
    }, []);

    const minDate = moment.min(dates);
    const maxDate = moment.max(dates);

    // Add padding
    const start = minDate.clone().subtract(1, 'week').startOf('week');
    const end = maxDate.clone().add(2, 'weeks').endOf('week');

    return calculateTimeline(start, end);
  }, [issuesWithDates]);

  const handleTaskClick = issueId => {
    const issueLink = match.url === '/' ? `/issues/${issueId}` : `${match.url}/issues/${issueId}`;
    history.push(issueLink);
  };

  const calculateTaskBarPosition = issue => {
    const taskStart = issue.startDate ? moment(issue.startDate) : moment(issue.dueDate);
    const taskEnd = issue.dueDate ? moment(issue.dueDate) : moment(issue.startDate);

    if (!taskStart || !taskEnd) return null;

    const dayWidth = 40; // matches TimelineGridCell min-width
    const daysFromStart = taskStart.diff(startDate, 'days');
    const duration = taskEnd.diff(taskStart, 'days') + 1;

    return {
      left: daysFromStart * dayWidth,
      width: Math.max(duration * dayWidth, 80), // minimum width
    };
  };

  if (issuesWithDates.length === 0) {
    return (
      <GanttContainer>
        <EmptyState>
          No tasks with dates yet. Add start or due dates to tasks to see them in the Gantt view.
        </EmptyState>
      </GanttContainer>
    );
  }

  return (
    <GanttContainer>
      <GanttHeader>
        <TaskColumn>Tasks</TaskColumn>
        <TimelineColumn>Timeline</TimelineColumn>
      </GanttHeader>

      {/* Timeline Header */}
      <div style={{ display: 'flex' }}>
        <div style={{ minWidth: 250, width: 250, flexShrink: 0 }} />
        <div style={{ flex: 1, overflowX: 'auto' }}>
          <MonthsRow>
            {months.map((month, index) => (
              <MonthCell key={index} style={{ width: month.days * 40 }}>
                {month.label}
              </MonthCell>
            ))}
          </MonthsRow>
          <DaysRow>
            {days.map((day, index) => (
              <DayCell key={index} isToday={day.isToday}>
                {day.label}
              </DayCell>
            ))}
          </DaysRow>
        </div>
      </div>

      {/* Task Rows */}
      <GanttBody>
        {issuesWithDates.map(issue => {
          const barPosition = calculateTaskBarPosition(issue);
          if (!barPosition) return null;

          return (
            <TaskRow key={issue.id}>
              <TaskInfo>
                <TaskTitle>{issue.title}</TaskTitle>
                <TaskMeta>
                  <IssueTypeIcon type={issue.type} size={16} />
                  <TaskStatus
                    statusColor={STATUS_COLORS[issue.status]}
                    textColor={STATUS_TEXT_COLORS[issue.status]}
                  >
                    {IssueStatusCopy[issue.status]}
                  </TaskStatus>
                </TaskMeta>
              </TaskInfo>
              <TimelineArea>
                <TimelineGrid>
                  {days.map((day, index) => (
                    <TimelineGridCell key={index} isToday={day.isToday} />
                  ))}
                </TimelineGrid>
                <TaskBar
                  style={{
                    left: barPosition.left,
                    width: barPosition.width,
                  }}
                  color={STATUS_COLORS[issue.status]}
                  onClick={() => handleTaskClick(issue.id)}
                >
                  {issue.title}
                </TaskBar>
              </TimelineArea>
            </TaskRow>
          );
        })}
      </GanttBody>
    </GanttContainer>
  );
};

const calculateTimeline = (start, end) => {
  const startDate = start.clone().startOf('day');
  const endDate = end.clone().endOf('day');
  const totalDays = endDate.diff(startDate, 'days') + 1;

  const months = [];
  const days = [];

  let currentMonth = null;
  let monthDayCount = 0;

  for (let i = 0; i < totalDays; i += 1) {
    const day = startDate.clone().add(i, 'days');
    const monthKey = day.format('YYYY-MM');
    const isToday = day.isSame(moment(), 'day');

    // Track months
    if (monthKey !== currentMonth) {
      if (currentMonth !== null) {
        months[months.length - 1].days = monthDayCount;
      }
      currentMonth = monthKey;
      monthDayCount = 0;
      months.push({
        label: day.format('MMMM YYYY'),
        days: 0,
      });
    }
    monthDayCount += 1;

    // Add day
    days.push({
      label: day.format('D'),
      isToday,
    });
  }

  // Update last month's day count
  if (months.length > 0) {
    months[months.length - 1].days = monthDayCount;
  }

  return { startDate, endDate, months, days, totalDays };
};

ProjectBoardGantt.propTypes = propTypes;

export default ProjectBoardGantt;
