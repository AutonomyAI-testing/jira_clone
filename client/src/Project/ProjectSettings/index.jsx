import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Breadcrumbs } from 'shared/components';

import GeneralTab from './GeneralTab';
import MembersTab from './MembersTab';
import DangerZone from './DangerZone';
import { Cont, Header, TabsNav, TabNavItem, TabContent } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const ProjectSettings = ({ project, fetchProject }) => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <Cont>
      <Breadcrumbs items={['Projects', project.name, 'Settings']} />
      <Header>Project Settings</Header>

      <TabsNav>
        <TabNavItem isActive={activeTab === 'general'} onClick={() => setActiveTab('general')}>
          General
        </TabNavItem>
        <TabNavItem isActive={activeTab === 'members'} onClick={() => setActiveTab('members')}>
          Members
        </TabNavItem>
      </TabsNav>

      <TabContent>
        {activeTab === 'general' && <GeneralTab project={project} fetchProject={fetchProject} />}
        {activeTab === 'members' && <MembersTab project={project} />}
      </TabContent>

      <DangerZone project={project} />
    </Cont>
  );
};

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;
