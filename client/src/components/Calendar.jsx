
import Footer from './Footer';
import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
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
            })
    }

    render() {
        return (
            <div className="mainDiv2">
                {this.state.redirect ? <Redirect to='/login' /> : null}
                <div>
                    <Link to="/sermons"><h2>Sermons</h2></Link>
                    <Link to="/directory"><h2>Directory</h2></Link>
                </div>
                <Footer />
            </div>
        )
    }
}

