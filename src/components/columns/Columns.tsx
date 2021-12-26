import React, { FC, useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const labels = [
  { text: 'Столбик 1', value: '1' },
  { text: 'Столбик 2', value: '2' },
  { text: 'Столбик 3', value: '3' },
  { text: 'Столбик 4', value: '4' },
];

const values = [
  { text: 'Значение 2', value: '2' },
  { text: 'Значение 4', value: '4' },
  { text: 'Значение 1', value: '1' },
  { text: 'Значение 3', value: '3' },
];

type Column = {
  text: string;
  value: string;
}

const reorder = (
  items: Column[],
  startIndex: number,
  endIndex: number,
  setItems: (items: Column[]) => void,
) => {
  const newItems = [...items];
  const [removed] = newItems.splice(startIndex, 1);

  newItems.splice(endIndex, 0, removed);

  setItems(newItems);
};

const Columns: FC = () => {
  const navigate = useNavigate();

  const [tableValues, setTableValues] = useState<Column[]>(values);

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const destinationIndex = result.destination.index;
    const sourceIndex = result.source.index;

    reorder(tableValues, sourceIndex, destinationIndex, setTableValues);
  };

  const onSubmit = () => {
    const lablesId = labels.map(item => item.value);
    const tableVlauesId = tableValues.map(item => item.value);
    
    if (lablesId.join() === tableVlauesId.join()) {
      navigate('/checkboxes');
    } else {
      alert('Попробуйте еще раз!');
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='table-container'>
        <div className='table'>
          <div className='table-column'>
            {labels.map(({ text, value }) => (
              <div className='table-item'>{text}</div>
            ))}
          </div>
          <Droppable droppableId='s'>
            {(provided, snapshot) => (
              <div
                className='table-column'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tableValues.map(({ text, value }, index) => (
                  <Draggable key={value} draggableId={value} index={index}>
                    {(provided, snapshot) => (
                      <div className='table-item' ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{ ...provided.draggableProps.style }}>
                        {text}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </div>
      </div>
      <button onClick={onSubmit} className='button'>Проверить</button>
    </DragDropContext>
  );

};

export default Columns;
