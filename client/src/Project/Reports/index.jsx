import React, { Fragment, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Breadcrumbs, Avatar, IssueTypeIcon, IssuePriorityIcon } from 'shared/components';
import {
  IssueStatus,
  IssueStatusCopy,
  IssueType,
  IssueTypeCopy,
  IssuePriority,
  IssuePriorityCopy,
} from 'shared/constants/issues';
import {
  issueStatusBackgroundColors,
  issueTypeColors,
  issuePriorityColors,
} from 'shared/utils/styles';
import { formatDateTimeConversational } from 'shared/utils/dateTime';

import {
  ReportsPage,
  PageHeader,
  PageTitle,
  FilterBar,
  FilterButton,
  SummaryRow,
  SummaryCard,
  SummaryValue,
  SummaryLabel,
  WidgetGrid,
  Widget,
  WidgetHeader,
  WidgetTitle,
  WidgetBody,
  StatusBar,
  StatusBarSegment,
  StatusBarLabel,
  TypeBar,
  TypeBarSegment,
  TypeBarLabel,
  PriorityBar,
  PriorityBarFill,
  PriorityBarLabel,
  WorkloadItem,
  WorkloadUserInfo,
  WorkloadUserName,
  WorkloadBar,
  WorkloadBarFill,
  WorkloadCount,
  TimeTrackingStats,
  TimeTrackingStat,
  TimeTrackingStatValue,
  TimeTrackingStatLabel,
  TimeTrackingProgressBar,
  TimeTrackingProgressBarFill,
  IssueTable,
  IssueRow,
  IssueInfo,
  IssueTitle,
  IssueMeta,
  IssueStatusBadge,
  IssueTimestamp,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectReports = ({ project }) => {
  const [timeRange, setTimeRange] = useState('all');

  const filteredIssues = useMemo(() => {
    const now = new Date();
    if (timeRange === '7days') {
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      return project.issues.filter(issue => new Date(issue.updatedAt) >= sevenDaysAgo);
    }
    if (timeRange === '30days') {
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      return project.issues.filter(issue => new Date(issue.updatedAt) >= thirtyDaysAgo);
    }
    return project.issues;
  }, [project.issues, timeRange]);

  // Calculate stats
  const totalIssues = filteredIssues.length;
  const doneIssues = filteredIssues.filter(issue => issue.status === IssueStatus.DONE).length;
  const inProgressIssues = filteredIssues.filter(
    issue => issue.status === IssueStatus.INPROGRESS,
  ).length;
  const unestimatedIssues = filteredIssues.filter(
    issue => issue.estimate === null || issue.estimate === undefined,
  ).length;

  // Issues by Status
  const issuesByStatus = {
    [IssueStatus.BACKLOG]: filteredIssues.filter(issue => issue.status === IssueStatus.BACKLOG)
      .length,
    [IssueStatus.SELECTED]: filteredIssues.filter(issue => issue.status === IssueStatus.SELECTED)
      .length,
    [IssueStatus.INPROGRESS]: filteredIssues.filter(
      issue => issue.status === IssueStatus.INPROGRESS,
    ).length,
    [IssueStatus.DONE]: filteredIssues.filter(issue => issue.status === IssueStatus.DONE).length,
  };

  // Issues by Type
  const issuesByType = {
    [IssueType.TASK]: filteredIssues.filter(issue => issue.type === IssueType.TASK).length,
    [IssueType.BUG]: filteredIssues.filter(issue => issue.type === IssueType.BUG).length,
    [IssueType.STORY]: filteredIssues.filter(issue => issue.type === IssueType.STORY).length,
  };

  // Priority Distribution
  const issuesByPriority = {
    [IssuePriority.HIGHEST]: filteredIssues.filter(
      issue => issue.priority === IssuePriority.HIGHEST,
    ).length,
    [IssuePriority.HIGH]: filteredIssues.filter(issue => issue.priority === IssuePriority.HIGH)
      .length,
    [IssuePriority.MEDIUM]: filteredIssues.filter(issue => issue.priority === IssuePriority.MEDIUM)
      .length,
    [IssuePriority.LOW]: filteredIssues.filter(issue => issue.priority === IssuePriority.LOW)
      .length,
    [IssuePriority.LOWEST]: filteredIssues.filter(issue => issue.priority === IssuePriority.LOWEST)
      .length,
  };

  const maxPriorityCount = Math.max(...Object.values(issuesByPriority));

  // Workload by Assignee
  const workloadByAssignee = project.users
    .map(user => {
      const assignedIssues = filteredIssues.filter(issue =>
        issue.userIds.includes(user.id),
      ).length;
      return {
        user,
        count: assignedIssues,
      };
    })
    .sort((a, b) => b.count - a.count);

  const maxWorkloadCount = Math.max(...workloadByAssignee.map(w => w.count), 1);

  // Time Tracking
  const totalEstimated = filteredIssues.reduce((sum, issue) => sum + (issue.estimate || 0), 0);
  const totalLogged = filteredIssues.reduce((sum, issue) => sum + (issue.timeSpent || 0), 0);
  const totalRemaining = filteredIssues.reduce(
    (sum, issue) => sum + (issue.timeRemaining || 0),
    0,
  );

  const timeTrackingProgress =
    totalEstimated > 0 ? Math.min((totalLogged / totalEstimated) * 100, 100) : 0;

  // Recently Updated Issues
  const recentlyUpdatedIssues = [...filteredIssues]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 5);

  return (
    <Fragment>
      <Breadcrumbs items={['Projects', project.name, 'Reports']} />
      <ReportsPage>
        <PageHeader>
          <PageTitle>Reports</PageTitle>
        </PageHeader>

        <FilterBar>
          <FilterButton active={timeRange === '7days'} onClick={() => setTimeRange('7days')}>
            Last 7 Days
          </FilterButton>
          <FilterButton active={timeRange === '30days'} onClick={() => setTimeRange('30days')}>
            Last 30 Days
          </FilterButton>
          <FilterButton active={timeRange === 'all'} onClick={() => setTimeRange('all')}>
            All Time
          </FilterButton>
        </FilterBar>

        <SummaryRow>
          <SummaryCard>
            <SummaryValue>{totalIssues}</SummaryValue>
            <SummaryLabel>Total Issues</SummaryLabel>
          </SummaryCard>
          <SummaryCard accent="success">
            <SummaryValue>{doneIssues}</SummaryValue>
            <SummaryLabel>Done</SummaryLabel>
          </SummaryCard>
          <SummaryCard accent="primary">
            <SummaryValue>{inProgressIssues}</SummaryValue>
            <SummaryLabel>In Progress</SummaryLabel>
          </SummaryCard>
          <SummaryCard accent="warning">
            <SummaryValue>{unestimatedIssues}</SummaryValue>
            <SummaryLabel>Unestimated</SummaryLabel>
          </SummaryCard>
        </SummaryRow>

        <WidgetGrid>
          {/* Widget 1: Issues by Status */}
          <Widget>
            <WidgetHeader>
              <WidgetTitle>Issues by Status</WidgetTitle>
            </WidgetHeader>
            <WidgetBody>
              {Object.entries(issuesByStatus).map(([status, count]) => (
                <StatusBar key={status}>
                  <StatusBarSegment
                    color={issueStatusBackgroundColors[status]}
                    width={(count / totalIssues) * 100}
                  >
                    <StatusBarLabel>{count}</StatusBarLabel>
                  </StatusBarSegment>
                  <span style={{ marginLeft: 8, fontSize: 14 }}>{IssueStatusCopy[status]}</span>
                </StatusBar>
              ))}
            </WidgetBody>
          </Widget>

          {/* Widget 2: Issues by Type */}
          <Widget>
            <WidgetHeader>
              <WidgetTitle>Issues by Type</WidgetTitle>
            </WidgetHeader>
            <WidgetBody>
              {Object.entries(issuesByType).map(([type, count]) => (
                <TypeBar key={type}>
                  <TypeBarSegment color={issueTypeColors[type]} width={(count / totalIssues) * 100}>
                    <TypeBarLabel>{count}</TypeBarLabel>
                  </TypeBarSegment>
                  <span style={{ marginLeft: 8, fontSize: 14 }}>{IssueTypeCopy[type]}</span>
                </TypeBar>
              ))}
            </WidgetBody>
          </Widget>

          {/* Widget 3: Priority Distribution */}
          <Widget>
            <WidgetHeader>
              <WidgetTitle>Priority Distribution</WidgetTitle>
            </WidgetHeader>
            <WidgetBody>
              {Object.entries(issuesByPriority).map(([priority, count]) => (
                <PriorityBar key={priority}>
                  <PriorityBarLabel>{IssuePriorityCopy[priority]}</PriorityBarLabel>
                  <PriorityBarFill
                    color={issuePriorityColors[priority]}
                    width={(count / maxPriorityCount) * 100}
                  >
                    {count}
                  </PriorityBarFill>
                </PriorityBar>
              ))}
            </WidgetBody>
          </Widget>

          {/* Widget 4: Workload by Assignee */}
          <Widget>
            <WidgetHeader>
              <WidgetTitle>Workload by Assignee</WidgetTitle>
            </WidgetHeader>
            <WidgetBody>
              {workloadByAssignee.map(({ user, count }) => (
                <WorkloadItem key={user.id}>
                  <WorkloadUserInfo>
                    <Avatar size={32} avatarUrl={user.avatarUrl} name={user.name} />
                    <WorkloadUserName>{user.name}</WorkloadUserName>
                  </WorkloadUserInfo>
                  <WorkloadBar>
                    <WorkloadBarFill width={(count / maxWorkloadCount) * 100}>
                      <WorkloadCount>{count}</WorkloadCount>
                    </WorkloadBarFill>
                  </WorkloadBar>
                </WorkloadItem>
              ))}
            </WidgetBody>
          </Widget>

          {/* Widget 5: Time Tracking Overview */}
          <Widget>
            <WidgetHeader>
              <WidgetTitle>Time Tracking Overview</WidgetTitle>
            </WidgetHeader>
            <WidgetBody>
              <TimeTrackingStats>
                <TimeTrackingStat>
                  <TimeTrackingStatValue>{totalEstimated}h</TimeTrackingStatValue>
                  <TimeTrackingStatLabel>Estimated</TimeTrackingStatLabel>
                </TimeTrackingStat>
                <TimeTrackingStat>
                  <TimeTrackingStatValue>{totalLogged}h</TimeTrackingStatValue>
                  <TimeTrackingStatLabel>Logged</TimeTrackingStatLabel>
                </TimeTrackingStat>
                <TimeTrackingStat>
                  <TimeTrackingStatValue>{totalRemaining}h</TimeTrackingStatValue>
                  <TimeTrackingStatLabel>Remaining</TimeTrackingStatLabel>
                </TimeTrackingStat>
              </TimeTrackingStats>
              <TimeTrackingProgressBar>
                <TimeTrackingProgressBarFill width={timeTrackingProgress} />
              </TimeTrackingProgressBar>
            </WidgetBody>
          </Widget>

          {/* Widget 6: Recently Updated Issues */}
          <Widget>
            <WidgetHeader>
              <WidgetTitle>Recently Updated Issues</WidgetTitle>
            </WidgetHeader>
            <WidgetBody>
              <IssueTable>
                {recentlyUpdatedIssues.map(issue => (
                  <IssueRow key={issue.id}>
                    <IssueTypeIcon type={issue.type} size={16} />
                    <IssueInfo>
                      <IssueTitle>{issue.title}</IssueTitle>
                      <IssueMeta>
                        <IssueStatusBadge color={issueStatusBackgroundColors[issue.status]}>
                          {IssueStatusCopy[issue.status]}
                        </IssueStatusBadge>
                        <IssuePriorityIcon priority={issue.priority} size={14} />
                        <IssueTimestamp>{formatDateTimeConversational(issue.updatedAt)}</IssueTimestamp>
                      </IssueMeta>
                    </IssueInfo>
                  </IssueRow>
                ))}
              </IssueTable>
            </WidgetBody>
          </Widget>
        </WidgetGrid>
      </ReportsPage>
    </Fragment>
  );
};

ProjectReports.propTypes = propTypes;

export default ProjectReports;
