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
import RadioPage from './pages/Home/RadioPage';
import ArtistPage from './pages/Home/ArtistPage';
import CategoryPage from './pages/Home/ArtistPage/CategoryPage';
import PlayListPage from './pages/Home/PlayListPage';
import RankingPage from './pages/Home/RankingPage';
import NewRecordPage from './pages/Home/NewRecordPage';
function Index(){
  return (
    <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="/discover" element={<Home />}></Route>
          <Route path="/discover/ranking" element={<RankingPage />} />
          <Route path="/discover/playlist" element={<PlayListPage />} />
          <Route path="/discover/radio" element={<RadioPage />} />
          <Route path="/discover/artist" element={<ArtistPage />}>
            <Route index element={<CategoryPage />} />
            <Route path="/discover/artist/:artistName" element={<CategoryPage />} />
          </Route>
          <Route path="/discover/newrecord" element={<NewRecordPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/mymusic" element={<MyMusic />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/*" element={<Error />} /> 
        </Route>
      </Routes>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {Index()}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

