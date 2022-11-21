import { useState } from 'react';
import React from 'react'
//import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import Registro from './registro';
import ListaEnvios from './listaEnvios';
import NuevoEnvio from './nuevoEnvio';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/listaenvios" element={<ListaEnvios />} />
          <Route path="/nuevoenvio" element={<NuevoEnvio />} />
        </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
