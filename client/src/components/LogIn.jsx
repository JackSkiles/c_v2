import React, { useState, useEffect } from 'react'
import './login.css';
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function LogIn() {
    const [password, setPassword] = useState('')
    const [redirect, setPath] = useState(false)
    
    const authorizeLogin = (e) => {
        e.preventDefault();
        axios.post('/api/v1/login', {
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
            {redirect ? <Redirect to='directory' /> : (
            <div className="form">
                <Form onSubmit={authorizeLogin}>
                    <div className="password">
                        <h1>Log In</h1>
                        <p>Some content is blocked and must be logged in to access.</p>
                        <input type="password" id="pass" name="password" onChange={myChangeHandler} value={password}></input>
                    </div>
                    <div className="button">
                        <Button variant="info" type="submit">Log In</Button>
                    </div>
                        {/* <Link to="/admin" className="link"><h3 className="text">A</h3>
                    </Link> */}
                </Form>
            </div>
            )}
        </div>
    )
}
