import React from 'react';
import './login.css';

export default function LogIn() {
    return (
        <div className="main">
            <div className="form">
                <form>
                    <div className="password">
                        <h1>Log In</h1>
                        <p>Some content is blocked and most be logged in to access.</p>
                        <input type="password" id="pass" name="password"></input>
                    </div>

                    <div className="button">
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
