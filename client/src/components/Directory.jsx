import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import './login.css'

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
            <div className="mainDiv">
                <h2>Directory</h2>
                <div className="mainDiv2">
                    <div className="subDiv">
                        {this.state.redirect ? <Redirect to='/login' /> : null}
                        {this.state.directory.map(member => {
                            return (
                                <div key={member.id} className="cards2">
                                    <p className="paragraph2">{member.firstName} {member.lastName}</p>
                                    <p className="paragraph2">{member.phone}</p>
                                    <p className="paragraph2">{member.email}</p>
                                    <p className="paragraph2">{member.address}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div class="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a class="active" href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
                <div>
                    <Link to="/sermons"><h2>Sermons</h2></Link>
                </div>
            </div>
        )
    }
}
