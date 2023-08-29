import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cliente from './pages/cliente';
import Veiculo from './pages/veiculo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cliente/>}/>
        <Route path='2' element={<Veiculo/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



