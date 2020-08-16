import React from 'react'
import Footer from './Footer'

export default function Elders() {
    return (
        <div className="main">
            <div className="imgCont">
                <img className="topImg" src="bible2.jpg"></img>
            </div>
            <div className="mainCont">
                <div className="textCont">
                    <h2>Current Pastors:</h2>
                    <h3>Andrew Huffman</h3>
                    <h3>James Hindman</h3>
                </div>
                <div className="textCont">
                    <h2>Previous Elders:</h2>
                    <h3>Joe Hildreth</h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}