import React from 'react';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import Map from './Map'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="main" >
            <div className="mainContainer" >
                <div className="carousel">
                    <Carousel>
                        <Carousel.Item className="cIItem">
                            <img className="d-block w-100" id="img" src='../front.jpg' alt="First slide"></img>
                            <Carousel.Caption>
                                <Link to="/beliefs" ><h1 className="carouselItem">Our Distinctions</h1></Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="cIItem">
                            <img
                                className="d-block w-100"
                                id="img"
                                src="../image_50428673.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <Link to="/history"><h1 className="carouselItem">Our History</h1></Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="cIItem">
                            <img
                                className="d-block w-100"
                                id="img"
                                src="../sign.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <Link to="/faq"><h1 className="carouselItem">Frequently Asked Questions</h1></Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="mapDiv" alt="Google Maps">
                    <div className="homeText">
                        <h2>Services on Sunday</h2>
                        <h4>10:30 A.M.</h4>
                        <h2>“</h2>
                        <p className="homeText2">Come, every one that thirsteth, come ye to the waters, and he that hath no money; come ye, buy, and eat; yea, come, buy wine and milk without money and
                        without price. Wherefore do ye spend money for that which is not bread? and your labour for that which satisfieth not? Hearken diligently unto me,
                            and eat ye that which is good, and let your soul delight itself in fatness. Incline your ear, and come unto me: hear, and your soul shall live... </p>
                    </div>
                    <div className="theMap"><Map />
                    </div>
                </div>
            </div>

        </div>
    )
}
