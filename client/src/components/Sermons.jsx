import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { storage } from '../firebase';

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
    // getSermon = (name) => {
    //     storage.ref('sermons').child(`${name}.mp3`).getDownloadURL().then(url => {
    //         this.setState({ urls: url });
    //     })
    //     return console.log('done')
    // }
    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect to='/login' /> : null}
                {this.state.sermons.map(sermon => {
                    const url = `https://firebasestorage.googleapis.com/v0/b/church-284323.appspot.com/o/sermons%2F${sermon.url}.mp3?alt=media&token=365b7d51-2ef6-4b1f-aa89-b5a70d8a1f1d`
                    // this.setState({ index: this.state.index + 1 })
                    return (
                        <div key={sermon.id} >
                            <h1>{sermon.elder}</h1>
                            <div>
                                <iframe src={url}></iframe>
                                {/* <a href={url}>{sermon.url}</a> */}
                            </div>
                        </div>
                    )
                })}
                <div>
                    <Link to="/directory"><h2>Directory</h2></Link>
                </div>
            </div>
        )
    }
}
