import React, { useState } from "react";
import colorUtils from '../commons/colorUtils';
import { map, filter, get } from 'lodash';
import CellBoundary from './CellBoundary';
import Cell from './Cell';

let draggedItem;

const Board = () => {

  const [colors, setColors] = useState(colorUtils.list());

  const onDragStart = (colorItem) => {
    draggedItem = colorItem
  };

  const onDragOver = index => {
    const draggedOverItem = get(colors, index);
    if (draggedItem === draggedOverItem) {
      return;
    }
    let _items = filter(colors, item => item !== draggedItem);
    _items.splice(index, 0, draggedItem);
    setColors(_items);
  };

  const onDragEnd = () => {
    draggedItem = null;
  }

  return (
    <ul>
      {map(colors, (color, index) => {
        const cellBoundaryProps = { key: index, index, onDragOver },
        cellProps = { color, onDragStart, onDragEnd }
        return (
          <CellBoundary {...cellBoundaryProps}>
            <Cell {...cellProps} />
          </CellBoundary>
        )
      })}
    </ul>
  )
}

export default Board;