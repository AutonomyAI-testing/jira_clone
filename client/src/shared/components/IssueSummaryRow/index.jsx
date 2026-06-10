import React from 'react';
import PropTypes from 'prop-types';

import { IssuePriorityCopy } from 'shared/constants/issues';

import {
  RowContainer,
  LeftContent,
  IssueKey,
  IssueTitle,
  RightContent,
  StyledAvatar,
  PriorityBadge,
  DueDate,
} from './Styles';

const propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    issueKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    assigneeId: PropTypes.number,
  }).isRequired,
  projectUsers: PropTypes.array,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  projectUsers: [],
  onClick: undefined,
  className: undefined,
};

const IssueSummaryRow = ({ issue, projectUsers, onClick, className, ...otherProps }) => {
  // Find the assignee from the list of project users, if one is assigned
  const assignee = projectUsers.find(user => user.id === issue.assigneeId);
  // Map the priority value to human-readable label
  const priorityLabel = IssuePriorityCopy[issue.priority];

  return (
    <RowContainer className={className} onClick={onClick} {...otherProps}>
      <LeftContent>
        <IssueKey>{issue.issueKey}</IssueKey>
        <IssueTitle>{issue.title}</IssueTitle>
      </LeftContent>
      <RightContent>
        {assignee && <StyledAvatar size={28} avatarUrl={assignee.avatarUrl} name={assignee.name} />}
        <PriorityBadge priority={issue.priority}>{priorityLabel}</PriorityBadge>
        {issue.dueDate && <DueDate>{issue.dueDate}</DueDate>}
      </RightContent>
    </RowContainer>
  );
};

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
