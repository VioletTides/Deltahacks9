import React, { useState, useEffect } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { ref, get } from 'firebase/database';
import landingpagebackground from '../assets/landingpagebackground.jpg';

export async function getLatLong(uid) {
    let lat, long;
    await get(ref(db, `${uid}`))
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

// export async function getInventory(uid) {
//     let inventory;
//     await get(ref(db, `${uid}`))
//         .then(snapshot => {
//             const userData = snapshot.val();
//             inventory = userData.inventory;
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     return inventory;
// }

// export async function updateInventory(currentUser) {
//     const [inventory, setInventory] = useState(null);
//     useEffect(() => {
//         if(currentUser) {
//             getInventory(currentUser.uid)
//             .then(({ inventory: inventoryValue }) => {
//                 setInventory(inventoryValue);
//             });
//         }
//     }, [currentUser]);

// }

export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const Navigate = useNavigate();
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);

    useEffect(() => {
        if (currentUser) {
            getLatLong(currentUser.uid)
                .then(({ lat: latValue, long: longValue }) => {
                    setLat(latValue);
                    setLong(longValue);
                });
        }
    }, [currentUser]);

    async function handleLogout() {
        try {
            setError("")
            await logout()
            Navigate("/login")
        } catch (error) {
            setError("Failed to log out")
            console.log(error)
        }
    }

    const style = {
        backgroundImage: `url(${landingpagebackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        position: 'absolute',
    };

    return (
        <div style={style}>
            <Card className="mx-auto" style={{ width: '40vw' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div>
                        <strong>Email:</strong> {currentUser.email}
                    </div>
                    <div>
                        <strong>Latitude:</strong> {lat}
                    </div>
                    <div>
                        <strong>Longtitude:</strong> {long}
                    </div>
                    <div>
                        <strong>UID:</strong> {currentUser.uid}
                    </div>

                    <Link to="/update-profile">
                        <Button className="btn btn-primary w-100 mt-4 rounded-pill">Update Profile</Button>
                    </Link>
                    <div className="w-100 text-center mt-2">
                        <Button variant="link" onClick={handleLogout}>Log Out</Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}
