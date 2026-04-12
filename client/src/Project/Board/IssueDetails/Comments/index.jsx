import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { sortByNewest } from 'shared/utils/javascript';
import { Select } from 'shared/components';

import Create from './Create';
import Comment from './Comment';
import { Comments, Title, Header, Filters, FilterLabel, FilterSelect, EmptyState, EmptyIcon, EmptyMessage, EmptyHint } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  fetchIssue: PropTypes.func.isRequired,
  projectUsers: PropTypes.array.isRequired,
};

const ProjectBoardIssueDetailsComments = ({ issue, fetchIssue, projectUsers }) => {
  const [timeFilter, setTimeFilter] = useState('all');
  const [nameFilter, setNameFilter] = useState('all');

  // Time filter options
  const timeOptions = [
    { value: 'all', label: 'All time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This week' },
    { value: 'month', label: 'This month' },
  ];

  // Name filter options from project users
  const nameOptions = [
    { value: 'all', label: 'All users' },
    ...projectUsers.map(user => ({
      value: user.id,
      label: user.name,
    })),
  ];

  // Filter comments based on selected filters
  const filteredComments = useMemo(() => {
    let filtered = sortByNewest(issue.comments, 'createdAt');

    // Apply time filter
    if (timeFilter !== 'all') {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      const monthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

      filtered = filtered.filter(comment => {
        const commentDate = new Date(comment.createdAt);
        if (timeFilter === 'today') {
          return commentDate >= today;
        }
        if (timeFilter === 'week') {
          return commentDate >= weekAgo;
        }
        if (timeFilter === 'month') {
          return commentDate >= monthAgo;
        }
        return true;
      });
    }

    // Apply name filter
    if (nameFilter !== 'all') {
      filtered = filtered.filter(comment => comment.user.id === nameFilter);
    }

    return filtered;
  }, [issue.comments, timeFilter, nameFilter]);

  return (
    <Comments>
      <Header>
        <Title>Comments</Title>
        <Filters>
          <FilterLabel>Filter by:</FilterLabel>
          <FilterSelect>
            <Select
              variant="normal"
              placeholder="Time"
              value={timeFilter}
              options={timeOptions}
              onChange={setTimeFilter}
            />
          </FilterSelect>
          <FilterSelect>
            <Select
              variant="normal"
              placeholder="User"
              value={nameFilter}
              options={nameOptions}
              onChange={setNameFilter}
            />
          </FilterSelect>
        </Filters>
      </Header>
      <Create issueId={issue.id} fetchIssue={fetchIssue} projectUsers={projectUsers} />

      {filteredComments.length === 0 && issue.comments.length === 0 && (
        <EmptyState>
          <EmptyIcon><span role="img" aria-label="speech balloon">💬</span></EmptyIcon>
          <EmptyMessage>No comments yet</EmptyMessage>
          <EmptyHint>Be the first to share your thoughts!</EmptyHint>
        </EmptyState>
      )}

      {filteredComments.length === 0 && issue.comments.length > 0 && (
        <EmptyState>
          <EmptyIcon><span role="img" aria-label="magnifying glass">🔍</span></EmptyIcon>
          <EmptyMessage>No comments match your filters</EmptyMessage>
          <EmptyHint>Try adjusting your filter criteria</EmptyHint>
        </EmptyState>
      )}

      {filteredComments.map(comment => (
        <Comment key={comment.id} comment={comment} fetchIssue={fetchIssue} projectUsers={projectUsers} />
      ))}
    </Comments>
  );
};

ProjectBoardIssueDetailsComments.propTypes = propTypes;

export default ProjectBoardIssueDetailsComments;
