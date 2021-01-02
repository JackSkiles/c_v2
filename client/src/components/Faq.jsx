import React, { Component } from 'react'
import Footer from './Footer'
import { Form, Button } from 'react-bootstrap'

export default class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: ["hide", "hide", "hide", "hide",
                    "hide", "hide", "hide", "hide", "hide",
                    "hide", "hide", "hide", "hide", "hide",
                    "hide", "hide", "hide", "hide"]
        }
    }
    handleChange = (e) => {
        const { name } = e.target;
        const { hidden } = this.state;
        const value = parseInt(name);
        console.log(name);
        if(this.state.hidden[parseInt(name)] == "show"){
            hidden[parseInt(name)] = "hide";
        } else{
            hidden[parseInt(name)] = "show";
        }
        this.setState({
            hidden,
        })
    }
        render() {
            return(
        <div className="main">
            <div className="imgCont">
                <img className="topImg" src="bible.jpg"></img>
            </div>
            <div className="mainCont">
                <div className="textCont">
                    <h2>Frequently Asked Questions:</h2>
                    <button name="0" onClick={this.handleChange}>Q: What should I wear?</button>
                    <p className={this.state.hidden[0]}></p>
                    <h5>Q: What time are services?</h5>
                    <h5>Q: How do you practice communion?</h5>
                    <h5>Q: What am I expected to participate in?</h5>
                </div>
                <div className="textCont">
                    <h2>“</h2>
                    <p>
                    For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.</p>
                    <p>— Ephesians 2:8-9</p>
                </div>
            </div>
            <Footer />
        </div>
            )
        }
}
