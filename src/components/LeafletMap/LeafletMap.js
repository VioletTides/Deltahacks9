import React, { useContext, useEffect,useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {CreateLeafletRoute } from './CreateLeafletRoute';
import "./leaflet_support.css"
import { GlobalContext } from "../../contexts/GlobalState";

const LeafletMap = () => {
    const defaultTestPosition = [43.777702, -79.233238];
    const globals = useContext(GlobalContext);
    // const [leafCoords, setLeafCoords] = useState([])
    // useEffect(() => {
    //     // check if context has updated
    //     // if (context !== prevContext) {
    //       // update component
    //       setLeafCoords(globals.coords);
    //   }, [globals, globals.coords, setLeafCoords]);
    return (
        <>
            <MapContainer center={defaultTestPosition} zoom={8} scrollWheelZoom={false} style={{width: '1000px', height: '1000px'}}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {globals.coords.map((coords) => <CreateLeafletRoute coords={coords}></CreateLeafletRoute>)}
            </MapContainer>
        </>
    )
}



export default LeafletMap
