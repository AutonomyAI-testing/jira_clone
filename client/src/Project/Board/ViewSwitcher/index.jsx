import React from 'react';
import PropTypes from 'prop-types';

import { ViewSwitcherContainer, ViewButton } from './Styles';

const propTypes = {
  currentView: PropTypes.string.isRequired,
  onViewChange: PropTypes.func.isRequired,
};

const ViewSwitcher = ({ currentView, onViewChange }) => (
  <ViewSwitcherContainer>
    <ViewButton active={currentView === 'kanban'} onClick={() => onViewChange('kanban')}>
      Kanban
    </ViewButton>
    <ViewButton active={currentView === 'list'} onClick={() => onViewChange('list')}>
      List
    </ViewButton>
    <ViewButton active={currentView === 'gantt'} onClick={() => onViewChange('gantt')}>
      Gantt
    </ViewButton>
  </ViewSwitcherContainer>
);

ViewSwitcher.propTypes = propTypes;

export default ViewSwitcher;
