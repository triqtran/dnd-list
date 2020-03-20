import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cell from './index';

describe('dragging start cell', () => {
  const { getByTestId } = render(<Cell />)
  // fireEvent.dragStart()
})

describe('dragging end cell', () => {
  const { getByTestId } = render(<Cell />)
  // fireEvent.dragEnd()
})