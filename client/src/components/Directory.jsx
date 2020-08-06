import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom'
import axios from 'axios'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            directory: []
        }
    }

    componentDidMount = () => {
        fetch(`/api/v1/user`)
            .then(res =>
                res.json()
            )
            .then(data => {
                if (data === 'Logged Out') {
                    this.setState({ redirect: true })
                }
            }).then(() => {
                fetch('/api/v1/directory')
                    .then(res => res.json()
                    )
                    .then(data => {
                        this.setState({ directory: data })
                    })
            })
    }
    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect to='/login' /> : null}
                {this.state.directory.map(member => {
                    return (
                        <div key={member.id} >
                            <h1>{member.firstName} {member.lastName}</h1>
                            <div>
                                <p>{member.phone} {member.email}</p>
                                <p>{member.address}</p>
                            </div>
                        </div>
                    )
                })}
                <div>
                    <Link to="/sermons"><h2>Sermons</h2></Link>
                </div>
            </div>
        )
    }
}
