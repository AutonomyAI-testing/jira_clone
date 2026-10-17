import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { IssueLabel, IssueLabelCopy } from 'shared/constants/issues';
import { issueLabelColors } from 'shared/utils/styles';
import { Select, Icon } from 'shared/components';

import { SectionTitle } from '../Styles';
import { LabelValue, LabelDot, LabelText } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const labelOptions = Object.values(IssueLabel).map(label => ({
  value: label,
  label: IssueLabelCopy[label],
}));

const ProjectBoardIssueDetailsLabels = ({ issue, updateIssue }) => (
  <Fragment>
    <SectionTitle>Labels</SectionTitle>
    <Select
      isMulti
      variant="empty"
      dropdownWidth={343}
      placeholder="None"
      name="labels"
      value={issue.labels || []}
      options={labelOptions}
      onChange={labels => updateIssue({ labels })}
      renderValue={({ value: label, removeOptionValue }) => renderLabel(label, removeOptionValue)}
      renderOption={({ value: label }) => renderLabel(label)}
    />
  </Fragment>
);

const renderLabel = (label, removeOptionValue) => (
  <LabelValue
    key={label}
    withBottomMargin={!!removeOptionValue}
    onClick={() => removeOptionValue && removeOptionValue()}
  >
    <LabelDot color={issueLabelColors[label]} />
    <LabelText>{IssueLabelCopy[label]}</LabelText>
    {removeOptionValue && <Icon type="close" top={1} size={14} />}
  </LabelValue>
);

ProjectBoardIssueDetailsLabels.propTypes = propTypes;

export default ProjectBoardIssueDetailsLabels;
