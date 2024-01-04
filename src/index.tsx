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
        <Route path='/region/kanto' element={<RegionPage name="Kanto" limit={151} offset={0} link="https://archives.bulbagarden.net/media/upload/thumb/2/25/LGPE_Kanto_Map.png/320px-LGPE_Kanto_Map.png" />} />
        <Route path='/region/johto' element={<RegionPage name="Johto" limit={100} offset={151} link="https://archives.bulbagarden.net/media/upload/thumb/6/64/JohtoMap.png/320px-JohtoMap.png" />} />
        <Route path='/region/hoenn' element={<RegionPage name="Hoenn" limit={135} offset={251} link="https://archives.bulbagarden.net/media/upload/thumb/8/85/Hoenn_ORAS.png/320px-Hoenn_ORAS.png" />} />
        <Route path='/region/sinnoh' element={<RegionPage name="Sinnoh" limit={107} offset={386} link="https://archives.bulbagarden.net/media/upload/thumb/0/08/Sinnoh_BDSP_artwork.png/320px-Sinnoh_BDSP_artwork.png" />} />
        <Route path='/region/unova' element={<RegionPage name="Unova" limit={156} offset={493} link="https://archives.bulbagarden.net/media/upload/thumb/f/fc/Unova_B2W2_alt.png/320px-Unova_B2W2_alt.png" />} />
        <Route path='/region/kalos' element={<RegionPage name="Kalos" limit={72} offset={649} link="https://archives.bulbagarden.net/media/upload/thumb/8/8a/Kalos_alt.png/320px-Kalos_alt.png" />} />
        <Route path='/region/alola' element={<RegionPage name="Alola" limit={88} offset={721} link="https://archives.bulbagarden.net/media/upload/thumb/0/0b/Alola_USUM_artwork.png/320px-Alola_USUM_artwork.png" />} />
        <Route path='/region/galar' element={<RegionPage name="Galar" limit={96} offset={809} link="https://archives.bulbagarden.net/media/upload/thumb/c/ce/Galar_artwork.png/170px-Galar_artwork.png" />} />
        <Route path='/region/paldea' element={<RegionPage name="Paldea" limit={120} offset={905} link="https://archives.bulbagarden.net/media/upload/thumb/f/fd/Paldea_artwork.png/320px-Paldea_artwork.png" />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();