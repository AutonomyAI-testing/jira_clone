import React, { useState } from 'react';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import useCurrentUser from 'shared/hooks/currentUser';
import toast from 'shared/utils/toast';

import BodyForm from '../BodyForm';
import { Reply, UserAvatar, Right } from './Styles';

const propTypes = {
  commentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fetchIssue: PropTypes.func.isRequired,
  projectUsers: PropTypes.array.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsCommentsReply = ({ commentId, fetchIssue, projectUsers, onCancel }) => {
  const [isCreating, setCreating] = useState(false);
  const [body, setBody] = useState('');

  const { currentUser } = useCurrentUser();

  const handleReplyCreate = async () => {
    try {
      setCreating(true);
      await api.post(`/comments/${commentId}/replies`, { body, userId: currentUser.id });
      await fetchIssue();
      setCreating(false);
      setBody('');
      onCancel();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Reply>
      {currentUser && <UserAvatar name={currentUser.name} avatarUrl={currentUser.avatarUrl} />}
      <Right>
        <BodyForm
          value={body}
          onChange={setBody}
          isWorking={isCreating}
          onSubmit={handleReplyCreate}
          onCancel={onCancel}
          projectUsers={projectUsers}
        />
      </Right>
    </Reply>
  );
};

ProjectBoardIssueDetailsCommentsReply.propTypes = propTypes;

export default ProjectBoardIssueDetailsCommentsReply;
