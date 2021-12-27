import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import DND from './pages/d-n-d/DND';
import CardsPage from './pages/cards/CardsPage';
import TablePage from './pages/table-page/TablePage';
import CheckboxPage from './pages/checkbox-page/CheckboxPage';
import ImagePage from './pages/image-page/ImagePage';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/MGPU_PRACTICE/dnd" element={<DND />} />
        <Route path="/MGPU_PRACTICE/cards" element={<CardsPage />} />
        <Route path="/MGPU_PRACTICE/table" element={<TablePage />} />
        <Route path="/MGPU_PRACTICE/checkboxes" element={<CheckboxPage />} />
        <Route path="/MGPU_PRACTICE/image" element={<ImagePage />} />
      <Route path="*" element={<DND />} />
     </Routes>
    </HashRouter>
  );
}

export default App;
