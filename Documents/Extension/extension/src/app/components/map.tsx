'use client';

import React from 'react';
import { useEffect } from 'react';
import { useMap } from '../providers/map-provider';

const Map = () => {
  const { mapboxgl } = useMap();

  useEffect(() => {
    if (!mapboxgl) {
      console.error('Mapbox GL is not initialized');
      return;
    }

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [29.8739, -1.9403],
      zoom: 9.5,
    });

    return () => map.remove();
  }, [mapboxgl]);

  return <div id='map' style={{ width: '50%', height: '600px' }} />;
};

export default Map;
