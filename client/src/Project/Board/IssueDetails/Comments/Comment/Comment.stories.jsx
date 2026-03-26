import React from 'react';
import ProjectBoardIssueDetailsComment from './index';

export default {
  title: 'Project/Board/IssueDetails/Comments/Comment',
  component: ProjectBoardIssueDetailsComment,
  parameters: { layout: 'padded' },
};

const mockComment = {
  id: 1,
  body: 'This is a sample comment with some text. The component should display Edit, Delete, and Reply links below this text.',
  issueId: 101,
  userId: 1,
  createdAt: new Date().toISOString(),
  user: {
    id: 1,
    name: 'Lord Gaben',
    avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
  },
};

const mockFetchIssue = () => Promise.resolve();

export const Default = () => (
  <div style={{ maxWidth: 600, padding: 20 }}>
    <ProjectBoardIssueDetailsComment 
      comment={mockComment} 
      fetchIssue={mockFetchIssue} 
    />
  </div>
);

export const LongComment = () => (
  <div style={{ maxWidth: 600, padding: 20 }}>
    <ProjectBoardIssueDetailsComment 
      comment={{
        ...mockComment,
        id: 2,
        body: 'This is a much longer comment that spans multiple lines. It demonstrates how the component handles longer text content.\n\nIt even has multiple paragraphs to show the whitespace handling with pre-wrap styling.',
      }} 
      fetchIssue={mockFetchIssue} 
    />
  </div>
);

export const DifferentUser = () => (
  <div style={{ maxWidth: 600, padding: 20 }}>
    <ProjectBoardIssueDetailsComment 
      comment={{
        ...mockComment,
        id: 3,
        user: {
          id: 2,
          name: 'Pickle Rick',
          avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
        },
        body: 'Comment from a different user with a different avatar.',
      }} 
      fetchIssue={mockFetchIssue} 
    />
  </div>
);
