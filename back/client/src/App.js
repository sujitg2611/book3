import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Login from './pages/login/Login';
import TouristPlace from './pages/touristPlace/TouristPlace';
import TouristPlaceInfo from './pages/touristPlaceInfo/TouristPlaceInfo';
import Manipur from './components/attractionPages/Manipur';
import Nagaland from './components/attractionPages/Nagaland';
import Odisha from './components/attractionPages/Odisha';
import Rajasthan from './components/attractionPages/Rajasthan';
import TamilNadu from './components/attractionPages/TamilNadu';
import Tripura from './components/attractionPages/Tripura';
import UttarPradesh from './components/attractionPages/UttarPradesh';

import Attraction from './components/attraction/Attraction';
import AndhraPradeshInfo from './components/attractionPages/AndhraPradeshInfo';
import BiharInfo from './components/attractionPages/BiharInfo';
import GoaInfo from './components/attractionPages/GoaInfo';
import Gujarat from './components/attractionPages/Gujarat';
import HimachalPradeshInfo from './components/attractionPages/HimachalPradeshInfo';
import Karnataka from './components/attractionPages/Karnataka';
import Maharashtra from './components/attractionPages/Maharashtra';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/attraction" element={<Attraction />} />
        <Route path="/tourist" element={<TouristPlace />} />
        <Route path="/pagesInfo" element={<TouristPlaceInfo />} />
        <Route path="/AndhraPradesh" element={<AndhraPradeshInfo />} />
        <Route path="/Bihar" element={<BiharInfo />} />
        <Route path="/Goa" element={<GoaInfo />} />
        <Route path="/Gujarat" element={<Gujarat />} />
        <Route path="/HimachalPradesh" element={<HimachalPradeshInfo />} />
        <Route path="/Karnataka" element={<Karnataka />} />
        <Route path="/Maharashtra" element={<Maharashtra />} />
        <Route path="/Manipur" element={<Manipur />} />
        <Route path="/Nagaland" element={<Nagaland />} />
        <Route path="/Odisha" element={<Odisha />} />
        <Route path="/Rajasthan" element={<Rajasthan />} />
        <Route path="/TamilNadu" element={<TamilNadu />} />
        <Route path="/Tripura" element={<Tripura />} />
        <Route path="/UttarPradesh" element={<UttarPradesh />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
