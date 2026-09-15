import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, IssuePriorityIcon } from 'shared/components';
import { Row, IssueKey, Title, Meta, DueDate } from './Styles';

const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  dueDate: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  assignee: null,
  dueDate: undefined,
  onClick: undefined,
  className: undefined,
};

const IssueRow = ({ issueKey, title, priority, assignee, dueDate, onClick, className, ...otherProps }) => (
  <Row className={className} onClick={onClick} {...otherProps}>
    <IssueKey>{issueKey}</IssueKey>
    <Title>{title}</Title>
    <Meta>
      {assignee && <Avatar name={assignee.name} avatarUrl={assignee.avatarUrl} size={24} />}
      <IssuePriorityIcon priority={priority} size={18} />
      {dueDate && <DueDate>{dueDate}</DueDate>}
    </Meta>
  </Row>
);

IssueRow.propTypes = propTypes;
IssueRow.defaultProps = defaultProps;

export default IssueRow;
