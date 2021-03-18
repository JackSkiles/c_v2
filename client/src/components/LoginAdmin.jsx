import React, { useState, useEffect } from 'react'
import './login.css';
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import { Form, Button } from 'react-bootstrap'

export default function LoginAdmin() {
    const [password, setPassword] = useState('')
    const [redirect, setPath] = useState(false)
    
    const authorizeLogin = (e) => {
        e.preventDefault();
        axios.post('/api/v1/login/admin', {
            password: password
        })
        .then(() => {
            setPath(true)
        })
        .catch(err => {
            console.log(err);
            alert('Error logging in please try again')
        })
    }
    const myChangeHandler = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div className="main2">
            {redirect ? <Redirect to='/upload' /> : (
            <div className="form">
                <Form onSubmit={authorizeLogin}>
                    <div className="password">
                        <h1>Log In</h1>
                        <p>Some content is blocked and most be logged in to access.</p>
                        <input type="password" id="pass" name="password" onChange={myChangeHandler} value={password}></input>
                    </div>

                    <div className="button">
                        <Button type="submit">Log In</Button>
                    </div>
                </Form>
            </div>
            )}
        </div>
    )
}