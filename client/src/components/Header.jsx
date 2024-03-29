
import React from 'react';
import './head.css';
import { Link } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';

export default function Header() {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            style={{ color: "#fff8f0", textDecoration: "none" }}
        >
            {children}
        </a>
    ));
    const CustomToggle2 = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            style={{
                display: 'block',
                width: '100%',
                padding: '.25rem 1.5rem',
                clear: 'both',
                fontWeight: '400',
                color: 'rgb(88, 88, 88)',
                textAlign: 'inherit',
                whiteSpace: 'nowrap',
                backgroundColor: 'transparent'
            }}
        >
            {children}
        </a>
    ));

    return (
        <div className="contain">
            <div className="contain2">

            <div className="titles"><Link to="/" className="link1"><h1 className="header">Chattanooga Primitive Baptist Church</h1></Link></div>
            <div className="links">
                <Link to="/" className="link"><h3 className="text">Home</h3></Link>
                <Link to="/services" className="link"><h3 className="text">Services</h3></Link>
                <Dropdown className="link">
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"><h3 className="text">About Us</h3>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropMenu">
                        {/* BELIEFS */}
                        <Dropdown.Item className="dropdown-item">
                            <Link to="/beliefs" className="link2">
                                <h3 className="text2">DISTINCTIONS</h3>
                            </Link>
                        </Dropdown.Item>
                        {/* Elders */}
                        <Dropdown.Item className="dropdown-item">
                            <Link to="/elders" className="link2">
                                <h3 className="text2">LEADERS</h3>
                            </Link>
                        </Dropdown.Item>
                        {/* HISTORY */}
                        <Dropdown.Item className="dropdown-item">
                            <Link to="/history" className="link2">
                                <h3 className="text2">HISTORY</h3>
                            </Link>
                        </Dropdown.Item>
                        {/* FAQS */}
                        <Dropdown.Item className="dropdown-item">
                            <Link to="/faq" className="link2">
                                <h3 className="text2">FAQS</h3>
                            </Link>
                        </Dropdown.Item>
                        {/* LOG IN */}
                        <Dropdown.Item className="dropdown-item">
                            <Link to="/login" className="link2">
                                <h3 className="text2">LOG IN</h3>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link Link to="/contact" className="link"><Button className="contact" variant="light"><h3 className="contact2">Contact Us</h3></Button></Link>
            </div>
            <div className="drop">
                <Dropdown >
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" >MENU
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropMenu">
                        <Dropdown.Item><Link to="/services" className="link2"><h3 className="text">Services</h3></Link></Dropdown.Item>
                        <Dropdown className="link">
                            <Dropdown.Toggle as={CustomToggle2} id="dropdown-custom-components" ><h3 className="text">About Us</h3>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropMenu2">
                                <Dropdown.Item><Link to="/beliefs" className="link2"><h3 className="text2">DISTINCTIONS</h3></Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/elders" className="link2"><h3 className="text2">LEADERS</h3></Link></Dropdown.Item>
                                <Dropdown.Item className="dropdown-item">
                                    <Link to="/faq" className="link2">
                                        <h3 className="text2">FAQS</h3>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item">
                                    <Link to="/history" className="link2">
                                        <h3 className="text2">HISTORY</h3>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item">
                                    <Link to="/login" className="link2">
                                        <h3 className="text2">LOG IN</h3>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Divider />
                        <Dropdown.Item><Link to="/contact" className="link"><Button className="contact" variant="light"><h6>Contact Us</h6></Button></Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            </div>
        </div>
    )
}