import { auth, db } from "../firebase-config";
import { set, get, ref } from "firebase/database";
import React, { useRef, useEffect, useState, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalState";
import LeafletMap from "../components/LeafletMap/LeafletMap";


// This is the home page of the website, write all the code for the home page here
export default function Exports(){

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

    useEffect(() => {
        globals.addCoords([[42.777702, -78.233238],[42.577702, -77.233238]])
        globals.addCoords([[42.777702, -79.233238],[42.577702, -79.233238]])
    }, [])
    

    return(
        <>
            <LeafletMap></LeafletMap>
            
            <div>
                <h1>Exports</h1>

                <div className="container">
                    <div className="col"> 

                    </div>
                    <div className="col">
                        <div className = "row">
                            <p>heyyy y peopleeeee your lat is {lat} and your long is {long} lollldllfoslkfjdskj</p>
                        </div>

                        <div className = "row">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}