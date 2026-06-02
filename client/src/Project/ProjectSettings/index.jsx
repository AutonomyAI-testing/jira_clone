import React from 'react';
import PropTypes from 'prop-types';

import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form, Breadcrumbs, Button, Icon } from 'shared/components';

import {
  Container,
  PageHeader,
  PageTitle,
  PageTitleContent,
  PageSubtitle,
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
  SectionDivider,
  MembersList,
  MemberRow,
  MemberAvatar,
  MemberInfo,
  MemberName,
  MemberRole,
  MemberAction,
  DangerSection,
  DangerItem,
  DangerItemContent,
  DangerItemTitle,
  DangerItemDescription,
  DangerItemAction,
  MembersHeader,
  MembersCount,
  AddMemberButton,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const mockMembers = [
  { id: 1, name: 'John Smith', role: 'Admin' },
  { id: 2, name: 'Sarah Chen', role: 'Member' },
  { id: 3, name: 'Mike Rodriguez', role: 'Viewer' },
];

const getInitials = name => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

const getAvatarColor = name => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const ProjectSettings = ({ project, fetchProject }) => {
  const [{ isUpdating }, updateProject] = useApi.put('/project');

  const handleRemoveMember = () => {
    toast.success(`Member removed from project.`);
  };

  const handleAddMember = () => {
    toast.success(`Add member modal would open here.`);
  };

  const handleDeleteProject = () => {
    toast.error('Project deletion is disabled in this demo.');
  };

  const handleArchiveProject = () => {
    toast.success(`Project archived successfully.`);
  };

  return (
    <Container>
      <PageHeader>
        <PageTitleContent>
          <Icon type="settings" size={32} />
          <PageTitle>Project Settings</PageTitle>
        </PageTitleContent>
        <PageSubtitle>Manage your project details and preferences</PageSubtitle>
        <Breadcrumbs items={['Projects', project.name, 'Project Settings']} />
      </PageHeader>

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
        <Form.Element>
          {/* General Section */}
          <Section>
            <SectionHeader>
              <SectionTitle>General</SectionTitle>
            </SectionHeader>
            <SectionContent>
              <Form.Field.Input name="name" label="Project Name" />
              <Form.Field.Input name="url" label="Project URL / Key" />
              <Form.Field.Select
                name="category"
                label="Project Category"
                options={categoryOptions}
              />
              <Form.Field.TextEditor
                name="description"
                label="Description"
                tip="Describe the project in as much detail as you'd like."
              />
              <Button type="submit" variant="primary" isWorking={isUpdating}>
                Save changes
              </Button>
            </SectionContent>
          </Section>

          <SectionDivider />

          {/* Members Section */}
          <Section>
            <MembersHeader>
              <SectionTitle>Project Members</SectionTitle>
              <MembersCount>{mockMembers.length}</MembersCount>
              <AddMemberButton
                variant="secondary"
                icon="plus"
                iconSize={16}
                onClick={handleAddMember}
              >
                Add member
              </AddMemberButton>
            </MembersHeader>
            <SectionContent>
              <MembersList>
                {mockMembers.map(member => (
                  <MemberRow key={member.id}>
                    <MemberAvatar color={getAvatarColor(member.name)}>
                      {getInitials(member.name)}
                    </MemberAvatar>
                    <MemberInfo>
                      <MemberName>{member.name}</MemberName>
                      <MemberRole>{member.role}</MemberRole>
                    </MemberInfo>
                    <MemberAction
                      icon="trash"
                      iconSize={16}
                      variant="empty"
                      onClick={() => handleRemoveMember(member.id)}
                    />
                  </MemberRow>
                ))}
              </MembersList>
            </SectionContent>
          </Section>

          <SectionDivider />

          {/* Danger Zone Section */}
          <DangerSection>
            <SectionHeader>
              <SectionTitle>Danger Zone</SectionTitle>
            </SectionHeader>
            <SectionContent>
              <DangerItem>
                <DangerItemContent>
                  <DangerItemTitle>Delete Project</DangerItemTitle>
                  <DangerItemDescription>
                    Once you delete a project, there is no going back. Please be certain.
                  </DangerItemDescription>
                </DangerItemContent>
                <DangerItemAction variant="danger" onClick={handleDeleteProject}>
                  Delete Project
                </DangerItemAction>
              </DangerItem>

              <DangerItem>
                <DangerItemContent>
                  <DangerItemTitle>Archive Project</DangerItemTitle>
                  <DangerItemDescription>
                    Archived projects are hidden from the main project list but can be restored.
                  </DangerItemDescription>
                </DangerItemContent>
                <DangerItemAction variant="danger" onClick={handleArchiveProject}>
                  Archive Project
                </DangerItemAction>
              </DangerItem>
            </SectionContent>
          </DangerSection>
        </Form.Element>
      </Form>
    </Container>
  );
};

const categoryOptions = Object.values(ProjectCategory).map(category => ({
  value: category,
  label: ProjectCategoryCopy[category],
}));

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;
