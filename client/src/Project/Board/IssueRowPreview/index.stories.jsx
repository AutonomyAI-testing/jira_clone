import React from 'react';
import IssueRowPreview from './index';

export default {
  title: 'Project/Board/IssueRowPreview',
  component: IssueRowPreview,
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  name: 'All Priority Levels',
  render: () => <IssueRowPreview />,
};
