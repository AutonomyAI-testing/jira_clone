import React from 'react';
import PropTypes from 'prop-types';

import { IssuePriority, IssuePriorityCopy } from 'shared/constants/issues';
import { issuePriorityColors } from 'shared/utils/styles';

import {
  ChartContainer,
  ChartTitle,
  BarGroup,
  BarLabel,
  BarTrack,
  BarFill,
  BarValue,
} from './Styles';

const propTypes = {
  priorityCounts: PropTypes.object.isRequired,
  totalIssues: PropTypes.number.isRequired,
};

const PriorityChart = ({ priorityCounts, totalIssues }) => {
  const getPercentage = count => (totalIssues > 0 ? Math.round((count / totalIssues) * 100) : 0);

  return (
    <ChartContainer>
      <ChartTitle>Issues by Priority</ChartTitle>
      {Object.values(IssuePriority)
        .reverse()
        .map(priority => {
          const count = priorityCounts[priority] || 0;
          const percentage = getPercentage(count);

          return (
            <BarGroup key={priority}>
              <BarLabel>{IssuePriorityCopy[priority]}</BarLabel>
              <BarTrack>
                <BarFill
                  width={percentage}
                  backgroundColor={issuePriorityColors[priority]}
                />
              </BarTrack>
              <BarValue>
                {count} ({percentage}%)
              </BarValue>
            </BarGroup>
          );
        })}
    </ChartContainer>
  );
};

PriorityChart.propTypes = propTypes;

export default PriorityChart;
