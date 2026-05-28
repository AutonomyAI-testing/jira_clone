import React from 'react';

import ProjectSettings from './index';
import GeneralTab from './GeneralTab';
import MembersTab from './MembersTab';
import DangerZone from './DangerZone';

// Mock project data for stories
const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects in Jira.',
  category: 'software',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2021-03-15T00:00:00.000Z',
  users: [
    {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
      email: 'gaben@jira.guest',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 2,
      name: 'Diana Lauv',
      avatarUrl: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
      email: 'diana@jira.guest',
      createdAt: '2020-07-14T00:00:00.000Z',
    },
    {
      id: 3,
      name: 'Pickle Rick',
      avatarUrl: null,
      email: 'rick@jira.guest',
      createdAt: '2020-09-22T00:00:00.000Z',
    },
  ],
};

const mockFetchProject = async () => {
  // Mock fetch - do nothing
};

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  render: () => (
    <ProjectSettings project={mockProject} fetchProject={mockFetchProject} />
  ),
};

export const MembersTabStory = {
  render: () => (
    <div style={{ maxWidth: 860, padding: '24px' }}>
      <MembersTab project={mockProject} />
    </div>
  ),
  name: 'Members Tab',
};

export const MembersTabEmpty = {
  render: () => (
    <div style={{ maxWidth: 860, padding: '24px' }}>
      <MembersTab project={{ ...mockProject, users: [] }} />
    </div>
  ),
  name: 'Members Tab (Empty)',
};

export const GeneralTabStory = {
  render: () => (
    <div style={{ maxWidth: 860, padding: '24px' }}>
      <GeneralTab project={mockProject} fetchProject={mockFetchProject} />
    </div>
  ),
  name: 'General Tab Standalone',
};

export const DangerZoneStory = {
  render: () => (
    <div style={{ maxWidth: 860, padding: '24px' }}>
      <DangerZone project={mockProject} />
    </div>
  ),
  name: 'Danger Zone',
};
