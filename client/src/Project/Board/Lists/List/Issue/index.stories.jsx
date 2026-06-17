import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import ProjectBoardListIssue from './index';

export default {
  title: 'Project/Board/ProjectBoardListIssue',
  component: ProjectBoardListIssue,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/project/board']}>
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId="story-droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ padding: '20px', background: '#f4f5f7', minWidth: '280px', maxWidth: '320px' }}
              >
                <Story />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
};

const projectUsers = [
  { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/gaben.jpg' },
  { id: 2, name: 'Han Solo', avatarUrl: null },
  { id: 3, name: 'Leia Organa', avatarUrl: null },
  { id: 4, name: 'Yoda', avatarUrl: null },
];

// Bug with highest priority, two assignees
export const BugHighestPriority = {
  args: {
    issue: {
      id: 1,
      title: 'Fix authentication token expiry causing unexpected logouts',
      type: 'bug',
      priority: '5',
      userIds: [1, 2],
    },
    projectUsers,
    index: 0,
  },
};

// Story with high priority, one assignee
export const StoryHighPriority = {
  args: {
    issue: {
      id: 2,
      title: 'As a user, I want to filter issues by assignee on the board',
      type: 'story',
      priority: '4',
      userIds: [3],
    },
    projectUsers,
    index: 1,
  },
};

// Task with medium priority, no assignees
export const TaskMediumPriorityUnassigned = {
  args: {
    issue: {
      id: 3,
      title: 'Update README with new setup instructions',
      type: 'task',
      priority: '3',
      userIds: [],
    },
    projectUsers,
    index: 2,
  },
};

// Bug with low priority, multiple assignees
export const BugLowPriorityMultipleAssignees = {
  args: {
    issue: {
      id: 4,
      title: 'Minor UI glitch in sidebar nav when window is resized',
      type: 'bug',
      priority: '2',
      userIds: [1, 3, 4],
    },
    projectUsers,
    index: 3,
  },
};

// Story with long title to test truncation/wrapping
export const StoryLongTitle = {
  args: {
    issue: {
      id: 5,
      title: 'As a project manager, I want to be able to create custom issue types so that my team can better organize and categorize their work',
      type: 'story',
      priority: '3',
      userIds: [2, 4],
    },
    projectUsers,
    index: 4,
  },
};

// All cards shown together
export const AllVariants = {
  render: () => (
    <MemoryRouter initialEntries={['/project/board']}>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="all-variants-droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ padding: '20px', background: '#f4f5f7', minWidth: '280px', maxWidth: '320px' }}
            >
              {[
                {
                  id: 10,
                  title: 'Fix authentication token expiry causing unexpected logouts',
                  type: 'bug',
                  priority: '5',
                  userIds: [1, 2],
                },
                {
                  id: 11,
                  title: 'As a user, I want to filter issues by assignee on the board',
                  type: 'story',
                  priority: '4',
                  userIds: [3],
                },
                {
                  id: 12,
                  title: 'Update README with new setup instructions',
                  type: 'task',
                  priority: '3',
                  userIds: [],
                },
                {
                  id: 13,
                  title: 'Minor UI glitch in sidebar nav when window is resized',
                  type: 'bug',
                  priority: '2',
                  userIds: [1, 3, 4],
                },
              ].map((issue, index) => (
                <ProjectBoardListIssue
                  key={issue.id}
                  issue={issue}
                  projectUsers={projectUsers}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </MemoryRouter>
  ),
};
