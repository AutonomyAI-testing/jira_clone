import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { currentUserData } from 'shared/utils/mockData/currentUser';
import AvatarPage from './index';

export default {
  title: 'Project/AvatarPage',
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/project/avatar']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

// Helper: temporarily patch currentUserData then render the real AvatarPage.
// currentUserData is a plain JS object exported from the mock module —
// mutating its properties before mount controls what useCurrentUser returns.
const AvatarPageWithUser = ({ avatarUrl }) => {
  const saved = currentUserData.avatarUrl;
  currentUserData.avatarUrl = avatarUrl;
  // Restore after first render via cleanup effect managed in the story wrapper
  React.useEffect(
    () => () => {
      currentUserData.avatarUrl = saved;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return <AvatarPage />;
};

// Primary story: no avatar set — shows the initials letter placeholder
export const NoAvatar = {
  name: 'No Avatar (Initials Placeholder)',
  render: () => <AvatarPageWithUser avatarUrl={null} />,
};

// Avatar URL entered — shows image preview and Remove button
export const WithAvatarUrl = {
  name: 'With Avatar URL',
  render: () => <AvatarPageWithUser avatarUrl="https://i.ibb.co/6n0hLML/lord-gaben.jpg" />,
};

// Default (live mock): renders the real AvatarPage with the USE_MOCK_DATA system
export const Default = {
  name: 'Default (Live Mock Data)',
  render: () => <AvatarPage />,
};
