import React, { useEffect, useRef } from 'react';

import { projectData } from 'shared/utils/mockData/project';

import ProjectSettings from './index';

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'padded',
  },
};

const noop = () => Promise.resolve();

const Wrapper = ({ children, navLabel }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!navLabel) return;
    const interval = setInterval(() => {
      const items = ref.current && ref.current.querySelectorAll('nav > div');
      if (items && items.length) {
        clearInterval(interval);
        const target = Array.from(items).find(el =>
          el.textContent
            .trim()
            .toLowerCase()
            .includes(navLabel.toLowerCase()),
        );
        if (target) target.click();
      }
    }, 50);
    return () => clearInterval(interval);
  }, [navLabel]);
  return (
    <div ref={ref} style={{ padding: '32px', maxWidth: '900px', margin: '0 auto' }}>
      {children}
    </div>
  );
};

export const General = () => (
  <Wrapper>
    <ProjectSettings project={projectData} fetchProject={noop} />
  </Wrapper>
);

export const Members = () => (
  <Wrapper navLabel="Members">
    <ProjectSettings project={projectData} fetchProject={noop} />
  </Wrapper>
);

export const DangerZone = () => (
  <Wrapper navLabel="Danger">
    <ProjectSettings project={projectData} fetchProject={noop} />
  </Wrapper>
);
