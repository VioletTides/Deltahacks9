import React, { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {CreateLeafletRoute, CreateLeafletRoute2} from './CreateLeafletRoute';
import "./leaflet_support.css"

const LeafletMap = () => {
    const defaultTestPosition = [43.777702, -79.233238];

    return (
        <>
            <MapContainer center={defaultTestPosition} zoom={8} scrollWheelZoom={false} style={{width: '1000px', height: '1000px'}}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={defaultTestPosition}>
                <Popup>
                    Ontario, Canada
                </Popup>
                </Marker>

                <CreateLeafletRoute></CreateLeafletRoute>
            </MapContainer>
        </>
    )
}



export default LeafletMap
