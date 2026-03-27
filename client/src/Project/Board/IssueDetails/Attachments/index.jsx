import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import { Attachments, Title, AttachmentButton, AttachmentList, AttachmentItem, FileName, RemoveButton } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
};

const ProjectBoardIssueDetailsAttachments = ({ issue }) => {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = event => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files).map((file, index) => ({
        id: `${Date.now()}_${index}`,
        name: file.name,
        size: file.size,
        file,
      }));
      setSelectedFiles(prev => [...prev, ...fileArray]);
      // TODO: Handle file upload logic here
      console.log('Files selected:', fileArray);
    }
  };

  const handleRemoveFile = fileId => {
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
              <RemoveButton onClick={() => handleRemoveFile(file.id)}>×</RemoveButton>
            </AttachmentItem>
          ))}
        </AttachmentList>
      )}
    </Attachments>
  );
};

ProjectBoardIssueDetailsAttachments.propTypes = propTypes;

export default ProjectBoardIssueDetailsAttachments;
