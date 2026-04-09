import React, { Fragment, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Breadcrumbs } from 'shared/components';
import { IssueStatus } from 'shared/constants/issues';

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
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/project/board']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

// Mock project data with inline editing support
const createMockProject = () => ({
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects.',
  category: 'software',
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
      title: 'Add new navigation component with responsive design',
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
      startDate: '2024-01-01T00:00:00.000Z',
      dueDate: '2024-01-10T00:00:00.000Z',
      dependencies: [],
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    },
    {
      id: 102,
      title: 'Fix login form validation with email format check',
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
      users: [
        { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
      ],
      productArea: 'Authentication',
      startDate: '2024-01-02T00:00:00.000Z',
      dueDate: '2024-01-05T00:00:00.000Z',
      dependencies: [101],
      createdAt: '2024-01-02T00:00:00.000Z',
      updatedAt: '2024-01-02T00:00:00.000Z',
    },
    {
      id: 103,
      title: 'Implement dark mode theme support',
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
      startDate: '2024-01-03T00:00:00.000Z',
      dueDate: '2024-01-20T00:00:00.000Z',
      dependencies: [],
      createdAt: '2024-01-03T00:00:00.000Z',
      updatedAt: '2024-01-03T00:00:00.000Z',
    },
    {
      id: 104,
      title: 'Update API documentation with examples',
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
      users: [
        { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
      ],
      productArea: 'Backend',
      startDate: '2024-01-04T00:00:00.000Z',
      dueDate: '2024-01-06T00:00:00.000Z',
      dependencies: [],
      createdAt: '2024-01-04T00:00:00.000Z',
      updatedAt: '2024-01-04T00:00:00.000Z',
    },
  ],
});

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

// Interactive story component with all views and inline editing
const ProjectBoardStory = () => {
  const [project, setProject] = useState(createMockProject);
  const [filters, setFilters] = useState(defaultFilters);
  const [currentView, setCurrentView] = useState('kanban');

  const mergeFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setProject(prev => ({
      ...prev,
      issues: prev.issues.map(issue =>
        issue.id === issueId ? { ...issue, ...updatedFields } : issue
      ),
    }));
  };

  const fetchProject = () => {
    // Mock fetch - no-op in story
  };

  return (
    <div style={{ padding: 20, minHeight: '100vh', background: '#f4f5f7' }}>
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
          <Lists>
            {Object.values(IssueStatus).map(status => (
              <List
                key={status}
                status={status}
                project={project}
                filters={filters}
                currentUserId={1}
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
          currentUserId={1}
          updateLocalProjectIssues={updateLocalProjectIssues}
        />
      )}
      {currentView === 'gantt' && (
        <GanttView
          project={project}
          filters={filters}
          currentUserId={1}
          updateLocalProjectIssues={updateLocalProjectIssues}
        />
      )}
    </div>
  );
};

// Default story - Kanban view with inline editing
export const InlineEditing = {
  render: () => <ProjectBoardStory />,
  parameters: {
    docs: {
      description: {
        story: `
## Inline Editing Test

This story tests inline editing across all three views (Kanban, List, Gantt):

### How to test:
1. **Click on any issue card/row** to enter edit mode
2. **Verify dropdown widths** - Type/Priority/Status = 220px, Assignees = 250px (should show full text)
3. **Make changes** to multiple fields (title, type, priority, status, assignees)
4. **Click Save** to apply all changes at once
5. **Click Cancel** to discard changes
6. **Test assignee add/remove** by clicking the X icon on selected users
7. **Switch between views** using the view switcher to verify consistent behavior

### Bug fixes verified:
- Dropdown widths are wide enough to show full text labels
- Save/Cancel buttons work correctly (don't navigate away)
- Click events are properly captured (no unwanted navigation)
- Changes persist after saving
        `,
      },
    },
  },
};
