import React from 'react';
import Form from './index';

export default {
  title: 'Shared/Form',
  parameters: {
    layout: 'padded',
  },
};

// Style constants for story components
const FORM_CONTAINER_STYLE = { maxWidth: 400 };
const FORM_CONTAINER_STYLE_MULTI = { maxWidth: 480 };
const BUTTON_CONTAINER_STYLE = { marginTop: 24 };
const BUTTON_STYLE = { padding: '8px 16px', cursor: 'pointer' };

const priorityOptions = [
  { value: '1', label: 'Highest' },
  { value: '2', label: 'High' },
  { value: '3', label: 'Medium' },
  { value: '4', label: 'Low' },
  { value: '5', label: 'Lowest' },
];

// Story 1: Basic form with a text input — label, tip, no error
export const BasicFormWithInput = {
  name: 'Basic Form with Input',
  render: () => (
    <div style={FORM_CONTAINER_STYLE}>
      <Form initialValues={{ title: '' }} onSubmit={() => {}}>
        <Form.Element>
          <Form.Field.Input
            name="title"
            label="Issue Title"
            tip="Enter a short, descriptive title for this issue."
          />
          <div style={BUTTON_CONTAINER_STYLE}>
            <button type="submit" style={BUTTON_STYLE}>
              Submit
            </button>
          </div>
        </Form.Element>
      </Form>
    </div>
  ),
};

// Story 2: Form field with a validation error displayed
export const FormWithValidationError = {
  name: 'Form with Validation Error',
  render: () => (
    <div style={FORM_CONTAINER_STYLE}>
      <Form
        initialValues={{ email: 'not-an-email' }}
        validations={{
          email: [Form.is.required(), Form.is.email()],
        }}
        onSubmit={() => {}}
      >
        {() => (
          <Form.Element>
            <Form.Field.Input
              name="email"
              label="Email Address"
              tip="We'll never share your email with anyone else."
            />
            <div style={BUTTON_CONTAINER_STYLE}>
              <button type="submit" style={BUTTON_STYLE}>
                Validate
              </button>
            </div>
          </Form.Element>
        )}
      </Form>
    </div>
  ),
};

// Story 2b: Pre-touched field showing error (so error is visible immediately)
export const FieldWithError = {
  name: 'Field with Error (Pre-touched)',
  render: () => (
    <div style={FORM_CONTAINER_STYLE}>
      <Form
        initialValues={{ username: '' }}
        initialTouched={{ username: true }}
        initialErrors={{ username: 'This field is required' }}
        onSubmit={() => {}}
      >
        <Form.Element>
          <Form.Field.Input name="username" label="Username" tip="Choose a unique username." />
        </Form.Element>
      </Form>
    </div>
  ),
};

// Story 3: Multi-field form with text + select
export const MultiFieldForm = {
  name: 'Multi-Field Form',
  render: () => (
    <div style={FORM_CONTAINER_STYLE_MULTI}>
      <Form initialValues={{ summary: '', priority: '' }} onSubmit={() => {}}>
        <Form.Element>
          <Form.Field.Input
            name="summary"
            label="Summary"
            tip="Summarize the issue in one sentence."
          />
          <Form.Field.Select
            name="priority"
            label="Priority"
            tip="Select the issue priority level."
            options={priorityOptions}
          />
          <div style={BUTTON_CONTAINER_STYLE}>
            <button type="submit" style={BUTTON_STYLE}>
              Create Issue
            </button>
          </div>
        </Form.Element>
      </Form>
    </div>
  ),
};
