import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link, withRouter, transitionTo } from 'react-router-dom'
import { storage } from '../firebase';
import './login.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import * as ReactBootstrap from 'react-bootstrap';
import Footer from './Footer';
import GroupMe from './GroupMe';

export default class Sermons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            redirect2: false,
            sermons: [],
            link: '',
            index: 0,
            urls: ''
        }
    }
    componentDidMount() {
        fetch(`/api/v1/user`)
            .then(res =>
                res.json()
            )
            .then(data => {
                if (data === 'Logged Out') {
                    this.setState({ redirect: true })
                }
            }).then(() => {
                axios.get('api/v1/sermons')
                    .then((res) => {
                        this.setState({ sermons: res.data })
                    })
            })
        // .then(() => {
        //     storage.ref('sermons').child(`cpbc.mp3`).getDownloadURL().then(url => {
        //         console.log(url)
        //         this.setState({ urls: url });
        //     })
        // })
        // .then(() => {
        //     console.log(this.state.sermons)
        //     console.log(this.state.urls)
        // })
    }
    render() {
        const columns = [
            { dataField: "id", text: 'sermon id' },
            { dataField: "elder", text: 'Elder' },
            { dataField: "createdAt", text: 'Date' }
        ]
        const rowEvents = {
            onClick: (e, rows) => {
                window.location.assign(`https://firebasestorage.googleapis.com/v0/b/church-284323.appspot.com/o/sermons%2F${rows.url}?alt=media&token=365b7d51-2ef6-4b1f-aa89-b5a70d8a1f1d`)
            }
        }
        return (
            <div className="mainDiv2">
                <div className="mainContainer">

                    <h2>Sermon List</h2>
                    {this.state.redirect ? <Redirect to='/login' /> : null}
                    <div className="tables">
                        <BootstrapTable
                            keyField="name"
                            data={this.state.sermons}
                            columns={columns}
                            pagination={paginationFactory()}
                            rowEvents={rowEvents}
                        />
                    </div>
                    <div>
                        <GroupMe />
                    </div>
                    <div>
                        <Link to="/directory"><h2>Directory</h2></Link>
                    </div>
                </div>
            </div>
        )
    }
}
