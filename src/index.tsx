import React from 'react';
import ReactDOM from 'react-dom';
import { Routes,Route } from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

