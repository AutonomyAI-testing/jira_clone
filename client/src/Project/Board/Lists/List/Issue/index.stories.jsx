import React from 'react';
import { Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';
import ProjectBoardListIssue from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const projectUsers = [
  { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
  { id: 2, name: 'Pickle Rick', avatarUrl: null },
  { id: 3, name: 'Baby Yoda', avatarUrl: null },
];

const bugIssue = {
  id: 102,
  title: 'Fix login form validation — email format not being checked correctly on submit',
  type: 'bug',
  priority: '5',
  userIds: [2],
};

const storyIssue = {
  id: 103,
  title: 'Implement dark mode theme support across the application',
  type: 'story',
  priority: '3',
  userIds: [1],
};

const taskIssue = {
  id: 101,
  title: 'Add responsive navigation component with mobile support',
  type: 'task',
  priority: '4',
  userIds: [1, 2, 3],
};

const IssueWrapper = ({ issue }) => (
  <DragDropContext onDragEnd={() => {}}>
    <Droppable droppableId="story-droppable">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ width: 280, backgroundColor: '#f4f5f7', padding: '10px', borderRadius: '2px' }}
        >
          <GlobalLinkReset />
          <Route
            path="/project/:projectId/board"
            render={() => (
              <ProjectBoardListIssue
                issue={issue}
                projectUsers={projectUsers}
                index={0}
              />
            )}
          />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export default {
  title: 'Project/Board/Lists/List/Issue',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'padded',
  },
};

export const BugIssue = {
  name: 'Bug Issue',
  render: () => <IssueWrapper issue={bugIssue} />,
};

export const StoryIssue = {
  name: 'Story Issue',
  render: () => <IssueWrapper issue={storyIssue} />,
};

export const MultipleAssignees = {
  name: 'Multiple Assignees',
  render: () => <IssueWrapper issue={taskIssue} />,
};
