import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { formatDateTimeConversational, formatDate } from 'shared/utils/dateTime';
import { DatePicker } from 'shared/components';

import { SectionTitle } from '../Styles';
import { Dates, DueDateSection, DueDateDisplay, DueDateEditButton } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func,
};

const defaultProps = {
  updateIssue: undefined,
};

const ProjectBoardIssueDetailsDates = ({ issue, updateIssue }) => {
  const [isDueDateEditing, setDueDateEditing] = useState(false);

  const handleDueDateChange = newDate => {
    if (updateIssue) {
      updateIssue({ dueDate: newDate });
    }
    setDueDateEditing(false);
  };

  return (
    <Fragment>
      <DueDateSection>
        <SectionTitle>Due Date</SectionTitle>
        {isDueDateEditing ? (
          <DatePicker
            value={issue.dueDate}
            onChange={handleDueDateChange}
            placeholder="Set due date"
            withTime={false}
            autoFocus
          />
        ) : (
          <DueDateDisplay onClick={() => setDueDateEditing(true)}>
            <DueDateEditButton>
              {issue.dueDate ? formatDate(issue.dueDate) : 'No due date set'}
            </DueDateEditButton>
          </DueDateDisplay>
        )}
      </DueDateSection>
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
