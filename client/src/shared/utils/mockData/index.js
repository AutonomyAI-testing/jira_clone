import { projectData } from './project';
import { currentUserData } from './currentUser';
import { issuesData, getIssueById } from './issues';
import { authenticationData } from './authentication';

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
  }

  // POST requests
  if (method === 'post') {
    if (url === '/authentication/guest') {
      return authenticationData;
    }
    if (url === '/authentication/login') {
      return { authToken: `mock-login-token-${Math.random().toString(36).substring(7)}` };
    }
    if (url.match(/^\/authentication\/social\/(google|facebook|github)$/)) {
      const provider = url.split('/')[3];
      return { authToken: `mock-${provider}-token-${Math.random().toString(36).substring(7)}` };
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
