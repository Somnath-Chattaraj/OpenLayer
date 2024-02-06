import React, { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { Vector as VectorLayer } from 'ol/layer';
import { OSM, TileWMS, Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import CircleStyle from 'ol/style/Circle';
import Style from 'ol/style/Style';
import { defaults as defaultControls, ScaleLine } from 'ol/control';
import map1 from '../assets/ver1.geojson';

export default function StreetLight() {
  useEffect(() => {
    // Initialize OpenLayers map
    const map = new Map({
      target: 'map',
      controls: defaultControls().extend([new ScaleLine()]),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        // Example of adding a WMS layer
        new TileLayer({
          source: new TileWMS({
            url: 'https://ahocevar.com/geoserver/wms',
          }),
        }),
      ],
      view: new View({
        center: [9839861.305541439,2578981.3007881613],
        zoom: 13,
      }),
    });

    // Add GeoJSON layer
    // const EUCountriesGeoJSON = new VectorLayer({
    //   source: new VectorSource({
    //     url: map1,
    //     format: new GeoJSON(),
    //     strategy: bboxStrategy,
    //   }),
    //   visible: true,
    //   title: 'EUCountriesGeoJSON',
    //   style: new ol.style.Style({
    //     fill: fillStyle,
    //     stroke: strokeStyle,
    //     image: circleStyle
    //   })
    // });
    const strokeStyle = new Stroke({
        color: 'rgba(0, 0, 0, 1)', // Color of the stroke (black in this example)
        width: 1, // Width of the stroke in pixels
        lineDash: [], // Optional: Define a dash pattern for the stroke
    });

    const EUCountriesGeoJSON = new VectorLayer({
        source: new VectorSource({
          url: map1,
          format: new GeoJSON(),
          strategy: bboxStrategy,
        }),
        visible: true,
        title: 'EUCountriesGeoJSON',
        style: new Style({
          fill: new Fill({
            color: 'rgba(255, 255, 0, 0.5)', // Transparent yellow color (rgba)
          }),
          stroke: strokeStyle,
          image: new CircleStyle({
            radius: 5,
            fill: new Fill({
              color: 'rgba(255, 255, 0, 0.5)', // Transparent yellow color (rgba)
            }),
            stroke: strokeStyle,
          }),
        }),
    });
      

    EUCountriesGeoJSON.getSource().on('change', function (event) {
      if (EUCountriesGeoJSON.getSource().getState() === 'error') {
        const error = EUCountriesGeoJSON.getSource().getLoadError();
        console.error('Error loading GeoJSON:', error);
      }
    });

    map.addLayer(EUCountriesGeoJSON);

    // Click event handler
    map.on('click', function (event) {
      const clickedCoordinate = event.coordinate;
      console.log('Clicked Coordinate:', clickedCoordinate);

      // If you want to convert the coordinate to LonLat format:
      const lonLatCoordinate = fromLonLat(clickedCoordinate);
      console.log('Clicked LonLat Coordinate:', lonLatCoordinate);
    });

    // Clean up when the component is unmounted
    return () => {
      map.on('click');
    };
  }, []);

  return <div id="map" className='fade-top' style={{ width: '100%', height: '100vh',  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)'}}></div>;
}

