import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { formatDateTimeConversational } from 'shared/utils/dateTime';
import { ConfirmModal } from 'shared/components';

import BodyForm from '../BodyForm';
import {
  Reply,
  UserAvatar,
  Content,
  Username,
  CreatedAt,
  Body,
  EditLink,
  DeleteLink,
} from './Styles';

const propTypes = {
  reply: PropTypes.object.isRequired,
  commentId: PropTypes.number.isRequired,
  fetchIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsCommentReply = ({ reply, commentId, fetchIssue }) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isUpdating, setUpdating] = useState(false);
  const [body, setBody] = useState(reply.body);

  const handleReplyDelete = async () => {
    try {
      await api.delete(`/comments/${commentId}/replies/${reply.id}`);
      await fetchIssue();
    } catch (error) {
      toast.error(error);
    }
  };

  const handleReplyUpdate = async () => {
    try {
      setUpdating(true);
      await api.put(`/comments/${commentId}/replies/${reply.id}`, { body });
      await fetchIssue();
      setUpdating(false);
      setFormOpen(false);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Reply data-testid="issue-reply">
      <UserAvatar name={reply.user.name} avatarUrl={reply.user.avatarUrl} />
      <Content>
        <Username>{reply.user.name}</Username>
        <CreatedAt>{formatDateTimeConversational(reply.createdAt)}</CreatedAt>

        {isFormOpen ? (
          <BodyForm
            value={body}
            onChange={setBody}
            isWorking={isUpdating}
            onSubmit={handleReplyUpdate}
            onCancel={() => setFormOpen(false)}
          />
        ) : (
          <Fragment>
            <Body>{reply.body}</Body>
            <EditLink onClick={() => setFormOpen(true)}>Edit</EditLink>
            <ConfirmModal
              title="Are you sure you want to delete this reply?"
              message="Once you delete, it's gone for good."
              confirmText="Delete reply"
              onConfirm={handleReplyDelete}
              renderLink={modal => <DeleteLink onClick={modal.open}>Delete</DeleteLink>}
            />
          </Fragment>
        )}
      </Content>
    </Reply>
  );
};

ProjectBoardIssueDetailsCommentReply.propTypes = propTypes;

export default ProjectBoardIssueDetailsCommentReply;
