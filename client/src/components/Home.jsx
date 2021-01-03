import React from 'react';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import Map from './Map'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="main">
            <div className="carousel">
                <Carousel>
                    <Carousel.Item className="cIItem">
                        <img className="d-block w-100" id="img" src='../front.jpg' alt="First slide"></img>
                        <Carousel.Caption>
                            <Link to="/beliefs" ><h2 className="carouselItem">Our Distinctions</h2></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="cIItem">
                        <img
                            className="d-block w-100"
                            id="img"
                            src="../image_50428673.jpg"
                            alt="Third slide" 
                        />
                        <Carousel.Caption>
                            <Link to="/history" className="carouselItem"><h2>Our History</h2></Link>
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
                        <Link to="/faq" className="carouselItem"><h2>Frequently Asked Questions</h2></Link>
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
                <div className="mapDiv">
                <iframe src="https://player.twitch.tv/?channel=chattanoogapbc&parent=https://c-v2.herokuapp.com/" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}
