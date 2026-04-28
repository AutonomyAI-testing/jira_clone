import { projectData } from './project';
import { currentUserData } from './currentUser';
import { issuesData, getIssueById } from './issues';
import { authenticationData } from './authentication';
import {
  sprintsData,
  getSprintById,
  createSprint,
  updateSprint,
  deleteSprint,
  updateSprintIssues,
} from './sprints';

// Mock data router - matches URL patterns to mock data
export const getMockData = (method, url, variables) => {
  // Simulate network delay
  return new Promise(resolve => {
    setTimeout(() => {
      const result = routeMockData(method, url, variables);
      resolve(result);
    }, 300); // 300ms delay to simulate network request
  });
};

const routeMockData = (method, url, variables) => {
  // GET requests
  if (method === 'get') {
    if (url === '/project') {
      return { project: projectData };
    }
    if (url === '/currentUser') {
      return { currentUser: currentUserData };
    }
    if (url === '/issues') {
      return { issues: issuesData.issues };
    }
    if (url.match(/^\/issues\/\d+$/)) {
      const issueId = url.split('/')[2];
      return { issue: getIssueById(issueId) };
    }
    if (url === '/sprints') {
      return { sprints: sprintsData.sprints };
    }
    if (url.match(/^\/sprints\/\d+$/)) {
      const sprintId = url.split('/')[2];
      return { sprint: getSprintById(sprintId) };
    }
  }

  // POST requests
  if (method === 'post') {
    if (url === '/authentication/guest') {
      return authenticationData;
    }
    if (url === '/issues') {
      // Return a mock newly created issue
      const newIssue = {
        id: Date.now(),
        ...variables,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return { issue: newIssue };
    }
    if (url === '/comments') {
      // Return a mock newly created comment
      const newComment = {
        id: Date.now(),
        ...variables,
        user: currentUserData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return { comment: newComment };
    }
    if (url === '/sprints') {
      const newSprint = createSprint(variables);
      return { sprint: newSprint };
    }
  }

  // PUT requests
  if (method === 'put') {
    if (url === '/project') {
      return { project: { ...projectData, ...variables } };
    }
    if (url.match(/^\/issues\/\d+$/)) {
      const issueId = url.split('/')[2];
      return { issue: { ...getIssueById(issueId), ...variables } };
    }
    if (url.match(/^\/comments\/\d+$/)) {
      const updatedComment = {
        id: parseInt(url.split('/')[2]),
        ...variables,
        updatedAt: new Date().toISOString(),
      };
      return { comment: updatedComment };
    }
    if (url.match(/^\/sprints\/\d+$/)) {
      const sprintId = url.split('/')[2];
      const updatedSprint = updateSprint(sprintId, variables);
      return { sprint: updatedSprint };
    }
    if (url.match(/^\/sprints\/\d+\/issues$/)) {
      const sprintId = url.split('/')[2];
      const updatedSprint = updateSprintIssues(sprintId, variables.issueIds);
      return { sprint: updatedSprint };
    }
  }

  // PATCH requests (similar to PUT)
  if (method === 'patch') {
    if (url.match(/^\/issues\/\d+$/)) {
      const issueId = url.split('/')[2];
      return { issue: { ...getIssueById(issueId), ...variables } };
    }
  }

  // DELETE requests
  if (method === 'delete') {
    if (url.match(/^\/issues\/\d+$/)) {
      return { success: true, message: 'Issue deleted successfully' };
    }
    if (url.match(/^\/comments\/\d+$/)) {
      return { success: true, message: 'Comment deleted successfully' };
    }
    if (url.match(/^\/sprints\/\d+$/)) {
      const sprintId = url.split('/')[2];
      deleteSprint(sprintId);
      return { success: true, message: 'Sprint deleted successfully' };
    }
  }

  // Default fallback
  return {
    message: 'Mock data not available for this endpoint',
    method,
    url,
    variables,
  };
};

export default getMockData;
