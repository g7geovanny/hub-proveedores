import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ coordinates }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = coordinates || { lat: 19.436529891730846, lng: -99.15457569196104 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCGg6DFKVwN7iiFmgZHtNh-Zguebdak8D8">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
