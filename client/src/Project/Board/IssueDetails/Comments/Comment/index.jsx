import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { formatDateTimeConversational } from 'shared/utils/dateTime';
import { ConfirmModal, Spinner } from 'shared/components';

import BodyForm from '../BodyForm';
import Reply from '../Reply';
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
  LoadingOverlay,
  ReplyItem,
  ReplyUserAvatar,
  ReplyContent,
  ReplyUsername,
  ReplyCreatedAt,
  ReplyBody,
  ReplyEditLink,
  ReplyDeleteLink,
} from './Styles';

const propTypes = {
  comment: PropTypes.object.isRequired,
  fetchIssue: PropTypes.func.isRequired,
  projectUsers: PropTypes.array.isRequired,
};

const ProjectBoardIssueDetailsComment = ({ comment, fetchIssue, projectUsers }) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isUpdating, setUpdating] = useState(false);
  const [body, setBody] = useState(comment.body);
  const [isReplyOpen, setReplyOpen] = useState(false);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [replyBodies, setReplyBodies] = useState({});

  const handleCommentDelete = async () => {
    try {
      setUpdating(true);
      await api.delete(`/comments/${comment.id}`);
      await fetchIssue();
      setUpdating(false);
      toast.success('Comment deleted successfully');
    } catch (error) {
      setUpdating(false);
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
      toast.success('Comment updated successfully');
    } catch (error) {
      setUpdating(false);
      toast.error(error);
    }
  };

  const handleReplyDelete = async (replyId) => {
    try {
      setUpdating(true);
      await api.delete(`/comments/${comment.id}/replies/${replyId}`);
      await fetchIssue();
      setUpdating(false);
      toast.success('Reply deleted successfully');
    } catch (error) {
      setUpdating(false);
      toast.error(error);
    }
  };

  const handleReplyUpdate = async (replyId) => {
    try {
      setUpdating(true);
      await api.put(`/comments/${comment.id}/replies/${replyId}`, { body: replyBodies[replyId] });
      await fetchIssue();
      setUpdating(false);
      setEditingReplyId(null);
      toast.success('Reply updated successfully');
    } catch (error) {
      setUpdating(false);
      toast.error(error);
    }
  };

  const startEditingReply = (replyId, replyBody) => {
    setEditingReplyId(replyId);
    setReplyBodies({ ...replyBodies, [replyId]: replyBody });
  };

  return (
    <Comment data-testid="issue-comment" style={{ position: 'relative' }}>
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
            projectUsers={projectUsers}
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
            <ReplyLink onClick={() => setReplyOpen(!isReplyOpen)}>Reply</ReplyLink>
          </Fragment>
        )}

        {isReplyOpen && (
          <Reply
            commentId={comment.id}
            fetchIssue={fetchIssue}
            projectUsers={projectUsers}
            onCancel={() => setReplyOpen(false)}
          />
        )}

        {comment.replies && comment.replies.length > 0 && (
          <Replies>
            {comment.replies.map(reply => (
              <ReplyItem key={reply.id}>
                <ReplyUserAvatar name={reply.user.name} avatarUrl={reply.user.avatarUrl} />
                <ReplyContent>
                  <ReplyUsername>{reply.user.name}</ReplyUsername>
                  <ReplyCreatedAt>{formatDateTimeConversational(reply.createdAt)}</ReplyCreatedAt>

                  {editingReplyId === reply.id ? (
                    <BodyForm
                      value={replyBodies[reply.id]}
                      onChange={(value) => setReplyBodies({ ...replyBodies, [reply.id]: value })}
                      isWorking={isUpdating}
                      onSubmit={() => handleReplyUpdate(reply.id)}
                      onCancel={() => setEditingReplyId(null)}
                      projectUsers={projectUsers}
                    />
                  ) : (
                    <Fragment>
                      <ReplyBody>{reply.body}</ReplyBody>
                      <ReplyEditLink onClick={() => startEditingReply(reply.id, reply.body)}>
                        Edit
                      </ReplyEditLink>
                      <ConfirmModal
                        title="Are you sure you want to delete this reply?"
                        message="Once you delete, it's gone for good."
                        confirmText="Delete reply"
                        onConfirm={() => handleReplyDelete(reply.id)}
                        renderLink={modal => <ReplyDeleteLink onClick={modal.open}>Delete</ReplyDeleteLink>}
                      />
                    </Fragment>
                  )}
                </ReplyContent>
              </ReplyItem>
            ))}
          </Replies>
        )}
      </Content>
      {isUpdating && (
        <LoadingOverlay>
          <Spinner size={32} />
        </LoadingOverlay>
      )}
    </Comment>
  );
};

ProjectBoardIssueDetailsComment.propTypes = propTypes;

export default ProjectBoardIssueDetailsComment;
