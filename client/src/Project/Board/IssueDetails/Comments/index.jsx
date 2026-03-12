import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { sortByNewest } from 'shared/utils/javascript';
import Select from 'shared/components/Select';

import Create from './Create';
import Comment from './Comment';
import { Comments, Title, FilterContainer, NoComments, FilterSelect } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  fetchIssue: PropTypes.func.isRequired,
};

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'oldest', label: 'Oldest First' },
];

const ProjectBoardIssueDetailsComments = ({ issue, fetchIssue }) => {
  const [sortBy, setSortBy] = useState('recent');
  const [filterByUser, setFilterByUser] = useState('all');
  const allComments = sortByNewest(issue.comments, 'createdAt');
  
  // Get unique users who have commented
  const getCommentUsers = () => {
    const uniqueUsers = {};
    issue.comments.forEach(comment => {
      if (comment.user && !uniqueUsers[comment.user.id]) {
        uniqueUsers[comment.user.id] = comment.user;
      }
    });
    return Object.values(uniqueUsers);
  };
  
  const commentUsers = getCommentUsers();
  
  // Build filter options
  const filterOptions = [{ value: 'all', label: 'All Comments' }];
  commentUsers.forEach(user => {
    filterOptions.push({
      value: `user-${user.id}`,
      label: `${user.name}'s Comments`,
    });
  });
  
  const getFilteredAndSortedComments = () => {
    // First filter by user
    let filtered = allComments;
    if (filterByUser !== 'all') {
      const userId = parseInt(filterByUser.split('-')[1]);
      filtered = allComments.filter(comment => comment.user && comment.user.id === userId);
    }
    
    // Then sort
    if (sortBy === 'oldest') {
      return filtered.reverse();
    }
    return filtered;
  };

  const filteredComments = getFilteredAndSortedComments();
  const showFilters = issue.comments.length > 0;

  return (
    <Comments>
      <Title>Comments</Title>
      <Create issueId={issue.id} fetchIssue={fetchIssue} />

      {showFilters && (
        <FilterContainer>
          <FilterSelect>
            <Select
              name="comment-filter"
              options={filterOptions}
              value={filterByUser}
              onChange={setFilterByUser}
              variant="normal"
              placeholder="Filter by user"
            />
          </FilterSelect>
          <FilterSelect>
            <Select
              name="comment-sort"
              options={SORT_OPTIONS}
              value={sortBy}
              onChange={setSortBy}
              variant="normal"
              placeholder="Sort order"
            />
          </FilterSelect>
        </FilterContainer>
      )}

      {filteredComments.length === 0 ? (
        <NoComments>No comments yet</NoComments>
      ) : (
        <Fragment>
          {filteredComments.map(comment => (
            <Comment key={comment.id} comment={comment} fetchIssue={fetchIssue} />
          ))}
        </Fragment>
      )}
    </Comments>
  );
};

ProjectBoardIssueDetailsComments.propTypes = propTypes;

export default ProjectBoardIssueDetailsComments;
