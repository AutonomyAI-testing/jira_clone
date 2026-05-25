import React from 'react';

import { ProjectPage } from '../Styles';
import ToastPage from './index';

export default {
  title: 'Project/Toast',
  component: ToastPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ProjectPage>
        <Story />
      </ProjectPage>
    ),
  ],
};

export const Default = () => <ToastPage />;

Default.storyName = 'Toast Page';
