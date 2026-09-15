import React, { useEffect } from 'react';
import { Formik } from 'formik';

import { currentUserData } from 'shared/utils/mockData/currentUser';
import AvatarPage from './index';

export default {
  title: 'Project/AvatarPage',
  component: AvatarPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Story />
      </Formik>
    ),
  ],
};

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects.',
  category: 'software',
};

// Wrapper that temporarily clears avatarUrl to show empty state
const AvatarPageNoAvatarWrapper = () => {
  const originalAvatarUrl = currentUserData.avatarUrl;

  useEffect(() => {
    // Restore on unmount
    return () => {
      currentUserData.avatarUrl = originalAvatarUrl;
    };
  }, [originalAvatarUrl]);

  // Mutate before render
  currentUserData.avatarUrl = null;

  return <AvatarPage project={mockProject} />;
};

// Default state: no avatar set, shows empty state with upload form
export const DefaultNoAvatar = {
  name: 'Default (No Avatar)',
  render: () => <AvatarPageNoAvatarWrapper />,
};

// With avatar set
export const WithAvatar = {
  name: 'With Avatar Set',
  render: () => <AvatarPage project={mockProject} />,
};
