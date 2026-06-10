import React from 'react';
import styled from 'styled-components';

import Form from './index';
import { color, font } from 'shared/utils/styles';

const FormContainer = styled.div`
  width: 480px;
  padding: 32px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin: 0 0 8px;
  color: ${color.textDarkest};
  ${font.medium}
  ${font.size(20)}
`;

const FormSubtitle = styled.p`
  margin: 0 0 4px;
  color: ${color.textMedium};
  ${font.size(13)}
`;

const SubmitButton = styled.button`
  margin-top: 24px;
  padding: 0 16px;
  height: 36px;
  border: none;
  border-radius: 3px;
  background: ${color.primary};
  color: #fff;
  cursor: pointer;
  ${font.medium}
  ${font.size(14.5)}
  &:hover {
    opacity: 0.85;
  }
`;

const SectionLabel = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${color.textMedium};
  ${font.size(12)}
  ${font.bold}
  text-transform: uppercase;
`;

const priorityOptions = [
  { value: '5', label: 'Highest' },
  { value: '4', label: 'High' },
  { value: '3', label: 'Medium' },
  { value: '2', label: 'Low' },
  { value: '1', label: 'Lowest' },
];

const categoryOptions = [
  { value: 'software', label: 'Software' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'business', label: 'Business' },
];

export default {
  title: 'Shared/Form',
  component: Form,
  parameters: {
    layout: 'padded',
  },
};

// 1. Basic form with an Input field (with label)
export const BasicInputField = {
  name: 'Basic Input Field',
  render: () => (
    <FormContainer>
      <FormTitle>Basic Input</FormTitle>
      <FormSubtitle>A form with a simple text input and label</FormSubtitle>
      <Form initialValues={{ username: '' }} onSubmit={() => {}}>
        <Form.Element>
          <Form.Field.Input name="username" label="Username" placeholder="Enter your username" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form.Element>
      </Form>
    </FormContainer>
  ),
};

// 2. Form field with tip/hint text
export const FieldWithTip = {
  name: 'Field With Tip Text',
  render: () => (
    <FormContainer>
      <FormTitle>Field Tips</FormTitle>
      <FormSubtitle>Fields can show helpful hint text below the input</FormSubtitle>
      <Form initialValues={{ email: '', url: '', summary: '' }} onSubmit={() => {}}>
        <Form.Element>
          <Form.Field.Input
            name="email"
            label="Email Address"
            placeholder="you@example.com"
            tip="We'll never share your email with anyone."
          />
          <Form.Field.Input
            name="url"
            label="Project URL"
            placeholder="https://your-project.com"
            tip="Optional. Used to link to the project's homepage."
          />
          <Form.Field.Textarea
            name="summary"
            label="Summary"
            tip="Concisely summarize the issue in one or two sentences."
          />
          <SubmitButton type="submit">Save</SubmitButton>
        </Form.Element>
      </Form>
    </FormContainer>
  ),
};

// 3. Form field with error/validation state
export const FieldWithError = {
  name: 'Field With Validation Error',
  render: () => (
    <FormContainer>
      <FormTitle>Validation Errors</FormTitle>
      <FormSubtitle>Errors appear after the user interacts with a field</FormSubtitle>
      <Form
        initialValues={{ title: '', email: '' }}
        validations={{
          title: [Form.is.required(), Form.is.maxLength(200)],
          email: [Form.is.required(), Form.is.email()],
        }}
        validateOnBlur
        onSubmit={() => {}}
      >
        <Form.Element>
          <Form.Field.Input name="title" label="Issue Title" placeholder="e.g. Fix login bug" />
          <Form.Field.Input name="email" label="Email" placeholder="you@example.com" />
          <SubmitButton type="submit">Submit (triggers validation)</SubmitButton>
        </Form.Element>
      </Form>
    </FormContainer>
  ),
};

// 4. All field types: Input, Select, Textarea, DatePicker
export const AllFieldTypes = {
  name: 'All Field Types',
  render: () => (
    <div
      style={{
        width: 520,
        padding: 32,
        background: '#fff',
        borderRadius: 4,
        boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
      }}
    >
      <FormTitle>All Field Types</FormTitle>
      <Form
        initialValues={{
          title: '',
          priority: '',
          description: '',
          dueDate: undefined,
        }}
        onSubmit={() => {}}
      >
        <Form.Element>
          <SectionLabel>Text Input</SectionLabel>
          <Form.Field.Input
            name="title"
            label="Issue Title"
            placeholder="Short summary of the issue"
          />

          <SectionLabel>Select Dropdown</SectionLabel>
          <Form.Field.Select
            name="priority"
            label="Priority"
            options={priorityOptions}
            tip="Priority in relation to other issues."
          />

          <SectionLabel>Textarea</SectionLabel>
          <Form.Field.Textarea
            name="description"
            label="Description"
            placeholder="Describe the issue..."
            tip="Provide details about the issue."
          />

          <SectionLabel>Date Picker</SectionLabel>
          <Form.Field.DatePicker name="dueDate" label="Due Date" withTime={false} />

          <SubmitButton type="submit" style={{ marginTop: 24 }}>
            Save Changes
          </SubmitButton>
        </Form.Element>
      </Form>
    </div>
  ),
};

// 5. Complete example: Project settings form
export const CompleteProjectForm = {
  name: 'Complete Form – Project Settings',
  render: () => (
    <div
      style={{
        width: 560,
        padding: '32px 40px',
        background: '#fff',
        borderRadius: 4,
        boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
      }}
    >
      <FormTitle>Project Details</FormTitle>
      <Form
        initialValues={{
          name: 'Jira Clone',
          url: 'https://github.com/oldboyxx/jira_clone',
          category: 'software',
          description: 'A simplified version of Jira built with React and Node.js.',
          startDate: undefined,
        }}
        validations={{
          name: [Form.is.required(), Form.is.maxLength(100)],
          url: Form.is.url(),
          category: Form.is.required(),
        }}
        onSubmit={() => {}}
      >
        <Form.Element>
          <Form.Field.Input name="name" label="Name" tip="Keep it short and descriptive." />
          <Form.Field.Input
            name="url"
            label="Website URL"
            tip="Link to the project's public page or repository."
          />
          <Form.Field.Select name="category" label="Project Category" options={categoryOptions} />
          <Form.Field.Textarea
            name="description"
            label="Description"
            tip="Describe the project in as much detail as you'd like."
          />
          <Form.Field.DatePicker name="startDate" label="Start Date" withTime={false} />
          <SubmitButton type="submit">Save Changes</SubmitButton>
        </Form.Element>
      </Form>
    </div>
  ),
};
