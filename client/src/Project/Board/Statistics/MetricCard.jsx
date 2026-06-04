import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'shared/components';

import { Card, CardIcon, CardContent, CardLabel, CardValue } from './Styles';

const propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string,
};

const defaultProps = {
  color: undefined,
};

const MetricCard = ({ icon, label, value, color: cardColor }) => (
  <Card>
    <CardIcon color={cardColor}>
      <Icon type={icon} size={20} />
    </CardIcon>
    <CardContent>
      <CardLabel>{label}</CardLabel>
      <CardValue>{value}</CardValue>
    </CardContent>
  </Card>
);

MetricCard.propTypes = propTypes;
MetricCard.defaultProps = defaultProps;

export default MetricCard;
