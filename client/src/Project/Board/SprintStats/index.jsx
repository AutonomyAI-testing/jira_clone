import React from 'react';
import PropTypes from 'prop-types';

import { IssueStatus } from 'shared/constants/issues';

import {
  StatsContainer,
  StatCard,
  StatLabel,
  StatValue,
  ProgressBarContainer,
  ProgressBar,
} from './Styles';

const propTypes = {
  issues: PropTypes.array.isRequired,
};

const SprintStats = ({ issues }) => {
  const total = issues.length;
  const backlog = issues.filter(
    i => i.status === IssueStatus.BACKLOG || i.status === IssueStatus.SELECTED,
  ).length;
  const inProgress = issues.filter(i => i.status === IssueStatus.INPROGRESS).length;
  const done = issues.filter(i => i.status === IssueStatus.DONE).length;
  const completionPercent = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <StatsContainer>
      <StatCard>
        <StatLabel>Total</StatLabel>
        <StatValue>{total}</StatValue>
      </StatCard>
      <StatCard>
        <StatLabel>Backlog</StatLabel>
        <StatValue>{backlog}</StatValue>
      </StatCard>
      <StatCard>
        <StatLabel>In Progress</StatLabel>
        <StatValue>{inProgress}</StatValue>
      </StatCard>
      <StatCard>
        <StatLabel>Done</StatLabel>
        <StatValue>{done}</StatValue>
      </StatCard>
      <ProgressBarContainer>
        <StatLabel>Progress</StatLabel>
        <ProgressBar completionPercent={completionPercent} />
        <StatValue>{completionPercent}%</StatValue>
      </ProgressBarContainer>
    </StatsContainer>
  );
};

SprintStats.propTypes = propTypes;

export default SprintStats;
