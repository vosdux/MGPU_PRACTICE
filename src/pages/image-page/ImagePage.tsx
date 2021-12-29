import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult, ResponderProvided } from 'react-beautiful-dnd';

import Badge from '../../components/badge/Badge';
import ModalLayout from '../../components/modal-layout/ModalLayout';
import { ColumnItem } from '../drag-n-drop/DragNDrop';

import './styles.css';

const ITEMS = [
  { name: 'Текст 1', id: "0" },
  { name: 'Текст 2', id: "1" },
  { name: 'Текст 3', id: "2" },
  { name: 'Текст 4', id: "3" },
  { name: 'Текст 5', id: "4" },
];

const IMAGE_ITEMS = ["0", "2", "3"];

const ImagePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'success' | undefined>(undefined);

  const [main, setMain] = useState<ColumnItem[]>(ITEMS);
  const [image, setImage] = useState<ColumnItem[]>([]);

  const onSubmit = () => {
    let imageResult = image.map(item => item.id);

    imageResult = imageResult.sort((a, b) => {
      return +a - +b;
    });

    if (imageResult.join() === IMAGE_ITEMS.join()) {
      setModalMode('success');
      setModalIsOpen(true);
    }
    setModalIsOpen(true);
  };

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;

    if (IMAGE_ITEMS.some(elem => elem === main[sourceIndex].id)) {
      setImage(value => [...value, main[sourceIndex]]);
      setMain(value => {
        const newValue = [...value];
        newValue.splice(sourceIndex, 1);

        return newValue;
      })
    } else {
      setModalIsOpen(true);
    }
  };

  return (
    <div className="image-root">
      <ModalLayout
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        modalMode={modalMode}
      >
        <div className="image-container">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="image">
              <Droppable droppableId='image'>
                {(provided, snapshot) => (
                  <div
                    className="image-badges"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {image.map(({ name, id }) => <Badge key={id} className="initial-item mb-10">
                      {name}
                    </Badge>)}
                  </div>)}
              </Droppable>
            </div>
            <div className='column'>
              <p>Вопрос 1</p>
              <Droppable droppableId="main">
                {(provided, snapshot) => (
                  <div
                    className='dropable'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >

                    {main.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (

                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ ...provided.draggableProps.style }}
                          >
                            <Badge key={item.id} className="initial-item mb-10">
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
        </div>
        <div className='button-row'>
          <button onClick={onSubmit} className='button'>Проверить</button>
        </div>
      </ModalLayout >
    </div >
  );
};

export default ImagePage;
