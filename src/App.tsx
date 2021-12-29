import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import DragNDrop from './pages/drag-n-drop/DragNDrop';
import CardsPage from './pages/cards/CardsPage';
import TablePage from './pages/table-page/TablePage';
import CheckboxPage from './pages/checkbox-page/CheckboxPage';
import ImagePage from './pages/image-page/ImagePage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MGPU_PRACTICE" element={<DragNDrop />} />
        <Route path="/MGPU_PRACTICE/cards" element={<CardsPage />} />
        <Route path="/MGPU_PRACTICE/table" element={<TablePage />} />
        <Route path="/MGPU_PRACTICE/checkboxes" element={<CheckboxPage />} />
        <Route path="/MGPU_PRACTICE/image" element={<ImagePage />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
