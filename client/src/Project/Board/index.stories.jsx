import React, { Fragment, useState } from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import { Breadcrumbs } from 'shared/components';
import useMergeState from 'shared/hooks/mergeState';
import { IssueStatus } from 'shared/constants/issues';

import Header from './Header';
import Filters from './Filters';
import List from './Lists/List';
import ListViewComp from './ListView';
import GanttViewComp from './GanttView';
import ViewSwitcher from './ViewSwitcher';

// Mock project data
const mockUsers = [
  { id: 1, name: 'Alice Williams', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Bob Smith', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Charlie Brown', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
];

const mockIssues = [
  {
    id: 1,
    title: 'Setup development environment',
    type: 'task',
    status: 'backlog',
    priority: '3',
    listPosition: 1,
    userIds: [1],
    users: [mockUsers[0]],
    startDate: '2024-01-15',
    dueDate: '2024-01-20',
    updatedAt: new Date().toISOString(),
    productArea: 'Infrastructure',
    dependencies: [],
  },
  {
    id: 2,
    title: 'Design database schema',
    type: 'story',
    status: 'selected',
    priority: '4',
    listPosition: 1,
    userIds: [1, 2],
    users: [mockUsers[0], mockUsers[1]],
    startDate: '2024-01-18',
    dueDate: '2024-01-25',
    updatedAt: new Date().toISOString(),
    productArea: 'Backend',
    dependencies: [1],
  },
  {
    id: 3,
    title: 'Fix login page bug',
    type: 'bug',
    status: 'inprogress',
    priority: '5',
    listPosition: 1,
    userIds: [2],
    users: [mockUsers[1]],
    startDate: '2024-01-20',
    dueDate: '2024-01-22',
    updatedAt: new Date().toISOString(),
    productArea: 'Authentication',
    dependencies: [],
  },
  {
    id: 4,
    title: 'Implement user dashboard',
    type: 'story',
    status: 'done',
    priority: '3',
    listPosition: 1,
    userIds: [3],
    users: [mockUsers[2]],
    startDate: '2024-01-10',
    dueDate: '2024-01-17',
    updatedAt: new Date().toISOString(),
    productArea: 'Frontend',
    dependencies: [1, 2],
  },
  {
    id: 5,
    title: 'Write API documentation',
    type: 'task',
    status: 'backlog',
    priority: '2',
    listPosition: 2,
    userIds: [1, 3],
    users: [mockUsers[0], mockUsers[2]],
    startDate: '2024-01-25',
    dueDate: '2024-01-30',
    updatedAt: new Date().toISOString(),
    productArea: 'Documentation',
    dependencies: [2],
  },
  {
    id: 6,
    title: 'Performance optimization',
    type: 'task',
    status: 'selected',
    priority: '4',
    listPosition: 2,
    userIds: [2],
    users: [mockUsers[1]],
    startDate: '2024-01-22',
    dueDate: '2024-01-28',
    updatedAt: new Date().toISOString(),
    productArea: 'Backend',
    dependencies: [3],
  },
];

const mockProject = {
  id: 1,
  name: 'Project Alpha',
  users: mockUsers,
  issues: mockIssues,
};

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

// Custom ProjectBoard component that doesn't use useCurrentUser hook
const ProjectBoardStory = ({ initialView = 'kanban' }) => {
  const [filters, mergeFilters] = useMergeState(defaultFilters);
  const [currentView, setCurrentView] = useState(initialView);
  const [project, setProject] = useState(mockProject);
  const currentUserId = 1;

  // Handler for updating issues locally (used for inline editing)
  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProject(prev => ({
      ...prev,
      issues: prev.issues.map(issue =>
        issue.id === issueId ? { ...issue, ...updatedFields } : issue
      ),
    }));
  };

  return (
    <MemoryRouter initialEntries={['/project/board']}>
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
          <DragDropContext onDragEnd={() => {}}>
            <div style={{ display: 'flex', marginTop: 20 }}>
              {Object.values(IssueStatus).map(status => (
                <List
                  key={status}
                  status={status}
                  project={project}
                  filters={filters}
                  currentUserId={currentUserId}
                  updateLocalProjectIssues={updateLocalProjectIssues}
                />
              ))}
            </div>
          </DragDropContext>
        )}
        {currentView === 'list' && (
          <ListViewComp
            project={project}
            filters={filters}
            currentUserId={currentUserId}
          />
        )}
        {currentView === 'gantt' && (
          <GanttViewComp
            project={project}
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
};

export const KanbanView = {
  render: () => <ProjectBoardStory initialView="kanban" />,
};

export const ListViewStory = {
  render: () => <ProjectBoardStory initialView="list" />,
};

export const GanttViewStory = {
  render: () => <ProjectBoardStory initialView="gantt" />,
};
