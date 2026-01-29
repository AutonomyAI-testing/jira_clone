import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Tooltip } from 'shared/components';
import { KeyCodes } from 'shared/constants/keyCodes';

import { ShortcutsButton, ShortcutsModal, ShortcutsList, ShortcutItem, ShortcutKey, ShortcutDescription, Overlay, ModalHeader, CloseButton } from './Styles';

const propTypes = {
  modalClose: PropTypes.func,
};

const defaultProps = {
  modalClose: undefined,
};

const KeyboardShortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: 'Esc', description: 'Close this modal' },
    { key: 'Ctrl/Cmd + Enter', description: 'Save comment' },
    { key: '@', description: 'Mention a user in comment' },
    { key: 'Tab', description: 'Navigate between fields' },
    { key: '?', description: 'Show keyboard shortcuts' },
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Show shortcuts on "?" key
      if (event.key === '?' && !isOpen && !event.target.matches('input, textarea')) {
        event.preventDefault();
        setIsOpen(true);
      }

      // Close on Escape
      if (event.keyCode === KeyCodes.ESCAPE && isOpen) {
        event.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <React.Fragment>
      <Tooltip
        width={200}
        renderLink={linkProps => (
          <ShortcutsButton {...linkProps} onClick={(e) => { linkProps.onClick(e); setIsOpen(true); }}>
            <span role="img" aria-label="keyboard">⌨️</span>
          </ShortcutsButton>
        )}
        renderContent={() => 'Keyboard shortcuts (Press ?)'}
      />

      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          <ShortcutsModal>
            <ModalHeader>
              <h3>Keyboard Shortcuts</h3>
              <CloseButton onClick={handleClose}>×</CloseButton>
            </ModalHeader>
            <ShortcutsList>
              {shortcuts.map((shortcut, index) => (
                <ShortcutItem key={index}>
                  <ShortcutKey>{shortcut.key}</ShortcutKey>
                  <ShortcutDescription>{shortcut.description}</ShortcutDescription>
                </ShortcutItem>
              ))}
            </ShortcutsList>
          </ShortcutsModal>
        </Overlay>
      )}
    </React.Fragment>
  );
};

KeyboardShortcuts.propTypes = propTypes;
KeyboardShortcuts.defaultProps = defaultProps;

export default KeyboardShortcuts;
