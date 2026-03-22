import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, mixin } from 'shared/utils/styles';
import { Avatar, Textarea } from 'shared/components';

export const IssueLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
`;

export const Issue = styled.div`
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  ${props => !props.isEditing && mixin.clickable}
  @media (max-width: 1100px) {
    padding: 10px 8px;
  }
  &:hover {
    background: ${props => (props.isEditing ? '#fff' : color.backgroundLight)};
  }
  ${props =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
  ${props =>
    props.isEditing &&
    css`
      padding: 12px;
      box-shadow: 0px 4px 12px 0px rgba(9, 30, 66, 0.15);
    `}
`;

export const Title = styled.p`
  padding-bottom: 11px;
  ${font.size(15)}
  @media (max-width: 1100px) {
    ${font.size(14.5)}
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Assignees = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: 2px;
`;

export const AssigneeAvatar = styled(Avatar)`
  margin-left: -2px;
  box-shadow: 0 0 0 2px #fff;
`;

export const EditMode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EditTitle = styled(Textarea)`
  ${font.size(15)}
  font-weight: 500;
  padding: 8px;
  border: 1px solid ${color.borderLightest};
  border-radius: 3px;
  resize: none;
  &:focus {
    border-color: ${color.borderInputFocus};
  }
`;

export const EditDescription = styled.div`
  margin-top: 4px;
`;

export const EditRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const EditLabel = styled.label`
  ${font.size(12.5)}
  font-weight: 500;
  color: ${color.textMedium};
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 4px;
`;

export const SaveButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  background: ${color.primary};
  color: #fff;
  ${font.size(14)}
  font-weight: 500;
  ${mixin.clickable}
  &:hover {
    background: ${color.primaryDark};
  }
`;

export const CancelButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  background: ${color.backgroundMedium};
  color: ${color.textDark};
  ${font.size(14)}
  ${mixin.clickable}
  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const DescriptionPreview = styled.div`
  ${font.size(13)}
  color: ${color.textMedium};
  margin-top: 4px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
