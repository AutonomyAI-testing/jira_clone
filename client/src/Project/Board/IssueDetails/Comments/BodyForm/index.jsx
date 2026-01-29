import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';

import MentionTextarea from '../MentionTextarea';

import { Actions, FormButton, CharacterCount } from './Styles';

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

  const maxLength = 5000;
  const charCount = value.length;
  const isNearLimit = charCount > maxLength * 0.9;
  const isOverLimit = charCount > maxLength;

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <FormButton variant="primary" isWorking={isWorking} onClick={handleSubmit} disabled={isOverLimit}>
            Save
          </FormButton>
          <FormButton variant="empty" onClick={onCancel}>
            Cancel
          </FormButton>
        </div>
        <CharacterCount isNearLimit={isNearLimit} isOverLimit={isOverLimit}>
          {charCount} / {maxLength}
        </CharacterCount>
      </Actions>
    </Fragment>
  );
};

ProjectBoardIssueDetailsCommentsBodyForm.propTypes = propTypes;

export default ProjectBoardIssueDetailsCommentsBodyForm;
