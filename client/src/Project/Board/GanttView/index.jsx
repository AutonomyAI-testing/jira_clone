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
