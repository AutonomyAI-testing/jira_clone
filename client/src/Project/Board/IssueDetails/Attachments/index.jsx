import React, { Fragment, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import {
  Title,
  UploadArea,
  UploadText,
  AttachmentList,
  AttachmentItem,
  AttachmentPreview,
  AttachmentInfo,
  AttachmentName,
  AttachmentSize,
  RemoveButton,
  UploadButton,
} from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsAttachments = ({ issue, updateIssue }) => {
  const [attachments, setAttachments] = useState(issue.attachments || []);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = files => {
    const newAttachments = Array.from(files).map(file => ({
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
      file,
    }));

    const updatedAttachments = [...attachments, ...newAttachments];
    setAttachments(updatedAttachments);
    updateIssue({ attachments: updatedAttachments });
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDragging(false);
    
    const { files } = e.dataTransfer;
    if (files.length > 0) {
      handleFileSelect(files);
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileInputChange = e => {
    const { files } = e.target;
    if (files.length > 0) {
      handleFileSelect(files);
    }
  };

  const handleRemoveAttachment = attachmentId => {
    const updatedAttachments = attachments.filter(att => att.id !== attachmentId);
    setAttachments(updatedAttachments);
    updateIssue({ attachments: updatedAttachments });
  };

  const handleChooseFiles = () => {
    fileInputRef.current.click();
  };

  const formatFileSize = bytes => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Math.round((bytes / k ** i) * 100) / 100} ${sizes[i]}`;
  };

  const isImage = type => type.startsWith('image/');

  return (
    <Fragment>
      <Title>Attachments</Title>
      
      <UploadArea
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        isDragging={isDragging}
      >
        <UploadText>
          Drag and drop screenshots or files here, or
        </UploadText>
        <UploadButton>
          <Button icon="attach" variant="secondary" onClick={handleChooseFiles}>
            Choose files
          </Button>
        </UploadButton>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.pdf,.doc,.docx,.txt"
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
        />
      </UploadArea>

      {attachments.length > 0 && (
        <AttachmentList>
          {attachments.map(attachment => (
            <AttachmentItem key={attachment.id}>
              {isImage(attachment.type) ? (
                <AttachmentPreview src={attachment.url} alt={attachment.name} />
              ) : (
                <AttachmentPreview as="div">
                  {attachment.name.split('.').pop().toUpperCase()}
                </AttachmentPreview>
              )}
              <AttachmentInfo>
                <AttachmentName>{attachment.name}</AttachmentName>
                <AttachmentSize>{formatFileSize(attachment.size)}</AttachmentSize>
              </AttachmentInfo>
              <RemoveButton onClick={() => handleRemoveAttachment(attachment.id)}>
                <Button icon="close" iconSize={16} variant="empty" />
              </RemoveButton>
            </AttachmentItem>
          ))}
        </AttachmentList>
      )}
    </Fragment>
  );
};

ProjectBoardIssueDetailsAttachments.propTypes = propTypes;

export default ProjectBoardIssueDetailsAttachments;
