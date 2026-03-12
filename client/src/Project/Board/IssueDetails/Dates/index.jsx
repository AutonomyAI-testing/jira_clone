import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { DatePicker } from 'shared/components';
import { formatDateTimeConversational, formatDate } from 'shared/utils/dateTime';

import { SectionTitle } from '../Styles';
import { Dates, DueDateLabel, DueDateValue, DueDateEdit } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func,
};

const defaultProps = {
  updateIssue: undefined,
};

const ProjectBoardIssueDetailsDates = ({ issue, updateIssue }) => {
  const [isEditingDueDate, setIsEditingDueDate] = useState(false);

  const handleDueDateChange = newDueDate => {
    if (updateIssue) {
      updateIssue({ dueDate: newDueDate });
    }
    setIsEditingDueDate(false);
  };

  return (
    <Fragment>
      <SectionTitle>Due Date</SectionTitle>
      <DueDateValue>
        {!isEditingDueDate && (
          <DueDateEdit onClick={() => setIsEditingDueDate(true)}>
            {issue.dueDate ? formatDate(issue.dueDate) : 'Set due date'}
          </DueDateEdit>
        )}
        {isEditingDueDate && (
          <DatePicker
            withTime={false}
            value={issue.dueDate || ''}
            onChange={handleDueDateChange}
            autoFocus
            placeholder="Select date"
          />
        )}
      </DueDateValue>

      <SectionTitle>Dates</SectionTitle>
      <Dates>
        <div>Created at {formatDateTimeConversational(issue.createdAt)}</div>
        <div>Updated at {formatDateTimeConversational(issue.updatedAt)}</div>
      </Dates>
    </Fragment>
  );
};

ProjectBoardIssueDetailsDates.propTypes = propTypes;
ProjectBoardIssueDetailsDates.defaultProps = defaultProps;

export default ProjectBoardIssueDetailsDates;
