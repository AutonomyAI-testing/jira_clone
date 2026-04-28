import { projectData } from './project';
import { currentUserData } from './currentUser';
import { issuesData, getIssueById } from './issues';
import { authenticationData } from './authentication';
import { activitiesData } from './activities';

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
    if (url === '/activities') {
      // Support filtering by issueId
      const issueId = variables && variables.issueId;
      if (issueId) {
        const filtered = activitiesData.activities.filter(
          a => a.issueId === parseInt(issueId, 10),
        );
        return { activities: filtered };
      }
      // Return all activities sorted newest first
      return { activities: [...activitiesData.activities].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) };
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
      
      // Auto-create activity event for comment
      if (variables.issueId) {
        const issue = getIssueById(variables.issueId);
        activitiesData.activities.unshift({
          id: Date.now() + Math.random(),
          type: 'comment_added',
          issueId: variables.issueId,
          issueTitle: issue ? issue.title : 'Unknown Issue',
          userId: currentUserData.id,
          user: { id: currentUserData.id, name: currentUserData.name, avatarUrl: currentUserData.avatarUrl },
          data: {
            commentBody: variables.body ? variables.body.substring(0, 100) : '',
          },
          isRead: false,
          createdAt: new Date().toISOString(),
        });
      }
      
      return { comment: newComment };
    }
  }

  // PUT requests
  if (method === 'put') {
    if (url === '/project') {
      return { project: { ...projectData, ...variables } };
    }
    if (url === '/activities/read') {
      // Mark all activities as read
      activitiesData.activities.forEach(a => {
        a.isRead = true;
      });
      return { success: true };
    }
    if (url.match(/^\/activities\/\d+\/read$/)) {
      // Mark single activity as read
      const activityId = parseInt(url.split('/')[2]);
      const activity = activitiesData.activities.find(a => a.id === activityId);
      if (activity) {
        activity.isRead = true;
      }
      return { success: true };
    }
    if (url.match(/^\/issues\/\d+$/)) {
      const issueId = url.split('/')[2];
      const oldIssue = getIssueById(issueId);
      const newIssue = { ...oldIssue, ...variables };
      
      // Auto-create activity events for issue changes
      const userId = currentUserData.id;
      const user = { id: userId, name: currentUserData.name, avatarUrl: currentUserData.avatarUrl };
      
      if (variables.status && variables.status !== oldIssue.status) {
        activitiesData.activities.unshift({
          id: Date.now() + Math.random(),
          type: 'status_changed',
          issueId: parseInt(issueId, 10),
          issueTitle: oldIssue.title,
          userId,
          user,
          data: {
            fromStatus: oldIssue.status,
            toStatus: variables.status,
          },
          isRead: false,
          createdAt: new Date().toISOString(),
        });
      }
      
      if (variables.priority && variables.priority !== oldIssue.priority) {
        activitiesData.activities.unshift({
          id: Date.now() + Math.random() + 0.1,
          type: 'priority_changed',
          issueId: parseInt(issueId, 10),
          issueTitle: oldIssue.title,
          userId,
          user,
          data: {
            fromPriority: oldIssue.priority,
            toPriority: variables.priority,
          },
          isRead: false,
          createdAt: new Date().toISOString(),
        });
      }
      
      if (variables.estimate !== undefined && variables.estimate !== oldIssue.estimate) {
        activitiesData.activities.unshift({
          id: Date.now() + Math.random() + 0.2,
          type: 'estimate_changed',
          issueId: parseInt(issueId, 10),
          issueTitle: oldIssue.title,
          userId,
          user,
          data: {
            oldEstimate: oldIssue.estimate,
            newEstimate: variables.estimate,
          },
          isRead: false,
          createdAt: new Date().toISOString(),
        });
      }
      
      return { issue: newIssue };
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
