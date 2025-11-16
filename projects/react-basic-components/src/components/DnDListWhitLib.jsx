import { useState } from 'react';

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

import { reorder } from '../utils/reorder.js';

const Item = ({ item, index, dragItemStyle = {}, children }) => (
  <Draggable index={index} draggableId={item.id}>
    {(provided, snapshot) => (
      <div
        className="dndItem"
        ref={provided.innerRef}
        {...provided.draggableProps}
        // {...provided.dragHandleProps}
        style={{
          // default item style
          padding: '15px 25px',
          // default drag style
          ...provided.draggableProps.style,
          // customized drag style
          ...(snapshot.isDragging ? dragItemStyle : {}),
        }}
      >
        {children(item, provided.dragHandleProps)}
      </div>
    )}
  </Draggable>
);

const DnDListWithLib = ({
  listInit,
  isVertical = true,
  dragListStyle = {},
  ...props
}) => {
  const [list, setList] = useState(listInit);

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;

    setList(reorder(list, source.index, destination.index));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable
        droppableId="droppable"
        direction={isVertical ? 'vertical' : 'horizontal'}
      >
        {(provided, snapshot) => (
          <div
            className="dnd"
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              display: isVertical ? '' : 'flex',
              ...(snapshot.isDraggingOver ? dragListStyle : {}),
            }}
          >
            {list.map((item, index) => (
              <Item key={item.id} index={index} item={item} {...props}>
                {(item, dragHandleProps) => (
                  <>
                    <span>
                      {item.firstName}
                      {item.lastName}
                    </span>

                    <div className="dndIcon" {...dragHandleProps}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </Item>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DnDListWithLib;
