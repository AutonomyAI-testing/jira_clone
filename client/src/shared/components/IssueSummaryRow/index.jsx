import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';
import { IssuePriorityCopy } from 'shared/constants/issues';
import { issuePriorityColors } from 'shared/utils/styles';

import { RowContainer, IssueKey, TitleText, AssigneeAvatarWrapper, PriorityBadge } from './Styles';

const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  assigneeAvatarUrl: PropTypes.string,
  assigneeName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  assigneeAvatarUrl: undefined,
  className: undefined,
};

const IssueSummaryRow = ({
  issueKey,
  title,
  priority,
  assigneeAvatarUrl,
  assigneeName,
  className,
}) => (
  <RowContainer className={className}>
    <IssueKey>{issueKey}</IssueKey>
    <TitleText>{title}</TitleText>
    <AssigneeAvatarWrapper>
      <Avatar avatarUrl={assigneeAvatarUrl} name={assigneeName} size={28} />
    </AssigneeAvatarWrapper>
    <PriorityBadge backgroundColor={issuePriorityColors[priority]}>
      {IssuePriorityCopy[priority]}
    </PriorityBadge>
  </RowContainer>
);

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
