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
import { Form, IssueTypeIcon, Icon, Avatar, IssuePriorityIcon } from 'shared/components';

import {
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
  QuickFormContent,
  MoreOptionsLink,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['quick', 'detailed']),
  onModeChange: PropTypes.func,
};

const defaultProps = {
  mode: 'quick',
  onModeChange: undefined,
};

const ProjectIssueCreate = ({ project, fetchProject, onCreate, modalClose, mode, onModeChange }) => {
  const [{ isCreating }, createIssue] = useApi.post('/issues');

  const { currentUserId } = useCurrentUser();

  const validationsMap = {
    quick: {
      type: Form.is.required(),
      title: [Form.is.required(), Form.is.maxLength(200)],
    },
    detailed: {
      type: Form.is.required(),
      title: [Form.is.required(), Form.is.maxLength(200)],
      reporterId: Form.is.required(),
      priority: Form.is.required(),
    },
  };

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
      validations={validationsMap[mode]}
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
      <FormElement>
        <FormHeading>{mode === 'quick' ? 'Quick Create' : 'Create issue'}</FormHeading>
        {mode === 'quick' ? (
          <QuickFormContent>
            <Form.Field.Input
              name="title"
              label="Short Summary"
              tip="Concisely summarize the issue in one or two sentences."
            />
            <Form.Field.Select
              name="type"
              label="Issue Type"
              tip="Start typing to get a list of possible matches."
              options={typeOptions}
              renderOption={renderType}
              renderValue={renderType}
            />
            <Form.Field.Select
              name="priority"
              label="Priority"
              tip="Priority in relation to other issues."
              options={priorityOptions}
              renderOption={renderPriority}
              renderValue={renderPriority}
            />
            <MoreOptionsLink onClick={() => onModeChange && onModeChange('detailed')}>
              More Options
            </MoreOptionsLink>
          </QuickFormContent>
        ) : (
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
              <SectionTitle>Issue Type</SectionTitle>
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
        )}
        <Actions>
          <ActionButton type="submit" variant="primary" isWorking={isCreating}>
            {mode === 'quick' ? 'Create Issue' : 'Create Issue'}
          </ActionButton>
          <ActionButton type="button" variant="empty" onClick={modalClose}>
            Cancel
          </ActionButton>
        </Actions>
      </FormElement>
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

ProjectIssueCreate.propTypes = propTypes;
ProjectIssueCreate.defaultProps = defaultProps;

export default ProjectIssueCreate;
