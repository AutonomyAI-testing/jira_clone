import React, { Fragment, useState } from 'react';
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

import AssigneeSelector from './AssigneeSelector';

import {
  FormCont,
  FormHeading,
  FormElement,
  FormContent,
  LeftColumn,
  RightColumn,
  SelectItem,
  SelectItemLabel,
  SectionTitle,
  Divider,
  Actions,
  ActionButton,
  UserWorkload,
} from './Styles';

export default {
  title: 'Project/IssueCreate',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Fragment>
        <NormalizeStyles />
        <BaseStyles />
        <div style={{ width: '100%', maxWidth: '900px', padding: '20px', background: '#fff', minHeight: '100vh' }}>
          <Story />
        </div>
      </Fragment>
    ),
  ],
};

// Mock project data with users of varying workloads
const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  users: [
    {
      id: 1,
      name: 'Alice Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?u=alice',
    },
    {
      id: 2,
      name: 'Bob Smith',
      avatarUrl: 'https://i.pravatar.cc/150?u=bob',
    },
    {
      id: 3,
      name: 'Carol Davis',
      avatarUrl: 'https://i.pravatar.cc/150?u=carol',
    },
    {
      id: 4,
      name: 'David Wilson',
      avatarUrl: 'https://i.pravatar.cc/150?u=david',
    },
    {
      id: 5,
      name: 'Eva Martinez',
      avatarUrl: 'https://i.pravatar.cc/150?u=eva',
    },
  ],
  issues: [
    // Alice has no active issues - FREE
    // (no issues assigned to user 1)
    
    // Bob has 1 light task - LIGHT workload
    {
      id: 101,
      title: 'Update README documentation',
      type: IssueType.TASK,
      status: IssueStatus.SELECTED,
      userIds: [2],
      estimate: 4,
      timeSpent: 0,
    },
    
    // Carol has 2 moderate tasks - MODERATE workload
    {
      id: 102,
      title: 'Fix login page styling',
      type: IssueType.BUG,
      status: IssueStatus.INPROGRESS,
      userIds: [3],
      estimate: 8,
      timeSpent: 2,
    },
    {
      id: 103,
      title: 'Add user profile page',
      type: IssueType.STORY,
      status: IssueStatus.SELECTED,
      userIds: [3],
      estimate: 16,
      timeSpent: 4,
    },
    
    // David has 4 tasks - BUSY workload
    {
      id: 104,
      title: 'Implement API caching',
      type: IssueType.TASK,
      status: IssueStatus.INPROGRESS,
      userIds: [4],
      estimate: 20,
      timeSpent: 5,
    },
    {
      id: 105,
      title: 'Fix memory leak in dashboard',
      type: IssueType.BUG,
      status: IssueStatus.INPROGRESS,
      userIds: [4],
      estimate: 12,
      timeSpent: 0,
    },
    {
      id: 106,
      title: 'Database migration script',
      type: IssueType.TASK,
      status: IssueStatus.SELECTED,
      userIds: [4],
      estimate: 8,
      timeSpent: 0,
    },
    {
      id: 107,
      title: 'Performance optimization',
      type: IssueType.STORY,
      status: IssueStatus.SELECTED,
      userIds: [4],
      estimate: 24,
      timeSpent: 0,
    },
    
    // Eva has 1 completed task (DONE status) - FREE (done tasks don't count)
    {
      id: 108,
      title: 'Setup CI/CD pipeline',
      type: IssueType.TASK,
      status: IssueStatus.DONE,
      userIds: [5],
      estimate: 16,
      timeSpent: 16,
    },
  ],
};

// Type options for select
const typeOptions = Object.values(IssueType).map(type => ({
  value: type,
  label: IssueTypeCopy[type],
}));

// Priority options for select
const priorityOptions = Object.values(IssuePriority).map(priority => ({
  value: priority,
  label: IssuePriorityCopy[priority],
}));

// Helper to get user workload
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

// User options for select
const userOptions = project => project.users.map(user => ({ value: user.id, label: user.name }));

// Issue options for dependencies select
const issueOptions = project =>
  project.issues.map(issue => ({ value: issue.id, label: `${issue.title} (${issue.type})` }));

// Render type option
const renderType = ({ value: type }) => (
  <SelectItem>
    <IssueTypeIcon type={type} top={1} />
    <SelectItemLabel>{IssueTypeCopy[type]}</SelectItemLabel>
  </SelectItem>
);

// Render priority option
const renderPriority = ({ value: priority }) => (
  <SelectItem>
    <IssuePriorityIcon priority={priority} top={1} />
    <SelectItemLabel>{IssuePriorityCopy[priority]}</SelectItemLabel>
  </SelectItem>
);

// Render user option
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

// Render issue option
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

// Story component that mimics ProjectIssueCreate without API hooks
const ProjectIssueCreateStory = ({ project, fetchProject, onCreate, modalClose }) => {
  const [isCreating, setIsCreating] = useState(false);
  const currentUserId = 1; // Default to Alice

  return (
    <Form
      enableReinitialize
      initialValues={{
        type: IssueType.TASK,
        title: '',
        description: '',
        reporterId: currentUserId,
        userIds: [],
        priority: IssuePriority.MEDIUM,
        startDate: undefined,
        dueDate: undefined,
        dependencies: [],
      }}
      validations={{
        type: Form.is.required(),
        title: [Form.is.required(), Form.is.maxLength(200)],
        priority: Form.is.required(),
      }}
      onSubmit={async (values, form) => {
        setIsCreating(true);
        // Simulate API call
        setTimeout(() => {
          setIsCreating(false);
          console.log('Issue created:', values);
          onCreate();
        }, 1000);
      }}
    >
      {formikProps => (
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
              <AssigneeSelector
                projectUsers={project.users}
                selectedUserIds={formikProps.values.userIds}
                onSelect={userIds => formikProps.setFieldValue('userIds', userIds)}
                getUserWorkload={userId => getUserWorkload(userId, project.issues)}
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
            <ActionButton type="button" variant="empty" onClick={modalClose}>
              Cancel
            </ActionButton>
          </Actions>
          </FormElement>
        </FormCont>
      )}
    </Form>
  );
};

export const Default = {
  render: () => (
    <ProjectIssueCreateStory
      project={mockProject}
      fetchProject={() => console.log('Fetching project...')}
      onCreate={() => console.log('Issue created!')}
      modalClose={() => console.log('Modal closed')}
    />
  ),
};
