import moment from 'moment';
import { intersection } from 'lodash';

// Shared issue filtering logic used by the Kanban, List and Gantt board views,
// so the same set of filters always produces the same result set regardless
// of which view is active.
export const filterIssues = (projectIssues, filters, currentUserId) => {
  const { searchTerm, userIds, myOnly, recent, labels } = filters;
  let issues = projectIssues;

  if (searchTerm) {
    issues = issues.filter(issue => issue.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  if (userIds.length > 0) {
    issues = issues.filter(issue => intersection(issue.userIds, userIds).length > 0);
  }
  if (myOnly && currentUserId) {
    issues = issues.filter(issue => issue.userIds.includes(currentUserId));
  }
  if (recent) {
    issues = issues.filter(issue => moment(issue.updatedAt).isAfter(moment().subtract(3, 'days')));
  }
  if (labels && labels.length > 0) {
    issues = issues.filter(issue => intersection(issue.labels || [], labels).length > 0);
  }
  return issues;
};

export default filterIssues;
