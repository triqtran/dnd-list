import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cell from './index';

test('dragging start cell', () => {
  const { getByTestId } = render(<Cell />)
  // fireEvent.dragStart()
})

test('dragging end cell', () => {
  const { getByTestId } = render(<Cell />)
  // fireEvent.dragEnd()
})