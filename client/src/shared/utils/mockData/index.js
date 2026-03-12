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
        replies: [],
      };
      return { comment: newComment };
    }
    // Handle POST /comments/:commentId/replies
    if (url.match(/^\/comments\/\d+\/replies$/)) {
      const commentId = parseInt(url.split('/')[2]);
      const newReply = {
        id: Date.now(),
        ...variables,
        user: currentUserData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      // Find the issue that contains this comment and update its replies
      for (const issue of issuesData.issues) {
        const comment = issue.comments.find(c => c.id === commentId);
        if (comment) {
          if (!comment.replies) {
            comment.replies = [];
          }
          comment.replies.push(newReply);
          break;
        }
      }
      
      return { reply: newReply };
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
    // Handle PUT /comments/:commentId/replies/:replyId
    if (url.match(/^\/comments\/\d+\/replies\/\d+$/)) {
      const commentId = parseInt(url.split('/')[2]);
      const replyId = parseInt(url.split('/')[4]);
      const updatedReply = {
        id: replyId,
        ...variables,
        updatedAt: new Date().toISOString(),
      };
      
      // Find the issue that contains this comment and update the reply
      for (const issue of issuesData.issues) {
        const comment = issue.comments.find(c => c.id === commentId);
        if (comment && comment.replies) {
          const replyIndex = comment.replies.findIndex(r => r.id === replyId);
          if (replyIndex !== -1) {
            comment.replies[replyIndex] = { ...comment.replies[replyIndex], ...updatedReply };
            break;
          }
        }
      }
      
      return { reply: updatedReply };
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
    // Handle DELETE /comments/:commentId/replies/:replyId
    if (url.match(/^\/comments\/\d+\/replies\/\d+$/)) {
      const commentId = parseInt(url.split('/')[2]);
      const replyId = parseInt(url.split('/')[4]);
      
      // Find the issue that contains this comment and delete the reply
      for (const issue of issuesData.issues) {
        const comment = issue.comments.find(c => c.id === commentId);
        if (comment && comment.replies) {
          const replyIndex = comment.replies.findIndex(r => r.id === replyId);
          if (replyIndex !== -1) {
            comment.replies.splice(replyIndex, 1);
            break;
          }
        }
      }
      
      return { success: true, message: 'Reply deleted successfully' };
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
