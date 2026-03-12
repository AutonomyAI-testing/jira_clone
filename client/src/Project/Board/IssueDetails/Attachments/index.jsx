import React, { useRef } from 'react';

import { Button } from 'shared/components';

import { AttachmentsContainer, AttachmentButton } from './Styles';

const ProjectBoardIssueDetailsAttachments = () => {
  const fileInputRef = useRef();

  const handleAttachmentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // TODO: Handle file upload
      console.log('Files selected:', files);
    }
    // Reset the input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <AttachmentsContainer>
      <AttachmentButton>
        <Button
          icon="attach"
          variant="empty"
          onClick={handleAttachmentClick}
        >
          Attach files
        </Button>
      </AttachmentButton>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
    </AttachmentsContainer>
  );
};

export default ProjectBoardIssueDetailsAttachments;

