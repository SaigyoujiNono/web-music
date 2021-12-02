import React from 'react';
import ReactDOM from 'react-dom';
import { Routes,Route } from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/error';
import MyMusic from './pages/MyMusic';
import Friend from './pages/Friend';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="/discover" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="/discover/ranking" element={<Home />} />
            <Route path="/discover/songlist" element={<Home />} />
            <Route path="/discover/broadcasting" element={<Home />} />
            <Route path="/discover/songer" element={<Home />} />
            <Route path="/discover/newsong" element={<Home />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/mymusic" element={<MyMusic />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/*" element={<Error />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

