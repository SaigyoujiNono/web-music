import React from 'react';
import  { Outlet } from 'react-router-dom'
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PlayBar from './components/PlayBar';
import Top from './components/Top';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
      <Footer />
      <PlayBar />
      <Top />
    </React.Fragment>
  );
}

export default App;
