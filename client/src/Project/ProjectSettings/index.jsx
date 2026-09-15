import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Breadcrumbs } from 'shared/components';

import ProjectSettingsGeneral from './General';
import ProjectSettingsMembers from './Members';
import ProjectSettingsSecurity from './Security';
import ProjectSettingsDangerZone from './DangerZone';
import {
  PageContainer,
  TabsContainer,
  TabButton,
  TabContent,
  FormCont,
  FormHeading,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const TAB_GENERAL = 'general';
const TAB_MEMBERS = 'members';
const TAB_SECURITY = 'security';
const TAB_DANGER = 'danger';

const TABS = [
  { key: TAB_GENERAL, label: 'General' },
  { key: TAB_MEMBERS, label: 'Members' },
  { key: TAB_SECURITY, label: 'Security' },
  { key: TAB_DANGER, label: 'Danger Zone' },
];

const ProjectSettings = ({ project, fetchProject }) => {
  const [activeTab, setActiveTab] = useState(TAB_GENERAL);

  // Switch statement allows different props to be passed to each tab component
  // (e.g., General and DangerZone receive fetchProject, but Members and Security don't)
  const renderTabContent = () => {
    switch (activeTab) {
      case TAB_GENERAL:
        return <ProjectSettingsGeneral project={project} fetchProject={fetchProject} />;
      case TAB_MEMBERS:
        return <ProjectSettingsMembers project={project} />;
      case TAB_SECURITY:
        return <ProjectSettingsSecurity />;
      case TAB_DANGER:
        return <ProjectSettingsDangerZone project={project} />;
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <FormCont>
        <FormHeading>Project Settings</FormHeading>
        <Breadcrumbs items={['Projects', project.name, 'Settings']} />

        <TabsContainer>
          {TABS.map(tab => (
            <TabButton
              key={tab.key}
              isActive={activeTab === tab.key}
              isDanger={tab.key === TAB_DANGER}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabsContainer>

        <TabContent>{renderTabContent()}</TabContent>
      </FormCont>
    </PageContainer>
  );
};

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;
