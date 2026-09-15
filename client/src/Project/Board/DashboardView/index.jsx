import React from 'react';
import PropTypes from 'prop-types';
import { intersection } from 'lodash';
import moment from 'moment';

import {
  IssueStatus,
  IssueStatusCopy,
  IssueType,
  IssueTypeCopy,
  IssuePriority,
  IssuePriorityCopy,
} from 'shared/constants/issues';
import { IssueTypeIcon, IssuePriorityIcon } from 'shared/components';
import { issueStatusBackgroundColors, issueStatusColors } from 'shared/utils/styles';

import {
  DashboardContainer,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  SectionTitle,
  ChartsGrid,
  ChartCard,
  ChartCardTitle,
  BarChart,
  BarRow,
  BarLabel,
  BarTrack,
  BarFill,
  BarCount,
  StatusBadge,
  MembersGrid,
  MemberCard,
  MemberAvatar,
  MemberName,
  MemberStats,
  ActivityList,
  ActivityItem,
  ActivityDot,
  ActivityText,
  ActivityTime,
  EmptyState,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  currentUserId: PropTypes.number,
};

const defaultProps = {
  currentUserId: null,
};

const DashboardView = ({ project, filters, currentUserId }) => {
  const filteredIssues = filterIssues(project.issues, filters, currentUserId);

  // ---- aggregate stats ----
  const total = filteredIssues.length;
  const done = filteredIssues.filter(i => i.status === IssueStatus.DONE).length;
  const inProgress = filteredIssues.filter(i => i.status === IssueStatus.INPROGRESS).length;
  const overdue = filteredIssues.filter(
    i => i.dueDate && moment(i.dueDate).isBefore(moment(), 'day') && i.status !== IssueStatus.DONE,
  ).length;
  const completionRate = total > 0 ? Math.round((done / total) * 100) : 0;

  // ---- by status ----
  const byStatus = Object.values(IssueStatus).map(status => ({
    status,
    label: IssueStatusCopy[status],
    count: filteredIssues.filter(i => i.status === status).length,
  }));

  // ---- by type ----
  const byType = Object.values(IssueType).map(type => ({
    type,
    label: IssueTypeCopy[type],
    count: filteredIssues.filter(i => i.type === type).length,
  }));

  // ---- by priority ----
  const byPriority = Object.values(IssuePriority)
    .slice()
    .reverse()
    .map(priority => ({
      priority,
      label: IssuePriorityCopy[priority],
      count: filteredIssues.filter(i => i.priority === priority).length,
    }));

  // ---- by member ----
  const memberStats = project.users.map(user => {
    const userIssues = filteredIssues.filter(i => i.userIds && i.userIds.includes(user.id));
    const userDone = userIssues.filter(i => i.status === IssueStatus.DONE).length;
    return { user, total: userIssues.length, done: userDone };
  });

  // ---- recent activity (last 10 updated) ----
  const recentIssues = filteredIssues
    .slice()
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 10);

  const maxCount = Math.max(...byStatus.map(s => s.count), 1);

  return (
    <DashboardContainer>
      {/* ── Summary stats ── */}
      <StatsGrid>
        <StatCard color="#0052cc">
          <StatValue>{total}</StatValue>
          <StatLabel>Total Issues</StatLabel>
        </StatCard>
        <StatCard color="#0B875B">
          <StatValue>{done}</StatValue>
          <StatLabel>Completed</StatLabel>
        </StatCard>
        <StatCard color="#F89C1C">
          <StatValue>{inProgress}</StatValue>
          <StatLabel>In Progress</StatLabel>
        </StatCard>
        <StatCard color="#E13C3C">
          <StatValue>{overdue}</StatValue>
          <StatLabel>Overdue</StatLabel>
        </StatCard>
        <StatCard color="#5E6C84">
          <StatValue>{completionRate}%</StatValue>
          <StatLabel>Completion Rate</StatLabel>
        </StatCard>
      </StatsGrid>

      {/* ── Charts row ── */}
      <ChartsGrid>
        {/* By Status */}
        <ChartCard>
          <ChartCardTitle>Issues by Status</ChartCardTitle>
          <BarChart>
            {byStatus.map(({ status, label, count }) => (
              <BarRow key={status}>
                <BarLabel>{label}</BarLabel>
                <BarTrack>
                  <BarFill
                    width={total > 0 ? (count / maxCount) * 100 : 0}
                    background={issueStatusBackgroundColors[status]}
                  />
                </BarTrack>
                <BarCount>{count}</BarCount>
              </BarRow>
            ))}
          </BarChart>
        </ChartCard>

        {/* By Type */}
        <ChartCard>
          <ChartCardTitle>Issues by Type</ChartCardTitle>
          <BarChart>
            {byType.map(({ type, label, count }) => (
              <BarRow key={type}>
                <BarLabel>
                  <IssueTypeIcon type={type} size={14} />
                  <span style={{ marginLeft: 6 }}>{label}</span>
                </BarLabel>
                <BarTrack>
                  <BarFill
                    width={total > 0 ? (count / Math.max(...byType.map(t => t.count), 1)) * 100 : 0}
                    background="#0052cc"
                  />
                </BarTrack>
                <BarCount>{count}</BarCount>
              </BarRow>
            ))}
          </BarChart>
        </ChartCard>

        {/* By Priority */}
        <ChartCard>
          <ChartCardTitle>Issues by Priority</ChartCardTitle>
          <BarChart>
            {byPriority.map(({ priority, label, count }) => (
              <BarRow key={priority}>
                <BarLabel>
                  <IssuePriorityIcon priority={priority} size={14} />
                  <span style={{ marginLeft: 6 }}>{label}</span>
                </BarLabel>
                <BarTrack>
                  <BarFill
                    width={
                      total > 0
                        ? (count / Math.max(...byPriority.map(p => p.count), 1)) * 100
                        : 0
                    }
                    background="#E97F33"
                  />
                </BarTrack>
                <BarCount>{count}</BarCount>
              </BarRow>
            ))}
          </BarChart>
        </ChartCard>
      </ChartsGrid>

      {/* ── Team members ── */}
      <SectionTitle>Team Members</SectionTitle>
      {memberStats.length === 0 ? (
        <EmptyState>No team members found.</EmptyState>
      ) : (
        <MembersGrid>
          {memberStats.map(({ user, total: memberTotal, done: memberDone }) => (
            <MemberCard key={user.id}>
              <MemberAvatar src={user.avatarUrl} alt={user.name}>
                {!user.avatarUrl && user.name.charAt(0).toUpperCase()}
              </MemberAvatar>
              <MemberName>{user.name}</MemberName>
              <MemberStats>
                {memberDone}/{memberTotal} issues done
              </MemberStats>
            </MemberCard>
          ))}
        </MembersGrid>
      )}

      {/* ── Recent Activity ── */}
      <SectionTitle>Recent Activity</SectionTitle>
      {recentIssues.length === 0 ? (
        <EmptyState>No recent activity.</EmptyState>
      ) : (
        <ActivityList>
          {recentIssues.map(issue => (
            <ActivityItem key={issue.id}>
              <ActivityDot status={issue.status} />
              <ActivityText>
                <strong>{`TASK-${issue.id}`}</strong> — {issue.title}
                <StatusBadge
                  background={issueStatusBackgroundColors[issue.status]}
                  textColor={issueStatusColors[issue.status]}
                >
                  {IssueStatusCopy[issue.status]}
                </StatusBadge>
              </ActivityText>
              <ActivityTime>{moment(issue.updatedAt).fromNow()}</ActivityTime>
            </ActivityItem>
          ))}
        </ActivityList>
      )}
    </DashboardContainer>
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

DashboardView.propTypes = propTypes;
DashboardView.defaultProps = defaultProps;

export default DashboardView;
