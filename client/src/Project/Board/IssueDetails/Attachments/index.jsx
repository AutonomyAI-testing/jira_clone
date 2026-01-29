import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import { Attachments, Title, AttachmentList, AttachmentItem, AttachmentInfo, AttachmentName, AttachmentSize, RemoveButton } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsAttachments = ({ issue, updateIssue }) => {
  const [attachments, setAttachments] = useState(issue.attachments || []);
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const formatFileSize = bytes => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Math.round((bytes / k ** i) * 100) / 100} ${sizes[i]}`;
  };

  const handleFileChange = event => {
    const files = Array.from(event.target.files || []);

    const newAttachments = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      createdAt: new Date().toISOString(),
    }));

    const updatedAttachments = [...attachments, ...newAttachments];
    setAttachments(updatedAttachments);
    updateIssue({ attachments: updatedAttachments });

    // Reset input
    event.target.value = '';
  };

  const handleRemoveAttachment = attachmentId => {
    const updatedAttachments = attachments.filter(att => att.id !== attachmentId);
    setAttachments(updatedAttachments);
    updateIssue({ attachments: updatedAttachments });
  };

  return (
    <Attachments>
      <Title>Attachments</Title>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Button icon="attach" variant="secondary" onClick={handleFileSelect}>
        Attach files
      </Button>

      {attachments.length > 0 && (
        <AttachmentList>
          {attachments.map(attachment => (
            <AttachmentItem key={attachment.id}>
              <AttachmentInfo>
                <AttachmentName>{attachment.name}</AttachmentName>
                <AttachmentSize>{formatFileSize(attachment.size)}</AttachmentSize>
              </AttachmentInfo>
              <RemoveButton onClick={() => handleRemoveAttachment(attachment.id)}>
                Remove
              </RemoveButton>
            </AttachmentItem>
          ))}
        </AttachmentList>
      )}
    </Attachments>
  );
};

ProjectBoardIssueDetailsAttachments.propTypes = propTypes;

export default ProjectBoardIssueDetailsAttachments;
