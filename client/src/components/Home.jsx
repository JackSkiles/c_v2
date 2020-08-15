import React from 'react';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import Map from './Map'
import Footer from './Footer'


export default function Home() {
    return (
        <div className="main">
            <div className="carousel">
                <Carousel>
                    <Carousel.Item className="cIItem">
                        <img className="d-block w-100" id="img" src='../church.jpg' alt="First slide"></img>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="cIItem">
                        <img
                            className="d-block w-100"
                            id="img"
                            src="../church2.jpg"
                            alt="Third slide" 
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="cIItem">
                        <img
                            className="d-block w-100"
                            id="img"
                            src="../church4.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="mapDiv">
                    <div className="homeText">
                        <h1>Services on Sunday</h1>
                        <h4>10:30 A.M.</h4>
                        <h2>“</h2>
                        <p>Come, every one that thirsteth, come ye to the waters, and he that hath no money; come ye, buy, and eat; yea, come, buy wine and milk without money and
                            without price. Wherefore do ye spend money for that which is not bread? and your labour for that which satisfieth not? Hearken diligently unto me,
                            and eat ye that which is good, and let your soul delight itself in fatness. Incline your ear, and come unto me: hear, and your soul shall live... </p>
                    </div>
                    <div className="theMap"><Map />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
