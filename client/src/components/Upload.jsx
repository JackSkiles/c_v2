import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { storage } from '../firebase';
import './login.css';
import { Button } from 'react-bootstrap'
import Axios from 'axios';
import './pages.css';

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            url: null,
            elder: '',
            progress: 0,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            id: 1,
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const url = e.target.files[0];
            this.setState(() => ({ url }));
        }
    }

    myChangeHandler = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
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
        Axios.post('api/v1/sermons',
            {
                url: this.state.url.name,
                elder: this.state.elder,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            })

    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        Axios.post('/api/v1/directory',
            {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            })
    }
    handleFormSubmit2 = (e) => {
        e.preventDefault();
        Axios.delete('/api/v1/directory/delete',
            {
                data: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                },
            })
    }
    handleFormSubmit3 = (e) => {
        e.preventDefault();
        Axios.delete('api/v1/sermons/delete',
            {
                data: {
                    id: this.state.id,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
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
            <div className="main">
                <div className="mainContainer">

                    {this.state.redirect ? <Redirect to='/login' /> : null}
                    <div className="mainCont">
                        <br />
                        <div className="textCont3">
                            <input type="file" onChange={this.handleChange} />
                        </div>
                        <div className="textCont3">
                            <input name="elder" onChange={this.myChangeHandler} />
                        </div>
                        <div className="textCont3">
                            <Button onClick={this.handleUpload}>Upload</Button>
                        </div>
                        <div className="textCont3">
                            <input name="firstName" onChange={this.myChangeHandler} defaultValue="First Name"></input>
                            <input name="lastName" onChange={this.myChangeHandler} defaultValue="Last Name"></input>
                            <input name="email" onChange={this.myChangeHandler} defaultValue="Email"></input>
                            <input name="phone" onChange={this.myChangeHandler} defaultValue="Phone"></input>
                            <input name="address" onChange={this.myChangeHandler} defaultValue="Address"></input>
                            <Button onClick={this.handleFormSubmit}>Add Member</Button>
                        </div>
                        <div className="textCont3">
                            <input name="firstName" onChange={this.myChangeHandler} defaultValue="First Name"></input>
                            <input name="lastName" onChange={this.myChangeHandler} defaultValue="Last Name"></input>
                            <Button onClick={this.handleFormSubmit2}>Delete member</Button>
                        </div>
                        <div className="textCont3">
                            <input name="id" onChange={this.myChangeHandler} defaultValue="Sermon number"/>
                            <Button onClick={this.handleFormSubmit3}>Delete Sermon</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
