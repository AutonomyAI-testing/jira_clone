import React, { useState, Fragment } from 'react';

import { InputDebounced, Breadcrumbs } from 'shared/components';
import { projectData } from 'shared/utils/mockData/project';
import { activitiesData } from 'shared/utils/mockData/activities';

import ActivityFilters from './ActivityFilters';
import ActivityList from './ActivityList';
import { Page, Header, HeaderContent, Title, FiltersBar } from './Styles';

// Create an inline story component that mimics ProjectActivity but with mock data
// instead of using the useApi hook which makes actual API calls
const ProjectActivityStory = ({ project, activities }) => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [userFilter, setUserFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Apply filters
  let filteredActivities = activities;

  // Type filter
  if (typeFilter !== 'all') {
    const typeMap = {
      status: ['status_changed'],
      comments: ['comment_added'],
      assignments: ['assignee_added', 'assignee_removed'],
      created: ['issue_created'],
    };
    filteredActivities = filteredActivities.filter(a => typeMap[typeFilter]?.includes(a.type));
  }

  // User filter
  if (userFilter.length > 0) {
    filteredActivities = filteredActivities.filter(a => userFilter.includes(a.userId));
  }

  // Search filter
  if (searchTerm) {
    const lowerSearch = searchTerm.toLowerCase();
    filteredActivities = filteredActivities.filter(
      a =>
        a.issueTitle.toLowerCase().includes(lowerSearch) ||
        a.user.name.toLowerCase().includes(lowerSearch) ||
        a.data.commentBody?.toLowerCase().includes(lowerSearch),
    );
  }

  return (
    <Page>
      <Header>
        <HeaderContent>
          <Breadcrumbs items={['Projects', project.name, 'Activity']} />
          <Title>Activity</Title>
        </HeaderContent>
      </Header>

      <FiltersBar>
        <ActivityFilters
          typeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
          userFilter={userFilter}
          onUserFilterChange={setUserFilter}
          projectUsers={project.users}
        />
        <InputDebounced
          placeholder="Search activity..."
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </FiltersBar>

      <ActivityList activities={filteredActivities} />
    </Page>
  );
};

export default {
  title: 'Project/Activity',
  component: ProjectActivityStory,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    project: projectData,
    activities: activitiesData.activities,
  },
};

export const FilteredByStatus = {
  args: {
    project: projectData,
    activities: activitiesData.activities.filter(a => a.type === 'status_changed'),
  },
  render: (args) => (
    <ProjectActivityStory project={args.project} activities={args.activities} />
  ),
};

export const FilteredByComments = {
  args: {
    project: projectData,
    activities: activitiesData.activities.filter(a => a.type === 'comment_added'),
  },
  render: (args) => (
    <ProjectActivityStory project={args.project} activities={args.activities} />
  ),
};

export const EmptyState = {
  args: {
    project: projectData,
    activities: [],
  },
  render: (args) => (
    <ProjectActivityStory project={args.project} activities={args.activities} />
  ),
};
