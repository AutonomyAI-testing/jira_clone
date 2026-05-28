import React from 'react'; // required for classic JSX runtime

import ProjectSettings from './index';
import GeneralTab from './GeneralTab';
import MembersTab from './MembersTab';
import DangerZone from './DangerZone';

// Mock project data matching the project shape
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
      email: 'gaben@jira.guest',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 2,
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
      email: 'pickle.rick@jira.guest',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
    {
      id: 3,
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
      email: 'baby.yoda@jira.guest',
      createdAt: '2020-06-01T00:00:00.000Z',
    },
  ],
};

const mockFetchProject = () => Promise.resolve();

// ─── ProjectSettings (full tabbed page) ───────────────────────────────────────

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
  name: 'General Tab (Default)',
};

export const MembersTabView = {
  render: () => (
    <div style={{ maxWidth: 860 }}>
      <MembersTab project={mockProject} />
    </div>
  ),
  name: 'Members Tab',
};

// ─── GeneralTab ───────────────────────────────────────────────────────────────

export const GeneralTabStory = {
  render: () => (
    <div style={{ maxWidth: 860, padding: '24px' }}>
      <GeneralTab project={mockProject} fetchProject={mockFetchProject} />
    </div>
  ),
  name: 'GeneralTab',
};

// ─── MembersTab ───────────────────────────────────────────────────────────────

export const MembersTabStory = {
  render: () => (
    <div style={{ maxWidth: 860, padding: '24px' }}>
      <MembersTab project={mockProject} />
    </div>
  ),
  name: 'MembersTab',
};

export const MembersTabEmpty = {
  render: () => (
    <div style={{ maxWidth: 860, padding: '24px' }}>
      <MembersTab project={{ ...mockProject, users: [] }} />
    </div>
  ),
  name: 'MembersTab (Empty)',
};

// ─── DangerZone ───────────────────────────────────────────────────────────────

export const DangerZoneStory = {
  render: () => (
    <div style={{ maxWidth: 860, padding: '24px' }}>
      <DangerZone project={mockProject} />
    </div>
  ),
  name: 'DangerZone',
};
