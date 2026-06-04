import React, { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import Statistics from './Statistics';
import Filters from './Filters';
import AdvancedFilters from './Filters/AdvancedFilters';
import FilterChips from './Filters/FilterChips';
import ProjectBoardHeader from './Header';

export default {
  title: 'Project/Board',
  parameters: {
    layout: 'fullscreen',
  },
};

// Rich mock issues dataset with variety of statuses, priorities, and types
const mockIssues = [
  {
    id: 101,
    title: 'Add new navigation component',
    type: 'task',
    status: 'backlog',
    priority: '3',
    listPosition: 1,
    userIds: [1],
    users: [{ id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' }],
    dueDate: '2020-06-10T00:00:00.000Z',
    createdAt: '2020-06-01T00:00:00.000Z',
    updatedAt: '2020-06-01T00:00:00.000Z',
  },
  {
    id: 102,
    title: 'Fix login form validation',
    type: 'bug',
    status: 'selected',
    priority: '2',
    listPosition: 1,
    userIds: [2],
    users: [{ id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' }],
    dueDate: '2020-06-05T00:00:00.000Z',
    createdAt: '2020-06-02T00:00:00.000Z',
    updatedAt: '2020-06-02T00:00:00.000Z',
  },
  {
    id: 103,
    title: 'Implement dark mode',
    type: 'story',
    status: 'inprogress',
    priority: '3',
    listPosition: 1,
    userIds: [1, 3],
    users: [
      { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
      { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
    ],
    dueDate: '2020-06-20T00:00:00.000Z',
    createdAt: '2020-06-03T00:00:00.000Z',
    updatedAt: '2020-06-03T00:00:00.000Z',
  },
  {
    id: 104,
    title: 'Update API documentation',
    type: 'task',
    status: 'done',
    priority: '4',
    listPosition: 1,
    userIds: [3],
    users: [{ id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' }],
    dueDate: '2020-06-06T00:00:00.000Z',
    createdAt: '2020-06-04T00:00:00.000Z',
    updatedAt: '2020-06-04T00:00:00.000Z',
  },
  {
    id: 105,
    title: 'Set up CI/CD pipeline',
    type: 'task',
    status: 'done',
    priority: '5',
    listPosition: 2,
    userIds: [1],
    users: [{ id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' }],
    dueDate: '2020-06-08T00:00:00.000Z',
    createdAt: '2020-06-01T00:00:00.000Z',
    updatedAt: '2020-06-03T00:00:00.000Z',
  },
  {
    id: 106,
    title: 'Write unit tests for auth module',
    type: 'task',
    status: 'inprogress',
    priority: '4',
    listPosition: 2,
    userIds: [2],
    users: [{ id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' }],
    dueDate: '2020-06-15T00:00:00.000Z',
    createdAt: '2020-06-02T00:00:00.000Z',
    updatedAt: '2020-06-05T00:00:00.000Z',
  },
  {
    id: 107,
    title: 'Performance optimization for dashboard',
    type: 'story',
    status: 'backlog',
    priority: '2',
    listPosition: 2,
    userIds: [3],
    users: [{ id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' }],
    dueDate: '2020-07-01T00:00:00.000Z',
    createdAt: '2020-06-01T00:00:00.000Z',
    updatedAt: '2020-06-01T00:00:00.000Z',
  },
  {
    id: 108,
    title: 'Fix mobile responsive layout bug',
    type: 'bug',
    status: 'selected',
    priority: '5',
    listPosition: 2,
    userIds: [1, 2],
    users: [
      { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
      { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
    ],
    dueDate: '2020-06-12T00:00:00.000Z',
    createdAt: '2020-06-05T00:00:00.000Z',
    updatedAt: '2020-06-05T00:00:00.000Z',
  },
];

const mockUsers = [
  { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
  { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
  { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
];

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
  statuses: [],
  priorities: [],
  types: [],
  dueDateRange: { from: null, to: null },
};

// -----------------------------------------------------------------------
// Story: Statistics Dashboard + Advanced Filters Panel (both expanded)
// -----------------------------------------------------------------------
const BoardFeaturesContainer = ({ initialFilters, showAdvancedExpandedDirectly }) => {
  const [filters, setFilters] = useState(initialFilters || defaultFilters);

  const mergeFilters = newFilters => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <MemoryRouter initialEntries={['/project/1/board']}>
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Page header area */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px solid #dfe1e6',
          }}
        >
          <ProjectBoardHeader />
        </div>

        {/* Filter Bar */}
        <Filters
          projectUsers={mockUsers}
          defaultFilters={defaultFilters}
          filters={filters}
          mergeFilters={mergeFilters}
        />

        {/* Advanced Filters Panel — always expanded in this story */}
        {showAdvancedExpandedDirectly && (
          <AdvancedFilters
            filters={filters}
            mergeFilters={mergeFilters}
            isExpanded
          />
        )}

        {/* Filter Chips */}
        <FilterChips filters={filters} mergeFilters={mergeFilters} />

        {/* Statistics Dashboard */}
        <div style={{ marginTop: '20px' }}>
          <Statistics issues={mockIssues} />
        </div>
      </div>
    </MemoryRouter>
  );
};

// -----------------------------------------------------------------------
// Story 1: Advanced Filters Expanded + Statistics Dashboard
// Shows both new features: collapsible filter panel + statistics banner
// -----------------------------------------------------------------------
export const AdvancedFilteringAndStatistics = () => (
  <BoardFeaturesContainer showAdvancedExpandedDirectly />
);
AdvancedFilteringAndStatistics.storyName = 'Advanced Filtering + Statistics Dashboard';

// -----------------------------------------------------------------------
// Story 2: Active Filters with Filter Chips
// Shows removable filter chips when statuses + priorities are selected
// -----------------------------------------------------------------------
export const ActiveFiltersWithChips = () => (
  <BoardFeaturesContainer
    initialFilters={{
      ...defaultFilters,
      statuses: ['inprogress', 'selected'],
      priorities: ['4', '5'],
      types: ['bug'],
    }}
  />
);
ActiveFiltersWithChips.storyName = 'Active Filters with Filter Chips';

// -----------------------------------------------------------------------
// Story 3: Statistics Only (standalone panel)
// Shows the metric cards and status/priority bar charts in isolation
// -----------------------------------------------------------------------
export const StatisticsDashboard = () => (
  <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
    <Statistics issues={mockIssues} />
  </div>
);
StatisticsDashboard.storyName = 'Statistics Dashboard';
