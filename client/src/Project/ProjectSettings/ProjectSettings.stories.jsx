import React from 'react';

import ProjectSettings from './index';

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'fullscreen',
  },
};

const mockProject = {
  id: 'project-1',
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  category: 'software',
  description:
    'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
  createdAt: '2020-06-01T00:00:00.000Z',
  updatedAt: '2020-06-01T00:00:00.000Z',
  members: [
    {
      id: 'member-1',
      role: 'Owner',
      user: {
        id: '1',
        name: 'Lord Gaben',
        email: 'gaben@jira.guest',
        avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
      },
    },
    {
      id: 'member-2',
      role: 'Member',
      user: {
        id: '2',
        name: 'Pickle Rick',
        email: 'pickle.rick@jira.guest',
        avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
      },
    },
    {
      id: 'member-3',
      role: 'Admin',
      user: {
        id: '3',
        name: 'Baby Yoda',
        email: 'baby.yoda@jira.guest',
        avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
      },
    },
  ],
};

const fetchProject = () => Promise.resolve();

// General Settings section (default starting state)
export const GeneralSettingsView = () => (
  <ProjectSettings project={mockProject} fetchProject={fetchProject} />
);
GeneralSettingsView.storyName = 'General Settings';

// Members — rendered by clicking sidebar programmatically via a wrapper
export const MembersView = () => (
  <ProjectSettings project={mockProject} fetchProject={fetchProject} />
);
MembersView.storyName = 'Members';
MembersView.decorators = [
  Story => {
    // Use a ref-based approach to click the Members nav item after mount
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (ref.current) {
        // Find the Members nav item and click it
        const navItems = ref.current.querySelectorAll('[role="button"]');
        if (navItems && navItems[1]) {
          navItems[1].click();
        }
      }
    }, []);
    return (
      <div ref={ref}>
        <Story />
      </div>
    );
  },
];

// Danger Zone — click the third nav item
export const DangerZoneView = () => (
  <ProjectSettings project={mockProject} fetchProject={fetchProject} />
);
DangerZoneView.storyName = 'Danger Zone';
DangerZoneView.decorators = [
  Story => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (ref.current) {
        const navItems = ref.current.querySelectorAll('[role="button"]');
        if (navItems && navItems[2]) {
          navItems[2].click();
        }
      }
    }, []);
    return (
      <div ref={ref}>
        <Story />
      </div>
    );
  },
];
