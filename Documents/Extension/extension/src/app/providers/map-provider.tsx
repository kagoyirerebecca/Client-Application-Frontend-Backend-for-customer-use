'use client';

import React, { ReactNode } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Ensure that the access token is always a string
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || 'your_default_access_token_here';

type MapProviderProps = {
    children: ReactNode;
};

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
    return <div className="mapbox-container">{children}</div>;
};
