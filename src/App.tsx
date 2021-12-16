import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainPage from './pages/main-page/MainPage';

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/MGPU_PRACTICE" element={<MainPage />} />
      <Route path="*" element={<></>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
