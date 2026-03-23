import React, { Fragment, useState } from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';
import 'App/fontStyles.css';

import { Breadcrumbs } from 'shared/components';
import { IssueStatus } from 'shared/constants/issues';

import Header from './Header';
import Filters from './Filters';
import List from './Lists/List';
import ListView from './ListView';
import GanttView from './GanttView';
import ViewSwitcher from './ViewSwitcher';
import { Lists } from './Lists/Styles';

// Mock project data with issues in different statuses
const createMockProject = () => ({
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [
    {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
      email: 'gaben@jira.guest',
    },
    {
      id: 2,
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
      email: 'pickle.rick@jira.guest',
    },
    {
      id: 3,
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
      email: 'baby.yoda@jira.guest',
    },
  ],
  issues: [
    {
      id: 101,
      title: 'Add new navigation component',
      type: 'task',
      status: 'backlog',
      priority: '3',
      listPosition: 1,
      description: 'Create a responsive navigation component with mobile support',
      estimate: 8,
      timeSpent: 0,
      reporterId: 1,
      projectId: 1,
      userIds: [1, 2],
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
      productArea: 'Frontend',
      startDate: '2020-06-01T00:00:00.000Z',
      dueDate: '2020-06-10T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 102,
      title: 'Fix login form validation bug',
      type: 'bug',
      status: 'selected',
      priority: '2',
      listPosition: 1,
      description: 'Login form does not validate email format correctly',
      estimate: 4,
      timeSpent: 2,
      reporterId: 2,
      projectId: 1,
      userIds: [2],
      users: [{ id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' }],
      productArea: 'Authentication',
      startDate: '2020-06-02T00:00:00.000Z',
      dueDate: '2020-06-05T00:00:00.000Z',
      dependencies: [101],
      createdAt: '2020-06-02T00:00:00.000Z',
      updatedAt: '2020-06-02T00:00:00.000Z',
    },
    {
      id: 103,
      title: 'Implement dark mode feature',
      type: 'story',
      status: 'inprogress',
      priority: '3',
      listPosition: 1,
      description: 'Add dark mode theme support across the application',
      estimate: 16,
      timeSpent: 8,
      reporterId: 1,
      projectId: 1,
      userIds: [1, 3],
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      productArea: 'UI/UX',
      startDate: '2020-06-03T00:00:00.000Z',
      dueDate: '2020-06-20T00:00:00.000Z',
      dependencies: [],
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
      description: 'Update all API endpoints documentation with examples',
      estimate: 6,
      timeSpent: 6,
      reporterId: 3,
      projectId: 1,
      userIds: [3],
      users: [{ id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' }],
      productArea: 'Backend',
      startDate: '2020-06-04T00:00:00.000Z',
      dueDate: '2020-06-06T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-04T00:00:00.000Z',
      updatedAt: '2020-06-04T00:00:00.000Z',
    },
    {
      id: 105,
      title: 'Add user profile settings page',
      type: 'task',
      status: 'backlog',
      priority: '3',
      listPosition: 2,
      description: 'Create user profile settings with avatar upload',
      estimate: 10,
      timeSpent: 0,
      reporterId: 1,
      projectId: 1,
      userIds: [1],
      users: [{ id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' }],
      productArea: 'User Management',
      startDate: '2020-06-05T00:00:00.000Z',
      dueDate: '2020-06-15T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-05T00:00:00.000Z',
      updatedAt: '2020-06-05T00:00:00.000Z',
    },
  ],
});

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

// Kanban View Story Component - replaces ProjectBoardLists to avoid useCurrentUser hook
const KanbanBoardStory = () => {
  const [project, setProject] = useState(createMockProject());
  const [filters, setFilters] = useState(defaultFilters);
  const [currentView, setCurrentView] = useState('kanban');
  const currentUserId = 1;

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProject(prevProject => ({
      ...prevProject,
      issues: prevProject.issues.map(issue =>
        issue.id === issueId ? { ...issue, ...updatedFields } : issue
      ),
    }));
  };

  const mergeFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleDragEnd = () => {
    // Drag-drop handling for story (no-op)
  };

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Route path="/project/board">
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
                    updateLocalProjectIssues={updateLocalProjectIssues}
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
              updateLocalProjectIssues={updateLocalProjectIssues}
            />
          )}
          {currentView === 'gantt' && (
            <GanttView
              project={project}
              filters={filters}
              currentUserId={currentUserId}
              updateLocalProjectIssues={updateLocalProjectIssues}
            />
          )}
        </Fragment>
      </Route>
    </MemoryRouter>
  );
};

export default {
  title: 'Project/Board',
  component: KanbanBoardStory,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Fragment>
        <NormalizeStyles />
        <BaseStyles />
        <div style={{ width: '100%', minHeight: '100vh', background: '#fff', padding: '20px' }}>
          <Story />
        </div>
      </Fragment>
    ),
  ],
};

// Default story showing the Kanban board with inline editing capability
export const KanbanView = {
  render: () => <KanbanBoardStory />,
};

// ListView story
const ListViewStory = () => {
  const [project, setProject] = useState(createMockProject());
  const [filters, setFilters] = useState(defaultFilters);
  const currentUserId = 1;

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProject(prevProject => ({
      ...prevProject,
      issues: prevProject.issues.map(issue =>
        issue.id === issueId ? { ...issue, ...updatedFields } : issue
      ),
    }));
  };

  const mergeFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Route path="/project/board">
        <Fragment>
          <Breadcrumbs items={['Projects', project.name, 'Board']} />
          <Header>
            <ViewSwitcher currentView="list" onViewChange={() => {}} />
          </Header>
          <Filters
            projectUsers={project.users}
            defaultFilters={defaultFilters}
            filters={filters}
            mergeFilters={mergeFilters}
          />
          <ListView
            project={project}
            filters={filters}
            currentUserId={currentUserId}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        </Fragment>
      </Route>
    </MemoryRouter>
  );
};

export const ListViewDisplay = {
  render: () => <ListViewStory />,
};

// GanttView story
const GanttViewStory = () => {
  const [project, setProject] = useState(createMockProject());
  const [filters, setFilters] = useState(defaultFilters);
  const currentUserId = 1;

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProject(prevProject => ({
      ...prevProject,
      issues: prevProject.issues.map(issue =>
        issue.id === issueId ? { ...issue, ...updatedFields } : issue
      ),
    }));
  };

  const mergeFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Route path="/project/board">
        <Fragment>
          <Breadcrumbs items={['Projects', project.name, 'Board']} />
          <Header>
            <ViewSwitcher currentView="gantt" onViewChange={() => {}} />
          </Header>
          <Filters
            projectUsers={project.users}
            defaultFilters={defaultFilters}
            filters={filters}
            mergeFilters={mergeFilters}
          />
          <GanttView
            project={project}
            filters={filters}
            currentUserId={currentUserId}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        </Fragment>
      </Route>
    </MemoryRouter>
  );
};

export const GanttViewDisplay = {
  render: () => <GanttViewStory />,
  parameters: {
    layout: 'fullscreen',
  },
};
