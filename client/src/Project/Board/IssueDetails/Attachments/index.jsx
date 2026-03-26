import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import { Attachments, Title, AttachmentButton } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
};

const ProjectBoardIssueDetailsAttachments = ({ issue }) => {
  const fileInputRef = useRef(null);

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = event => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // TODO: Handle file upload logic here
      console.log('Files selected:', files);
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
