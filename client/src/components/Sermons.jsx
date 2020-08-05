import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { storage } from '../firebase';
import './login.css';

export default class Sermons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            sermons: [],
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
        return (
            <div className="mainDiv">
                <h2>Sermon List</h2>
                <div className="mainDiv2">
                    <div className="subDiv">
                        {this.state.redirect ? <Redirect to='/login' /> : null}
                        {this.state.sermons.map(sermon => {
                            const url = `https://firebasestorage.googleapis.com/v0/b/church-284323.appspot.com/o/sermons%2F${sermon.url}?alt=media&token=365b7d51-2ef6-4b1f-aa89-b5a70d8a1f1d`
                            const date = sermon.createdAt.slice(0, 10)
                            // this.setState({ index: this.state.index + 1 })
                            return (
                                <div className="card" key={sermon.id} >
                                    <p className="items"><a href={url} target="_blank">{sermon.elder} {date}</a></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                    <div>
                        <Link to="/directory"><h2>Directory</h2></Link>
                    </div>
            </div>
        )
    }
}
