import React from 'react';
import { Router } from 'react-router-dom';

import history from 'browserHistory';
import AvatarSettings from './index';

const StoryWrapper = ({ children }) => (
  <Router history={history}>
    <div style={{ minWidth: '1200px', width: '100%' }}>{children}</div>
  </Router>
);

export default {
  title: 'Project/AvatarSettings',
  component: AvatarSettings,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'desktop' },
    chromatic: { viewports: [1200] },
  },
  decorators: [story => <StoryWrapper>{story()}</StoryWrapper>],
};

// Component uses useCurrentUser and useApi hooks with mock data
// All API calls are handled automatically via the mock data system (USE_MOCK_DATA=true)

export const Default = {
  name: 'Avatar Settings',
};
