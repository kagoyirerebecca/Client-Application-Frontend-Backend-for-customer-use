'use client';

import React from 'react';
import { createContext, useContext, ReactNode } from 'react';
import mapboxgl from 'mapbox-gl';

type MapContextType = {
  mapboxgl: typeof mapboxgl | null;
};

const MapContext = createContext<MapContextType | null>(null);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  if (!process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
    console.error('Mapbox access token is not set');
    return null;
  }
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const value = { mapboxgl };

  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  );
};

export const useMap = () => {
  const context = useContext(MapContext);
  if (context === null) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
};

