import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// import "leaflet/dist/leaflet.css";

const LeafletMap = () => {

  const position = [43.777702, -79.233238];
    
  return (
    <>
      <MapContainer center={position} zoom={8} scrollWheelZoom={false} style={{width: '500px', height: '500px'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Ontario, Canada
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default LeafletMap