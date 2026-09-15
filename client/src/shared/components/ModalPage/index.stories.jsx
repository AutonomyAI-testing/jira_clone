import React, { useState } from 'react';

import ModalPage from './index';

export default {
  title: 'Components/ModalPage',
  component: ModalPage,
};

// Shared template for all stories - manages local open state
const Template = args => {
  const [isOpen, setIsOpen] = useState(true);

  return <ModalPage {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

// Basic info modal with single primary action
export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to the Project Board',
  description: 'This is a simple informational modal. Click the button below to get started.',
  primaryAction: {
    label: 'Get Started',
    onClick: () => alert('Primary action clicked!'),
  },
};

// Modal with image header and multiple actions
export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Feature Announcement',
  description: 'Check out our new Gantt chart view to visualize your project timeline.',
  imageUrl:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="200" style="background:%230052cc"><text x="50%" y="50%" fill="white" font-size="24" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle">Gantt Chart</text></svg>',
  primaryAction: {
    label: 'Try It Out',
    onClick: () => alert('Try it out!'),
  },
  secondaryAction: {
    label: 'Learn More',
    onClick: () => alert('Learn more!'),
  },
};

// Success variant with green accent color
export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'Issue Created Successfully!',
  description:
    'Your task has been added to the board and is ready for the team to start working on it.',
  primaryAction: {
    label: 'View Issue',
    onClick: () => alert('Viewing issue...'),
  },
  secondaryAction: {
    label: 'Create Another',
    onClick: () => alert('Create another...'),
  },
};

// Empty state variant for showing no results
export const Empty = Template.bind({});
Empty.args = {
  variant: 'empty',
  title: 'No Issues Found',
  description: 'Create your first issue to get started.',
  primaryAction: {
    label: 'Create Issue',
    onClick: () => alert('Creating issue...'),
  },
};

// Modal with all three action types (tertiary, secondary, primary)
export const WithAllActions = Template.bind({});
WithAllActions.args = {
  title: 'Confirm This Action',
  description: 'This action will update all selected items. Are you sure you want to continue?',
  tertiaryAction: {
    label: 'Cancel',
    onClick: () => alert('Cancelled!'),
  },
  secondaryAction: {
    label: 'Skip for Now',
    onClick: () => alert('Skipped!'),
  },
  primaryAction: {
    label: 'Confirm',
    onClick: () => alert('Confirmed!'),
  },
};

// Modal with loading state on primary button
export const Loading = Template.bind({});
Loading.args = {
  title: 'Processing Your Request',
  description: 'Please wait while we save your changes.',
  primaryAction: {
    label: 'Save',
    onClick: () => alert('Saving...'),
    isLoading: true,
  },
};

// Warning variant with orange accent color
export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'Important Information',
  description:
    'This is a warning message that requires your attention. Please review carefully before proceeding.',
  primaryAction: {
    label: 'Acknowledge',
    onClick: () => alert('Acknowledged!'),
  },
  secondaryAction: {
    label: 'Learn More',
    onClick: () => alert('Learning more...'),
  },
};

// Modal demonstrating custom React element rendering via children prop
export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  title: 'Custom Content Example',
  description: 'You can also pass custom React elements as children:',
  children: (
    <div
      style={{ margin: '12px 0', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}
    >
      <p style={{ margin: 0, fontSize: '14px' }}>
        <strong>This is custom content.</strong> You can put any React elements here, including
        lists, tables, or other components.
      </p>
    </div>
  ),
  primaryAction: {
    label: 'Got It',
    onClick: () => alert('Understood!'),
  },
};
