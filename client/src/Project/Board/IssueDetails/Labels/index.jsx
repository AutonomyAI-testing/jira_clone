import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { IssueLabel, IssueLabelCopy, IssueLabelColors } from 'shared/constants/issues';
import { Select, Icon } from 'shared/components';

import { SectionTitle } from '../Styles';
import { Label, LabelTag, LabelText } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsLabels = ({ issue, updateIssue }) => {
  const labelOptions = Object.values(IssueLabel).map(label => ({
    value: label,
    label: IssueLabelCopy[label],
  }));

  const issueLabels = issue.labels || [];

  return (
    <Fragment>
      <SectionTitle>Labels</SectionTitle>
      <Select
        isMulti
        variant="empty"
        dropdownWidth={343}
        placeholder="Add labels"
        name="labels"
        value={issueLabels}
        options={labelOptions}
        onChange={labels => updateIssue({ labels })}
        renderValue={({ value: labelValue, removeOptionValue }) =>
          renderLabel(labelValue, true, removeOptionValue)
        }
        renderOption={({ value: labelValue }) => renderLabel(labelValue, false)}
      />
    </Fragment>
  );
};

const renderLabel = (labelValue, isSelectValue, removeOptionValue) => (
  <Label
    key={labelValue}
    isSelectValue={isSelectValue}
    withBottomMargin={!!removeOptionValue}
    onClick={() => removeOptionValue && removeOptionValue()}
  >
    <LabelTag color={IssueLabelColors[labelValue]} />
    <LabelText>{IssueLabelCopy[labelValue]}</LabelText>
    {removeOptionValue && <Icon type="close" top={1} />}
  </Label>
);

ProjectBoardIssueDetailsLabels.propTypes = propTypes;

export default ProjectBoardIssueDetailsLabels;
