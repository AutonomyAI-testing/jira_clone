import React from 'react';
import PropTypes from 'prop-types';

import { IssueStatus, IssueStatusCopy } from 'shared/constants/issues';
import { issueStatusBackgroundColors } from 'shared/utils/styles';

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
  statusCounts: PropTypes.object.isRequired,
  totalIssues: PropTypes.number.isRequired,
};

const StatusChart = ({ statusCounts, totalIssues }) => {
  const getPercentage = count => (totalIssues > 0 ? Math.round((count / totalIssues) * 100) : 0);

  return (
    <ChartContainer>
      <ChartTitle>Issues by Status</ChartTitle>
      {Object.values(IssueStatus).map(status => {
        const count = statusCounts[status] || 0;
        const percentage = getPercentage(count);

        return (
          <BarGroup key={status}>
            <BarLabel>{IssueStatusCopy[status]}</BarLabel>
            <BarTrack>
              <BarFill
                width={percentage}
                backgroundColor={issueStatusBackgroundColors[status]}
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

StatusChart.propTypes = propTypes;

export default StatusChart;
