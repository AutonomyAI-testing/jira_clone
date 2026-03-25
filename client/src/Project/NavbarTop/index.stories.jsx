import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ProjectNavbarTop from './index';

// Manually mock the useCurrentUser hook to avoid module resolution issues
import * as useCurrentUserModule from '../../../shared/hooks/currentUser';

// Create a mock history for React Router
const mockHistory = createMemoryHistory();

// Mock current user data
const mockCurrentUserData = {
  id: 1,
  name: 'Lord Gaben',
  avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
  email: 'gaben@jira.guest',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
};

// Replace the hook with a mock version
let mockCurrentUser = mockCurrentUserData;
useCurrentUserModule.default = () => ({
  currentUser: mockCurrentUser,
  currentUserId: mockCurrentUser?.id,
});

export default {
  title: 'Project/NavbarTop',
  component: ProjectNavbarTop,
  decorators: [
    (Story) => (
      <Router history={mockHistory}>
        <Story />
      </Router>
    ),
  ],
};

export const Default = () => {
  mockCurrentUser = mockCurrentUserData;
  return (
    <ProjectNavbarTop
      issueSearchModalOpen={() => console.log('Search modal opened')}
      issueCreateModalOpen={() => console.log('Create modal opened')}
    />
  );
};

export const WithoutUser = () => {
  mockCurrentUser = null;
  return (
    <ProjectNavbarTop
      issueSearchModalOpen={() => console.log('Search modal opened')}
      issueCreateModalOpen={() => console.log('Create modal opened')}
    />
  );
};
