import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, IssuePriorityIcon } from 'shared/components';
import { formatDate } from 'shared/utils/dateTime';

import { Container, PriorityWrapper, IssueKey, Title, AvatarWrapper, DueDate } from './Styles';

// Define prop types for the component
const propTypes = {
  className: PropTypes.string,
  issue: PropTypes.object.isRequired,
  projectUsers: PropTypes.array,
};

const defaultProps = {
  className: undefined,
  projectUsers: [],
};

const IssueSummaryRow = ({ className, issue, projectUsers }) => {
  // Extract the primary assignee (first user in userIds array) from projectUsers
  // Only show avatar for assigned issues; unassigned issues render without the avatar wrapper
  const assigneeId = issue.userIds && issue.userIds[0];
  const assignee = assigneeId && projectUsers.find((user) => user.id === assigneeId);

  // Fall back to a synthetic key if not provided by the issue data
  const issueKey = issue.key || `PROJ-${issue.id}`;

  return (
    <Container className={className} data-testid={`issue-summary-row:${issue.id}`}>
      <PriorityWrapper>
        <IssuePriorityIcon priority={issue.priority} />
      </PriorityWrapper>
      <IssueKey>{issueKey}</IssueKey>
      <Title>{issue.title}</Title>
      {issue.dueDate && <DueDate>{formatDate(issue.dueDate, 'MMM D')}</DueDate>}
      {assignee && (
        <AvatarWrapper>
          <Avatar size={24} name={assignee.name} avatarUrl={assignee.avatarUrl} />
        </AvatarWrapper>
      )}
    </Container>
  );
};

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
