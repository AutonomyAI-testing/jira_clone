import React from 'react';
import PropTypes from 'prop-types';

import { Container, Swatch } from './Styles';

const propTypes = {
  selectedColor: PropTypes.string.isRequired,
  onColorSelect: PropTypes.func.isRequired,
};

const COLORS = [
  '#dfe1e6', // Light gray
  '#0052cc', // Blue
  '#FF991F', // Orange
  '#0B875B', // Green
  '#E13C3C', // Red
  '#6554C0', // Purple
  '#00B8D9', // Cyan
  '#FF5630', // Red-orange
  '#36B37E', // Light green
  '#FFAB00', // Yellow
];

const ColorPicker = ({ selectedColor, onColorSelect }) => (
  <Container>
    {COLORS.map(color => (
      <Swatch
        key={color}
        color={color}
        isSelected={selectedColor === color}
        onClick={() => onColorSelect(color)}
      />
    ))}
  </Container>
);

ColorPicker.propTypes = propTypes;

export default ColorPicker;
