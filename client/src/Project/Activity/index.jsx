import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useApi from 'shared/hooks/api';
import { Breadcrumbs, InputDebounced } from 'shared/components';

import ActivityFilters from './ActivityFilters';
import ActivityList from './ActivityList';
import { Page, Header, HeaderContent, Title, FiltersBar } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectActivity = ({ project }) => {
  const [{ data }] = useApi.get('/activities');
  const [typeFilter, setTypeFilter] = useState('all');
  const [userFilter, setUserFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const activities = data?.activities || [];

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

ProjectActivity.propTypes = propTypes;

export default ProjectActivity;
