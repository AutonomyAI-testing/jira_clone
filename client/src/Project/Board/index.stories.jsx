import React, { Fragment, useState } from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { Breadcrumbs, Modal } from 'shared/components';

import Header from './Header';
import Filters from './Filters';
import Lists from './Lists';
import ListView from './ListView';
import GanttView from './GanttView';
import TeamView from './TeamView';
import MindmapView from './MindmapView';
import ViewSwitcher from './ViewSwitcher';

// Comprehensive mock project data with multiple issues across all statuses
const mockProject = {
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
      descriptionText: 'Create a responsive navigation component with mobile support',
      estimate: 8,
      timeSpent: 0,
      timeRemaining: 8,
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
      id: 105,
      title: 'Setup CI/CD pipeline',
      type: 'task',
      status: 'backlog',
      priority: '2',
      listPosition: 2,
      description: 'Configure GitHub Actions for automated testing and deployment',
      descriptionText: 'Configure GitHub Actions for automated testing and deployment',
      estimate: 12,
      timeSpent: 0,
      timeRemaining: 12,
      reporterId: 2,
      projectId: 1,
      userIds: [2],
      users: [
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
      productArea: 'DevOps',
      startDate: '2020-06-05T00:00:00.000Z',
      dueDate: '2020-06-15T00:00:00.000Z',
      dependencies: [],
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
      description: 'Login form does not validate email format correctly',
      descriptionText: 'Login form does not validate email format correctly',
      estimate: 4,
      timeSpent: 2,
      timeRemaining: 2,
      reporterId: 2,
      projectId: 1,
      userIds: [2],
      users: [
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
      productArea: 'Authentication',
      startDate: '2020-06-02T00:00:00.000Z',
      dueDate: '2020-06-05T00:00:00.000Z',
      dependencies: [101],
      createdAt: '2020-06-02T00:00:00.000Z',
      updatedAt: '2020-06-02T00:00:00.000Z',
    },
    {
      id: 106,
      title: 'Improve search performance',
      type: 'story',
      status: 'selected',
      priority: '1',
      listPosition: 2,
      description: 'Optimize search queries to reduce response time',
      descriptionText: 'Optimize search queries to reduce response time',
      estimate: 10,
      timeSpent: 0,
      timeRemaining: 10,
      reporterId: 1,
      projectId: 1,
      userIds: [1, 3],
      users: [
        { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      productArea: 'Backend',
      startDate: '2020-06-03T00:00:00.000Z',
      dueDate: '2020-06-12T00:00:00.000Z',
      dependencies: [],
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
      description: 'Add dark mode theme support across the application',
      descriptionText: 'Add dark mode theme support across the application',
      estimate: 16,
      timeSpent: 8,
      timeRemaining: 8,
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
      id: 107,
      title: 'Add user profile editing',
      type: 'task',
      status: 'inprogress',
      priority: '4',
      listPosition: 2,
      description: 'Allow users to edit their profile information and avatar',
      descriptionText: 'Allow users to edit their profile information and avatar',
      estimate: 8,
      timeSpent: 4,
      timeRemaining: 4,
      reporterId: 3,
      projectId: 1,
      userIds: [3],
      users: [
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      productArea: 'Frontend',
      startDate: '2020-06-04T00:00:00.000Z',
      dueDate: '2020-06-10T00:00:00.000Z',
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
      descriptionText: 'Update all API endpoints documentation with examples',
      estimate: 6,
      timeSpent: 6,
      timeRemaining: 0,
      reporterId: 3,
      projectId: 1,
      userIds: [3],
      users: [
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      productArea: 'Backend',
      startDate: '2020-06-04T00:00:00.000Z',
      dueDate: '2020-06-06T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-04T00:00:00.000Z',
      updatedAt: '2020-06-04T00:00:00.000Z',
    },
    {
      id: 108,
      title: 'Fix mobile responsiveness',
      type: 'bug',
      status: 'done',
      priority: '2',
      listPosition: 2,
      description: 'Fix layout issues on mobile devices',
      descriptionText: 'Fix layout issues on mobile devices',
      estimate: 5,
      timeSpent: 5,
      timeRemaining: 0,
      reporterId: 2,
      projectId: 1,
      userIds: [2],
      users: [
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
      productArea: 'Frontend',
      startDate: '2020-06-01T00:00:00.000Z',
      dueDate: '2020-06-03T00:00:00.000Z',
      dependencies: [],
      createdAt: '2020-06-01T00:00:00.000Z',
      updatedAt: '2020-06-03T00:00:00.000Z',
    },
  ],
};

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

// Story component that replicates ProjectBoard without useRouteMatch/useHistory dependencies
const ProjectBoardStory = ({ project, initialView = 'kanban' }) => {
  const [filters, setFilters] = useState(defaultFilters);
  const [currentView, setCurrentView] = useState(initialView);

  const mergeFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const fetchProject = () => console.log('fetchProject called');
  const updateLocalProjectIssues = (issueId, fields) => {
    console.log('updateLocalProjectIssues called', issueId, fields);
  };

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Route path="/project/board">
        <div style={{ width: '100%', minHeight: '100vh', background: '#f4f5f7' }}>
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
            <KanbanViewStory
              project={project}
              filters={filters}
              updateLocalProjectIssues={updateLocalProjectIssues}
            />
          )}
          {currentView === 'list' && (
            <ListView
              project={project}
              filters={filters}
              currentUserId={project.users[0]?.id}
            />
          )}
          {currentView === 'gantt' && (
            <GanttView
              project={project}
              filters={filters}
              currentUserId={project.users[0]?.id}
            />
          )}
          {currentView === 'team' && (
            <TeamView
              project={project}
              filters={filters}
              currentUserId={project.users[0]?.id}
            />
          )}
          {currentView === 'mindmap' && (
            <MindmapView
              project={project}
              filters={filters}
              currentUserId={project.users[0]?.id}
            />
          )}
        </div>
      </Route>
    </MemoryRouter>
  );
};

// Kanban view that bypasses useCurrentUser hook by importing List directly
import List from './Lists/List';
import { DragDropContext } from 'react-beautiful-dnd';
import { IssueStatus } from 'shared/constants/issues';
import { Lists as ListsContainer } from './Lists/Styles';

const KanbanViewStory = ({ project, filters, updateLocalProjectIssues }) => {
  const currentUserId = project.users[0]?.id;

  const handleIssueDrop = ({ draggableId, destination, source }) => {
    if (!destination) return;
    console.log('Issue dropped', draggableId, destination, source);
  };

  return (
    <DragDropContext onDragEnd={handleIssueDrop}>
      <ListsContainer>
        {Object.values(IssueStatus).map((status) => (
          <List
            key={status}
            status={status}
            project={project}
            filters={filters}
            currentUserId={currentUserId}
          />
        ))}
      </ListsContainer>
    </DragDropContext>
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
  args: {
    project: mockProject,
    initialView: 'kanban',
  },
};

export const ListViewStory = {
  name: 'List View',
  args: {
    project: mockProject,
    initialView: 'list',
  },
};

export const GanttViewStory = {
  name: 'Gantt View',
  args: {
    project: mockProject,
    initialView: 'gantt',
  },
};

export const TeamViewStory = {
  name: 'Team View',
  args: {
    project: mockProject,
    initialView: 'team',
  },
};

export const MindmapViewStory = {
  name: 'Mindmap View',
  args: {
    project: mockProject,
    initialView: 'mindmap',
  },
};
