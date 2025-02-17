'use client';

import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { useMap } from '../providers/map-provider';
import '../globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const { mapboxgl } = useMap();

  useEffect(() => {
    if (!mapboxgl) {
      console.error('Mapbox GL is not initialized');
      return;
    }

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [29.8739, -1.9403],
      zoom: 9.5,
  
    });
    
    // map.setFog({
    //   color: 'rgb(220, 159, 159)', // Pink fog / lower atmosphere
    //   'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
    //   'horizon-blend': 0.4, // Exaggerate atmosphere (default is .1)
    // });

    // map.addSource('mapbox-dem', {
    //   type: 'raster-dem',
    //   url: 'mapbox://mapbox.terrain-rgb',
    // });

    // map.setTerrain({
    //   source: 'mapbox-dem',
    //   exaggeration: 1.5,
    // });

    map.on('style.load', () => {
      map.setFog({
        color: 'rgb(220, 159, 159)', // Pink fog / lower atmosphere
        'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
        'horizon-blend': 0.4, // Exaggerate atmosphere (default is .1)
      });
   
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.terrain-rgb',
      });
   
      map.setTerrain({
        source: 'mapbox-dem', 
        exaggeration: 1.5,
      });

      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.backgroundImage = 'url("/images/icon-ecoforest 4.png")'; // Adjust the path as needed
      el.style.width = '58px';
      el.style.height = '100px';
      el.style.backgroundSize = 'cover';
  
      new mapboxgl.Marker(el)
        .setLngLat([29.8739, -1.9403])
        .addTo(map);
  
      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false, closeOnClick: false })
        .setLngLat([29.8739, -1.9403]) // Set to your desired coordinates
        .setHTML(`
         <div style="
          background: white;
          border-radius: 0px;
          display: flex;
          align-items: center;
          font-family: Arial, sans-serif;
          position: relative;
          font-size: 14px;
          color: #333;
          border:0px red solid;
          ">
            <img src="/images/istockphoto-1201112520-612x612 (1) 1.png" alt="Leaf" style="
              width: 40px;
              height: auto;
              margin-right: 10px;
              border-radius: 50%;
            " />
            <div>Want to Get to Know Me? <strong>Read My Story!</strong></div>
         
        </div>
        `)
        .addTo(map);
   });

   

    return () => map.remove();
  }, [mapboxgl]);

  return <div id='map' style={{ width: '50%', height: '600px' }} />;
};

export default Map;
