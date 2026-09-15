import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import useApi from 'shared/hooks/api';
import { PageError, PageLoader, Breadcrumbs, CopyLinkButton, Button } from 'shared/components';

import Type from '../Board/IssueDetails/Type';
import Delete from '../Board/IssueDetails/Delete';
import Title from '../Board/IssueDetails/Title';
import Description from '../Board/IssueDetails/Description';
import Comments from '../Board/IssueDetails/Comments';
import Status from '../Board/IssueDetails/Status';
import AssigneesReporter from '../Board/IssueDetails/AssigneesReporter';
import Priority from '../Board/IssueDetails/Priority';
import EstimateTracking from '../Board/IssueDetails/EstimateTracking';
import Dates from '../Board/IssueDetails/Dates';
import { PageContainer, TopActions, TopActionsRight, Content, Left, Right } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const ProjectIssuePage = ({ project, fetchProject, updateLocalProjectIssues }) => {
  const { issueId } = useParams();
  const history = useHistory();

  const [{ data, error, setLocalData }, fetchIssue] = useApi.get(`/issues/${issueId}`);

  if (!data) return <PageLoader />;
  if (error) return <PageError />;

  const { issue } = data;

  const updateLocalIssueDetails = fields =>
    setLocalData(currentData => ({ issue: { ...currentData.issue, ...fields } }));

  const updateIssue = updatedFields => {
    api.optimisticUpdate(`/issues/${issueId}`, {
      updatedFields,
      currentFields: issue,
      setLocalData: fields => {
        updateLocalIssueDetails(fields);
        updateLocalProjectIssues(issue.id, fields);
      },
    });
  };

  const handleBackToBoard = () => {
    history.push('/project/board');
  };

  const handleDelete = () => {
    history.push('/project/board');
  };

  return (
    <Fragment>
      <Breadcrumbs items={['Projects', project.name, 'Board', issue.title]} />
      <PageContainer>
        <TopActions>
          <Type issue={issue} updateIssue={updateIssue} />
          <TopActionsRight>
            <CopyLinkButton variant="empty" />
            <Delete issue={issue} fetchProject={fetchProject} modalClose={handleDelete} />
            <Button icon="arrow-left" variant="empty" onClick={handleBackToBoard}>
              Back to Board
            </Button>
          </TopActionsRight>
        </TopActions>
        <Content>
          <Left>
            <Title issue={issue} updateIssue={updateIssue} />
            <Description issue={issue} updateIssue={updateIssue} />
            <Comments issue={issue} fetchIssue={fetchIssue} />
          </Left>
          <Right>
            <Status issue={issue} updateIssue={updateIssue} />
            <AssigneesReporter
              issue={issue}
              updateIssue={updateIssue}
              projectUsers={project.users}
            />
            <Priority issue={issue} updateIssue={updateIssue} />
            <EstimateTracking issue={issue} updateIssue={updateIssue} />
            <Dates issue={issue} />
          </Right>
        </Content>
      </PageContainer>
    </Fragment>
  );
};

ProjectIssuePage.propTypes = propTypes;

export default ProjectIssuePage;
