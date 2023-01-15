import { auth, db } from "../firebase-config";
import { set, get, ref } from "firebase/database";
import React, { useRef, useEffect, useState } from "react"


// This is the home page of the website, write all the code for the home page here
export default function Exports(){
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

    return(
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
    )
}