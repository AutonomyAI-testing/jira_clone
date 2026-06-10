import React from 'react';
import PropTypes from 'prop-types';

import { IssuePriorityCopy } from 'shared/constants/issues';
import { Avatar } from 'shared/components';

import {
  Row,
  IssueKeyText,
  IssueTitle,
  AvatarWrapper,
  PriorityBadge,
  RightContent,
  DueDateLabel,
} from './Styles';

const propTypes = {
  issueKey: PropTypes.string,
  title: PropTypes.string,
  assigneeName: PropTypes.string,
  assigneeAvatarUrl: PropTypes.string,
  priority: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  issueKey: 'TASK-1',
  title: 'Example issue title',
  assigneeName: 'User Name',
  assigneeAvatarUrl: null,
  priority: '3',
  onClick: null,
};

const IssueSummaryRow = ({
  issueKey,
  title,
  assigneeName,
  assigneeAvatarUrl,
  priority,
  onClick,
}) => (
  // Row component handles all visual styling including hover state and click interactions
  <Row onClick={onClick}>
    <IssueKeyText>{issueKey}</IssueKeyText>
    <IssueTitle>{title}</IssueTitle>
    <RightContent>
      <AvatarWrapper>
        <Avatar size={28} avatarUrl={assigneeAvatarUrl} name={assigneeName} />
      </AvatarWrapper>
      <PriorityBadge priority={priority}>{IssuePriorityCopy[priority]}</PriorityBadge>
      {/* TODO: Make due date dynamic based on prop or issue data */}
      <DueDateLabel>Due Dec 31</DueDateLabel>
    </RightContent>
  </Row>
);

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
