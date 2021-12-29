import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ModalLayout from '../../components/modal-layout/ModalLayout';

import './styles.css';

const CHECKBOXES = [
  { title: 'Текст 1', value: 1, id: '1' },
  { title: 'Текст 2', value: 2, id: '2' },
  { title: 'Текст 3', value: 3, id: '3' },
  { title: 'Текст 4', value: 4, id: '4' },
  { title: 'Текст 5', value: 5, id: '5' },
];

const SUCCESS_VALUES = [2, 5];

const CheckboxPage = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState<number[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onClick = (value: number) => {
    setValues(state => {
      if (state.some(elem => elem === value)) {
        state = state.filter(elem => elem !== value);
      } else {
        console.log('add');
        state.push(value);
      }
      
      return state
    })
  };

  const onSubmit = () => {
    const newValues = [...values];
    newValues.sort((a, b) => a - b);

    if (newValues.join() === SUCCESS_VALUES.join()) {
      navigate('/MGPU_PRACTICE/image');
    } else {
      setModalIsOpen(true);
    }
  }

  return (
    <div className='ch-page'>
      <ModalLayout
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      >
      {CHECKBOXES.map(({ title, value, id }) => (
        <div className='ch-container'>
          <input type="checkbox" id={id} name={id} value={value} className="custom-checkbox" onClick={() => onClick(value)}/>
          <label htmlFor={id}>{title}</label>
        </div>
      ))}
      <button onClick={onSubmit} className='button'>Проверить</button>
      </ModalLayout>
    </div>
  );
};

export default CheckboxPage;
