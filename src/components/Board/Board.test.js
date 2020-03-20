import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './index';

test('renders Board', () => {
  const { getByTestId } = render(<Board />)
});

test('dragging cell to other postions', () => {
  const { getByTestId } = render(<Board />)
})