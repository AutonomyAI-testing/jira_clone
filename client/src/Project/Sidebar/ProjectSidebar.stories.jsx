import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import ProjectSidebar from './index';

// Sample project data used across all story variants.
// The category field drives the project badge color and text in the sidebar.
const sampleProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects.',
  category: 'software',
};

// Router decorator provides the URL context that useRouteMatch() requires.
// Initializes route to '/project/1/board' so the Kanban Board link appears active.
const withRouter = Story => (
  <MemoryRouter initialEntries={['/project/1/board']}>
    <Route path="/project/:id">
      <Story />
    </Route>
  </MemoryRouter>
);

export default {
  title: 'Project/ProjectSidebar',
  component: ProjectSidebar,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
};

// Software project (default category) with blue sidebar styling
export const Default = () => <ProjectSidebar project={sampleProject} />;

// Marketing project with teal sidebar styling
export const MarketingProject = () => (
  <ProjectSidebar
    project={{
      ...sampleProject,
      name: 'Brand Refresh 2024',
      category: 'marketing',
    }}
  />
);

// Business project with orange sidebar styling
export const BusinessProject = () => (
  <ProjectSidebar
    project={{
      ...sampleProject,
      name: 'Q3 Growth Initiative',
      category: 'business',
    }}
  />
);
