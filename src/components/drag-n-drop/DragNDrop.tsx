import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, ResponderProvided } from "react-beautiful-dnd";
import { useNavigate } from 'react-router-dom';

import Badge from '../../components/badge/Badge';

import './styles.css';

enum DropsEnum {
  right = 'right',
  left = 'left',
  initial = 'initial'
}

type ColumnItem = {
  name: string;
  id: string;
};

const ITEMS = [{ name: 'Флешки', id: "0" }, { name: 'Телепортация', id: "1" }, { name: 'Оптоволоконная связь', id: "2" }, { name: 'Персональный компьютер', id: "3" }]

const LEFT_COLUMN_VALUES = ["0", "1", "3"];
const RIGHT_COLUMN_VALUES = ["2"];

const reorderDifferentLists = (
  startList: ColumnItem[],
  endList: ColumnItem[],
  startIndex: number,
  endIndex: number,
  setStart: (items: ColumnItem[]) => void,
  setEnd: (items: ColumnItem[]) => void
) => {
  const newStartList = [...startList];
  const newEndList = [...endList]

  const [removed] = newStartList.splice(startIndex, 1);
  newEndList.splice(endIndex, 0, removed);

  setStart(newStartList);
  setEnd(newEndList);
};

const reorder = (
  items: ColumnItem[],
  startIndex: number,
  endIndex: number,
  setItems: (items: ColumnItem[]) => void,
) => {
  const newItems = [...items];
  const [removed] = newItems.splice(startIndex, 1);

  newItems.splice(endIndex, 0, removed);

  setItems(newItems);
};

const DragNDrop = () => {
  const navigate = useNavigate();

  const [leftColumn, setLeftColumn] = useState<ColumnItem[]>([]);
  const [rigthColumn, setRigthColumn] = useState<ColumnItem[]>([]);
  const [initial, setInitial] = useState<ColumnItem[]>(ITEMS);

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const destinationIndex = result.destination.index;
    const sourceIndex = result.source.index;

    const destinationId = result.destination.droppableId;
    const sourceId = result.source.droppableId;

    const draggableId = result.draggableId;

    if (destinationId === DropsEnum.left) {
      if (sourceId === DropsEnum.left) {
        reorder(leftColumn, sourceIndex, destinationIndex, setLeftColumn);
      } else if (LEFT_COLUMN_VALUES.find(elem => elem === draggableId)) {
        reorderDifferentLists(initial, leftColumn, sourceIndex, destinationIndex, setInitial, setLeftColumn);
      } else {
        alert('Неверно');
      }
    }

    if (destinationId === DropsEnum.right) {
      if (sourceId === DropsEnum.right) {
        reorder(rigthColumn, sourceIndex, destinationIndex, setRigthColumn);
      } else if (RIGHT_COLUMN_VALUES.find(elem => elem === draggableId)) {
        reorderDifferentLists(initial, rigthColumn, sourceIndex, destinationIndex, setInitial, setRigthColumn);
      } else {
        alert('Неверно');
      }
    }

    if (destinationId === DropsEnum.initial) {
      if (sourceId === DropsEnum.initial) {
        reorder(initial, sourceIndex, destinationIndex, setInitial);
      }

      if (sourceId === DropsEnum.right) {
        reorderDifferentLists(rigthColumn, initial, sourceIndex, destinationIndex, setInitial, setRigthColumn);
      }

      if (sourceId === DropsEnum.left) {
        reorderDifferentLists(leftColumn, initial, sourceIndex, destinationIndex, setInitial, setLeftColumn);
      }
    }
  }

  const onSubmit = () =>{
    const left = leftColumn.map(({ id }) => id);
    const right = rigthColumn.map(({ id }) => id);
    left.sort((a, b) => +a - +b);

    if (left.join() === LEFT_COLUMN_VALUES.join() && right.join() === RIGHT_COLUMN_VALUES.join()) {
      navigate('/cards');
    } else {
      alert('Неверно!');
    }
  }

  return (
    <div className='root'>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          <div className="column">
            <p>Вопрос 1</p>
            <Droppable droppableId={DropsEnum.left}>
              {(provided, snapshot) => (
                <div
                  className='dropable'
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >

                  {leftColumn.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (

                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ ...provided.draggableProps.style }}
                        >
                          <Badge className="initial-item mb-10">
                            {item.name}
                          </Badge>
                        </div>

                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="column">
            <p>Вопрос 1</p>
            <Droppable droppableId={DropsEnum.right}>
              {(provided, snapshot) => (
                <div
                  className="dropable"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {rigthColumn.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Badge className="initial-item mb-10">
                            {item.name}
                          </Badge>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
        <div className="row">
          <Droppable droppableId={DropsEnum.initial} direction='horizontal'>
            {(provided, snapshot) => (
              <div
                className="row"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {initial.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (

                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{ ...provided.draggableProps.style }}
                      >
                        <Badge className="initial-item">
                          {item.name}
                        </Badge>
                      </div>

                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <button onClick={onSubmit} className='button'>Проверить</button>
    </div>
  )
}

export default DragNDrop;
