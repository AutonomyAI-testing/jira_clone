import React, { useRef, useState } from 'react';

import { Button } from 'shared/components';

import { Attachments, Title, AttachmentButton, AttachmentList, AttachmentItem, FileName, RemoveButton } from './Styles';

/**
 * ProjectBoardIssueDetailsAttachments renders an attachments section for an issue.
 * Allows users to select and manage file attachments with visual feedback.
 * File upload to server is handled separately and can be integrated as needed.
 */
const ProjectBoardIssueDetailsAttachments = () => {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Trigger hidden file input when "Add attachment" button is clicked
  const handleAttachmentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Process selected files and add them to the list
  const handleFileChange = (event) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const fileArray = Array.from(files).map((file, index) => ({
        id: `${Date.now()}_${index}`,
        name: file.name,
        size: file.size,
        file,
      }));
      setSelectedFiles(prev => [...prev, ...fileArray]);
      // File upload integration will be implemented in a follow-up
    }
  };

  // Remove file from selected files list
  const handleRemoveFile = (fileId) => {
    setSelectedFiles(prev => prev.filter(file => file.id !== fileId));
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
      {selectedFiles.length > 0 && (
        <AttachmentList>
          {selectedFiles.map(file => (
            <AttachmentItem key={file.id}>
              <FileName>{file.name}</FileName>
              <RemoveButton
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={() => handleRemoveFile(file.id)}
              >
                ×
              </RemoveButton>
            </AttachmentItem>
          ))}
        </AttachmentList>
      )}
    </Attachments>
  );
};

export default ProjectBoardIssueDetailsAttachments;
