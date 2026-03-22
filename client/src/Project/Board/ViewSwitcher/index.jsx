import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'shared/components';

import { ViewSwitcherContainer, ViewButton, ViewIcon, ViewLabel } from './Styles';

const propTypes = {
  currentView: PropTypes.string.isRequired,
  onViewChange: PropTypes.func.isRequired,
};

const ViewSwitcher = ({ currentView, onViewChange }) => (
  <ViewSwitcherContainer>
    <ViewButton active={currentView === 'kanban'} onClick={() => onViewChange('kanban')}>
      <ViewIcon>
        <Icon type="board" size={18} />
      </ViewIcon>
      <ViewLabel>Kanban</ViewLabel>
    </ViewButton>
    <ViewButton active={currentView === 'list'} onClick={() => onViewChange('list')}>
      <ViewIcon>
        <Icon type="menu" size={18} />
      </ViewIcon>
      <ViewLabel>List</ViewLabel>
    </ViewButton>
    <ViewButton active={currentView === 'gantt'} onClick={() => onViewChange('gantt')}>
      <ViewIcon>
        <Icon type="calendar" size={18} />
      </ViewIcon>
      <ViewLabel>Gantt</ViewLabel>
    </ViewButton>
    <ViewButton active={currentView === 'team'} onClick={() => onViewChange('team')}>
      <ViewIcon>
        <Icon type="user" size={18} />
      </ViewIcon>
      <ViewLabel>Team</ViewLabel>
    </ViewButton>
    <ViewButton active={currentView === 'mindmap'} onClick={() => onViewChange('mindmap')}>
      <ViewIcon>
        <Icon type="share-alt" size={18} />
      </ViewIcon>
      <ViewLabel>Mindmap</ViewLabel>
    </ViewButton>
  </ViewSwitcherContainer>
);

ViewSwitcher.propTypes = propTypes;

export default ViewSwitcher;
