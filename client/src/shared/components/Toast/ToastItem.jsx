import React from 'react';
import PropTypes from 'prop-types';

import { StyledToast, CloseIcon, Title, Message } from './Styles';

const propTypes = {
  type: PropTypes.oneOf(['success', 'danger', 'warning']).isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
};

const defaultProps = {
  title: undefined,
  message: undefined,
  onClose: undefined,
};

const ToastItem = ({ type, title, message, onClose }) => (
  <StyledToast type={type} onClick={onClose} data-testid="toast-item">
    <CloseIcon type="close" />
    {title && <Title>{title}</Title>}
    {message && <Message>{message}</Message>}
  </StyledToast>
);

ToastItem.propTypes = propTypes;
ToastItem.defaultProps = defaultProps;

export default ToastItem;
