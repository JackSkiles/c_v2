
import Footer from './Footer';
import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            calendar: []
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
            fetch('/api/v1/calendar')
                .then(res => res.json()
                )
                .then(data => {
                    this.setState({ calendar: data })
                })
        })
    }

    render() {
        const columns = [
            {dataField: "Days", text: 'January'},
            {dataField: "February", text: 'February'},
            {dataField: "March", text: 'March'},
            {dataField: "April", text: 'April'},
            {dataField: "address", text: 'Home Address'}
        ]
        return (
            <div className="mainDiv2">
                {this.state.redirect ? <Redirect to='/login' /> : null}
                <div className="tables">
                    <BootstrapTable 
                        keyField="name"
                        data={this.state.calendar}
                        columns={columns}
                        pagination={paginationFactory()}
                        />
                </div>
                <div className="links">
                    <Link to="/sermons"><h2>Sermons</h2></Link>
                    <Link to="/directory"><h2>Directory</h2></Link>
                </div>
                <Footer />
            </div>
        )
    }
}

