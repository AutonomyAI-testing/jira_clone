import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';
import { intersection } from 'lodash';

import { IssueStatusCopy, IssueTypeCopy, IssuePriorityCopy } from 'shared/constants/issues';
import { Avatar, IssueTypeIcon, IssuePriorityIcon } from 'shared/components';
import { formatDate } from 'shared/utils/dateTime';

import {
  ListViewContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  IssueKey,
  IssueTitle,
  AssigneesContainer,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  currentUserId: PropTypes.number,
};

const defaultProps = {
  currentUserId: null,
};

const ListView = ({ project, filters, currentUserId }) => {
  const history = useHistory();
  const match = useRouteMatch();

  const filteredIssues = filterIssues(project.issues, filters, currentUserId);
  const sortedIssues = filteredIssues.sort((a, b) => b.id - a.id);

  const handleRowClick = issueId => {
    history.push(`${match.url}/issues/${issueId}`);
  };

  const getDependencyTitles = (dependencies, allIssues) => {
    if (!dependencies || dependencies.length === 0) return 'None';
    return dependencies
      .map(depId => {
        const issue = allIssues.find(i => i.id === depId);
        return issue ? issue.title : `#${depId}`;
      })
      .join(', ');
  };

  return (
    <ListViewContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell width="7%">Key</TableHeaderCell>
            <TableHeaderCell width="20%">Summary</TableHeaderCell>
            <TableHeaderCell width="10%">Product Area</TableHeaderCell>
            <TableHeaderCell width="8%">Type</TableHeaderCell>
            <TableHeaderCell width="8%">Priority</TableHeaderCell>
            <TableHeaderCell width="10%">Status</TableHeaderCell>
            <TableHeaderCell width="12%">Assignees</TableHeaderCell>
            <TableHeaderCell width="9%">Start Date</TableHeaderCell>
            <TableHeaderCell width="9%">Due Date</TableHeaderCell>
            <TableHeaderCell width="7%">Dependencies</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedIssues.map(issue => (
            <TableRow key={issue.id} onClick={() => handleRowClick(issue.id)} clickable>
              <TableCell>
                <IssueKey>{`TASK-${issue.id}`}</IssueKey>
              </TableCell>
              <TableCell>
                <IssueTitle>{issue.title}</IssueTitle>
              </TableCell>
              <TableCell>{issue.productArea || '-'}</TableCell>
              <TableCell>
                <IssueTypeIcon type={issue.type} size={16} />
                <span style={{ marginLeft: 6 }}>{IssueTypeCopy[issue.type]}</span>
              </TableCell>
              <TableCell>
                <IssuePriorityIcon priority={issue.priority} size={16} />
                <span style={{ marginLeft: 6 }}>{IssuePriorityCopy[issue.priority]}</span>
              </TableCell>
              <TableCell>{IssueStatusCopy[issue.status]}</TableCell>
              <TableCell>
                <AssigneesContainer>
                  {issue.users.map(user => (
                    <Avatar key={user.id} size={24} avatarUrl={user.avatarUrl} name={user.name} />
                  ))}
                </AssigneesContainer>
              </TableCell>
              <TableCell>{issue.startDate ? formatDate(issue.startDate) : '-'}</TableCell>
              <TableCell>{issue.dueDate ? formatDate(issue.dueDate) : '-'}</TableCell>
              <TableCell>{getDependencyTitles(issue.dependencies, project.issues)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ListViewContainer>
  );
};

const filterIssues = (projectIssues, filters, currentUserId) => {
  const { searchTerm, userIds, myOnly, recent } = filters;
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
  return issues;
};

ListView.propTypes = propTypes;
ListView.defaultProps = defaultProps;

export default ListView;
