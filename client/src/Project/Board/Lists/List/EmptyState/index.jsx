import React from 'react';
import PropTypes from 'prop-types';

import { EmptyStateContainer, EmptyIcon, EmptyMessage } from './Styles';

const propTypes = {
  message: PropTypes.string,
};

const defaultProps = {
  message: "No spells cast here yet",
};

const EmptyState = ({ message }) => (
  <EmptyStateContainer>
    <EmptyIcon>
      <span role="img" aria-label="sparkles">✨</span>
    </EmptyIcon>
    <EmptyMessage>{message}</EmptyMessage>
  </EmptyStateContainer>
);

EmptyState.propTypes = propTypes;
EmptyState.defaultProps = defaultProps;

export default EmptyState;
