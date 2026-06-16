import React from 'react';

import { projectData } from 'shared/utils/mockData/project';

// USE_MOCK_DATA=true in config.js, so the api module's mock data router
// already handles GET /currentUser and returns currentUserData automatically.
// No patching needed — useCurrentUser() receives data via the normal mock path.

import AvatarPage from './index';

// Story wrapper background styling
const STORY_WRAPPER_STYLE = {
  padding: '32px',
  background: '#f4f5f7',
  minHeight: '100vh',
};

const meta = {
  title: 'Project/AvatarPage',
  component: AvatarPage,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Variant data: project with users that have no avatar URLs (will render letter avatars)
const projectWithLetterAvatars = {
  ...projectData,
  users: projectData.users.map(u => ({ ...u, avatarUrl: null })),
};

export const Default = {
  name: 'Default',
  render: () => (
    <div style={STORY_WRAPPER_STYLE}>
      <AvatarPage project={projectData} />
    </div>
  ),
};

export const NoAvatarUser = {
  name: 'No Avatar User',
  render: () => (
    <div style={STORY_WRAPPER_STYLE}>
      <AvatarPage project={projectWithLetterAvatars} />
    </div>
  ),
};
