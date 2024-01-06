import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Region from './pages/Region';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Settings from './pages/Settings';
import RegionPage from './pages/regions/RegionPage';
import Pokemon from './pages/Pokemon';
import kanto from './images/kanto.png'
import johto from './images/johto.png'
import hoenn from './images/hoenn.png'
import sinnoh from './images/sinnoh.png'
import unova from './images/unova.png'
import kalos from './images/kalos.png'
import alola from './images/alola.png'
import galar from './images/galar.png'
import paldea from './images/paldea.png'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/region' element={<Region />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/region/kanto' element={<RegionPage name="Kanto" limit={151} offset={0} link={kanto} />} />
        <Route path='/region/johto' element={<RegionPage name="Johto" limit={100} offset={151} link={johto} />} />
        <Route path='/region/hoenn' element={<RegionPage name="Hoenn" limit={135} offset={251} link={hoenn} />} />
        <Route path='/region/sinnoh' element={<RegionPage name="Sinnoh" limit={107} offset={386} link={sinnoh} />} />
        <Route path='/region/unova' element={<RegionPage name="Unova" limit={156} offset={493} link={unova} />} />
        <Route path='/region/kalos' element={<RegionPage name="Kalos" limit={72} offset={649} link={kalos} />} />
        <Route path='/region/alola' element={<RegionPage name="Alola" limit={88} offset={721} link={alola} />} />
        <Route path='/region/galar' element={<RegionPage name="Galar" limit={96} offset={809} link={galar} />} />
        <Route path='/region/paldea' element={<RegionPage name="Paldea" limit={120} offset={905} link={paldea} />} />
        <Route path='/pokemon/:name' element={<Pokemon />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();