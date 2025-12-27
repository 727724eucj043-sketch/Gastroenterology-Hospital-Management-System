import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {PatientProvider} from './context/PatientContext'

 ReactDOM.render(
 <BrowserRouter>
  <PatientProvider>
   <App/>
  </PatientProvider>
 </BrowserRouter>,
 document.getElementById('root')
 );
