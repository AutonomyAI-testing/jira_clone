import React from 'react';
import PropTypes from 'prop-types';

import { Container, ColumnsRow, ColumnNode, ArrowsContainer, Arrow } from './Styles';

const propTypes = {
  columns: PropTypes.array.isRequired,
  transitions: PropTypes.object.isRequired,
};

const TransitionDiagram = ({ columns, transitions }) => {
  const sortedColumns = [...columns].sort((a, b) => a.position - b.position);

  return (
    <Container>
      <ColumnsRow>
        {sortedColumns.map(col => (
          <ColumnNode key={col.id} color={col.color}>
            {col.title}
          </ColumnNode>
        ))}
      </ColumnsRow>

      <ArrowsContainer>
        {sortedColumns.map(fromCol => {
          const allowedTargets = transitions[fromCol.id] || [];
          return allowedTargets.map(toId => {
            const toCol = sortedColumns.find(c => c.id === toId);
            if (!toCol) return null;

            const fromIndex = sortedColumns.findIndex(c => c.id === fromCol.id);
            const toIndex = sortedColumns.findIndex(c => c.id === toId);
            const direction = toIndex > fromIndex ? 'forward' : 'backward';

            return (
              <Arrow key={`${fromCol.id}-${toId}`} direction={direction}>
                {direction === 'forward' ? '→' : '←'}
              </Arrow>
            );
          });
        })}
      </ArrowsContainer>
    </Container>
  );
};

TransitionDiagram.propTypes = propTypes;

export default TransitionDiagram;
