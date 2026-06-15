import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Avatar } from 'shared/components';
import UserMenu from './index';
import {
  Container,
  Trigger,
  Popup,
  PopupContent,
  UserInfo,
  UserName,
  UserEmail,
  Divider,
  MenuItem,
} from './Styles';

const GlobalLinkReset = createGlobalStyle`
  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
`;

const mockUser = {
  id: 1,
  name: 'Lord Gaben',
  email: 'gaben@jira.guest',
  avatarUrl: null,
};

export default {
  title: 'Project/UserMenu',
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/project/avatar']}>
        <GlobalLinkReset />
        <div style={{ padding: '20px', background: '#fff', minWidth: '320px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

// Closed state: just the avatar trigger button visible
export const Closed = {
  name: 'Closed (Default)',
  render: () => <UserMenu />,
};

// Open state: renders the dropdown using the real Styles, always visible
// This directly shows the popup content without needing a simulated click.
export const Open = {
  name: 'Open (Dropdown Visible)',
  render: () => (
    <div style={{ position: 'relative', paddingBottom: '220px' }}>
      <Container>
        <Trigger>
          <Avatar name={mockUser.name} avatarUrl={mockUser.avatarUrl} size={32} />
        </Trigger>
        <Popup>
          <PopupContent>
            <UserInfo>
              <UserName>{mockUser.name}</UserName>
              <UserEmail>{mockUser.email}</UserEmail>
            </UserInfo>
            <Divider />
            <MenuItem as={Link} to="/project/avatar">
              Avatar
            </MenuItem>
          </PopupContent>
        </Popup>
      </Container>
    </div>
  ),
};
