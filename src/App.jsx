import { useState } from 'react';
import React from 'react'
//import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import Registro from './Components/registro';
import ListaEnvios from './Components/listaEnvios';
import NuevoEnvio from './Components/nuevoEnvio';
import Header from './Components/header';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
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
