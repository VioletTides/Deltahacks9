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
    let uid = auth.currentUser.uid;

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

    // getting stock start
    const [fruitsveg, setFruitsveg] = useState(null);
    const [grains, setGrains] = useState(null);
    const [dairyalt, setDairyalt] = useState(null);
    const [meatalt, setMeatalt] = useState(null);
    let quantity;

    async function getQuantities(uid=auth.currentUser.uid) {
        console.log(uid)
        let fruitsveg, grains, dairyalt, meatalt;
        await get(ref(db, `${uid}/inventory`))
            .then(snapshot => {
                const userData = snapshot.val();
                console.log(userData)
                fruitsveg = userData.fruitsveg;
                grains = userData.grains;
                dairyalt = userData.dairyalt;
                meatalt = userData.meatalt;
            })
            .catch(error => {
                console.log(error);
            });
        return { fruitsveg, grains, dairyalt, meatalt };
    }
    
    useEffect(() => { 
        getQuantities(uid)
            .then(({ fruitsveg: fruitsvegValue, grains: grainsValue, dairyalt:dairyaltValue, meatalt:meataltValue }) => {
                setFruitsveg(fruitsvegValue);
                setGrains(grainsValue);
                setDairyalt(dairyaltValue);
                setMeatalt(meataltValue);
            });
        
    }, [])

    // getting stock end

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
                        <Row style={{ width: "30vw", right: "0", position: "absolute" }}>
                            <h1>Export</h1>
                            <h2>Latitude: {lat}</h2>
                            <h2>Longitude: {long}</h2>
                            <div className="w-100 text-center mt-2">
                            <Link to="/">Back to Dashboard</Link>
                        </div>
                        </Row>
                        <Row style={{width:"30vw", right:"0", bottom:"0", position:"absolute"}}>
                            <h1>Export To</h1>
                            <p><strong>Food Bank: </strong> Test Food Bank</p>
                            <ul class="list-group">
                                <li class="list-group-item">Fruits & Vegetables:  10</li>
                                <li class="list-group-item">Grains:  10</li>
                                <li class="list-group-item">Meat & Alternatives:  123</li>
                                <li class="list-group-item">Dairy & Alternatives:  9</li>
                            </ul>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}