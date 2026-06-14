import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { createGlobalStyle } from 'styled-components';

import ProjectBoardListIssue from './index';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockProjectUsers = [
  { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg' },
  { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png' },
  { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg' },
];

const issueWithDueDate = {
  id: 101,
  title: 'Implement dark mode support across the board',
  type: 'story',
  status: 'inprogress',
  priority: '3',
  listPosition: 1,
  userIds: [1, 2],
  dueDate: '2024-06-10T00:00:00.000Z',
};

const issueWithoutDueDate = {
  id: 102,
  title: 'Fix login form validation on mobile',
  type: 'bug',
  status: 'selected',
  priority: '2',
  listPosition: 2,
  userIds: [1],
  dueDate: null,
};

const makeWrapper = droppableId => ({ children }) => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route
      path="/project/1"
      render={() => (
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId={droppableId}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ padding: 8, minHeight: 80, width: 280 }}
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
  title: 'Project/BoardListIssue',
  component: ProjectBoardListIssue,
  parameters: {
    layout: 'padded',
  },
};

const WrapperWithDue = makeWrapper('droppable-with-due');
const WrapperWithoutDue = makeWrapper('droppable-without-due');

export const WithDueDate = {
  name: 'With Due Date',
  render: () => (
    <WrapperWithDue>
      <ProjectBoardListIssue projectUsers={mockProjectUsers} issue={issueWithDueDate} index={0} />
    </WrapperWithDue>
  ),
};

export const WithoutDueDate = {
  name: 'Without Due Date',
  render: () => (
    <WrapperWithoutDue>
      <ProjectBoardListIssue
        projectUsers={mockProjectUsers}
        issue={issueWithoutDueDate}
        index={0}
      />
    </WrapperWithoutDue>
  ),
};
