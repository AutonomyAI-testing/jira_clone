import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import {
  Form,
  Breadcrumbs,
  Avatar,
  Button,
  Icon,
  ProjectAvatar,
  ConfirmModal,
} from 'shared/components';

import {
  SectionContainer,
  SectionNav,
  SectionNavHeading,
  SectionNavItem,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
  FormElement,
  ActionButton,
  AvatarWrapper,
  AvatarMeta,
  AvatarLabel,
  AvatarHint,
  MembersList,
  MemberRow,
  MemberInfo,
  MemberName,
  MemberEmail,
  InviteButton,
  AccessInfoBox,
  AccessInfoText,
  DangerZoneBox,
  DangerZoneRow,
  DangerZoneLabel,
  DangerZoneDesc,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

// Navigation sections for the settings page — controls which content is displayed
const NAV_SECTIONS = [
  { id: 'general', label: 'General', icon: 'settings' },
  { id: 'members', label: 'Members', icon: 'issues' },
  { id: 'access', label: 'Access', icon: 'help' },
  { id: 'danger', label: 'Danger Zone', icon: 'trash' },
];

// Pre-computed project category options for the form select field
const categoryOptions = Object.values(ProjectCategory).map(category => ({
  value: category,
  label: ProjectCategoryCopy[category],
}));

const ProjectSettings = ({ project, fetchProject }) => {
  const [activeSection, setActiveSection] = useState('general');
  const [{ isUpdating }, updateProject] = useApi.put('/project');

  return (
    <div>
      <Breadcrumbs items={['Projects', project.name, 'Project Settings']} />

      <SectionContainer>
        {/* Navigation sidebar for section switching */}
        <SectionNav>
          <SectionNavHeading>Settings</SectionNavHeading>
          {NAV_SECTIONS.map(({ id, label, icon }) => (
            <SectionNavItem
              key={id}
              isActive={activeSection === id}
              onClick={() => setActiveSection(id)}
            >
              <Icon type={icon} size={16} />
              {label}
            </SectionNavItem>
          ))}
        </SectionNav>

        {/* Content area that updates based on activeSection */}
        <SectionContent>
          {activeSection === 'general' &&
            renderGeneral({ project, fetchProject, updateProject, isUpdating })}
          {activeSection === 'members' && renderMembers({ project })}
          {activeSection === 'access' && renderAccess()}
          {activeSection === 'danger' && renderDanger()}
        </SectionContent>
      </SectionContainer>
    </div>
  );
};

// Renders the General section with form for updating project details
const renderGeneral = ({ project, fetchProject, updateProject, isUpdating }) => (
  <Form
    initialValues={Form.initialValues(project, get => ({
      name: get('name'),
      url: get('url'),
      category: get('category'),
      description: get('description'),
    }))}
    validations={{
      name: [Form.is.required(), Form.is.maxLength(100)],
      url: Form.is.url(),
      category: Form.is.required(),
    }}
    onSubmit={async (values, form) => {
      try {
        await updateProject(values);
        await fetchProject();
        toast.success('Changes have been saved successfully.');
      } catch (error) {
        Form.handleAPIError(error, form);
      }
    }}
  >
    <FormElement>
      {/* Red title variant for General section to stand out visually */}
      <SectionTitle style={{ color: '#e44d42' }}>General</SectionTitle>
      <SectionSubtitle>Update your project details and settings.</SectionSubtitle>

      <AvatarWrapper>
        <ProjectAvatar size={64} />
        <AvatarMeta>
          <AvatarLabel>{project.name}</AvatarLabel>
          <AvatarHint>Project avatar is auto-generated</AvatarHint>
        </AvatarMeta>
      </AvatarWrapper>

      <Form.Field.Input name="name" label="Name" />
      <Form.Field.Input name="url" label="URL" />
      <Form.Field.TextEditor
        name="description"
        label="Description"
        tip="Describe the project in as much detail as you'd like."
      />
      <Form.Field.Select name="category" label="Project Category" options={categoryOptions} />

      <ActionButton type="submit" variant="primary" isWorking={isUpdating}>
        Save Changes
      </ActionButton>
    </FormElement>
  </Form>
);

// Renders the Members section displaying project participants
const renderMembers = ({ project }) => (
  <div>
    <SectionTitle>Members</SectionTitle>
    {/* Dynamic pluralization: "1 member" or "N members" */}
    <SectionSubtitle>
      {project.users.length} member{project.users.length !== 1 ? 's' : ''} in this project
    </SectionSubtitle>

    <MembersList>
      {project.users.map(user => (
        <MemberRow key={user.id}>
          <Avatar avatarUrl={user.avatarUrl} name={user.name} size={36} />
          <MemberInfo>
            <MemberName>{user.name}</MemberName>
            <MemberEmail>{user.email}</MemberEmail>
          </MemberInfo>
        </MemberRow>
      ))}
    </MembersList>

    <InviteButton icon="plus" variant="secondary">
      Invite people
    </InviteButton>
  </div>
);

// Renders the Access section with information about organization-level access management
const renderAccess = () => (
  <div>
    <SectionTitle>Access</SectionTitle>
    <SectionSubtitle>Manage who can view and edit this project.</SectionSubtitle>

    <AccessInfoBox>
      <Icon type="help" size={20} />
      <AccessInfoText>
        Project access is managed at the organisation level. Contact your administrator to change
        access settings, add new team members, or modify role permissions.
      </AccessInfoText>
    </AccessInfoBox>
  </div>
);

// Renders the Danger Zone section with destructive actions (project deletion)
const renderDanger = () => (
  <div>
    <SectionTitle>Danger Zone</SectionTitle>
    <SectionSubtitle>Irreversible and destructive actions.</SectionSubtitle>

    <DangerZoneBox>
      <DangerZoneRow>
        <div>
          <DangerZoneLabel>Delete this project</DangerZoneLabel>
          <DangerZoneDesc>
            Once you delete a project, there is no going back. All issues and data will be
            permanently removed.
          </DangerZoneDesc>
        </div>
        <ConfirmModal
          variant="danger"
          title="Delete project"
          message="Are you sure you want to delete this project? All issues and data will be permanently removed. This action cannot be undone."
          confirmText="Delete project"
          onConfirm={({ close }) => {
            toast.error('This is a demo — project deletion is not implemented.');
            close();
          }}
          renderLink={modal => (
            <Button variant="danger" onClick={modal.open}>
              Delete project
            </Button>
          )}
        />
      </DangerZoneRow>
    </DangerZoneBox>
  </div>
);

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;
