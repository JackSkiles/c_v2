import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { storage } from '../firebase';
import './login.css';
import Axios from 'axios';

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            url: null,
            elder: '',
            progress: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const url = e.target.files[0];
            this.setState(() => ({ url}));
        }
    }
    myChangeHandler = (event) => {
        this.setState({ elder: event.target.value})
    }
    handleUpload = () => {
        const { url } = this.state;
        const uploadTask = storage.ref(`sermons/${url.name}`).put(url);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress })
                
            },
            (error) => {
                // error function ....
                console.log(error);
            }
        )
        Axios.post('api/v1/sermons/post',
                {
                    url: `${this.state.url.name}.mp3`,
                    elder: this.state.elder,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                })
        
    }
    componentDidMount() {
        fetch(`/api/v1/user`)
            .then(res =>
                res.json()
            )
            .then(data => {
                if (data === 'Logged Out') {
                    this.setState({ redirect: true })
                } else if (data.id != 2) {
                    this.setState({ redirect: true })
                }
            }).then(() => {
                axios.get('api/v1/sermons')
                    .then((res) => {
                        this.setState({ sermons: res.data })
                    })
            })
    }
    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect to='/login' /> : null}
                <br />
                <div>
                     <input type="file" onChange={this.handleChange} />
                </div>
                <div>
                     <input onChange={this.myChangeHandler} />
                </div>
                <button onClick={this.handleUpload}>Upload</button>
                <br />
            </div>
        )
    }
}
