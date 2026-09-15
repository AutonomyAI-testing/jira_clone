import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, IssuePriorityIcon } from 'shared/components';

import { Row, IssueKey, Title, AvatarWrapper, PriorityBadgeWrapper, DueDate } from './Styles';

// Presentational component for displaying issue summary in compact row format
// Used in board and list views for quick issue scanning
const propTypes = {
  issueKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  assignee: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  priority: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  assignee: null,
  onClick: undefined,
  className: undefined,
};

const IssueSummaryRow = ({
  issueKey,
  title,
  assignee,
  priority,
  onClick,
  className,
  ...otherProps
}) => {
  return (
    <Row className={className} onClick={onClick} {...otherProps}>
      <PriorityBadgeWrapper>
        <IssuePriorityIcon priority={priority} />
      </PriorityBadgeWrapper>

      {/* Placeholder due date — actual due date would be passed as a prop in extended implementation */}
      <DueDate>Oct 31</DueDate>

      <IssueKey>{issueKey}</IssueKey>

      <Title>{title}</Title>

      {assignee && (
        <AvatarWrapper>
          <Avatar size={24} name={assignee.name} avatarUrl={assignee.avatarUrl} />
        </AvatarWrapper>
      )}
    </Row>
  );
};

IssueSummaryRow.propTypes = propTypes;
IssueSummaryRow.defaultProps = defaultProps;

export default IssueSummaryRow;
