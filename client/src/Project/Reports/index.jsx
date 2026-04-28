import React, { Fragment, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Breadcrumbs, Avatar, IssueTypeIcon, IssuePriorityIcon, Select, Icon } from 'shared/components';
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
  AdvancedFilters,
  FilterGroup,
  FilterLabel,
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
  WidgetActions,
  ActionButton,
  WidgetHeaderContent,
  CollapsedPlaceholder,
  ChartLegend,
  LegendItem,
  LegendColor,
  LegendLabel,
  LegendValue,
  VelocityChart,
  VelocityBar,
  VelocityBarGroup,
  VelocityBarCompleted,
  VelocityBarCommitted,
  VelocityWeek,
  BurndownChart,
  BurndownLine,
  BurndownIdealLine,
  BurndownPoint,
  BurndownGrid,
  BurndownYAxis,
  BurndownXAxis,
  BurndownLabel,
  TrendIndicator,
  TrendValue,
  TrendIcon,
  CompletionRate,
  CompletionRateBar,
  CompletionRateFill,
  CompletionRateLabel,
  MetricGrid,
  MetricCard,
  MetricValue,
  MetricLabel,
  MetricChange,
  Tooltip,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectReports = ({ project }) => {
  const [timeRange, setTimeRange] = useState('all');
  const [selectedAssignees, setSelectedAssignees] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPriorities, setSelectedPriorities] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [collapsedWidgets, setCollapsedWidgets] = useState({});
  const [hoveredWidget, setHoveredWidget] = useState(null);

  const filteredIssues = useMemo(() => {
    const now = new Date();
    let issues = project.issues;

    // Time range filter
    if (timeRange === '7days') {
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      issues = issues.filter(issue => new Date(issue.updatedAt) >= sevenDaysAgo);
    } else if (timeRange === '30days') {
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      issues = issues.filter(issue => new Date(issue.updatedAt) >= thirtyDaysAgo);
    }

    // Assignee filter
    if (selectedAssignees.length > 0) {
      issues = issues.filter(issue =>
        issue.userIds.some(userId => selectedAssignees.includes(userId)),
      );
    }

    // Type filter
    if (selectedTypes.length > 0) {
      issues = issues.filter(issue => selectedTypes.includes(issue.type));
    }

    // Priority filter
    if (selectedPriorities.length > 0) {
      issues = issues.filter(issue => selectedPriorities.includes(issue.priority));
    }

    // Status filter
    if (selectedStatuses.length > 0) {
      issues = issues.filter(issue => selectedStatuses.includes(issue.status));
    }

    return issues;
  }, [project.issues, timeRange, selectedAssignees, selectedTypes, selectedPriorities, selectedStatuses]);

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

  // Velocity data (last 4 weeks)
  const velocityData = [
    { week: 'Week 1', committed: 15, completed: 12 },
    { week: 'Week 2', committed: 18, completed: 16 },
    { week: 'Week 3', committed: 20, completed: 18 },
    { week: 'Week 4', committed: 16, completed: 14 },
  ];

  const maxVelocity = Math.max(
    ...velocityData.map(d => Math.max(d.committed, d.completed)),
  );

  // Burndown data (sprint progress)
  const burndownData = [
    { day: 0, remaining: totalIssues, ideal: totalIssues },
    { day: 1, remaining: totalIssues - 2, ideal: totalIssues - (totalIssues / 7) * 1 },
    { day: 2, remaining: totalIssues - 4, ideal: totalIssues - (totalIssues / 7) * 2 },
    { day: 3, remaining: totalIssues - 5, ideal: totalIssues - (totalIssues / 7) * 3 },
    { day: 4, remaining: totalIssues - 8, ideal: totalIssues - (totalIssues / 7) * 4 },
    { day: 5, remaining: totalIssues - 10, ideal: totalIssues - (totalIssues / 7) * 5 },
    { day: 6, remaining: totalIssues - 11, ideal: totalIssues - (totalIssues / 7) * 6 },
    { day: 7, remaining: totalIssues - doneIssues, ideal: 0 },
  ];

  const maxBurndown = Math.max(...burndownData.map(d => Math.max(d.remaining, d.ideal)));

  // Toggle widget collapse
  const toggleWidget = useCallback(widgetId => {
    setCollapsedWidgets(prev => ({ ...prev, [widgetId]: !prev[widgetId] }));
  }, []);

  // Filter options
  const assigneeOptions = project.users.map(user => ({
    value: user.id,
    label: user.name,
  }));

  const typeOptions = [
    { value: IssueType.TASK, label: IssueTypeCopy[IssueType.TASK] },
    { value: IssueType.BUG, label: IssueTypeCopy[IssueType.BUG] },
    { value: IssueType.STORY, label: IssueTypeCopy[IssueType.STORY] },
  ];

  const priorityOptions = [
    { value: IssuePriority.HIGHEST, label: IssuePriorityCopy[IssuePriority.HIGHEST] },
    { value: IssuePriority.HIGH, label: IssuePriorityCopy[IssuePriority.HIGH] },
    { value: IssuePriority.MEDIUM, label: IssuePriorityCopy[IssuePriority.MEDIUM] },
    { value: IssuePriority.LOW, label: IssuePriorityCopy[IssuePriority.LOW] },
    { value: IssuePriority.LOWEST, label: IssuePriorityCopy[IssuePriority.LOWEST] },
  ];

  const statusOptions = [
    { value: IssueStatus.BACKLOG, label: IssueStatusCopy[IssueStatus.BACKLOG] },
    { value: IssueStatus.SELECTED, label: IssueStatusCopy[IssueStatus.SELECTED] },
    { value: IssueStatus.INPROGRESS, label: IssueStatusCopy[IssueStatus.INPROGRESS] },
    { value: IssueStatus.DONE, label: IssueStatusCopy[IssueStatus.DONE] },
  ];

  // Completion rate by priority
  const completionRateByPriority = [
    IssuePriority.HIGHEST,
    IssuePriority.HIGH,
    IssuePriority.MEDIUM,
    IssuePriority.LOW,
    IssuePriority.LOWEST,
  ].map(priority => {
    const total = filteredIssues.filter(issue => issue.priority === priority).length;
    const completed = filteredIssues.filter(
      issue => issue.priority === priority && issue.status === IssueStatus.DONE,
    ).length;
    const rate = total > 0 ? (completed / total) * 100 : 0;
    return {
      priority,
      total,
      completed,
      rate,
    };
  });

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

        <AdvancedFilters>
          <FilterGroup>
            <FilterLabel>Assignee</FilterLabel>
            <Select
              name="assignee-filter"
              placeholder="All assignees"
              value={selectedAssignees}
              options={assigneeOptions}
              onChange={setSelectedAssignees}
              isMulti
              withClearValue
            />
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>Type</FilterLabel>
            <Select
              name="type-filter"
              placeholder="All types"
              value={selectedTypes}
              options={typeOptions}
              onChange={setSelectedTypes}
              isMulti
              withClearValue
            />
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>Priority</FilterLabel>
            <Select
              name="priority-filter"
              placeholder="All priorities"
              value={selectedPriorities}
              options={priorityOptions}
              onChange={setSelectedPriorities}
              isMulti
              withClearValue
            />
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>Status</FilterLabel>
            <Select
              name="status-filter"
              placeholder="All statuses"
              value={selectedStatuses}
              options={statusOptions}
              onChange={setSelectedStatuses}
              isMulti
              withClearValue
            />
          </FilterGroup>
        </AdvancedFilters>

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
          <Widget onMouseEnter={() => setHoveredWidget('status')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Issues by Status</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('status')} title="Collapse">
                    <Icon type={collapsedWidgets.status ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.status ? (
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
                <ChartLegend>
                  {Object.entries(issuesByStatus).map(([status, count]) => (
                    <LegendItem key={status}>
                      <LegendColor color={issueStatusBackgroundColors[status]} />
                      <LegendLabel>{IssueStatusCopy[status]}</LegendLabel>
                      <LegendValue>{count}</LegendValue>
                    </LegendItem>
                  ))}
                </ChartLegend>
              </WidgetBody>
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>

          {/* Widget 2: Issues by Type */}
          <Widget onMouseEnter={() => setHoveredWidget('type')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Issues by Type</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('type')} title="Collapse">
                    <Icon type={collapsedWidgets.type ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.type ? (
              <WidgetBody>
                {Object.entries(issuesByType).map(([type, count]) => (
                  <TypeBar key={type}>
                    <TypeBarSegment color={issueTypeColors[type]} width={(count / totalIssues) * 100}>
                      <TypeBarLabel>{count}</TypeBarLabel>
                    </TypeBarSegment>
                    <span style={{ marginLeft: 8, fontSize: 14 }}>{IssueTypeCopy[type]}</span>
                  </TypeBar>
                ))}
                <ChartLegend>
                  {Object.entries(issuesByType).map(([type, count]) => (
                    <LegendItem key={type}>
                      <LegendColor color={issueTypeColors[type]} />
                      <LegendLabel>{IssueTypeCopy[type]}</LegendLabel>
                      <LegendValue>{count}</LegendValue>
                    </LegendItem>
                  ))}
                </ChartLegend>
              </WidgetBody>
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>

          {/* Widget 3: Priority Distribution */}
          <Widget onMouseEnter={() => setHoveredWidget('priority')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Priority Distribution</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('priority')} title="Collapse">
                    <Icon type={collapsedWidgets.priority ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.priority ? (
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
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>

          {/* Widget 4: Workload by Assignee */}
          <Widget onMouseEnter={() => setHoveredWidget('workload')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Workload by Assignee</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('workload')} title="Collapse">
                    <Icon type={collapsedWidgets.workload ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.workload ? (
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
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>

          {/* Widget 5: Time Tracking Overview */}
          <Widget onMouseEnter={() => setHoveredWidget('time')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Time Tracking Overview</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('time')} title="Collapse">
                    <Icon type={collapsedWidgets.time ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.time ? (
              <WidgetBody>
                <TimeTrackingStats>
                  <TimeTrackingStat>
                    <TimeTrackingStatValue>{totalEstimated}h</TimeTrackingStatValue>
                    <TimeTrackingStatLabel>Estimated</TimeTrackingStatLabel>
                    <TrendIndicator positive={totalEstimated > 0}>
                      <TrendIcon>{totalEstimated > 0 ? '↑' : '–'}</TrendIcon>
                      <TrendValue>{totalEstimated > 0 ? '+' : ''}0h</TrendValue>
                    </TrendIndicator>
                  </TimeTrackingStat>
                  <TimeTrackingStat>
                    <TimeTrackingStatValue>{totalLogged}h</TimeTrackingStatValue>
                    <TimeTrackingStatLabel>Logged</TimeTrackingStatLabel>
                    <TrendIndicator positive>
                      <TrendIcon>↑</TrendIcon>
                      <TrendValue>+{Math.round(totalLogged * 0.15)}h</TrendValue>
                    </TrendIndicator>
                  </TimeTrackingStat>
                  <TimeTrackingStat>
                    <TimeTrackingStatValue>{totalRemaining}h</TimeTrackingStatValue>
                    <TimeTrackingStatLabel>Remaining</TimeTrackingStatLabel>
                    <TrendIndicator positive={false}>
                      <TrendIcon>↓</TrendIcon>
                      <TrendValue>-{Math.round(totalRemaining * 0.1)}h</TrendValue>
                    </TrendIndicator>
                  </TimeTrackingStat>
                </TimeTrackingStats>
                <TimeTrackingProgressBar>
                  <TimeTrackingProgressBarFill width={timeTrackingProgress} />
                </TimeTrackingProgressBar>
              </WidgetBody>
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>

          {/* Widget 6: Recently Updated Issues */}
          <Widget onMouseEnter={() => setHoveredWidget('recent')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Recently Updated Issues</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('recent')} title="Collapse">
                    <Icon type={collapsedWidgets.recent ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.recent ? (
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
                          <IssueTimestamp>
                            {formatDateTimeConversational(issue.updatedAt)}
                          </IssueTimestamp>
                        </IssueMeta>
                      </IssueInfo>
                    </IssueRow>
                  ))}
                </IssueTable>
              </WidgetBody>
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>

          {/* Widget 7: Team Velocity */}
          <Widget onMouseEnter={() => setHoveredWidget('velocity')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Team Velocity (Story Points)</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('velocity')} title="Collapse">
                    <Icon type={collapsedWidgets.velocity ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.velocity ? (
              <WidgetBody>
                <VelocityChart>
                  {velocityData.map((data, index) => (
                    <VelocityBarGroup key={index}>
                      <VelocityWeek>{data.week}</VelocityWeek>
                      <VelocityBar>
                        <VelocityBarCommitted height={(data.committed / maxVelocity) * 100}>
                          {data.committed}
                        </VelocityBarCommitted>
                        <VelocityBarCompleted height={(data.completed / maxVelocity) * 100}>
                          {data.completed}
                        </VelocityBarCompleted>
                      </VelocityBar>
                    </VelocityBarGroup>
                  ))}
                </VelocityChart>
                <ChartLegend>
                  <LegendItem>
                    <LegendColor color="#0052CC" />
                    <LegendLabel>Committed</LegendLabel>
                  </LegendItem>
                  <LegendItem>
                    <LegendColor color="#00875A" />
                    <LegendLabel>Completed</LegendLabel>
                  </LegendItem>
                </ChartLegend>
              </WidgetBody>
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>

          {/* Widget 8: Sprint Burndown */}
          <Widget onMouseEnter={() => setHoveredWidget('burndown')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Sprint Burndown</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('burndown')} title="Collapse">
                    <Icon type={collapsedWidgets.burndown ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.burndown ? (
              <WidgetBody>
                <BurndownChart>
                  <BurndownGrid />
                  <BurndownYAxis>
                    {[0, 25, 50, 75, 100].map(val => (
                      <BurndownLabel key={val} top={(100 - val) + '%'}>
                        {Math.round((maxBurndown * val) / 100)}
                      </BurndownLabel>
                    ))}
                  </BurndownYAxis>
                  <BurndownIdealLine
                    points={burndownData
                      .map(
                        (d, i) =>
                          `${(i / (burndownData.length - 1)) * 100},${100 - (d.ideal / maxBurndown) * 100}`,
                      )
                      .join(' ')}
                  />
                  <BurndownLine
                    points={burndownData
                      .map(
                        (d, i) =>
                          `${(i / (burndownData.length - 1)) * 100},${100 - (d.remaining / maxBurndown) * 100}`,
                      )
                      .join(' ')}
                  />
                  {burndownData.map((d, i) => (
                    <BurndownPoint
                      key={i}
                      left={(i / (burndownData.length - 1)) * 100 + '%'}
                      top={100 - (d.remaining / maxBurndown) * 100 + '%'}
                    />
                  ))}
                  <BurndownXAxis>
                    {burndownData.map((d, i) => (
                      <BurndownLabel key={i}>Day {d.day}</BurndownLabel>
                    ))}
                  </BurndownXAxis>
                </BurndownChart>
                <ChartLegend>
                  <LegendItem>
                    <LegendColor color="#0052CC" />
                    <LegendLabel>Actual</LegendLabel>
                  </LegendItem>
                  <LegendItem>
                    <LegendColor color="#DFE1E6" />
                    <LegendLabel>Ideal</LegendLabel>
                  </LegendItem>
                </ChartLegend>
              </WidgetBody>
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>

          {/* Widget 9: Completion Rate by Priority */}
          <Widget onMouseEnter={() => setHoveredWidget('completion')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Completion Rate by Priority</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('completion')} title="Collapse">
                    <Icon type={collapsedWidgets.completion ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.completion ? (
              <WidgetBody>
                {completionRateByPriority.map(({ priority, total, completed, rate }) => (
                  <CompletionRate key={priority}>
                    <CompletionRateLabel>
                      {IssuePriorityCopy[priority]}
                      <span style={{ marginLeft: 8, color: '#6B778C' }}>
                        ({completed}/{total})
                      </span>
                    </CompletionRateLabel>
                    <CompletionRateBar>
                      <CompletionRateFill
                        width={rate}
                        color={issuePriorityColors[priority]}
                      >
                        {Math.round(rate)}%
                      </CompletionRateFill>
                    </CompletionRateBar>
                  </CompletionRate>
                ))}
              </WidgetBody>
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>

          {/* Widget 10: Sprint Metrics */}
          <Widget onMouseEnter={() => setHoveredWidget('metrics')} onMouseLeave={() => setHoveredWidget(null)}>
            <WidgetHeader>
              <WidgetHeaderContent>
                <WidgetTitle>Sprint Metrics</WidgetTitle>
                <WidgetActions>
                  <ActionButton onClick={() => toggleWidget('metrics')} title="Collapse">
                    <Icon type={collapsedWidgets.metrics ? 'chevron-down' : 'chevron-up'} size={14} />
                  </ActionButton>
                  <ActionButton title="Export">
                    <Icon type="shipping" size={14} />
                  </ActionButton>
                </WidgetActions>
              </WidgetHeaderContent>
            </WidgetHeader>
            {!collapsedWidgets.metrics ? (
              <WidgetBody>
                <MetricGrid>
                  <MetricCard>
                    <MetricValue>{Math.round((doneIssues / totalIssues) * 100)}%</MetricValue>
                    <MetricLabel>Completion Rate</MetricLabel>
                    <MetricChange positive>
                      ↑ {Math.round(Math.random() * 10 + 5)}% vs last sprint
                    </MetricChange>
                  </MetricCard>
                  <MetricCard>
                    <MetricValue>{Math.round(totalLogged / doneIssues) || 0}h</MetricValue>
                    <MetricLabel>Avg Time / Issue</MetricLabel>
                    <MetricChange positive={false}>
                      ↓ {Math.round(Math.random() * 5 + 2)}% vs last sprint
                    </MetricChange>
                  </MetricCard>
                  <MetricCard>
                    <MetricValue>{unestimatedIssues}</MetricValue>
                    <MetricLabel>Unestimated</MetricLabel>
                    <MetricChange positive={false}>
                      ↑ {Math.round(Math.random() * 3 + 1)} from last sprint
                    </MetricChange>
                  </MetricCard>
                  <MetricCard>
                    <MetricValue>{Math.round((totalLogged / totalEstimated) * 100) || 0}%</MetricValue>
                    <MetricLabel>Time Accuracy</MetricLabel>
                    <MetricChange positive>
                      ↑ {Math.round(Math.random() * 8 + 3)}% vs last sprint
                    </MetricChange>
                  </MetricCard>
                </MetricGrid>
              </WidgetBody>
            ) : (
              <CollapsedPlaceholder>Chart hidden</CollapsedPlaceholder>
            )}
          </Widget>
        </WidgetGrid>
      </ReportsPage>
    </Fragment>
  );
};

ProjectReports.propTypes = propTypes;

export default ProjectReports;
