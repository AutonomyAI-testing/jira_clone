import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { IssueLabel, IssueLabelCopy } from 'shared/constants/issues';
import { Select } from 'shared/components';

import { SectionTitle } from '../Styles';
import { Label } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsLabels = ({ issue, updateIssue }) => {
  const labelOptions = Object.values(IssueLabel).map(label => ({
    value: label,
    label: IssueLabelCopy[label],
  }));

  return (
    <Fragment>
      <SectionTitle>Labels</SectionTitle>
      <Select
        isMulti
        variant="empty"
        dropdownWidth={343}
        placeholder="No labels"
        name="labels"
        value={issue.labels || []}
        options={labelOptions}
        onChange={labels => updateIssue({ labels })}
        renderValue={({ value: label, removeOptionValue }) =>
          renderLabel(label, true, removeOptionValue)
        }
        renderOption={({ value: label }) => renderLabel(label, false)}
      />
    </Fragment>
  );
};

const renderLabel = (label, isSelectValue, removeOptionValue) => (
  <Label
    key={label}
    isSelectValue={isSelectValue}
    label={label}
    withBottomMargin={!!removeOptionValue}
    onClick={() => removeOptionValue && removeOptionValue()}
  >
    {IssueLabelCopy[label]}
  </Label>
);

ProjectBoardIssueDetailsLabels.propTypes = propTypes;

export default ProjectBoardIssueDetailsLabels;
