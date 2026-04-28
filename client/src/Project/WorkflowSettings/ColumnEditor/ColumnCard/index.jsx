import React, { Fragment, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Icon, Input, ConfirmModal, Select } from 'shared/components';

import ColorPicker from '../../ColorPicker';
import {
  Card,
  CardHeader,
  ColorDot,
  TitleInput,
  DeleteIcon,
  CardBody,
  Label,
  WipInput,
} from './Styles';

const propTypes = {
  column: PropTypes.object.isRequired,
  provided: PropTypes.object.isRequired,
  isDragging: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  allColumns: PropTypes.array.isRequired,
};

const ColumnCard = ({ column, provided, isDragging, onUpdate, onDelete, allColumns }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState(column.title);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditingTitle && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditingTitle]);

  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleSave = () => {
    if (titleValue.trim()) {
      onUpdate({ title: titleValue.trim() });
    }
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = event => {
    if (event.key === 'Enter') {
      handleTitleSave();
    } else if (event.key === 'Escape') {
      setTitleValue(column.title);
      setIsEditingTitle(false);
    }
  };

  const handleColorChange = color => {
    onUpdate({ color });
    setShowColorPicker(false);
  };

  const handleWipLimitChange = value => {
    const wipLimit = parseInt(value, 10);
    if (!isNaN(wipLimit) && wipLimit >= 0) {
      onUpdate({ wipLimit });
    }
  };

  const otherColumns = allColumns.filter(col => col.id !== column.id);

  return (
    <Card
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      isDragging={isDragging}
    >
      <CardHeader>
        <ColorDot color={column.color} onClick={() => setShowColorPicker(!showColorPicker)} />
        {isEditingTitle ? (
          <TitleInput
            ref={inputRef}
            value={titleValue}
            onChange={e => setTitleValue(e.target.value)}
            onBlur={handleTitleSave}
            onKeyDown={handleTitleKeyDown}
          />
        ) : (
          <div onClick={handleTitleClick} style={{ cursor: 'pointer', flex: 1 }}>
            {column.title}
          </div>
        )}
        <ConfirmModal
          title="Delete Column"
          message={
            <Fragment>
              <div>What should happen to issues currently in this column?</div>
              <Select
                name="moveToColumn"
                placeholder="Move to column..."
                options={otherColumns.map(col => ({ value: col.id, label: col.title }))}
                onChange={targetColumnId => {
                  // In a real implementation, we'd move issues before deleting
                  // For now, just delete the column
                  onDelete();
                }}
              />
            </Fragment>
          }
          confirmText="Delete Column"
          variant="danger"
          renderLink={modal => <DeleteIcon type="trash" size={16} onClick={modal.open} />}
          onConfirm={({ close }) => {
            onDelete();
            close();
          }}
        />
      </CardHeader>

      {showColorPicker && (
        <ColorPicker selectedColor={column.color} onColorSelect={handleColorChange} />
      )}

      <CardBody>
        <Label>WIP Limit (0 = unlimited)</Label>
        <WipInput
          type="number"
          min="0"
          value={column.wipLimit}
          onChange={e => handleWipLimitChange(e.target.value)}
        />
      </CardBody>
    </Card>
  );
};

ColumnCard.propTypes = propTypes;

export default ColumnCard;
