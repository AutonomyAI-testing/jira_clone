import React, { forwardRef, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextareaAutoSize from 'react-textarea-autosize';

import { KeyCodes } from 'shared/constants/keyCodes';

import MentionDropdown from '../MentionDropdown';
import { StyledMentionTextarea } from './Styles';

const propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
  minRows: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  projectUsers: PropTypes.array,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  invalid: false,
  minRows: 2,
  value: undefined,
  onChange: () => {},
  projectUsers: [],
  placeholder: '',
  autoFocus: false,
};

const MentionTextarea = forwardRef(
  ({ className, invalid, onChange, projectUsers, value, placeholder, autoFocus, ...textareaProps }, ref) => {
    const [showMentionDropdown, setShowMentionDropdown] = useState(false);
    const [mentionSearch, setMentionSearch] = useState('');
    const [mentionStartPos, setMentionStartPos] = useState(0);
    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
    const textareaRef = useRef(null);
    const containerRef = useRef(null);

    // Combine external ref with internal ref
    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(textareaRef.current);
        } else {
          ref.current = textareaRef.current;
        }
      }
    }, [ref]);

    const getCursorCoordinates = () => {
      const textarea = textareaRef.current;
      if (!textarea) return { top: 0, left: 0 };

      const { selectionStart } = textarea;
      const textBeforeCursor = value.substring(0, selectionStart);
      const lines = textBeforeCursor.split('\n');
      const currentLineNumber = lines.length - 1;
      const currentLineText = lines[currentLineNumber];

      // Approximate positioning
      const lineHeight = 20;
      const charWidth = 8;
      const top = (currentLineNumber + 1) * lineHeight + 40;
      const left = currentLineText.length * charWidth;

      return { top, left: Math.min(left, 300) };
    };

    const handleTextareaChange = event => {
      const newValue = event.target.value;
      const cursorPos = event.target.selectionStart;

      onChange(newValue, event);

      // Check for @ trigger
      const textBeforeCursor = newValue.substring(0, cursorPos);
      const lastAtSymbol = textBeforeCursor.lastIndexOf('@');

      if (lastAtSymbol !== -1) {
        const textAfterAt = textBeforeCursor.substring(lastAtSymbol + 1);
        const hasSpaceAfterAt = textAfterAt.includes(' ') || textAfterAt.includes('\n');

        if (!hasSpaceAfterAt) {
          setMentionSearch(textAfterAt);
          setMentionStartPos(lastAtSymbol);
          setShowMentionDropdown(true);
          setCursorPosition(getCursorCoordinates());
        } else {
          setShowMentionDropdown(false);
        }
      } else {
        setShowMentionDropdown(false);
      }
    };

    const handleKeyDown = event => {
      if (event.keyCode === KeyCodes.ESCAPE && showMentionDropdown) {
        event.preventDefault();
        setShowMentionDropdown(false);
      }
    };

    const handleUserSelect = user => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const beforeMention = value.substring(0, mentionStartPos);
      const afterMention = value.substring(textarea.selectionStart);
      const newValue = `${beforeMention}@${user.name} ${afterMention}`;

      onChange(newValue);
      setShowMentionDropdown(false);

      // Set cursor position after the mention
      setTimeout(() => {
        const newCursorPos = mentionStartPos + user.name.length + 2;
        textarea.focus();
        textarea.setSelectionRange(newCursorPos, newCursorPos);
      }, 0);
    };

    const filteredUsers = projectUsers.filter(user =>
      user.name.toLowerCase().includes(mentionSearch.toLowerCase()),
    );

    return (
      <StyledMentionTextarea className={className} invalid={invalid} ref={containerRef}>
        <TextareaAutoSize
          {...textareaProps}
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          inputRef={textareaRef}
        />
        {showMentionDropdown && filteredUsers.length > 0 && (
          <MentionDropdown
            users={filteredUsers}
            onUserSelect={handleUserSelect}
            onClose={() => setShowMentionDropdown(false)}
            position={cursorPosition}
          />
        )}
      </StyledMentionTextarea>
    );
  },
);

MentionTextarea.propTypes = propTypes;
MentionTextarea.defaultProps = defaultProps;

export default MentionTextarea;
