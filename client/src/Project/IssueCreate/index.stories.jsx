import React from 'react';

import { projectData } from 'shared/utils/mockData/project';
import IssueCreate from './index';
import NormalizeStyles from '../../App/NormalizeStyles';
import BaseStyles from '../../App/BaseStyles';
import Toast from '../../App/Toast';

export default {
  title: 'Project/IssueCreate',
  component: IssueCreate,
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
    onCreate: noop,
    modalClose: noop,
  },
};

export const WithSubmitting = {
  name: 'With Submitting State',
  args: {
    project: projectData,
    fetchProject: noop,
    onCreate: noop,
    modalClose: noop,
  },
};
