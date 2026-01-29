import styled, { css } from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Avatar } from 'shared/components';

export const Comment = styled.div`
  position: relative;
  margin-top: 25px;
  ${font.size(15)}
`;

export const UserAvatar = styled(Avatar)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  padding-left: 44px;
`;

export const Username = styled.div`
  display: inline-block;
  padding-right: 12px;
  padding-bottom: 10px;
  color: ${color.textDark};
  ${font.medium}
`;

export const CreatedAt = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  color: ${color.textDark};
  ${font.size(14.5)}
`;

export const Body = styled.p`
  padding-bottom: 10px;
  white-space: pre-wrap;
`;

const actionLinkStyles = css`
  display: inline-block;
  padding: 2px 0;
  color: ${color.textMedium};
  ${font.size(14.5)}
  ${mixin.clickable}
  &:hover {
    text-decoration: underline;
  }
`;

export const EditLink = styled.div`
  margin-right: 12px;
  ${actionLinkStyles}
`;

export const DeleteLink = styled.div`
  ${actionLinkStyles}
  &:before {
    position: relative;
    right: 6px;
    content: '·';
    display: inline-block;
  }
`;

export const ReplyLink = styled.div`
  ${actionLinkStyles}
  &:before {
    position: relative;
    right: 6px;
    content: '·';
    display: inline-block;
  }
`;

export const Replies = styled.div`
  margin-top: 20px;
`;

export const ReplyItem = styled.div`
  position: relative;
  margin-top: 15px;
  ${font.size(14)}
`;

export const ReplyUserAvatar = styled(Avatar)`
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
`;

export const ReplyContent = styled.div`
  padding-left: 38px;
`;

export const ReplyUsername = styled.div`
  display: inline-block;
  padding-right: 10px;
  padding-bottom: 8px;
  color: ${color.textDark};
  ${font.medium}
  ${font.size(13)}
`;

export const ReplyCreatedAt = styled.div`
  display: inline-block;
  padding-bottom: 8px;
  color: ${color.textMedium};
  ${font.size(13)}
`;

export const ReplyBody = styled.p`
  padding-bottom: 8px;
  white-space: pre-wrap;
  ${font.size(13)}
`;

export const ReplyEditLink = styled.div`
  margin-right: 10px;
  ${actionLinkStyles}
  ${font.size(13)}
`;

export const ReplyDeleteLink = styled.div`
  ${actionLinkStyles}
  ${font.size(13)}
  &:before {
    position: relative;
    right: 6px;
    content: '·';
    display: inline-block;
  }
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  z-index: 10;
`;
