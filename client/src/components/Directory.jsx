import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';

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
            {dataField: "firstName"},
            {dataField: "lastName"},
            {dataField: "phone"},
            {dataField: "email"},
            {dataField: "address"}
        ]
        return (
            <div className="App">
                {this.state.redirect ? <Redirect to='/login' /> : null}
                <BootstrapTable
                    keyField="name"
                    data={this.state.directory}
                    columns={columns}
                    pagination={paginationFactory()}
                    />
                {/* <h2>Directory</h2>
                <div className="mainDiv2">
                    <div className="subDiv">
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
                </div> */}
            </div>
        )
    }
}
