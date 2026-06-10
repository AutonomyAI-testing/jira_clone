import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';
import { IssuePriorityCopy } from 'shared/constants/issues';
import { issuePriorityColors } from 'shared/utils/styles';

import { Row, IssueKey, Title, AssigneeWrapper, PriorityBadge } from './Styles';

const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }).isRequired,
  priority: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: undefined,
};

const IssueSummaryRow = ({ issueKey, title, assignee, priority, className }) => {
  const priorityLabel = IssuePriorityCopy[priority];
  const priorityColor = issuePriorityColors[priority];

  return (
    <Row className={className}>
      <IssueKey>{issueKey}</IssueKey>
      <Title>{title}</Title>
      <AssigneeWrapper>
        <Avatar size={24} name={assignee.name} avatarUrl={assignee.avatarUrl} />
      </AssigneeWrapper>
      <PriorityBadge priorityColor={priorityColor}>{priorityLabel}</PriorityBadge>
    </Row>
  );
};

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
