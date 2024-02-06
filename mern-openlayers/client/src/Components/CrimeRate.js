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
import Text from 'ol/style/Text'; // Import Text class for adding numbers
import { defaults as defaultControls, ScaleLine } from 'ol/control';
import map10 from '../assets/map10.geojson';
import map3 from '../assets/map3.geojson'
import map2 from '../assets/map2.geojson'
import map7 from '../assets/map7.geojson'
import map1 from '../assets/map1.geojson'
import map6 from '../assets/map6.geojson'


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
        center: [9835832.42734665, 2579573.9358853386],
        zoom: 12,
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

    const transparentRedFill = new Fill({
        color: 'rgba(255, 0, 0, 0.5)', // Transparent red color (rgba)
    });

    const textFill = new Fill({
        color: 'white', // Color of the text
    });
      
/*-----------------------------------------Vector Layer----------------------------------------------*/
      const EUCountriesGeoJSON = new VectorLayer({
        source: new VectorSource({
          url: map10,
          format: new GeoJSON(),
          strategy: bboxStrategy,
        }),
        visible: true,
        title: 'EUCountriesGeoJSON',
        style: new Style({
          fill: transparentRedFill,
          stroke: strokeStyle,
          image: new CircleStyle({
            radius: 5,
            fill: transparentRedFill,
            stroke: strokeStyle,
          }),
          text: new Text({
            text: '10', // Number to display
            font: '40px sans-serif', // Font style
            fill: textFill,
            textAlign: 'center', // Center the text horizontally
            textBaseline: 'middle', // Center the text vertically
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

    const EUCountriesGeoJSON7 = new VectorLayer({
        source: new VectorSource({
          url: map6,
          format: new GeoJSON(),
          strategy: bboxStrategy,
        }),
        visible: true,
        title: 'EUCountriesGeoJSON7',
        style: new Style({
          fill: transparentRedFill,
          stroke: strokeStyle,
          image: new CircleStyle({
            radius: 5,
            fill: transparentRedFill,
            stroke: strokeStyle,
          }),
          text: new Text({
            text: '6', // Number to display
            font: '30px sans-serif', // Font style
            fill: textFill,
            textAlign: 'center', // Center the text horizontally
            textBaseline: 'middle', // Center the text vertically
          }),
        }),
      });
      

    EUCountriesGeoJSON7.getSource().on('change', function (event) {
      if (EUCountriesGeoJSON.getSource().getState() === 'error') {
        const error = EUCountriesGeoJSON.getSource().getLoadError();
        console.error('Error loading GeoJSON:', error);
      }
    });

    map.addLayer(EUCountriesGeoJSON7);
    

    const EUCountriesGeoJSON5 = new VectorLayer({
        source: new VectorSource({
          url: map1,
          format: new GeoJSON(),
          strategy: bboxStrategy,
        }),
        visible: true,
        title: 'EUCountriesGeoJSON5',
        style: new Style({
          fill: transparentRedFill,
          stroke: strokeStyle,
          image: new CircleStyle({
            radius: 5,
            fill: transparentRedFill,
            stroke: strokeStyle,
          }),
          text: new Text({
            text: '1', // Number to display
            font: '20px sans-serif', // Font style
            fill: textFill,
            textAlign: 'center', // Center the text horizontally
            textBaseline: 'middle', // Center the text vertically
          }),
        }),
      });
      

    EUCountriesGeoJSON5.getSource().on('change', function (event) {
      if (EUCountriesGeoJSON.getSource().getState() === 'error') {
        const error = EUCountriesGeoJSON.getSource().getLoadError();
        console.error('Error loading GeoJSON:', error);
      }
    });

    map.addLayer(EUCountriesGeoJSON5);

    const EUCountriesGeoJSON6 = new VectorLayer({
        source: new VectorSource({
          url: map10,
          format: new GeoJSON(),
          strategy: bboxStrategy,
        }),
        visible: true,
        title: 'EUCountriesGeoJSON',
        style: new Style({
          fill: transparentRedFill,
          stroke: strokeStyle,
          image: new CircleStyle({
            radius: 5,
            fill: transparentRedFill,
            stroke: strokeStyle,
          }),
          text: new Text({
            text: '10', // Number to display
            font: '40px sans-serif', // Font style
            fill: textFill,
            textAlign: 'center', // Center the text horizontally
            textBaseline: 'middle', // Center the text vertically
          }),
        }),
      });
      

    EUCountriesGeoJSON6.getSource().on('change', function (event) {
      if (EUCountriesGeoJSON.getSource().getState() === 'error') {
        const error = EUCountriesGeoJSON.getSource().getLoadError();
        console.error('Error loading GeoJSON:', error);
      }
    });

    map.addLayer(EUCountriesGeoJSON6);



    const EUCountriesGeoJSON3 = new VectorLayer({
        source: new VectorSource({
          url: map2,
          format: new GeoJSON(),
          strategy: bboxStrategy,
        }),
        visible: true,
        title: 'EUCountriesGeoJSON',
        style: new Style({
          fill: transparentRedFill,
          stroke: strokeStyle,
          image: new CircleStyle({
            radius: 5,
            fill: transparentRedFill,
            stroke: strokeStyle,
          }),
          text: new Text({
            text: '2', // Number to display
            font: '20px sans-serif', // Font style
            fill: textFill,
            textAlign: 'center', // Center the text horizontally
            textBaseline: 'middle', // Center the text vertically
          }),
        }),
      });
      

    EUCountriesGeoJSON.getSource().on('change', function (event) {
      if (EUCountriesGeoJSON.getSource().getState() === 'error') {
        const error = EUCountriesGeoJSON.getSource().getLoadError();
        console.error('Error loading GeoJSON:', error);
      }
    });

    map.addLayer(EUCountriesGeoJSON3);

    const EUCountriesGeoJSON4 = new VectorLayer({
        source: new VectorSource({
          url: map7,
          format: new GeoJSON(),
          strategy: bboxStrategy,
        }),
        visible: true,
        title: 'EUCountriesGeoJSON4',
        style: new Style({
          fill: transparentRedFill,
          stroke: strokeStyle,
          image: new CircleStyle({
            radius: 5,
            fill: transparentRedFill,
            stroke: strokeStyle,
          }),
          text: new Text({
            text: '7', // Number to display
            font: '30px sans-serif', // Font style
            fill: textFill,
            textAlign: 'center', // Center the text horizontally
            textBaseline: 'middle', // Center the text vertically
          }),
        }),
      });
      

    EUCountriesGeoJSON.getSource().on('change', function (event) {
      if (EUCountriesGeoJSON.getSource().getState() === 'error') {
        const error = EUCountriesGeoJSON.getSource().getLoadError();
        console.error('Error loading GeoJSON:', error);
      }
    });

    map.addLayer(EUCountriesGeoJSON4);

    const EUCountriesGeoJSON2 = new VectorLayer({
        source: new VectorSource({
          url: map3,
          format: new GeoJSON(),
          strategy: bboxStrategy,
        }),
        visible: true,
        title: 'EUCountriesGeoJSON2',
        style: new Style({
          fill: transparentRedFill,
          stroke: strokeStyle,
          image: new CircleStyle({
            radius: 5,
            fill: transparentRedFill,
            stroke: strokeStyle,
          }),
          text: new Text({
            text: '3', // Number to display
            font: '20px sans-serif', // Font style
            fill: textFill,
            textAlign: 'center', // Center the text horizontally
            textBaseline: 'middle', // Center the text vertically
          }),
        }),
      });
      

    EUCountriesGeoJSON2.getSource().on('change', function (event) {
      if (EUCountriesGeoJSON.getSource().getState() === 'error') {
        const error = EUCountriesGeoJSON.getSource().getLoadError();
        console.error('Error loading GeoJSON:', error);
      }
    });

    map.addLayer(EUCountriesGeoJSON2);

/*-----------------------------------------Vector Layer----------------------------------------------*/

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
