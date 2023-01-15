import { auth, db } from "../firebase-config";
import { set, get, ref } from "firebase/database";
import React, { useRef, useEffect, useState, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalState";
import LeafletMap from "../components/LeafletMap/LeafletMap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


// This is the home page of the website, write all the code for the home page here
export default function Exports() {

    const globals = useContext(GlobalContext)

    const latRef = useRef();
    const longRef = useRef();

    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    async function getLatLong() {
        let lat, long;
        await get(ref(db, `${auth.currentUser.uid}`))
            .then(snapshot => {
                const userData = snapshot.val();
                lat = userData.lat;
                long = userData.long;
            })
            .catch(error => {
                console.log(error);
            });
        return { lat, long };
    }

    useEffect(() => {
        if (auth.currentUser) {
            getLatLong(auth.currentUser.uid)
                .then(({ lat: latValue, long: longValue }) => {
                    setLat(latValue);
                    setLong(longValue);
                });
        }
    }, [auth.currentUser])

    // useEffect(() => {
    //     /* {hey, you can also add new routes into the leaflet map. See?} */
    //     /* { [[lat1, long1], [lat2, long2], ...]} */
    //     /* {you'll need to add them here tho - anywhere else and it will lag the map hard} */
    //     globals.addCoords([[42.777702, -78.233238],[42.577702, -77.233238]])
    // }, [])


    return (
        <>
            {/* make a nice UI where the map is on the left and the coordinates and export options are on the right with bootstrap react*/}
            <Container fluid>
                <Row>
                    <Col style={{ height: "100vh" }}>
                        <div style={{ width: "70vw", left: "0", position: "absolute" }}>
                            <LeafletMap />
                        </div>
                    </Col>
                    <Col>
                        <div style={{ width: "30vw", right: "0", position: "absolute" }}>
                            <h1>Export</h1>
                            <h2>Latitude: {lat}</h2>
                            <h2>Longitude: {long}</h2>
                            <div className="w-100 text-center mt-2">
                            <Link to="/">Back to Dashboard</Link>
                        </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}