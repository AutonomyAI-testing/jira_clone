import React from 'react';
import PropTypes from 'prop-types';

import { formatDateTimeConversational } from 'shared/utils/dateTime';
import DatePicker from 'shared/components/DatePicker';

import { Dates, DateField, DateLabel } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func,
};

const defaultProps = {
  updateIssue: () => {},
};

const ProjectBoardIssueDetailsDates = ({ issue, updateIssue }) => (
  <Dates>
    <DateField>
      <DateLabel>Start Date</DateLabel>
      <DatePicker
        withTime={false}
        value={issue.startDate}
        onChange={startDate => updateIssue({ startDate })}
      />
    </DateField>
    <DateField>
      <DateLabel>Due Date</DateLabel>
      <DatePicker
        withTime={false}
        value={issue.dueDate}
        onChange={dueDate => updateIssue({ dueDate })}
      />
    </DateField>
    <div>Created at {formatDateTimeConversational(issue.createdAt)}</div>
    <div>Updated at {formatDateTimeConversational(issue.updatedAt)}</div>
  </Dates>
);

ProjectBoardIssueDetailsDates.propTypes = propTypes;
ProjectBoardIssueDetailsDates.defaultProps = defaultProps;

export default ProjectBoardIssueDetailsDates;
