import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoundaryCell from './index';

test('dragging over cell', () => {

  const { getByTestId } = render(<BoundaryCell />)
  // fireEvent.dragOver()

})