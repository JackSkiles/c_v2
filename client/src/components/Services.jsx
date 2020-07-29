import React from 'react';
import './pages.css';
import Footer from  './Footer'


export default function Services() {
    return (
        <div className="main">
            <div className="imgCont">
                <img className="topImg" src="sports.jpg"></img>
            </div>
            <div className="mainCont">
                <div className="textCont">
                    <h2>Our Practices:</h2>
                        <p>We understand how intimidating your first Sunday can be. We've all been there! We want you to know that you are welcome here.
                        No matter who you are or where you've come from, we'd love for you to make yourself at home with us.</p>
                </div>
                <div className="textCont">
                    <h2>“</h2>
                        <p>All that the Father gives me will come to me, and whoever comes to me I will never cast out.</p>
                        <p>— Jesus of Nazareth (John 6:37)</p>
                </div>
                <div className="textCont2">
                    <h4>SERVICE SCHEDULE: </h4>
                        <p>We have one service every Sunday morning at 10:30 AM that lasts approximately 90 minutes. We begin by gathering together to catch up and prepare for worship; there are no formal greeters or bulletins, but expect a glad handshake! One of the men will begin singing to call everyone to worship, and we'll spend a time singing hymns.
                           After singing there will be a time for announcements, thanksgiving, prayer requests, and prayer. Don't worry, you won't be called on or expected to speak - unless you want to!
                           Prayer is followed by one or more messages, which are normally about 30 minutes long altogether. After the main message, we sing another hymn and adjourn. 
                           On the second and fourth Sundays of the month, the service is followed by lunch downstairs - we'd love for you to join us, our treat!</p>
                </div>
                <div className="textCont2">
                    <h4>WHAT SHOULD I WEAR? </h4>
                        <p>You'll find some members of our congregation wearing suits and ties, other members wearing jeans and t-shirts, and just about everything in between. Please feel free to come as you are.</p>
                </div>
                <div className="textCont2">
                    <h4>WHERE DO KIDS GO DURING THE SERVICE? </h4>
                        <p>One glance around our gathering will prove - we love children! We're a multi-generational church and we love when families worship and learn and pray together. We have no separate children's programs - your children are welcome throughout the service.
                           And don't worry if they wriggle or squawk - they'll fit right in.</p>
                </div>
            </div>
        </div>

    )
}

