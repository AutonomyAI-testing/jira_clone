import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'shared/components';
import { AvatarCardWrap, AvatarCardLabel } from './Styles';

const propTypes = {
  avatar: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const AvatarCard = ({ avatar, isSelected, onSelect }) => (
  <AvatarCardWrap isSelected={isSelected} onClick={onSelect}>
    <Avatar avatarUrl={avatar.url} name={avatar.label} size={72} />
    <AvatarCardLabel>{avatar.label}</AvatarCardLabel>
  </AvatarCardWrap>
);

AvatarCard.propTypes = propTypes;

export default AvatarCard;
