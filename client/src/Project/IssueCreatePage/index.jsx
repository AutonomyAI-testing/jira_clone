import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';

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
import {
  Form,
  IssueTypeIcon,
  Icon,
  Avatar,
  IssuePriorityIcon,
  Breadcrumbs,
} from 'shared/components';

import {
  PageContainer,
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
};

const ProjectIssueCreatePage = ({ project, fetchProject }) => {
  // Hook for API POST request to create issues
  const [{ isCreating }, createIssue] = useApi.post('/issues');
  // Router navigation
  const history = useHistory();
  // Route match for building redirect URL after creation
  const match = useRouteMatch();

  // Current user ID from auth context - used as default reporter
  const { currentUserId } = useCurrentUser();

  // Navigate back to previous page on cancel
  const handleCancel = () => {
    history.goBack();
  };

  return (
    <Fragment>
      <PageContainer>
        <Breadcrumbs items={['Projects', project.name, 'Create Issue']} />

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
          onSubmit={async (values, form) => {
            try {
              // Create issue with form values and additional metadata
              await createIssue({
                ...values,
                // New issues always start in BACKLOG status
                status: IssueStatus.BACKLOG,
                projectId: project.id,
                // Transform selected user IDs to user objects
                users: values.userIds.map(id => ({ id })),
              });
              // Refresh project data to reflect new issue
              await fetchProject();
              toast.success('Issue has been successfully created.');
              // Redirect to project board (remove /create-issue from URL)
              history.push(`${match.url.replace('/create-issue', '')}/board`);
            } catch (error) {
              // Form framework handles API errors and displays them
              Form.handleAPIError(error, form);
            }
          }}
        >
          <FormElement>
            <FormHeading>Create Issue</FormHeading>
            <FormContent>
              <LeftColumn>
                <Form.Field.Input
                  name="title"
                  label="Short Summary"
                  tip="Concisely summarize the issue in one or two sentences."
                  placeholder="e.g., Update login form validation"
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
            <Actions>
              <ActionButton type="submit" variant="primary" isWorking={isCreating}>
                Create Issue
              </ActionButton>
              <ActionButton type="button" variant="empty" onClick={handleCancel}>
                Cancel
              </ActionButton>
            </Actions>
          </FormElement>
        </Form>
      </PageContainer>
    </Fragment>
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

// Render function for user selection - curried to access project context
// When removeOptionValue is provided (multi-select), clicking item removes it
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

// Render function for issue dependency selection - curried to access project context
// Displays issue type icon and title; clicking removes from multi-select list
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

ProjectIssueCreatePage.propTypes = propTypes;

export default ProjectIssueCreatePage;
