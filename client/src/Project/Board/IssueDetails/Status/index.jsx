import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { IssueStatus, IssueStatusCopy } from 'shared/constants/issues';
import { Select, Icon } from 'shared/components';

import { SectionTitle } from '../Styles';
import { Status } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
  workflow: PropTypes.object,
};

const defaultProps = {
  workflow: null,
};

const ProjectBoardIssueDetailsStatus = ({ issue, updateIssue, workflow }) => {
  const allowedTransitions = workflow?.transitions?.[issue.status] || [];
  const allStatuses = workflow?.columns?.map(col => col.id) || Object.values(IssueStatus);

  // Build options: allowed transitions are enabled, others are disabled with tooltip
  const statusOptions = allStatuses.map(status => {
    const isAllowed = status === issue.status || allowedTransitions.includes(status);
    const columnTitle =
      workflow?.columns?.find(col => col.id === status)?.title || IssueStatusCopy[status];

    return {
      value: status,
      label: isAllowed ? columnTitle : `${columnTitle} (Transition not allowed)`,
      isDisabled: !isAllowed,
    };
  });

  return (
    <Fragment>
      <SectionTitle>Status</SectionTitle>
      <Select
        variant="empty"
        dropdownWidth={343}
        withClearValue={false}
        name="status"
        value={issue.status}
        options={statusOptions}
        onChange={status => updateIssue({ status })}
        renderValue={({ value: status }) => {
          const columnTitle =
            workflow?.columns?.find(col => col.id === status)?.title || IssueStatusCopy[status];
          return (
            <Status isValue color={status}>
              <div>{columnTitle}</div>
              <Icon type="chevron-down" size={18} />
            </Status>
          );
        }}
        renderOption={({ value: status, isDisabled }) => {
          const columnTitle =
            workflow?.columns?.find(col => col.id === status)?.title || IssueStatusCopy[status];
          return (
            <Status color={status} style={{ opacity: isDisabled ? 0.5 : 1 }}>
              {columnTitle}
              {isDisabled && ' (Transition not allowed)'}
            </Status>
          );
        }}
      />
    </Fragment>
  );
};

ProjectBoardIssueDetailsStatus.propTypes = propTypes;
ProjectBoardIssueDetailsStatus.defaultProps = defaultProps;

export default ProjectBoardIssueDetailsStatus;
