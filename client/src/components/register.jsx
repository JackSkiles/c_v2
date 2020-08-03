import React, { Component } from 'react'
import Axios from 'axios';
import Button from 'react-bootstrap/Button'

export default class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ""
        }


    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        Axios.post('/api/v1/',
            {
                password: this.state.password,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            })
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="RegisterPage" style={{fontFamily: 'Montserrat'}}>

                <h3>Sign Up</h3>
                {/*  start of form for user registration   */}

                <form method="POST" onSubmit={this.handleFormSubmit} style={{ width: '30%', margin: '40px auto' }}>

                   
                    <div className="form-group">
                        <label >
                            Password:
                        <input className="form-control" placeholder="Enter password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </label> <br />
                    </div>

                    <Button className="btn btn-primary btn-block" onSubmit={this.handleFormSubmit} type="submit"> Create Password</Button>
                </form>
                <p className="forgot-password text-right" style={{ padding: '20px'}}>
                </p>
                {/* end of registration form */}
            </div >
        );
    }
}




