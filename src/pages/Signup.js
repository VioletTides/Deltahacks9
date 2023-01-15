import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useNavItem } from '@restart/ui/esm/NavItem';
import landingpagebackground from '../assets/landingpagebackground.jpg';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const latRef = useRef()
    const longRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, latRef.current.value, longRef.current.value)
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
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
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group  id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className='rounded-pill' type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='rounded-pill' type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control className='rounded-pill' type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Form.Group id="lat">
                            <Form.Label>Latitude: </Form.Label>
                            <Form.Control className='rounded-pill' type="input" ref={latRef} required />
                        </Form.Group>
                        <Form.Group id="long">
                            <Form.Label>Longtitude</Form.Label>
                            <Form.Control className='rounded-pill' type="input" ref={longRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-4 rounded-pill" type="submit">Sign Up</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}