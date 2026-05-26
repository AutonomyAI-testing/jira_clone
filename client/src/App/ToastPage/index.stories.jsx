import React from 'react';
import ToastPage from './index';

export default {
  title: 'App/ToastPage',
  component: ToastPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const AllToastSections = () => <ToastPage />;
AllToastSections.storyName = 'All Toast Sections';

export const Default = () => <ToastPage />;
