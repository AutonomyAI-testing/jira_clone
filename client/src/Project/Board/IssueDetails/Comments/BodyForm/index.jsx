import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';

import MentionTextarea from '../MentionTextarea';

import { Actions, FormButton } from './Styles';

const propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isWorking: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  projectUsers: PropTypes.array.isRequired,
};

const ProjectBoardIssueDetailsCommentsBodyForm = ({
  value,
  onChange,
  isWorking,
  onSubmit,
  onCancel,
  projectUsers,
}) => {
  const $textareaRef = useRef();

  const handleSubmit = () => {
    if ($textareaRef.current.value.trim()) {
      onSubmit();
    }
  };

  return (
    <Fragment>
      <MentionTextarea
        autoFocus
        placeholder="Add a comment..."
        value={value}
        onChange={onChange}
        ref={$textareaRef}
        projectUsers={projectUsers}
      />
      <Actions>
        <FormButton variant="primary" isWorking={isWorking} onClick={handleSubmit}>
          Save
        </FormButton>
        <FormButton variant="empty" onClick={onCancel}>
          Cancel
        </FormButton>
      </Actions>
    </Fragment>
  );
};

ProjectBoardIssueDetailsCommentsBodyForm.propTypes = propTypes;

export default ProjectBoardIssueDetailsCommentsBodyForm;
