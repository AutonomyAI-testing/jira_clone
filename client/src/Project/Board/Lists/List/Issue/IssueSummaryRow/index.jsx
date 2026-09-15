import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';
import { IssuePriorityCopy } from 'shared/constants/issues';

import { Row, IssueKey, Title, RightSection, PriorityBadge, DueDate } from './Styles';

const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }).isRequired,
  priority: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: null,
};

const IssueSummaryRow = ({ issueKey, title, assignee, priority, onClick }) => {
  return (
    <Row onClick={onClick}>
      <IssueKey>{issueKey}</IssueKey>
      <Title>{title}</Title>
      <RightSection>
        <PriorityBadge priority={priority}>{IssuePriorityCopy[priority]}</PriorityBadge>
        {/* TODO: Replace hardcoded due date with actual dueDate prop */}
        <DueDate>Dec 31</DueDate>
        <Avatar size={24} name={assignee.name} avatarUrl={assignee.avatarUrl} />
      </RightSection>
    </Row>
  );
};

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
