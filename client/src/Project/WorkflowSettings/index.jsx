import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Breadcrumbs } from 'shared/components';

import ColumnEditor from './ColumnEditor';
import TransitionMatrix from './TransitionMatrix';
import TransitionDiagram from './TransitionDiagram';
import { Container, Header, Section, SectionTitle } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const WorkflowSettings = ({ project, fetchProject }) => {
  const [{ isUpdating }, updateWorkflow] = useApi.put('/project/workflow');
  const [localWorkflow, setLocalWorkflow] = useState(
    project.workflow || { columns: [], transitions: {} },
  );

  const handleUpdateWorkflow = async updatedFields => {
    const newWorkflow = { ...localWorkflow, ...updatedFields };
    setLocalWorkflow(newWorkflow);

    try {
      await updateWorkflow(newWorkflow);
      await fetchProject();
      toast.success('Workflow updated successfully');
    } catch (error) {
      toast.error(error);
      // Revert on error
      setLocalWorkflow(project.workflow || { columns: [], transitions: {} });
    }
  };

  const handleColumnsChange = newColumns => {
    handleUpdateWorkflow({ columns: newColumns });
  };

  const handleTransitionsChange = newTransitions => {
    handleUpdateWorkflow({ transitions: newTransitions });
  };

  return (
    <Container>
      <Breadcrumbs items={['Projects', project.name, 'Workflow Settings']} />
      <Header>Workflow Settings</Header>

      <Section>
        <SectionTitle>Board Columns</SectionTitle>
        <ColumnEditor
          columns={localWorkflow.columns}
          onChange={handleColumnsChange}
          isUpdating={isUpdating}
        />
      </Section>

      <Section>
        <SectionTitle>Transition Rules</SectionTitle>
        <TransitionMatrix
          columns={localWorkflow.columns}
          transitions={localWorkflow.transitions}
          onChange={handleTransitionsChange}
        />
        <TransitionDiagram
          columns={localWorkflow.columns}
          transitions={localWorkflow.transitions}
        />
      </Section>
    </Container>
  );
};

WorkflowSettings.propTypes = propTypes;

export default WorkflowSettings;
