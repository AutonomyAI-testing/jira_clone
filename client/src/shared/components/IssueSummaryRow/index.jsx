import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, IssuePriorityIcon } from 'shared/components';
import {
  Row,
  IssueKey,
  Title,
  PriorityBadge,
  PriorityIconWrapper,
  AvatarWrapper,
  DueDate,
} from './Styles';

const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  className: PropTypes.string,
};

const defaultProps = {
  assignee: null,
  className: undefined,
};

/**
 * IssueSummaryRow - Compact issue summary for Kanban board view
 * Displays issue key, title, priority badge, due date, and optional assignee avatar
 * in a single horizontal row with text truncation for long titles.
 */
const IssueSummaryRow = ({ issueKey, title, priority, assignee, className }) => (
  <Row className={className}>
    {/* Priority indicator with icon and color coding */}
    <PriorityBadge>
      <PriorityIconWrapper>
        <IssuePriorityIcon priority={priority} />
      </PriorityIconWrapper>
    </PriorityBadge>

    {/* Due date placeholder - future enhancement */}
    <DueDate>Jun 30</DueDate>

    {/* Issue key (e.g., "TASK-1") */}
    <IssueKey>{issueKey}</IssueKey>

    {/* Issue title with text truncation for overflow */}
    <Title>{title}</Title>

    {/* Assignee avatar - only shown if assignee is provided */}
    {assignee && (
      <AvatarWrapper>
        <Avatar size={24} name={assignee.name} avatarUrl={assignee.avatarUrl} />
      </AvatarWrapper>
    )}
  </Row>
);

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
