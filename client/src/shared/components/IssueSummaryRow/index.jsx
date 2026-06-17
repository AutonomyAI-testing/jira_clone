/**
 * IssueSummaryRow — compact horizontal summary of a Jira issue for board views.
 * Displays: issue key, title, assignee avatar, priority badge, and due date.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { IssuePriorityCopy } from 'shared/constants/issues';
import { Avatar } from 'shared/components';
import { issuePriorityColors } from 'shared/utils/styles';

import {
  Row,
  KeyText,
  TitleText,
  AvatarWrapper,
  PriorityBadge,
  PriorityDot,
  DueDateLabel,
} from './Styles';

const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }).isRequired,
  priority: PropTypes.string.isRequired,
};

const IssueSummaryRow = ({ issueKey, title, assignee, priority }) => {
  // Look up color for priority badge and label text from shared constants
  const priorityColor = issuePriorityColors[priority];
  const priorityLabel = IssuePriorityCopy[priority];

  return (
    <Row>
      <KeyText>{issueKey}</KeyText>
      <TitleText>{title}</TitleText>
      <AvatarWrapper>
        <Avatar size={24} avatarUrl={assignee.avatarUrl} name={assignee.name} />
      </AvatarWrapper>
      <PriorityBadge color={priorityColor}>
        <PriorityDot color={priorityColor} />
        {priorityLabel}
      </PriorityBadge>
      <DueDateLabel>Due Jun 30</DueDateLabel>
    </Row>
  );
};

IssueSummaryRow.propTypes = propTypes;

export default IssueSummaryRow;
