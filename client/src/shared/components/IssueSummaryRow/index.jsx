import React from 'react';
import PropTypes from 'prop-types';

import { IssuePriorityIcon, Avatar } from 'shared/components';
import { IssuePriorityCopy } from 'shared/constants/issues';

import {
  Container,
  IssueKey,
  TitleWrapper,
  Title,
  AvatarWrapper,
  PriorityBadge,
  DueDate,
} from './Styles';

// IssueSummaryRow displays a condensed view of an issue with key, title, priority, and assignee
// Used in lists to show issues at a glance
// Assumes: priority is a valid key in IssuePriorityCopy and issuePriorityColors

const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  // Optional assignee object with name (required) and avatarUrl (optional)
  assignee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }),
  // Optional click handler - null indicates row is not clickable
  onClick: PropTypes.func,
};

const defaultProps = {
  // No assignee displayed if not provided
  assignee: null,
  // Row is not clickable if onClick not provided
  onClick: null,
};

const IssueSummaryRow = ({ issueKey, title, priority, assignee, onClick }) => {
  return (
    <Container onClick={onClick} data-testid="issue-summary-row">
      <IssueKey>{issueKey}</IssueKey>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      {/* Avatar is conditionally rendered only when assignee is provided */}
      {assignee && (
        <AvatarWrapper>
          <Avatar avatarUrl={assignee.avatarUrl} name={assignee.name} size={24} />
        </AvatarWrapper>
      )}
      <PriorityBadge priority={priority} data-testid={`priority-${priority}`}>
        <IssuePriorityIcon priority={priority} />
        <span>{IssuePriorityCopy[priority]}</span>
      </PriorityBadge>
      {/* TODO: Make due date dynamic when issue data model is finalized */}
      <DueDate>Jun 30</DueDate>
    </Container>
  );
};

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
