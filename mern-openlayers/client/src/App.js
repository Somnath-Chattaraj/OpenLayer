import React from 'react';
// // import ol from 'ol';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// // import ImageLayer from 'ol/layer/Image';
// import { Vector as VectorLayer } from 'ol/layer';
// import { OSM, TileWMS as TileWMSSource, Vector as VectorSource } from 'ol/source';
// import { fromLonLat } from 'ol/proj';
// import GeoJSON from 'ol/format/GeoJSON';
// import { bbox as bboxStrategy } from 'ol/loadingstrategy';
// import { defaults as defaultControls, ScaleLine } from 'ol/control';
// import map1 from './Components/ver1.geojson'
import { Routes, Route } from 'react-router-dom';
import StreetLight from './Components/StreetLight';
import CrimeRate from './Components/CrimeRate';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <StreetLight /> }></Route>
        <Route path='/CrimeRate' element= { <CrimeRate /> }></Route>
      </Routes>
    </>
    
  );
}

export default App;

