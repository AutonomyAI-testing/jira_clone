import React from 'react';
import ToastItem from './ToastItem';

export default {
  title: 'Components/Toast',
  component: ToastItem,
};

// Wrapper that positions the story content with proper height and spacing
const StoryWrapper = ({ children }) => (
  <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
    {children}
  </div>
);

export const Success = () => (
  <StoryWrapper>
    <ToastItem
      type="success"
      title="Issue updated"
      message="Your changes have been saved successfully."
    />
  </StoryWrapper>
);

export const Danger = () => (
  <StoryWrapper>
    <ToastItem
      type="danger"
      title="Error occurred"
      message="Something went wrong. Please try again."
    />
  </StoryWrapper>
);

export const Warning = () => (
  <StoryWrapper>
    <ToastItem
      type="warning"
      title="Warning"
      message="This action cannot be undone."
    />
  </StoryWrapper>
);

export const TitleOnly = () => (
  <StoryWrapper>
    <ToastItem type="success" title="Saved!" />
  </StoryWrapper>
);

export const Multiple = () => (
  <StoryWrapper>
    <ToastItem
      type="success"
      title="Issue created"
      message="PROJ-42 has been created."
    />
    <ToastItem
      type="danger"
      title="Upload failed"
      message="File size exceeds the 5MB limit."
    />
    <ToastItem
      type="warning"
      title="Unsaved changes"
      message="You have unsaved changes in this issue."
    />
  </StoryWrapper>
);
