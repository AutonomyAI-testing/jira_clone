import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from './index';
import Avatar from 'shared/components/Avatar';
import UserMenu from './UserMenu';
import { NavbarContainer, UserSection, UserName } from './Styles';

// Create a wrapper component that provides mock data
const NavbarWithMockUser = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const currentUser = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    setIsUserMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <UserSection onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
        <Avatar avatarUrl={currentUser.avatarUrl} name={currentUser.name} size={32} />
        <UserName>{currentUser.name}</UserName>
      </UserSection>

      {isUserMenuOpen && (
        <UserMenu
          user={currentUser}
          onLogout={handleLogout}
          onClose={() => setIsUserMenuOpen(false)}
        />
      )}
    </NavbarContainer>
  );
};

const mockHistory = createMemoryHistory();

export default {
  title: 'App/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <Router history={mockHistory}>
        <Story />
      </Router>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <NavbarWithMockUser />;
Default.storyName = 'Default';

export const MenuOpen = () => {
  const MockNavbarWithOpenMenu = () => {
    const currentUser = {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z',
    };

    const handleLogout = () => {
      console.log('Logout clicked');
    };

    return (
      <NavbarContainer>
        <UserSection style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
          <Avatar avatarUrl={currentUser.avatarUrl} name={currentUser.name} size={32} />
          <UserName>{currentUser.name}</UserName>
        </UserSection>

        <UserMenu
          user={currentUser}
          onLogout={handleLogout}
          onClose={() => console.log('Close menu')}
        />
      </NavbarContainer>
    );
  };

  return <MockNavbarWithOpenMenu />;
};
MenuOpen.storyName = 'Menu Open';
