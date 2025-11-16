import { useState } from 'react';

import { reorder } from '../utils/reorder.js';

const DnDList = ({ options }) => {
  const [list, setList] = useState(options);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (event) => {
    //* Los atributos siempre son datos String
    const elemIndex = Number(event.currentTarget.getAttribute('data-index'));

    setDraggedIndex(elemIndex);
  };
  const handleDrop = (event) => {
    event.preventDefault();

    if (draggedIndex === null) return;

    // Acá hay que
    // - Leer el elemento en el que se suelta
    // - Buscar el índice del elemento en el array de lista
    // - Sacar el elemento del lugar en el que está
    // - Insertar el elemento en la nueva posición
    const dropIndex = Number(event.currentTarget.getAttribute('data-index'));

    if (draggedIndex === dropIndex || dropIndex == null) return;

    const newList = reorder(list, draggedIndex, dropIndex);

    setList(newList);
    setDraggedIndex(null);
  };

  return (
    <div>
      {
        <ul>
          {list.map((option, index) => {
            return (
              <li
                key={option.objectID}
                data-index={index}
                draggable="true"
                onDragStart={handleDragStart}
                onDragOver={(event) => {
                  event.preventDefault();
                }}
                onDrop={handleDrop}
              >
                {option.title}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default DnDList;
