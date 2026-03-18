import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  StyledImageUpload,
  UploadArea,
  PreviewImage,
  PlaceholderCircle,
  UploadLabel,
  UploadButton,
  HiddenFileInput,
  RemoveButton,
} from './Styles';

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  invalid: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  value: undefined,
  invalid: false,
  onChange: () => {},
  name: undefined,
};

const ImageUpload = ({ className, value, invalid, onChange, name, ...otherProps }) => {
  const [preview, setPreview] = useState(value || '');
  const fileInputRef = useRef(null);

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setPreview(base64String);
        onChange(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = event => {
    event.preventDefault();
    event.stopPropagation();
    setPreview('');
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <StyledImageUpload className={className} invalid={invalid}>
      <UploadArea hasPreview={!!preview}>
        {preview ? (
          <PreviewImage src={preview} alt="Profile preview" />
        ) : (
          <PlaceholderCircle>
            <span>?</span>
          </PlaceholderCircle>
        )}
      </UploadArea>
      <UploadLabel>
        {preview ? 'Change profile picture' : 'Upload profile picture'}
      </UploadLabel>
      <UploadButton type="button" onClick={handleUploadClick}>
        Choose file
      </UploadButton>
      {preview && (
        <RemoveButton type="button" onClick={handleRemove}>
          Remove
        </RemoveButton>
      )}
      <HiddenFileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        name={name}
        {...otherProps}
      />
    </StyledImageUpload>
  );
};

ImageUpload.propTypes = propTypes;
ImageUpload.defaultProps = defaultProps;

export default ImageUpload;
