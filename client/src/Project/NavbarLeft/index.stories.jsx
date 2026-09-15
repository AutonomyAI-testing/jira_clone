import React, { useEffect } from 'react';

import ProjectNavbarLeft from './index';

export default {
  title: 'Project/NavbarLeft',
  component: ProjectNavbarLeft,
  parameters: {
    layout: 'fullscreen',
  },
};

const noop = () => {};

// Default navbar state — shows compact sidebar with avatar at bottom
export const Default = {
  name: 'Default',
  render: () => (
    <div data-story="navbarleft-default" style={{ background: '#f4f5f7', minHeight: '500px' }}>
      <style>{`
        [data-story="navbarleft-default"] aside {
          position: relative !important;
          height: 500px !important;
          width: 64px !important;
        }
        [data-story="navbarleft-default"] aside > div:last-child {
          position: relative !important;
          bottom: auto !important;
          margin-top: 20px !important;
        }
      `}</style>
      <ProjectNavbarLeft
        issueSearchModalOpen={noop}
        issueCreateModalOpen={noop}
      />
    </div>
  ),
};

// Navbar with user menu dropdown open
export const WithMenuOpen = {
  name: 'With User Menu Open',
  render: () => <NavbarWithMenuOpen />,
};

// Wrapper component that opens the user menu dropdown on mount
const NavbarWithMenuOpen = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const navButtons = document.querySelectorAll('[data-story="navbarleft-menu-open"] aside button');
      if (navButtons.length > 0) {
        navButtons[0].click();
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div data-story="navbarleft-menu-open" style={{ background: '#f4f5f7', minHeight: '500px' }}>
      <style>{`
        [data-story="navbarleft-menu-open"] aside {
          position: relative !important;
          height: 500px !important;
          width: 200px !important;
        }
        [data-story="navbarleft-menu-open"] aside > div:last-child {
          position: relative !important;
          bottom: auto !important;
          margin-top: 20px !important;
        }
      `}</style>
      <ProjectNavbarLeft
        issueSearchModalOpen={noop}
        issueCreateModalOpen={noop}
      />
    </div>
  );
};
