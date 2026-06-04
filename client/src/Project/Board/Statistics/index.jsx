import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { IssueStatus, IssuePriority } from 'shared/constants/issues';

import MetricCard from './MetricCard';
import StatusChart from './StatusChart';
import PriorityChart from './PriorityChart';
import {
  StatisticsContainer,
  StatisticsHeader,
  StatisticsTitle,
  StatisticsToggle,
  StatisticsContent,
  MetricsSection,
  MetricsSummary,
  ChartsSection,
} from './Styles';

const propTypes = {
  issues: PropTypes.array.isRequired,
};

const Statistics = ({ issues }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const stats = useMemo(() => {
    const totalIssues = issues.length;

    // Count by status
    const statusCounts = {};
    Object.values(IssueStatus).forEach(status => {
      statusCounts[status] = issues.filter(issue => issue.status === status).length;
    });

    // Count by priority
    const priorityCounts = {};
    Object.values(IssuePriority).forEach(priority => {
      priorityCounts[priority] = issues.filter(issue => issue.priority === priority).length;
    });

    // Calculate completion rate
    const doneCount = statusCounts[IssueStatus.DONE] || 0;
    const completionRate = totalIssues > 0 ? Math.round((doneCount / totalIssues) * 100) : 0;

    return {
      totalIssues,
      statusCounts,
      priorityCounts,
      doneCount,
      completionRate,
      inProgressCount: statusCounts[IssueStatus.INPROGRESS] || 0,
    };
  }, [issues]);

  return (
    <StatisticsContainer data-testid="statistics">
      <StatisticsHeader>
        <StatisticsTitle>Board Statistics</StatisticsTitle>
        <StatisticsToggle
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? '▼' : '▲'}
        </StatisticsToggle>
      </StatisticsHeader>

      <StatisticsContent isExpanded={isExpanded}>
        <MetricsSection>
          <MetricsSummary>
            <MetricCard
              icon="issues"
              label="Total Issues"
              value={stats.totalIssues}
              color="rgb(0, 82, 204)"
            />
            <MetricCard
              icon="task"
              label="Done"
              value={stats.doneCount}
              color="rgb(11, 135, 91)"
            />
            <MetricCard
              icon="stopwatch"
              label="In Progress"
              value={stats.inProgressCount}
              color="rgb(0, 82, 204)"
            />
            <MetricCard
              icon="reports"
              label="Completion %"
              value={`${stats.completionRate}%`}
              color="rgb(245, 171, 0)"
            />
          </MetricsSummary>
        </MetricsSection>

        <ChartsSection>
          <StatusChart statusCounts={stats.statusCounts} totalIssues={stats.totalIssues} />
          <PriorityChart priorityCounts={stats.priorityCounts} totalIssues={stats.totalIssues} />
        </ChartsSection>
      </StatisticsContent>
    </StatisticsContainer>
  );
};

Statistics.propTypes = propTypes;

export default Statistics;
