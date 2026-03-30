import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { formatDateTimeConversational } from 'shared/utils/dateTime';
import { ConfirmModal } from 'shared/components';
import useCurrentUser from 'shared/hooks/currentUser';

import BodyForm from '../BodyForm';
import {
  Comment,
  UserAvatar,
  Content,
  Username,
  CreatedAt,
  Body,
  EditLink,
  DeleteLink,
  ReplyLink,
  Replies,
  Reply,
} from './Styles';

const propTypes = {
  comment: PropTypes.object.isRequired,
  fetchIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsComment = ({ comment, fetchIssue }) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isUpdating, setUpdating] = useState(false);
  const [body, setBody] = useState(comment.body);
  const [isReplyFormOpen, setReplyFormOpen] = useState(false);
  const [isCreatingReply, setCreatingReply] = useState(false);
  const [replyBody, setReplyBody] = useState('');

  const { currentUser } = useCurrentUser();

  const handleCommentDelete = async () => {
    try {
      await api.delete(`/comments/${comment.id}`);
      await fetchIssue();
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCommentUpdate = async () => {
    try {
      setUpdating(true);
      await api.put(`/comments/${comment.id}`, { body });
      await fetchIssue();
      setUpdating(false);
      setFormOpen(false);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleReplyCreate = async () => {
    try {
      setCreatingReply(true);
      await api.post(`/comments/${comment.id}/replies`, {
        body: replyBody,
        userId: currentUser.id,
      });
      await fetchIssue();
      setReplyBody('');
      setReplyFormOpen(false);
      setCreatingReply(false);
    } catch (error) {
      toast.error(error);
      setCreatingReply(false);
    }
  };

  const handleReplyDelete = async replyId => {
    try {
      await api.delete(`/comments/${comment.id}/replies/${replyId}`);
      await fetchIssue();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Comment data-testid="issue-comment">
      <UserAvatar name={comment.user.name} avatarUrl={comment.user.avatarUrl} />
      <Content>
        <Username>{comment.user.name}</Username>
        <CreatedAt>{formatDateTimeConversational(comment.createdAt)}</CreatedAt>

        {isFormOpen ? (
          <BodyForm
            value={body}
            onChange={setBody}
            isWorking={isUpdating}
            onSubmit={handleCommentUpdate}
            onCancel={() => setFormOpen(false)}
          />
        ) : (
          <Fragment>
            <Body>{comment.body}</Body>
            <EditLink onClick={() => setFormOpen(true)}>Edit</EditLink>
            <ConfirmModal
              title="Are you sure you want to delete this comment?"
              message="Once you delete, it's gone for good."
              confirmText="Delete comment"
              onConfirm={handleCommentDelete}
              renderLink={modal => <DeleteLink onClick={modal.open}>Delete</DeleteLink>}
            />
            <ReplyLink onClick={() => setReplyFormOpen(!isReplyFormOpen)}>Reply</ReplyLink>
          </Fragment>
        )}
      </Content>

      {isReplyFormOpen && (
        <Replies>
          <BodyForm
            value={replyBody}
            onChange={setReplyBody}
            isWorking={isCreatingReply}
            onSubmit={handleReplyCreate}
            onCancel={() => {
              setReplyFormOpen(false);
              setReplyBody('');
            }}
          />
        </Replies>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <Replies>
          {comment.replies.map(reply => (
            <Reply key={reply.id}>
              <UserAvatar name={reply.user.name} avatarUrl={reply.user.avatarUrl} />
              <Content>
                <Username>{reply.user.name}</Username>
                <CreatedAt>{formatDateTimeConversational(reply.createdAt)}</CreatedAt>
                <Body>{reply.body}</Body>
                <ConfirmModal
                  title="Are you sure you want to delete this reply?"
                  message="Once you delete, it's gone for good."
                  confirmText="Delete reply"
                  onConfirm={() => handleReplyDelete(reply.id)}
                  renderLink={modal => <DeleteLink onClick={modal.open}>Delete</DeleteLink>}
                />
              </Content>
            </Reply>
          ))}
        </Replies>
      )}
    </Comment>
  );
};

ProjectBoardIssueDetailsComment.propTypes = propTypes;

export default ProjectBoardIssueDetailsComment;
