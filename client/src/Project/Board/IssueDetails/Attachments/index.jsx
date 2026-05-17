import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import { Attachments, Title, AttachmentButton } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
};

const ProjectBoardIssueDetailsAttachments = ({ issue }) => {
  // issue prop is passed from parent but not currently used
  // File attachment management will be implemented in a follow-up
  const fileInputRef = useRef(null);

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = event => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // File upload logic will be implemented in a follow-up
      // Currently, this handler is a placeholder for future integration
    }
  };

  return (
    <Attachments>
      <Title>Attachments</Title>
      <AttachmentButton>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Button variant="empty" icon="attach" onClick={handleAttachmentClick}>
          Add attachment
        </Button>
      </AttachmentButton>
    </Attachments>
  );
};

ProjectBoardIssueDetailsAttachments.propTypes = propTypes;

export default ProjectBoardIssueDetailsAttachments;
