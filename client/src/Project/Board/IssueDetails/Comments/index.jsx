import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { sortByNewest } from 'shared/utils/javascript';
import Select from 'shared/components/Select';

import Create from './Create';
import Comment from './Comment';
import { Comments, Title, FilterContainer, NoComments } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  fetchIssue: PropTypes.func.isRequired,
};

const FILTER_OPTIONS = [
  { value: 'all', label: 'All Comments' },
  { value: 'recent', label: 'Most Recent' },
  { value: 'oldest', label: 'Oldest First' },
];

const ProjectBoardIssueDetailsComments = ({ issue, fetchIssue }) => {
  const [filterBy, setFilterBy] = useState('all');
  const allComments = sortByNewest(issue.comments, 'createdAt');
  
  const getFilteredComments = () => {
    if (filterBy === 'all') {
      return allComments;
    }
    if (filterBy === 'recent') {
      return allComments;
    }
    if (filterBy === 'oldest') {
      return allComments.reverse();
    }
    return allComments;
  };

  const filteredComments = getFilteredComments();
  const showFilters = issue.comments.length > 0;

  return (
    <Comments>
      <Title>Comments</Title>
      <Create issueId={issue.id} fetchIssue={fetchIssue} />

      {showFilters && (
        <FilterContainer>
          <Select
            name="comment-filter"
            options={FILTER_OPTIONS}
            value={filterBy}
            onChange={setFilterBy}
            variant="empty"
          />
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
