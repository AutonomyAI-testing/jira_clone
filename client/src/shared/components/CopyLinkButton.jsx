import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { copyToClipboard } from 'shared/utils/browser';
import { Button } from 'shared/components';

const propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'secondary', 'empty']),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconSize: PropTypes.number,
  disabled: PropTypes.bool,
  isWorking: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  variant: 'secondary',
  icon: undefined,
  iconSize: 18,
  disabled: false,
  isWorking: false,
  onClick: () => {},
};

const CopyLinkButton = ({ ...buttonProps }) => {
  const [isLinkCopied, setLinkCopied] = useState(false);

  const handleLinkCopy = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
    copyToClipboard(window.location.href);
  };

  return (
    <Button icon="link" onClick={handleLinkCopy} {...buttonProps}>
      {isLinkCopied ? 'Link Copied' : 'Copy link'}
    </Button>
  );
};

CopyLinkButton.propTypes = propTypes;
CopyLinkButton.defaultProps = defaultProps;

export default CopyLinkButton;
