import React from 'react';
import  { Outlet } from 'react-router-dom'
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
