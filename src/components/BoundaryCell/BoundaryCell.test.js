import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoundaryCell from './index';

describe('dragging over cell', () => {

  const { getByTestId } = render(<Cell />)
  // fireEvent.dragOver()

})