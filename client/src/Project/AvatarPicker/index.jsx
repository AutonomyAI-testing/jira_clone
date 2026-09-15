import React, { useState } from 'react';
import PropTypes from 'prop-types';

import toast from 'shared/utils/toast';
import { Button } from 'shared/components';
import { avatars } from './avatarData';
import {
  Container,
  Title,
  Grid,
  GridItem,
  PreviewPanel,
  PreviewAvatarWrapper,
  PreviewInfo,
  PreviewName,
  PreviewDescription,
  Actions,
  ActionButton,
} from './Styles';

const propTypes = {
  currentAvatarUrl: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

const defaultProps = {
  currentAvatarUrl: null,
};

const AvatarPicker = ({ currentAvatarUrl, onSave, modalClose }) => {
  // Find the avatar matching the current URL, or default to the first avatar
  // This ensures we always have a valid selection even if currentAvatarUrl doesn't match any avatar
  const getInitialAvatar = () => {
    const found = avatars.find(a => a.avatarUrl === currentAvatarUrl);
    return found || avatars[0];
  };

  const [selectedAvatar, setSelectedAvatar] = useState(getInitialAvatar());
  const [isLoading, setIsLoading] = useState(false);

  // Update the selected avatar and preview
  const handleAvatarSelect = avatar => {
    setSelectedAvatar(avatar);
  };

  // Save the selected avatar and close the modal
  // Shows a success toast on completion, or error toast if the save fails
  const handleSave = async () => {
    try {
      setIsLoading(true);
      await onSave(selectedAvatar.avatarUrl);
      toast.success('Avatar updated successfully');
      modalClose();
    } catch (err) {
      toast.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Close the modal without saving
  const handleCancel = () => {
    modalClose();
  };

  return (
    <Container>
      <Title>Choose your avatar</Title>

      <Grid>
        {avatars.map(avatar => (
          <GridItem
            key={avatar.id}
            isSelected={selectedAvatar.id === avatar.id}
            onClick={() => handleAvatarSelect(avatar)}
          >
            <img src={avatar.avatarUrl} alt={avatar.name} />
          </GridItem>
        ))}
      </Grid>

      <PreviewPanel>
        <PreviewAvatarWrapper>
          <img src={selectedAvatar.avatarUrl} alt={selectedAvatar.name} />
        </PreviewAvatarWrapper>
        <PreviewInfo>
          <PreviewName>{selectedAvatar.name}</PreviewName>
          <PreviewDescription>{selectedAvatar.description}</PreviewDescription>
        </PreviewInfo>
      </PreviewPanel>

      <Actions>
        <ActionButton variant="secondary" onClick={handleCancel}>
          Cancel
        </ActionButton>
        <ActionButton variant="primary" onClick={handleSave} isWorking={isLoading}>
          Save Avatar
        </ActionButton>
      </Actions>
    </Container>
  );
};

AvatarPicker.propTypes = propTypes;
AvatarPicker.defaultProps = defaultProps;

export default AvatarPicker;
