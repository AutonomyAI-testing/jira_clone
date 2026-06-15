import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';

import ProjectBoardListIssue from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockProjectUsers = [
  { id: 1, name: 'Lord Gaben', avatarUrl: null },
  { id: 2, name: 'Pickle Rick', avatarUrl: null },
];

const mockIssueStory = {
  id: 1,
  title: 'Implement user authentication flow',
  type: 'story',
  priority: '3', // Medium
  userIds: [1],
};

const mockIssueBug = {
  id: 2,
  title: 'Fix broken drag and drop on mobile',
  type: 'bug',
  priority: '5', // Highest
  userIds: [1, 2],
};

const mockIssueTask = {
  id: 3,
  title: 'Add unit tests for issue creation API',
  type: 'task',
  priority: '2', // Low
  userIds: [],
};

const StoryWrapper = ({ children }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path="/project/1"
      render={() => (
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId="story-droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ padding: '16px', width: '280px', backgroundColor: '#f4f5f7', borderRadius: '4px' }}
              >
                <GlobalLinkReset />
                {children}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    />
  </MemoryRouter>
);

export default {
  title: 'Project/Board/Issue',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'centered',
  },
};

export const StoryIssue = {
  name: 'Story - Medium Priority',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockProjectUsers}
        issue={mockIssueStory}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const BugIssue = {
  name: 'Bug - Highest Priority (Multiple Assignees)',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockProjectUsers}
        issue={mockIssueBug}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const TaskIssue = {
  name: 'Task - Low Priority (No Assignees)',
  render: () => (
    <StoryWrapper>
      <ProjectBoardListIssue
        projectUsers={mockProjectUsers}
        issue={mockIssueTask}
        index={0}
      />
    </StoryWrapper>
  ),
};

export const BoardColumn = {
  name: 'Multiple Issues in Column',
  render: () => (
    <MemoryRouter initialEntries={['/project/1/board']}>
      <Route
        path="/project/1"
        render={() => (
          <DragDropContext onDragEnd={() => {}}>
            <Droppable droppableId="story-droppable">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ padding: '16px', width: '280px', backgroundColor: '#f4f5f7', borderRadius: '4px' }}
                >
                  <GlobalLinkReset />
                  <ProjectBoardListIssue
                    projectUsers={mockProjectUsers}
                    issue={mockIssueStory}
                    index={0}
                  />
                  <ProjectBoardListIssue
                    projectUsers={mockProjectUsers}
                    issue={mockIssueBug}
                    index={1}
                  />
                  <ProjectBoardListIssue
                    projectUsers={mockProjectUsers}
                    issue={mockIssueTask}
                    index={2}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      />
    </MemoryRouter>
  ),
};
