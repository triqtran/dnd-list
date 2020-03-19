import React, { useState } from 'react';
import './App.scss';
import colorUtils from './commons/colorUtils';
import { map, filter, get } from 'lodash'
import Board from './components/Board';
import CellBoundary from './components/CellBoundary';
import Cell from './components/Cell';

let draggedItem;
const colorList = colorUtils.list();

const App = () => {

  console.log('ENV:', process.env);

  const [colors, setColors] = useState(colorList);

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
    <div className="App">
      <main>
        <Board>
          {map(colors, (color, index) => {
            const cellBoundaryProps = { key: index, index, onDragOver },
            cellProps = { color, onDragStart, onDragEnd }
            return (
              <CellBoundary {...cellBoundaryProps}>
                <Cell {...cellProps} />
              </CellBoundary>
            )
          })}
        </Board>
      </main>
    </div>
  );
}

export default App;
