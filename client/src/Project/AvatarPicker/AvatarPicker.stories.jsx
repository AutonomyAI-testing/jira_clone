import React, { useState } from 'react';

import AvatarPicker from './index';

export default {
  title: 'Project/AvatarPicker',
  component: AvatarPicker,
  parameters: {
    layout: 'centered',
  },
};

// Wrapper component to demonstrate the AvatarPicker with persistent state
// This allows us to see the selected avatar change and the preview update in Storybook
const AvatarPickerWrapper = ({ initialAvatarUrl }) => {
  const [savedUrl, setSavedUrl] = useState(initialAvatarUrl || null);
  return (
    <div
      style={{
        width: 560,
        maxHeight: '90vh',
        overflowY: 'auto',
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      }}
    >
      <AvatarPicker
        currentAvatarUrl={savedUrl}
        onSave={async url => {
          setSavedUrl(url);
        }}
        modalClose={() => {}}
      />
    </div>
  );
};

export const OpenWithGrid = {
  name: 'Open — Avatar Grid',
  render: () => (
    <AvatarPickerWrapper initialAvatarUrl="https://api.dicebear.com/7.x/bottts/svg?seed=wizard&backgroundColor=0047AB" />
  ),
};

export const NoSelection = {
  name: 'Default (first avatar selected)',
  render: () => <AvatarPickerWrapper initialAvatarUrl={null} />,
};
