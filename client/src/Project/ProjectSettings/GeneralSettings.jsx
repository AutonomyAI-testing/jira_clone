import React from 'react';
import PropTypes from 'prop-types';

import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form } from 'shared/components';

import {
  SectionHeading,
  SectionContent,
  FormElement,
  FormElementField,
  ActionButtons,
  PrimaryButton,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const GeneralSettings = ({ project, fetchProject }) => {
  const [{ isUpdating }, updateProject] = useApi.put('/project');

  const categoryOptions = Object.values(ProjectCategory).map(category => ({
    value: category,
    label: ProjectCategoryCopy[category],
  }));

  return (
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
      <SectionContent>
        <SectionHeading>General Settings</SectionHeading>

        <FormElement>
          <FormElementField>
            <Form.Field.Input name="name" label="Project Name" />
          </FormElementField>

          <FormElementField>
            <Form.Field.Input name="url" label="URL" />
          </FormElementField>

          <FormElementField>
            <Form.Field.Select
              name="category"
              label="Project Category"
              options={categoryOptions}
            />
          </FormElementField>

          <FormElementField>
            <Form.Field.TextEditor
              name="description"
              label="Description"
              tip="Describe the project in as much detail as you'd like."
            />
          </FormElementField>

          <ActionButtons>
            <PrimaryButton type="submit" variant="primary" isWorking={isUpdating}>
              Save Changes
            </PrimaryButton>
          </ActionButtons>
        </FormElement>
      </SectionContent>
    </Form>
  );
};

GeneralSettings.propTypes = propTypes;

export default GeneralSettings;
