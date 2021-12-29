import React, { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import ModalLayout from '../../components/modal-layout/ModalLayout';

import './styles.css';

const cards = [
  { title: 'Текст1', value: '1', id: '1' },
  { title: 'Текст2', value: '2', id: '2' },
  { title: 'Текст3', value: '3', id: '3' },
  { title: 'Текст1', value: '1', id: '4' },
  { title: 'Текст2', value: '2', id: '5' },
  { title: 'Текст3', value: '3', id: '6' },
];

const CardsPage: FC = () => {
  const navigate = useNavigate();

  const [firstChecked, setFirstChecked] = useState('');
  const [secondChecked, setSecondChecked] = useState('');
  const [checked, setChecked] = useState<string[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const checkItems = () => {
      const firstValue = cards.find(elem => elem.id === firstChecked)?.value;
      const secondValue = cards.find(elem => elem.id === secondChecked)?.value;

      if (firstValue === secondValue) {
        setChecked(value => {
          return [...value, firstChecked, secondChecked];
        });
      }
      setFirstChecked('');
      setSecondChecked('');
    }

    if (firstChecked !== '' && secondChecked !== '') {
      setTimeout(checkItems, 100);
    }
  }, [firstChecked, secondChecked]);

  const getCardClass = (id: string) => {
    if (id === firstChecked || id === secondChecked || checked.some(elem => elem === id)) {
      return 'card flipped';
    } else {
      return 'card';
    }
  };

  const onCardClick = (id: string) => {
    if (checked.some(elem => elem === id)) {
      return false;
    }

    if (secondChecked) {
      return false;
    }

    if (firstChecked) {
      setSecondChecked(id);
    } else {
      setFirstChecked(id);
    }
  };

  const onSubmit = () => {
    if (checked.length === 6) {
      navigate('/MGPU_PRACTICE/table');
    } else {
      setModalIsOpen(true);
    }
  }

  return (
    <div className='main'>
      <ModalLayout
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      >
        <div className='card-row'>
          {cards.map(({ title, id }) => {
            return (
              <div key={id} className={getCardClass(id)} onClick={() => onCardClick(id)}>
                <div className='card__face card__face--front'></div>
                <div className='card__face card__face--back'>{title}</div>
              </div>
            )
          })}
        </div>
        <button onClick={onSubmit} className='button'>Проверить</button>
      </ModalLayout>
    </div>
  );
};

export default CardsPage;
