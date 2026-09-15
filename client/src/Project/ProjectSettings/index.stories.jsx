import React from 'react';

import ProjectSettings from './index';

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'padded',
  },
};

const softwareProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description:
    '<p>Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.</p>',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
};

const marketingProject = {
  id: 2,
  name: 'Q3 Marketing Campaign',
  url: 'https://marketing.example.com/campaigns/q3-2024',
  description:
    '<p>Q3 2024 marketing campaign tracking board. Manage content, social media, and ad placements across all channels.</p>',
  category: 'marketing',
  createdAt: '2024-01-15T00:00:00.000Z',
  updatedAt: '2024-06-01T00:00:00.000Z',
};

const businessProject = {
  id: 3,
  name: 'Ops & Finance Dashboard',
  url: 'https://ops.example.com/dashboard',
  description:
    '<p>Operational and finance tracking for business KPIs, budgets, and quarterly reviews.</p>',
  category: 'business',
  createdAt: '2023-09-01T00:00:00.000Z',
  updatedAt: '2024-05-20T00:00:00.000Z',
};

const emptyProject = {
  id: 4,
  name: '',
  url: '',
  description: '',
  category: '',
};

const fetchProject = () => Promise.resolve();

// Wrapper component that applies consistent background and layout for all stories
const StoryWrapper = ({ children }) => (
  <div style={{ background: '#F4F5F7', minHeight: '100vh', padding: '40px 24px' }}>{children}</div>
);

export const SoftwareProject = () => (
  <StoryWrapper>
    <ProjectSettings project={softwareProject} fetchProject={fetchProject} />
  </StoryWrapper>
);

export const MarketingProject = () => (
  <StoryWrapper>
    <ProjectSettings project={marketingProject} fetchProject={fetchProject} />
  </StoryWrapper>
);

export const BusinessProject = () => (
  <StoryWrapper>
    <ProjectSettings project={businessProject} fetchProject={fetchProject} />
  </StoryWrapper>
);

export const EmptyForm = () => (
  <StoryWrapper>
    <ProjectSettings project={emptyProject} fetchProject={fetchProject} />
  </StoryWrapper>
);
