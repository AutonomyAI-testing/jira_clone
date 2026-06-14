import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';
import ProjectBoardListIssue from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockUsers = [
  { id: 1, name: 'Alice Johnson', avatarUrl: null },
  { id: 2, name: 'Bob Martinez', avatarUrl: null },
  { id: 3, name: 'Carol White', avatarUrl: null },
];

const mockIssueTask = {
  id: 101,
  title: 'Implement user authentication with JWT tokens',
  type: 'task',
  priority: '3',
  userIds: [1],
};

const mockIssueBug = {
  id: 102,
  title: 'Fix broken pagination on project board when filtering by assignee',
  type: 'bug',
  priority: '5',
  userIds: [1, 2, 3],
};

const mockIssueStory = {
  id: 103,
  title: 'As a user, I want to drag and drop issues between columns',
  type: 'story',
  priority: '4',
  userIds: [],
};

const mockIssueLow = {
  id: 104,
  title: 'Update README with deployment instructions',
  type: 'task',
  priority: '1',
  userIds: [2],
};

// Wrapper that provides all required context for the component
const StoryWrapper = ({ issue, users }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path="/project/1"
      render={() => (
        <>
          <GlobalLinkReset />
          <div style={{ width: 240, padding: '12px', background: '#f4f5f7', borderRadius: 4 }}>
            <DragDropContext onDragEnd={() => {}}>
              <Droppable droppableId="story-droppable">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <ProjectBoardListIssue
                      issue={issue}
                      projectUsers={users}
                      index={0}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </>
      )}
    />
  </MemoryRouter>
);

// Multi-card board column wrapper (shows several issues stacked)
const MultiCardWrapper = ({ issues, users }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path="/project/1"
      render={() => (
        <>
          <GlobalLinkReset />
          <div style={{ width: 240, padding: '12px', background: '#f4f5f7', borderRadius: 4 }}>
            <DragDropContext onDragEnd={() => {}}>
              <Droppable droppableId="story-droppable-multi">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {issues.map((issue, i) => (
                      <ProjectBoardListIssue
                        key={issue.id}
                        issue={issue}
                        projectUsers={users}
                        index={i}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </>
      )}
    />
  </MemoryRouter>
);

export default {
  title: 'Project/Board/Issue Card',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'padded',
  },
};

export const SingleAssignee = {
  name: 'Single Assignee (Task)',
  render: () => (
    <StoryWrapper issue={mockIssueTask} users={mockUsers} />
  ),
};

export const MultipleAssignees = {
  name: 'Multiple Assignees (Bug / Highest Priority)',
  render: () => (
    <StoryWrapper issue={mockIssueBug} users={mockUsers} />
  ),
};

export const NoAssignee = {
  name: 'No Assignee (Story)',
  render: () => (
    <StoryWrapper issue={mockIssueStory} users={mockUsers} />
  ),
};

export const LowPriority = {
  name: 'Low Priority / Single Assignee',
  render: () => (
    <StoryWrapper issue={mockIssueLow} users={mockUsers} />
  ),
};
