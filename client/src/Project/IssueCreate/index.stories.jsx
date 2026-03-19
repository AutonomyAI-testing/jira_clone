import React, { Fragment, useState } from 'react';

import NormalizeStyles from 'App/NormalizeStyles';
import BaseStyles from 'App/BaseStyles';
import 'App/fontStyles.css';

import {
  IssueType,
  IssuePriority,
  IssueTypeCopy,
  IssuePriorityCopy,
  IssueStatus,
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
} from './Styles';

// Mock project data
const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  users: [
    {
      id: 1,
      name: 'Lord Gaben',
      avatarUrl: 'https://i.ibb.co/6n0hLML/lord-gaben.jpg',
    },
    {
      id: 2,
      name: 'Pickle Rick',
      avatarUrl: 'https://i.ibb.co/7JM1P0V/pickle-rick.png',
    },
    {
      id: 3,
      name: 'Baby Yoda',
      avatarUrl: 'https://i.ibb.co/6PrN4M5/baby-yoda.jpg',
    },
  ],
  issues: [
    {
      id: 101,
      title: 'Add new navigation component',
      type: 'task',
      status: 'backlog',
      userIds: [1, 2],
      estimate: 8,
      timeSpent: 0,
    },
    {
      id: 102,
      title: 'Fix login form validation',
      type: 'bug',
      status: 'selected',
      userIds: [2],
      estimate: 4,
      timeSpent: 2,
    },
    {
      id: 103,
      title: 'Implement dark mode',
      type: 'story',
      status: 'inprogress',
      userIds: [1, 3],
      estimate: 16,
      timeSpent: 8,
    },
  ],
};

// Helper functions from original component
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

// Story component that replicates the IssueCreate form without hooks
const IssueCreateStory = ({ project }) => {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <Form
      enableReinitialize
      initialValues={{
        type: IssueType.TASK,
        title: '',
        description: '',
        reporterId: 1, // Mock current user ID
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
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsCreating(false);
        alert('Issue created! (Story mock)');
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
            <ActionButton type="button" variant="empty" onClick={() => alert('Cancel clicked')}>
              Cancel
            </ActionButton>
          </Actions>
          </FormElement>
        </FormCont>
      )}
    </Form>
  );
};

export default {
  title: 'Project/IssueCreate',
  component: IssueCreateStory,
  decorators: [
    (Story) => {
      React.useEffect(() => {
        // Ensure root element exists for Tooltip portal
        if (!document.getElementById('root')) {
          const rootDiv = document.createElement('div');
          rootDiv.id = 'root';
          document.body.appendChild(rootDiv);
        }
      }, []);
      
      return (
        <Fragment>
          <NormalizeStyles />
          <BaseStyles />
          <div style={{ width: '100%', maxWidth: '900px', padding: '20px', background: '#fff', minHeight: '100vh' }}>
            <Story />
          </div>
        </Fragment>
      );
    },
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {},
  render: () => <IssueCreateStory project={mockProject} />,
};
