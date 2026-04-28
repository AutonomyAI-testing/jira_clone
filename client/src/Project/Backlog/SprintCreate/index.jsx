import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Modal, Button, Input, Textarea, DatePicker } from 'shared/components';
import api from 'shared/utils/api';
import toast from 'shared/utils/toast';

import { ModalContents, ModalTitle, FormField, FormLabel, Actions } from './Styles';

const propTypes = {
  fetchSprints: PropTypes.func.isRequired,
  addNewSprint: PropTypes.func.isRequired,
};

const SprintCreate = ({ fetchSprints, addNewSprint }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [sprintName, setSprintName] = useState('');
  const [sprintGoal, setSprintGoal] = useState('');
  const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(moment().add(14, 'days').format('YYYY-MM-DD'));

  const handleCreate = async close => {
    if (!sprintName.trim()) {
      toast.error('Sprint name is required');
      return;
    }

    try {
      setIsCreating(true);
      const response = await api.post('/sprints', {
        name: sprintName,
        goal: sprintGoal,
        startDate,
        endDate,
      });
      addNewSprint(response.sprint);
      await fetchSprints();
      toast.success('Sprint created successfully');
      setSprintName('');
      setSprintGoal('');
      setStartDate(moment().format('YYYY-MM-DD'));
      setEndDate(moment().add(14, 'days').format('YYYY-MM-DD'));
      close();
    } catch (error) {
      toast.error(error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Modal
      testid="modal:create-sprint"
      width={500}
      renderLink={modal => (
        <Button variant="primary" onClick={modal.open}>
          Create Sprint
        </Button>
      )}
      renderContent={modal => (
        <ModalContents>
          <ModalTitle>Create Sprint</ModalTitle>

          <FormField>
            <FormLabel>Sprint Name *</FormLabel>
            <Input
              autoFocus
              placeholder="e.g., Sprint 1"
              value={sprintName}
              onChange={setSprintName}
            />
          </FormField>

          <FormField>
            <FormLabel>Sprint Goal</FormLabel>
            <Textarea
              placeholder="What is the goal of this sprint?"
              value={sprintGoal}
              onChange={setSprintGoal}
            />
          </FormField>

          <FormField>
            <FormLabel>Start Date</FormLabel>
            <DatePicker withTime={false} value={startDate} onChange={setStartDate} />
          </FormField>

          <FormField>
            <FormLabel>End Date (2 weeks default)</FormLabel>
            <DatePicker withTime={false} value={endDate} onChange={setEndDate} />
          </FormField>

          <Actions>
            <Button variant="primary" isWorking={isCreating} onClick={() => handleCreate(modal.close)}>
              Create Sprint
            </Button>
            <Button variant="empty" onClick={modal.close}>
              Cancel
            </Button>
          </Actions>
        </ModalContents>
      )}
    />
  );
};

SprintCreate.propTypes = propTypes;

export default SprintCreate;
