import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  HeaderRow,
  HeaderCell,
  Row,
  RowLabel,
  Cell,
  Checkbox,
  EmptyCell,
} from './Styles';

const propTypes = {
  columns: PropTypes.array.isRequired,
  transitions: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const TransitionMatrix = ({ columns, transitions, onChange }) => {
  const sortedColumns = [...columns].sort((a, b) => a.position - b.position);

  const handleToggle = (fromId, toId) => {
    const currentTransitions = transitions[fromId] || [];
    const newTransitions = { ...transitions };

    if (currentTransitions.includes(toId)) {
      newTransitions[fromId] = currentTransitions.filter(id => id !== toId);
    } else {
      newTransitions[fromId] = [...currentTransitions, toId];
    }

    onChange(newTransitions);
  };

  return (
    <Table>
      <thead>
        <HeaderRow>
          <HeaderCell>From / To</HeaderCell>
          {sortedColumns.map(col => (
            <HeaderCell key={col.id}>{col.title}</HeaderCell>
          ))}
        </HeaderRow>
      </thead>
      <tbody>
        {sortedColumns.map(fromCol => (
          <Row key={fromCol.id}>
            <RowLabel>{fromCol.title}</RowLabel>
            {sortedColumns.map(toCol => {
              const isSameColumn = fromCol.id === toCol.id;
              const isChecked = (transitions[fromCol.id] || []).includes(toCol.id);

              return (
                <Cell key={toCol.id}>
                  {isSameColumn ? (
                    <EmptyCell>—</EmptyCell>
                  ) : (
                    <Checkbox
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggle(fromCol.id, toCol.id)}
                    />
                  )}
                </Cell>
              );
            })}
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

TransitionMatrix.propTypes = propTypes;

export default TransitionMatrix;
