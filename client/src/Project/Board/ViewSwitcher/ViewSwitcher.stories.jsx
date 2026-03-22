import React, { useState } from 'react';
import ViewSwitcher from './index';

export default {
  title: 'Project/Board/ViewSwitcher',
  component: ViewSwitcher,
  parameters: {
    layout: 'centered',
  },
};

// Interactive story with state management
const ViewSwitcherWithState = () => {
  const [currentView, setCurrentView] = useState('kanban');
  return <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />;
};

export const Default = {
  render: () => <ViewSwitcherWithState />,
};

export const KanbanActive = {
  args: {
    currentView: 'kanban',
    onViewChange: () => {},
  },
};

export const ListActive = {
  args: {
    currentView: 'list',
    onViewChange: () => {},
  },
};

export const GanttActive = {
  args: {
    currentView: 'gantt',
    onViewChange: () => {},
  },
};
