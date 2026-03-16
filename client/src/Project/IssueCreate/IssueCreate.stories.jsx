import React, { Fragment, useState, useCallback } from 'react';
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
  SectionTitle,
  Divider,
  Actions,
  ActionButton,
} from './Styles';

// Inline component that doesn't use the hooks (avoids API calls)
const ProjectIssueCreateStory = ({ project, fetchProject, onCreate, modalClose }) => {
  const [isCreating, setIsCreating] = useState(false);

  // Use first user as current user
  const currentUserId = project.users[0]?.id;

  const handleSubmit = useCallback(async (values, form) => {
    setIsCreating(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Created issue:', values);
      await fetchProject();
      onCreate();
    } catch (error) {
      Form.handleAPIError(error, form);
    } finally {
      setIsCreating(false);
    }
  }, [fetchProject, onCreate]);

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
        reporterId: Form.is.required(),
        priority: Form.is.required(),
      }}
      onSubmit={handleSubmit}
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
          <ActionButton type="button" variant="empty" onClick={modalClose}>
            Cancel
          </ActionButton>
        </Actions>
        </FormElement>
      </FormCont>
    </Form>
  );
};

const typeOptions = Object.values(IssueType).map(type => ({
  value: type,
  label: IssueTypeCopy[type],
}));

const priorityOptions = Object.values(IssuePriority).map(priority => ({
  value: priority,
  label: IssuePriorityCopy[priority],
}));

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

  return (
    <SelectItem
      key={user.id}
      withBottomMargin={!!removeOptionValue}
      onClick={() => removeOptionValue && removeOptionValue()}
    >
      <Avatar size={20} avatarUrl={user.avatarUrl} name={user.name} />
      <SelectItemLabel>{user.name}</SelectItemLabel>
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

ProjectIssueCreateStory.propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export default {
  title: 'Project/IssueCreate',
  component: ProjectIssueCreateStory,
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

// Mock project data with users and issues
const mockProject = {
  id: 1,
  name: 'Project Alpha',
  users: [
    { id: 1, name: 'John Doe', avatarUrl: '' },
    { id: 2, name: 'Jane Smith', avatarUrl: '' },
    { id: 3, name: 'Bob Wilson', avatarUrl: '' },
  ],
  issues: [
    { id: 101, title: 'Setup authentication flow', type: 'task' },
    { id: 102, title: 'Design user dashboard', type: 'story' },
    { id: 103, title: 'Fix login bug', type: 'bug' },
  ],
};

export const Default = {
  args: {
    project: mockProject,
    fetchProject: () => Promise.resolve(),
    onCreate: () => {},
    modalClose: () => {},
  },
};
