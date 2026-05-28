import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import toast from 'shared/utils/toast';
import api from 'shared/utils/api';
import useApi from 'shared/hooks/api';
import { Form, Breadcrumbs, Avatar, ProjectAvatar, Button, ConfirmModal } from 'shared/components';

import {
  FormCont,
  FormElement,
  ContentElement,
  SectionTitle,
  SectionDesc,
  Divider,
  MembersSection,
  MemberRow,
  MemberInfo,
  MemberName,
  MemberEmail,
  MembersCount,
  DangerZone,
  DangerZoneItem,
  DangerZoneItemInfo,
  DangerZoneTitle,
  DangerZoneDesc,
  FormHeading,
  ActionButton,
  AvatarRow,
  AvatarDisplay,
  ProjectNameDisplay,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const ProjectSettings = ({ project, fetchProject }) => {
  const [{ isUpdating }, updateProject] = useApi.put('/project');
  const [isDeletingProject, setDeletingProject] = useState(false);

  const handleProjectDelete = ({ close }) => {
    setDeletingProject(true);
    api
      .delete('/project')
      .then(() => {
        toast.success('Project has been deleted.');
        close();
        setDeletingProject(false);
      })
      .catch(error => {
        toast.error(error);
        setDeletingProject(false);
      });
  };

  return (
    <Fragment>
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
        <FormCont>
          <FormElement>
            <Breadcrumbs items={['Projects', project.name, 'Project Details']} />
            <FormHeading>Project Details</FormHeading>
            <SectionDesc>Update your project details below.</SectionDesc>

            <AvatarRow>
              <AvatarDisplay>
                <ProjectAvatar size={32} />
              </AvatarDisplay>
              <ProjectNameDisplay>{project.name}</ProjectNameDisplay>
            </AvatarRow>

            <Form.Field.Input name="name" label="Name" />
            <Form.Field.Input name="url" label="URL" />
            <Form.Field.TextEditor
              name="description"
              label="Description"
              tip="Describe the project in as much detail as you'd like."
            />
            <Form.Field.Select
              name="category"
              label="Project Category"
              options={categoryOptions}
            />

            <ActionButton type="submit" variant="primary" isWorking={isUpdating}>
              Save changes
            </ActionButton>
          </FormElement>
        </FormCont>
      </Form>

      <FormCont>
        <ContentElement>
          <Divider />

          <SectionTitle>Members</SectionTitle>
          <SectionDesc>Manage who has access to this project.</SectionDesc>

          <MembersCount>{project.users.length} members</MembersCount>
          <MembersSection>
            {project.users.map(user => (
              <MemberRow key={user.id}>
                <Avatar avatarUrl={user.avatarUrl} name={user.name} size={32} />
                <MemberInfo>
                  <MemberName>{user.name}</MemberName>
                  <MemberEmail>{user.email}</MemberEmail>
                </MemberInfo>
              </MemberRow>
            ))}
          </MembersSection>
        </ContentElement>
      </FormCont>

      <FormCont>
        <ContentElement>
          <Divider />

          <SectionTitle danger>Danger Zone</SectionTitle>

          <DangerZone>
            <DangerZoneItem>
              <DangerZoneItemInfo>
                <DangerZoneTitle>Delete this project</DangerZoneTitle>
                <DangerZoneDesc>
                  Once you delete a project, there is no going back. Please be certain.
                </DangerZoneDesc>
              </DangerZoneItemInfo>
              <ConfirmModal
                variant="danger"
                title="Are you sure you want to delete this project?"
                message="Once you delete, it's gone for good. This will also delete all issues within the project."
                confirmText="Delete project"
                onConfirm={handleProjectDelete}
                renderLink={modal => (
                  <Button
                    variant="danger"
                    onClick={modal.open}
                    isWorking={isDeletingProject}
                  >
                    Delete Project
                  </Button>
                )}
              />
            </DangerZoneItem>
          </DangerZone>
        </ContentElement>
      </FormCont>
    </Fragment>
  );
};

const categoryOptions = Object.values(ProjectCategory).map(category => ({
  value: category,
  label: ProjectCategoryCopy[category],
}));

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;
