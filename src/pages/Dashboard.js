import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const Navigate = useNavigate()

    async function handleLogout() {
        try {
            setError("")
            await logout()
            Navigate("/login")
        } catch(error) {
            setError("Failed to log out")
            console.log(error)
        }
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div>
                        <strong>Email:</strong> {currentUser.email}
                    </div>
                    <div>
                        <strong>Latitude:</strong> {currentUser.lat}
                    </div>
                    <div>
                        <strong>Longtitude:</strong> {currentUser.longitute}
                    </div>
                    <div>
                        <strong>UID:</strong> {currentUser.uid}
                    </div>
                    

                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    ) 
}