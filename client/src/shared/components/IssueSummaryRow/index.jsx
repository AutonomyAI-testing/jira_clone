import React from 'react';
import PropTypes from 'prop-types';

import { IssuePriorityIcon } from 'shared/components';

import { Row, IssueKey, IssueTitle, AssigneeAvatar, PriorityIconWrapper, DueDate } from './Styles';

const propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    userIds: PropTypes.array.isRequired,
  }).isRequired,
  projectUsers: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
};

const IssueSummaryRow = ({ issue, projectUsers, onClick }) => {
  // Display the primary assignee (first userIds entry)
  const assignee = projectUsers.find(u => u.id === issue.userIds[0]);

  return (
    <Row onClick={onClick} data-testid="issue-summary-row">
      <IssueKey>{issue.key}</IssueKey>
      <IssueTitle title={issue.title}>{issue.title}</IssueTitle>
      {assignee && (
        <AssigneeAvatar
          size={20}
          avatarUrl={assignee.avatarUrl}
          name={assignee.name}
        />
      )}
      <PriorityIconWrapper>
        <IssuePriorityIcon priority={issue.priority} />
      </PriorityIconWrapper>
      {issue.dueDate && <DueDate>{issue.dueDate}</DueDate>}
    </Row>
  );
};

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
