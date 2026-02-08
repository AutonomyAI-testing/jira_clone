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
  Container,
  GradientBackground,
  ContentCard,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  FormSection,
  SectionLabel,
  FieldGroup,
  SelectItem,
  SelectItemLabel,
  Actions,
  ActionButton,
  Divider,
  IconWrapper,
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
    <Container>
      <GradientBackground />
      <Form
        enableReinitialize
        initialValues={{
          type: IssueType.TASK,
          title: '',
          description: '',
          reporterId: currentUserId,
          userIds: [],
          priority: IssuePriority.MEDIUM,
        }}
        validations={{
          type: Form.is.required(),
          title: [Form.is.required(), Form.is.maxLength(200)],
          reporterId: Form.is.required(),
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
        <Form.Element>
          <ContentCard>
            <Header>
              <HeaderTitle>Create New Issue</HeaderTitle>
              <HeaderSubtitle>Fill in the details below to create a new issue for your project</HeaderSubtitle>
            </Header>

            <FormSection>
              <SectionLabel>Issue Type</SectionLabel>
              <FieldGroup>
                <Form.Field.Select
                  name="type"
                  tip="Select the type of issue you want to create"
                  options={typeOptions}
                  renderOption={renderType}
                  renderValue={renderType}
                />
              </FieldGroup>
            </FormSection>

            <Divider />

            <FormSection>
              <SectionLabel>Summary</SectionLabel>
              <FieldGroup>
                <Form.Field.Input
                  name="title"
                  placeholder="e.g., Fix login page responsiveness"
                  tip="Concisely summarize the issue in one or two sentences"
                />
              </FieldGroup>
            </FormSection>

            <FormSection>
              <SectionLabel>Description</SectionLabel>
              <FieldGroup>
                <Form.Field.TextEditor
                  name="description"
                  placeholder="Describe the issue in detail..."
                  tip="Provide as much context and detail as needed"
                />
              </FieldGroup>
            </FormSection>

            <Divider />

            <FormSection>
              <SectionLabel>Reporter</SectionLabel>
              <FieldGroup>
                <Form.Field.Select
                  name="reporterId"
                  tip="The person reporting this issue"
                  options={userOptions(project)}
                  renderOption={renderUser(project)}
                  renderValue={renderUser(project)}
                />
              </FieldGroup>
            </FormSection>

            <FormSection>
              <SectionLabel>Assignees</SectionLabel>
              <FieldGroup>
                <Form.Field.Select
                  isMulti
                  name="userIds"
                  tip="People responsible for working on this issue"
                  options={userOptions(project)}
                  renderOption={renderUser(project)}
                  renderValue={renderUser(project)}
                />
              </FieldGroup>
            </FormSection>

            <FormSection>
              <SectionLabel>Priority</SectionLabel>
              <FieldGroup>
                <Form.Field.Select
                  name="priority"
                  tip="Priority level relative to other issues"
                  options={priorityOptions}
                  renderOption={renderPriority}
                  renderValue={renderPriority}
                />
              </FieldGroup>
            </FormSection>

            <Actions>
              <ActionButton type="button" variant="empty" onClick={modalClose}>
                Cancel
              </ActionButton>
              <ActionButton type="submit" variant="primary" isWorking={isCreating}>
                Create Issue
              </ActionButton>
            </Actions>
          </ContentCard>
        </Form.Element>
      </Form>
    </Container>
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

const renderType = ({ value: type }) => (
  <SelectItem>
    <IconWrapper>
      <IssueTypeIcon type={type} />
    </IconWrapper>
    <SelectItemLabel>{IssueTypeCopy[type]}</SelectItemLabel>
  </SelectItem>
);

const renderPriority = ({ value: priority }) => (
  <SelectItem>
    <IconWrapper>
      <IssuePriorityIcon priority={priority} />
    </IconWrapper>
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
      <Avatar size={24} avatarUrl={user.avatarUrl} name={user.name} />
      <SelectItemLabel>{user.name}</SelectItemLabel>
      {removeOptionValue && <Icon type="close" top={2} />}
    </SelectItem>
  );
};

ProjectIssueCreate.propTypes = propTypes;

export default ProjectIssueCreate;
