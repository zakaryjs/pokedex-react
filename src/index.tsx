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
import Kanto from './pages/regions/Kanto';
import Johto from './pages/regions/Johto';
import Hoenn from './pages/regions/Hoenn';
import Sinnoh from './pages/regions/Sinnoh';
import Unova from './pages/regions/Unova';
import Kalos from './pages/regions/Kalos';
import Alola from './pages/regions/Alola';
import Galar from './pages/regions/Galar';
import Paldea from './pages/regions/Paldea';

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
        <Route path='/region/kanto' element={<Kanto />} />
        <Route path='/region/johto' element={<Johto />} />
        <Route path='/region/hoenn' element={<Hoenn />} />
        <Route path='/region/sinnoh' element={<Sinnoh />} />
        <Route path='/region/unova' element={<Unova />} />
        <Route path='/region/kalos' element={<Kalos />} />
        <Route path='/region/alola' element={<Alola />} />
        <Route path='/region/galar' element={<Galar />} />
        <Route path='/region/paldea' element={<Paldea />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
