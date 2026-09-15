import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ProjectBoardIssueDetails from './index';

const propTypes = {
  issueId: PropTypes.string.isRequired,
  projectUsers: PropTypes.array.isRequired,
};

const ProjectBoardIssueDetailsWrapper = ({ issueId, projectUsers }) => {
  const [mockInstalled, setMockInstalled] = useState(false);

  const mockFetchProject = () => {
    console.log('Fetching project...');
  };

  const mockUpdateLocalProjectIssues = (id, fields) => {
    console.log('Updating local project issues:', id, fields);
  };

  const mockModalClose = () => {
    console.log('Closing modal...');
  };

  useEffect(() => {
    const mockIssueData = {
      issue: {
        id: issueId,
        title: 'Implement UX improvements for issue details page',
        type: 'story',
        status: 'inprogress',
        priority: '3',
        listPosition: 1,
        description:
          'This is a comprehensive task to improve the user experience on the issue details page. We need to add empty state messages, character counters, keyboard shortcuts, loading states, file type icons, and success notifications.',
        descriptionText:
          'This is a comprehensive task to improve the user experience on the issue details page.',
        estimate: 8,
        timeSpent: 4,
        timeRemaining: 4,
        reporterId: '1',
        userIds: ['1', '2'],
        createdAt: '2024-01-15T10:00:00.000Z',
        updatedAt: '2024-01-20T15:30:00.000Z',
        comments: [
          {
            id: '1',
            body: 'Great work on adding the empty states! They really improve the UX.',
            userId: '2',
            issueId,
            createdAt: '2024-01-18T09:00:00.000Z',
            updatedAt: '2024-01-18T09:00:00.000Z',
            user: {
              id: '2',
              name: 'Jane Smith',
              avatarUrl: 'https://i.pravatar.cc/150?img=2',
            },
          },
          {
            id: '2',
            body:
              'The keyboard shortcuts feature is amazing! @John it would be great if you could review this.',
            userId: '3',
            issueId,
            createdAt: '2024-01-19T14:30:00.000Z',
            updatedAt: '2024-01-19T14:30:00.000Z',
            user: {
              id: '3',
              name: 'Bob Johnson',
              avatarUrl: 'https://i.pravatar.cc/150?img=3',
            },
          },
        ],
        attachments: [
          {
            id: '1',
            name: 'design-mockup.pdf',
            url: 'https://example.com/mockup.pdf',
            size: 2457600,
            createdAt: '2024-01-16T10:00:00.000Z',
          },
          {
            id: '2',
            name: 'screenshot.png',
            url: 'https://example.com/screenshot.png',
            size: 1048576,
            createdAt: '2024-01-17T11:00:00.000Z',
          },
        ],
      },
    };

    const interceptor = axios.interceptors.response.use(
      response => response,
      error => {
        if (error.config && error.config.url) {
          const { url, method = '' } = error.config;

          if (url.includes(`/issues/${issueId}`)) {
            return Promise.resolve({
              data: mockIssueData,
              status: 200,
              statusText: 'OK',
              headers: {},
              config: error.config,
            });
          }

          if (url.includes('/issues/') && method === 'put') {
            return Promise.resolve({
              data: { success: true },
              status: 200,
              statusText: 'OK',
              headers: {},
              config: error.config,
            });
          }

          if (url.includes('/comments')) {
            return Promise.resolve({
              data: { id: Date.now().toString(), success: true },
              status: 200,
              statusText: 'OK',
              headers: {},
              config: error.config,
            });
          }
        }

        return Promise.reject(error);
      },
    );

    setMockInstalled(true);

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [issueId]);

  if (!mockInstalled) {
    return <div>Loading...</div>;
  }

  return (
    <ProjectBoardIssueDetails
      issueId={issueId}
      projectUsers={projectUsers}
      fetchProject={mockFetchProject}
      updateLocalProjectIssues={mockUpdateLocalProjectIssues}
      modalClose={mockModalClose}
    />
  );
};

ProjectBoardIssueDetailsWrapper.propTypes = propTypes;

export default ProjectBoardIssueDetailsWrapper;
