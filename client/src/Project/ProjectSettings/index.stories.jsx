import React from 'react';

import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';

import ProjectSettings from './index';

// Test data fixtures covering different project scenarios and edge cases.
// Each variant tests a different aspect of the ProjectSettings form.

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description:
    'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  users: [
    {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
    },
    {
      id: 2,
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
    },
  ],
};

const marketingProject = {
  id: 2,
  name: 'Brand Refresh Campaign',
  url: 'https://www.example.com/marketing',
  description: 'Revamp the brand identity across all marketing channels for Q3 launch.',
  category: 'marketing',
  createdAt: '2020-07-01T00:00:00.000Z',
  updatedAt: '2020-07-15T00:00:00.000Z',
  users: [],
};

const emptyProject = {
  id: 3,
  name: '',
  url: '',
  description: '',
  category: '',
  createdAt: '2020-08-01T00:00:00.000Z',
  updatedAt: '2020-08-01T00:00:00.000Z',
  users: [],
};

// StoryWrapper: Provides global styles (NormalizeStyles, BaseStyles) and layout context.
// This mirrors the production App structure where these styles are applied globally.
const StoryWrapper = ({ children }) => (
  <>
    <NormalizeStyles />
    <BaseStyles />
    <div
      style={{
        background: '#fff',
        minHeight: '100vh',
        padding: '40px 60px',
      }}
    >
      {children}
    </div>
  </>
);

// Story variants: Each covers a different scenario
// - Default: Complete form with all fields populated (software project)
// - MarketingProject: Marketing category with empty users list
// - EmptyForm: All fields blank (edge case testing)
// - BusinessProject: Business category variant
// - LongProjectName: Tests handling of very long text in name and description fields

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <StoryWrapper>
    <ProjectSettings project={mockProject} fetchProject={() => {}} />
  </StoryWrapper>
);
Default.storyName = 'Default (Software Project)';

export const MarketingProject = () => (
  <StoryWrapper>
    <ProjectSettings project={marketingProject} fetchProject={() => {}} />
  </StoryWrapper>
);
MarketingProject.storyName = 'Marketing Project';

export const EmptyForm = () => (
  <StoryWrapper>
    <ProjectSettings project={emptyProject} fetchProject={() => {}} />
  </StoryWrapper>
);
EmptyForm.storyName = 'Empty Form (All Fields Blank)';

export const BusinessProject = () => (
  <StoryWrapper>
    <ProjectSettings
      project={{
        id: 4,
        name: 'Q4 Business Strategy',
        url: 'https://internal.company.io/strategy',
        description:
          'Define and track the key business objectives and initiatives for Q4 fiscal year. Align all departments on priorities.',
        category: 'business',
        createdAt: '2020-09-01T00:00:00.000Z',
        updatedAt: '2020-09-20T00:00:00.000Z',
        users: [],
      }}
      fetchProject={() => {}}
    />
  </StoryWrapper>
);
BusinessProject.storyName = 'Business Project';

export const LongProjectName = () => (
  <StoryWrapper>
    <ProjectSettings
      project={{
        id: 5,
        name: 'Enterprise Resource Planning System Modernization 2024 - Phase One',
        url: 'https://enterprise.internal/erp-system-v2',
        description:
          'A comprehensive modernization initiative to replace the legacy ERP system with a cloud-native solution. Phase one focuses on core modules: finance, HR, and procurement. The goal is to reduce operational overhead by 40% and improve real-time reporting capabilities across all business units.',
        category: 'software',
        createdAt: '2020-10-01T00:00:00.000Z',
        updatedAt: '2020-10-15T00:00:00.000Z',
        users: [],
      }}
      fetchProject={() => {}}
    />
  </StoryWrapper>
);
LongProjectName.storyName = 'Long Project Name & Description';
