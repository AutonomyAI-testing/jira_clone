import React, { useState, useEffect, useRef } from 'react';
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

// Story demonstrating the reply functionality with an existing reply already saved
export const ReplyFeature = () => {
  const mockFetchIssue = () => Promise.resolve();
  
  // Original comment that has received a reply
  const originalComment = {
    id: 100,
    body: 'Has anyone looked into the performance issues on the dashboard page? The data grid seems to be rendering slowly when there are more than 100 rows.',
    issueId: 101,
    userId: 1,
    createdAt: '2024-01-15T10:30:00.000Z',
    user: {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
    },
  };
  
  // A saved reply demonstrating that replies persist
  const savedReply = {
    id: 101,
    body: 'Yes, I investigated this yesterday. The issue is with the virtualization not being applied properly. I\'ve created a fix in PR #234 that implements windowing for the data grid rows.',
    issueId: 101,
    userId: 2,
    createdAt: '2024-01-15T14:45:00.000Z',
    user: {
      id: 2,
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
    },
  };
  
  // Another saved reply showing the conversation flow
  const secondReply = {
    id: 102,
    body: 'Great work! I\'ve reviewed the PR and it looks good. The performance improvement is significant - rendering time dropped from 800ms to under 50ms.',
    issueId: 101,
    userId: 3,
    createdAt: '2024-01-15T16:20:00.000Z',
    user: {
      id: 3,
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
    },
  };
  
  return (
    <div style={{ maxWidth: 600, padding: 20, background: '#fff' }}>
      <h3 style={{ marginBottom: 20, fontFamily: 'sans-serif', color: '#172b4d' }}>Issue Comments</h3>
      
      {/* Original comment */}
      <ProjectBoardIssueDetailsComment 
        comment={originalComment} 
        fetchIssue={mockFetchIssue} 
      />
      
      {/* First saved reply */}
      <ProjectBoardIssueDetailsComment 
        comment={savedReply} 
        fetchIssue={mockFetchIssue} 
      />
      
      {/* Second saved reply */}
      <ProjectBoardIssueDetailsComment 
        comment={secondReply} 
        fetchIssue={mockFetchIssue} 
      />
    </div>
  );
};

// Story showing the reply form in its open state
export const ReplyFormOpen = () => {
  const [replyBody, setReplyBody] = useState('Thanks for the explanation! I will deploy this to staging today.');
  const [isReplying, setReplying] = useState(false);
  
  const originalComment = {
    id: 100,
    body: 'The API rate limiting has been implemented. We now cap requests at 100 per minute per user.',
    issueId: 101,
    userId: 1,
    createdAt: '2024-01-15T10:30:00.000Z',
    user: {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
    },
  };
  
  // Import BodyForm component to render it separately
  const BodyForm = require('../BodyForm').default;
  
  const handleSave = () => {
    setReplying(true);
    // Simulate saving
    setTimeout(() => {
      setReplying(false);
      alert('Reply saved successfully!');
    }, 500);
  };
  
  return (
    <div style={{ maxWidth: 600, padding: 20, background: '#fff' }}>
      <h3 style={{ marginBottom: 20, fontFamily: 'sans-serif', color: '#172b4d' }}>Reply Form Open State</h3>
      
      {/* Comment with reply form shown below */}
      <div style={{ position: 'relative', marginTop: 25, fontSize: 15 }}>
        <img 
          src="https://i.ibb.co/6n0hLML/lord-gaben.jpg" 
          alt="Lord Gaben"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: 32, 
            height: 32, 
            borderRadius: '50%' 
          }} 
        />
        <div style={{ paddingLeft: 44 }}>
          <span style={{ display: 'inline-block', paddingRight: 12, paddingBottom: 10, color: '#172b4d', fontWeight: 500 }}>Lord Gaben</span>
          <span style={{ display: 'inline-block', paddingBottom: 10, color: '#172b4d', fontSize: '14.5px' }}>a few seconds ago</span>
          <p style={{ paddingBottom: 10, whiteSpace: 'pre-wrap', margin: 0 }}>{originalComment.body}</p>
          <span style={{ display: 'inline-block', padding: '2px 0', color: '#5e6c84', fontSize: '14.5px', marginRight: 12, cursor: 'pointer' }}>Edit</span>
          <span style={{ display: 'inline-block', padding: '2px 0', color: '#5e6c84', fontSize: '14.5px', cursor: 'pointer' }}>· Delete</span>
          <span style={{ display: 'inline-block', padding: '2px 0', color: '#0052cc', fontSize: '14.5px', cursor: 'pointer', fontWeight: 500 }}>· Reply (open)</span>
          
          {/* Reply form */}
          <div style={{ marginTop: 15 }}>
            <BodyForm
              value={replyBody}
              onChange={setReplyBody}
              isWorking={isReplying}
              onSubmit={handleSave}
              onCancel={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
