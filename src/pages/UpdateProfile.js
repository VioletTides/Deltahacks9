import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { db } from '../firebase-config';
import { ref, get, set } from 'firebase/database';
import landingpagebackground from '../assets/landingpagebackground.jpg';

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const latRef = useRef();
    const longRef = useRef();

    async function getLatLong(uid) {
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

    useEffect(() => {
        if (currentUser) {
            getLatLong(currentUser.uid)
                .then(({ lat, long }) => {
                    latRef.current.value = lat;
                    longRef.current.value = long;
                });
        }
    }, [currentUser]);


    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        const lat = latRef.current.value;
        const long = longRef.current.value;
        // Update the latitude and longitude values in the database
        set(ref(db, `${currentUser.uid}`), { lat, long });

        Promise.all(promises)
            .then(() => {
                navigate("/")
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })
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
                    <h2 className="text-center mb-4 ">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                className="rounded-pill"
                                type="email"
                                ref={emailRef}
                                required
                                defaultValue={currentUser.email}
                            />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                className="rounded-pill"
                                type="password"
                                ref={passwordRef}
                                placeholder="Leave blank to keep the same"
                            />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                className="rounded-pill"
                                type="password"
                                ref={passwordConfirmRef}
                                placeholder="Leave blank to keep the same"
                            />
                        </Form.Group>
                        <Form.Group id="lat">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control
                                className="rounded-pill"
                                type="number"
                                step="any"
                                ref={latRef}
                            />
                        </Form.Group>
                        <Form.Group id="long">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control
                                className="rounded-pill"
                                type="number"
                                step="any"
                                ref={longRef}
                            />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4 rounded-pill" type="submit">Update</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        <Link to="/">Cancel</Link>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}
