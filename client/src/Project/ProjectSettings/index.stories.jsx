import React from 'react';
import ProjectSettings from './index';
import { projectData } from 'shared/utils/mockData/project';

export default {
  title: 'Project/ProjectSettings',
  component: ProjectSettings,
  parameters: {
    layout: 'fullscreen',
  },
};

// Helper component that auto-clicks a tab button by label
// Used for stories that show non-default tabs
const TabWrapper = ({ tabLabel, children }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) {
      const buttons = ref.current.querySelectorAll('button');
      for (const btn of buttons) {
        if (btn.textContent.trim() === tabLabel) {
          btn.click();
          break;
        }
      }
    }
  }, [tabLabel]);
  return <div ref={ref}>{children}</div>;
};

export const GeneralTab = {
  name: 'General Tab',
  render: () => <ProjectSettings project={projectData} fetchProject={() => Promise.resolve()} />,
};

export const MembersTab = {
  name: 'Members Tab',
  render: () => (
    <TabWrapper tabLabel="Members">
      <ProjectSettings project={projectData} fetchProject={() => Promise.resolve()} />
    </TabWrapper>
  ),
};

export const SecurityTab = {
  name: 'Security Tab',
  render: () => (
    <TabWrapper tabLabel="Security">
      <ProjectSettings project={projectData} fetchProject={() => Promise.resolve()} />
    </TabWrapper>
  ),
};

export const DangerZoneTab = {
  name: 'Danger Zone Tab',
  render: () => (
    <TabWrapper tabLabel="Danger Zone">
      <ProjectSettings project={projectData} fetchProject={() => Promise.resolve()} />
    </TabWrapper>
  ),
};
