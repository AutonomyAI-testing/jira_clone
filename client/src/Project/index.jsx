import React from 'react';
import { Route, Redirect, useRouteMatch, useHistory } from 'react-router-dom';

import useApi from 'shared/hooks/api';
import { updateArrayItemById } from 'shared/utils/javascript';
import { createQueryParamModalHelpers } from 'shared/utils/queryParamModal';
import { PageLoader, PageError, Modal } from 'shared/components';

import NavbarLeft from './NavbarLeft';
import Sidebar from './Sidebar';
import Board from './Board';
import IssueSearch from './IssueSearch';
import IssueCreate from './IssueCreate';
import IssuePage from './IssuePage';
import ProjectSettings from './ProjectSettings';
import { ProjectPage } from './Styles';

const Project = () => {
  const match = useRouteMatch();
  const history = useHistory();

  const issueSearchModalHelpers = createQueryParamModalHelpers('issue-search');

  const [{ data, error, setLocalData }, fetchProject] = useApi.get('/project');

  if (!data) return <PageLoader />;
  if (error) return <PageError />;

  const { project } = data;

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setLocalData(currentData => ({
      project: {
        ...currentData.project,
        issues: updateArrayItemById(currentData.project.issues, issueId, updatedFields),
      },
    }));
  };

  return (
    <ProjectPage>
      <NavbarLeft
        issueSearchModalOpen={issueSearchModalHelpers.open}
        onCreateIssue={() => history.push(`${match.url}/issues/new`)}
      />

      <Sidebar project={project} />

      {issueSearchModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-search"
          variant="aside"
          width={600}
          onClose={issueSearchModalHelpers.close}
          renderContent={() => <IssueSearch project={project} />}
        />
      )}

      <Route
        path={`${match.path}/issues/new`}
        render={() => (
          <IssueCreate
            project={project}
            fetchProject={fetchProject}
          />
        )}
      />

      <Route
        path={`${match.path}/issues/:issueId`}
        render={() => (
          <IssuePage
            project={project}
            fetchProject={fetchProject}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
      />

      <Route
        path={`${match.path}/board`}
        render={() => (
          <Board
            project={project}
            fetchProject={fetchProject}
            updateLocalProjectIssues={updateLocalProjectIssues}
          />
        )}
      />

      <Route
        path={`${match.path}/settings`}
        render={() => <ProjectSettings project={project} fetchProject={fetchProject} />}
      />

      {match.isExact && <Redirect to={`${match.url}/board`} />}
    </ProjectPage>
  );
};

export default Project;
