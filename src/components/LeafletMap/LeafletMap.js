import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import LeafletRouting from "./CreateLeafletRoute"

// import "leaflet/dist/leaflet.css";

const LeafletMap = () => {

    const defaultTestPosition = [43.777702, -79.233238];
    
    return (
        <>
            {/* The Leaflet map. All components except LeafletRouting are default React Leaflet */}
            <MapContainer center={defaultTestPosition} zoom={8} scrollWheelZoom={false} style={{width: '500px', height: '500px'}}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={defaultTestPosition}>
                <Popup>
                    Ontario, Canada
                </Popup>
                </Marker>

                <LeafletRouting></LeafletRouting>

            </MapContainer>
        </>
    )
}

export default LeafletMap