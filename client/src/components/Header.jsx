
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
            style={{ color: "#fff8f0" }}
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
            style={{ display: 'block',
                width: '100%',
                padding: '.25rem 1.5rem',
                clear: 'both',
                fontWeight: '400',
                color: 'rgb(88, 88, 88)',
                textAlign: 'inherit',
                whiteSpace: 'nowrap',
                backgroundColor: 'transparent' }}
        >
            {children}
        </a>
    ));

    return (
        <div className="contain">
            <div className="titles"><Link to="/" className="link1"><h1 className="header">Chattanooga Primitive Baptist Church</h1></Link></div>
            <div className="links">
                <Link to="/" className="link"><h3 className="text">Home</h3></Link>
                <Link to="/services" className="link"><h3 className="text">Services</h3></Link>
                <Dropdown className="link">
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" ><h3 className="text">About Us</h3>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropMenu">
                        <Dropdown.Item><Link to="/" className="link2"><h3 className="text">BELIEFS</h3></Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link className="link"><Button className="contact" variant="light"><h3>Contact Us</h3></Button></Link>
            </div>
            <div className="drop">
                <Dropdown >
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" >MENU
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropMenu">
                        <Dropdown.Item><Link to="/services" className="link"><h3 className="text">Services</h3></Link></Dropdown.Item>
                        <Dropdown className="link">
                            <Dropdown.Toggle as={CustomToggle2} id="dropdown-custom-components" ><h3 className="text">About Us</h3>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropMenu2">
                                <Dropdown.Item><Link to="/" className="link2"><h3 className="text">BELIEFS</h3></Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/" className="link2"><h3 className="text">ELDERS</h3></Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Divider />
                        <Dropdown.Item><Link className="link"><Button className="contact" variant="light"><h3 className="contactText">Contact Us</h3></Button></Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}