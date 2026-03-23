import React, { Fragment, useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import moment from 'moment';

import { IssueStatusCopy, IssueTypeCopy, IssuePriorityCopy, IssueType, IssueStatus, IssuePriority } from 'shared/constants/issues';
import { Avatar, IssueTypeIcon, IssuePriorityIcon, Icon } from 'shared/components';
import { formatDate } from 'shared/utils/dateTime';

import InlineIssueEditor from '../InlineIssueEditor';

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

export default {
  title: 'Project/Board/ListView',
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock users for the project
const mockUsers = [
  { id: 1, name: 'John Doe', avatarUrl: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Jane Smith', avatarUrl: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Bob Johnson', avatarUrl: 'https://i.pravatar.cc/150?u=3' },
];

// Mock issues for displaying in the list
const mockIssues = [
  {
    id: 101,
    title: 'Implement user authentication flow',
    type: IssueType.STORY,
    status: IssueStatus.INPROGRESS,
    priority: IssuePriority.HIGH,
    productArea: 'Auth',
    estimate: 8,
    startDate: moment().subtract(3, 'days').toISOString(),
    dueDate: moment().add(5, 'days').toISOString(),
    users: [mockUsers[0], mockUsers[1]],
    userIds: [1, 2],
    dependencies: [102],
    updatedAt: moment().subtract(1, 'day').toISOString(),
  },
  {
    id: 102,
    title: 'Fix login page CSS styling issues',
    type: IssueType.BUG,
    status: IssueStatus.SELECTED,
    priority: IssuePriority.HIGHEST,
    productArea: 'Frontend',
    estimate: 3,
    startDate: null,
    dueDate: moment().add(2, 'days').toISOString(),
    users: [mockUsers[2]],
    userIds: [3],
    dependencies: [],
    updatedAt: moment().subtract(2, 'hours').toISOString(),
  },
  {
    id: 103,
    title: 'Create database migration scripts',
    type: IssueType.TASK,
    status: IssueStatus.BACKLOG,
    priority: IssuePriority.MEDIUM,
    productArea: 'Backend',
    estimate: 5,
    startDate: moment().add(1, 'week').toISOString(),
    dueDate: moment().add(2, 'weeks').toISOString(),
    users: [mockUsers[0]],
    userIds: [1],
    dependencies: [],
    updatedAt: moment().subtract(3, 'days').toISOString(),
  },
  {
    id: 104,
    title: 'Write unit tests for payment module',
    type: IssueType.TASK,
    status: IssueStatus.DONE,
    priority: IssuePriority.LOW,
    productArea: 'Testing',
    estimate: 6,
    startDate: moment().subtract(2, 'weeks').toISOString(),
    dueDate: moment().subtract(1, 'week').toISOString(),
    users: [mockUsers[1], mockUsers[2]],
    userIds: [2, 3],
    dependencies: [101],
    updatedAt: moment().subtract(1, 'week').toISOString(),
  },
  {
    id: 105,
    title: 'Update API documentation',
    type: IssueType.TASK,
    status: IssueStatus.INPROGRESS,
    priority: IssuePriority.LOWEST,
    productArea: 'Documentation',
    estimate: 2,
    startDate: moment().subtract(1, 'day').toISOString(),
    dueDate: moment().add(3, 'days').toISOString(),
    users: [],
    userIds: [],
    dependencies: [],
    updatedAt: moment().subtract(5, 'hours').toISOString(),
  },
];

// Inline story component that avoids hooks that need React Router and API
const ListViewStory = ({ issues, users, showInlineEditor }) => {
  const [editingIssueId, setEditingIssueId] = useState(showInlineEditor ? issues[0]?.id : null);
  const [localIssues, setLocalIssues] = useState(issues);

  const handleRowDoubleClick = (event, issueId) => {
    event.stopPropagation();
    setEditingIssueId(issueId);
  };

  const handleExpandClick = (event, issueId) => {
    event.stopPropagation();
    // In Storybook, we just log instead of navigating
    console.log(`Expand clicked for issue ${issueId}`);
  };

  const updateIssue = (issueId, updatedFields) => {
    setLocalIssues(prev => 
      prev.map(issue => 
        issue.id === issueId ? { ...issue, ...updatedFields } : issue
      )
    );
    console.log(`Updated issue ${issueId}:`, updatedFields);
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

  const sortedIssues = [...localIssues].sort((a, b) => b.id - a.id);

  return (
    <ListViewContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell width="4%"></TableHeaderCell>
            <TableHeaderCell width="8%">Key</TableHeaderCell>
            <TableHeaderCell width="20%">Summary</TableHeaderCell>
            <TableHeaderCell width="9%">Product Area</TableHeaderCell>
            <TableHeaderCell width="8%">Type</TableHeaderCell>
            <TableHeaderCell width="8%">Priority</TableHeaderCell>
            <TableHeaderCell width="8%">Status</TableHeaderCell>
            <TableHeaderCell width="10%">Assignees</TableHeaderCell>
            <TableHeaderCell width="8%">Start Date</TableHeaderCell>
            <TableHeaderCell width="8%">Due Date</TableHeaderCell>
            <TableHeaderCell width="9%">Dependencies</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedIssues.map(issue => {
            const isEditing = editingIssueId === issue.id;
            
            if (isEditing) {
              return (
                <TableRow key={issue.id} isEditing>
                  <TableCell colSpan={11}>
                    <InlineIssueEditor
                      issue={issue}
                      projectUsers={users}
                      updateIssue={updatedFields => updateIssue(issue.id, updatedFields)}
                      onClose={() => setEditingIssueId(null)}
                    />
                  </TableCell>
                </TableRow>
              );
            }

            return (
              <TableRow
                key={issue.id}
                onDoubleClick={e => handleRowDoubleClick(e, issue.id)}
                clickable
              >
                <TableCell>
                  <Icon
                    type="chevron-right"
                    size={18}
                    onClick={e => handleExpandClick(e, issue.id)}
                    className="expand-icon"
                  />
                </TableCell>
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
                <TableCell>{getDependencyTitles(issue.dependencies, localIssues)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </ListViewContainer>
  );
};

export const Default = () => (
  <MemoryRouter>
    <ListViewStory issues={mockIssues} users={mockUsers} showInlineEditor={false} />
  </MemoryRouter>
);

export const WithInlineEditor = () => (
  <MemoryRouter>
    <ListViewStory issues={mockIssues} users={mockUsers} showInlineEditor={true} />
  </MemoryRouter>
);

export const EmptyList = () => (
  <MemoryRouter>
    <ListViewStory issues={[]} users={mockUsers} showInlineEditor={false} />
  </MemoryRouter>
);

export const SingleIssue = () => (
  <MemoryRouter>
    <ListViewStory issues={[mockIssues[0]]} users={mockUsers} showInlineEditor={false} />
  </MemoryRouter>
);
