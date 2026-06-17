import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';
import { IssuePriorityCopy, IssuePriority } from 'shared/constants/issues';

import { Container, IssueKey, Title, AssigneeAvatar, PriorityBadge, DueDate } from './Styles';

const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  priority: PropTypes.string.isRequired,
};

const defaultProps = {
  assignee: null,
};

const IssueSummaryRow = ({ issueKey, title, assignee, priority }) => {
  // Returns a Unicode arrow indicating priority visually:
  // Using Unicode ensures reliable rendering across all environments
  const getPriorityIndicator = () => {
    if ([IssuePriority.LOW, IssuePriority.LOWEST].includes(priority)) {
      return '▼';
    }
    if ([IssuePriority.HIGH, IssuePriority.HIGHEST].includes(priority)) {
      return '▲';
    }
    return '●';
  };

  return (
    <Container>
      <IssueKey>{issueKey}</IssueKey>
      <Title>{title}</Title>
      {assignee && (
        <AssigneeAvatar
          size={24}
          avatarUrl={assignee.avatarUrl}
          name={assignee.name}
        />
      )}
      <PriorityBadge priority={priority}>
        <span>{getPriorityIndicator()}</span>
        <span>{IssuePriorityCopy[priority]}</span>
      </PriorityBadge>
      <DueDate>Due Dec 18</DueDate>
    </Container>
  );
};

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
