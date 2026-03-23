import React, { Fragment, useState } from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import { Breadcrumbs } from 'shared/components';
import { IssueStatus, IssueType, IssuePriority } from 'shared/constants/issues';

import Header from './Header';
import Filters from './Filters';
import List from './Lists/List';
import ListView from './ListView';
import GanttView from './GanttView';
import ViewSwitcher from './ViewSwitcher';
import { Lists } from './Lists/Styles';

export default {
  title: 'Project/Board',
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock project data with various issues across different statuses
const createMockProject = () => ({
  id: 1,
  name: 'My Jira Project',
  users: [
    {
      id: 1,
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Bob Wilson',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
  ],
  issues: [
    {
      id: 1,
      title: 'Implement user authentication',
      type: IssueType.STORY,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGH,
      listPosition: 1,
      userIds: [1, 2],
      users: [
        { id: 1, name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
        { id: 2, name: 'Jane Smith', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
      ],
      updatedAt: new Date().toISOString(),
      startDate: '2024-01-15',
      dueDate: '2024-01-25',
      productArea: 'Authentication',
    },
    {
      id: 2,
      title: 'Fix login button styling',
      type: IssueType.BUG,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.MEDIUM,
      listPosition: 2,
      userIds: [2],
      users: [{ id: 2, name: 'Jane Smith', avatarUrl: 'https://i.pravatar.cc/150?img=2' }],
      updatedAt: new Date().toISOString(),
      startDate: '2024-01-16',
      dueDate: '2024-01-18',
      productArea: 'UI',
    },
    {
      id: 3,
      title: 'Set up database schema',
      type: IssueType.TASK,
      status: IssueStatus.SELECTED,
      priority: IssuePriority.HIGHEST,
      listPosition: 1,
      userIds: [1],
      users: [{ id: 1, name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?img=1' }],
      updatedAt: new Date().toISOString(),
      startDate: '2024-01-10',
      dueDate: '2024-01-20',
      productArea: 'Backend',
    },
    {
      id: 4,
      title: 'Create API endpoints',
      type: IssueType.TASK,
      status: IssueStatus.INPROGRESS,
      priority: IssuePriority.HIGH,
      listPosition: 1,
      userIds: [1, 3],
      users: [
        { id: 1, name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
        { id: 3, name: 'Bob Wilson', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
      ],
      updatedAt: new Date().toISOString(),
      startDate: '2024-01-18',
      dueDate: '2024-01-30',
      productArea: 'API',
    },
    {
      id: 5,
      title: 'Write unit tests',
      type: IssueType.TASK,
      status: IssueStatus.INPROGRESS,
      priority: IssuePriority.MEDIUM,
      listPosition: 2,
      userIds: [2],
      users: [{ id: 2, name: 'Jane Smith', avatarUrl: 'https://i.pravatar.cc/150?img=2' }],
      updatedAt: new Date().toISOString(),
      startDate: '2024-01-20',
      dueDate: '2024-02-05',
      productArea: 'Testing',
    },
    {
      id: 6,
      title: 'Initial project setup',
      type: IssueType.TASK,
      status: IssueStatus.DONE,
      priority: IssuePriority.LOW,
      listPosition: 1,
      userIds: [3],
      users: [{ id: 3, name: 'Bob Wilson', avatarUrl: 'https://i.pravatar.cc/150?img=3' }],
      updatedAt: new Date().toISOString(),
      startDate: '2024-01-01',
      dueDate: '2024-01-05',
      productArea: 'Setup',
    },
  ],
});

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

// Story component that manually replicates the board view without hooks that need mocking
const ProjectBoardStory = ({ initialView = 'kanban' }) => {
  const project = createMockProject();
  const [filters, setFilters] = useState(defaultFilters);
  const [currentView, setCurrentView] = useState(initialView);
  const currentUserId = 1;

  const mergeFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleDragEnd = () => {
    // No-op for story
  };

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Route path="/project/board">
        <div style={{ padding: '20px', background: '#f4f5f7', minHeight: '100vh' }}>
          <Fragment>
            <Breadcrumbs items={['Projects', project.name, 'Board']} />
            <Header>
              <ViewSwitcher currentView={currentView} onViewChange={setCurrentView} />
            </Header>
            <Filters
              projectUsers={project.users}
              defaultFilters={defaultFilters}
              filters={filters}
              mergeFilters={mergeFilters}
            />
            {currentView === 'kanban' && (
              <DragDropContext onDragEnd={handleDragEnd}>
                <Lists>
                  {Object.values(IssueStatus).map(status => (
                    <List
                      key={status}
                      status={status}
                      project={project}
                      filters={filters}
                      currentUserId={currentUserId}
                    />
                  ))}
                </Lists>
              </DragDropContext>
            )}
            {currentView === 'list' && (
              <ListView
                project={project}
                filters={filters}
                currentUserId={currentUserId}
              />
            )}
            {currentView === 'gantt' && (
              <GanttView
                project={project}
                filters={filters}
                currentUserId={currentUserId}
              />
            )}
          </Fragment>
        </div>
      </Route>
    </MemoryRouter>
  );
};

export const KanbanView = () => <ProjectBoardStory initialView="kanban" />;

export const ListViewStory = () => <ProjectBoardStory initialView="list" />;

export const GanttViewStory = () => <ProjectBoardStory initialView="gantt" />;
