import Cards from '../../components/cards/Cards';
import Columns from '../../components/columns/Columns';
import DragNDrop from '../../components/drag-n-drop/DragNDrop';

import './styles.css';

const MainPage = () => {

  return (
    <div className='main'>
      <DragNDrop />
      <Cards />
      <Columns />
    </div>
  )
}

export default MainPage;
