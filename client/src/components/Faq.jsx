import React from 'react'
import Footer from './Footer'

export default function Faq() {
    return (
        <div className="main">
            <div className="imgCont">
                <img className="topImg" src="bible.jpg"></img>
            </div>
            <div className="mainCont">
                <div className="textCont">
                    <h2>Frequently Asked Questions:</h2>
                    <h5>Q: What should I wear?</h5>
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
