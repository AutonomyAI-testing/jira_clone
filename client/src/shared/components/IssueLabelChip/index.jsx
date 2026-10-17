import React from 'react';
import PropTypes from 'prop-types';

import { IssueLabelCopy } from 'shared/constants/issues';

import { Chip } from './Styles';

const propTypes = {
  label: PropTypes.string.isRequired,
};

const IssueLabelChip = ({ label, ...otherProps }) => (
  <Chip color={label} {...otherProps}>
    {IssueLabelCopy[label]}
  </Chip>
);

IssueLabelChip.propTypes = propTypes;

export default IssueLabelChip;
