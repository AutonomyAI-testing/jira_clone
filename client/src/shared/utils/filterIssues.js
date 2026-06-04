import moment from 'moment';
import { intersection } from 'lodash';

/**
 * Filter issues based on multiple criteria
 * @param {Array} projectIssues - Array of all issues
 * @param {Object} filters - Filter criteria object
 * @param {String} filters.searchTerm - Text to search in issue title
 * @param {Array} filters.userIds - User IDs to filter by assignees
 * @param {Boolean} filters.myOnly - Show only issues assigned to current user
 * @param {Boolean} filters.recent - Show only recently updated issues (last 3 days)
 * @param {Array} filters.statuses - Issue statuses to include (backlog, selected, inprogress, done)
 * @param {Array} filters.priorities - Issue priorities to include (1-5)
 * @param {Array} filters.types - Issue types to include (task, bug, story)
 * @param {Object} filters.dueDateRange - Date range filter { from, to }
 * @param {Number} currentUserId - Current user's ID for "myOnly" filter
 * @returns {Array} Filtered issues array
 */
export const filterIssues = (projectIssues, filters, currentUserId) => {
  const {
    searchTerm,
    userIds,
    myOnly,
    recent,
    statuses,
    priorities,
    types,
    dueDateRange,
  } = filters;

  let issues = projectIssues;

  // Apply search filter
  if (searchTerm) {
    issues = issues.filter(issue =>
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  // Apply assignee filter
  if (userIds.length > 0) {
    issues = issues.filter(issue => intersection(issue.userIds, userIds).length > 0);
  }

  // Apply "only my issues" filter
  if (myOnly && currentUserId) {
    issues = issues.filter(issue => issue.userIds.includes(currentUserId));
  }

  // Apply recently updated filter
  if (recent) {
    issues = issues.filter(issue =>
      moment(issue.updatedAt).isAfter(moment().subtract(3, 'days')),
    );
  }

  // Apply status filter
  if (statuses && statuses.length > 0) {
    issues = issues.filter(issue => statuses.includes(issue.status));
  }

  // Apply priority filter
  if (priorities && priorities.length > 0) {
    issues = issues.filter(issue => priorities.includes(issue.priority));
  }

  // Apply type filter
  if (types && types.length > 0) {
    issues = issues.filter(issue => types.includes(issue.type));
  }

  // Apply due date range filter
  if (dueDateRange && (dueDateRange.from || dueDateRange.to)) {
    issues = issues.filter(issue => {
      if (!issue.dueDate) return false;

      const issueDate = moment(issue.dueDate);

      if (dueDateRange.from && issueDate.isBefore(moment(dueDateRange.from))) {
        return false;
      }

      if (dueDateRange.to && issueDate.isAfter(moment(dueDateRange.to))) {
        return false;
      }

      return true;
    });
  }

  return issues;
};

export default filterIssues;
