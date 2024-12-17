'use client';

import React, { useState, useMemo } from 'react';
import { Map, Marker, Popup } from 'react-map-gl';

interface MarkerData {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    description: string;
}

const initialViewState = {
    longitude: 30.0,
    latitude: -2.0,
    zoom: 6
};

const markersData: MarkerData[] = [
    { id: 1, latitude: -2.04, longitude: 30.1, name: "Tree Location 1", description: "Details about Tree 1" },
    // Add other markers as needed...
];

const MapComponent = () => {
    const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

    // Memoizing the markers to prevent unnecessary re-renders
    const markers = useMemo(() => markersData.map(marker => (
        <Marker
            key={marker.id}
            longitude={marker.longitude}
            latitude={marker.latitude}
            color="blue"
            onClick={() => setSelectedMarker(marker)}
        />
    )), []);

    return (
        <div style={{ width: '100%', height: '60vh' }}>
            <Map
                initialViewState={initialViewState}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            >
                {markers}

                {selectedMarker && (
                    <Popup
                        longitude={selectedMarker.longitude}
                        latitude={selectedMarker.latitude}
                        onClose={() => setSelectedMarker(null)}
                        anchor="bottom"
                    >
                        <div>
                            <h2>{selectedMarker.name}</h2>
                            <p>{selectedMarker.description}</p>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
};

export { MapComponent };
