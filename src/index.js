import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import {About} from './Components/About';
import { Home } from './Components/Home';
import { Contact } from './Components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App name='Behrooz' message='Welcome to my app '/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/Contact' element={<Contact/>} />
  </Routes> 
    
  </BrowserRouter>
);

