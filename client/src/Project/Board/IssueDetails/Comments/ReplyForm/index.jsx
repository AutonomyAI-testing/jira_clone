import React, { Fragment, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { Textarea, Button } from 'shared/components';
import useCurrentUser from 'shared/hooks/currentUser';

import { Actions, ReplyLink } from './Styles';

const propTypes = {
  commentId: PropTypes.number.isRequired,
  fetchIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsCommentsReplyForm = ({ commentId, fetchIssue }) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isCreating, setCreating] = useState(false);
  const [body, setBody] = useState('');
  const $textareaRef = useRef();

  const { currentUser } = useCurrentUser();

  const handleReplyCreate = async () => {
    try {
      if (!$textareaRef.current.value.trim()) {
        return;
      }
      setCreating(true);
      await api.post(`/comments/${commentId}/replies`, {
        body,
        userId: currentUser.id,
      });
      await fetchIssue();
      setFormOpen(false);
      setCreating(false);
      setBody('');
    } catch (error) {
      toast.error(error);
      setCreating(false);
    }
  };

  return (
    <Fragment>
      {isFormOpen ? (
        <Fragment>
          <Textarea
            ref={$textareaRef}
            autoFocus
            placeholder="Add a reply..."
            value={body}
            onChange={setBody}
          />
          <Actions>
            <Button variant="primary" isWorking={isCreating} onClick={handleReplyCreate}>
              Save
            </Button>
            <Button variant="empty" onClick={() => setFormOpen(false)}>
              Cancel
            </Button>
          </Actions>
        </Fragment>
      ) : (
        <ReplyLink onClick={() => setFormOpen(true)}>Reply</ReplyLink>
      )}
    </Fragment>
  );
};

ProjectBoardIssueDetailsCommentsReplyForm.propTypes = propTypes;

export default ProjectBoardIssueDetailsCommentsReplyForm;
