import React from 'react';

import UserProfile from './index';
import NavbarLeft from '../NavbarLeft';

export default {
  title: 'Project/UserProfile',
  parameters: {
    layout: 'padded',
  },
};

export const ProfileSettings = {
  name: 'Profile Settings',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <style>{`
        /* Reset any aside overrides from other stories */
        aside {
          position: fixed !important;
          height: 100vh !important;
          width: 64px !important;
          box-shadow: none !important;
        }
        aside [class*="jftKLf"], aside [class*="hEsumM"] {
          visibility: hidden !important;
          opacity: 0 !important;
        }
      `}</style>
      <div
        style={{ display: 'flex', minHeight: '520px', background: '#f4f5f7', position: 'relative' }}
      >
        <div style={{ width: '64px', flexShrink: 0 }}>
          <NavbarLeft issueSearchModalOpen={() => {}} issueCreateModalOpen={() => {}} />
        </div>
        <div style={{ padding: '40px', flex: 1 }}>
          <UserProfile />
        </div>
      </div>
    </>
  ),
};

export const NavbarWithMyProfile = {
  name: 'NavbarLeft with My Profile',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <>
      <style>{`
        /* Override NavbarLeft fixed positioning and force expanded state */
        aside {
          position: relative !important;
          height: 600px !important;
          width: 200px !important;
          box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6) !important;
          flex-shrink: 0 !important;
        }
        /* Force item text visible (normally only on hover) */
        aside [class*="jftKLf"], aside [class*="hEsumM"] {
          visibility: visible !important;
          opacity: 1 !important;
          right: 0 !important;
        }
      `}</style>
      <div
        style={{ display: 'flex', minHeight: '600px', background: '#f4f5f7', overflow: 'hidden' }}
      >
        <NavbarLeft issueSearchModalOpen={() => {}} issueCreateModalOpen={() => {}} />
        <div style={{ padding: '40px', flex: 1, minWidth: 0 }}>
          <UserProfile />
        </div>
      </div>
    </>
  ),
};
