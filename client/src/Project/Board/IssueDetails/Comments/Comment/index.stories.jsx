import React from 'react';

import ProjectBoardIssueDetailsComment from './index';

export default {
  title: 'Project/Board/IssueDetails/Comments/Comment',
  component: ProjectBoardIssueDetailsComment,
  parameters: { layout: 'padded' },
};

const mockComment = {
  id: 1,
  body: 'This is a test comment with some meaningful content about the issue at hand. The navigation component needs to support mobile breakpoints.',
  issueId: 101,
  userId: 1,
  user: {
    id: 1,
    name: 'Lord Gaben',
    avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const mockFetchIssue = () => Promise.resolve();

export const Default = () => (
  <div style={{ maxWidth: 600, padding: 20 }}>
    <ProjectBoardIssueDetailsComment comment={mockComment} fetchIssue={mockFetchIssue} />
  </div>
);

export const LongComment = () => (
  <div style={{ maxWidth: 600, padding: 20 }}>
    <ProjectBoardIssueDetailsComment
      comment={{
        ...mockComment,
        id: 2,
        body: `This is a longer comment that spans multiple lines to test how the component handles larger blocks of text.

It includes line breaks to demonstrate the pre-wrap behavior of the comment body.

Key points discussed:
- First important point about the feature
- Second consideration for implementation  
- Third note about testing requirements`,
      }}
      fetchIssue={mockFetchIssue}
    />
  </div>
);

export const WithDifferentUser = () => (
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
        body: "I've reviewed the code and it looks good. Just a few minor suggestions for improvement.",
      }}
      fetchIssue={mockFetchIssue}
    />
  </div>
);
