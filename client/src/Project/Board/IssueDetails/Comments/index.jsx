import React from 'react';
import PropTypes from 'prop-types';

import { sortByNewest } from 'shared/utils/javascript';

import Create from './Create';
import Comment from './Comment';
import { Comments, Title } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  fetchIssue: PropTypes.func.isRequired,
  projectUsers: PropTypes.array.isRequired,
};

const ProjectBoardIssueDetailsComments = ({ issue, fetchIssue, projectUsers }) => (
  <Comments>
    <Title>Comments</Title>
    <Create issueId={issue.id} fetchIssue={fetchIssue} projectUsers={projectUsers} />

    {sortByNewest(issue.comments, 'createdAt').map(comment => (
      <Comment key={comment.id} comment={comment} fetchIssue={fetchIssue} projectUsers={projectUsers} />
    ))}
  </Comments>
);

ProjectBoardIssueDetailsComments.propTypes = propTypes;

export default ProjectBoardIssueDetailsComments;
