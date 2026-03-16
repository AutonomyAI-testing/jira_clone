import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';
import 'App/fontStyles.css';

import {
  IssueType,
  IssueStatus,
  IssuePriority,
  IssueTypeCopy,
  IssuePriorityCopy,
} from 'shared/constants/issues';
import { Form, IssueTypeIcon, Icon, Avatar, IssuePriorityIcon, Breadcrumbs } from 'shared/components';

import {
  FormCont,
  FormHeading,
  FormElement,
  FormContent,
  LeftColumn,
  RightColumn,
  SelectItem,
  SelectItemLabel,
  UserWorkload,
  SectionTitle,
  Divider,
  Actions,
  ActionButton,
} from './Styles';

// Mock project data with users having various workloads
const mockProject = {
  id: 1,
  name: 'Sprint Alpha',
  users: [
    { id: 1, name: 'Sarah Chen', avatarUrl: 'https://i.pravatar.cc/150?u=sarah' },
    { id: 2, name: 'Marcus Johnson', avatarUrl: 'https://i.pravatar.cc/150?u=marcus' },
    { id: 3, name: 'Priya Patel', avatarUrl: 'https://i.pravatar.cc/150?u=priya' },
    { id: 4, name: 'Alex Kim', avatarUrl: 'https://i.pravatar.cc/150?u=alex' },
    { id: 5, name: 'Jordan Lee', avatarUrl: 'https://i.pravatar.cc/150?u=jordan' },
  ],
  issues: [
    // Sarah: 2 active tasks with estimates (in progress + selected)
    { id: 101, title: 'Implement user authentication', type: IssueType.TASK, status: IssueStatus.INPROGRESS, userIds: [1], estimate: 8, timeSpent: 2 },
    { id: 102, title: 'Set up database schema', type: IssueType.TASK, status: IssueStatus.SELECTED, userIds: [1], estimate: 4, timeSpent: 0 },
    // Marcus: 3 active tasks with estimates
    { id: 103, title: 'Fix login bug', type: IssueType.BUG, status: IssueStatus.INPROGRESS, userIds: [2], estimate: 3, timeSpent: 1 },
    { id: 104, title: 'API integration', type: IssueType.TASK, status: IssueStatus.SELECTED, userIds: [2], estimate: 6, timeSpent: 0 },
    { id: 105, title: 'User profile feature', type: IssueType.STORY, status: IssueStatus.INPROGRESS, userIds: [2], estimate: 12, timeSpent: 4 },
    // Priya: 1 task in backlog (not active), should show less workload
    { id: 106, title: 'Documentation update', type: IssueType.TASK, status: IssueStatus.BACKLOG, userIds: [3], estimate: 2, timeSpent: 0 },
    // Alex: No assigned tasks at all
    // Jordan: Only completed tasks
    { id: 107, title: 'Setup CI/CD', type: IssueType.TASK, status: IssueStatus.DONE, userIds: [5], estimate: 5, timeSpent: 5 },
    { id: 108, title: 'Code review process', type: IssueType.TASK, status: IssueStatus.DONE, userIds: [5], estimate: 3, timeSpent: 3 },
    // Additional issues for dependencies dropdown
    { id: 109, title: 'Design system setup', type: IssueType.STORY, status: IssueStatus.DONE, userIds: [1, 3], estimate: 10, timeSpent: 10 },
    { id: 110, title: 'Performance optimization', type: IssueType.TASK, status: IssueStatus.BACKLOG, userIds: [2, 4], estimate: 8, timeSpent: 0 },
  ],
};

// Reusable render functions from original component
const typeOptions = Object.values(IssueType).map(type => ({
  value: type,
  label: IssueTypeCopy[type],
}));

const priorityOptions = Object.values(IssuePriority).map(priority => ({
  value: priority,
  label: IssuePriorityCopy[priority],
}));

const getUserWorkload = (userId, projectIssues) => {
  const userIssues = projectIssues.filter(
    issue => issue.userIds.includes(userId) && issue.status !== IssueStatus.DONE,
  );
  
  const activeIssues = userIssues.filter(
    issue => issue.status === IssueStatus.SELECTED || issue.status === IssueStatus.INPROGRESS,
  );
  
  const totalEstimate = userIssues.reduce((sum, issue) => {
    const estimate = issue.estimate || 0;
    const timeSpent = issue.timeSpent || 0;
    const remaining = estimate - timeSpent;
    return sum + (remaining > 0 ? remaining : 0);
  }, 0);
  
  return {
    activeCount: activeIssues.length,
    totalEstimate,
  };
};

const userOptions = project => project.users.map(user => ({ value: user.id, label: user.name }));

const issueOptions = project =>
  project.issues.map(issue => ({ value: issue.id, label: `${issue.title} (${issue.type})` }));

const renderType = ({ value: type }) => (
  <SelectItem>
    <IssueTypeIcon type={type} top={1} />
    <SelectItemLabel>{IssueTypeCopy[type]}</SelectItemLabel>
  </SelectItem>
);

const renderPriority = ({ value: priority }) => (
  <SelectItem>
    <IssuePriorityIcon priority={priority} top={1} />
    <SelectItemLabel>{IssuePriorityCopy[priority]}</SelectItemLabel>
  </SelectItem>
);

const renderUser = project => ({ value: userId, removeOptionValue }) => {
  const user = project.users.find(({ id }) => id === userId);
  const workload = getUserWorkload(userId, project.issues);

  return (
    <SelectItem
      key={user.id}
      withBottomMargin={!!removeOptionValue}
      onClick={() => removeOptionValue && removeOptionValue()}
    >
      <Avatar size={20} avatarUrl={user.avatarUrl} name={user.name} />
      <SelectItemLabel>
        {user.name}
        {!removeOptionValue && workload.activeCount > 0 && (
          <UserWorkload>
            {workload.activeCount} {workload.activeCount === 1 ? 'task' : 'tasks'}
            {workload.totalEstimate > 0 && (
              <span> · {workload.totalEstimate}h remaining</span>
            )}
          </UserWorkload>
        )}
      </SelectItemLabel>
      {removeOptionValue && <Icon type="close" top={2} />}
    </SelectItem>
  );
};

const renderIssue = project => ({ value: issueId, removeOptionValue }) => {
  const issue = project.issues.find(({ id }) => id === issueId);

  return (
    <SelectItem
      key={issue.id}
      withBottomMargin={!!removeOptionValue}
      onClick={() => removeOptionValue && removeOptionValue()}
    >
      <IssueTypeIcon type={issue.type} top={1} />
      <SelectItemLabel>{issue.title}</SelectItemLabel>
      {removeOptionValue && <Icon type="close" top={2} />}
    </SelectItem>
  );
};

// Story component that replicates the JSX without problematic hooks
const ProjectIssueCreateStory = ({ project, isCreating = false }) => {
  return (
    <Form
      enableReinitialize
      initialValues={{
        type: IssueType.TASK,
        title: '',
        description: '',
        reporterId: project.users[0]?.id,
        userIds: [],
        priority: IssuePriority.MEDIUM,
        startDate: undefined,
        dueDate: undefined,
        dependencies: [],
      }}
      validations={{
        type: Form.is.required(),
        title: [Form.is.required(), Form.is.maxLength(200)],
        reporterId: Form.is.required(),
        priority: Form.is.required(),
      }}
      onSubmit={async (values, form) => {
        console.log('Form submitted with values:', values);
      }}
    >
      <FormCont>
        <FormElement>
          <Breadcrumbs items={['Projects', project.name, 'Create Issue']} />
          <FormHeading>Create issue</FormHeading>
          <FormContent>
            <LeftColumn>
              <Form.Field.Input
                name="title"
                label="Short Summary"
                tip="Concisely summarize the issue in one or two sentences."
              />
              <Form.Field.TextEditor
                name="description"
                label="Description"
                tip="Describe the issue in as much detail as you'd like."
              />
            </LeftColumn>
            <RightColumn>
              <SectionTitle style={{ marginTop: 0 }}>Issue Type</SectionTitle>
              <Form.Field.Select
                name="type"
                label=""
                tip="Start typing to get a list of possible matches."
                options={typeOptions}
                renderOption={renderType}
                renderValue={renderType}
              />
              <SectionTitle>Priority</SectionTitle>
              <Form.Field.Select
                name="priority"
                label=""
                tip="Priority in relation to other issues."
                options={priorityOptions}
                renderOption={renderPriority}
                renderValue={renderPriority}
              />
              <SectionTitle>Reporter</SectionTitle>
              <Form.Field.Select
                name="reporterId"
                label=""
                options={userOptions(project)}
                renderOption={renderUser(project)}
                renderValue={renderUser(project)}
              />
              <SectionTitle>Assignees</SectionTitle>
              <Form.Field.Select
                isMulti
                name="userIds"
                label=""
                tip="People who are responsible for dealing with this issue."
                options={userOptions(project)}
                renderOption={renderUser(project)}
                renderValue={renderUser(project)}
              />
              <Divider />
              <SectionTitle>Start Date</SectionTitle>
              <Form.Field.DatePicker name="startDate" label="" withTime={false} />
              <SectionTitle>Due Date</SectionTitle>
              <Form.Field.DatePicker name="dueDate" label="" withTime={false} />
              <SectionTitle>Dependencies</SectionTitle>
              <Form.Field.Select
                isMulti
                name="dependencies"
                label=""
                tip="Select issues that must be completed before this one."
                options={issueOptions(project)}
                renderOption={renderIssue(project)}
                renderValue={renderIssue(project)}
              />
            </RightColumn>
          </FormContent>
          <Actions>
            <ActionButton type="submit" variant="primary" isWorking={isCreating}>
              Create Issue
            </ActionButton>
            <ActionButton type="button" variant="empty" onClick={() => console.log('Cancel clicked')}>
              Cancel
            </ActionButton>
          </Actions>
        </FormElement>
      </FormCont>
    </Form>
  );
};

export default {
  title: 'Project/IssueCreate',
  component: ProjectIssueCreateStory,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Fragment>
        <NormalizeStyles />
        <BaseStyles />
        <div style={{ width: '100%', padding: '40px', background: '#fff', minHeight: '100vh' }}>
          <Story />
        </div>
      </Fragment>
    ),
  ],
};

// Default story with comprehensive mock data for workload verification
export const Default = {
  args: {
    project: mockProject,
    isCreating: false,
  },
};

// Story showing the "Creating" state with spinner
export const Creating = {
  args: {
    project: mockProject,
    isCreating: true,
  },
};
