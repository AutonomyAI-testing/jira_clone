import React from 'react';

import { projectData } from 'shared/utils/mockData/project';
import ProjectSettings from './index';
import NormalizeStyles from '../../App/NormalizeStyles';
import BaseStyles from '../../App/BaseStyles';
import Toast from '../../App/Toast';

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <React.Fragment>
        <NormalizeStyles />
        <BaseStyles />
        <Toast />
        <Story />
      </React.Fragment>
    ),
  ],
};

const noop = () => {};

export const Default = {
  args: {
    project: projectData,
    fetchProject: noop,
  },
};
