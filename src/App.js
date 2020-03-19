import React, { useState } from 'react';
import './App.scss';
import colorUtils from './commons/colorUtils';

let draggedItem;
const colorList = colorUtils.list();

const App = () => {

  console.log('ENV:', process.env);

  const [colors, setColors] = useState(colorList);

  const onDragStart = (e, index) => {
    draggedItem = colors[index]
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const onDragOver = index => {
    const draggedOverItem = colors[index];
    if (draggedItem === draggedOverItem) {
      return;
    }
    let _items = colors.filter(item => item !== draggedItem);
    _items.splice(index, 0, draggedItem);
    setColors(_items);
  };

  const onDragEnd = e => {
    draggedItem = null;
  }

  return (
    <div className="App">
      <main>
        <ul>
          {colors.map((item, idx) => {
            return (
              <li key={idx} onDragOver={() => onDragOver(idx)}>
                <div
                  className="drag"
                  draggable
                  onDragStart={(e) => onDragStart(e, idx)}
                  style={{backgroundColor: item}}
                  onDragEnd={(e) => onDragEnd(e)}
                >
                </div>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
