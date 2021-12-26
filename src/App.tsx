import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import DND from './pages/d-n-d/DND';
import CardsPage from './pages/cards/CardsPage';
import TablePage from './pages/TablePage/TablePage';
import Checkboxes from './components/checkboxes/Checkboxes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dnd" element={<DND />} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/checkboxes" element={<Checkboxes />} />
      <Route path="/MGPU_PRACTICE" element={<DND />} />
      <Route path="*" element={<DND />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
