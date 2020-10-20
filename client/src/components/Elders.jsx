import React from 'react'
import Footer from './Footer'

export default function Elders() {
    return (
        <div className="main">
            <div className="imgCont">
                <img className="topImg" src="bible2.jpg"></img>
            </div>
            <div className="mainCont3">
                <div className="textCont">
                    <h2>Current Pastors:</h2>
                    <div className="picCont">
                        <div className="pic">
                            <h3>Andrew Huffman</h3>
                            <img src='IMG_3219.jpg' id='pic'/>
                        </div>
                        <div className="pic">
                            <h3>James Hindman</h3>
                            <img src='IMG_3219.jpg' id='pic'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainCont3">
            <div className="textCont">
                    <h2>Previous Elders:</h2>
                    <h3>Joe Hildreth</h3>
                </div> 
            </div>
            <Footer />
        </div>
    )
}
