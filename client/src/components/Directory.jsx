import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';
import Footer from './Footer'

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
        const columns = [
            {dataField: "firstName", text: 'First Name'},
            {dataField: "lastName", text: 'Last Name'},
            {dataField: "phone", text: 'Phone Number'},
            {dataField: "email", text: 'Email'},
            {dataField: "address", text: 'Home Address'}
        ]
        return (
            <div className="mainDiv2">
                {this.state.redirect ? <Redirect to='/login' /> : null}
                <div className="tables">
                    <BootstrapTable 
                        keyField="name"
                        data={this.state.directory}
                        columns={columns}
                        pagination={paginationFactory()}
                        />
                </div>
                <div>
                    <Link to="/sermons"><h2>Sermons</h2></Link>
                </div>
                <Footer />
            </div>
        )
    }
}
