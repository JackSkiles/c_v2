import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

export default function Directory() {
    const [redirect, setPath] = useState(false)
    useEffect = () => {
        fetch(`/api/v1/user`)
            .then(res =>
                res.json()
            )
            .then(data => {
                console.log(data)
                if (data === 'Logged Out') {
                    setPath(true)
                }
            });
    }
    return (
        <div>
            {redirect ? <Redirect to='/directory' /> : null }
        </div>
    )
}
