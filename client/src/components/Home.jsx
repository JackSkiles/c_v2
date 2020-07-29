import React from 'react';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import Map from './Map'


export default function Home() {
    return (
        <div className="main">
            <div className="carousel">
                <Carousel>
                    <Carousel.Item className="cIItem">
                        <img className="d-block w-100" id="img" src='../OnePiece.jpg' alt="First slide"></img>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="cIItem">
                        <img
                            className="d-block w-100"
                            id="img"
                            src="../chapter_274.png"
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
                            src="../chapter_357.png"
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
                            src="../chapter_391.png"
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
                            src="../chapter_439.png"
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
                            src="../chapter_503.png"
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
                            src="../chapter_532.png"
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
                            src="../chapter_685.png"
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
                            src="../chapter_699.png"
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
                            src="../swamp.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
        </div>
    )
}
