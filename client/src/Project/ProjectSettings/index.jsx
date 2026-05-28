import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Breadcrumbs, Icon } from 'shared/components';
import useApi from 'shared/hooks/api';
import browserHistory from '../../browserHistory';

import {
  FormCont,
  SettingsLayout,
  Sidebar,
  NavList,
  NavItem,
  NavItemActive,
  ContentArea,
} from './Styles';
import GeneralSettings from './GeneralSettings';
import Members from './Members';
import DangerZone from './DangerZone';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const SECTIONS = [
  { id: 'general', label: 'General', icon: 'settings' },
  { id: 'members', label: 'Members', icon: 'issues' },
  { id: 'danger-zone', label: 'Danger Zone', icon: 'trash' },
];

const ProjectSettings = ({ project, fetchProject }) => {
  const [activeSection, setActiveSection] = useState('general');
  const [, deleteProject] = useApi.delete('/project/:projectId');

  const handleProjectDelete = () => {
    browserHistory.push('/projects');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'general':
        return <GeneralSettings project={project} fetchProject={fetchProject} />;
      case 'members':
        return <Members project={project} fetchProject={fetchProject} />;
      case 'danger-zone':
        return <DangerZone project={project} onProjectDelete={handleProjectDelete} />;
      default:
        return null;
    }
  };

  return (
    <FormCont>
      <Breadcrumbs items={['Projects', project.name, 'Settings']} />

      <SettingsLayout>
        <Sidebar>
          <NavList>
            {SECTIONS.map(section => {
              const isActive = activeSection === section.id;
              const NavItemComponent = isActive ? NavItemActive : NavItem;

              return (
                <NavItemComponent
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveSection(section.id);
                    }
                  }}
                >
                  <Icon type={section.icon} />
                  <span>{section.label}</span>
                </NavItemComponent>
              );
            })}
          </NavList>
        </Sidebar>

        <ContentArea>{renderSection()}</ContentArea>
      </SettingsLayout>
    </FormCont>
  );
};

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;
