import React, { Fragment, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Breadcrumbs } from 'shared/components';
import { IssueStatus } from 'shared/constants/issues';
import { projectData } from 'shared/utils/mockData/project';

import Header from './Header';
import Filters from './Filters';
import List from './Lists/List';
import ListViewComponent from './ListView';
import GanttView from './GanttView';
import ViewSwitcher from './ViewSwitcher';

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

// Mock project data with more issues for better visualization
const mockProject = {
  ...projectData,
  issues: [
    ...projectData.issues,
    {
      id: 105,
      title: 'Design system components',
      type: 'story',
      status: 'backlog',
      priority: '3',
      listPosition: 2,
      description: 'Create reusable design system components',
      descriptionText: 'Create reusable design system components',
      estimate: 12,
      timeSpent: 0,
      timeRemaining: 12,
      reporterId: 1,
      projectId: 1,
      userIds: [1],
      users: [
        {
          id: 1,
          name: 'Lord Gaben',
          avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
        },
      ],
      productArea: 'UI/UX',
      startDate: '2020-06-05T00:00:00.000Z',
      dueDate: '2020-06-15T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-05T00:00:00.000Z',
      updatedAt: '2020-06-05T00:00:00.000Z',
    },
    {
      id: 106,
      title: 'Performance optimization',
      type: 'task',
      status: 'selected',
      priority: '2',
      listPosition: 2,
      description: 'Optimize application performance',
      descriptionText: 'Optimize application performance',
      estimate: 10,
      timeSpent: 0,
      timeRemaining: 10,
      reporterId: 2,
      projectId: 1,
      userIds: [2, 3],
      users: [
        {
          id: 2,
          name: 'Pickle Rick',
          avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
        },
        {
          id: 3,
          name: 'Baby Yoda',
          avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
        },
      ],
      productArea: 'Backend',
      startDate: '2020-06-07T00:00:00.000Z',
      dueDate: '2020-06-14T00:00:00.000Z',
      dependencies: [101],
      createdAt: '2020-06-06T00:00:00.000Z',
      updatedAt: '2020-06-06T00:00:00.000Z',
    },
  ],
};

// Story component that manages its own state
const ProjectBoardStory = ({ initialView = 'kanban' }) => {
  const [filters, setFilters] = useState(defaultFilters);
  const [currentView, setCurrentView] = useState(initialView);
  const currentUserId = mockProject.users[0]?.id;

  const mergeFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleDragEnd = (result) => {
    // No-op for story - just prevents errors
    console.log('Drag ended:', result);
  };

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Fragment>
        <Breadcrumbs items={['Projects', mockProject.name, 'Board']} />
        <Header>
          <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />
        </Header>
        <Filters
          projectUsers={mockProject.users}
          defaultFilters={defaultFilters}
          filters={filters}
          mergeFilters={mergeFilters}
        />
        {currentView === 'kanban' && (
          <DragDropContext onDragEnd={handleDragEnd}>
            <div style={{ display: 'flex', marginTop: 26 }}>
              {Object.values(IssueStatus).map(status => (
                <List
                  key={status}
                  status={status}
                  project={mockProject}
                  filters={filters}
                  currentUserId={currentUserId}
                />
              ))}
            </div>
          </DragDropContext>
        )}
        {currentView === 'list' && (
          <ListViewComponent
            project={mockProject}
            filters={filters}
            currentUserId={currentUserId}
          />
        )}
        {currentView === 'gantt' && (
          <GanttView
            project={mockProject}
            filters={filters}
            currentUserId={currentUserId}
          />
        )}
      </Fragment>
    </MemoryRouter>
  );
};

export default {
  title: 'Project/Board',
  component: ProjectBoardStory,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', background: '#f4f5f7', minHeight: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export const KanbanView = {
  render: () => <ProjectBoardStory initialView="kanban" />,
};

export const ListView = {
  render: () => <ProjectBoardStory initialView="list" />,
};

export const GanttViewStory = {
  render: () => <ProjectBoardStory initialView="gantt" />,
  name: 'Gantt View',
};
