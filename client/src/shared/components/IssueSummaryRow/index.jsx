import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, IssuePriorityIcon } from 'shared/components';

import { IssueLink, IssueKey, IssueSummaryTitle, RightMeta, DueDate } from './Styles';

const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }),
  className: PropTypes.string,
};

const defaultProps = {
  assignee: null,
  className: undefined,
};

const IssueSummaryRow = ({ issueKey, title, priority, assignee, className }) => (
  <IssueLink className={className}>
    <IssueKey>{issueKey}</IssueKey>
    <IssueSummaryTitle>{title}</IssueSummaryTitle>
    <RightMeta>
      {assignee && (
        <Avatar size={28} avatarUrl={assignee.avatarUrl} name={assignee.name} />
      )}
      <IssuePriorityIcon priority={priority} />
      <DueDate>Due Jul 15</DueDate>
    </RightMeta>
  </IssueLink>
);

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
