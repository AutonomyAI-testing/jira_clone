import React from 'react';

import Avatar from './index';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div style={{ padding: 20 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithImage = () => (
  <Avatar avatarUrl="https://i.pravatar.cc/150?img=3" name="Alice" size={32} />
);
WithImage.storyName = 'With Image';

export const WithInitials = () => <Avatar name="Bob" size={32} />;
WithInitials.storyName = 'With Initials';

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    {[24, 32, 40, 56, 80].map(size => (
      <Avatar key={size} name="Charlie" size={size} />
    ))}
  </div>
);

export const AllColorVariants = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank', 'Grace', 'Hank'];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {names.map(name => (
        <Avatar key={name} name={name} size={40} />
      ))}
    </div>
  );
};
AllColorVariants.storyName = 'All Color Variants';

export const Stacked = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'Dave'];
  return (
    <div style={{ display: 'flex' }}>
      {names.map((name, index) => (
        <Avatar
          key={name}
          name={name}
          size={32}
          style={{
            marginLeft: index === 0 ? 0 : -8,
            border: '2px solid #fff',
            boxSizing: 'content-box',
          }}
        />
      ))}
    </div>
  );
};
