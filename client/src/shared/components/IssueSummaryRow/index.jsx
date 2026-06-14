import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, IssuePriorityIcon } from 'shared/components';
import { IssuePriorityCopy } from 'shared/constants/issues';
import { issuePriorityColors } from 'shared/utils/styles';

import {
  Container,
  IssueKeyBadge,
  IssueTitle,
  PriorityBadgeContainer,
  PriorityIcon,
  PriorityLabel,
  AvatarSection,
  DueDateLabel,
} from './Styles';

const propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
  }).isRequired,
  assignee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

const defaultProps = {
  assignee: null,
  onClick: null,
};

const IssueSummaryRow = ({ issue, assignee, onClick, ...otherProps }) => {
  // Derive the issue key from the numeric ID to display a consistent identifier (e.g., PROJ-42)
  const issueKey = `PROJ-${issue.id}`;
  // Map the priority string to its corresponding color for the badge background
  const priorityColor = issuePriorityColors[issue.priority];
  // Map the priority string to its display label (e.g., '4' → 'High')
  const priorityLabel = IssuePriorityCopy[issue.priority];

  return (
    <Container onClick={onClick} {...otherProps}>
      <IssueKeyBadge>{issueKey}</IssueKeyBadge>
      <IssueTitle>{issue.title}</IssueTitle>
      {/* Render avatar only when assignee data is provided */}
      {assignee && (
        <AvatarSection>
          <Avatar size={24} name={assignee.name} avatarUrl={assignee.avatarUrl} />
        </AvatarSection>
      )}
      <PriorityBadgeContainer priorityColor={priorityColor}>
        <PriorityIcon>
          <IssuePriorityIcon priority={issue.priority} />
        </PriorityIcon>
        <PriorityLabel priorityColor={priorityColor}>{priorityLabel}</PriorityLabel>
      </PriorityBadgeContainer>
      {/* Display due date if provided on the issue object */}
      {issue.dueDate && <DueDateLabel>{issue.dueDate}</DueDateLabel>}
    </Container>
  );
};

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
