import React from 'react';
import PropTypes from 'prop-types';

import {
  IssueType,
  IssueStatus,
  IssuePriority,
  IssueTypeCopy,
  IssuePriorityCopy,
} from 'shared/constants/issues';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import useCurrentUser from 'shared/hooks/currentUser';
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

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

const ProjectIssueCreate = ({ project, fetchProject, onCreate, modalClose }) => {
  const [{ isCreating }, createIssue] = useApi.post('/issues');

  const { currentUserId } = useCurrentUser();

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
        try {
          await createIssue({
            ...values,
            status: IssueStatus.BACKLOG,
            projectId: project.id,
            users: values.userIds.map(id => ({ id })),
          });
          await fetchProject();
          toast.success('Issue has been successfully created.');
          onCreate();
        } catch (error) {
          Form.handleAPIError(error, form);
        }
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

ProjectIssueCreate.propTypes = propTypes;

export default ProjectIssueCreate;
